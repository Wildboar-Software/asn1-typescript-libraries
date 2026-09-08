/* eslint-disable */
import {
    NULL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    ScopedCriteria,
    _decode_ScopedCriteria,
    _encode_ScopedCriteria,
} from "../Q821-ASN1Module/ScopedCriteria.ta.mjs";

import {
    ObjectList,
    _decode_ObjectList,
    _encode_ObjectList,
} from "../Q821-ASN1Module/ObjectList.ta.mjs";



/**
 * @summary AlarmSynchronizationInfo
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AlarmSynchronizationInfo  ::=  CHOICE {
 *   allObjectsRelativeToSuperior  [0]  NULL,
 *   scopedCriteria                [1]  ScopedCriteria,
 *   simpleObjectList              [2]  ObjectList
 * }
 * ```
 */
export
type AlarmSynchronizationInfo =
    { allObjectsRelativeToSuperior: NULL } /* CHOICE_ALT_ROOT */
    | { scopedCriteria: ScopedCriteria } /* CHOICE_ALT_ROOT */
    | { simpleObjectList: ObjectList } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_AlarmSynchronizationInfo: $.ASN1Decoder<AlarmSynchronizationInfo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AlarmSynchronizationInfo
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AlarmSynchronizationInfo (el: _Element): AlarmSynchronizationInfo {
    if (!_cached_decoder_for_AlarmSynchronizationInfo) { _cached_decoder_for_AlarmSynchronizationInfo = $._decode_inextensible_choice<AlarmSynchronizationInfo>({
    "CONTEXT 0": [ "allObjectsRelativeToSuperior", $._decode_implicit<NULL>(() => $._decodeNull) ],
    "CONTEXT 1": [ "scopedCriteria", $._decode_implicit<ScopedCriteria>(() => _decode_ScopedCriteria) ],
    "CONTEXT 2": [ "simpleObjectList", $._decode_implicit<ObjectList>(() => _decode_ObjectList) ]
}); }
    return _cached_decoder_for_AlarmSynchronizationInfo(el);
}

let _cached_encoder_for_AlarmSynchronizationInfo: $.ASN1Encoder<AlarmSynchronizationInfo> | null = null;

/**
 * @summary Encodes a(n) AlarmSynchronizationInfo into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AlarmSynchronizationInfo, encoded as an ASN.1 Element.
 */
export
function _encode_AlarmSynchronizationInfo (value: AlarmSynchronizationInfo, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AlarmSynchronizationInfo) { _cached_encoder_for_AlarmSynchronizationInfo = $._encode_choice<AlarmSynchronizationInfo>({
    "allObjectsRelativeToSuperior": $._encode_implicit(_TagClass.context, 0, () => $._encodeNull, $.BER),
    "scopedCriteria": $._encode_implicit(_TagClass.context, 1, () => _encode_ScopedCriteria, $.BER),
    "simpleObjectList": $._encode_implicit(_TagClass.context, 2, () => _encode_ObjectList, $.BER),
}, $.BER); }
    return _cached_encoder_for_AlarmSynchronizationInfo(value, elGetter);
}


/* eslint-enable */
