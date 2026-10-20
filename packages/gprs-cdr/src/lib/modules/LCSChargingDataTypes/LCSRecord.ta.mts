/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { LCSGMORecord, _decode_LCSGMORecord, _encode_LCSGMORecord } from "../LCSChargingDataTypes/LCSGMORecord.ta.mjs";
import { LCSRGMTRecord, _decode_LCSRGMTRecord, _encode_LCSRGMTRecord } from "../LCSChargingDataTypes/LCSRGMTRecord.ta.mjs";
import { LCSHGMTRecord, _decode_LCSHGMTRecord, _encode_LCSHGMTRecord } from "../LCSChargingDataTypes/LCSHGMTRecord.ta.mjs";
import { LCSVGMTRecord, _decode_LCSVGMTRecord, _encode_LCSVGMTRecord } from "../LCSChargingDataTypes/LCSVGMTRecord.ta.mjs";
import { LCSGNIRecord, _decode_LCSGNIRecord, _encode_LCSGNIRecord } from "../LCSChargingDataTypes/LCSGNIRecord.ta.mjs";


/**
 * @summary LCSRecord
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * LCSRecord   ::=  CHOICE {
 *    lCSGMORecord      [71] IMPLICIT LCSGMORecord,
 *    lCSRGMTRecord     [72] IMPLICIT LCSRGMTRecord,
 *    lCSHGMTRecord     [73] IMPLICIT LCSHGMTRecord,
 *    lCSVGMTRecord     [74] IMPLICIT LCSVGMTRecord,
 *    lCSGNIRecord      [75] IMPLICIT LCSGNIRecord}
 * ```
 */
export
type LCSRecord =
    { lCSGMORecord: LCSGMORecord } /* CHOICE_ALT_ROOT */
    | { lCSRGMTRecord: LCSRGMTRecord } /* CHOICE_ALT_ROOT */
    | { lCSHGMTRecord: LCSHGMTRecord } /* CHOICE_ALT_ROOT */
    | { lCSVGMTRecord: LCSVGMTRecord } /* CHOICE_ALT_ROOT */
    | { lCSGNIRecord: LCSGNIRecord } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_LCSRecord: $.ASN1Decoder<LCSRecord> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) LCSRecord
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_LCSRecord (el: _Element): LCSRecord {
    if (!_cached_decoder_for_LCSRecord) { _cached_decoder_for_LCSRecord = $._decode_inextensible_choice<LCSRecord>({
    "CONTEXT 71": [ "lCSGMORecord", $._decode_implicit<LCSGMORecord>(() => _decode_LCSGMORecord) ],
    "CONTEXT 72": [ "lCSRGMTRecord", $._decode_implicit<LCSRGMTRecord>(() => _decode_LCSRGMTRecord) ],
    "CONTEXT 73": [ "lCSHGMTRecord", $._decode_implicit<LCSHGMTRecord>(() => _decode_LCSHGMTRecord) ],
    "CONTEXT 74": [ "lCSVGMTRecord", $._decode_implicit<LCSVGMTRecord>(() => _decode_LCSVGMTRecord) ],
    "CONTEXT 75": [ "lCSGNIRecord", $._decode_implicit<LCSGNIRecord>(() => _decode_LCSGNIRecord) ]
}); }
    return _cached_decoder_for_LCSRecord(el);
}

let _cached_encoder_for_LCSRecord: $.ASN1Encoder<LCSRecord> | null = null;

/**
 * @summary Encodes a(n) LCSRecord into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The LCSRecord, encoded as an ASN.1 Element.
 */
export
function _encode_LCSRecord (value: LCSRecord, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_LCSRecord) { _cached_encoder_for_LCSRecord = $._encode_choice<LCSRecord>({
    "lCSGMORecord": $._encode_implicit(_TagClass.context, 71, () => _encode_LCSGMORecord, $.BER),
    "lCSRGMTRecord": $._encode_implicit(_TagClass.context, 72, () => _encode_LCSRGMTRecord, $.BER),
    "lCSHGMTRecord": $._encode_implicit(_TagClass.context, 73, () => _encode_LCSHGMTRecord, $.BER),
    "lCSVGMTRecord": $._encode_implicit(_TagClass.context, 74, () => _encode_LCSVGMTRecord, $.BER),
    "lCSGNIRecord": $._encode_implicit(_TagClass.context, 75, () => _encode_LCSGNIRecord, $.BER),
}, $.BER); }
    return _cached_encoder_for_LCSRecord(value, elGetter);
}


/* eslint-enable */
