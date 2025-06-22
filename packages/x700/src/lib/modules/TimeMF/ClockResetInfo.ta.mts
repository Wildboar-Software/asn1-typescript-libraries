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
    ClockValue,
    _decode_ClockValue,
    _encode_ClockValue,
} from '../TimeMF/ClockValue.ta.mjs';
/**
 * @summary ClockResetInfo
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ClockResetInfo  ::=  ClockValue
 * ```
 */
export type ClockResetInfo = ClockValue; // DefinedType

let _cached_decoder_for_ClockResetInfo: $.ASN1Decoder<ClockResetInfo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ClockResetInfo
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ClockResetInfo} The decoded data structure.
 */
export function _decode_ClockResetInfo(el: _Element) {
    if (!_cached_decoder_for_ClockResetInfo) {
        _cached_decoder_for_ClockResetInfo = _decode_ClockValue;
    }
    return _cached_decoder_for_ClockResetInfo(el);
}

let _cached_encoder_for_ClockResetInfo: $.ASN1Encoder<ClockResetInfo> | null = null;

/**
 * @summary Encodes a(n) ClockResetInfo into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ClockResetInfo, encoded as an ASN.1 Element.
 */
export function _encode_ClockResetInfo(
    value: ClockResetInfo,
    elGetter: $.ASN1Encoder<ClockResetInfo>
) {
    if (!_cached_encoder_for_ClockResetInfo) {
        _cached_encoder_for_ClockResetInfo = _encode_ClockValue;
    }
    return _cached_encoder_for_ClockResetInfo(value, elGetter);
}


/* eslint-enable */
