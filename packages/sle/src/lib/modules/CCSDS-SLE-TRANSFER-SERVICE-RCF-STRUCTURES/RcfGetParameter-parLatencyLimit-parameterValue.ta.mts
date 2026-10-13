/* eslint-disable */
import {
    NULL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { IntPosShort, _decode_IntPosShort, _encode_IntPosShort } from "../CCSDS-SLE-TRANSFER-SERVICE-COMMON-TYPES/IntPosShort.ta.mjs";
// export { IntPosShort, _decode_IntPosShort, _encode_IntPosShort } from "../CCSDS-SLE-TRANSFER-SERVICE-COMMON-TYPES/IntPosShort.ta.mjs";


/**
 * @summary RcfGetParameter_parLatencyLimit_parameterValue
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RcfGetParameter-parLatencyLimit-parameterValue ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type RcfGetParameter_parLatencyLimit_parameterValue =
    { online: IntPosShort } /* CHOICE_ALT_ROOT */
    | { offline: NULL } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_RcfGetParameter_parLatencyLimit_parameterValue: $.ASN1Decoder<RcfGetParameter_parLatencyLimit_parameterValue> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RcfGetParameter_parLatencyLimit_parameterValue
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RcfGetParameter_parLatencyLimit_parameterValue (el: _Element): RcfGetParameter_parLatencyLimit_parameterValue {
    if (!_cached_decoder_for_RcfGetParameter_parLatencyLimit_parameterValue) { _cached_decoder_for_RcfGetParameter_parLatencyLimit_parameterValue = $._decode_inextensible_choice<RcfGetParameter_parLatencyLimit_parameterValue>({
    "CONTEXT 0": [ "online", $._decode_implicit<IntPosShort>(() => _decode_IntPosShort) ],
    "CONTEXT 1": [ "offline", $._decode_implicit<NULL>(() => $._decodeNull) ]
}); }
    return _cached_decoder_for_RcfGetParameter_parLatencyLimit_parameterValue(el);
}

let _cached_encoder_for_RcfGetParameter_parLatencyLimit_parameterValue: $.ASN1Encoder<RcfGetParameter_parLatencyLimit_parameterValue> | null = null;

/**
 * @summary Encodes a(n) RcfGetParameter_parLatencyLimit_parameterValue into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RcfGetParameter_parLatencyLimit_parameterValue, encoded as an ASN.1 Element.
 */
export
function _encode_RcfGetParameter_parLatencyLimit_parameterValue (value: RcfGetParameter_parLatencyLimit_parameterValue, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RcfGetParameter_parLatencyLimit_parameterValue) { _cached_encoder_for_RcfGetParameter_parLatencyLimit_parameterValue = $._encode_choice<RcfGetParameter_parLatencyLimit_parameterValue>({
    "online": $._encode_implicit(_TagClass.context, 0, () => _encode_IntPosShort, $.BER),
    "offline": $._encode_implicit(_TagClass.context, 1, () => $._encodeNull, $.BER),
}, $.BER); }
    return _cached_encoder_for_RcfGetParameter_parLatencyLimit_parameterValue(value, elGetter);
}


/* eslint-enable */
