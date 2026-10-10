/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1SizeError,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary LCLS_GlobalCallReference
 * @description
 *
 * Globally unique call identifier for the duration of the call (3GPP TS
 * 29.205). Used to correlate call legs and decide whether a call is local
 * within the BSS. OCTET STRING SIZE (13..15), coded as in 3GPP TS 29.205. (3GPP
 * TS 29.002 V19.1.0 clauses 7.6.5.21 and 17.7.1)
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * LCLS-GlobalCallReference  ::=  OCTET STRING (SIZE (13..15))
 * ```
 */
export
type LCLS_GlobalCallReference = OCTET_STRING; // OctetStringType

/**
 * @summary Decodes an ASN.1 element into a(n) LCLS_GlobalCallReference
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_LCLS_GlobalCallReference = (el: _Element): LCLS_GlobalCallReference => {
    const value = $._decodeOctetString(el);
    if (value.length < 13 || value.length > 15) {
        throw new ASN1SizeError("LCLS_GlobalCallReference violates SIZE constraint");
    }
    return value;
};

/**
 * @summary Encodes a(n) LCLS_GlobalCallReference into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The LCLS_GlobalCallReference, encoded as an ASN.1 Element.
 */
export const _encode_LCLS_GlobalCallReference = $._encodeOctetString;


/* eslint-enable */
