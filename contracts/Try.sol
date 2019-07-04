pragma solidity ^0.4.23;

contract Try {

    uint8 public _u_id =0;  //user id
    uint8 public _f_id =0;   //file_id
    uint8 public _t_id = 0;  //trace id

    struct participant {
        string _uniqueID;
        string _userName;
        string _passWord;
        string _userDept;
        string _userType;
    }
    mapping(uint => participant) public participants;

    struct file{
        string _fileOwnerID;
        string _fileName;
        string _fileDetails;
        string _toDept;
        string _toUser;
        uint [] trace_ids;
    }
    mapping(uint => file) public files;

     struct track_file {
        uint _previous_owner_id;
        string _previous_owner_type;
        uint _file_id;
        uint _owner_id;
        //uint _timeStamp;
        string _owner_type;
    }
    mapping(uint => track_file) public tracks;

    function createParticipant(string uniqueid, string name ,string pass,string usrdept,string usrtype) public returns (uint){
        uint user_id = _u_id++;
        participants[user_id]._uniqueID = uniqueid;
        participants[user_id]._userName = name;
        participants[user_id]._passWord = pass;
        participants[user_id]._userType = usrtype;
        participants[user_id]._userDept = usrdept;

        return user_id;
    }

     function getParticipantId()public view returns(uint ){
        return _u_id;
   }


   function userLogin(uint uid ,string uname ,string pass ,string uniqueid) public view returns (bool){
            if(keccak256(bytes(participants[uid]._userName)) == keccak256(bytes(uname))) {
                if(keccak256(bytes(participants[uid]._passWord))==keccak256(bytes(pass))) {
                    if(keccak256(bytes(participants[uid]._uniqueID))==keccak256(bytes(uniqueid))) {
                    return (true);
                    }
            }
        }
        return (false);
    }

    function createFile(string oid, string fname, string fdetails, string todept, string touser) public returns (uint){
        uint file_id = _f_id++;
        files[file_id]._fileOwnerID = oid;
        files[file_id]._fileName = fname;
        files[file_id]._fileDetails = fdetails;
        files[file_id]._toDept = todept;
        files[file_id]._toUser = touser;

        return file_id;
    }

    function getFileId()public view returns(uint ){
        return _f_id;
   }

//   modifier onlyOwner(uint user1_id,uint fid) {
//          if(participants[user1_id]._uniqueID != participants[files[fid]._fileOwnerID]._uniqueID ) require;
//          _;
//      }



    function transferOwnership_file(uint user1_id ,uint user2_id, uint file_id) public returns(bool) {
        participant storage  p1 = participants[user1_id];
        participant storage p2 = participants[user2_id];

        uint track_id = _t_id;

        if((keccak256(p1._userType) == keccak256("Student") && keccak256(p2._userType)==keccak256("Faculty")) ||
        (keccak256(p1._userType) == keccak256("Student") && keccak256(p2._userType)==keccak256("Staff")) ||
        (keccak256(p1._userType) == keccak256("Staff") && keccak256(p2._userType)==keccak256("Faculty")) || (keccak256(p1._userType) == keccak256("Faculty") && keccak256(p2._userType)==keccak256("Faculty"))){
            tracks[track_id]._file_id =file_id;
            tracks[track_id]._owner_id = user2_id;
            //tracks[track_id]._timeStamp = now;
            tracks[track_id]._previous_owner_id = user1_id;
            files[file_id]._fileOwnerID = participants[user2_id]._uniqueID;

            //For Tracing
            if(keccak256(p1._userType) == keccak256("Student") && keccak256(p2._userType)==keccak256("Faculty")){
                tracks[track_id]._previous_owner_type="Student";
                tracks[track_id]._owner_type="Faculty";
            }
            else if(keccak256(p1._userType) == keccak256("Student") && keccak256(p2._userType)==keccak256("Staff")){
                tracks[track_id]._previous_owner_type="Student";
                tracks[track_id]._owner_type="Staff";
            }
            else if(keccak256(p1._userType) == keccak256("Staff") && keccak256(p2._userType)==keccak256("Faculty")){
                tracks[track_id]._previous_owner_type="Staff";
                tracks[track_id]._owner_type="Faculty";
            }
            else if(keccak256(p1._userType) == keccak256("Faculty") && keccak256(p2._userType)==keccak256("Faculty")){
                tracks[track_id]._previous_owner_type="Faculty";
                tracks[track_id]._owner_type="Faculty";
            }
            files[file_id].trace_ids.push(track_id);
            track_id = _t_id++;
            return (true);
        }
        else{
            return (false);
        }
    }


    function getFile_tracking_ids(uint f_id)  public view returns (uint []) {
        return files[f_id].trace_ids;
    }

     function getFile_trackindex(uint t_id)  public view returns (uint,string,string,uint,string,string) {
         return (tracks[t_id]._previous_owner_id, participants[(tracks[t_id]._previous_owner_id)]._userName, tracks[t_id]._previous_owner_type,tracks[t_id]._owner_id,participants[(tracks[t_id]._owner_id)]._userName,tracks[t_id]._owner_type);
    }

}
