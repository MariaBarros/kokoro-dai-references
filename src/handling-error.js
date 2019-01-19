// Error Handling
// We are going to use the try, catch, finaly structure for handling errors.
// Example: Validate a string. We're going to use a function for creating the string object
function MyString(str){
	if(typeof str === "string"){
		this.value = str;
		this.getValue = function(){
			return `Your string: ${this.value}`;
		}
	}else{
		throw new StringExceptionError(str);
	}
}

// Then we have to define the function StringExceptionError
function StringExceptionError(value){
	this.value = value;
	this.message = "must be a string";
	this.toString = function(){
		return `${this.value} ${this.message}`;
	}
}

// Finally, we validate the string
function verifyString(s){
	let str;
	try{
		str = new MyString(s);
	}catch(e){
		if(e instanceof StringExceptionError){
			console.log(`String exception: ${e}`);
		}else{
			console.log("Unknow error");
		}
	}finally{
		console.log("Always runs");
	}
	return str;
}

const a = verifyString("Hello");
const b = verifyString(1234);