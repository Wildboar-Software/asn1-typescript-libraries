/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { PFDDRecord, _decode_PFDDRecord, _encode_PFDDRecord } from "../ProSeChargingDataTypes/PFDDRecord.ta.mjs";
// export { PFDDRecord, _decode_PFDDRecord, _encode_PFDDRecord } from "../ProSeChargingDataTypes/PFDDRecord.ta.mjs";
import { PFEDRecord, _decode_PFEDRecord, _encode_PFEDRecord } from "../ProSeChargingDataTypes/PFEDRecord.ta.mjs";
// export { PFEDRecord, _decode_PFEDRecord, _encode_PFEDRecord } from "../ProSeChargingDataTypes/PFEDRecord.ta.mjs";
import { PFDCRecord, _decode_PFDCRecord, _encode_PFDCRecord } from "../ProSeChargingDataTypes/PFDCRecord.ta.mjs";
// export { PFDCRecord, _decode_PFDCRecord, _encode_PFDCRecord } from "../ProSeChargingDataTypes/PFDCRecord.ta.mjs";


/**
 * @summary ProSeRecordType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ProSeRecordType  ::=  CHOICE {
 *    pFDDRecord     [100] IMPLICIT PFDDRecord,
 *    pFEDRecord     [101] IMPLICIT PFEDRecord,
 *    pFDCRecord     [102] IMPLICIT PFDCRecord}
 * ```
 */
export
type ProSeRecordType =
    { pFDDRecord: PFDDRecord } /* CHOICE_ALT_ROOT */
    | { pFEDRecord: PFEDRecord } /* CHOICE_ALT_ROOT */
    | { pFDCRecord: PFDCRecord } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_ProSeRecordType: $.ASN1Decoder<ProSeRecordType> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ProSeRecordType
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ProSeRecordType (el: _Element): ProSeRecordType {
    if (!_cached_decoder_for_ProSeRecordType) { _cached_decoder_for_ProSeRecordType = $._decode_inextensible_choice<ProSeRecordType>({
    "CONTEXT 100": [ "pFDDRecord", $._decode_implicit<PFDDRecord>(() => _decode_PFDDRecord) ],
    "CONTEXT 101": [ "pFEDRecord", $._decode_implicit<PFEDRecord>(() => _decode_PFEDRecord) ],
    "CONTEXT 102": [ "pFDCRecord", $._decode_implicit<PFDCRecord>(() => _decode_PFDCRecord) ]
}); }
    return _cached_decoder_for_ProSeRecordType(el);
}

let _cached_encoder_for_ProSeRecordType: $.ASN1Encoder<ProSeRecordType> | null = null;

/**
 * @summary Encodes a(n) ProSeRecordType into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ProSeRecordType, encoded as an ASN.1 Element.
 */
export
function _encode_ProSeRecordType (value: ProSeRecordType, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ProSeRecordType) { _cached_encoder_for_ProSeRecordType = $._encode_choice<ProSeRecordType>({
    "pFDDRecord": $._encode_implicit(_TagClass.context, 100, () => _encode_PFDDRecord, $.BER),
    "pFEDRecord": $._encode_implicit(_TagClass.context, 101, () => _encode_PFEDRecord, $.BER),
    "pFDCRecord": $._encode_implicit(_TagClass.context, 102, () => _encode_PFDCRecord, $.BER),
}, $.BER); }
    return _cached_encoder_for_ProSeRecordType(value, elGetter);
}


/* eslint-enable */
