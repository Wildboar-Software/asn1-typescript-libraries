/* eslint-disable */
import {
    INTEGER,
    NULL,
    OCTET_STRING,
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { RecordType, _decode_RecordType, _encode_RecordType } from "../CSChargingDataTypes/RecordType.ta.mjs";
import { TrunkGroup, _decode_TrunkGroup, _encode_TrunkGroup } from "../CSChargingDataTypes/TrunkGroup.ta.mjs";
import { LocationAreaAndCell, _decode_LocationAreaAndCell, _encode_LocationAreaAndCell } from "../CSChargingDataTypes/LocationAreaAndCell.ta.mjs";
import { LocationChange, _decode_LocationChange, _encode_LocationChange } from "../CSChargingDataTypes/LocationChange.ta.mjs";
import { BasicService, _decode_BasicService, _encode_BasicService } from "../CSChargingDataTypes/BasicService.ta.mjs";
import { SuppServiceUsed, _decode_SuppServiceUsed, _encode_SuppServiceUsed } from "../CSChargingDataTypes/SuppServiceUsed.ta.mjs";
import { CauseForTerm, _decode_CauseForTerm, _encode_CauseForTerm } from "../CSChargingDataTypes/CauseForTerm.ta.mjs";
import { HLRIntResult, _decode_HLRIntResult, _encode_HLRIntResult } from "../CSChargingDataTypes/HLRIntResult.ta.mjs";
import { ManagementExtension, _decode_ManagementExtension, _encode_ManagementExtension } from "../CSChargingDataTypes/ManagementExtension.ta.mjs";
import { PartialRecordType, _decode_PartialRecordType, _encode_PartialRecordType, _enum_for_PartialRecordType } from "../CSChargingDataTypes/PartialRecordType.ta.mjs";
import { NodeAddress, _decode_NodeAddress, _encode_NodeAddress } from "../CSChargingDataTypes/NodeAddress.ta.mjs";


/**
 * @summary MSCsRVCCRecord
 * @description
 *
 * MSC-SRVCC CDR, produced by the MSC server enhanced for SRVCC. When
 * generation is enabled, one record is created for each successful
 * voice-call transfer from IMS to CS (clause 6.1.3.28) and one for each
 * emergency-call transfer (clause 6.1.3.29). Charging covers the successful
 * transfer. The MSC generates an IMS charging identifier so the CS record
 * can be correlated with IMS (clause 5.1.3.17). `relatedICID` is the ICID of
 * the IMS call leg. The emergency table does not list
 * `relatedICIDGenerationNode`.
 *
 * `calledNumber` is the STN-SR for a voice transfer and the E-STN-SR for an
 * emergency transfer. `basicService` is speech or the emergency teleservice.
 * `servedIMSI` and `servedMSISDN` are mandatory for a voice transfer and
 * conditional for an emergency transfer. `seizureTime` is when the enhanced
 * MSC server received the PS to CS request, not a traffic-channel seizure.
 *
 * The anchor MSC is not aware of the whole call duration or the real called
 * number, because the call started on the PS side. Only IMS charging knows
 * the whole duration (clause 5.1.3.17).
 *
 * Categories are M, C, OM, and OC as in TS 32.240 clause 5.4. There is a
 * single category column, not separate 2G and 3G columns.
 *
 * 3GPP TS 32.250 V19.0.0 clauses 5.1.3.17, 6.1.3.28, and 6.1.3.29.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MSCsRVCCRecord ::= SET {
 *    recordType                  [0] IMPLICIT RecordType,
 *    servedIMSI                  [1] IMPLICIT OCTET STRING ( SIZE( 3 .. 8 ) ) OPTIONAL,
 *    servedIMEI                  [2] IMPLICIT OCTET STRING ( SIZE( 8 ) ) OPTIONAL,
 *    servedMSISDN                [3] IMPLICIT OCTET STRING ( SIZE( 1 .. 20 ) ) ( SIZE( 1 .. 9 ) ) OPTIONAL,
 *    calledNumber                [5] IMPLICIT OCTET STRING,
 *    recordingEntity             [9] IMPLICIT OCTET STRING ( SIZE( 1 .. 20 ) ),
 *    mscOutgoingTKGP             [11] TrunkGroup OPTIONAL,
 *    location                    [12] IMPLICIT LocationAreaAndCell,
 *    changeOfLocation            [13] IMPLICIT SEQUENCE  OF
 *       LocationChange OPTIONAL,
 *    basicService                [14] BasicService,
 *    supplServicesUsed           [17] IMPLICIT SEQUENCE  OF
 *       SuppServiceUsed OPTIONAL,
 *    msClassmark                 [20] IMPLICIT OCTET STRING OPTIONAL,
 *    seizureTime                 [22] IMPLICIT OCTET STRING ( SIZE( 9 ) ) OPTIONAL,
 *    answerTime                  [23] IMPLICIT OCTET STRING ( SIZE( 9 ) ) OPTIONAL,
 *    releaseTime                 [24] IMPLICIT OCTET STRING ( SIZE( 9 ) ) OPTIONAL,
 *    callDuration                [25] IMPLICIT INTEGER,
 *    causeForTerm                [30] IMPLICIT CauseForTerm,
 *    diagnostics                 [31] HLRIntResult OPTIONAL,
 *    callReference               [32] IMPLICIT OCTET STRING ( SIZE( 1 .. 8 ) ),
 *    sequenceNumber              [33] IMPLICIT INTEGER OPTIONAL,
 *    recordExtensions            [35] IMPLICIT SET  OF
 *       ManagementExtension OPTIONAL,
 *    partialRecordType           [69] IMPLICIT PartialRecordType OPTIONAL,
 *    iMS-Charging-Identifier     [75] IMPLICIT OCTET STRING OPTIONAL,
 *    iCSI2ActiveFlag             [76] IMPLICIT NULL OPTIONAL,
 *    relatedICID                 [77] IMPLICIT OCTET STRING OPTIONAL,
 *    relatedICIDGenerationNode   [78] NodeAddress OPTIONAL}
 * ```
 * @class
 */
export
class MSCsRVCCRecord {
    /**
     * @summary `recordType`.
     * @description
     *
     * Category mandatory. MSC-SRVCC.
     *
     * 3GPP TS 32.250 V19.0.0 clauses 6.1.3.28 and 6.1.3.29.
     *
     * The field identifies the type of the record e.g. mobile originated,
     * mobile terminated etc.
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.2.1.72.
     *
     * @public
     * @readonly
     */
    readonly recordType: RecordType;
    /**
     * @summary `servedIMSI`.
     * @description
     *
     * MSC-SRVCC: Category mandatory. IMSI of PS to CS Request.
     *
     * MSC-SRVCC emergency: Category conditional. IMSI of PS to CS Request, if
     * available.
     *
     * 3GPP TS 32.250 V19.0.0 clauses 6.1.3.28 and 6.1.3.29.
     *
     * This fields contains the international mobile subscriber identity (IMSI)
     * of the served party. The term "served" party is used to describe the
     * mobile subscriber involved in the transaction recorded e.g. the calling
     * subscriber in case of an MOC record. The structure of the IMSI is defined
     * in TS 23.003 [200].
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.2.1.79.
     *
     * @public
     * @readonly
     */
    readonly servedIMSI: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `servedIMEI`.
     * @description
     *
     * Category conditional. Mobile Equipment Identity (IMEI, IMEISV) of the UE,
     * if available.
     *
     * 3GPP TS 32.250 V19.0.0 clauses 6.1.3.28 and 6.1.3.29.
     *
     * This fields contains the international mobile equipment identity (IMEI)
     * or IMEISV of the equipment served. The term "served" equipment is used to
     * describe the ME involved in the transaction recorded e.g. the called ME
     * in case of an MTC record. The structure of the IMEI, IMEISV is specified
     * in TS 23.003 [200] and the encoding defined in TS 29.274 [223].
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.2.1.78.
     *
     * @public
     * @readonly
     */
    readonly servedIMEI: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `servedMSISDN`.
     * @description
     *
     * MSC-SRVCC: Category mandatory. The Correlation MSISDN of the PS to CS
     * Request.
     *
     * MSC-SRVCC emergency: Category conditional. The Correlation MSISDN of the
     * PS to CS Request, if available.
     *
     * 3GPP TS 32.250 V19.0.0 clauses 6.1.3.28 and 6.1.3.29.
     *
     * This fields contains the mobile station ISDN number (MSISDN) of the
     * served party. The term "served" party is used to describe the mobile
     * subscriber involved in the transaction recorded e.g. the called
     * subscriber in case of an MTC record. In case of multi-numbering the
     * MSISDN stored in a MOC record will be the primary MSISDN of the calling
     * party. The structure of the MSISDN is defined in TS 23.003 [200].
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.2.1.80.
     *
     * @public
     * @readonly
     */
    readonly servedMSISDN: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `calledNumber`.
     * @description
     *
     * MSC-SRVCC: Category mandatory. Session Transfer Number for Single Radio
     * Voice Call Continuity (STN-SR) for transfer from PS to CS.
     *
     * MSC-SRVCC emergency: Category mandatory. Emergency Session Transfer
     * Number for SR VCC (E-STN-SR) for transfer from PS to CS.
     *
     * 3GPP TS 32.250 V19.0.0 clauses 6.1.3.28 and 6.1.3.29.
     *
     * @public
     * @readonly
     */
    readonly calledNumber: OCTET_STRING;
    /**
     * @summary `recordingEntity`.
     * @description
     *
     * Category mandatory. The E.164 number of the enhanced MSC server producing
     * the record.
     *
     * 3GPP TS 32.250 V19.0.0 clauses 6.1.3.28 and 6.1.3.29.
     *
     * This field contains the E.164 [308] number assigned to the entity (MSC,
     * VLR, HLR etc.) that produced the record. For further details concerning
     * the structure of MSC and location register numbers see TS 23.003 [200].
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.2.1.73.
     *
     * @public
     * @readonly
     */
    readonly recordingEntity: OCTET_STRING;
    /**
     * @summary `mscOutgoingTKGP`.
     * @description
     *
     * Category operator-provisionable mandatory. The trunk group on which the
     * call left the MSC, if available.
     *
     * 3GPP TS 32.250 V19.0.0 clauses 6.1.3.28 and 6.1.3.29.
     *
     * @public
     * @readonly
     */
    readonly mscOutgoingTKGP: OPTIONAL<TrunkGroup>;
    /**
     * @summary `location`.
     * @description
     *
     * Category mandatory. Location of the UE after the successful SRVCC PS to
     * CS Transfer.
     *
     * 3GPP TS 32.250 V19.0.0 clauses 6.1.3.28 and 6.1.3.29.
     *
     * @public
     * @readonly
     */
    readonly location: LocationAreaAndCell;
    /**
     * @summary `changeOfLocation`.
     * @description
     *
     * Category operator-provisionable conditional. A list of changes in
     * Location of the UE. Each time-stamped.
     *
     * 3GPP TS 32.250 V19.0.0 clauses 6.1.3.28 and 6.1.3.29.
     *
     * @public
     * @readonly
     */
    readonly changeOfLocation: OPTIONAL<LocationChange[]>;
    /**
     * @summary `basicService`.
     * @description
     *
     * MSC-SRVCC: Category mandatory. teleservice speech.
     *
     * MSC-SRVCC emergency: Category mandatory. teleservice emergency.
     *
     * 3GPP TS 32.250 V19.0.0 clauses 6.1.3.28 and 6.1.3.29.
     *
     * @public
     * @readonly
     */
    readonly basicService: BasicService;
    /**
     * @summary `supplServicesUsed`.
     * @description
     *
     * Category conditional. Supplementary services invoked as a result of this
     * connection. This field shall be present when one or more supplementary
     * services have been invoked.
     *
     * 3GPP TS 32.250 V19.0.0 clause 6.1.3.28.
     *
     * @public
     * @readonly
     */
    readonly supplServicesUsed: OPTIONAL<SuppServiceUsed[]>;
    /**
     * @summary `msClassmark`.
     * @description
     *
     * Category conditional. Classmark of MM Context for E-UTRAN SRVCC in PS to
     * CS Request.
     *
     * 3GPP TS 32.250 V19.0.0 clauses 6.1.3.28 and 6.1.3.29.
     *
     * @public
     * @readonly
     */
    readonly msClassmark: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `seizureTime`.
     * @description
     *
     * Conditional. Time of PS to CS Request received by enhanced MSC server.
     *
     * 3GPP TS 32.250 V19.0.0 clauses 6.1.3.28 and 6.1.3.29.
     *
     * @public
     * @readonly
     */
    readonly seizureTime: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `answerTime`.
     * @description
     *
     * Conditional. Time of answer received by enhanced MSC server on
     * successful transfer.
     *
     * 3GPP TS 32.250 V19.0.0 clauses 6.1.3.28 and 6.1.3.29.
     *
     * @public
     * @readonly
     */
    readonly answerTime: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `releaseTime`.
     * @description
     *
     * Operator-provisionable mandatory. Time of traffic channel release.
     *
     * 3GPP TS 32.250 V19.0.0 clauses 6.1.3.28 and 6.1.3.29.
     *
     * @public
     * @readonly
     */
    readonly releaseTime: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `callDuration`.
     * @description
     *
     * Category mandatory. The chargeable duration of the connection for
     * successful transferred call.
     *
     * 3GPP TS 32.250 V19.0.0 clauses 6.1.3.28 and 6.1.3.29.
     *
     * This field contains the relevant call duration in seconds. For incomplete
     * calls (call attempts) the relevant duration is the call holding time from
     * the seizure to the release of the traffic channel. For complete
     * (answered) calls this is the chargeable duration from answer to release
     * of the traffic channel. For partial records this is the duration of the
     * individual partial record and not the cumulative duration of the call. It
     * should be noted that the time stamps may be expressed in terms of tenths
     * of seconds or even milliseconds and, as a result, the calculation of the
     * call duration may result in the rounding or truncation of the measured
     * duration to a whole number of seconds. Whether or not rounding or
     * truncation is to be used is considered to be outside the scope of the
     * present document subject to the following restrictions: If CAMEL is
     * invoked for the call and a control relationship is existing, the call
     * might continue after a RELEASE or a DISCONNECT from the called party side
     * received by the gsmSSF. The call duration of the incoming leg is stored
     * in the main body of the call record. For each outgoing leg the call
     * duration is stored in the respective 'CAMELInformation' module. If a call
     * leg does not reach answer status and attempt charging is enabled a
     * 'CAMELInformation' module containing the holding time is generated.
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.2.1.4.
     *
     * @public
     * @readonly
     */
    readonly callDuration: INTEGER;
    /**
     * @summary `causeForTerm`.
     * @description
     *
     * Category mandatory. The reason for the release of the CS media.
     *
     * 3GPP TS 32.250 V19.0.0 clauses 6.1.3.28 and 6.1.3.29.
     *
     * This field contains a generalised reason for the release of the
     * connection including the following: normal release; CAMEL initiated call
     * release; partial record generation; partial record call re-establishment;
     * unsuccessful call attempt; abnormal termination during the stable phase;
     * unauthorized network originating a location service request; unauthorized
     * client requesting a location service; position method failure at a
     * location service execution; unknown or unreachable LCS client at a
     * location service request. A more detailed reason may be found in the
     * diagnostics field.
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.2.1.13.
     *
     * @public
     * @readonly
     */
    readonly causeForTerm: CauseForTerm;
    /**
     * @summary `diagnostics`.
     * @description
     *
     * Category operator-provisionable mandatory. A more detailed reason for the
     * release of the CS media.
     *
     * 3GPP TS 32.250 V19.0.0 clauses 6.1.3.28 and 6.1.3.29.
     *
     * This field includes a more detailed technical reason for the release of
     * the connection and may contain one of the following: a MAP error from TS
     * 29.002 [214]; a Cause from TS 24.008 [208]; a Cause from TS 29.078 [217];
     * a Cause from ITU-T Recommendation Q.767 [309]; a LCS diagnostics
     * according TS 29.002 [214]. The diagnostics may also be extended to
     * include manufacturer and network specific information.
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.2.1.18.
     *
     * @public
     * @readonly
     */
    readonly diagnostics: OPTIONAL<HLRIntResult>;
    /**
     * @summary `callReference`.
     * @description
     *
     * Category mandatory. A local identifier distinguishing between
     * transactions on the same MS.
     *
     * 3GPP TS 32.250 V19.0.0 clauses 6.1.3.28 and 6.1.3.29.
     *
     * This field uniquely identifies a call or transaction on one side of the
     * interface (i.e. 'A' or 'B' side) and is derived from the transaction
     * identifier of TS 24.008 [208]. It is also used to identify all partial
     * records and transactions belonging to the same connection. For the
     * avoidance of doubt, there is no global call reference defined within GSM
     * and the call reference field cannot be used to combine, for example, the
     * MOC and MTC records of a mobiletomobile connection.
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.2.1.5.
     *
     * @public
     * @readonly
     */
    readonly callReference: OCTET_STRING;
    /**
     * @summary `sequenceNumber`.
     * @description
     *
     * Category conditional. Partial record sequence number, only present in
     * case of partial records.
     *
     * 3GPP TS 32.250 V19.0.0 clauses 6.1.3.28 and 6.1.3.29.
     *
     * This field contains a running sequence number employed to link the
     * partial records generated for a particular connection.
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.2.1.77.
     *
     * @public
     * @readonly
     */
    readonly sequenceNumber: OPTIONAL<INTEGER>;
    /**
     * @summary `recordExtensions`.
     * @description
     *
     * Category operator-provisionable conditional. A set of network /
     * manufacturer specific extensions to the record, when available.
     *
     * 3GPP TS 32.250 V19.0.0 clauses 6.1.3.28 and 6.1.3.29.
     *
     * The field enables network operators and/ or manufacturers to add their
     * own extensions to the standard record definitions.
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.2.1.71.
     *
     * @public
     * @readonly
     */
    readonly recordExtensions: OPTIONAL<ManagementExtension[]>;
    /**
     * @summary `partialRecordType`.
     * @description
     *
     * Category operator-provisionable conditional. Indicates the event (time
     * limit etc.) that caused the generation of a partial record.
     *
     * 3GPP TS 32.250 V19.0.0 clauses 6.1.3.28 and 6.1.3.29.
     *
     * This field indicates the event that caused the generation of a partial
     * record.
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.2.1.64.
     *
     * @public
     * @readonly
     */
    readonly partialRecordType: OPTIONAL<PartialRecordType>;
    /**
     * @summary `iMS_Charging_Identifier`.
     * @description
     *
     * Category operator-provisionable mandatory. This parameter holds the IMS
     * charging identifier (ICID) as generated by the enhanced MSC server with
     * SIP interface.
     *
     * 3GPP TS 32.250 V19.0.0 clauses 6.1.3.28 and 6.1.3.29.
     *
     * @public
     * @readonly
     */
    readonly iMS_Charging_Identifier: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `iCSI2ActiveFlag`.
     * @description
     *
     * Category conditional. This field indicates that the MSC is IMS registered
     * on the UE's behalf during the session.
     *
     * 3GPP TS 32.250 V19.0.0 clauses 6.1.3.28 and 6.1.3.29.
     *
     * @public
     * @readonly
     */
    readonly iCSI2ActiveFlag: OPTIONAL<NULL>;
    /**
     * @summary `relatedICID`.
     * @description
     *
     * Category operator-provisionable conditional. This parameter holds the IMS
     * charging identifier (ICID) from the IMS call leg.
     *
     * 3GPP TS 32.250 V19.0.0 clauses 6.1.3.28 and 6.1.3.29.
     *
     * This field contains the related IMS Charging ID for the IMS call leg in
     * case of SRVCC as received from IMS domain.
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.2.1.74A.
     *
     * @public
     * @readonly
     */
    readonly relatedICID: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `relatedICIDGenerationNode`.
     * @description
     *
     * Category operator-provisionable conditional. This parameter holds the
     * identifier of the IMS node that generated the Related ICID.
     *
     * 3GPP TS 32.250 V19.0.0 clause 6.1.3.28.
     *
     * @public
     * @readonly
     */
    readonly relatedICIDGenerationNode: OPTIONAL<NodeAddress>;

    constructor (
        recordType: RecordType,
        servedIMSI: OPTIONAL<OCTET_STRING>,
        servedIMEI: OPTIONAL<OCTET_STRING>,
        servedMSISDN: OPTIONAL<OCTET_STRING>,
        calledNumber: OCTET_STRING,
        recordingEntity: OCTET_STRING,
        mscOutgoingTKGP: OPTIONAL<TrunkGroup>,
        location: LocationAreaAndCell,
        changeOfLocation: OPTIONAL<LocationChange[]>,
        basicService: BasicService,
        supplServicesUsed: OPTIONAL<SuppServiceUsed[]>,
        msClassmark: OPTIONAL<OCTET_STRING>,
        seizureTime: OPTIONAL<OCTET_STRING>,
        answerTime: OPTIONAL<OCTET_STRING>,
        releaseTime: OPTIONAL<OCTET_STRING>,
        callDuration: INTEGER,
        causeForTerm: CauseForTerm,
        diagnostics: OPTIONAL<HLRIntResult>,
        callReference: OCTET_STRING,
        sequenceNumber?: OPTIONAL<INTEGER>,
        recordExtensions?: OPTIONAL<ManagementExtension[]>,
        partialRecordType?: OPTIONAL<PartialRecordType>,
        iMS_Charging_Identifier?: OPTIONAL<OCTET_STRING>,
        iCSI2ActiveFlag?: OPTIONAL<NULL>,
        relatedICID?: OPTIONAL<OCTET_STRING>,
        relatedICIDGenerationNode?: OPTIONAL<NodeAddress>
    ) {
        this.recordType = recordType;
        this.servedIMSI = servedIMSI;
        this.servedIMEI = servedIMEI;
        this.servedMSISDN = servedMSISDN;
        this.calledNumber = calledNumber;
        this.recordingEntity = recordingEntity;
        this.mscOutgoingTKGP = mscOutgoingTKGP;
        this.location = location;
        this.changeOfLocation = changeOfLocation;
        this.basicService = basicService;
        this.supplServicesUsed = supplServicesUsed;
        this.msClassmark = msClassmark;
        this.seizureTime = seizureTime;
        this.answerTime = answerTime;
        this.releaseTime = releaseTime;
        this.callDuration = callDuration;
        this.causeForTerm = causeForTerm;
        this.diagnostics = diagnostics;
        this.callReference = callReference;
        this.sequenceNumber = sequenceNumber;
        this.recordExtensions = recordExtensions;
        this.partialRecordType = partialRecordType;
        this.iMS_Charging_Identifier = iMS_Charging_Identifier;
        this.iCSI2ActiveFlag = iCSI2ActiveFlag;
        this.relatedICID = relatedICID;
        this.relatedICIDGenerationNode = relatedICIDGenerationNode;
    
        if (this.servedIMSI !== undefined && (this.servedIMSI.length < 3 || this.servedIMSI.length > 8)) {
            throw new ASN1SizeError("MSCsRVCCRecord.servedIMSI violates SIZE constraint");
        }
        if (this.servedIMEI !== undefined && (this.servedIMEI.length !== 8)) {
            throw new ASN1SizeError("MSCsRVCCRecord.servedIMEI violates SIZE constraint");
        }
        if (this.servedMSISDN !== undefined && (this.servedMSISDN.length < 1 || this.servedMSISDN.length > 9)) {
            throw new ASN1SizeError("MSCsRVCCRecord.servedMSISDN violates SIZE constraint");
        }
        if ((this.recordingEntity.length < 1 || this.recordingEntity.length > 20)) {
            throw new ASN1SizeError("MSCsRVCCRecord.recordingEntity violates SIZE constraint");
        }
        if (this.seizureTime !== undefined && (this.seizureTime.length !== 9)) {
            throw new ASN1SizeError("MSCsRVCCRecord.seizureTime violates SIZE constraint");
        }
        if (this.answerTime !== undefined && (this.answerTime.length !== 9)) {
            throw new ASN1SizeError("MSCsRVCCRecord.answerTime violates SIZE constraint");
        }
        if (this.releaseTime !== undefined && (this.releaseTime.length !== 9)) {
            throw new ASN1SizeError("MSCsRVCCRecord.releaseTime violates SIZE constraint");
        }
        if ((this.callReference.length < 1 || this.callReference.length > 8)) {
            throw new ASN1SizeError("MSCsRVCCRecord.callReference violates SIZE constraint");
        }
    }

    /**
     * @summary Restructures an object into a MSCsRVCCRecord
     * @description
     *
     * This takes an `object` and converts it to a `MSCsRVCCRecord`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `MSCsRVCCRecord`.
     * @returns {MSCsRVCCRecord}
     */
    public static _from_object (_o: { [_K in keyof (MSCsRVCCRecord)]: (MSCsRVCCRecord)[_K] }): MSCsRVCCRecord {
        return new MSCsRVCCRecord(_o.recordType, _o.servedIMSI, _o.servedIMEI, _o.servedMSISDN, _o.calledNumber, _o.recordingEntity, _o.mscOutgoingTKGP, _o.location, _o.changeOfLocation, _o.basicService, _o.supplServicesUsed, _o.msClassmark, _o.seizureTime, _o.answerTime, _o.releaseTime, _o.callDuration, _o.causeForTerm, _o.diagnostics, _o.callReference, _o.sequenceNumber, _o.recordExtensions, _o.partialRecordType, _o.iMS_Charging_Identifier, _o.iCSI2ActiveFlag, _o.relatedICID, _o.relatedICIDGenerationNode);
    }

        /**
         * @summary The enum used as the type of the component `partialRecordType`
         * @public
         * @static
         */

    public static _enum_for_partialRecordType = _enum_for_PartialRecordType;
}

/**
 * @summary The Leading Root Component Types of MSCsRVCCRecord
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading
 * root component type list of a SET or SEQUENCE.
 * @constant
 */
export
const _root_component_type_list_1_spec_for_MSCsRVCCRecord: $.ComponentSpec[] = [
    new $.ComponentSpec("recordType", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("servedIMSI", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("servedIMEI", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("servedMSISDN", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("calledNumber", false, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("recordingEntity", false, $.hasTag(_TagClass.context, 9)),
    new $.ComponentSpec("mscOutgoingTKGP", true, $.hasTag(_TagClass.context, 11)),
    new $.ComponentSpec("location", false, $.hasTag(_TagClass.context, 12)),
    new $.ComponentSpec("changeOfLocation", true, $.hasTag(_TagClass.context, 13)),
    new $.ComponentSpec("basicService", false, $.hasTag(_TagClass.context, 14)),
    new $.ComponentSpec("supplServicesUsed", true, $.hasTag(_TagClass.context, 17)),
    new $.ComponentSpec("msClassmark", true, $.hasTag(_TagClass.context, 20)),
    new $.ComponentSpec("seizureTime", true, $.hasTag(_TagClass.context, 22)),
    new $.ComponentSpec("answerTime", true, $.hasTag(_TagClass.context, 23)),
    new $.ComponentSpec("releaseTime", true, $.hasTag(_TagClass.context, 24)),
    new $.ComponentSpec("callDuration", false, $.hasTag(_TagClass.context, 25)),
    new $.ComponentSpec("causeForTerm", false, $.hasTag(_TagClass.context, 30)),
    new $.ComponentSpec("diagnostics", true, $.hasTag(_TagClass.context, 31)),
    new $.ComponentSpec("callReference", false, $.hasTag(_TagClass.context, 32)),
    new $.ComponentSpec("sequenceNumber", true, $.hasTag(_TagClass.context, 33)),
    new $.ComponentSpec("recordExtensions", true, $.hasTag(_TagClass.context, 35)),
    new $.ComponentSpec("partialRecordType", true, $.hasTag(_TagClass.context, 69)),
    new $.ComponentSpec("iMS-Charging-Identifier", true, $.hasTag(_TagClass.context, 75)),
    new $.ComponentSpec("iCSI2ActiveFlag", true, $.hasTag(_TagClass.context, 76)),
    new $.ComponentSpec("relatedICID", true, $.hasTag(_TagClass.context, 77)),
    new $.ComponentSpec("relatedICIDGenerationNode", true, $.hasTag(_TagClass.context, 78))
];

/**
 * @summary The Trailing Root Component Types of MSCsRVCCRecord
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing
 * root component type list of a SET or SEQUENCE.
 * @constant
 */
export
const _root_component_type_list_2_spec_for_MSCsRVCCRecord: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of MSCsRVCCRecord
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension
 * addition component type list of a SET or SEQUENCE.
 * @constant
 */
export
const _extension_additions_list_spec_for_MSCsRVCCRecord: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_MSCsRVCCRecord: $.ASN1Decoder<MSCsRVCCRecord> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MSCsRVCCRecord
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MSCsRVCCRecord (el: _Element): MSCsRVCCRecord {
    if (!_cached_decoder_for_MSCsRVCCRecord) { _cached_decoder_for_MSCsRVCCRecord = function (el: _Element): MSCsRVCCRecord {
    /* START_OF_SET_COMPONENT_DECLARATIONS */
    let recordType!: RecordType;
    let servedIMSI: OPTIONAL<OCTET_STRING>;
    let servedIMEI: OPTIONAL<OCTET_STRING>;
    let servedMSISDN: OPTIONAL<OCTET_STRING>;
    let calledNumber!: OCTET_STRING;
    let recordingEntity!: OCTET_STRING;
    let mscOutgoingTKGP: OPTIONAL<TrunkGroup>;
    let location!: LocationAreaAndCell;
    let changeOfLocation: OPTIONAL<LocationChange[]>;
    let basicService!: BasicService;
    let supplServicesUsed: OPTIONAL<SuppServiceUsed[]>;
    let msClassmark: OPTIONAL<OCTET_STRING>;
    let seizureTime: OPTIONAL<OCTET_STRING>;
    let answerTime: OPTIONAL<OCTET_STRING>;
    let releaseTime: OPTIONAL<OCTET_STRING>;
    let callDuration!: INTEGER;
    let causeForTerm!: CauseForTerm;
    let diagnostics: OPTIONAL<HLRIntResult>;
    let callReference!: OCTET_STRING;
    let sequenceNumber: OPTIONAL<INTEGER>;
    let recordExtensions: OPTIONAL<ManagementExtension[]>;
    let partialRecordType: OPTIONAL<PartialRecordType>;
    let iMS_Charging_Identifier: OPTIONAL<OCTET_STRING>;
    let iCSI2ActiveFlag: OPTIONAL<NULL>;
    let relatedICID: OPTIONAL<OCTET_STRING>;
    let relatedICIDGenerationNode: OPTIONAL<NodeAddress>;
    /* END_OF_SET_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: $.DecodingMap = {
        "recordType": (_el: _Element): void => { recordType = $._decode_implicit<RecordType>(() => _decode_RecordType)(_el); },
        "servedIMSI": (_el: _Element): void => { servedIMSI = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "servedIMEI": (_el: _Element): void => { servedIMEI = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "servedMSISDN": (_el: _Element): void => { servedMSISDN = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "calledNumber": (_el: _Element): void => { calledNumber = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "recordingEntity": (_el: _Element): void => { recordingEntity = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "mscOutgoingTKGP": (_el: _Element): void => { mscOutgoingTKGP = $._decode_explicit<TrunkGroup>(() => _decode_TrunkGroup)(_el); },
        "location": (_el: _Element): void => { location = $._decode_implicit<LocationAreaAndCell>(() => _decode_LocationAreaAndCell)(_el); },
        "changeOfLocation": (_el: _Element): void => { changeOfLocation = $._decode_implicit<LocationChange[]>(() => $._decodeSequenceOf<LocationChange>(() => _decode_LocationChange))(_el); },
        "basicService": (_el: _Element): void => { basicService = $._decode_explicit<BasicService>(() => _decode_BasicService)(_el); },
        "supplServicesUsed": (_el: _Element): void => { supplServicesUsed = $._decode_implicit<SuppServiceUsed[]>(() => $._decodeSequenceOf<SuppServiceUsed>(() => _decode_SuppServiceUsed))(_el); },
        "msClassmark": (_el: _Element): void => { msClassmark = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "seizureTime": (_el: _Element): void => { seizureTime = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "answerTime": (_el: _Element): void => { answerTime = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "releaseTime": (_el: _Element): void => { releaseTime = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "callDuration": (_el: _Element): void => { callDuration = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "causeForTerm": (_el: _Element): void => { causeForTerm = $._decode_implicit<CauseForTerm>(() => _decode_CauseForTerm)(_el); },
        "diagnostics": (_el: _Element): void => { diagnostics = $._decode_explicit<HLRIntResult>(() => _decode_HLRIntResult)(_el); },
        "callReference": (_el: _Element): void => { callReference = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "sequenceNumber": (_el: _Element): void => { sequenceNumber = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "recordExtensions": (_el: _Element): void => { recordExtensions = $._decode_implicit<ManagementExtension[]>(() => $._decodeSetOf<ManagementExtension>(() => _decode_ManagementExtension))(_el); },
        "partialRecordType": (_el: _Element): void => { partialRecordType = $._decode_implicit<PartialRecordType>(() => _decode_PartialRecordType)(_el); },
        "iMS-Charging-Identifier": (_el: _Element): void => { iMS_Charging_Identifier = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "iCSI2ActiveFlag": (_el: _Element): void => { iCSI2ActiveFlag = $._decode_implicit<NULL>(() => $._decodeNull)(_el); },
        "relatedICID": (_el: _Element): void => { relatedICID = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "relatedICIDGenerationNode": (_el: _Element): void => { relatedICIDGenerationNode = $._decode_explicit<NodeAddress>(() => _decode_NodeAddress)(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    $._parse_set(el, callbacks,
        _root_component_type_list_1_spec_for_MSCsRVCCRecord,
        _extension_additions_list_spec_for_MSCsRVCCRecord,
        _root_component_type_list_2_spec_for_MSCsRVCCRecord,
        undefined,
    );
    return new MSCsRVCCRecord( /* SET_CONSTRUCTOR_CALL */
        recordType,
        servedIMSI,
        servedIMEI,
        servedMSISDN,
        calledNumber,
        recordingEntity,
        mscOutgoingTKGP,
        location,
        changeOfLocation,
        basicService,
        supplServicesUsed,
        msClassmark,
        seizureTime,
        answerTime,
        releaseTime,
        callDuration,
        causeForTerm,
        diagnostics,
        callReference,
        sequenceNumber,
        recordExtensions,
        partialRecordType,
        iMS_Charging_Identifier,
        iCSI2ActiveFlag,
        relatedICID,
        relatedICIDGenerationNode
    );
}; }
    return _cached_decoder_for_MSCsRVCCRecord(el);
}

let _cached_encoder_for_MSCsRVCCRecord: $.ASN1Encoder<MSCsRVCCRecord> | null = null;

/**
 * @summary Encodes a(n) MSCsRVCCRecord into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MSCsRVCCRecord, encoded as an ASN.1 Element.
 */
export
function _encode_MSCsRVCCRecord (value: MSCsRVCCRecord, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MSCsRVCCRecord) { _cached_encoder_for_MSCsRVCCRecord = function (value: MSCsRVCCRecord, _elGetter: $.ASN1Encoder<MSCsRVCCRecord>): _Element {
    const _components: _Element[] = [];
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_RecordType, $.BER)(value.recordType, $.BER));
    if (value.servedIMSI !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => $._encodeOctetString, $.BER)(value.servedIMSI, $.BER));
    }
    if (value.servedIMEI !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => $._encodeOctetString, $.BER)(value.servedIMEI, $.BER));
    }
    if (value.servedMSISDN !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => $._encodeOctetString, $.BER)(value.servedMSISDN, $.BER));
    }
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 5, () => $._encodeOctetString, $.BER)(value.calledNumber, $.BER));
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 9, () => $._encodeOctetString, $.BER)(value.recordingEntity, $.BER));
    if (value.mscOutgoingTKGP !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 11, () => _encode_TrunkGroup, $.BER)(value.mscOutgoingTKGP, $.BER));
    }
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 12, () => _encode_LocationAreaAndCell, $.BER)(value.location, $.BER));
    if (value.changeOfLocation !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 13, () => $._encodeSequenceOf<LocationChange>(() => _encode_LocationChange, $.BER), $.BER)(value.changeOfLocation, $.BER));
    }
    _components.push(/* REQUIRED   */ $._encode_explicit(_TagClass.context, 14, () => _encode_BasicService, $.BER)(value.basicService, $.BER));
    if (value.supplServicesUsed !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 17, () => $._encodeSequenceOf<SuppServiceUsed>(() => _encode_SuppServiceUsed, $.BER), $.BER)(value.supplServicesUsed, $.BER));
    }
    if (value.msClassmark !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 20, () => $._encodeOctetString, $.BER)(value.msClassmark, $.BER));
    }
    if (value.seizureTime !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 22, () => $._encodeOctetString, $.BER)(value.seizureTime, $.BER));
    }
    if (value.answerTime !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 23, () => $._encodeOctetString, $.BER)(value.answerTime, $.BER));
    }
    if (value.releaseTime !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 24, () => $._encodeOctetString, $.BER)(value.releaseTime, $.BER));
    }
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 25, () => $._encodeInteger, $.BER)(value.callDuration, $.BER));
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 30, () => _encode_CauseForTerm, $.BER)(value.causeForTerm, $.BER));
    if (value.diagnostics !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 31, () => _encode_HLRIntResult, $.BER)(value.diagnostics, $.BER));
    }
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 32, () => $._encodeOctetString, $.BER)(value.callReference, $.BER));
    if (value.sequenceNumber !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 33, () => $._encodeInteger, $.BER)(value.sequenceNumber, $.BER));
    }
    if (value.recordExtensions !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 35, () => $._encodeSetOf<ManagementExtension>(() => _encode_ManagementExtension, $.BER), $.BER)(value.recordExtensions, $.BER));
    }
    if (value.partialRecordType !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 69, () => _encode_PartialRecordType, $.BER)(value.partialRecordType, $.BER));
    }
    if (value.iMS_Charging_Identifier !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 75, () => $._encodeOctetString, $.BER)(value.iMS_Charging_Identifier, $.BER));
    }
    if (value.iCSI2ActiveFlag !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 76, () => $._encodeNull, $.BER)(value.iCSI2ActiveFlag, $.BER));
    }
    if (value.relatedICID !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 77, () => $._encodeOctetString, $.BER)(value.relatedICID, $.BER));
    }
    if (value.relatedICIDGenerationNode !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 78, () => _encode_NodeAddress, $.BER)(value.relatedICIDGenerationNode, $.BER));
    }
    return $._encodeSet(_components, $.BER);
}; }
    return _cached_encoder_for_MSCsRVCCRecord(value, elGetter);
}


/* eslint-enable */
