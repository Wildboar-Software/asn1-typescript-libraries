/* eslint-disable */
import {
    INTEGER,
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

/* START_OF_SYMBOL_DEFINITION EndToEndDelay */
/**
 * @summary EndToEndDelay
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * EndToEndDelay  ::=  INTEGER(0..65535)
 * ```
 */
export type EndToEndDelay = INTEGER;
/* END_OF_SYMBOL_DEFINITION EndToEndDelay */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_EndToEndDelay */
let _cached_decoder_for_EndToEndDelay: $.ASN1Decoder<EndToEndDelay> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_EndToEndDelay */

/* START_OF_SYMBOL_DEFINITION _decode_EndToEndDelay */
/**
 * @summary Decodes an ASN.1 element into a(n) EndToEndDelay
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {EndToEndDelay} The decoded data structure.
 */
export function _decode_EndToEndDelay(el: _Element) {
    if (!_cached_decoder_for_EndToEndDelay) {
        _cached_decoder_for_EndToEndDelay = $._decodeInteger;
    }
    return _cached_decoder_for_EndToEndDelay(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_EndToEndDelay */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_EndToEndDelay */
let _cached_encoder_for_EndToEndDelay: $.ASN1Encoder<EndToEndDelay> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_EndToEndDelay */

/* START_OF_SYMBOL_DEFINITION _encode_EndToEndDelay */
/**
 * @summary Encodes a(n) EndToEndDelay into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EndToEndDelay, encoded as an ASN.1 Element.
 */
export function _encode_EndToEndDelay(
    value: EndToEndDelay,
    elGetter: $.ASN1Encoder<EndToEndDelay>
) {
    if (!_cached_encoder_for_EndToEndDelay) {
        _cached_encoder_for_EndToEndDelay = $._encodeInteger;
    }
    return _cached_encoder_for_EndToEndDelay(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_EndToEndDelay */

/* eslint-enable */
