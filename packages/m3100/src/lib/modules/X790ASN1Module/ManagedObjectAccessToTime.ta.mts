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
    StopTime,
    _decode_StopTime,
    _encode_StopTime,
} from '../X790ASN1Module/StopTime.ta.mjs';

/**
 * @summary ManagedObjectAccessToTime
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ManagedObjectAccessToTime  ::=  StopTime
 * ```
 */
export type ManagedObjectAccessToTime = StopTime; // DefinedType


let _cached_decoder_for_ManagedObjectAccessToTime: $.ASN1Decoder<ManagedObjectAccessToTime> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) ManagedObjectAccessToTime
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ManagedObjectAccessToTime} The decoded data structure.
 */
export function _decode_ManagedObjectAccessToTime(el: _Element) {
    if (!_cached_decoder_for_ManagedObjectAccessToTime) {
        _cached_decoder_for_ManagedObjectAccessToTime = _decode_StopTime;
    }
    return _cached_decoder_for_ManagedObjectAccessToTime(el);
}


let _cached_encoder_for_ManagedObjectAccessToTime: $.ASN1Encoder<ManagedObjectAccessToTime> | null = null;


/**
 * @summary Encodes a(n) ManagedObjectAccessToTime into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ManagedObjectAccessToTime, encoded as an ASN.1 Element.
 */
export function _encode_ManagedObjectAccessToTime(
    value: ManagedObjectAccessToTime,
    elGetter: $.ASN1Encoder<ManagedObjectAccessToTime>
) {
    if (!_cached_encoder_for_ManagedObjectAccessToTime) {
        _cached_encoder_for_ManagedObjectAccessToTime = _encode_StopTime;
    }
    return _cached_encoder_for_ManagedObjectAccessToTime(value, elGetter);
}


/* eslint-enable */
