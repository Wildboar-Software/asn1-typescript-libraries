/* eslint-disable */
import {
    NULL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { ReportingCycle, _decode_ReportingCycle, _encode_ReportingCycle } from "../CCSDS-SLE-TRANSFER-SERVICE-COMMON-PDUS/ReportingCycle.ta.mjs";


/**
 * @summary CurrentReportingCycle
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CurrentReportingCycle             ::=    CHOICE
 * {  periodicReportingOff                   [0]   NULL
 * ,  periodicReportingOn                    [1]   ReportingCycle
 * }
 * ```
 */
export
type CurrentReportingCycle =
    { periodicReportingOff: NULL } /* CHOICE_ALT_ROOT */
    | { periodicReportingOn: ReportingCycle } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_CurrentReportingCycle: $.ASN1Decoder<CurrentReportingCycle> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CurrentReportingCycle
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CurrentReportingCycle (el: _Element): CurrentReportingCycle {
    if (!_cached_decoder_for_CurrentReportingCycle) { _cached_decoder_for_CurrentReportingCycle = $._decode_inextensible_choice<CurrentReportingCycle>({
    "CONTEXT 0": [ "periodicReportingOff", $._decode_implicit<NULL>(() => $._decodeNull) ],
    "CONTEXT 1": [ "periodicReportingOn", $._decode_implicit<ReportingCycle>(() => _decode_ReportingCycle) ]
}); }
    return _cached_decoder_for_CurrentReportingCycle(el);
}

let _cached_encoder_for_CurrentReportingCycle: $.ASN1Encoder<CurrentReportingCycle> | null = null;

/**
 * @summary Encodes a(n) CurrentReportingCycle into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CurrentReportingCycle, encoded as an ASN.1 Element.
 */
export
function _encode_CurrentReportingCycle (value: CurrentReportingCycle, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CurrentReportingCycle) { _cached_encoder_for_CurrentReportingCycle = $._encode_choice<CurrentReportingCycle>({
    "periodicReportingOff": $._encode_implicit(_TagClass.context, 0, () => $._encodeNull, $.BER),
    "periodicReportingOn": $._encode_implicit(_TagClass.context, 1, () => _encode_ReportingCycle, $.BER),
}, $.BER); }
    return _cached_encoder_for_CurrentReportingCycle(value, elGetter);
}


/* eslint-enable */
