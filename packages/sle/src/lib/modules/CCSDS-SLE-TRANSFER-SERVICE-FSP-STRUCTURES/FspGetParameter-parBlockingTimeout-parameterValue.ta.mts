/* eslint-disable */
import {
    NULL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { BlockingTimeoutPeriod, _decode_BlockingTimeoutPeriod, _encode_BlockingTimeoutPeriod } from "../CCSDS-SLE-TRANSFER-SERVICE-FSP-STRUCTURES/BlockingTimeoutPeriod.ta.mjs";


/**
 * @summary FspGetParameter_parBlockingTimeout_parameterValue
 * @description
 * 
 * `blockingOn` is the blocking-timeout period in milliseconds, an integer from
 * 100 to 100000. The period runs from insertion of the first Packet into the
 * Frame Data Unit until that unit is passed to the FOP, on every MAP.
 * `blockingOff` is null.
 * 
 * Section 3.10.2.5 describes the period and does not define `blockingOff`.
 * 
 * CCSDS 912.3-B-3, table 3-11 and annex A2.5.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FspGetParameter-parBlockingTimeout-parameterValue ::= CHOICE
 *       {  blockingOff       [0]   NULL
 *       ,  blockingOn        [1]   BlockingTimeoutPeriod
 *       }
 * ```
 */
export
type FspGetParameter_parBlockingTimeout_parameterValue =
    { blockingOff: NULL } /* CHOICE_ALT_ROOT */
    | { blockingOn: BlockingTimeoutPeriod } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_FspGetParameter_parBlockingTimeout_parameterValue: $.ASN1Decoder<FspGetParameter_parBlockingTimeout_parameterValue> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) FspGetParameter_parBlockingTimeout_parameterValue
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_FspGetParameter_parBlockingTimeout_parameterValue (el: _Element): FspGetParameter_parBlockingTimeout_parameterValue {
    if (!_cached_decoder_for_FspGetParameter_parBlockingTimeout_parameterValue) { _cached_decoder_for_FspGetParameter_parBlockingTimeout_parameterValue = $._decode_inextensible_choice<FspGetParameter_parBlockingTimeout_parameterValue>({
    "CONTEXT 0": [ "blockingOff", $._decode_implicit<NULL>(() => $._decodeNull) ],
    "CONTEXT 1": [ "blockingOn", $._decode_implicit<BlockingTimeoutPeriod>(() => _decode_BlockingTimeoutPeriod) ]
}); }
    return _cached_decoder_for_FspGetParameter_parBlockingTimeout_parameterValue(el);
}

let _cached_encoder_for_FspGetParameter_parBlockingTimeout_parameterValue: $.ASN1Encoder<FspGetParameter_parBlockingTimeout_parameterValue> | null = null;

/**
 * @summary Encodes a(n) FspGetParameter_parBlockingTimeout_parameterValue into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The FspGetParameter_parBlockingTimeout_parameterValue, encoded as an ASN.1 Element.
 */
export
function _encode_FspGetParameter_parBlockingTimeout_parameterValue (value: FspGetParameter_parBlockingTimeout_parameterValue, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_FspGetParameter_parBlockingTimeout_parameterValue) { _cached_encoder_for_FspGetParameter_parBlockingTimeout_parameterValue = $._encode_choice<FspGetParameter_parBlockingTimeout_parameterValue>({
    "blockingOff": $._encode_implicit(_TagClass.context, 0, () => $._encodeNull, $.BER),
    "blockingOn": $._encode_implicit(_TagClass.context, 1, () => _encode_BlockingTimeoutPeriod, $.BER),
}, $.BER); }
    return _cached_encoder_for_FspGetParameter_parBlockingTimeout_parameterValue(value, elGetter);
}


/* eslint-enable */
