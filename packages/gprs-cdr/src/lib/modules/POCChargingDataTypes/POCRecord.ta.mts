/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { PPFRecord, _decode_PPFRecord, _encode_PPFRecord } from "../POCChargingDataTypes/PPFRecord.ta.mjs";
import { CPFRecord, _decode_CPFRecord, _encode_CPFRecord } from "../POCChargingDataTypes/CPFRecord.ta.mjs";


/**
 * @summary POCRecord
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * POCRecord   ::=  CHOICE {
 *    pPFRecord     [80] IMPLICIT PPFRecord,
 *    cPFRecord     [81] IMPLICIT CPFRecord}
 * ```
 */
export
type POCRecord =
    { pPFRecord: PPFRecord } /* CHOICE_ALT_ROOT */
    | { cPFRecord: CPFRecord } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_POCRecord: $.ASN1Decoder<POCRecord> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) POCRecord
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_POCRecord (el: _Element): POCRecord {
    if (!_cached_decoder_for_POCRecord) { _cached_decoder_for_POCRecord = $._decode_inextensible_choice<POCRecord>({
    "CONTEXT 80": [ "pPFRecord", $._decode_implicit<PPFRecord>(() => _decode_PPFRecord) ],
    "CONTEXT 81": [ "cPFRecord", $._decode_implicit<CPFRecord>(() => _decode_CPFRecord) ]
}); }
    return _cached_decoder_for_POCRecord(el);
}

let _cached_encoder_for_POCRecord: $.ASN1Encoder<POCRecord> | null = null;

/**
 * @summary Encodes a(n) POCRecord into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The POCRecord, encoded as an ASN.1 Element.
 */
export
function _encode_POCRecord (value: POCRecord, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_POCRecord) { _cached_encoder_for_POCRecord = $._encode_choice<POCRecord>({
    "pPFRecord": $._encode_implicit(_TagClass.context, 80, () => _encode_PPFRecord, $.BER),
    "cPFRecord": $._encode_implicit(_TagClass.context, 81, () => _encode_CPFRecord, $.BER),
}, $.BER); }
    return _cached_encoder_for_POCRecord(value, elGetter);
}


/* eslint-enable */
