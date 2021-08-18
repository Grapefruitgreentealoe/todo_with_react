import React from "react";
import styled from "styled-components";

const TodoListBlock = styled.div`
    flex : 1; //flex: 1 스타일을 설정함으로써 자신이 차지 할 수 있는 영역을 꽉 채우도록 설정
    padding : 20px 32px;
    padding-bottom : 48px;
    overflow-y : auto;
    background : gray;
`;

export default function TodoList() {
    return <TodoListBlock>TodoList</TodoListBlock>;
}