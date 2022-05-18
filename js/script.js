//------ FUNCTION ------//
function iconInfo (icon) {
    return `
        <div class="box">
            <i class="${icon.prefix}solid ${icon.prefix}${icon.name} ${icon.color}"></i>
            <span class="title">${icon.name}</span>
        </div>
    `;
};
function selectInfo (icon) {
    return `
        <div class="select-box">
            <i class="${icon.prefix}solid ${icon.prefix}${icon.name} ${icon.color}"></i>
            <span class="title">${icon.name}</span>
        </div>
    `;
};

//------ MAIN ------//
const icons = [
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	}
];

const iconBox = document.querySelector(".box");
const iconImage = document.querySelector(".box i");

for (let i = 0 ; i < icons.length ; i++) {
    const icon =  iconInfo(icons[i]);
    iconBox.innerHTML += icon;
}
console.log(iconBox);

const selectBox = document.querySelector(".select-box");
const selectImage = document.querySelector(".select-box i");
const iconType = document.querySelector("#iconType");
iconType.addEventListener("change", 
    function () {
        const filteredIcons = icons.filter(
            function (selectIcon) {
                return selectIcon.type === iconType.value 
            }
        );
        console.log(filteredIcons);
        iconBox.style.display = "none";
        for (let i = 0 ; i < filteredIcons.length ; i++) {
            const icon =  iconInfo(filteredIcons[i]);
            selectBox.innerHTML += icon;
            selectBox.style.display = "block";
        }
        console.log(selectBox);
    }    
);