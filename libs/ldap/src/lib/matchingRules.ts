import type EqualityMatcher from "./types/EqualityMatcher";
// import type OrderingMatcher from "./types/OrderingMatcher";
// import type SubstringsMatcher from "./types/SubstringsMatcher";

export
const bitStringMatch: EqualityMatcher = (assertion: Uint8Array, value: Uint8Array): boolean => {
    const len = Math.min(assertion.length, value.length);
    return (assertion.slice(len).toString() === value.slice(len).toString());
};

export
const booleanMatch: EqualityMatcher = (assertion: Uint8Array, value: Uint8Array): boolean => {
    return (assertion.toString() === value.toString());
};

export
const caseExactIA5Match: EqualityMatcher = (assertion: Uint8Array, value: Uint8Array): boolean => {
    return (assertion.toString() === value.toString());
};

export
const caseExactMatch: EqualityMatcher = (assertion: Uint8Array, value: Uint8Array): boolean => {
    return (assertion.toString() === value.toString());
};

// export
// const caseExactOrderingMatch: EqualityMatcher = (assertion: Uint8Array, value: Uint8Array): boolean => {

// };

// export
// const caseExactSubstringsMatch: EqualityMatcher = (assertion: Uint8Array, value: Uint8Array): boolean => {

// };

export
const caseIgnoreIA5Match: EqualityMatcher = (assertion: Uint8Array, value: Uint8Array): boolean => {
    const a = Buffer.from(assertion).toString("utf-8");
    const v = Buffer.from(value).toString("utf-8");
    return (a.trim().toLowerCase() === v.trim().toLowerCase());
};

// export
// const caseIgnoreIA5SubstringsMatch: EqualityMatcher = (assertion: Uint8Array, value: Uint8Array): boolean => {

// };

// export
// const caseIgnoreListMatch: EqualityMatcher = (assertion: Uint8Array, value: Uint8Array): boolean => {

// };

// export
// const caseIgnoreListSubstringsMatch: EqualityMatcher = (assertion: Uint8Array, value: Uint8Array): boolean => {

// };

export
const caseIgnoreMatch: EqualityMatcher = (assertion: Uint8Array, value: Uint8Array): boolean => {
    const a = Buffer.from(assertion).toString("utf-8");
    const v = Buffer.from(value).toString("utf-8");
    return (a.trim().toLowerCase() === v.trim().toLowerCase());
};

// export
// const caseIgnoreOrderingMatch: EqualityMatcher = (assertion: Uint8Array, value: Uint8Array): boolean => {

// };

// export
// const caseIgnoreSubstringsMatch: EqualityMatcher = (assertion: Uint8Array, value: Uint8Array): boolean => {

// };

// export
// const directoryStringFirstComponentMatch: EqualityMatcher = (assertion: Uint8Array, value: Uint8Array): boolean => {

// };

// export
// const distinguishedNameMatch: EqualityMatcher = (assertion: Uint8Array, value: Uint8Array): boolean => {

// };

// export
// const generalizedTimeMatch: EqualityMatcher = (assertion: Uint8Array, value: Uint8Array): boolean => {

// };

// export
// const generalizedTimeOrderingMatch: EqualityMatcher = (assertion: Uint8Array, value: Uint8Array): boolean => {

// };

// export
// const integerFirstComponentMatch: EqualityMatcher = (assertion: Uint8Array, value: Uint8Array): boolean => {

// };

export
const integerMatch: EqualityMatcher = (assertion: Uint8Array, value: Uint8Array): boolean => {
    return (assertion.toString() === value.toString());
};

// export
// const integerOrderingMatch: EqualityMatcher = (assertion: Uint8Array, value: Uint8Array): boolean => {

// };

// export
// const keywordMatch: EqualityMatcher = (assertion: Uint8Array, value: Uint8Array): boolean => {

// };

export
const numericStringMatch: EqualityMatcher = (assertion: Uint8Array, value: Uint8Array): boolean => {
    return (assertion.toString() === value.toString());
};

// export
// const numericStringOrderingMatch: EqualityMatcher = (assertion: Uint8Array, value: Uint8Array): boolean => {

// };

// export
// const numericStringSubstringsMatch: EqualityMatcher = (assertion: Uint8Array, value: Uint8Array): boolean => {

// };

// export
// const objectIdentifierFirstComponentMatch: EqualityMatcher = (assertion: Uint8Array, value: Uint8Array): boolean => {

// };

export
const objectIdentifierMatch: EqualityMatcher = (assertion: Uint8Array, value: Uint8Array): boolean => {
    return (assertion.toString() === value.toString());
};

export
const octetStringMatch: EqualityMatcher = (assertion: Uint8Array, value: Uint8Array): boolean => {
    return (assertion.toString() === value.toString());
};

// export
// const octetStringOrderingMatch: EqualityMatcher = (assertion: Uint8Array, value: Uint8Array): boolean => {

// };

// export
// const telephoneNumberMatch: EqualityMatcher = (assertion: Uint8Array, value: Uint8Array): boolean => {

// };

// export
// const telephoneNumberSubstringsMatch: EqualityMatcher = (assertion: Uint8Array, value: Uint8Array): boolean => {

// };

// export
// const uniqueMemberMatch: EqualityMatcher = (assertion: Uint8Array, value: Uint8Array): boolean => {

// };

// export
// const wordMatch: EqualityMatcher = (assertion: Uint8Array, value: Uint8Array): boolean => {

// };
