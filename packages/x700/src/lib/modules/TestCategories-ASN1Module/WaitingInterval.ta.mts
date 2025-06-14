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
/* START_OF_SYMBOL_DEFINITION WaitingInterval */
/**
 * @summary WaitingInterval
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * WaitingInterval  ::=  Timespec
 * ```
 */
export type WaitingInterval = Timespec; // DefinedType
/* END_OF_SYMBOL_DEFINITION WaitingInterval */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_WaitingInterval */
let _cached_decoder_for_WaitingInterval: $.ASN1Decoder<WaitingInterval> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_WaitingInterval */

/* START_OF_SYMBOL_DEFINITION _decode_WaitingInterval */
/**
 * @summary Decodes an ASN.1 element into a(n) WaitingInterval
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {WaitingInterval} The decoded data structure.
 */
export function _decode_WaitingInterval(el: _Element) {
    if (!_cached_decoder_for_WaitingInterval) {
        _cached_decoder_for_WaitingInterval = _decode_Timespec;
    }
    return _cached_decoder_for_WaitingInterval(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_WaitingInterval */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_WaitingInterval */
let _cached_encoder_for_WaitingInterval: $.ASN1Encoder<WaitingInterval> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_WaitingInterval */

/* START_OF_SYMBOL_DEFINITION _encode_WaitingInterval */
/**
 * @summary Encodes a(n) WaitingInterval into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The WaitingInterval, encoded as an ASN.1 Element.
 */
export function _encode_WaitingInterval(
    value: WaitingInterval,
    elGetter: $.ASN1Encoder<WaitingInterval>
) {
    if (!_cached_encoder_for_WaitingInterval) {
        _cached_encoder_for_WaitingInterval = _encode_Timespec;
    }
    return _cached_encoder_for_WaitingInterval(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_WaitingInterval */

/* eslint-enable */
