/* eslint-disable */
import {
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
/* START_OF_SYMBOL_DEFINITION NationallyDefinedBodyPart */
/**
 * @summary NationallyDefinedBodyPart
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * NationallyDefinedBodyPart  ::=  NATIONAL-BODY-PARTS.&Type
 * ```
 */
export type NationallyDefinedBodyPart = _Element; // ObjectClassFieldType
/* END_OF_SYMBOL_DEFINITION NationallyDefinedBodyPart */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_NationallyDefinedBodyPart */
let _cached_decoder_for_NationallyDefinedBodyPart: $.ASN1Decoder<NationallyDefinedBodyPart> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_NationallyDefinedBodyPart */

/* START_OF_SYMBOL_DEFINITION _decode_NationallyDefinedBodyPart */
/**
 * @summary Decodes an ASN.1 element into a(n) NationallyDefinedBodyPart
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {NationallyDefinedBodyPart} The decoded data structure.
 */
export function _decode_NationallyDefinedBodyPart(el: _Element) {
    if (!_cached_decoder_for_NationallyDefinedBodyPart) {
        _cached_decoder_for_NationallyDefinedBodyPart = $._decodeAny;
    }
    return _cached_decoder_for_NationallyDefinedBodyPart(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_NationallyDefinedBodyPart */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_NationallyDefinedBodyPart */
let _cached_encoder_for_NationallyDefinedBodyPart: $.ASN1Encoder<NationallyDefinedBodyPart> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_NationallyDefinedBodyPart */

/* START_OF_SYMBOL_DEFINITION _encode_NationallyDefinedBodyPart */
/**
 * @summary Encodes a(n) NationallyDefinedBodyPart into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NationallyDefinedBodyPart, encoded as an ASN.1 Element.
 */
export function _encode_NationallyDefinedBodyPart(
    value: NationallyDefinedBodyPart,
    elGetter: $.ASN1Encoder<NationallyDefinedBodyPart>
) {
    if (!_cached_encoder_for_NationallyDefinedBodyPart) {
        _cached_encoder_for_NationallyDefinedBodyPart = $._encodeAny;
    }
    return _cached_encoder_for_NationallyDefinedBodyPart(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_NationallyDefinedBodyPart */

/* eslint-enable */
