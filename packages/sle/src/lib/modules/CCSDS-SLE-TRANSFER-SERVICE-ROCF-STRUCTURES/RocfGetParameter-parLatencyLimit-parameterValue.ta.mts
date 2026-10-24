/* eslint-disable */
import {
    type NULL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type IntPosShort, _decode_IntPosShort, _encode_IntPosShort } from "../CCSDS-SLE-TRANSFER-SERVICE-COMMON-TYPES/IntPosShort.ta.mjs";


/**
 * @summary RocfGetParameter_parLatencyLimit_parameterValue
 * @description
 * 
 * latency-limit value. online is the limit in seconds: the release-timer
 * duration, and the maximum delay from acquisition of a frame until the OCF
 * extracted from it is delivered. offline is null, which table 3-11 requires
 * when the delivery mode is offline.
 *
 * CCSDS 911.5-B-4, table 3-11 and sections 3.1.9.1.5 and 3.1.9.2.7.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RocfGetParameter-parLatencyLimit-parameterValue ::= CHOICE
 *       {  online                  [0]   IntPosShort
 *                                     -- latencyLimit in seconds
 *       ,  offline                 [1]   NULL
 *       }
 * ```
 */
export
type RocfGetParameter_parLatencyLimit_parameterValue =
    { online: IntPosShort } /* CHOICE_ALT_ROOT */
    | { offline: NULL } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_RocfGetParameter_parLatencyLimit_parameterValue: $.ASN1Decoder<RocfGetParameter_parLatencyLimit_parameterValue> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RocfGetParameter_parLatencyLimit_parameterValue
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RocfGetParameter_parLatencyLimit_parameterValue (el: _Element): RocfGetParameter_parLatencyLimit_parameterValue {
    if (!_cached_decoder_for_RocfGetParameter_parLatencyLimit_parameterValue) { _cached_decoder_for_RocfGetParameter_parLatencyLimit_parameterValue = $._decode_inextensible_choice<RocfGetParameter_parLatencyLimit_parameterValue>({
    "CONTEXT 0": [ "online", $._decode_implicit<IntPosShort>(() => _decode_IntPosShort) ],
    "CONTEXT 1": [ "offline", $._decode_implicit<NULL>(() => $._decodeNull) ]
}); }
    return _cached_decoder_for_RocfGetParameter_parLatencyLimit_parameterValue(el);
}

let _cached_encoder_for_RocfGetParameter_parLatencyLimit_parameterValue: $.ASN1Encoder<RocfGetParameter_parLatencyLimit_parameterValue> | null = null;

/**
 * @summary Encodes a(n) RocfGetParameter_parLatencyLimit_parameterValue into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RocfGetParameter_parLatencyLimit_parameterValue, encoded as an ASN.1 Element.
 */
export
function _encode_RocfGetParameter_parLatencyLimit_parameterValue (value: RocfGetParameter_parLatencyLimit_parameterValue, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RocfGetParameter_parLatencyLimit_parameterValue) { _cached_encoder_for_RocfGetParameter_parLatencyLimit_parameterValue = $._encode_choice<RocfGetParameter_parLatencyLimit_parameterValue>({
    "online": $._encode_implicit(_TagClass.context, 0, () => _encode_IntPosShort, $.BER),
    "offline": $._encode_implicit(_TagClass.context, 1, () => $._encodeNull, $.BER),
}, $.BER); }
    return _cached_encoder_for_RocfGetParameter_parLatencyLimit_parameterValue(value, elGetter);
}


/* eslint-enable */
