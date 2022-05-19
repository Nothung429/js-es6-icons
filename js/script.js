//------ FUNCTION ------//
function iconInfo (icons, container) {
    container.innerHTML = "";
    icons.forEach(element => {
        const icon = `
            <div class="box">
                <i class="${element.prefix}solid ${element.prefix}${element.name} ${element.color}"></i>
                <span class="title">${element.name}</span>
            </div>
        `;
        container.innerHTML += icon;
    });
};

//------ MAIN ------//
const iconBox = document.querySelector(".container");
iconInfo(icons, iconBox);

const iconType = document.querySelector(".icon-type");
iconType.addEventListener("change", 
    function () {
        const iconValue = iconType.value;
        const iconSelect = icons.filter(
            function (family) {
                return family.type === iconValue;
            }
        );
        console.log(iconSelect);
        iconInfo(iconSelect, iconBox);
    }
);