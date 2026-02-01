# Liuren Divination System

<div align="right">
  <button onclick="showEnglish()">🇺🇸 English</button>
  <button onclick="showChinese()">🇨🇳 中文</button>
</div>

<div id="english-content">

## 🌐 Live Demo
**[Click to Experience](https://laddzhao.github.io/liuren-divination-system/)**

## 📖 Introduction
Liuren Divination (小六壬) is a traditional Chinese divination method that uses six fixed positions on the palm to analyze situations based on time and intuition. This project provides a modern web implementation of this ancient system.

## ✨ Features

### 🔮 Divination Calculator
- **Three Calculation Methods:**
  - **By Time** - Manual lunar date selection
  - **Current Time** - Automatic real-time conversion
  - **Random** - Randomized numbers for divination

### 📚 Learning Center
- **Complete Tutorial** - Step-by-step guide to Liuren basics
- **Six Palm Positions** - Detailed explanations of each position
- **Traditional Concepts** - Cultural and spiritual context
- **Weather Lore** - Traditional weather observation poems

### 🎨 User Interface
- **Bilingual Support** - English/Chinese interface
- **Responsive Design** - Works on desktop and mobile
- **Traditional Aesthetics** - Chinese-inspired color scheme
- **Interactive Elements** - Clickable palm chart and accordion sections

</div>

<div id="chinese-content" style="display: none;">

## 🌐 在线演示
**[点击体验](https://laddzhao.github.io/liuren-divination-system/)**

## 📖 简介
小六壬是中国传统占卜方法，通过掌上六个固定位置，基于时间和直觉分析事态。本项目提供了一个现代化的网络实现。

## ✨ 功能特点

### 🔮 占卜计算器
- **三种推算方式:**
  - **时间推算** - 手动选择农历日期
  - **当前时间** - 自动实时转换
  - **随机取数** - 随机生成数字进行占卜

### 📚 学习中心
- **完整教程** - 小六壬基础知识逐步指导
- **六掌诀详解** - 每个位置详细解释
- **传统概念** - 文化和精神背景
- **天气谚语** - 传统天气观察诗句

### 🎨 用户界面
- **双语支持** - 英文/中文界面
- **响应式设计** - 桌面和移动端都适用
- **传统美学** - 中国风配色方案
- **交互元素** - 可点击的掌诀图和折叠部分

</div>

<script>
function showEnglish() {
  document.getElementById('english-content').style.display = 'block';
  document.getElementById('chinese-content').style.display = 'none';
  updateButtonStyle('english');
}

function showChinese() {
  document.getElementById('english-content').style.display = 'none';
  document.getElementById('chinese-content').style.display = 'block';
  updateButtonStyle('chinese');
}

function updateButtonStyle(lang) {
  const buttons = document.querySelectorAll('div[align="right"] button');
  buttons.forEach(btn => {
    btn.style.fontWeight = 'normal';
    btn.style.backgroundColor = '#f1f1f1';
    btn.style.color = '#333';
  });
  
  if (lang === 'english') {
    buttons[0].style.fontWeight = 'bold';
    buttons[0].style.backgroundColor = '#0366d6';
    buttons[0].style.color = 'white';
  } else {
    buttons[1].style.fontWeight = 'bold';
    buttons[1].style.backgroundColor = '#0366d6';
    buttons[1].style.color = 'white';
  }
}

// 默认显示英文
window.onload = function() {
  showEnglish();
}
</script>

<style>
div[align="right"] {
  margin-bottom: 20px;
}

div[align="right"] button {
  padding: 8px 16px;
  margin: 0 5px;
  border: 1px solid #ddd;
  border-radius: 4px;
  background-color: #f1f1f1;
  color: #333;
  cursor: pointer;
  font-size: 14px;
  transition: all 0.3s;
}

div[align="right"] button:hover {
  background-color: #e1e1e1;
}

#english-content, #chinese-content {
  animation: fadeIn 0.5s;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
</style>
