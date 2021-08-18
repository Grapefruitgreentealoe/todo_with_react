import React from "react";
import styled from "styled-components";
import TodoItem from "./TodoItem";

const TodoListBlock = styled.div `
    flex : 1; //flex: 1 스타일을 설정함으로써 자신이 차지 할 수 있는 영역을 꽉 채우도록 설정
    padding : 20px 32px;
    padding-bottom : 48px;
    overflow-y : auto;

`;

export default function TodoList() {
    return <TodoListBlock >
        <
        TodoItem text = "프로젝트 생성하기"
    done = { true }
    />    <
    TodoItem text = "컴포넌트 스타일링 하기"
    done = { true }
    /> <
    TodoItem text = "Context 만들기"
    done = { false }
    /> <
    TodoItem text = "기능 구현하기"
    done = { false }
    /> < /
    TodoListBlock >
}