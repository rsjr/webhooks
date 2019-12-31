your_orgID = 666 //put your orgId here

ticket_info = zoho.desk.getRecordById(your_orgID,"tickets",ticket_id);
//info ticket_info;
ticket_status = ticket_info.getJson('status');
if(ticket_status == "Escalated")
{
	ticket_url = ticket_info.getJson('webUrl');
	t_number = ticket_info.getJson('ticketNumber');
	data = Map();
	data.put("id",t_number);
	data.put("webUrl",ticket_url);
	info data;
	response = invokeurl
	[
		url :"https://your.webhook"
		type :POST
		parameters:data
	];
}