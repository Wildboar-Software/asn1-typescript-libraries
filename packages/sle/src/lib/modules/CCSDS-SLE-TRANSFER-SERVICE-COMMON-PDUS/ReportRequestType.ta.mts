/* eslint-disable */
import {
    type NULL,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type ReportingCycle, _decode_ReportingCycle, _encode_ReportingCycle } from "../CCSDS-SLE-TRANSFER-SERVICE-COMMON-PDUS/ReportingCycle.ta.mjs";


/**
 * @summary ReportRequestType
 * @description
 * 
 * How status reports shall be sent. `immediately` sends one report and then
 * stops any periodic reporting. `periodically` sends a report immediately and
 * then one every reporting-cycle seconds. `stop` ceases periodic reports. The
 * reporting cycle is present only for `periodically`.
 * 
 * CCSDS 911.1-B-5, sections 3.8.2.5, 3.8.2.6, and 3.8.3.1.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ReportRequestType        ::=    CHOICE
 * { immediately        [0]   NULL
 * , periodically       [1]   ReportingCycle
 * , stop               [2]   NULL
 * }
 * ```
 */
export
type ReportRequestType =
    { immediately: NULL } /* CHOICE_ALT_ROOT */
    | { periodically: ReportingCycle } /* CHOICE_ALT_ROOT */
    | { stop: NULL } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_ReportRequestType: $.ASN1Decoder<ReportRequestType> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ReportRequestType
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ReportRequestType (el: _Element): ReportRequestType {
    if (!_cached_decoder_for_ReportRequestType) { _cached_decoder_for_ReportRequestType = $._decode_inextensible_choice<ReportRequestType>({
    "CONTEXT 0": [ "immediately", $._decode_implicit<NULL>(() => $._decodeNull) ],
    "CONTEXT 1": [ "periodically", $._decode_implicit<ReportingCycle>(() => _decode_ReportingCycle) ],
    "CONTEXT 2": [ "stop", $._decode_implicit<NULL>(() => $._decodeNull) ]
}); }
    return _cached_decoder_for_ReportRequestType(el);
}

let _cached_encoder_for_ReportRequestType: $.ASN1Encoder<ReportRequestType> | null = null;

/**
 * @summary Encodes a(n) ReportRequestType into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ReportRequestType, encoded as an ASN.1 Element.
 */
export
function _encode_ReportRequestType (value: ReportRequestType, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ReportRequestType) { _cached_encoder_for_ReportRequestType = $._encode_choice<ReportRequestType>({
    "immediately": $._encode_implicit(_TagClass.context, 0, () => $._encodeNull, $.BER),
    "periodically": $._encode_implicit(_TagClass.context, 1, () => _encode_ReportingCycle, $.BER),
    "stop": $._encode_implicit(_TagClass.context, 2, () => $._encodeNull, $.BER),
}, $.BER); }
    return _cached_encoder_for_ReportRequestType(value, elGetter);
}


/* eslint-enable */
