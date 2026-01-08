const fs = require('fs');
const path = require('path');

// Папка с изображениями
const imagesDir = path.join(__dirname, 'assets/images/site');
const outputFile = path.join(__dirname, 'assets/js/images-list.json');

// Расширения изображений
const imageExtensions = ['.png', '.jpg', '.jpeg', '.webp', '.gif', '.svg'];

function getAllImages(folderPath, folderName) {
    const images = [];
    
    if (!fs.existsSync(folderPath)) {
        return images;
    }
    
    const items = fs.readdirSync(folderPath, { withFileTypes: true });
    
    // Сортируем файлы по имени
    items.sort((a, b) => {
        if (a.isDirectory() && !b.isDirectory()) return -1;
        if (!a.isDirectory() && b.isDirectory()) return 1;
        return a.name.localeCompare(b.name);
    });
    
    for (const item of items) {
        if (!item.isDirectory()) {
            // Проверяем, является ли файл изображением
            const ext = path.extname(item.name).toLowerCase();
            if (imageExtensions.includes(ext)) {
                images.push(`assets/images/site/${folderName}/${item.name}`);
            }
        }
    }
    
    return images;
}

// Генерируем структуру данных для previewData
function generateImagesList() {
    const result = {};
    
    if (!fs.existsSync(imagesDir)) {
        console.error(`Папка ${imagesDir} не найдена!`);
        return;
    }
    
    const folders = fs.readdirSync(imagesDir, { withFileTypes: true })
        .filter(item => item.isDirectory())
        .map(item => item.name);
    
    for (const folder of folders) {
        const folderPath = path.join(imagesDir, folder);
        const images = getAllImages(folderPath, folder);
        
        if (images.length > 0) {
            result[folder] = images;
        }
    }
    
    // Сохраняем в JSON файл
    fs.writeFileSync(outputFile, JSON.stringify(result, null, 2), 'utf8');
    console.log(`✅ Список изображений сохранен в ${outputFile}`);
    console.log(`📁 Найдено папок: ${Object.keys(result).length}`);
    for (const [folder, images] of Object.entries(result)) {
        console.log(`   - ${folder}: ${images.length} изображений`);
    }
}

generateImagesList();
