<script>
        function calcularTrianguloPascal(rows) {
            var triangle = [];

            for (var i = 0; i < rows; i++) {
                triangle[i] = [];
                triangle[i][0] = 1;

                for (var j = 1; j < i; j++) {
                    triangle[i][j] = triangle[i - 1][j - 1] + triangle[i - 1][j];
                }

                triangle[i][i] = 1;
            }

            return triangle;
        }

        function exibirTrianguloPascal(triangle) {
            var pascoso = '';
            for (var i = 0; i < triangle.length; i++) {
                pascoso += '\n';
                for (var j = 0; j < triangle[i].length; j++) {
                    pascoso += triangle[i][j] ;
                }
            }
            console.log(pascoso);
        }

        var numRows = 6;
        var pascalTriangle = calcularTrianguloPascal(numRows);
        exibirTrianguloPascal(pascalTriangle);
    </script>
