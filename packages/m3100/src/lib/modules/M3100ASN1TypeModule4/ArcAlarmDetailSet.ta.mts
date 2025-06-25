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
    ArcAlarmDetail,
    _decode_ArcAlarmDetail,
    _encode_ArcAlarmDetail,
} from '../M3100ASN1TypeModule4/ArcAlarmDetail.ta.mjs';

/**
 * @summary ArcAlarmDetailSet
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ArcAlarmDetailSet  ::=  SET OF ArcAlarmDetail
 * ```
 */
export type ArcAlarmDetailSet = ArcAlarmDetail[]; // SetOfType


let _cached_decoder_for_ArcAlarmDetailSet: $.ASN1Decoder<ArcAlarmDetailSet> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) ArcAlarmDetailSet
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ArcAlarmDetailSet} The decoded data structure.
 */
export function _decode_ArcAlarmDetailSet(el: _Element): ArcAlarmDetailSet {
    if (!_cached_decoder_for_ArcAlarmDetailSet) {
        _cached_decoder_for_ArcAlarmDetailSet = $._decodeSetOf<ArcAlarmDetail>(
            () => _decode_ArcAlarmDetail
        );
    }
    return _cached_decoder_for_ArcAlarmDetailSet(el);
}


let _cached_encoder_for_ArcAlarmDetailSet: $.ASN1Encoder<ArcAlarmDetailSet> | null = null;


/**
 * @summary Encodes a(n) ArcAlarmDetailSet into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ArcAlarmDetailSet, encoded as an ASN.1 Element.
 */
export function _encode_ArcAlarmDetailSet(
    value: ArcAlarmDetailSet,
    elGetter: $.ASN1Encoder<ArcAlarmDetailSet>
): _Element {
    if (!_cached_encoder_for_ArcAlarmDetailSet) {
        _cached_encoder_for_ArcAlarmDetailSet = $._encodeSetOf<ArcAlarmDetail>(
            () => _encode_ArcAlarmDetail,
            $.BER
        );
    }
    return _cached_encoder_for_ArcAlarmDetailSet(value, elGetter);
}


/* eslint-enable */
