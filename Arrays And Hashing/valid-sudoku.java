//My solution after reading
public boolean isValidSudoku(char[][] board) {
    for(int i=0;i<9;i++){
        Set<Character> rowSet = new HashSet<>();
        Set<Character> columnSet = new HashSet<>();
        for(int j=0;j<9;j++){
            char rowValue = board[i][j];
            char columnValue = board[j][i]; 
            if(rowValue!='.'){
                if(rowSet.contains(rowValue)){
                    return false;
                }else{
                    rowSet.add(rowValue);
                }
            }
            if(columnValue!='.'){
                if(columnSet.contains(columnValue)){
                    return false;
                }else{
                    columnSet.add(columnValue);
                }
            }
        }
    }

    for(int i=0;i<9;i=i+3){
        for(int j=0;j<9;j=j+3){
            Set<Character> set = new HashSet<>();
            for(int k=i;k<i+3;k++){
                for(int l=j;l<j+3;l++){
                    char value = board[k][l];
                    if(value!='.'){
                        if(set.contains(value)){
                            return false;
                        }else{
                            set.add(value); 
                        }
                    }
                }
            }
        }
    }
   return true;
}

//Optimized solution
public boolean isValidSudoku(char[][] board) {
    for(int i = 0; i<9; i++){
        HashSet<Character> rows = new HashSet<Character>();
        HashSet<Character> columns = new HashSet<Character>();
        HashSet<Character> cube = new HashSet<Character>();
        for (int j = 0; j < 9;j++){
            if(board[i][j]!='.' && !rows.add(board[i][j]))
                return false;
            if(board[j][i]!='.' && !columns.add(board[j][i]))
                return false;
            int RowIndex = 3*(i/3);
            int ColIndex = 3*(i%3);
            if(board[RowIndex + j/3][ColIndex + j%3]!='.' && !cube.add(board[RowIndex + j/3][ColIndex + j%3]))
                return false;
        }
    }
    return true;