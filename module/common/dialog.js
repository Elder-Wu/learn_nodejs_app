class Dialog {
    static show(options) {
        const title = options.title || "提示"
        const msg = options.msg || ""
        const positiveName = options.positiveName || "确定"
        const positiveFn = options.positiveFn

        const dialogContainer = document.createElement("div")
        dialogContainer.setAttribute("class", "modal fade")
        dialogContainer.setAttribute("tabindex", "-1")
        dialogContainer.setAttribute("role", "dialog")
        dialogContainer.setAttribute("aria-hidden", "true")

        const dialogDocument = document.createElement("div")
        dialogDocument.setAttribute("class", "modal-dialog")
        dialogDocument.setAttribute("role", "document")

        const dialogContent = document.createElement("div")
        dialogContent.setAttribute("class", "modal-content")

        const dialogHeader = document.createElement("div")
        dialogHeader.setAttribute("class", "modal-header")
        dialogHeader.innerHTML = `<h5 class="modal-title" id="exampleModalLabel">${title}</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>`

        const dialogBody = document.createElement("div")
        dialogBody.setAttribute("class", "modal-body")
        dialogBody.innerHTML = msg

        const dialogFooter = document.createElement("div")
        dialogFooter.setAttribute("class", "modal-footer")

        const positiveButton = document.createElement("button")
        positiveButton.setAttribute("class", "btn btn-primary")
        positiveButton.setAttribute("data-dismiss", "modal")
        positiveButton.innerText = positiveName
        if (positiveFn) {
            $(positiveButton).click(function () {
                $(dialogContainer).on('hidden.bs.modal', function () {
                    positiveFn()
                });
            })
        }

        document.getElementsByTagName("body")[0].appendChild(dialogContainer)
        dialogContainer.appendChild(dialogDocument)
        dialogDocument.appendChild(dialogContent)
        dialogContent.appendChild(dialogHeader)
        dialogContent.appendChild(dialogBody)
        dialogContent.appendChild(dialogFooter)
        dialogFooter.appendChild(positiveButton)

        $(dialogContainer).on('hidden.bs.modal', function () {
            document.getElementsByTagName("body")[0].removeChild(dialogContainer)
        })
        $(dialogContainer).modal('show')
    }
}

export default Dialog