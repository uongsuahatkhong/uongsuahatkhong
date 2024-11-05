document.addEventListener("DOMContentLoaded", () => {
    const content = document.querySelector(".content");
    const popup = document.getElementById("highlightPopup");
    const removeBtn = document.getElementById("removeHighlight");
    const colorButtons = popup.querySelectorAll("[data-color]");
    let highlightedTexts = JSON.parse(localStorage.getItem("highlights")) || [];

    // Apply saved highlights from localStorage
    function applyHighlights() {
        highlightedTexts.forEach(({ color, paragraphIndex, startOffset, endOffset }) => {
            const paragraph = content.querySelectorAll("p")[paragraphIndex];
            if (paragraph) {
                applyHighlightToParagraph(paragraph, startOffset, endOffset, color);
            }
        });
    }

    // Apply highlight to a specific paragraph
    function applyHighlightToParagraph(paragraph, startOffset, endOffset, color) {
        const text = paragraph.textContent;
        const before = text.slice(0, startOffset);
        const highlighted = text.slice(startOffset, endOffset);
        const after = text.slice(endOffset);
        paragraph.innerHTML = `${before}<span class="${color}">${highlighted}</span>${after}`;
    }

    // Highlight đoạn được chọn
    function highlightText() {
        const selection = window.getSelection();
        if (selection.rangeCount > 0) {
            const range = selection.getRangeAt(0);
            const color = this.getAttribute("data-color");

            const startContainer = range.startContainer;
            const endContainer = range.endContainer;

            const paragraphs = Array.from(content.querySelectorAll("p"));
            const startParagraphIndex = paragraphs.indexOf(startContainer.parentElement);
            const endParagraphIndex = paragraphs.indexOf(endContainer.parentElement);

            if (startParagraphIndex !== -1 && endParagraphIndex !== -1) {
                for (let i = startParagraphIndex; i <= endParagraphIndex; i++) {
                    const paragraph = paragraphs[i];
                    const isStart = i === startParagraphIndex;
                    const isEnd = i === endParagraphIndex;

                    const startOffset = isStart ? range.startOffset : 0;
                    const endOffset = isEnd ? range.endOffset : paragraph.textContent.length;

                    applyHighlightToParagraph(paragraph, startOffset, endOffset, color);

                    highlightedTexts.push({
                        color,
                        paragraphIndex: i,
                        startOffset,
                        endOffset
                    });
                }

                localStorage.setItem("highlights", JSON.stringify(highlightedTexts));
            }
        }
        popup.style.display = "none";
        selection.removeAllRanges();
    }

    // Remove all highlights
    function removeHighlights() {
        highlightedTexts = [];
        localStorage.removeItem("highlights");

        const paragraphs = Array.from(content.querySelectorAll("p"));
        paragraphs.forEach(paragraph => {
            paragraph.innerHTML = paragraph.textContent; // Remove highlight tags
        });

        popup.style.display = "none";
    }

    // Show popup near selection
    function showPopup(event) {
        const selection = window.getSelection();
        if (selection.toString().trim().length > 0) {
            popup.style.display = "block";
            popup.style.left = `${event.pageX + 10}px`;
            popup.style.top = `${event.pageY + 10}px`;

            // Adjust positioning for mobile screens
            if (window.innerWidth <= 480) {
                popup.style.left = "10px";
                popup.style.right = "10px";
                popup.style.top = `${event.pageY}px`;
            }
        }
    }

    // Add event listeners for both mouse and touch gestures
    content.addEventListener("mouseup", showPopup);
    content.addEventListener("touchend", (event) => {
        const touch = event.changedTouches[0];
        showPopup(touch);
    });

    // Add click event listeners for color buttons
    colorButtons.forEach(button => {
        button.addEventListener("click", highlightText);
    });

    // Add click event for removing highlights
    removeBtn.addEventListener("click", removeHighlights);

    // Apply saved highlights on page load
    applyHighlights();
});




function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
    }
    
    function scrollToBottom() {
    window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'smooth'
    });
    }


    $(function(){
        $('#contentVideo').bind('contextmenu',function(){ return false;});
    });

   


    


    