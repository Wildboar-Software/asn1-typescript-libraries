/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1SizeError,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary RadioResourceInformation
 * @description
 *
 * Channel Type information element from 3GPP TS 48.008. In Prepare HO, included
 * if the access network protocol is RANAP and the UE also supports GSM. Not
 * sent if `RadioResourceList` is sent.
 *
 * (3GPP TS 29.002 V19.1.0 clauses 7.6.6.10 and 17.7.1).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RadioResourceInformation  ::=  OCTET STRING (SIZE (3..13))
 * ```
 */
export
type RadioResourceInformation = OCTET_STRING; // OctetStringType

/**
 * @summary Decodes an ASN.1 element into a(n) RadioResourceInformation
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_RadioResourceInformation = (el: _Element): RadioResourceInformation => {
    const value = $._decodeOctetString(el);
    if (value.length < 3 || value.length > 13) {
        throw new ASN1SizeError("RadioResourceInformation violates SIZE constraint");
    }
    return value;
};

/**
 * @summary Encodes a(n) RadioResourceInformation into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RadioResourceInformation, encoded as an ASN.1 Element.
 */
export const _encode_RadioResourceInformation = $._encodeOctetString;


/* eslint-enable */
