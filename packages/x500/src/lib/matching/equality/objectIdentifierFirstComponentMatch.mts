import type { ObjectIdentifierInput } from "../readValue.mjs";
import {
    readLeadingObjectIdentifier,
    readObjectIdentifier,
} from "../readValue.mjs";

/**
 * Rec. ITU-T X.520 (10/2019), clause 8.4.2
 * `objectIdentifierFirstComponentMatch`.
 *
 * Compares a presented OBJECT IDENTIFIER with a SEQUENCE whose
 * first component is a mandatory OID. TRUE iff that first
 * component matches via `objectIdentifierMatch`. The assertion
 * syntax is derived from the first SEQUENCE component.
 *
 * `assertion` is an element, object identifier, or dotted string.
 * `value` is a SEQUENCE element, or that OID already.
 */
export
function objectIdentifierFirstComponentMatch (
    assertion: ObjectIdentifierInput,
    value: ObjectIdentifierInput,
): boolean {
    return readObjectIdentifier(assertion).isEqualTo(readLeadingObjectIdentifier(value));
}

export default objectIdentifierFirstComponentMatch;
