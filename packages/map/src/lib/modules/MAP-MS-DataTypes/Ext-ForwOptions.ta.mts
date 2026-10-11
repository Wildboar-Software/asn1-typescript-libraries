/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1SizeError,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary Ext_ForwOptions
 * @description
 *
 * Extensible forwarding options: notification to forwarding party, redirecting
 * presentation, notification to calling party, and forwarding reason, as in
 * 3GPP TS 22.082. Octets 2-5 are reserved and shall be discarded if received
 * and not understood. Bits 3 and 4 shall be ignored by the VLR in Insert
 * Subscriber Data (3GPP TS 29.002 V19.1.0 clauses 7.6.3.18, 8.8.1.3 and
 * 17.7.1).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Ext-ForwOptions  ::=  OCTET STRING (SIZE (1..5))
 * ```
 */
export
type Ext_ForwOptions = OCTET_STRING; // OctetStringType

/**
 * @summary Decodes an ASN.1 element into a(n) Ext_ForwOptions
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_Ext_ForwOptions = (el: _Element): Ext_ForwOptions => {
    const value = $._decodeOctetString(el);
    if (value.length < 1 || value.length > 5) {
        throw new ASN1SizeError("Ext_ForwOptions violates SIZE constraint");
    }
    return value;
};

/**
 * @summary Encodes a(n) Ext_ForwOptions into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Ext_ForwOptions, encoded as an ASN.1 Element.
 */
export const _encode_Ext_ForwOptions = $._encodeOctetString;


/* eslint-enable */
