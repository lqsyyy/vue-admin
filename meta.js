module.exports = {
  "prompts": {
    "name": {
      "type": "string",
      "required": true,
      "message": "项目名称",
      "default": "zds"
    },
    "version": {
      "type": "string",
      "required": true,
      "message": "你项目的版本号",
      "default": "1.0.0"
    },
    "description": {
      "type": "string",
      "required": false,
      "message": "给你的项目加点描述",
      "default": "试用zds结构"
    },
    "author": {
      "type": "string",
      "message": "作者"
    },
  "completeMessage": "请按以下步骤启动，耐心等待:\n\n  {{^inPlace}}cd {{destDirName}}\n  {{/inPlace}}npm i\n  npm run dev 或者 npm start"
  }
}