const buildMessage = (obj) => {
  
  var ticket_number = obj.ticketNumber;
  var webURL = obj.webUrl;
  var subject = obj.subject;
  let template = `Ticket [#${ticket_number}](${webURL}) Subject: ${subject}`;
  //template += ` ([${obj.commit.substring(0, 7)}](${obj.compare_url})) of`
  //template += ` ${obj.repository.owner_name}/${obj.repository.name}@${obj.branch}`;
  //template += ` by ${obj.author_name} ${obj.state} in ${min} min ${sec} sec`;
  console.log(template,obj)

  let status_color = '#36A64F';
  return {
    text: template,
    color: status_color
  };
};

class Script {
  process_incoming_request({ request }) {
    msg = buildMessage(request.content[0].payload);

    return {
      content:{
            text: msg.text,
            color: msg.color
      }
    };
  }
}
