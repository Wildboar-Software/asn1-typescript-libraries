/* eslint-disable */
import {
    BIT_STRING,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary PublicKey
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PublicKey  ::=  BIT STRING
 * ```
 */
export type PublicKey = BIT_STRING;

/**
 * @summary Decodes an ASN.1 element into a(n) PublicKey
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {PublicKey} The decoded data structure.
 */
export const _decode_PublicKey: $.ASN1Decoder<PublicKey> = $._decodeBitString;

/**
 * @summary Encodes a(n) PublicKey into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PublicKey, encoded as an ASN.1 Element.
 */
export const _encode_PublicKey: $.ASN1Encoder<PublicKey> = $._encodeBitString;


/* eslint-enable */
