fetch("works.csv")
    .then(function(response){
        return response.text();
    })
    .then(function(data) {
        var rows = data.trim().split("\n");
        var headers = rows[0].split(",");
        var works = rows.slice(1).map(function(row){
    
        var values = row.split(",");
        var work = {};
        headers.forEach(function(header, index){
            work[header] = values[index];
            });
            return work;
        });
        var grid = document.getElementById("works-grid");

        var categorySelect = document.getElementById("category");

        var sortSelect = document.getElementById("sort");

        displayWorks();

        categorySelect.addEventListener("change", function(){
            displayWorks();
        });

        sortSelect.addEventListener("change", function(){
            displayWorks();
        });

         works.forEach(function(work) {
            var card = document.createElement("article");
            card.className = "work-card";
            card.innerHTML = 
                '<a href="' + work.link + '">' +
                    '<img src="' + work.image + '" alt="' + work.title + '">' +
                    '<h4>' + work.title + '</h4>' +
                    '<p>' + work.description + '</p>' +
                '</a>';
            grid.appendChild(card);

            var categories = [];

            works.forEach(function(work){
            if(!categories.includes(work.category)){
                categories.push(work.category);
            }
        });

        categories.forEach(function(category){
            var option = document.createElement("option");
            option.value = category;
            option.textContent = category;
            categorySelect.appendChild(option);
        });

        function displayWorks() {
            var selectedCategory = categorySelect.value;
            var sortType = sortSelect.value;
            var filteredWorks = works.slice();

            if (selectedCategory !== "all"){
                filteredWorks = filteredWorks.filter(function(work){
                    return work.category === selectedCategory;
                });
            }

            if (sortType === "new") {
                filteredWorks.sort(function(a, b){
                    return Number(b.ear) - Number(a.year);
                });
            }
            else if (sortType === "old") {
                filteredWorks.sort(function(a, b){
                    return Number(a.year) - Number(b.year);
                });
            }
            else if (sortType === "title") {
                filteredWorks.sort(function(a, b){
                    return a.title.localeCompare(b.title, "ja");
                });
            }
             grid.innerHTML = "";
        filteredWorks.forEach(function(work){
            var card = document.createElement("article");
            card.className = "work-card";
            card.innerHTML =
                '<a href="' + work.link + '">' +
                    '<img src="' + work.image + '" alt="' + work.title + '">' +
                    '<div class="work-info">' +
                        '<p class="work-category">' + work.category + '</p>' +
                        '<h4>' + work.title + '</h4>' +
                        '<p>' + work.description + '</p>' +
                        '<p class="work-year">' + work.year + '</p>' +
                    '</div>' +
                '</a>';
            grid.appendchild(card);
        })
                };
            })
    })


       



