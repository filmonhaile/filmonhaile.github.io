/// project updated. 

import styled from "@emotion/styled";

/* ---------- Card ---------- */
export const Card = styled.div`
  display: grid;
  grid-gap: 2rem;
  margin-bottom: 4rem;
  grid-template-columns: 1fr;
  padding-bottom: 2rem;
  overflow: hidden;
  border-radius: 10px;
  box-shadow: 0 5px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
    border-bottom: 0;
    padding-bottom: 0;
  }
`;

export const CardLeft = styled.div`
  justify-self: center;
  height: 100%;
  img {
    object-fit: cover;
    max-width: 100%;
    border-radius: 10px;
  }
`;

export const CardRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h4 {
    font-size: 1.5rem;
    font-weight: 500;
    margin: 0.5rem 0;
    text-align: center;
  }

  p {
    font-weight: 400;
    max-width: 95%;
    margin-top: 10px;
    margin-bottom: 1rem;
    color: rgba(0, 0, 0, 0.815);
    text-align: center;

    @media (min-width: 992px) {
      text-align: start;
    }
  }
  @media (min-width: 992px) {
    align-items: flex-start;
    margin-top: 1rem;
  }
`;

export const BtnGroup = styled.div`
  height: 70px;
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

export const TechCardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  @media (min-width: 992px) {
    justify-content: flex-start;
  }
`;

export const TechCard = styled.div`
  border-radius: 10px;
  background-color: #f5f5f5;
  padding: 5px 10px;
  margin: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.82);
  cursor: default;
  box-shadow: 0px 2px 5px rgba(160, 170, 180, 0.6);
`;

/* ---------- Category Pill & Badges ---------- */
export const CategoryPill = styled.span`
  background: #151418;
  color: #fff;
  font-size: 12px;
  font-weight: 600;
  padding: 6px 10px;
  border-radius: 999px;
  text-transform: uppercase;
  letter-spacing: 0.04em;
`;

export const BadgeRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin: 0.25rem 0 0.5rem 0;
`;

export const Badge = styled.span`
  background: #eef2f7;
  color: #333;
  font-size: 12px;
  padding: 4px 8px;
  border-radius: 999px;
  box-shadow: 0 1px 2px rgba(0,0,0,0.06);
`;

/* ---------- Filters / Tabs ---------- */
export const FilterBar = styled.div`
  margin: 0.25rem 0 1.5rem 0;
`;

export const Tabs = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  justify-content: center;
  @media (min-width: 992px) {
    justify-content: flex-start;
  }
`;

export const TabButton = styled.button`
  border: 1px solid #e5e7eb;
  background: white;
  padding: 8px 12px;
  border-radius: 999px;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.15s ease;
  display: inline-flex;
  align-items: center;
  gap: 6px;

  &[aria-pressed="true"] {
    background: #151418;
    color: #fff;
    border-color: #151418;
  }

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 2px 6px rgba(0,0,0,0.08);
  }
`;

export const Count = styled.span`
  opacity: 0.7;
  font-size: 12px;
`;

/* ---------- Search + Sort ---------- */
export const SearchSortBar = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 10px;
  margin: 0 0 1rem 0;

  @media (min-width: 700px) {
    grid-template-columns: 1fr 180px;
    align-items: center;
  }
`;

export const SearchInput = styled.input`
  width: 100%;
  padding: 10px 12px;
  border-radius: 10px;
  border: 1px solid #e5e7eb;
  outline: none;
  font-size: 14px;
  transition: box-shadow 0.15s ease, border 0.15s ease;
  &:focus {
    border-color: #151418;
    box-shadow: 0 0 0 3px rgba(21, 20, 24, 0.08);
  }
`;

export const SortSelect = styled.select`
  width: 100%;
  padding: 10px 12px;
  border-radius: 10px;
  border: 1px solid #e5e7eb;
  outline: none;
  font-size: 14px;
  background: #fff;
  cursor: pointer;
  transition: box-shadow 0.15s ease, border 0.15s ease;
  &:focus {
    border-color: #151418;
    box-shadow: 0 0 0 3px rgba(21, 20, 24, 0.08);
  }
`;




// //updated code

// import styled from "@emotion/styled";

// /* ---------- Card ---------- */
// export const Card = styled.div`
//   display: grid;
//   grid-gap: 2rem;
//   margin-bottom: 4rem;
//   grid-template-columns: 1fr;
//   padding-bottom: 2rem;
//   overflow: hidden;
//   border-radius: 10px;
//   box-shadow: 0 5px 15px -3px rgba(0, 0, 0, 0.1),
//     0 4px 6px -2px rgba(0, 0, 0, 0.05);
//   @media (min-width: 992px) {
//     grid-template-columns: 1fr 1fr;
//     border-bottom: 0;
//     padding-bottom: 0;
//   }
// `;

// export const CardLeft = styled.div`
//   justify-self: center;
//   height: 100%;
//   img {
//     object-fit: cover;
//     max-width: 100%;
//     border-radius: 10px;
//   }
// `;

// export const CardRight = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;

//   h4 {
//     font-size: 1.5rem;
//     font-weight: 500;
//     margin: 0.5rem 0;
//     text-align: center;
//   }

//   p {
//     font-weight: 400;
//     max-width: 95%;
//     margin-top: 10px;
//     margin-bottom: 1rem;
//     color: rgba(0, 0, 0, 0.815);
//     text-align: center;

//     @media (min-width: 992px) {
//       text-align: start;
//     }
//   }
//   @media (min-width: 992px) {
//     align-items: flex-start;
//     margin-top: 1rem;
//   }
// `;

// export const BtnGroup = styled.div`
//   height: 70px;
//   display: flex;
//   align-items: center;
//   gap: 0.75rem;
// `;

// export const TechCardContainer = styled.div`
//   display: flex;
//   flex-wrap: wrap;
//   justify-content: center;
//   @media (min-width: 992px) {
//     justify-content: flex-start;
//   }
// `;

// export const TechCard = styled.div`
//   border-radius: 10px;
//   background-color: #f5f5f5;
//   padding: 5px 10px;
//   margin: 5px;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   font-size: 14px;
//   font-weight: 400;
//   color: rgba(0, 0, 0, 0.82);
//   cursor: default;
//   box-shadow: 0px 2px 5px rgba(160, 170, 180, 0.6);
// `;

// /* ---------- Category Pill & Badges ---------- */
// export const CategoryPill = styled.span`
//   background: #151418;
//   color: #fff;
//   font-size: 12px;
//   font-weight: 600;
//   padding: 6px 10px;
//   border-radius: 999px;
//   text-transform: uppercase;
//   letter-spacing: 0.04em;
// `;

// export const BadgeRow = styled.div`
//   display: flex;
//   flex-wrap: wrap;
//   gap: 6px;
//   margin: 0.25rem 0 0.5rem 0;
// `;

// export const Badge = styled.span`
//   background: #eef2f7;
//   color: #333;
//   font-size: 12px;
//   padding: 4px 8px;
//   border-radius: 999px;
//   box-shadow: 0 1px 2px rgba(0,0,0,0.06);
// `;

// /* ---------- Filters / Tabs ---------- */
// export const FilterBar = styled.div`
//   margin: 0 0 1.5rem 0;
// `;

// export const Tabs = styled.div`
//   display: flex;
//   flex-wrap: wrap;
//   gap: 8px;
//   justify-content: center;
//   @media (min-width: 992px) {
//     justify-content: flex-start;
//   }
// `;

// export const TabButton = styled.button`
//   border: 1px solid #e5e7eb;
//   background: white;
//   padding: 8px 12px;
//   border-radius: 999px;
//   font-size: 14px;
//   cursor: pointer;
//   transition: all 0.15s ease;
//   display: inline-flex;
//   align-items: center;
//   gap: 6px;

//   &[aria-pressed="true"] {
//     background: #151418;
//     color: #fff;
//     border-color: #151418;
//   }

//   &:hover {
//     transform: translateY(-1px);
//     box-shadow: 0 2px 6px rgba(0,0,0,0.08);
//   }
// `;

// export const Count = styled.span`
//   opacity: 0.7;
//   font-size: 12px;
// `;




// // import styled from "@emotion/styled";

// // export const Card = styled.div`
// //   display: grid;
// //   grid-gap: 2rem;
// //   margin-bottom: 4rem;
// //   grid-template-columns: 1fr;
// //   padding-bottom: 2rem;
// //   overflow: hidden;
// //   border-radius: 10px;
// //   box-shadow: 0 5px 15px -3px rgba(0, 0, 0, 0.1),
// //     0 4px 6px -2px rgba(0, 0, 0, 0.05);
// //   @media (min-width: 992px) {
// //     grid-template-columns: 1fr 1fr;
// //     border-bottom: 0;
// //     padding-bottom: 0;
// //   }
// // `;
 
// // export const CardLeft = styled.div`
// //   justify-self: center;
// //   height: 100%;
// //   img {
// //     object-fit: cover;
// //   }
// // `;

// // export const CardRight = styled.div`
// //   display: flex;
// //   flex-direction: column;
// //   justify-content: center;
// //   align-items: center;

// //   h4 {
// //     font-size: 1.5rem;
// //     font-weight: 400;
// //   }

// //   p {
// //     font-weight: 400;
// //     max-width: 95%;
// //     margin-top: 10px;
// //     margin-bottom: 1rem;
// //     color: rgba(0, 0, 0, 0.815);
// //     text-align: center;

// //     @media (min-width: 992px) {
// //       text-align: start;
// //     }
// //   }
// //   @media (min-width: 992px) {
// //     align-items: flex-start;
// //     margin-top: 1rem;
// //   }
// // `;

// // export const BtnGroup = styled.div`
// //   height: 70px;
// //   display: flex;
// //   align-items: center;
// // `;

// // export const TechCardContainer = styled.div`
// //   display: flex;
// //   flex-wrap: wrap;
// //   justify-content: center;
// //   @media (min-width: 992px) {
// //     justify-content: flex-start;
// //   }
// // `;

// // export const TechCard = styled.div`
// //   border-radius: 10px;
// //   background-color: #f5f5f5;
// //   padding: 5px 10px;
// //   margin: 5px;
// //   display: flex;
// //   align-items: center;
// //   justify-content: center;
// //   font-size: 15px;
// //   font-weight: 400;
// //   color: rgba(0, 0, 0, 0.815);
// //   cursor: default;
// //   box-shadow: 0px 2px 5px rgba(160, 170, 180, 0.6);
// // `;
