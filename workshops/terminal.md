# Workshop #1: Terminal

## 1. เริ่มต้นใช้งาน Codex

### `/init` - สร้าง Agent.md
```
/init
```
สร้างไฟล์ AGENTS.md ในโปรเจค เพื่อกำหนด instructions ให้ Codex

### `/model` - สลับ Model
```
/model
```
เปลี่ยน model ระหว่าง Sonnet, Haiku, Opus

## 2. ทดลอง Prompt

### เพิ่ม Feature
```
Add submit on Enter key to the todo input
```

### แก้ Bug
```
Fix the bug where empty todos can be added
```

### ตกแต่ง UI
```
Change the todo list background to light gray
```

## 3. จัดการ Chat Sessions

### `/new` - สร้าง Chat ใหม่
```
/new
```
เริ่ม chat session ใหม่ ประหยัด context

### `/resume` - กลับไป Session เก่า
```
/resume
```
เลือก session ที่ทำงานค่างไว้

### `/compact` - สรุป Chat
```
/compact
```
ให้ Codex สรุปการสนทนาเพื่อลด context

## 4. Mention Files

### `@` - อ้างอิงไฟล์
```
@app/routes/todo.tsx
Add a completed state to this component
```

หรือพิมพ์ `/mention` แล้วเลือกไฟล์

## 5. Undo Changes

### `/undo` - ยกเลิกการเปลี่ยนแปลง
```
/undo
```
ย้อนกลับการแก้ไขล่าสุด

## 6. Custom Slash Commands

### สร้าง Command
```bash
mkdir -p ~/.codex/prompts
echo "Review code and suggest improvements" > ~/.codex/prompts/review.md
```

### ใช้งาน Command
```
/prompt:review
```

## 7. ค้นหาข้อมูลจาก Internet

### เปิดใช้งาน Web Search

**วิธีที่ 1:** ผ่าน command
```bash
codex --search "ร้านกาแฟในกรุงเทพ"
```

**วิธีที่ 2:** ตั้งค่าใน `~/.codex/config.toml`
```toml
[features]
web_search_request = true
```

### ตัวอย่างการใช้งาน
```
Search for the latest React 19 features
```

```
หาข่าวเกี่ยวกับ AI ล่าสุด
```

## 8. ติดตั้ง MCP Server

### ติดตั้งผ่าน Command
```bash
codex mcp add playwright npx "@playwright/mcp@latest"
```

### ติดตั้งผ่าน Config File

แก้ไข `~/.codex/config.toml`:
```toml
[mcp_servers.playwright]
command = "npx"
args = ["@playwright/mcp@latest"]
```