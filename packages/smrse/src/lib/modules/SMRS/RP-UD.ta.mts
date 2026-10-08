/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1SizeError,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary RP_UD
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RP-UD  ::=  OCTET STRING (SIZE (1..164))
 * ```
 *
 * User data of a relay PDU: one SMS transfer-layer PDU, carried
 * octet for octet. Length 1..164 (clauses 2.2 and 3.2). Those clauses
 * tag it `[APPLICATION 3]`; this module does not.
 *
 * The GMSC does not interpret the corresponding SMS-MAP `sm-RP-UI`; it
 * forwards that parameter unchanged (clause 4.2.4). The length bound
 * of `sm-RP-UI` is not this one.
 */
export
type RP_UD = OCTET_STRING; // OctetStringType

/**
 * @summary Decodes an ASN.1 element into a(n) RP_UD
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_RP_UD = (el: _Element): RP_UD => {
    const value = $._decodeOctetString(el);
    if (value.length < 1 || value.length > 164) {
        throw new ASN1SizeError("RP_UD violates SIZE constraint");
    }
    return value;
};

/**
 * @summary Encodes a(n) RP_UD into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RP_UD, encoded as an ASN.1 Element.
 */
export const _encode_RP_UD = $._encodeOctetString;


/* eslint-enable */
