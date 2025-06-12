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
} from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";

/* START_OF_SYMBOL_DEFINITION PublicKey */
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
/* END_OF_SYMBOL_DEFINITION PublicKey */

/* START_OF_SYMBOL_DEFINITION _decode_PublicKey */
/**
 * @summary Decodes an ASN.1 element into a(n) PublicKey
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {PublicKey} The decoded data structure.
 */
export function _decode_PublicKey(el: _Element) {
    return $._decodeBitString(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_PublicKey */

/* START_OF_SYMBOL_DEFINITION _encode_PublicKey */
/**
 * @summary Encodes a(n) PublicKey into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PublicKey, encoded as an ASN.1 Element.
 */
export function _encode_PublicKey(
    value: PublicKey,
    elGetter: $.ASN1Encoder<PublicKey>
) {
    return $._encodeBitString(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_PublicKey */

/* eslint-enable */
