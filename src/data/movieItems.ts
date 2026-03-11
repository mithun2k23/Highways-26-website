export type MovieItem = {
    id: string
    orientation: 'horizontal' | 'vertical'
    top: number   // percentage from top of container
    left: number  // px offset from left
    image: string
    themeColor?: string
}

export const MOVIE_ITEMS: MovieItem[] = [
    { id: '01', orientation: 'horizontal', top: 52, left: 100, image: '/assets/glimpses/Highways 24/1.JPG' },
    { id: '02', orientation: 'horizontal', top: 8, left: 260, image: '/assets/glimpses/Highways 23/2.webp' },
    { id: '03', orientation: 'horizontal', top: 48, left: 620, image: '/assets/glimpses/Highways 24/3.JPG' },
    { id: '04', orientation: 'vertical', top: 2, left: 900, image: '/assets/glimpses/Highways 23/4.webp' },
    { id: '05', orientation: 'horizontal', top: 30, left: 1080, image: '/assets/glimpses/Highways 24/5.JPG' },
    { id: '06', orientation: 'vertical', top: 5, left: 1550, image: '/assets/glimpses/Highways 23/6.webp' },
    { id: '07', orientation: 'horizontal', top: 50, left: 1700, image: '/assets/glimpses/Highways 24/7.JPG' },
    { id: '08', orientation: 'horizontal', top: 25, left: 2080, image: '/assets/glimpses/Highways 23/8.png' },
    { id: '09', orientation: 'vertical', top: 42, left: 2380, image: '/assets/glimpses/Highways 23/9.png' },
    { id: '10', orientation: 'horizontal', top: 8, left: 2560, image: '/assets/glimpses/Highways 23/10.png' },
    { id: '11', orientation: 'horizontal', top: 50, left: 2920, image: '/assets/glimpses/Highways 23/11.png' },
    { id: '12', orientation: 'vertical', top: 4, left: 3260, image: '/assets/glimpses/Highways 23/12.png' },
    { id: '13', orientation: 'horizontal', top: 35, left: 3425, image: '/assets/glimpses/Highways 23/13.png' },
    { id: '14', orientation: 'horizontal', top: 5, left: 3820, image: '/assets/glimpses/Highways 23/14.png' },
    { id: '15', orientation: 'vertical', top: 38, left: 4080, image: '/assets/glimpses/Highways 23/15.png' },
    { id: '16', orientation: 'horizontal', top: 8, left: 4320, image: '/assets/glimpses/Highways 23/16.png' },
    { id: '17', orientation: 'horizontal', top: 52, left: 4700, image: '/assets/glimpses/Highways 23/17.png' },
    { id: '18', orientation: 'vertical', top: 2, left: 5050, image: '/assets/glimpses/Highways 23/18.png' },
    { id: '19', orientation: 'horizontal', top: 43, left: 5220, image: '/assets/glimpses/Highways 23/19.png' },
    { id: '20', orientation: 'horizontal', top: 20, left: 5620, image: '/assets/glimpses/Highways 25/20.png' },
    { id: '21', orientation: 'vertical', top: 55, left: 5950, image: '/assets/glimpses/Highways 25/21.png' },
    { id: '22', orientation: 'horizontal', top: 10, left: 6250, image: '/assets/glimpses/Highways 25/22.png' },
    { id: '23', orientation: 'horizontal', top: 40, left: 6650, image: '/assets/glimpses/Highways 25/23.png' },
    { id: '24', orientation: 'vertical', top: 5, left: 7000, image: '/assets/glimpses/Highways 25/24.png' },
    { id: '25', orientation: 'horizontal', top: 52, left: 7300, image: '/assets/glimpses/Highways 25/25.png' },
    { id: '26', orientation: 'horizontal', top: 15, left: 7700, image: '/assets/glimpses/Highways 25/26.png' },
    { id: '27', orientation: 'vertical', top: 35, left: 8100, image: '/assets/glimpses/Highways 25/27.png' },
    { id: '28', orientation: 'horizontal', top: 8, left: 8400, image: '/assets/glimpses/Highways 25/28.png' },
    { id: '29', orientation: 'horizontal', top: 50, left: 8800, image: '/assets/glimpses/Highways 25/29.png' },
    { id: '30', orientation: 'vertical', top: 2, left: 9150, image: '/assets/glimpses/Highways 25/30.png' },
    { id: '31', orientation: 'horizontal', top: 45, left: 9450, image: '/assets/glimpses/Highways 25/31.png' },
    { id: '32', orientation: 'horizontal', top: 12, left: 9850, image: '/assets/glimpses/Highways 25/32.png' },
    { id: '33', orientation: 'horizontal', top: 35, left: 10250, image: '/assets/glimpses/Highways 25/33.png' },
]