/* eslint-disable */
import {
    GeneralizedTime,
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


/**
 * @summary ManagedObjectAccessFromTime
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ManagedObjectAccessFromTime  ::=  GeneralizedTime
 * ```
 */
export type ManagedObjectAccessFromTime = GeneralizedTime; // GeneralizedTime


let _cached_decoder_for_ManagedObjectAccessFromTime: $.ASN1Decoder<ManagedObjectAccessFromTime> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) ManagedObjectAccessFromTime
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ManagedObjectAccessFromTime} The decoded data structure.
 */
export function _decode_ManagedObjectAccessFromTime(el: _Element) {
    if (!_cached_decoder_for_ManagedObjectAccessFromTime) {
        _cached_decoder_for_ManagedObjectAccessFromTime =
            $._decodeGeneralizedTime;
    }
    return _cached_decoder_for_ManagedObjectAccessFromTime(el);
}


let _cached_encoder_for_ManagedObjectAccessFromTime: $.ASN1Encoder<ManagedObjectAccessFromTime> | null = null;


/**
 * @summary Encodes a(n) ManagedObjectAccessFromTime into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ManagedObjectAccessFromTime, encoded as an ASN.1 Element.
 */
export function _encode_ManagedObjectAccessFromTime(
    value: ManagedObjectAccessFromTime,
    elGetter: $.ASN1Encoder<ManagedObjectAccessFromTime>
) {
    if (!_cached_encoder_for_ManagedObjectAccessFromTime) {
        _cached_encoder_for_ManagedObjectAccessFromTime =
            $._encodeGeneralizedTime;
    }
    return _cached_encoder_for_ManagedObjectAccessFromTime(value, elGetter);
}


/* eslint-enable */
