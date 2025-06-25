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
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';
import {
    Timespec,
    _decode_Timespec,
    _encode_Timespec,
} from '../Test-ASN1Module/Timespec.ta.mjs';
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

let _cached_decoder_for_WaitDuration: $.ASN1Decoder<WaitDuration> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) WaitDuration
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {WaitDuration} The decoded data structure.
 */
export function _decode_WaitDuration(el: _Element): WaitDuration {
    if (!_cached_decoder_for_WaitDuration) {
        _cached_decoder_for_WaitDuration = _decode_Timespec;
    }
    return _cached_decoder_for_WaitDuration(el);
}

let _cached_encoder_for_WaitDuration: $.ASN1Encoder<WaitDuration> | null = null;

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
): _Element {
    if (!_cached_encoder_for_WaitDuration) {
        _cached_encoder_for_WaitDuration = _encode_Timespec;
    }
    return _cached_encoder_for_WaitDuration(value, elGetter);
}


/* eslint-enable */
