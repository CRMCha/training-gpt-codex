# Workshop #2: IDE Extension

## 1. สลับโหมดการใช้งาน

### Chat Mode
```
Click mode button → Select "Chat"
```
โหมดสนทนาพื้นฐาน

### Agent Mode
```
Click mode button → Select "Agent"
```
ให้ AI ทำงานอัตโนมัติ

### Agent (Full Access)
```
Click mode button → Select "Agent (full access)"
```
ให้ AI เข้าถึงและรันได้ทั้งหมด

## 2. เปลี่ยน Model

### สลับ Model
```
Click model selector
```
เลือก Model ที่ต้องการ:
- **GPT-5.1-Codex-Max**
- **GPT-5.1-Codex**
- **GPT-5.2**
- **GPT-5.1**
- **GPT-5.1-Codex-Mini**

### ปรับระดับ Reasoning
```
Click reasoning selector
```
- **Low** - เร็ว คิดน้อย
- **Medium** - สมดุล (แนะนำ)
- **High** - คิดลึก
- **Extra high** - วิเคราะห์สูงสุด

## 3. ใช้งานรูปภาพ

### Paste รูปภาพ
```
Copy image → Paste in chat
"Style this button like the image"
```

### ค้นหารูปจาก Internet
```
Find a modern login page design and create similar UI
```

### แก้ไข UI จากรูป
```
[Paste screenshot]
Make the navbar match this design
```

## 4. Prompt Ideas

### Debug
```
Debug why the form is not submitting
```
ให้ AI หาและแก้ bug

### Style Changes
```
Make this card component more modern
```

### Create Component
```
Create a loading spinner component
```

### Refactor
```
Refactor this code to be more readable
```

## 5. Settings UI

### เปิด Settings
```
Cmd/Ctrl + , → Search "Codex"
```

### ตั้งค่าที่น่าสนใจ
- **Auto-save** - บันทึกอัตโนมัติ
- **Theme** - ธีมสี
- **Font size** - ขนาดตัวอักษร
- **Keybindings** - ปุ่มลัด

## 6. เทคนิคการใช้งาน

### อ้างอิงหลายไฟล์
```
@components/Button.tsx @styles/theme.css
Update button to use theme colors
```

### แก้หลายไฟล์พร้อมกัน
```
Update all error messages to be more user-friendly
```

### ทดลองเปลี่ยน Model + Reasoning
```
Task: Optimize database query
1. Try GPT-5.1-Codex-Mini + Low
2. Compare with GPT-5.1-Codex + High
```

## 7. Tips

- IDE extension ทำเหมือน Terminal แต่มี UI สะดวกกว่า
- ใช้ paste รูปเพื่ออธิบายสิ่งที่ต้องการ
- เปลี่ยน Model ตามงาน: debug ใช้ Mini, สร้างใหม่ใช้ Max
- Reasoning Medium เหมาะกับงานส่วนใหญ่
