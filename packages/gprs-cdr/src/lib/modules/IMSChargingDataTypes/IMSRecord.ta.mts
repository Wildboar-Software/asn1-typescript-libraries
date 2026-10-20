/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { SCSCFRecord, _decode_SCSCFRecord, _encode_SCSCFRecord } from "../IMSChargingDataTypes/SCSCFRecord.ta.mjs";
// export { SCSCFRecord, _decode_SCSCFRecord, _encode_SCSCFRecord } from "../IMSChargingDataTypes/SCSCFRecord.ta.mjs";
import { PCSCFRecord, _decode_PCSCFRecord, _encode_PCSCFRecord } from "../IMSChargingDataTypes/PCSCFRecord.ta.mjs";
// export { PCSCFRecord, _decode_PCSCFRecord, _encode_PCSCFRecord } from "../IMSChargingDataTypes/PCSCFRecord.ta.mjs";
import { ICSCFRecord, _decode_ICSCFRecord, _encode_ICSCFRecord } from "../IMSChargingDataTypes/ICSCFRecord.ta.mjs";
// export { ICSCFRecord, _decode_ICSCFRecord, _encode_ICSCFRecord } from "../IMSChargingDataTypes/ICSCFRecord.ta.mjs";
import { MRFCRecord, _decode_MRFCRecord, _encode_MRFCRecord } from "../IMSChargingDataTypes/MRFCRecord.ta.mjs";
// export { MRFCRecord, _decode_MRFCRecord, _encode_MRFCRecord } from "../IMSChargingDataTypes/MRFCRecord.ta.mjs";
import { MGCFRecord, _decode_MGCFRecord, _encode_MGCFRecord } from "../IMSChargingDataTypes/MGCFRecord.ta.mjs";
// export { MGCFRecord, _decode_MGCFRecord, _encode_MGCFRecord } from "../IMSChargingDataTypes/MGCFRecord.ta.mjs";
import { BGCFRecord, _decode_BGCFRecord, _encode_BGCFRecord } from "../IMSChargingDataTypes/BGCFRecord.ta.mjs";
// export { BGCFRecord, _decode_BGCFRecord, _encode_BGCFRecord } from "../IMSChargingDataTypes/BGCFRecord.ta.mjs";
import { ASRecord, _decode_ASRecord, _encode_ASRecord } from "../IMSChargingDataTypes/ASRecord.ta.mjs";
// export { ASRecord, _decode_ASRecord, _encode_ASRecord } from "../IMSChargingDataTypes/ASRecord.ta.mjs";
import { ECSCFRecord, _decode_ECSCFRecord, _encode_ECSCFRecord } from "../IMSChargingDataTypes/ECSCFRecord.ta.mjs";
// export { ECSCFRecord, _decode_ECSCFRecord, _encode_ECSCFRecord } from "../IMSChargingDataTypes/ECSCFRecord.ta.mjs";
import { IBCFRecord, _decode_IBCFRecord, _encode_IBCFRecord } from "../IMSChargingDataTypes/IBCFRecord.ta.mjs";
// export { IBCFRecord, _decode_IBCFRecord, _encode_IBCFRecord } from "../IMSChargingDataTypes/IBCFRecord.ta.mjs";
import { TRFRecord, _decode_TRFRecord, _encode_TRFRecord } from "../IMSChargingDataTypes/TRFRecord.ta.mjs";
// export { TRFRecord, _decode_TRFRecord, _encode_TRFRecord } from "../IMSChargingDataTypes/TRFRecord.ta.mjs";
import { TFRecord, _decode_TFRecord, _encode_TFRecord } from "../IMSChargingDataTypes/TFRecord.ta.mjs";
// export { TFRecord, _decode_TFRecord, _encode_TFRecord } from "../IMSChargingDataTypes/TFRecord.ta.mjs";
import { ATCFRecord, _decode_ATCFRecord, _encode_ATCFRecord } from "../IMSChargingDataTypes/ATCFRecord.ta.mjs";
// export { ATCFRecord, _decode_ATCFRecord, _encode_ATCFRecord } from "../IMSChargingDataTypes/ATCFRecord.ta.mjs";


/**
 * @summary IMSRecord
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IMSRecord   ::=  CHOICE {
 *    sCSCFRecord     [63] IMPLICIT SCSCFRecord,
 *    pCSCFRecord     [64] IMPLICIT PCSCFRecord,
 *    iCSCFRecord     [65] IMPLICIT ICSCFRecord,
 *    mRFCRecord      [66] IMPLICIT MRFCRecord,
 *    mGCFRecord      [67] IMPLICIT MGCFRecord,
 *    bGCFRecord      [68] IMPLICIT BGCFRecord,
 *    aSRecord        [69] IMPLICIT ASRecord,
 *    eCSCFRecord     [70] IMPLICIT ECSCFRecord,
 *    iBCFRecord      [82] IMPLICIT IBCFRecord,
 *    tRFRecord       [89] IMPLICIT TRFRecord,
 *    tFRecord        [90] IMPLICIT TFRecord,
 *    aTCFRecord      [91] IMPLICIT ATCFRecord}
 * ```
 */
export
type IMSRecord =
    { sCSCFRecord: SCSCFRecord } /* CHOICE_ALT_ROOT */
    | { pCSCFRecord: PCSCFRecord } /* CHOICE_ALT_ROOT */
    | { iCSCFRecord: ICSCFRecord } /* CHOICE_ALT_ROOT */
    | { mRFCRecord: MRFCRecord } /* CHOICE_ALT_ROOT */
    | { mGCFRecord: MGCFRecord } /* CHOICE_ALT_ROOT */
    | { bGCFRecord: BGCFRecord } /* CHOICE_ALT_ROOT */
    | { aSRecord: ASRecord } /* CHOICE_ALT_ROOT */
    | { eCSCFRecord: ECSCFRecord } /* CHOICE_ALT_ROOT */
    | { iBCFRecord: IBCFRecord } /* CHOICE_ALT_ROOT */
    | { tRFRecord: TRFRecord } /* CHOICE_ALT_ROOT */
    | { tFRecord: TFRecord } /* CHOICE_ALT_ROOT */
    | { aTCFRecord: ATCFRecord } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_IMSRecord: $.ASN1Decoder<IMSRecord> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) IMSRecord
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_IMSRecord (el: _Element): IMSRecord {
    if (!_cached_decoder_for_IMSRecord) { _cached_decoder_for_IMSRecord = $._decode_inextensible_choice<IMSRecord>({
    "CONTEXT 63": [ "sCSCFRecord", $._decode_implicit<SCSCFRecord>(() => _decode_SCSCFRecord) ],
    "CONTEXT 64": [ "pCSCFRecord", $._decode_implicit<PCSCFRecord>(() => _decode_PCSCFRecord) ],
    "CONTEXT 65": [ "iCSCFRecord", $._decode_implicit<ICSCFRecord>(() => _decode_ICSCFRecord) ],
    "CONTEXT 66": [ "mRFCRecord", $._decode_implicit<MRFCRecord>(() => _decode_MRFCRecord) ],
    "CONTEXT 67": [ "mGCFRecord", $._decode_implicit<MGCFRecord>(() => _decode_MGCFRecord) ],
    "CONTEXT 68": [ "bGCFRecord", $._decode_implicit<BGCFRecord>(() => _decode_BGCFRecord) ],
    "CONTEXT 69": [ "aSRecord", $._decode_implicit<ASRecord>(() => _decode_ASRecord) ],
    "CONTEXT 70": [ "eCSCFRecord", $._decode_implicit<ECSCFRecord>(() => _decode_ECSCFRecord) ],
    "CONTEXT 82": [ "iBCFRecord", $._decode_implicit<IBCFRecord>(() => _decode_IBCFRecord) ],
    "CONTEXT 89": [ "tRFRecord", $._decode_implicit<TRFRecord>(() => _decode_TRFRecord) ],
    "CONTEXT 90": [ "tFRecord", $._decode_implicit<TFRecord>(() => _decode_TFRecord) ],
    "CONTEXT 91": [ "aTCFRecord", $._decode_implicit<ATCFRecord>(() => _decode_ATCFRecord) ]
}); }
    return _cached_decoder_for_IMSRecord(el);
}

let _cached_encoder_for_IMSRecord: $.ASN1Encoder<IMSRecord> | null = null;

/**
 * @summary Encodes a(n) IMSRecord into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IMSRecord, encoded as an ASN.1 Element.
 */
export
function _encode_IMSRecord (value: IMSRecord, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_IMSRecord) { _cached_encoder_for_IMSRecord = $._encode_choice<IMSRecord>({
    "sCSCFRecord": $._encode_implicit(_TagClass.context, 63, () => _encode_SCSCFRecord, $.BER),
    "pCSCFRecord": $._encode_implicit(_TagClass.context, 64, () => _encode_PCSCFRecord, $.BER),
    "iCSCFRecord": $._encode_implicit(_TagClass.context, 65, () => _encode_ICSCFRecord, $.BER),
    "mRFCRecord": $._encode_implicit(_TagClass.context, 66, () => _encode_MRFCRecord, $.BER),
    "mGCFRecord": $._encode_implicit(_TagClass.context, 67, () => _encode_MGCFRecord, $.BER),
    "bGCFRecord": $._encode_implicit(_TagClass.context, 68, () => _encode_BGCFRecord, $.BER),
    "aSRecord": $._encode_implicit(_TagClass.context, 69, () => _encode_ASRecord, $.BER),
    "eCSCFRecord": $._encode_implicit(_TagClass.context, 70, () => _encode_ECSCFRecord, $.BER),
    "iBCFRecord": $._encode_implicit(_TagClass.context, 82, () => _encode_IBCFRecord, $.BER),
    "tRFRecord": $._encode_implicit(_TagClass.context, 89, () => _encode_TRFRecord, $.BER),
    "tFRecord": $._encode_implicit(_TagClass.context, 90, () => _encode_TFRecord, $.BER),
    "aTCFRecord": $._encode_implicit(_TagClass.context, 91, () => _encode_ATCFRecord, $.BER),
}, $.BER); }
    return _cached_encoder_for_IMSRecord(value, elGetter);
}


/* eslint-enable */
