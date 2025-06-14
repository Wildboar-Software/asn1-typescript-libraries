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

/* START_OF_SYMBOL_DEFINITION CustTroubleTickNum */
/**
 * @summary CustTroubleTickNum
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CustTroubleTickNum  ::=  GraphicString(SIZE (0..64))
 * ```
 */
export type CustTroubleTickNum = GraphicString; // GraphicString
/* END_OF_SYMBOL_DEFINITION CustTroubleTickNum */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_CustTroubleTickNum */
let _cached_decoder_for_CustTroubleTickNum: $.ASN1Decoder<CustTroubleTickNum> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_CustTroubleTickNum */

/* START_OF_SYMBOL_DEFINITION _decode_CustTroubleTickNum */
/**
 * @summary Decodes an ASN.1 element into a(n) CustTroubleTickNum
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CustTroubleTickNum} The decoded data structure.
 */
export function _decode_CustTroubleTickNum(el: _Element) {
    if (!_cached_decoder_for_CustTroubleTickNum) {
        _cached_decoder_for_CustTroubleTickNum = $._decodeGraphicString;
    }
    return _cached_decoder_for_CustTroubleTickNum(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_CustTroubleTickNum */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_CustTroubleTickNum */
let _cached_encoder_for_CustTroubleTickNum: $.ASN1Encoder<CustTroubleTickNum> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_CustTroubleTickNum */

/* START_OF_SYMBOL_DEFINITION _encode_CustTroubleTickNum */
/**
 * @summary Encodes a(n) CustTroubleTickNum into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CustTroubleTickNum, encoded as an ASN.1 Element.
 */
export function _encode_CustTroubleTickNum(
    value: CustTroubleTickNum,
    elGetter: $.ASN1Encoder<CustTroubleTickNum>
) {
    if (!_cached_encoder_for_CustTroubleTickNum) {
        _cached_encoder_for_CustTroubleTickNum = $._encodeGraphicString;
    }
    return _cached_encoder_for_CustTroubleTickNum(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_CustTroubleTickNum */

/* eslint-enable */
