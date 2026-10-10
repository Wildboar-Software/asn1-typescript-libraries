/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1SizeError,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary CODEC_Info
 * @description
 *
 * Channel type including element identifier and length as in 3GPP TS 48.008
 * (3GPP TS 29.002 V19.1.0 clause 17.7.12).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CODEC-Info  ::=  OCTET STRING (SIZE (5..10))
 * ```
 */
export
type CODEC_Info = OCTET_STRING; // OctetStringType

/**
 * @summary Decodes an ASN.1 element into a(n) CODEC_Info
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_CODEC_Info = (el: _Element): CODEC_Info => {
    const value = $._decodeOctetString(el);
    if (value.length < 5 || value.length > 10) {
        throw new ASN1SizeError("CODEC_Info violates SIZE constraint");
    }
    return value;
};

/**
 * @summary Encodes a(n) CODEC_Info into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CODEC_Info, encoded as an ASN.1 Element.
 */
export const _encode_CODEC_Info = $._encodeOctetString;


/* eslint-enable */
