export interface NewsItem {
    id: string
    title: string
    image: string
    date: string
    category: string
}

export const newsItems: NewsItem[] = [
    {
        id: '1',
        title: 'Hình ảnh lớp học tiếng nhật sakae thủ đức',
        image: 'https://sakae-online.net/media/posts/600x450x1-z1459873856147-2aa12a71e914f826262a1915193ab43c.jpg',
        date: '28 Apr 2020',
        category: 'TIN TỨC'
    },
    {
        id: '2',
        title: 'Cơ sở vật chất',
        image: 'https://sakae-online.net/media/posts/600x450x1-23805672-1942245372693319-2067295964-n.jpg',
        date: '28 Apr 2020',
        category: 'TIN TỨC'
    },
    {
        id: '3',
        title: 'Học tiếng nhật ở thủ đức - lớp học thực tế',
        image: 'https://sakae-online.net/media/posts/600x450x1-8dc67eae5940bf1ee651.jpg',
        date: '28 Apr 2020',
        category: 'TIN TỨC'
    },
    {
        id: '4',
        title: 'Giờ học ngoại khóa',
        image: 'https://sakae-online.net/media/posts/600x450x1-c-png-7d219b7b-31bf-4aba-913b-c7835b8613cb.png',
        date: '28 Apr 2020',
        category: 'TIN TỨC'
    }
]