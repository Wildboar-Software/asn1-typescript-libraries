import { ParsedAttributeTypeAndValue } from "../ParsedAttributeTypeAndValue.mjs";
import isEscaped from "../isEscaped.mjs";
import { unescapeDistinguishedValue } from "../unescapeDistinguishedValue.mjs";

const plus = "+".charCodeAt(0);

export function* attributeTypesAndValues (
    rdn: string,
): Generator<ParsedAttributeTypeAndValue, void, undefined> {
    let start = 0;
    for (let i = 0; i <= rdn.length; i++) {
        const atEnd = i === rdn.length;
        if (
            !atEnd
            && !(
                (rdn.charCodeAt(i) === plus)
                && !isEscaped(rdn, i)
            )
        ) {
            continue;
        }
        const atav = rdn.slice(start, i);
        const equalsIndex = atav.indexOf("=");
        if (equalsIndex === -1) {
            throw new SyntaxError("malformed attribute type and value");
        }
        yield new ParsedAttributeTypeAndValue(
            atav.slice(0, equalsIndex),
            unescapeDistinguishedValue(atav.slice(equalsIndex + 1)),
        );
        start = i + 1;
    }
}

export default attributeTypesAndValues;
