        const firebaseConfig = {
            apiKey: "AIzaSyC_xbFR3dj2W58n9LJJ1Qz-pZLd1mBPoxk",
            authDomain: "stmaryswebsite-fb8ff.firebaseapp.com",
            projectId: "stmaryswebsite-fb8ff",
            storageBucket: "stmaryswebsite-fb8ff.appspot.com",
            databaseURL : "https://stmaryswebsite-fb8ff-default-rtdb.firebaseio.com/",
            messagingSenderId: "77865070851",
            appId: "1:77865070851:web:664be3ae00068d6c6cf936",
            measurementId: "G-JW4MKXGJZQ"
          };
          firebase.initializeApp(firebaseConfig);
        
          var stdno=0;
          function addItemsToList(name,mobile,email,gen){
            var ul=document.getElementById('list');
            var header=document.createElement('h2');
            
            var _name= document.createElement('li');
            var _rollNo= document.createElement('li');
            var _sec= document.createElement('li');
            var _gen= document.createElement('li');

            header.innerHTML='Student-'+(++stdno)
            _name.innerHTML='Name: '+name;
            _rollNo.innerHTML='Mobile :'+mobile;
            _sec.innerHTML='Section :'+email;
            _gen.innerHTML='Gender :'+gen;

            ul.appendChild(header)
            ul.appendChild(_name)
            ul.appendChild(_rollNo)
            ul.appendChild(_sec)
            ul.appendChild(_gen)
          }
      
          function FetchAllData(){
            firebase.database().ref('Candidate').once('value',function(snapshot){
                snapshot.forEach(
                    function(childSnapshot){
                        let name=childSnapshot.val().name;
                        let mobile=childSnapshot.val().mobile;
                        let gen=childSnapshot.val().gender;
                        let email=childSnapshot.val().email;
                        addItemsToList(name,mobile,email,gen);
                    }
                );
            });
          }
          window.onload(FetchAllData());
