import styled from 'styled-components'

const SCReportTable = styled.div`
  & .Title{
    font-weight: 500;
    font-size: 1.8rem;
    color: var(--text-color);
  }
  & .TopItem {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  & .ExportBtn.ant-btn {
    height: auto;
    padding: .9rem 2.5rem;
    font-size: 1.6rem;
    border-color: var(--green);
    background: var(--green);
    & svg{
      margin-right: 0.6rem;
    }
  }
  & .ant-table-thead>tr>th {
    font-weight: bold;
  }
  & .ant-pagination-options{
    display: none;
  }
`

export default  SCReportTable