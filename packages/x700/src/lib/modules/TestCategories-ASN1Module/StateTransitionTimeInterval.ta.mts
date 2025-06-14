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
/* START_OF_SYMBOL_DEFINITION StateTransitionTimeInterval */
/**
 * @summary StateTransitionTimeInterval
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * StateTransitionTimeInterval  ::=  Timespec
 * ```
 */
export type StateTransitionTimeInterval = Timespec; // DefinedType
/* END_OF_SYMBOL_DEFINITION StateTransitionTimeInterval */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_StateTransitionTimeInterval */
let _cached_decoder_for_StateTransitionTimeInterval: $.ASN1Decoder<StateTransitionTimeInterval> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_StateTransitionTimeInterval */

/* START_OF_SYMBOL_DEFINITION _decode_StateTransitionTimeInterval */
/**
 * @summary Decodes an ASN.1 element into a(n) StateTransitionTimeInterval
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {StateTransitionTimeInterval} The decoded data structure.
 */
export function _decode_StateTransitionTimeInterval(el: _Element) {
    if (!_cached_decoder_for_StateTransitionTimeInterval) {
        _cached_decoder_for_StateTransitionTimeInterval = _decode_Timespec;
    }
    return _cached_decoder_for_StateTransitionTimeInterval(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_StateTransitionTimeInterval */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_StateTransitionTimeInterval */
let _cached_encoder_for_StateTransitionTimeInterval: $.ASN1Encoder<StateTransitionTimeInterval> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_StateTransitionTimeInterval */

/* START_OF_SYMBOL_DEFINITION _encode_StateTransitionTimeInterval */
/**
 * @summary Encodes a(n) StateTransitionTimeInterval into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The StateTransitionTimeInterval, encoded as an ASN.1 Element.
 */
export function _encode_StateTransitionTimeInterval(
    value: StateTransitionTimeInterval,
    elGetter: $.ASN1Encoder<StateTransitionTimeInterval>
) {
    if (!_cached_encoder_for_StateTransitionTimeInterval) {
        _cached_encoder_for_StateTransitionTimeInterval = _encode_Timespec;
    }
    return _cached_encoder_for_StateTransitionTimeInterval(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_StateTransitionTimeInterval */

/* eslint-enable */
