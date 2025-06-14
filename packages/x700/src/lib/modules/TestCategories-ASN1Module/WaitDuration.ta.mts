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
import {
    Timespec,
    _decode_Timespec,
    _encode_Timespec,
} from '../Test-ASN1Module/Timespec.ta.mjs';
/* START_OF_SYMBOL_DEFINITION WaitDuration */
/**
 * @summary WaitDuration
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * WaitDuration  ::=  Timespec
 * ```
 */
export type WaitDuration = Timespec; // DefinedType
/* END_OF_SYMBOL_DEFINITION WaitDuration */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_WaitDuration */
let _cached_decoder_for_WaitDuration: $.ASN1Decoder<WaitDuration> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_WaitDuration */

/* START_OF_SYMBOL_DEFINITION _decode_WaitDuration */
/**
 * @summary Decodes an ASN.1 element into a(n) WaitDuration
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {WaitDuration} The decoded data structure.
 */
export function _decode_WaitDuration(el: _Element) {
    if (!_cached_decoder_for_WaitDuration) {
        _cached_decoder_for_WaitDuration = _decode_Timespec;
    }
    return _cached_decoder_for_WaitDuration(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_WaitDuration */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_WaitDuration */
let _cached_encoder_for_WaitDuration: $.ASN1Encoder<WaitDuration> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_WaitDuration */

/* START_OF_SYMBOL_DEFINITION _encode_WaitDuration */
/**
 * @summary Encodes a(n) WaitDuration into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The WaitDuration, encoded as an ASN.1 Element.
 */
export function _encode_WaitDuration(
    value: WaitDuration,
    elGetter: $.ASN1Encoder<WaitDuration>
) {
    if (!_cached_encoder_for_WaitDuration) {
        _cached_encoder_for_WaitDuration = _encode_Timespec;
    }
    return _cached_encoder_for_WaitDuration(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_WaitDuration */

/* eslint-enable */
