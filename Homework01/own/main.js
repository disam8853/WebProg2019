var cnt = 0,
    state = 0;
item_node = { text: "", isCompelete: false };
var todo_items = [];

const input = document.getElementsByClassName("todo-app__input")[0];
input.addEventListener("keyup", function(event) {
    if (event.keyCode === 13 && event.target.value !== '') {
        // console.log(cnt);
        event.preventDefault();

        var ul = document.getElementById("todo-list");
        const newItem = createNewItem(event.target.value);

        ul.appendChild(newItem);

        todo_items.push({ text: event.target.value, isCompelete: false });
        // console.log(todo_items);
        cnt++;
        this.value = "";
        updateCnt();
    }
});

function createNewItem(str, id = cnt, complete = false) {
    var li = document.createElement("LI");
    li.classList.add("todo-app__item");
    var div = document.createElement("DIV");
    div.classList.add("todo-app__checkbox");
    var input = document.createElement("INPUT");
    input.setAttribute('type', 'checkbox');
    input.setAttribute('id', id);
    input.setAttribute("onClick", "clickHanlder(this)");
    if (complete) {
    	input.checked = true;
    }
    var label = document.createElement("LABEL");
    label.setAttribute('for', id);

    div.appendChild(input);
    div.appendChild(label);

    var h1 = document.createElement("H1");
    h1.classList.add("todo-app__item-detail");
    var t = document.createTextNode(str);
    if (complete) {
    	var s = document.createElement("S");
    	s.appendChild(t);
    	h1.appendChild(s);
    	li.style["opacity"] = 0.5;
    }
    else
    {
    	h1.appendChild(t);
    }

    var img = document.createElement("IMG");
    img.setAttribute('src', 'img/x.png');
    img.classList.add("todo-app__item-x");
    img.setAttribute("onClick", "deleteHanlder(" + id + ")");

    li.appendChild(div);
    li.appendChild(h1);
    li.appendChild(img);

    return li;
}

function clickHanlder(el) {
    var id = el.id;
    console.log(id);
    var li = document.getElementsByClassName("todo-app__item")[id];
    var h1 = li.getElementsByClassName("todo-app__item-detail")[0];
    var text = h1.textContent;

    if (todo_items[id].isCompelete == false) {
        h1.innerHTML = "<s>" + text + "</s>";
        todo_items[id].isCompelete = true;
        li.style["opacity"] = 0.5;
    } else {
        h1.innerHTML = text;
        todo_items[id].isCompelete = false;
        li.style["opacity"] = 1;
    }
    updateCnt();
}

function deleteHanlder(id) {
    // console.log(id);
    var ul = document.getElementById("todo-list");
    var lis = document.getElementsByClassName("todo-app__item");

    for (var i = id + 1; i < cnt; i++) {
        lis[i].querySelector("input").setAttribute("id", i - 1);
        lis[i].querySelector("label").setAttribute("for", i - 1);
        lis[i].querySelector("img").setAttribute("onClick", "deleteHanlder(" + (i - 1) + ")");
    }

    ul.removeChild(lis[id]);

    todo_items.splice(id, 1);
    cnt--;

    updateCnt();
}

function clearComplete() {
    for (var i = cnt - 1; i >= 0; i--) {
        if (todo_items[i].isCompelete) {
            deleteHanlder(i);
        }
    }
}

function updateCnt() {
    var todoCount = document.getElementsByClassName("todo-app__total")[0];
    todoCount.innerHTML = todo_items.filter(el => !el.isCompelete).length + " left";
    console.log(todo_items);
}

function changeState(code) {
    var ul = document.getElementById("todo-list");
    if (cnt != 0) {
        ul.innerHTML = "";
    }

    if (code == 0) {
    	// all
        for (var i = 0; i < todo_items.length; i++) {
        	if (todo_items[i].isCompelete) {
        		const newItem = createNewItem(todo_items[i].text, i, true);
        		ul.appendChild(newItem);
        	}
        	else 
        	{
        		const newItem = createNewItem(todo_items[i].text, i);
        		ul.appendChild(createNewItem(todo_items[i].text, i));
        	}
        }
    } else if (code == 1) {
        // show active
        // var todo_complete = todo_items.filter(el => !el.isCompelete);
        for (var i = 0; i < todo_items.length; i++) {
            if (!todo_items[i].isCompelete) {
        		const newItem = createNewItem(todo_items[i].text, i);
        		ul.appendChild(newItem);
        	}
        }
    } else {
        // show complete
        // var todo_incomplete = todo_items.filter(el => el.isCompelete);
        for (var i = 0; i < todo_items.length; i++) {
            if (todo_items[i].isCompelete) {
        		const newItem = createNewItem(todo_items[i].text, i, true);
        		ul.appendChild(newItem);
        	}
        }
    }
    state = code;
}