/* eslint-disable */
import {
    NULL,
    GeneralizedTime,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary Requested_QoS_level
 * @description
 *
 * QoS requested when DFR produces a DOR (`reference-qos` on Read and other
 * produce-operations). ISO/IEC 10166-1:1991 §8.1.5.7, §6.3.3. Actual QoS
 * returned may differ (ISO/IEC 10166-1:1991 §8.2.5.2). Details: ISO/IEC
 * 10031-2.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Requested-QoS-level  ::=  CHOICE {
 *   level-1  [1] IMPLICIT NULL,
 *   level-2  [2] IMPLICIT NULL,
 *   level-3  [3] IMPLICIT GeneralizedTime
 *   -- specifying the requested fidelity-time
 * }
 * ```
 */
export
type Requested_QoS_level =
    { level_1: NULL } /* CHOICE_ALT_ROOT */
    | { level_2: NULL } /* CHOICE_ALT_ROOT */
    | { level_3: GeneralizedTime } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_Requested_QoS_level: $.ASN1Decoder<Requested_QoS_level> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Requested_QoS_level
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Requested_QoS_level (el: _Element): Requested_QoS_level {
    if (!_cached_decoder_for_Requested_QoS_level) { _cached_decoder_for_Requested_QoS_level = $._decode_inextensible_choice<Requested_QoS_level>({
    "CONTEXT 1": [ "level_1", $._decode_implicit<NULL>(() => $._decodeNull) ],
    "CONTEXT 2": [ "level_2", $._decode_implicit<NULL>(() => $._decodeNull) ],
    "CONTEXT 3": [ "level_3", $._decode_implicit<GeneralizedTime>(() => $._decodeGeneralizedTime) ]
}); }
    return _cached_decoder_for_Requested_QoS_level(el);
}

let _cached_encoder_for_Requested_QoS_level: $.ASN1Encoder<Requested_QoS_level> | null = null;

/**
 * @summary Encodes a(n) Requested_QoS_level into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Requested_QoS_level, encoded as an ASN.1 Element.
 */
export
function _encode_Requested_QoS_level (value: Requested_QoS_level, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Requested_QoS_level) { _cached_encoder_for_Requested_QoS_level = $._encode_choice<Requested_QoS_level>({
    "level_1": $._encode_implicit(_TagClass.context, 1, () => $._encodeNull, $.BER),
    "level_2": $._encode_implicit(_TagClass.context, 2, () => $._encodeNull, $.BER),
    "level_3": $._encode_implicit(_TagClass.context, 3, () => $._encodeGeneralizedTime, $.BER),
}, $.BER); }
    return _cached_encoder_for_Requested_QoS_level(value, elGetter);
}


/* eslint-enable */
