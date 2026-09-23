import type { OBJECT_IDENTIFIER } from "@wildboar/asn1";
import type { ObjectIdentifierInput } from "../readValue.mjs";
import {
    readLeadingObjectIdentifier,
    readObjectIdentifier,
} from "../readValue.mjs";
import { objectIdentifierMatchTyped } from "./objectIdentifierMatch.mjs";

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
    return objectIdentifierFirstComponentMatchTyped(
        readObjectIdentifier(assertion),
        readLeadingObjectIdentifier(value),
    );
}

/**
 * `objectIdentifierFirstComponentMatch` on the presented OID and
 * the stored first component.
 *
 * @param assertion Presented object identifier.
 * @param value Stored first component.
 * @returns `true` when the object identifiers are equal.
 */
export
function objectIdentifierFirstComponentMatchTyped (
    assertion: OBJECT_IDENTIFIER,
    value: OBJECT_IDENTIFIER,
): boolean {
    return objectIdentifierMatchTyped(assertion, value);
}

export default objectIdentifierFirstComponentMatch;
