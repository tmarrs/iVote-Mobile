// Login Click handler
// Handle Login callback
// - Login (later).
// - Go to Vote page.

$(function() {

  $('#login-button').click(handleLogin);

  function handleLogin() {
    // Get form data.

    // Login.
    if (login()) {
      changePage("#vote-page");
    }
  }

  function login() {
    var success = true;

    //alert("uid = " + $('#user-name').val());
    //alert("pwd = " + $('#pwd').val());
/*
    $.ajax({
      url: 'http://localhost:3000',
      type: 'POST',
      data: { email: uid, password: pwd },
      success: loginSuccessCallback,
      error: loginErrorCallback
    });
*/

    return success;
  }

  function loginSuccessCallback(resp, textStatus, jqXHR) {
    // TODO
  }

  function loginErrorCallback(qXHR, textStatus, errorThrown) {
    // TODO
  }

  function changePage(url) {
    populateIssue();
  }

  function populateIssue() {
    $.ajax({
      url: 'http://localhost:3000/issues/1',
      dataType: 'json',
      success: issuesSuccessCallback,
      error: issuesErrorCallback
    });
  }

  function issuesSuccessCallback(resp, textStatus, jqXHR) {
    $("#issue-text").text(resp.description);
    $.mobile.changePage("#vote-page", "fade", true, false);
  }

  function issuesErrorCallback(qXHR, textStatus, errorThrown) {
    alert("Error");
  }

  $('#feedback-button').click(handleVoteSubmit);

  function handleVoteSubmit() {
    //alert($("input:radio[name='vote-radio']:checked").val());
    //alert($("#feedback-text").val());

    var vote = $("input:radio[name='vote-radio']:checked").val();
    var feedback = $("#feedback-text").val();

    clearVotePage();

/*
    $.ajax({
      url: 'http://localhost:3000/feedback',
      type: 'POST',
      data: { vote: vote, feedback: feedback },
      success: feedbackSuccessCallback,
      error: feedbackErrorCallback
    });
*/
  }

  function clearVotePage() {
    var voteRadio = $("input[name='vote-radio']");

    // Clear the Feedback text field.

    $("#feedback-text").val('');

    // Reset the Vote Radio button.

    voteRadio.filter("[value='Yes']").prop("checked", true);
    voteRadio.filter("[value='No']").prop("checked", false);
    voteRadio.checkboxradio("refresh");
  }

  function feedbackSuccessCallback(resp, textStatus, jqXHR) {
    clearVotePage();
  }

  function feedbackErrorCallback(qXHR, textStatus, errorThrown) {
    alert("Error");
  }

});
