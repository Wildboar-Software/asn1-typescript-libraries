/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { MOCallRecord, _decode_MOCallRecord, _encode_MOCallRecord } from "../CSChargingDataTypes/MOCallRecord.ta.mjs";
import { MTCallRecord, _decode_MTCallRecord, _encode_MTCallRecord } from "../CSChargingDataTypes/MTCallRecord.ta.mjs";
import { RoamingRecord, _decode_RoamingRecord, _encode_RoamingRecord } from "../CSChargingDataTypes/RoamingRecord.ta.mjs";
import { IncGatewayRecord, _decode_IncGatewayRecord, _encode_IncGatewayRecord } from "../CSChargingDataTypes/IncGatewayRecord.ta.mjs";
import { OutGatewayRecord, _decode_OutGatewayRecord, _encode_OutGatewayRecord } from "../CSChargingDataTypes/OutGatewayRecord.ta.mjs";
import { TransitCallRecord, _decode_TransitCallRecord, _encode_TransitCallRecord } from "../CSChargingDataTypes/TransitCallRecord.ta.mjs";
import { MOSMSRecord, _decode_MOSMSRecord, _encode_MOSMSRecord } from "../CSChargingDataTypes/MOSMSRecord.ta.mjs";
import { MTSMSRecord, _decode_MTSMSRecord, _encode_MTSMSRecord } from "../CSChargingDataTypes/MTSMSRecord.ta.mjs";
import { MOSMSIWRecord, _decode_MOSMSIWRecord, _encode_MOSMSIWRecord } from "../CSChargingDataTypes/MOSMSIWRecord.ta.mjs";
import { MTSMSGWRecord, _decode_MTSMSGWRecord, _encode_MTSMSGWRecord } from "../CSChargingDataTypes/MTSMSGWRecord.ta.mjs";
import { SSActionRecord, _decode_SSActionRecord, _encode_SSActionRecord } from "../CSChargingDataTypes/SSActionRecord.ta.mjs";
import { HLRIntRecord, _decode_HLRIntRecord, _encode_HLRIntRecord } from "../CSChargingDataTypes/HLRIntRecord.ta.mjs";
import { LocUpdateHLRRecord, _decode_LocUpdateHLRRecord, _encode_LocUpdateHLRRecord } from "../CSChargingDataTypes/LocUpdateHLRRecord.ta.mjs";
import { LocUpdateVLRRecord, _decode_LocUpdateVLRRecord, _encode_LocUpdateVLRRecord } from "../CSChargingDataTypes/LocUpdateVLRRecord.ta.mjs";
import { CommonEquipRecord, _decode_CommonEquipRecord, _encode_CommonEquipRecord } from "../CSChargingDataTypes/CommonEquipRecord.ta.mjs";
import { ManagementExtension, _decode_ManagementExtension, _encode_ManagementExtension } from "../CSChargingDataTypes/ManagementExtension.ta.mjs";
import { TermCAMELRecord, _decode_TermCAMELRecord, _encode_TermCAMELRecord } from "../CSChargingDataTypes/TermCAMELRecord.ta.mjs";
import { MTLCSRecord, _decode_MTLCSRecord, _encode_MTLCSRecord } from "../CSChargingDataTypes/MTLCSRecord.ta.mjs";
import { MOLCSRecord, _decode_MOLCSRecord, _encode_MOLCSRecord } from "../CSChargingDataTypes/MOLCSRecord.ta.mjs";
import { NILCSRecord, _decode_NILCSRecord, _encode_NILCSRecord } from "../CSChargingDataTypes/NILCSRecord.ta.mjs";
import { MSCsRVCCRecord, _decode_MSCsRVCCRecord, _encode_MSCsRVCCRecord } from "../CSChargingDataTypes/MSCsRVCCRecord.ta.mjs";
import { MTRFRecord, _decode_MTRFRecord, _encode_MTRFRecord } from "../CSChargingDataTypes/MTRFRecord.ta.mjs";
import { ICSregisterRecord, _decode_ICSregisterRecord, _encode_ICSregisterRecord } from "../CSChargingDataTypes/ICSregisterRecord.ta.mjs";


/**
 * @summary CSRecord
 * @description
 *
 * Choice of every CS-domain CDR the MSC server, GMSC server, or location
 * register can produce. Generation of each alternative is separately
 * enabled. The CGF forwards the records to the billing domain on the Bc
 * reference point.
 *
 * `moCallRecord` is an outgoing call, an emergency call, a forwarded leg, or
 * a CAMEL CPH variant of those. `mtCallRecord` is an incoming call at the
 * terminating MSC. `roamingRecord` is a call redirected to a subscriber
 * roaming outside the HPLMN, and is also produced by the old MSC/VLR when
 * MTRF reroutes into another PLMN. `incGatewayRecord` and `outGatewayRecord`
 * settle traffic with other networks and are produced even when the gateway
 * and the serving MSC are co-located. `transitRecord` is produced only when
 * this MSC produces neither an MOC nor an MTC for the attempt.
 *
 * `ssActionRecord` is a supplementary-service action. `hlrIntRecord` is an
 * HLR interrogation. `locUpdateVLRRecord` and `locUpdateHLRRecord` are
 * location updates. `moSMSRecord`, `mtSMSRecord`, `moSMSIWRecord`, and
 * `mtSMSGWRecord` are point-to-point short messages. `commonEquipRecord` is
 * shared equipment such as a conference bridge. `termCAMELRecord` is a
 * terminating CAMEL attempt. `mtLCSRecord`, `moLCSRecord`, and `niLCSRecord`
 * are location requests. `mSCsRVCCRecord` is an IMS to CS voice or emergency
 * transfer. `mMTRFRecord` is the old MSC/VLR's record of an MTRF reroute.
 * `iCSRegisterRecord` is an ICS registration towards IMS.
 *
 * `recTypeExtensions` is the network-specific extension alternative. Online
 * CS charging is CAMEL, outside the 32-series CDR definitions (clause 5.3).
 *
 * 3GPP TS 32.250 V19.0.0 clauses 5.2.3 and 6.1.3.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CSRecord    ::=  CHOICE {
 *    moCallRecord           [0] IMPLICIT MOCallRecord,
 *    mtCallRecord           [1] IMPLICIT MTCallRecord,
 *    roamingRecord          [2] IMPLICIT RoamingRecord,
 *    incGatewayRecord       [3] IMPLICIT IncGatewayRecord,
 *    outGatewayRecord       [4] IMPLICIT OutGatewayRecord,
 *    transitRecord          [5] IMPLICIT TransitCallRecord,
 *    moSMSRecord            [6] IMPLICIT MOSMSRecord,
 *    mtSMSRecord            [7] IMPLICIT MTSMSRecord,
 *    moSMSIWRecord          [8] IMPLICIT MOSMSIWRecord,
 *    mtSMSGWRecord          [9] IMPLICIT MTSMSGWRecord,
 *    ssActionRecord         [10] IMPLICIT SSActionRecord,
 *    hlrIntRecord           [11] IMPLICIT HLRIntRecord,
 *    locUpdateHLRRecord     [12] IMPLICIT LocUpdateHLRRecord,
 *    locUpdateVLRRecord     [13] IMPLICIT LocUpdateVLRRecord,
 *    commonEquipRecord      [14] IMPLICIT CommonEquipRecord,
 *    recTypeExtensions      [15] IMPLICIT SET  OF
 *       ManagementExtension,
 *    termCAMELRecord        [16] IMPLICIT TermCAMELRecord,
 *    mtLCSRecord            [17] IMPLICIT MTLCSRecord,
 *    moLCSRecord            [18] IMPLICIT MOLCSRecord,
 *    niLCSRecord            [19] IMPLICIT NILCSRecord,
 *    mSCsRVCCRecord         [20] IMPLICIT MSCsRVCCRecord,
 *    mMTRFRecord            [21] IMPLICIT MTRFRecord,
 *    iCSRegisterRecord      [22] IMPLICIT ICSregisterRecord}
 * ```
 */
export
type CSRecord =
    { moCallRecord: MOCallRecord } /* CHOICE_ALT_ROOT */
    | { mtCallRecord: MTCallRecord } /* CHOICE_ALT_ROOT */
    | { roamingRecord: RoamingRecord } /* CHOICE_ALT_ROOT */
    | { incGatewayRecord: IncGatewayRecord } /* CHOICE_ALT_ROOT */
    | { outGatewayRecord: OutGatewayRecord } /* CHOICE_ALT_ROOT */
    | { transitRecord: TransitCallRecord } /* CHOICE_ALT_ROOT */
    | { moSMSRecord: MOSMSRecord } /* CHOICE_ALT_ROOT */
    | { mtSMSRecord: MTSMSRecord } /* CHOICE_ALT_ROOT */
    | { moSMSIWRecord: MOSMSIWRecord } /* CHOICE_ALT_ROOT */
    | { mtSMSGWRecord: MTSMSGWRecord } /* CHOICE_ALT_ROOT */
    | { ssActionRecord: SSActionRecord } /* CHOICE_ALT_ROOT */
    | { hlrIntRecord: HLRIntRecord } /* CHOICE_ALT_ROOT */
    | { locUpdateHLRRecord: LocUpdateHLRRecord } /* CHOICE_ALT_ROOT */
    | { locUpdateVLRRecord: LocUpdateVLRRecord } /* CHOICE_ALT_ROOT */
    | { commonEquipRecord: CommonEquipRecord } /* CHOICE_ALT_ROOT */
    | { recTypeExtensions: ManagementExtension[] } /* CHOICE_ALT_ROOT */
    | { termCAMELRecord: TermCAMELRecord } /* CHOICE_ALT_ROOT */
    | { mtLCSRecord: MTLCSRecord } /* CHOICE_ALT_ROOT */
    | { moLCSRecord: MOLCSRecord } /* CHOICE_ALT_ROOT */
    | { niLCSRecord: NILCSRecord } /* CHOICE_ALT_ROOT */
    | { mSCsRVCCRecord: MSCsRVCCRecord } /* CHOICE_ALT_ROOT */
    | { mMTRFRecord: MTRFRecord } /* CHOICE_ALT_ROOT */
    | { iCSRegisterRecord: ICSregisterRecord } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_CSRecord: $.ASN1Decoder<CSRecord> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CSRecord
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CSRecord (el: _Element): CSRecord {
    if (!_cached_decoder_for_CSRecord) { _cached_decoder_for_CSRecord = $._decode_inextensible_choice<CSRecord>({
    "CONTEXT 0": [ "moCallRecord", $._decode_implicit<MOCallRecord>(() => _decode_MOCallRecord) ],
    "CONTEXT 1": [ "mtCallRecord", $._decode_implicit<MTCallRecord>(() => _decode_MTCallRecord) ],
    "CONTEXT 2": [ "roamingRecord", $._decode_implicit<RoamingRecord>(() => _decode_RoamingRecord) ],
    "CONTEXT 3": [ "incGatewayRecord", $._decode_implicit<IncGatewayRecord>(() => _decode_IncGatewayRecord) ],
    "CONTEXT 4": [ "outGatewayRecord", $._decode_implicit<OutGatewayRecord>(() => _decode_OutGatewayRecord) ],
    "CONTEXT 5": [ "transitRecord", $._decode_implicit<TransitCallRecord>(() => _decode_TransitCallRecord) ],
    "CONTEXT 6": [ "moSMSRecord", $._decode_implicit<MOSMSRecord>(() => _decode_MOSMSRecord) ],
    "CONTEXT 7": [ "mtSMSRecord", $._decode_implicit<MTSMSRecord>(() => _decode_MTSMSRecord) ],
    "CONTEXT 8": [ "moSMSIWRecord", $._decode_implicit<MOSMSIWRecord>(() => _decode_MOSMSIWRecord) ],
    "CONTEXT 9": [ "mtSMSGWRecord", $._decode_implicit<MTSMSGWRecord>(() => _decode_MTSMSGWRecord) ],
    "CONTEXT 10": [ "ssActionRecord", $._decode_implicit<SSActionRecord>(() => _decode_SSActionRecord) ],
    "CONTEXT 11": [ "hlrIntRecord", $._decode_implicit<HLRIntRecord>(() => _decode_HLRIntRecord) ],
    "CONTEXT 12": [ "locUpdateHLRRecord", $._decode_implicit<LocUpdateHLRRecord>(() => _decode_LocUpdateHLRRecord) ],
    "CONTEXT 13": [ "locUpdateVLRRecord", $._decode_implicit<LocUpdateVLRRecord>(() => _decode_LocUpdateVLRRecord) ],
    "CONTEXT 14": [ "commonEquipRecord", $._decode_implicit<CommonEquipRecord>(() => _decode_CommonEquipRecord) ],
    "CONTEXT 15": [ "recTypeExtensions", $._decode_implicit<ManagementExtension[]>(() => $._decodeSetOf<ManagementExtension>(() => _decode_ManagementExtension)) ],
    "CONTEXT 16": [ "termCAMELRecord", $._decode_implicit<TermCAMELRecord>(() => _decode_TermCAMELRecord) ],
    "CONTEXT 17": [ "mtLCSRecord", $._decode_implicit<MTLCSRecord>(() => _decode_MTLCSRecord) ],
    "CONTEXT 18": [ "moLCSRecord", $._decode_implicit<MOLCSRecord>(() => _decode_MOLCSRecord) ],
    "CONTEXT 19": [ "niLCSRecord", $._decode_implicit<NILCSRecord>(() => _decode_NILCSRecord) ],
    "CONTEXT 20": [ "mSCsRVCCRecord", $._decode_implicit<MSCsRVCCRecord>(() => _decode_MSCsRVCCRecord) ],
    "CONTEXT 21": [ "mMTRFRecord", $._decode_implicit<MTRFRecord>(() => _decode_MTRFRecord) ],
    "CONTEXT 22": [ "iCSRegisterRecord", $._decode_implicit<ICSregisterRecord>(() => _decode_ICSregisterRecord) ]
}); }
    return _cached_decoder_for_CSRecord(el);
}

let _cached_encoder_for_CSRecord: $.ASN1Encoder<CSRecord> | null = null;

/**
 * @summary Encodes a(n) CSRecord into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CSRecord, encoded as an ASN.1 Element.
 */
export
function _encode_CSRecord (value: CSRecord, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CSRecord) { _cached_encoder_for_CSRecord = $._encode_choice<CSRecord>({
    "moCallRecord": $._encode_implicit(_TagClass.context, 0, () => _encode_MOCallRecord, $.BER),
    "mtCallRecord": $._encode_implicit(_TagClass.context, 1, () => _encode_MTCallRecord, $.BER),
    "roamingRecord": $._encode_implicit(_TagClass.context, 2, () => _encode_RoamingRecord, $.BER),
    "incGatewayRecord": $._encode_implicit(_TagClass.context, 3, () => _encode_IncGatewayRecord, $.BER),
    "outGatewayRecord": $._encode_implicit(_TagClass.context, 4, () => _encode_OutGatewayRecord, $.BER),
    "transitRecord": $._encode_implicit(_TagClass.context, 5, () => _encode_TransitCallRecord, $.BER),
    "moSMSRecord": $._encode_implicit(_TagClass.context, 6, () => _encode_MOSMSRecord, $.BER),
    "mtSMSRecord": $._encode_implicit(_TagClass.context, 7, () => _encode_MTSMSRecord, $.BER),
    "moSMSIWRecord": $._encode_implicit(_TagClass.context, 8, () => _encode_MOSMSIWRecord, $.BER),
    "mtSMSGWRecord": $._encode_implicit(_TagClass.context, 9, () => _encode_MTSMSGWRecord, $.BER),
    "ssActionRecord": $._encode_implicit(_TagClass.context, 10, () => _encode_SSActionRecord, $.BER),
    "hlrIntRecord": $._encode_implicit(_TagClass.context, 11, () => _encode_HLRIntRecord, $.BER),
    "locUpdateHLRRecord": $._encode_implicit(_TagClass.context, 12, () => _encode_LocUpdateHLRRecord, $.BER),
    "locUpdateVLRRecord": $._encode_implicit(_TagClass.context, 13, () => _encode_LocUpdateVLRRecord, $.BER),
    "commonEquipRecord": $._encode_implicit(_TagClass.context, 14, () => _encode_CommonEquipRecord, $.BER),
    "recTypeExtensions": $._encode_implicit(_TagClass.context, 15, () => $._encodeSetOf<ManagementExtension>(() => _encode_ManagementExtension, $.BER), $.BER),
    "termCAMELRecord": $._encode_implicit(_TagClass.context, 16, () => _encode_TermCAMELRecord, $.BER),
    "mtLCSRecord": $._encode_implicit(_TagClass.context, 17, () => _encode_MTLCSRecord, $.BER),
    "moLCSRecord": $._encode_implicit(_TagClass.context, 18, () => _encode_MOLCSRecord, $.BER),
    "niLCSRecord": $._encode_implicit(_TagClass.context, 19, () => _encode_NILCSRecord, $.BER),
    "mSCsRVCCRecord": $._encode_implicit(_TagClass.context, 20, () => _encode_MSCsRVCCRecord, $.BER),
    "mMTRFRecord": $._encode_implicit(_TagClass.context, 21, () => _encode_MTRFRecord, $.BER),
    "iCSRegisterRecord": $._encode_implicit(_TagClass.context, 22, () => _encode_ICSregisterRecord, $.BER),
}, $.BER); }
    return _cached_encoder_for_CSRecord(value, elGetter);
}


/* eslint-enable */
