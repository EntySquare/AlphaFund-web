<template>
  <div class="pdf-viewer">
    <div @click="goBack"><svg t="1737887841293" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
        p-id="1457" width="32" height="32">
        <path
          d="M210.4 511.1 641.3 80.2c22.8-22.8 59.8-22.8 82.6 0 22.8 22.8 22.8 59.8 0 82.6L375.7 511.1l348.3 348.3c22.8 22.8 22.8 59.8 0 82.6-22.8 22.8-59.8 22.8-82.6 0L210.4 511.1 210.4 511.1zM210.4 511.1"
          p-id="1458"></path>
      </svg></div>
    <div class="cont">
      <el-button style="margin-bottom: 20px;" @click="downloadPDF">Download pdf</el-button>
      <div ref="pdfContainer" class="pdf-container"></div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import * as pdfjsLib from 'pdfjs-dist'
import { useRoute } from 'vue-router'

const goBack = () => {
  window.history.back(); // 回退到上一页
};

// 设置 PDF.js workerSrc
pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.10.377/pdf.worker.min.js'

const route = useRoute()

// 从查询参数中获取参数
const pdfUrl = ref('')

const pdfContainer = ref<HTMLDivElement | null>(null)

let pdfDoc: any = null

// 渲染所有页面并拼接成长图
const renderAllPages = async () => {
  try {
    if (pdfContainer.value) {
      const pdf = await pdfjsLib.getDocument(pdfUrl.value).promise
      pdfDoc = pdf

      // 渲染所有页面，并将它们添加到容器中
      for (let pageNum = 1; pageNum <= pdf.numPages; pageNum++) {
        const page = await pdfDoc.getPage(pageNum)
        // 假设我们有 PDF.js 的 `page` 对象
        const viewport1 = page.getViewport({ scale: 1 });

        // 获取当前窗口宽度
        const windowWidth = window.innerWidth;

        // 计算缩放比例，假设原始页面宽度为 `viewport.width`
        const scale = windowWidth / viewport1.width / 1.4;
        const viewport = page.getViewport({ scale: scale });

        const canvas = document.createElement('canvas')
        canvas.width = viewport.width
        canvas.height = viewport.height

        const context = canvas.getContext('2d')
        if (context) {
          await page.render({
            canvasContext: context,
            viewport: viewport,
          }).promise
        }

        // 将渲染的 canvas 添加到容器中
        pdfContainer.value.appendChild(canvas)
      }
    }
  } catch (error) {
    console.error("Error rendering PDF: ", error)
  }
}
// 下载 PDF 文件
const downloadPDF = async () => {
  try {
    if (pdfDoc) {
      const pdfBytes = await pdfDoc.getData()
      const blob = new Blob([pdfBytes], { type: 'application/pdf' })
      const url = URL.createObjectURL(blob)

      // 创建下载链接并触发点击事件
      const a = document.createElement('a')
      a.href = url
      a.download = 'document.pdf'  // 下载的文件名
      a.click()

      // 清理 URL 对象
      URL.revokeObjectURL(url)
    }
  } catch (error) {
    console.error("Error downloading PDF: ", error)
  }
}


onMounted(() => {
  pdfUrl.value = route.query.pdfUrl as string // 获取传递的参数
  console.log(pdfUrl);
  window.scrollTo(0, 0)
  renderAllPages()
})
</script>

<style scoped>
.pdf-viewer {
  padding: 60px;
  width: 100vw;
  /* height: 1000px; */

  /* overflow: auto; */
}

.cont {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
}

.pdf-container {
  display: flex;
  flex-direction: column;
  /* 使所有页面垂直排列 */
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
  /* 页面之间的间距 */
}

canvas {
  width: 100%;
  margin-bottom: 20px;
  /* 页与页之间的间距 */
}
</style>
