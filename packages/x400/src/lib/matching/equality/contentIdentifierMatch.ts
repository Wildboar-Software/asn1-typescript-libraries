import { createEqualityMatcher, type Matcher } from "@wildboar/x500";
import { _decode_ContentIdentifier } from "@wildboar/x400/MTSAbstractService";

export
const contentIdentifierMatch: Matcher = createEqualityMatcher(
    _decode_ContentIdentifier,
    (assertion, value): boolean => {
        return (
            assertion.trim().replace(/\s+/g, " ")
            === value.printableString.trim().replace(/\s+/g, " ")
        ); // case-sensitive.
    },
);

export default contentIdentifierMatch;
