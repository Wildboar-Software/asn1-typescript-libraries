/* eslint-disable */
import {
    UniversalString,
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

/* START_OF_SYMBOL_DEFINITION InterworkingMDName */
/**
 * @summary InterworkingMDName
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * InterworkingMDName  ::=  UniversalString
 * ```
 */
export type InterworkingMDName = UniversalString; // UniversalString
/* END_OF_SYMBOL_DEFINITION InterworkingMDName */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_InterworkingMDName */
let _cached_decoder_for_InterworkingMDName: $.ASN1Decoder<InterworkingMDName> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_InterworkingMDName */

/* START_OF_SYMBOL_DEFINITION _decode_InterworkingMDName */
/**
 * @summary Decodes an ASN.1 element into a(n) InterworkingMDName
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {InterworkingMDName} The decoded data structure.
 */
export function _decode_InterworkingMDName(el: _Element) {
    if (!_cached_decoder_for_InterworkingMDName) {
        _cached_decoder_for_InterworkingMDName = $._decodeUniversalString;
    }
    return _cached_decoder_for_InterworkingMDName(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_InterworkingMDName */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_InterworkingMDName */
let _cached_encoder_for_InterworkingMDName: $.ASN1Encoder<InterworkingMDName> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_InterworkingMDName */

/* START_OF_SYMBOL_DEFINITION _encode_InterworkingMDName */
/**
 * @summary Encodes a(n) InterworkingMDName into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The InterworkingMDName, encoded as an ASN.1 Element.
 */
export function _encode_InterworkingMDName(
    value: InterworkingMDName,
    elGetter: $.ASN1Encoder<InterworkingMDName>
) {
    if (!_cached_encoder_for_InterworkingMDName) {
        _cached_encoder_for_InterworkingMDName = $._encodeUniversalString;
    }
    return _cached_encoder_for_InterworkingMDName(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_InterworkingMDName */

/* eslint-enable */
