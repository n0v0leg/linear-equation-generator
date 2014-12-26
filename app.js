function randomIntInc (low, high) {
  return Math.floor(Math.random() * (high - low + 1) + low);
}

var i,j;
var n = 3;
var l = -4;
var h = +4;

function CreateLinearEquation(){
var matrix = [];
for (i=0; i<n; i++) {
	matrix[i]=[];
	for (j=0; j<n; j++){
		matrix[i][j]=0;
	}
	matrix[i][i]=1;
	matrix[i][n]=randomIntInc(l,h);
}
function MixRows(r1, r2){
	var int = randomIntInc(l,h);
	for (j=0; j<n; j++){
		matrix[r2][j] += matrix[r1][j] * int;
	}
}
//function MixColumns(c1, c2){
//	var int = randomIntInc(l,h);
//	for (i=0; i<n; i++){
//		matrix[i][c1] += matrix[i][c2] * int;
//	}
//}
function MultiplyRowByNumber(row, num){
	for (j=0; j<n+1; j++){
		matrix[row][j] *= num;
	}
}

do {
	numOfZ = 0;
	var f1 = randomIntInc(0,n-1);
	var f2 = randomIntInc(0,n-1);
	while (f1 == f2) {f2 = randomIntInc(0,n-1);}
	MixRows(f1, f2);
	var num3 = randomIntInc(-2,+2);
	while (num3 == 0) {num3 = randomIntInc(-2,+2);}
	MultiplyRowByNumber(f1, num3);
	for (i=0; i<n; i++) {
		for (j=0; j<n; j++){
			if (matrix[i][j] == 0){
				numOfZ++;
			}
		}
	}
} while (numOfZ > 1);

for (i=0; i<n; i++) {
	for (j=0; j<n; j++){
		if (Math.abs(matrix[i][j]) > 4){
			return 0;
		}
	}
}
return matrix;
}

m = CreateLinearEquation();
while (m == 0) {
	m = CreateLinearEquation();
}

var s;
for (i=0; i<n; i++) {
	s = '';
	for (j=0; j<n+1; j++){
		s += (m[i][j] + ' ');
	}
	console.log(s);
}
console.log('\n');
