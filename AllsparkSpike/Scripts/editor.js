
function parseNodes(nodes) { // takes a nodes array and turns it into a <ol>
    var ol = document.createElement("ul");
    for (var i = 0; i < nodes.length; i++) {
        ol.appendChild(parseNode(nodes[i]));
    }
    return ol;
}

function parseNode(node) { // takes a node object and turns it into a <li>
    var li = document.createElement("li");
    //li.innerHTML = node.Name;
    //li.className = node.class;

    var a = document.createElement("a");
    a.classList.add("policyDetailsMenu");
    a.title = node.Description;
    a.setAttribute('href', "#");

    if (node.Children) {
        a.innerText = "+  " + node.Name;
    } else {
        a.innerText = node.Name;
        a.classList.add("draggableData");
    }


    $(a).data('test', node.Description);

    var hiddenSpan = document.createElement("span");
    hiddenSpan.innerText = node.Description;
    hiddenSpan.setAttribute("id", "propertyAddress");
    hiddenSpan.classList.add("hidden");
    a.appendChild(hiddenSpan);

    li.appendChild(a);

    if (node.Children) {
        li.appendChild(parseNodes(node.Children));
    }

    return li;
}

if (!String.prototype.startsWith) {
    String.prototype.startsWith = function (str) {
        return !this.indexOf(str);
    }
}

function handleCardDrop(event, ui) {

    //alert($(ui.draggable).data('test'));

    var classes = '';
    var classList = ui.draggable.context.className.split(/\s+/);
    for (var i = 0; i < classList.length; i++) {
        //if (classList[i].toString().startsWith('policyDetails')) {
        classes += classList[i].toString();
        classes += ' ';
        //}
    }

    var span = "<span class='baa $$classes$$'>$$x$$</span>";
    span = span.replace("$$x$$", ui.draggable.context.innerText);
    span = span.replace("$$classes$$", classes);
    event.target.innerHTML = ui.draggable.context.outerHTML;

    $(event.target).addClass('xyz');

    $(event.target).removeClass('hotspot');

}

function CreateNewFixedValueElement(elementName) {
    var li = document.createElement("li");
    var a = document.createElement("a");

    a.setAttribute('href', "#");
    a.innerText = elementName;

    a.classList.add("draggableData");
    a.classList.add("fixedValueMenu");

    //$(a).data('test', elementName);
    $(a).draggable({
        //containment: '#toolbox',
        stack: '#toolbox div',
        cursor: 'move',
        revert: true
    });

    a.title = elementName;

    li.appendChild(a);

    return li;
}

function SetupTree() {
    $('.tree li:has(ul)').addClass('parent_li').find(' > span').attr('title', 'Collapse this branch');
    $('.tree li.parent_li > span').on('click', function (e) {
        var children = $(this).parent('li.parent_li').find(' > ul > li');
        if (children.is(":visible")) {
            children.hide('fast');
            $(this).attr('title', 'Expand this branch').find(' > i').addClass('icon-plus-sign').removeClass('icon-minus-sign');
        } else {
            children.show('fast');
            $(this).attr('title', 'Collapse this branch').find(' > i').addClass('icon-minus-sign').removeClass('icon-plus-sign');
        }
        e.stopPropagation();
    });
    $('.tree li').hide();
    $('.tree li:first').show();
    $('.tree li').on('click', function (e) {
        var children = $(this).find('> ul > li');
        if (children.is(":visible")) children.hide('fast');
        else children.show('fast');
        e.stopPropagation();
    });
}

$(document).ready(function () {

    var x = parseNodes(jsonData);
    $("#policyDetailsMenu").append(x);

    SetupTree();

    $('#addNewFixedValue').click(function () {
        var myText = prompt('What is your new fixed value');
        if (myText) {
            var newItem = CreateNewFixedValueElement(myText);

            $('#fixedValues').prepend(newItem);
        };
    });


    $(".draggableData").draggable({
        //containment: '#toolbox',
        stack: '#toolbox div',
        cursor: 'move',
        revert: true
    });

    $('.hotspot').droppable({
        //accept: '#toolbox div',
        hoverClass: 'hovered',
        drop: handleCardDrop
    });

    $('#btnSave').click(function () {
        var div = document.getElementById('editorContents');
        var divs = div.getElementsByClassName('line');
        var divArray = [];
        for (var i = 0; i < divs.length; i += 1) {
            divArray.push(divs[i].innerHTML);
            var children = divs[i].childNodes;

            for (child in children) {
                console.log(children[child]);
            }
        }
    });


});