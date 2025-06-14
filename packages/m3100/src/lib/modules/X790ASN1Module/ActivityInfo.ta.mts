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

/* START_OF_SYMBOL_DEFINITION ActivityInfo */
/**
 * @summary ActivityInfo
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ActivityInfo  ::=  GraphicString(SIZE (0..256))
 * ```
 */
export type ActivityInfo = GraphicString; // GraphicString
/* END_OF_SYMBOL_DEFINITION ActivityInfo */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ActivityInfo */
let _cached_decoder_for_ActivityInfo: $.ASN1Decoder<ActivityInfo> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ActivityInfo */

/* START_OF_SYMBOL_DEFINITION _decode_ActivityInfo */
/**
 * @summary Decodes an ASN.1 element into a(n) ActivityInfo
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ActivityInfo} The decoded data structure.
 */
export function _decode_ActivityInfo(el: _Element) {
    if (!_cached_decoder_for_ActivityInfo) {
        _cached_decoder_for_ActivityInfo = $._decodeGraphicString;
    }
    return _cached_decoder_for_ActivityInfo(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ActivityInfo */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ActivityInfo */
let _cached_encoder_for_ActivityInfo: $.ASN1Encoder<ActivityInfo> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ActivityInfo */

/* START_OF_SYMBOL_DEFINITION _encode_ActivityInfo */
/**
 * @summary Encodes a(n) ActivityInfo into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ActivityInfo, encoded as an ASN.1 Element.
 */
export function _encode_ActivityInfo(
    value: ActivityInfo,
    elGetter: $.ASN1Encoder<ActivityInfo>
) {
    if (!_cached_encoder_for_ActivityInfo) {
        _cached_encoder_for_ActivityInfo = $._encodeGraphicString;
    }
    return _cached_encoder_for_ActivityInfo(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ActivityInfo */

/* eslint-enable */
