/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1SizeError,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ChosenEncryptionAlgorithm
 * @description
 *
 * Chosen UMTS encryption algorithm: one octet containing a complete
 * EncryptionAlgorithm as defined in 3GPP TS 25.413. Padding bits are in the
 * least significant bits (3GPP TS 29.002 V19.1.0 clause 17.7.1).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ChosenEncryptionAlgorithm  ::=  OCTET STRING (SIZE (1))
 * ```
 */
export
type ChosenEncryptionAlgorithm = OCTET_STRING; // OctetStringType

/**
 * @summary Decodes an ASN.1 element into a(n) ChosenEncryptionAlgorithm
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_ChosenEncryptionAlgorithm = (el: _Element): ChosenEncryptionAlgorithm => {
    const value = $._decodeOctetString(el);
    if (value.length < 1 || value.length > 1) {
        throw new ASN1SizeError("ChosenEncryptionAlgorithm violates SIZE constraint");
    }
    return value;
};

/**
 * @summary Encodes a(n) ChosenEncryptionAlgorithm into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ChosenEncryptionAlgorithm, encoded as an ASN.1 Element.
 */
export const _encode_ChosenEncryptionAlgorithm = $._encodeOctetString;


/* eslint-enable */
