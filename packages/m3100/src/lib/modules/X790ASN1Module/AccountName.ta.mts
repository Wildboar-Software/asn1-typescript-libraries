/* eslint-disable */
import {
    GraphicString,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/functional.mjs';

/* START_OF_SYMBOL_DEFINITION AccountName */
/**
 * @summary AccountName
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AccountName  ::=  GraphicString(SIZE (0..64))
 * ```
 */
export type AccountName = GraphicString; // GraphicString
/* END_OF_SYMBOL_DEFINITION AccountName */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_AccountName */
let _cached_decoder_for_AccountName: $.ASN1Decoder<AccountName> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_AccountName */

/* START_OF_SYMBOL_DEFINITION _decode_AccountName */
/**
 * @summary Decodes an ASN.1 element into a(n) AccountName
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AccountName} The decoded data structure.
 */
export function _decode_AccountName(el: _Element) {
    if (!_cached_decoder_for_AccountName) {
        _cached_decoder_for_AccountName = $._decodeGraphicString;
    }
    return _cached_decoder_for_AccountName(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_AccountName */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_AccountName */
let _cached_encoder_for_AccountName: $.ASN1Encoder<AccountName> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_AccountName */

/* START_OF_SYMBOL_DEFINITION _encode_AccountName */
/**
 * @summary Encodes a(n) AccountName into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AccountName, encoded as an ASN.1 Element.
 */
export function _encode_AccountName(
    value: AccountName,
    elGetter: $.ASN1Encoder<AccountName>
) {
    if (!_cached_encoder_for_AccountName) {
        _cached_encoder_for_AccountName = $._encodeGraphicString;
    }
    return _cached_encoder_for_AccountName(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_AccountName */

/* eslint-enable */
