import { ParsedAttributeTypeAndValue } from "../ParsedAttributeTypeAndValue.mjs";
import { unescapeDistinguishedValue } from "../unescapeDistinguishedValue.mjs";

export function atavFromString(str: string): ParsedAttributeTypeAndValue {
    const equalsIndex = str.indexOf("=");
    if (equalsIndex === -1) {
        throw new SyntaxError("malformed attribute type and value");
    }
    return new ParsedAttributeTypeAndValue(
        str.slice(0, equalsIndex),
        unescapeDistinguishedValue(str.slice(equalsIndex + 1)),
    );
}

export default atavFromString;
