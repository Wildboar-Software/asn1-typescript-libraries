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
import * as $ from "asn1-ts/dist/node/functional";

/* START_OF_SYMBOL_DEFINITION UniqueIdentifier */
/**
 * @summary UniqueIdentifier
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * UniqueIdentifier  ::=  BIT STRING
 * ```
 */
export type UniqueIdentifier = BIT_STRING;
/* END_OF_SYMBOL_DEFINITION UniqueIdentifier */

/* START_OF_SYMBOL_DEFINITION _decode_UniqueIdentifier */
/**
 * @summary Decodes an ASN.1 element into a(n) UniqueIdentifier
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {UniqueIdentifier} The decoded data structure.
 */
export function _decode_UniqueIdentifier(el: _Element) {
    return $._decodeBitString(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_UniqueIdentifier */

/* START_OF_SYMBOL_DEFINITION _encode_UniqueIdentifier */
/**
 * @summary Encodes a(n) UniqueIdentifier into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UniqueIdentifier, encoded as an ASN.1 Element.
 */
export function _encode_UniqueIdentifier(
    value: UniqueIdentifier,
    elGetter: $.ASN1Encoder<UniqueIdentifier>
) {
    return $._encodeBitString(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_UniqueIdentifier */

/* eslint-enable */
