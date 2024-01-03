import styled from '@emotion/styled'

type CategoryProps = {
  categories: Record<string, number>
  selectedCategory: string
  handleSelect: (category: string) => void
}

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 5px 15px;
  margin-top: 80px;
`

const Item = styled.div<{ $selected: boolean }>`
  font-size: 18px;
  font-weight: ${({ $selected }) => ($selected ? 700 : 500)};
  cursor: ${({ $selected }) => ($selected ? 'default' : 'pointer')};
`

export default function Category({
  categories,
  selectedCategory,
  handleSelect,
}: CategoryProps) {
  return (
    <Wrapper>
      {Object.entries(categories).map(([category, count]) => (
        <Item
          onClick={() => handleSelect(category)}
          $selected={category === selectedCategory}
          key={category}
        >
          #{category}({count})
        </Item>
      ))}
    </Wrapper>
  )
}
