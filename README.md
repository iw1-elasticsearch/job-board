# job_board

yarn install 

yarn serve

launch elasticsearch

launch kibana

add those 2 documents to try

POST job_board/_doc/mfUh62sBfyNbxU6qGtkb
{
	"created_at": "13/07/2019",
	"title": "Développeur Java",
	"contract": "Alternance",
	"job_title": "Développeur Back", 
	"company": "EDF",
	"nb_employees": "500",
	"skills": ["JAVA", "JEE"],
	"start_date": "01/10/2019",
	"city": "Paris",
	"location": {
		"lat": "48",
		"lon": "22" 
	},
	"salary": 50000,
	"description": "Rejoins nous si tu veux bosser sur la pire techno !"
}


PUT job_board/_doc/mPUT62sBfyNbxU6qINmB
{
  "created_at": "13/07/2019",
  "title": "Développeur",
  "contract": "CDI",
  "company": "Youmiam",
  "job_title": "Développeur Back",
  "nb_employees": 10,
  "skills": [
    "PHP",
    "Symfony",
    "JS"
  ],
  "start_date": "01/09/2019",
  "city": "Paris",
  "salary": 35000,
  "location": {
    "lat": "48",
    "lon": "22"
  },
  "description": "Start up food tech"
}

yarn watch ptdr
