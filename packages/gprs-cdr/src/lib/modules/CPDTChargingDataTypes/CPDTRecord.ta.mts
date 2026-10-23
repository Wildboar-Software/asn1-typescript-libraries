/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { CPDTSCERecord, _decode_CPDTSCERecord, _encode_CPDTSCERecord } from "../CPDTChargingDataTypes/CPDTSCERecord.ta.mjs";
import { CPDTSNNRecord, _decode_CPDTSNNRecord, _encode_CPDTSNNRecord } from "../CPDTChargingDataTypes/CPDTSNNRecord.ta.mjs";


/**
 * @summary CPDTRecord
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CPDTRecord  ::=  CHOICE {
 *    cPDTSCERecord     [105] IMPLICIT CPDTSCERecord, 
 *    cPDTSNNRecord     [106] IMPLICIT CPDTSNNRecord}
 * ```
 */
export
type CPDTRecord =
    { cPDTSCERecord: CPDTSCERecord } /* CHOICE_ALT_ROOT */
    | { cPDTSNNRecord: CPDTSNNRecord } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_CPDTRecord: $.ASN1Decoder<CPDTRecord> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CPDTRecord
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CPDTRecord (el: _Element): CPDTRecord {
    if (!_cached_decoder_for_CPDTRecord) { _cached_decoder_for_CPDTRecord = $._decode_inextensible_choice<CPDTRecord>({
    "CONTEXT 105": [ "cPDTSCERecord", $._decode_implicit<CPDTSCERecord>(() => _decode_CPDTSCERecord) ],
    "CONTEXT 106": [ "cPDTSNNRecord", $._decode_implicit<CPDTSNNRecord>(() => _decode_CPDTSNNRecord) ]
}); }
    return _cached_decoder_for_CPDTRecord(el);
}

let _cached_encoder_for_CPDTRecord: $.ASN1Encoder<CPDTRecord> | null = null;

/**
 * @summary Encodes a(n) CPDTRecord into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CPDTRecord, encoded as an ASN.1 Element.
 */
export
function _encode_CPDTRecord (value: CPDTRecord, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CPDTRecord) { _cached_encoder_for_CPDTRecord = $._encode_choice<CPDTRecord>({
    "cPDTSCERecord": $._encode_implicit(_TagClass.context, 105, () => _encode_CPDTSCERecord, $.BER),
    "cPDTSNNRecord": $._encode_implicit(_TagClass.context, 106, () => _encode_CPDTSNNRecord, $.BER),
}, $.BER); }
    return _cached_encoder_for_CPDTRecord(value, elGetter);
}


/* eslint-enable */
