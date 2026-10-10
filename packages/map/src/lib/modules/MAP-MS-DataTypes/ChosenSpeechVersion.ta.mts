/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1SizeError,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ChosenSpeechVersion
 * @description
 *
 * Speech Version (chosen) information element as coded in 3GPP TS 48.008 (3GPP
 * TS 29.002 V19.1.0 clauses 7.6.6.10B and 17.7.1).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ChosenSpeechVersion  ::=  OCTET STRING (SIZE (1))
 * ```
 */
export
type ChosenSpeechVersion = OCTET_STRING; // OctetStringType

/**
 * @summary Decodes an ASN.1 element into a(n) ChosenSpeechVersion
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_ChosenSpeechVersion = (el: _Element): ChosenSpeechVersion => {
    const value = $._decodeOctetString(el);
    if (value.length < 1 || value.length > 1) {
        throw new ASN1SizeError("ChosenSpeechVersion violates SIZE constraint");
    }
    return value;
};

/**
 * @summary Encodes a(n) ChosenSpeechVersion into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ChosenSpeechVersion, encoded as an ASN.1 Element.
 */
export const _encode_ChosenSpeechVersion = $._encodeOctetString;


/* eslint-enable */
