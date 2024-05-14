const CommentAddForm = document.querySelector('.CommentAddForm');
const Comments = document.querySelector('.Comments');

if (CommentAddForm) {
  CommentAddForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const { teaid } = e.target.dataset;
    const { action, method, commentText } = e.target;

    const result = await fetch(action, {
      method,
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({
        commentText: commentText.value,
        teaid,
      }),
    });
    const response = await result.json();

    if (response.message === 'success') {
      Comments.insertAdjacentHTML('afterbegin', response.html);
      CommentAddForm.reset();
    }
  });
}
