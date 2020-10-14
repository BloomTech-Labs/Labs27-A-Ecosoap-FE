import React, { useEffect } from 'react';
import { Typography, Collapse } from 'antd';
import Order from './Order';

export default function SearchResults(props) {
  const { orders, searchQuery, searchResults, setSearchResults } = props;

  // Ant design components
  const { Paragraph } = Typography;
  const { Panel } = Collapse;

  // Searching
  useEffect(() => {
    const found = [];
    const modifiedQuery = searchQuery.trim().toLowerCase();

    for (let order of orders) {
      const contactName = order.contactName.trim().toLowerCase();
      const organization = order.organization?.trim().toLowerCase();
      const address = order.address.trim().toLowerCase();
      const country = order.country.trim().toLowerCase();
      const contactEmail = order.contactEmail.trim().toLowerCase();

      if (
        contactName.includes(modifiedQuery) ||
        organization?.includes(modifiedQuery) ||
        address.includes(modifiedQuery) ||
        country.includes(modifiedQuery) ||
        contactEmail.includes(modifiedQuery)
      ) {
        found.push(order);
      }
    }
    setSearchResults(found);
  }, [searchQuery]);

  return (
    <>
      {searchQuery && (
        <Paragraph>
          <h2>Search results</h2>
          {searchResults.length === 0 && <div>Nothing found</div>}
          <Collapse accordion>
            {searchResults.length &&
              searchResults.map((order, key) => {
                const d = new Date(order.dateOrdered);
                const formattedDate = `${d.getMonth() +
                  1}/${d.getDate()}/${d.getFullYear()} at ${d.getHours()}:${d.getMinutes()}`;

                return (
                  <Panel
                    header={`Order #${order.orderId} (${formattedDate})`}
                    key={key}
                  >
                    <Order order={order} formattedDate={formattedDate} />
                  </Panel>
                );
              })}
          </Collapse>
        </Paragraph>
      )}
    </>
  );
}
