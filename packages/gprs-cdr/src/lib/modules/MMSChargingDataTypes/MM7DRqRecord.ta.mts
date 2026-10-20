/* eslint-disable */
import {
    INTEGER,
    OCTET_STRING,
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { RecordType, _decode_RecordType, _encode_RecordType } from "../MMSChargingDataTypes/RecordType.ta.mjs";
// export { RecordType, RecordType_moCallRecord /* IMPORTED_LONG_NAMED_INTEGER */, moCallRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mtCallRecord /* IMPORTED_LONG_NAMED_INTEGER */, mtCallRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_roamingRecord /* IMPORTED_LONG_NAMED_INTEGER */, roamingRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_incGatewayRecord /* IMPORTED_LONG_NAMED_INTEGER */, incGatewayRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_outGatewayRecord /* IMPORTED_LONG_NAMED_INTEGER */, outGatewayRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_transitCallRecord /* IMPORTED_LONG_NAMED_INTEGER */, transitCallRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_moSMSRecord /* IMPORTED_LONG_NAMED_INTEGER */, moSMSRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mtSMSRecord /* IMPORTED_LONG_NAMED_INTEGER */, mtSMSRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_moSMSIWRecord /* IMPORTED_LONG_NAMED_INTEGER */, moSMSIWRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mtSMSGWRecord /* IMPORTED_LONG_NAMED_INTEGER */, mtSMSGWRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_ssActionRecord /* IMPORTED_LONG_NAMED_INTEGER */, ssActionRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_hlrIntRecord /* IMPORTED_LONG_NAMED_INTEGER */, hlrIntRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_locUpdateHLRRecord /* IMPORTED_LONG_NAMED_INTEGER */, locUpdateHLRRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_locUpdateVLRRecord /* IMPORTED_LONG_NAMED_INTEGER */, locUpdateVLRRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_commonEquipRecord /* IMPORTED_LONG_NAMED_INTEGER */, commonEquipRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_moTraceRecord /* IMPORTED_LONG_NAMED_INTEGER */, moTraceRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mtTraceRecord /* IMPORTED_LONG_NAMED_INTEGER */, mtTraceRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_termCAMELRecord /* IMPORTED_LONG_NAMED_INTEGER */, termCAMELRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_sgsnPDPRecord /* IMPORTED_LONG_NAMED_INTEGER */, sgsnPDPRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_sgsnMMRecord /* IMPORTED_LONG_NAMED_INTEGER */, sgsnMMRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_sgsnSMORecord /* IMPORTED_LONG_NAMED_INTEGER */, sgsnSMORecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_sgsnSMTRecord /* IMPORTED_LONG_NAMED_INTEGER */, sgsnSMTRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mtLCSRecord /* IMPORTED_LONG_NAMED_INTEGER */, mtLCSRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_moLCSRecord /* IMPORTED_LONG_NAMED_INTEGER */, moLCSRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_niLCSRecord /* IMPORTED_LONG_NAMED_INTEGER */, niLCSRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_sgsnMTLCSRecord /* IMPORTED_LONG_NAMED_INTEGER */, sgsnMTLCSRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_sgsnMOLCSRecord /* IMPORTED_LONG_NAMED_INTEGER */, sgsnMOLCSRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_sgsnNILCSRecord /* IMPORTED_LONG_NAMED_INTEGER */, sgsnNILCSRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mMO1SRecord /* IMPORTED_LONG_NAMED_INTEGER */, mMO1SRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mMO4FRqRecord /* IMPORTED_LONG_NAMED_INTEGER */, mMO4FRqRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mMO4FRsRecord /* IMPORTED_LONG_NAMED_INTEGER */, mMO4FRsRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mMO4DRecord /* IMPORTED_LONG_NAMED_INTEGER */, mMO4DRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mMO1DRecord /* IMPORTED_LONG_NAMED_INTEGER */, mMO1DRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mMO4RRecord /* IMPORTED_LONG_NAMED_INTEGER */, mMO4RRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mMO1RRecord /* IMPORTED_LONG_NAMED_INTEGER */, mMO1RRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mMOMDRecord /* IMPORTED_LONG_NAMED_INTEGER */, mMOMDRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mMR4FRecord /* IMPORTED_LONG_NAMED_INTEGER */, mMR4FRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mMR1NRqRecord /* IMPORTED_LONG_NAMED_INTEGER */, mMR1NRqRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mMR1NRsRecord /* IMPORTED_LONG_NAMED_INTEGER */, mMR1NRsRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mMR1RtRecord /* IMPORTED_LONG_NAMED_INTEGER */, mMR1RtRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mMR1AFRecord /* IMPORTED_LONG_NAMED_INTEGER */, mMR1AFRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mMR4DRqRecord /* IMPORTED_LONG_NAMED_INTEGER */, mMR4DRqRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mMR4DRsRecord /* IMPORTED_LONG_NAMED_INTEGER */, mMR4DRsRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mMR1RRRecord /* IMPORTED_LONG_NAMED_INTEGER */, mMR1RRRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mMR4RRqRecord /* IMPORTED_LONG_NAMED_INTEGER */, mMR4RRqRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mMR4RRsRecord /* IMPORTED_LONG_NAMED_INTEGER */, mMR4RRsRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mMRMDRecord /* IMPORTED_LONG_NAMED_INTEGER */, mMRMDRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mMFRecord /* IMPORTED_LONG_NAMED_INTEGER */, mMFRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mMBx1SRecord /* IMPORTED_LONG_NAMED_INTEGER */, mMBx1SRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mMBx1VRecord /* IMPORTED_LONG_NAMED_INTEGER */, mMBx1VRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mMBx1URecord /* IMPORTED_LONG_NAMED_INTEGER */, mMBx1URecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mMBx1DRecord /* IMPORTED_LONG_NAMED_INTEGER */, mMBx1DRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mM7SRecord /* IMPORTED_LONG_NAMED_INTEGER */, mM7SRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mM7DRqRecord /* IMPORTED_LONG_NAMED_INTEGER */, mM7DRqRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mM7DRsRecord /* IMPORTED_LONG_NAMED_INTEGER */, mM7DRsRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mM7CRecord /* IMPORTED_LONG_NAMED_INTEGER */, mM7CRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mM7RRecord /* IMPORTED_LONG_NAMED_INTEGER */, mM7RRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mM7DRRqRecord /* IMPORTED_LONG_NAMED_INTEGER */, mM7DRRqRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mM7DRRsRecord /* IMPORTED_LONG_NAMED_INTEGER */, mM7DRRsRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mM7RRqRecord /* IMPORTED_LONG_NAMED_INTEGER */, mM7RRqRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mM7RRsRecord /* IMPORTED_LONG_NAMED_INTEGER */, mM7RRsRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_sCSCFRecord /* IMPORTED_LONG_NAMED_INTEGER */, sCSCFRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_pCSCFRecord /* IMPORTED_LONG_NAMED_INTEGER */, pCSCFRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_iCSCFRecord /* IMPORTED_LONG_NAMED_INTEGER */, iCSCFRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mRFCRecord /* IMPORTED_LONG_NAMED_INTEGER */, mRFCRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mGCFRecord /* IMPORTED_LONG_NAMED_INTEGER */, mGCFRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_bGCFRecord /* IMPORTED_LONG_NAMED_INTEGER */, bGCFRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_aSRecord /* IMPORTED_LONG_NAMED_INTEGER */, aSRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_eCSCFRecord /* IMPORTED_LONG_NAMED_INTEGER */, eCSCFRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_iBCFRecord /* IMPORTED_LONG_NAMED_INTEGER */, iBCFRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_tRFRecord /* IMPORTED_LONG_NAMED_INTEGER */, tRFRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_tFRecord /* IMPORTED_LONG_NAMED_INTEGER */, tFRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_aTCFRecord /* IMPORTED_LONG_NAMED_INTEGER */, aTCFRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_lCSGMORecord /* IMPORTED_LONG_NAMED_INTEGER */, lCSGMORecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_lCSRGMTRecord /* IMPORTED_LONG_NAMED_INTEGER */, lCSRGMTRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_lCSHGMTRecord /* IMPORTED_LONG_NAMED_INTEGER */, lCSHGMTRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_lCSVGMTRecord /* IMPORTED_LONG_NAMED_INTEGER */, lCSVGMTRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_lCSGNIRecord /* IMPORTED_LONG_NAMED_INTEGER */, lCSGNIRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_sgsnMBMSRecord /* IMPORTED_LONG_NAMED_INTEGER */, sgsnMBMSRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_ggsnMBMSRecord /* IMPORTED_LONG_NAMED_INTEGER */, ggsnMBMSRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_gwMBMSRecord /* IMPORTED_LONG_NAMED_INTEGER */, gwMBMSRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_sUBBMSCRecord /* IMPORTED_LONG_NAMED_INTEGER */, sUBBMSCRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_cONTENTBMSCRecord /* IMPORTED_LONG_NAMED_INTEGER */, cONTENTBMSCRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_pPFRecord /* IMPORTED_LONG_NAMED_INTEGER */, pPFRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_cPFRecord /* IMPORTED_LONG_NAMED_INTEGER */, cPFRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_sGWRecord /* IMPORTED_LONG_NAMED_INTEGER */, sGWRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_pGWRecord /* IMPORTED_LONG_NAMED_INTEGER */, pGWRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_tDFRecord /* IMPORTED_LONG_NAMED_INTEGER */, tDFRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_iPERecord /* IMPORTED_LONG_NAMED_INTEGER */, iPERecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_ePDGRecord /* IMPORTED_LONG_NAMED_INTEGER */, ePDGRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_tWAGRecord /* IMPORTED_LONG_NAMED_INTEGER */, tWAGRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mMTelRecord /* IMPORTED_LONG_NAMED_INTEGER */, mMTelRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mSCsRVCCRecord /* IMPORTED_LONG_NAMED_INTEGER */, mSCsRVCCRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mMTRFRecord /* IMPORTED_LONG_NAMED_INTEGER */, mMTRFRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_iCSRegisterRecord /* IMPORTED_LONG_NAMED_INTEGER */, iCSRegisterRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_sCSMORecord /* IMPORTED_LONG_NAMED_INTEGER */, sCSMORecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_sCSMTRecord /* IMPORTED_LONG_NAMED_INTEGER */, sCSMTRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_pFDDRecord /* IMPORTED_LONG_NAMED_INTEGER */, pFDDRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_pFEDRecord /* IMPORTED_LONG_NAMED_INTEGER */, pFEDRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_pFDCRecord /* IMPORTED_LONG_NAMED_INTEGER */, pFDCRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mECORecord /* IMPORTED_LONG_NAMED_INTEGER */, mECORecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mERERecord /* IMPORTED_LONG_NAMED_INTEGER */, mERERecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_cPDTSCERecord /* IMPORTED_LONG_NAMED_INTEGER */, cPDTSCERecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_cPDTSNNRecord /* IMPORTED_LONG_NAMED_INTEGER */, cPDTSNNRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_sCDVTT4Record /* IMPORTED_LONG_NAMED_INTEGER */, sCDVTT4Record /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_sCSMOT4Record /* IMPORTED_LONG_NAMED_INTEGER */, sCSMOT4Record /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_iSMSMORecord /* IMPORTED_LONG_NAMED_INTEGER */, iSMSMORecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_iSMSMTRecord /* IMPORTED_LONG_NAMED_INTEGER */, iSMSMTRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_eASCERecord /* IMPORTED_LONG_NAMED_INTEGER */, eASCERecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_chargingFunctionRecord /* IMPORTED_LONG_NAMED_INTEGER */, chargingFunctionRecord /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_RecordType, _encode_RecordType } from "../MMSChargingDataTypes/RecordType.ta.mjs";
import { MMSRSAddress, _decode_MMSRSAddress, _encode_MMSRSAddress } from "../MMSChargingDataTypes/MMSRSAddress.ta.mjs";
// export { MMSRSAddress, _decode_MMSRSAddress, _encode_MMSRSAddress } from "../MMSChargingDataTypes/MMSRSAddress.ta.mjs";
import { MMSAgentAddress, _decode_MMSAgentAddress, _encode_MMSAgentAddress } from "../MMSChargingDataTypes/MMSAgentAddress.ta.mjs";
// export { MMSAgentAddress, _decode_MMSAgentAddress, _encode_MMSAgentAddress } from "../MMSChargingDataTypes/MMSAgentAddress.ta.mjs";
import { MMComponentType, _decode_MMComponentType, _encode_MMComponentType } from "../MMSChargingDataTypes/MMComponentType.ta.mjs";
// export { MMComponentType, _decode_MMComponentType, _encode_MMComponentType } from "../MMSChargingDataTypes/MMComponentType.ta.mjs";
import { PriorityType, _decode_PriorityType, _encode_PriorityType, _enum_for_PriorityType } from "../MMSChargingDataTypes/PriorityType.ta.mjs";
// export { PriorityType, _enum_for_PriorityType, PriorityType_low /* IMPORTED_LONG_ENUMERATION_ITEM */, low /* IMPORTED_SHORT_ENUMERATION_ITEM */, PriorityType_normal /* IMPORTED_LONG_ENUMERATION_ITEM */, normal /* IMPORTED_SHORT_ENUMERATION_ITEM */, PriorityType_high /* IMPORTED_LONG_ENUMERATION_ITEM */, high /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_PriorityType, _encode_PriorityType } from "../MMSChargingDataTypes/PriorityType.ta.mjs";
import { ManagementExtension, _decode_ManagementExtension, _encode_ManagementExtension } from "../MMSChargingDataTypes/ManagementExtension.ta.mjs";
// export { ManagementExtension, _decode_ManagementExtension, _encode_ManagementExtension } from "../MMSChargingDataTypes/ManagementExtension.ta.mjs";


/**
 * @summary MM7DRqRecord
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MM7DRqRecord ::= SET {
 *    recordType              [0] IMPLICIT RecordType,
 *    recipientMmsRSAddress   [1] IMPLICIT MMSRSAddress,
 *    linkedID                [2] IMPLICIT OCTET STRING OPTIONAL,
 *    replyChargingID         [3] IMPLICIT OCTET STRING OPTIONAL,
 *    originatorAddress       [4] IMPLICIT MMSAgentAddress,
 *    recipientAddress        [5] IMPLICIT MMSAgentAddress,
 *    mmComponentType         [6] IMPLICIT MMComponentType OPTIONAL,
 *    messageSize             [7] IMPLICIT INTEGER,
 *    contentType             [8] IMPLICIT OCTET STRING,
 *    priority                [9] IMPLICIT PriorityType OPTIONAL,
 *    recordTimeStamp         [10] IMPLICIT OCTET STRING ( SIZE( 9 ) ) OPTIONAL,
 *    localSequenceNumber     [11] IMPLICIT INTEGER ( 0 .. 4294967295 ) OPTIONAL,
 *    recordExtensions        [12] IMPLICIT SET  OF
 *       ManagementExtension OPTIONAL}
 * ```
 * 
 * @class
 */
export
class MM7DRqRecord {
    /**
     * @summary `recordType`.
     * @public
     * @readonly
     */
    readonly recordType: RecordType;
    /**
     * @summary `recipientMmsRSAddress`.
     * @public
     * @readonly
     */
    readonly recipientMmsRSAddress: MMSRSAddress;
    /**
     * @summary `linkedID`.
     * @public
     * @readonly
     */
    readonly linkedID: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `replyChargingID`.
     * @public
     * @readonly
     */
    readonly replyChargingID: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `originatorAddress`.
     * @public
     * @readonly
     */
    readonly originatorAddress: MMSAgentAddress;
    /**
     * @summary `recipientAddress`.
     * @public
     * @readonly
     */
    readonly recipientAddress: MMSAgentAddress;
    /**
     * @summary `mmComponentType`.
     * @public
     * @readonly
     */
    readonly mmComponentType: OPTIONAL<MMComponentType>;
    /**
     * @summary `messageSize`.
     * @public
     * @readonly
     */
    readonly messageSize: INTEGER;
    /**
     * @summary `contentType`.
     * @public
     * @readonly
     */
    readonly contentType: OCTET_STRING;
    /**
     * @summary `priority`.
     * @public
     * @readonly
     */
    readonly priority: OPTIONAL<PriorityType>;
    /**
     * @summary `recordTimeStamp`.
     * @public
     * @readonly
     */
    readonly recordTimeStamp: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `localSequenceNumber`.
     * @public
     * @readonly
     */
    readonly localSequenceNumber: OPTIONAL<INTEGER>;
    /**
     * @summary `recordExtensions`.
     * @public
     * @readonly
     */
    readonly recordExtensions: OPTIONAL<ManagementExtension[]>;

    constructor (
        recordType: RecordType,
        recipientMmsRSAddress: MMSRSAddress,
        linkedID: OPTIONAL<OCTET_STRING>,
        replyChargingID: OPTIONAL<OCTET_STRING>,
        originatorAddress: MMSAgentAddress,
        recipientAddress: MMSAgentAddress,
        mmComponentType: OPTIONAL<MMComponentType>,
        messageSize: INTEGER,
        contentType: OCTET_STRING,
        priority: OPTIONAL<PriorityType>,
        recordTimeStamp: OPTIONAL<OCTET_STRING>,
        localSequenceNumber: OPTIONAL<INTEGER>,
        recordExtensions: OPTIONAL<ManagementExtension[]>
    ) {
        this.recordType = recordType;
        this.recipientMmsRSAddress = recipientMmsRSAddress;
        this.linkedID = linkedID;
        this.replyChargingID = replyChargingID;
        this.originatorAddress = originatorAddress;
        this.recipientAddress = recipientAddress;
        this.mmComponentType = mmComponentType;
        this.messageSize = messageSize;
        this.contentType = contentType;
        this.priority = priority;
        this.recordTimeStamp = recordTimeStamp;
        this.localSequenceNumber = localSequenceNumber;
        this.recordExtensions = recordExtensions;
    }

    /**
     * @summary Restructures an object into a MM7DRqRecord
     * @description
     * 
     * This takes an `object` and converts it to a `MM7DRqRecord`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `MM7DRqRecord`.
     * @returns {MM7DRqRecord}
     */
    public static _from_object (_o: { [_K in keyof (MM7DRqRecord)]: (MM7DRqRecord)[_K] }): MM7DRqRecord {
        return new MM7DRqRecord(_o.recordType, _o.recipientMmsRSAddress, _o.linkedID, _o.replyChargingID, _o.originatorAddress, _o.recipientAddress, _o.mmComponentType, _o.messageSize, _o.contentType, _o.priority, _o.recordTimeStamp, _o.localSequenceNumber, _o.recordExtensions);
    }

        /**
         * @summary The enum used as the type of the component `priority`
         * @public
         * @static
         */

    public static _enum_for_priority = _enum_for_PriorityType;
}

/**
 * @summary The Leading Root Component Types of MM7DRqRecord
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_MM7DRqRecord: $.ComponentSpec[] = [
    new $.ComponentSpec("recordType", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("recipientMmsRSAddress", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("linkedID", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("replyChargingID", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("originatorAddress", false, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("recipientAddress", false, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("mmComponentType", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("messageSize", false, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("contentType", false, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("priority", true, $.hasTag(_TagClass.context, 9)),
    new $.ComponentSpec("recordTimeStamp", true, $.hasTag(_TagClass.context, 10)),
    new $.ComponentSpec("localSequenceNumber", true, $.hasTag(_TagClass.context, 11)),
    new $.ComponentSpec("recordExtensions", true, $.hasTag(_TagClass.context, 12))
];

/**
 * @summary The Trailing Root Component Types of MM7DRqRecord
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_MM7DRqRecord: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of MM7DRqRecord
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_MM7DRqRecord: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_MM7DRqRecord: $.ASN1Decoder<MM7DRqRecord> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MM7DRqRecord
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MM7DRqRecord (el: _Element): MM7DRqRecord {
    if (!_cached_decoder_for_MM7DRqRecord) { _cached_decoder_for_MM7DRqRecord = function (el: _Element): MM7DRqRecord {
    /* START_OF_SET_COMPONENT_DECLARATIONS */
    let recordType!: RecordType;
    let recipientMmsRSAddress!: MMSRSAddress;
    let linkedID: OPTIONAL<OCTET_STRING>;
    let replyChargingID: OPTIONAL<OCTET_STRING>;
    let originatorAddress!: MMSAgentAddress;
    let recipientAddress!: MMSAgentAddress;
    let mmComponentType: OPTIONAL<MMComponentType>;
    let messageSize!: INTEGER;
    let contentType!: OCTET_STRING;
    let priority: OPTIONAL<PriorityType>;
    let recordTimeStamp: OPTIONAL<OCTET_STRING>;
    let localSequenceNumber: OPTIONAL<INTEGER>;
    let recordExtensions: OPTIONAL<ManagementExtension[]>;
    /* END_OF_SET_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: $.DecodingMap = {
        "recordType": (_el: _Element): void => { recordType = $._decode_implicit<RecordType>(() => _decode_RecordType)(_el); },
        "recipientMmsRSAddress": (_el: _Element): void => { recipientMmsRSAddress = $._decode_implicit<MMSRSAddress>(() => _decode_MMSRSAddress)(_el); },
        "linkedID": (_el: _Element): void => { linkedID = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "replyChargingID": (_el: _Element): void => { replyChargingID = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "originatorAddress": (_el: _Element): void => { originatorAddress = $._decode_implicit<MMSAgentAddress>(() => _decode_MMSAgentAddress)(_el); },
        "recipientAddress": (_el: _Element): void => { recipientAddress = $._decode_implicit<MMSAgentAddress>(() => _decode_MMSAgentAddress)(_el); },
        "mmComponentType": (_el: _Element): void => { mmComponentType = $._decode_implicit<MMComponentType>(() => _decode_MMComponentType)(_el); },
        "messageSize": (_el: _Element): void => { messageSize = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "contentType": (_el: _Element): void => { contentType = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "priority": (_el: _Element): void => { priority = $._decode_implicit<PriorityType>(() => _decode_PriorityType)(_el); },
        "recordTimeStamp": (_el: _Element): void => { recordTimeStamp = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "localSequenceNumber": (_el: _Element): void => { localSequenceNumber = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "recordExtensions": (_el: _Element): void => { recordExtensions = $._decode_implicit<ManagementExtension[]>(() => $._decodeSetOf<ManagementExtension>(() => _decode_ManagementExtension))(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    $._parse_set(el, callbacks,
        _root_component_type_list_1_spec_for_MM7DRqRecord,
        _extension_additions_list_spec_for_MM7DRqRecord,
        _root_component_type_list_2_spec_for_MM7DRqRecord,
        undefined,
    );
    return new MM7DRqRecord( /* SET_CONSTRUCTOR_CALL */
        recordType,
        recipientMmsRSAddress,
        linkedID,
        replyChargingID,
        originatorAddress,
        recipientAddress,
        mmComponentType,
        messageSize,
        contentType,
        priority,
        recordTimeStamp,
        localSequenceNumber,
        recordExtensions
    );
}; }
    return _cached_decoder_for_MM7DRqRecord(el);
}

let _cached_encoder_for_MM7DRqRecord: $.ASN1Encoder<MM7DRqRecord> | null = null;

/**
 * @summary Encodes a(n) MM7DRqRecord into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MM7DRqRecord, encoded as an ASN.1 Element.
 */
export
function _encode_MM7DRqRecord (value: MM7DRqRecord, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MM7DRqRecord) { _cached_encoder_for_MM7DRqRecord = function (value: MM7DRqRecord, elGetter: $.ASN1Encoder<MM7DRqRecord>): _Element {
    const _components: _Element[] = [];
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_RecordType, $.BER)(value.recordType, $.BER));
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_MMSRSAddress, $.BER)(value.recipientMmsRSAddress, $.BER));
    if (value.linkedID !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => $._encodeOctetString, $.BER)(value.linkedID, $.BER));
    }
    if (value.replyChargingID !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => $._encodeOctetString, $.BER)(value.replyChargingID, $.BER));
    }
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 4, () => _encode_MMSAgentAddress, $.BER)(value.originatorAddress, $.BER));
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 5, () => _encode_MMSAgentAddress, $.BER)(value.recipientAddress, $.BER));
    if (value.mmComponentType !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 6, () => _encode_MMComponentType, $.BER)(value.mmComponentType, $.BER));
    }
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 7, () => $._encodeInteger, $.BER)(value.messageSize, $.BER));
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 8, () => $._encodeOctetString, $.BER)(value.contentType, $.BER));
    if (value.priority !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 9, () => _encode_PriorityType, $.BER)(value.priority, $.BER));
    }
    if (value.recordTimeStamp !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 10, () => $._encodeOctetString, $.BER)(value.recordTimeStamp, $.BER));
    }
    if (value.localSequenceNumber !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 11, () => $._encodeInteger, $.BER)(value.localSequenceNumber, $.BER));
    }
    if (value.recordExtensions !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 12, () => $._encodeSetOf<ManagementExtension>(() => _encode_ManagementExtension, $.BER), $.BER)(value.recordExtensions, $.BER));
    }
    return $._encodeSet(_components, $.BER);
}; }
    return _cached_encoder_for_MM7DRqRecord(value, elGetter);
}


/* eslint-enable */
