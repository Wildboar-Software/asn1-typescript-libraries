/* eslint-disable */
import {
    SEQUENCE,
    ASN1Element as _Element,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    ObjectAlarmSummary,
    _decode_ObjectAlarmSummary,
    _encode_ObjectAlarmSummary,
} from "../Q821-ASN1Module/ObjectAlarmSummary.ta.mjs";



/**
 * @summary AlarmSummaryData
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AlarmSummaryData  ::=  SEQUENCE OF ObjectAlarmSummary
 * ```
 */
export
type AlarmSummaryData = ObjectAlarmSummary[]; // SequenceOfType

let _cached_decoder_for_AlarmSummaryData: $.ASN1Decoder<AlarmSummaryData> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AlarmSummaryData
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AlarmSummaryData (el: _Element): AlarmSummaryData {
    if (!_cached_decoder_for_AlarmSummaryData) { _cached_decoder_for_AlarmSummaryData = $._decodeSequenceOf<ObjectAlarmSummary>(() => _decode_ObjectAlarmSummary); }
    return _cached_decoder_for_AlarmSummaryData(el);
}

let _cached_encoder_for_AlarmSummaryData: $.ASN1Encoder<AlarmSummaryData> | null = null;

/**
 * @summary Encodes a(n) AlarmSummaryData into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AlarmSummaryData, encoded as an ASN.1 Element.
 */
export
function _encode_AlarmSummaryData (value: AlarmSummaryData, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AlarmSummaryData) { _cached_encoder_for_AlarmSummaryData = $._encodeSequenceOf<ObjectAlarmSummary>(() => _encode_ObjectAlarmSummary, $.BER); }
    return _cached_encoder_for_AlarmSummaryData(value, elGetter);
}


/* eslint-enable */
