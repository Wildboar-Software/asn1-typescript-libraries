/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary WildcardField
 * @description
 * 
 * One octet of wildcard mask in front of a TerminationID (clause A.1).
 *
 * Bit 7 (the most significant bit) is 1 for ALL and 0 for CHOOSE. Bit 6 is 0
 * for a single naming level and 1 for that level and all lower levels. Bits 0
 * through 5 are the bit position in the TerminationID at which the wildcard
 * starts.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * WildcardField  ::=  OCTET STRING(SIZE(1))
 * ```
 */
export
type WildcardField = OCTET_STRING; // OctetStringType
export const _decode_WildcardField = (el: _Element): WildcardField => {
    const value = $._decodeOctetString(el);
    if (value.length !== 1) {
        throw new ASN1SizeError("WildcardField violates SIZE constraint");
    }
    return value;
};
export const _encode_WildcardField = $._encodeOctetString;


/* eslint-enable */
