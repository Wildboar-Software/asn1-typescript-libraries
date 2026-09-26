import type { ObjectIdentifierInput } from "../readValue.mjs";
import { readObjectIdentifier } from "../readValue.mjs";

/**
 * Rec. ITU-T X.501 (10/2019), clause 13.5.2
 * `objectIdentifierMatch` (also 8.9.6).
 *
 * TRUE iff both OBJECT IDENTIFIER values have the same number of
 * integral components and each corresponding component is equal.
 * This is the inherent equality of ASN.1 object identifiers.
 *
 * Each argument may be an `ASN1Element`, an `OBJECT_IDENTIFIER`,
 * or a dotted-decimal string.
 */
export
function objectIdentifierMatch (
    assertion: ObjectIdentifierInput,
    value: ObjectIdentifierInput,
): boolean {
    return readObjectIdentifier(assertion).isEqualTo(readObjectIdentifier(value));
}

export default objectIdentifierMatch;
