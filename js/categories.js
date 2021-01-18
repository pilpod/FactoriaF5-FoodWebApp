

export class Categories {

    
    MoveNavCategories()
    {
        let slider = document.getElementById('categoriesSlider');
        let isDown = false;
        let startX;
        let scrollLeft;

        slider.addEventListener('mousedown', (e) => {
            isDown = true;
            slider.classList.add('active');
            startX = e.pageX - slider.offsetLeft;
            scrollLeft = slider.scrollLeft;
            console.log(startX);
            console.log(scrollLeft);
        });

        slider.addEventListener('mouseleave', () => {
            isDown = false;
            slider.classList.remove('active');
        });

        slider.addEventListener('mouseup', () => {
            isDown = false;
            slider.classList.remove('active');
        });

        slider.addEventListener('mousemove', (e) => {
            if(!isDown) return;
            e.preventDefault();
            const xAxis = e.pageX - slider.scrollLeft;
            const moving = (xAxis - startX) * 2;
            slider.scrollLeft = scrollLeft - moving;
        });

    }






}