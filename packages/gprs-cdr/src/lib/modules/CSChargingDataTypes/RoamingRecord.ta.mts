/* eslint-disable */
import {
    INTEGER,
    OCTET_STRING,
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { RecordType, _decode_RecordType, _encode_RecordType } from "../CSChargingDataTypes/RecordType.ta.mjs";
import { TrunkGroup, _decode_TrunkGroup, _encode_TrunkGroup } from "../CSChargingDataTypes/TrunkGroup.ta.mjs";
import { BasicService, _decode_BasicService, _encode_BasicService } from "../CSChargingDataTypes/BasicService.ta.mjs";
import { TransparencyInd, _decode_TransparencyInd, _encode_TransparencyInd, _enum_for_TransparencyInd } from "../CSChargingDataTypes/TransparencyInd.ta.mjs";
import { ChangeOfService, _decode_ChangeOfService, _encode_ChangeOfService } from "../CSChargingDataTypes/ChangeOfService.ta.mjs";
import { SuppServiceUsed, _decode_SuppServiceUsed, _encode_SuppServiceUsed } from "../CSChargingDataTypes/SuppServiceUsed.ta.mjs";
import { CauseForTerm, _decode_CauseForTerm, _encode_CauseForTerm } from "../CSChargingDataTypes/CauseForTerm.ta.mjs";
import { HLRIntResult, _decode_HLRIntResult, _encode_HLRIntResult } from "../CSChargingDataTypes/HLRIntResult.ta.mjs";
import { ManagementExtension, _decode_ManagementExtension, _encode_ManagementExtension } from "../CSChargingDataTypes/ManagementExtension.ta.mjs";
import { RoamingRecord_lrnSoInd, _decode_RoamingRecord_lrnSoInd, _encode_RoamingRecord_lrnSoInd } from "../CSChargingDataTypes/RoamingRecord-lrnSoInd.ta.mjs";
import { RoamingRecord_lrnQuryStatus, _decode_RoamingRecord_lrnQuryStatus, _encode_RoamingRecord_lrnQuryStatus } from "../CSChargingDataTypes/RoamingRecord-lrnQuryStatus.ta.mjs";
import { RoamingRecord_jIPSoInd, _decode_RoamingRecord_jIPSoInd, _encode_RoamingRecord_jIPSoInd } from "../CSChargingDataTypes/RoamingRecord-jIPSoInd.ta.mjs";
import { RoamingRecord_jIPQuryStatus, _decode_RoamingRecord_jIPQuryStatus, _encode_RoamingRecord_jIPQuryStatus } from "../CSChargingDataTypes/RoamingRecord-jIPQuryStatus.ta.mjs";
import { PartialRecordType, _decode_PartialRecordType, _encode_PartialRecordType, _enum_for_PartialRecordType } from "../CSChargingDataTypes/PartialRecordType.ta.mjs";


/**
 * @summary RoamingRecord
 * @description
 *
 * Roaming CDR produced in the GMSC of the called subscriber's HPLMN for each
 * call redirected to a mobile subscriber roaming outside the HPLMN. The old
 * MSC/VLR also produces this record during Mobile Terminating Roaming
 * Forwarding when the call is rerouted to a new MSC/VLR in a different PLMN,
 * including when that new MSC/VLR is in the HPLMN (clause 5.1.3.18). The
 * same behaviour applies to roaming forwarding for CS fallback.
 *
 * Even if the MTC is zero-priced in the VPLMN, the home network still needs
 * the MTC TAP record, in the absence of optimized routing, to determine
 * re-routing charges (clause 5.1.2.2.2). `roamingNumber` is the MSRN used to
 * route the connection.
 *
 * Categories are M, C, OM, and OC as in TS 32.240 clause 5.4.
 *
 * 3GPP TS 32.250 V19.0.0 clauses 5.1.2.2.2, 5.1.3.18, and 6.1.3.5.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RoamingRecord ::= SET {
 *    recordType              [0] IMPLICIT RecordType,
 *    servedIMSI              [1] IMPLICIT OCTET STRING ( SIZE( 3 .. 8 ) ),
 *    servedMSISDN            [2] IMPLICIT OCTET STRING ( SIZE( 1 .. 20 ) ) ( SIZE( 1 .. 9 ) ) OPTIONAL,
 *    callingNumber           [3] IMPLICIT OCTET STRING OPTIONAL,
 *    roamingNumber           [4] IMPLICIT OCTET STRING ( SIZE( 1 .. 20 ) ) ( SIZE( 1 .. 9 ) ) OPTIONAL,
 *    recordingEntity         [5] IMPLICIT OCTET STRING ( SIZE( 1 .. 20 ) ),
 *    mscIncomingTKGP         [6] TrunkGroup OPTIONAL,
 *    mscOutgoingTKGP         [7] TrunkGroup OPTIONAL,
 *    basicService            [8] BasicService OPTIONAL,
 *    transparencyIndicator   [9] IMPLICIT TransparencyInd OPTIONAL,
 *    changeOfService         [10] IMPLICIT SEQUENCE  OF
 *       ChangeOfService OPTIONAL,
 *    supplServicesUsed       [11] IMPLICIT SEQUENCE  OF
 *       SuppServiceUsed OPTIONAL,
 *    seizureTime             [12] IMPLICIT OCTET STRING ( SIZE( 9 ) ) OPTIONAL,
 *    answerTime              [13] IMPLICIT OCTET STRING ( SIZE( 9 ) ) OPTIONAL,
 *    releaseTime             [14] IMPLICIT OCTET STRING ( SIZE( 9 ) ) OPTIONAL,
 *    callDuration            [15] IMPLICIT INTEGER,
 *    dataVolume              [16] IMPLICIT INTEGER OPTIONAL,
 *    causeForTerm            [17] IMPLICIT CauseForTerm,
 *    diagnostics             [18] HLRIntResult OPTIONAL,
 *    callReference           [19] IMPLICIT OCTET STRING ( SIZE( 1 .. 8 ) ),
 *    sequenceNumber          [20] IMPLICIT INTEGER OPTIONAL,
 *    recordExtensions        [21] IMPLICIT SET  OF
 *       ManagementExtension OPTIONAL,
 *    networkCallReference    [22] IMPLICIT OCTET STRING ( SIZE( 1 .. 8 ) ) OPTIONAL,
 *    mSCAddress              [23] IMPLICIT OCTET STRING ( SIZE( 1 .. 20 ) ) OPTIONAL,
 *    locationRoutNum         [24] IMPLICIT OCTET STRING ( SIZE( 5 ) ) OPTIONAL,
 *    lrnSoInd                [25] IMPLICIT INTEGER {
 *       lRN-NP-Database        ( 1 ),
 *       switchingSystemData    ( 2 ),
 *       incomingsignaling      ( 3 ),
 *       unknown                ( 9 )} OPTIONAL,
 *    lrnQuryStatus           [26] IMPLICIT INTEGER {
 *       successfulQuery         ( 1 ),
 *       noQueryResponseMsg      ( 2 ),
 *       queryProtocolErr        ( 4 ),
 *       queryResponseDataErr    ( 5 ),
 *       queryRejected           ( 6 ),
 *       queryNotPerformed       ( 9 ),
 *       queryUnsuccessful       ( 99 )} OPTIONAL,
 *    jIPPara                 [27] IMPLICIT OCTET STRING ( SIZE( 5 ) ) OPTIONAL,
 *    jIPSoInd                [28] IMPLICIT INTEGER {
 *       lRN-NP-Database        ( 1 ),
 *       switchingSystemData    ( 2 ),
 *       incomingsignaling      ( 3 ),
 *       unknown                ( 9 )} OPTIONAL,
 *    jIPQuryStatus           [29] IMPLICIT INTEGER {
 *       successfulQuery         ( 1 ),
 *       noQueryResponseMsg      ( 2 ),
 *       queryProtocolErr        ( 4 ),
 *       queryResponseDataErr    ( 5 ),
 *       queryRejected           ( 6 ),
 *       queryNotPerformed       ( 9 ),
 *       queryUnsuccessful       ( 99 )} OPTIONAL,
 *    partialRecordType       [30] IMPLICIT PartialRecordType OPTIONAL}
 * ```
 * @class
 */
export
class RoamingRecord {
    /**
     * @summary `recordType`.
     * @description
     *
     * 2G and 3G mandatory. Roaming record.
     *
     * 3GPP TS 32.250 V19.0.0 clause 6.1.3.5.
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
     * 2G and 3G mandatory. IMSI of the called (roaming) party.
     *
     * 3GPP TS 32.250 V19.0.0 clause 6.1.3.5.
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
    readonly servedIMSI: OCTET_STRING;
    /**
     * @summary `servedMSISDN`.
     * @description
     *
     * 2G and 3G operator-provisionable mandatory. The MSISDN of the called
     * (roaming) party.
     *
     * 3GPP TS 32.250 V19.0.0 clause 6.1.3.5.
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
     * @summary `callingNumber`.
     * @description
     *
     * 2G and 3G conditional. The address of the calling party, if available.
     *
     * 3GPP TS 32.250 V19.0.0 clause 6.1.3.5.
     *
     * @public
     * @readonly
     */
    readonly callingNumber: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `roamingNumber`.
     * @description
     *
     * 2G and 3G mandatory. The Mobile Station Roaming Number employed to route
     * this connection.
     *
     * 3GPP TS 32.250 V19.0.0 clause 6.1.3.5.
     *
     * The roaming number field contains the mobile station roaming number as
     * defined in TS 23.003 [200] and coded according to TS 29.002 [214].
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.2.1.75.
     *
     * @public
     * @readonly
     */
    readonly roamingNumber: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `recordingEntity`.
     * @description
     *
     * 2G and 3G mandatory. The E.164 number of the GMSC.
     *
     * 3GPP TS 32.250 V19.0.0 clause 6.1.3.5.
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
     * @summary `mscIncomingTKGP`.
     * @description
     *
     * 2G and 3G operator-provisionable mandatory. The GMSC/VMSC trunk group on
     * which the call originated.
     *
     * 3GPP TS 32.250 V19.0.0 clause 6.1.3.5.
     *
     * @public
     * @readonly
     */
    readonly mscIncomingTKGP: OPTIONAL<TrunkGroup>;
    /**
     * @summary `mscOutgoingTKGP`.
     * @description
     *
     * 2G and 3G operator-provisionable mandatory. The trunk group on which the
     * call left the GMSC/VMSC.
     *
     * 3GPP TS 32.250 V19.0.0 clause 6.1.3.5.
     *
     * @public
     * @readonly
     */
    readonly mscOutgoingTKGP: OPTIONAL<TrunkGroup>;
    /**
     * @summary `basicService`.
     * @description
     *
     * 2G and 3G mandatory. Bearer or teleservice employed.
     *
     * 3GPP TS 32.250 V19.0.0 clause 6.1.3.5.
     *
     * @public
     * @readonly
     */
    readonly basicService: OPTIONAL<BasicService>;
    /**
     * @summary `transparencyIndicator`.
     * @description
     *
     * 2G and 3G conditional. Indicates whether the basic service was used in
     * transparent or non-transparent mode. This parameter is provided only for
     * those basic services which may be employed in both transparent and
     * non-transparent mode.
     *
     * 3GPP TS 32.250 V19.0.0 clause 6.1.3.5.
     *
     * This field indicates whether the basic service was employed in
     * transparent or non-transparent mode. It should also be noted that this
     * field is only relevant for those services which may be operated in both
     * transparent and non-transparent modes.
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.2.1.92.
     *
     * @public
     * @readonly
     */
    readonly transparencyIndicator: OPTIONAL<TransparencyInd>;
    /**
     * @summary `changeOfService`.
     * @description
     *
     * 2G and 3G operator-provisionable conditional. A list of changes of basic
     * service during a connection each time-stamped.
     *
     * 3GPP TS 32.250 V19.0.0 clause 6.1.3.5.
     *
     * @public
     * @readonly
     */
    readonly changeOfService: OPTIONAL<ChangeOfService[]>;
    /**
     * @summary `supplServicesUsed`.
     * @description
     *
     * 2G and 3G conditional. Supplementary services invoked as a result of this
     * connection. This field shall be present when one or more supplementary
     * services have been invoked.
     *
     * 3GPP TS 32.250 V19.0.0 clause 6.1.3.5.
     *
     * @public
     * @readonly
     */
    readonly supplServicesUsed: OPTIONAL<SuppServiceUsed[]>;
    /**
     * @summary `seizureTime`.
     * @description
     *
     * 2G and 3G conditional. Time of incoming traffic channel seizure (for
     * unsuccessful call attempts).
     *
     * 3GPP TS 32.250 V19.0.0 clause 6.1.3.5.
     *
     * @public
     * @readonly
     */
    readonly seizureTime: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `answerTime`.
     * @description
     *
     * 2G and 3G conditional. Time of answer (for successful calls).
     *
     * 3GPP TS 32.250 V19.0.0 clause 6.1.3.5.
     *
     * @public
     * @readonly
     */
    readonly answerTime: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `releaseTime`.
     * @description
     *
     * 2G and 3G operator-provisionable mandatory. Time of traffic channel
     * release.
     *
     * 3GPP TS 32.250 V19.0.0 clause 6.1.3.5.
     *
     * @public
     * @readonly
     */
    readonly releaseTime: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `callDuration`.
     * @description
     *
     * 2G and 3G mandatory. The chargeable duration of the connection for
     * successful calls, the holding time of call attempts.
     *
     * 3GPP TS 32.250 V19.0.0 clause 6.1.3.5.
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
     * @summary `dataVolume`.
     * @description
     *
     * 2G and 3G conditional. The number of data segments transmitted if
     * available at the GMSC.
     *
     * 3GPP TS 32.250 V19.0.0 clause 6.1.3.5.
     *
     * This field includes the number of 64 octet segments transmitted during
     * the use of data services if known.
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.2.1.15.
     *
     * @public
     * @readonly
     */
    readonly dataVolume: OPTIONAL<INTEGER>;
    /**
     * @summary `causeForTerm`.
     * @description
     *
     * 2G and 3G mandatory. The reason for the release of the connection.
     *
     * 3GPP TS 32.250 V19.0.0 clause 6.1.3.5.
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
     * 2G and 3G operator-provisionable mandatory. A more detailed reason for
     * the release of the connection.
     *
     * 3GPP TS 32.250 V19.0.0 clause 6.1.3.5.
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
     * 2G and 3G mandatory. A local identifier distinguishing between
     * transactions on the same MS.
     *
     * 3GPP TS 32.250 V19.0.0 clause 6.1.3.5.
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
     * 2G and 3G conditional. Partial record sequence number, only present in
     * case of partial records.
     *
     * 3GPP TS 32.250 V19.0.0 clause 6.1.3.5.
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
     * 2G and 3G operator-provisionable conditional. A set of network/
     * manufacturer specific extensions to the record, when available.
     *
     * 3GPP TS 32.250 V19.0.0 clause 6.1.3.5.
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
     * @summary `networkCallReference`.
     * @description
     *
     * 2G and 3G conditional. An identifier to correlate transactions on the
     * same call taking place in different network nodes, shall be present if
     * CAMEL is applied.
     *
     * 3GPP TS 32.250 V19.0.0 clause 6.1.3.5.
     *
     * Whenever CAMEL is applied, this field is used for correlation of call
     * records outputted from the originating MSC (when applicable), the GMSC
     * and the terminating MSC, and a network optional call record from the
     * gsmSCF.
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.2.1.59.
     *
     * @public
     * @readonly
     */
    readonly networkCallReference: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `mSCAddress`.
     * @description
     *
     * 2G and 3G conditional. This field contains the E.164 number assigned to
     * the MSC that generated the network call reference. Shall be present only
     * if CAMEL is applied.
     *
     * 3GPP TS 32.250 V19.0.0 clause 6.1.3.5.
     *
     * This field contains the Recommendation E.164 [308] number assigned to the
     * MSC that produced the record. For further details concerning the
     * structure of MSC numbers see TS 23.003 [200].
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.2.1.57.
     *
     * @public
     * @readonly
     */
    readonly mSCAddress: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `locationRoutNum`.
     * @description
     *
     * 2G not applicable, 3G operator-provisionable conditional. Location
     * Routing Number for Number Portability feature.
     *
     * 3GPP TS 32.250 V19.0.0 clause 6.1.3.5.
     *
     * @public
     * @readonly
     */
    readonly locationRoutNum: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `lrnSoInd`.
     * @description
     *
     * 2G not applicable, 3G operator-provisionable conditional. LRN Source
     * Indicator tells the source of the LRN.
     *
     * 3GPP TS 32.250 V19.0.0 clause 6.1.3.5.
     *
     * @public
     * @readonly
     */
    readonly lrnSoInd: OPTIONAL<RoamingRecord_lrnSoInd>;
    /**
     * @summary `lrnQuryStatus`.
     * @description
     *
     * 2G not applicable, 3G operator-provisionable conditional. Status of
     * Number Portability query.
     *
     * 3GPP TS 32.250 V19.0.0 clause 6.1.3.5.
     *
     * @public
     * @readonly
     */
    readonly lrnQuryStatus: OPTIONAL<RoamingRecord_lrnQuryStatus>;
    /**
     * @summary `jIPPara`.
     * @description
     *
     * 2G not applicable, 3G operator-provisionable conditional. Jurisdiction
     * Information Parameter.
     *
     * 3GPP TS 32.250 V19.0.0 clause 6.1.3.5.
     *
     * @public
     * @readonly
     */
    readonly jIPPara: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `jIPSoInd`.
     * @description
     *
     * 2G not applicable, 3G operator-provisionable conditional. JIP Source
     * Indicator tells the source of the JIP.
     *
     * 3GPP TS 32.250 V19.0.0 clause 6.1.3.5.
     *
     * @public
     * @readonly
     */
    readonly jIPSoInd: OPTIONAL<RoamingRecord_jIPSoInd>;
    /**
     * @summary `jIPQuryStatus`.
     * @description
     *
     * 2G not applicable, 3G operator-provisionable conditional. Status of
     * Number Portability query.
     *
     * 3GPP TS 32.250 V19.0.0 clause 6.1.3.5.
     *
     * @public
     * @readonly
     */
    readonly jIPQuryStatus: OPTIONAL<RoamingRecord_jIPQuryStatus>;
    /**
     * @summary `partialRecordType`.
     * @description
     *
     * 2G not applicable, 3G operator-provisionable conditional. Indicates the
     * event (time limit, etc.) that caused the generation of a partial record.
     *
     * 3GPP TS 32.250 V19.0.0 clause 6.1.3.5.
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

    constructor (
        recordType: RecordType,
        servedIMSI: OCTET_STRING,
        servedMSISDN: OPTIONAL<OCTET_STRING>,
        callingNumber: OPTIONAL<OCTET_STRING>,
        roamingNumber: OPTIONAL<OCTET_STRING>,
        recordingEntity: OCTET_STRING,
        mscIncomingTKGP: OPTIONAL<TrunkGroup>,
        mscOutgoingTKGP: OPTIONAL<TrunkGroup>,
        basicService: OPTIONAL<BasicService>,
        transparencyIndicator: OPTIONAL<TransparencyInd>,
        changeOfService: OPTIONAL<ChangeOfService[]>,
        supplServicesUsed: OPTIONAL<SuppServiceUsed[]>,
        seizureTime: OPTIONAL<OCTET_STRING>,
        answerTime: OPTIONAL<OCTET_STRING>,
        releaseTime: OPTIONAL<OCTET_STRING>,
        callDuration: INTEGER,
        dataVolume: OPTIONAL<INTEGER>,
        causeForTerm: CauseForTerm,
        diagnostics: OPTIONAL<HLRIntResult>,
        callReference: OCTET_STRING,
        sequenceNumber: OPTIONAL<INTEGER>,
        recordExtensions: OPTIONAL<ManagementExtension[]>,
        networkCallReference: OPTIONAL<OCTET_STRING>,
        mSCAddress: OPTIONAL<OCTET_STRING>,
        locationRoutNum: OPTIONAL<OCTET_STRING>,
        lrnSoInd: OPTIONAL<RoamingRecord_lrnSoInd>,
        lrnQuryStatus: OPTIONAL<RoamingRecord_lrnQuryStatus>,
        jIPPara: OPTIONAL<OCTET_STRING>,
        jIPSoInd: OPTIONAL<RoamingRecord_jIPSoInd>,
        jIPQuryStatus: OPTIONAL<RoamingRecord_jIPQuryStatus>,
        partialRecordType: OPTIONAL<PartialRecordType>
    ) {
        this.recordType = recordType;
        this.servedIMSI = servedIMSI;
        this.servedMSISDN = servedMSISDN;
        this.callingNumber = callingNumber;
        this.roamingNumber = roamingNumber;
        this.recordingEntity = recordingEntity;
        this.mscIncomingTKGP = mscIncomingTKGP;
        this.mscOutgoingTKGP = mscOutgoingTKGP;
        this.basicService = basicService;
        this.transparencyIndicator = transparencyIndicator;
        this.changeOfService = changeOfService;
        this.supplServicesUsed = supplServicesUsed;
        this.seizureTime = seizureTime;
        this.answerTime = answerTime;
        this.releaseTime = releaseTime;
        this.callDuration = callDuration;
        this.dataVolume = dataVolume;
        this.causeForTerm = causeForTerm;
        this.diagnostics = diagnostics;
        this.callReference = callReference;
        this.sequenceNumber = sequenceNumber;
        this.recordExtensions = recordExtensions;
        this.networkCallReference = networkCallReference;
        this.mSCAddress = mSCAddress;
        this.locationRoutNum = locationRoutNum;
        this.lrnSoInd = lrnSoInd;
        this.lrnQuryStatus = lrnQuryStatus;
        this.jIPPara = jIPPara;
        this.jIPSoInd = jIPSoInd;
        this.jIPQuryStatus = jIPQuryStatus;
        this.partialRecordType = partialRecordType;
    
        if ((this.servedIMSI.length < 3 || this.servedIMSI.length > 8)) {
            throw new ASN1SizeError("RoamingRecord.servedIMSI violates SIZE constraint");
        }
        if (this.servedMSISDN !== undefined && (this.servedMSISDN.length < 1 || this.servedMSISDN.length > 9)) {
            throw new ASN1SizeError("RoamingRecord.servedMSISDN violates SIZE constraint");
        }
        if (this.roamingNumber !== undefined && (this.roamingNumber.length < 1 || this.roamingNumber.length > 9)) {
            throw new ASN1SizeError("RoamingRecord.roamingNumber violates SIZE constraint");
        }
        if ((this.recordingEntity.length < 1 || this.recordingEntity.length > 20)) {
            throw new ASN1SizeError("RoamingRecord.recordingEntity violates SIZE constraint");
        }
        if (this.seizureTime !== undefined && (this.seizureTime.length !== 9)) {
            throw new ASN1SizeError("RoamingRecord.seizureTime violates SIZE constraint");
        }
        if (this.answerTime !== undefined && (this.answerTime.length !== 9)) {
            throw new ASN1SizeError("RoamingRecord.answerTime violates SIZE constraint");
        }
        if (this.releaseTime !== undefined && (this.releaseTime.length !== 9)) {
            throw new ASN1SizeError("RoamingRecord.releaseTime violates SIZE constraint");
        }
        if ((this.callReference.length < 1 || this.callReference.length > 8)) {
            throw new ASN1SizeError("RoamingRecord.callReference violates SIZE constraint");
        }
        if (this.networkCallReference !== undefined && (this.networkCallReference.length < 1 || this.networkCallReference.length > 8)) {
            throw new ASN1SizeError("RoamingRecord.networkCallReference violates SIZE constraint");
        }
        if (this.mSCAddress !== undefined && (this.mSCAddress.length < 1 || this.mSCAddress.length > 20)) {
            throw new ASN1SizeError("RoamingRecord.mSCAddress violates SIZE constraint");
        }
        if (this.locationRoutNum !== undefined && (this.locationRoutNum.length !== 5)) {
            throw new ASN1SizeError("RoamingRecord.locationRoutNum violates SIZE constraint");
        }
        if (this.jIPPara !== undefined && (this.jIPPara.length !== 5)) {
            throw new ASN1SizeError("RoamingRecord.jIPPara violates SIZE constraint");
        }
    }

    /**
     * @summary Restructures an object into a RoamingRecord
     * @description
     *
     * This takes an `object` and converts it to a `RoamingRecord`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `RoamingRecord`.
     * @returns {RoamingRecord}
     */
    public static _from_object (_o: { [_K in keyof (RoamingRecord)]: (RoamingRecord)[_K] }): RoamingRecord {
        return new RoamingRecord(_o.recordType, _o.servedIMSI, _o.servedMSISDN, _o.callingNumber, _o.roamingNumber, _o.recordingEntity, _o.mscIncomingTKGP, _o.mscOutgoingTKGP, _o.basicService, _o.transparencyIndicator, _o.changeOfService, _o.supplServicesUsed, _o.seizureTime, _o.answerTime, _o.releaseTime, _o.callDuration, _o.dataVolume, _o.causeForTerm, _o.diagnostics, _o.callReference, _o.sequenceNumber, _o.recordExtensions, _o.networkCallReference, _o.mSCAddress, _o.locationRoutNum, _o.lrnSoInd, _o.lrnQuryStatus, _o.jIPPara, _o.jIPSoInd, _o.jIPQuryStatus, _o.partialRecordType);
    }

        /**
         * @summary The enum used as the type of the component `transparencyIndicator`
         * @public
         * @static
         */

    public static _enum_for_transparencyIndicator = _enum_for_TransparencyInd;        /**
         * @summary The enum used as the type of the component `partialRecordType`
         * @public
         * @static
         */

    public static _enum_for_partialRecordType = _enum_for_PartialRecordType;
}

/**
 * @summary The Leading Root Component Types of RoamingRecord
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading
 * root component type list of a SET or SEQUENCE.
 * @constant
 */
export
const _root_component_type_list_1_spec_for_RoamingRecord: $.ComponentSpec[] = [
    new $.ComponentSpec("recordType", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("servedIMSI", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("servedMSISDN", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("callingNumber", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("roamingNumber", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("recordingEntity", false, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("mscIncomingTKGP", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("mscOutgoingTKGP", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("basicService", true, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("transparencyIndicator", true, $.hasTag(_TagClass.context, 9)),
    new $.ComponentSpec("changeOfService", true, $.hasTag(_TagClass.context, 10)),
    new $.ComponentSpec("supplServicesUsed", true, $.hasTag(_TagClass.context, 11)),
    new $.ComponentSpec("seizureTime", true, $.hasTag(_TagClass.context, 12)),
    new $.ComponentSpec("answerTime", true, $.hasTag(_TagClass.context, 13)),
    new $.ComponentSpec("releaseTime", true, $.hasTag(_TagClass.context, 14)),
    new $.ComponentSpec("callDuration", false, $.hasTag(_TagClass.context, 15)),
    new $.ComponentSpec("dataVolume", true, $.hasTag(_TagClass.context, 16)),
    new $.ComponentSpec("causeForTerm", false, $.hasTag(_TagClass.context, 17)),
    new $.ComponentSpec("diagnostics", true, $.hasTag(_TagClass.context, 18)),
    new $.ComponentSpec("callReference", false, $.hasTag(_TagClass.context, 19)),
    new $.ComponentSpec("sequenceNumber", true, $.hasTag(_TagClass.context, 20)),
    new $.ComponentSpec("recordExtensions", true, $.hasTag(_TagClass.context, 21)),
    new $.ComponentSpec("networkCallReference", true, $.hasTag(_TagClass.context, 22)),
    new $.ComponentSpec("mSCAddress", true, $.hasTag(_TagClass.context, 23)),
    new $.ComponentSpec("locationRoutNum", true, $.hasTag(_TagClass.context, 24)),
    new $.ComponentSpec("lrnSoInd", true, $.hasTag(_TagClass.context, 25)),
    new $.ComponentSpec("lrnQuryStatus", true, $.hasTag(_TagClass.context, 26)),
    new $.ComponentSpec("jIPPara", true, $.hasTag(_TagClass.context, 27)),
    new $.ComponentSpec("jIPSoInd", true, $.hasTag(_TagClass.context, 28)),
    new $.ComponentSpec("jIPQuryStatus", true, $.hasTag(_TagClass.context, 29)),
    new $.ComponentSpec("partialRecordType", true, $.hasTag(_TagClass.context, 30))
];

/**
 * @summary The Trailing Root Component Types of RoamingRecord
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing
 * root component type list of a SET or SEQUENCE.
 * @constant
 */
export
const _root_component_type_list_2_spec_for_RoamingRecord: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of RoamingRecord
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension
 * addition component type list of a SET or SEQUENCE.
 * @constant
 */
export
const _extension_additions_list_spec_for_RoamingRecord: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_RoamingRecord: $.ASN1Decoder<RoamingRecord> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RoamingRecord
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RoamingRecord (el: _Element): RoamingRecord {
    if (!_cached_decoder_for_RoamingRecord) { _cached_decoder_for_RoamingRecord = function (el: _Element): RoamingRecord {
    /* START_OF_SET_COMPONENT_DECLARATIONS */
    let recordType!: RecordType;
    let servedIMSI!: OCTET_STRING;
    let servedMSISDN: OPTIONAL<OCTET_STRING>;
    let callingNumber: OPTIONAL<OCTET_STRING>;
    let roamingNumber: OPTIONAL<OCTET_STRING>;
    let recordingEntity!: OCTET_STRING;
    let mscIncomingTKGP: OPTIONAL<TrunkGroup>;
    let mscOutgoingTKGP: OPTIONAL<TrunkGroup>;
    let basicService: OPTIONAL<BasicService>;
    let transparencyIndicator: OPTIONAL<TransparencyInd>;
    let changeOfService: OPTIONAL<ChangeOfService[]>;
    let supplServicesUsed: OPTIONAL<SuppServiceUsed[]>;
    let seizureTime: OPTIONAL<OCTET_STRING>;
    let answerTime: OPTIONAL<OCTET_STRING>;
    let releaseTime: OPTIONAL<OCTET_STRING>;
    let callDuration!: INTEGER;
    let dataVolume: OPTIONAL<INTEGER>;
    let causeForTerm!: CauseForTerm;
    let diagnostics: OPTIONAL<HLRIntResult>;
    let callReference!: OCTET_STRING;
    let sequenceNumber: OPTIONAL<INTEGER>;
    let recordExtensions: OPTIONAL<ManagementExtension[]>;
    let networkCallReference: OPTIONAL<OCTET_STRING>;
    let mSCAddress: OPTIONAL<OCTET_STRING>;
    let locationRoutNum: OPTIONAL<OCTET_STRING>;
    let lrnSoInd: OPTIONAL<RoamingRecord_lrnSoInd>;
    let lrnQuryStatus: OPTIONAL<RoamingRecord_lrnQuryStatus>;
    let jIPPara: OPTIONAL<OCTET_STRING>;
    let jIPSoInd: OPTIONAL<RoamingRecord_jIPSoInd>;
    let jIPQuryStatus: OPTIONAL<RoamingRecord_jIPQuryStatus>;
    let partialRecordType: OPTIONAL<PartialRecordType>;
    /* END_OF_SET_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: $.DecodingMap = {
        "recordType": (_el: _Element): void => { recordType = $._decode_implicit<RecordType>(() => _decode_RecordType)(_el); },
        "servedIMSI": (_el: _Element): void => { servedIMSI = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "servedMSISDN": (_el: _Element): void => { servedMSISDN = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "callingNumber": (_el: _Element): void => { callingNumber = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "roamingNumber": (_el: _Element): void => { roamingNumber = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "recordingEntity": (_el: _Element): void => { recordingEntity = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "mscIncomingTKGP": (_el: _Element): void => { mscIncomingTKGP = $._decode_explicit<TrunkGroup>(() => _decode_TrunkGroup)(_el); },
        "mscOutgoingTKGP": (_el: _Element): void => { mscOutgoingTKGP = $._decode_explicit<TrunkGroup>(() => _decode_TrunkGroup)(_el); },
        "basicService": (_el: _Element): void => { basicService = $._decode_explicit<BasicService>(() => _decode_BasicService)(_el); },
        "transparencyIndicator": (_el: _Element): void => { transparencyIndicator = $._decode_implicit<TransparencyInd>(() => _decode_TransparencyInd)(_el); },
        "changeOfService": (_el: _Element): void => { changeOfService = $._decode_implicit<ChangeOfService[]>(() => $._decodeSequenceOf<ChangeOfService>(() => _decode_ChangeOfService))(_el); },
        "supplServicesUsed": (_el: _Element): void => { supplServicesUsed = $._decode_implicit<SuppServiceUsed[]>(() => $._decodeSequenceOf<SuppServiceUsed>(() => _decode_SuppServiceUsed))(_el); },
        "seizureTime": (_el: _Element): void => { seizureTime = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "answerTime": (_el: _Element): void => { answerTime = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "releaseTime": (_el: _Element): void => { releaseTime = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "callDuration": (_el: _Element): void => { callDuration = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "dataVolume": (_el: _Element): void => { dataVolume = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "causeForTerm": (_el: _Element): void => { causeForTerm = $._decode_implicit<CauseForTerm>(() => _decode_CauseForTerm)(_el); },
        "diagnostics": (_el: _Element): void => { diagnostics = $._decode_explicit<HLRIntResult>(() => _decode_HLRIntResult)(_el); },
        "callReference": (_el: _Element): void => { callReference = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "sequenceNumber": (_el: _Element): void => { sequenceNumber = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "recordExtensions": (_el: _Element): void => { recordExtensions = $._decode_implicit<ManagementExtension[]>(() => $._decodeSetOf<ManagementExtension>(() => _decode_ManagementExtension))(_el); },
        "networkCallReference": (_el: _Element): void => { networkCallReference = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "mSCAddress": (_el: _Element): void => { mSCAddress = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "locationRoutNum": (_el: _Element): void => { locationRoutNum = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "lrnSoInd": (_el: _Element): void => { lrnSoInd = $._decode_implicit<RoamingRecord_lrnSoInd>(() => _decode_RoamingRecord_lrnSoInd)(_el); },
        "lrnQuryStatus": (_el: _Element): void => { lrnQuryStatus = $._decode_implicit<RoamingRecord_lrnQuryStatus>(() => _decode_RoamingRecord_lrnQuryStatus)(_el); },
        "jIPPara": (_el: _Element): void => { jIPPara = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "jIPSoInd": (_el: _Element): void => { jIPSoInd = $._decode_implicit<RoamingRecord_jIPSoInd>(() => _decode_RoamingRecord_jIPSoInd)(_el); },
        "jIPQuryStatus": (_el: _Element): void => { jIPQuryStatus = $._decode_implicit<RoamingRecord_jIPQuryStatus>(() => _decode_RoamingRecord_jIPQuryStatus)(_el); },
        "partialRecordType": (_el: _Element): void => { partialRecordType = $._decode_implicit<PartialRecordType>(() => _decode_PartialRecordType)(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    $._parse_set(el, callbacks,
        _root_component_type_list_1_spec_for_RoamingRecord,
        _extension_additions_list_spec_for_RoamingRecord,
        _root_component_type_list_2_spec_for_RoamingRecord,
        undefined,
    );
    return new RoamingRecord( /* SET_CONSTRUCTOR_CALL */
        recordType,
        servedIMSI,
        servedMSISDN,
        callingNumber,
        roamingNumber,
        recordingEntity,
        mscIncomingTKGP,
        mscOutgoingTKGP,
        basicService,
        transparencyIndicator,
        changeOfService,
        supplServicesUsed,
        seizureTime,
        answerTime,
        releaseTime,
        callDuration,
        dataVolume,
        causeForTerm,
        diagnostics,
        callReference,
        sequenceNumber,
        recordExtensions,
        networkCallReference,
        mSCAddress,
        locationRoutNum,
        lrnSoInd,
        lrnQuryStatus,
        jIPPara,
        jIPSoInd,
        jIPQuryStatus,
        partialRecordType
    );
}; }
    return _cached_decoder_for_RoamingRecord(el);
}

let _cached_encoder_for_RoamingRecord: $.ASN1Encoder<RoamingRecord> | null = null;

/**
 * @summary Encodes a(n) RoamingRecord into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RoamingRecord, encoded as an ASN.1 Element.
 */
export
function _encode_RoamingRecord (value: RoamingRecord, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RoamingRecord) { _cached_encoder_for_RoamingRecord = function (value: RoamingRecord, _elGetter: $.ASN1Encoder<RoamingRecord>): _Element {
    const _components: _Element[] = [];
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_RecordType, $.BER)(value.recordType, $.BER));
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeOctetString, $.BER)(value.servedIMSI, $.BER));
    if (value.servedMSISDN !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => $._encodeOctetString, $.BER)(value.servedMSISDN, $.BER));
    }
    if (value.callingNumber !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => $._encodeOctetString, $.BER)(value.callingNumber, $.BER));
    }
    if (value.roamingNumber !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 4, () => $._encodeOctetString, $.BER)(value.roamingNumber, $.BER));
    }
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 5, () => $._encodeOctetString, $.BER)(value.recordingEntity, $.BER));
    if (value.mscIncomingTKGP !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 6, () => _encode_TrunkGroup, $.BER)(value.mscIncomingTKGP, $.BER));
    }
    if (value.mscOutgoingTKGP !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 7, () => _encode_TrunkGroup, $.BER)(value.mscOutgoingTKGP, $.BER));
    }
    if (value.basicService !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 8, () => _encode_BasicService, $.BER)(value.basicService, $.BER));
    }
    if (value.transparencyIndicator !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 9, () => _encode_TransparencyInd, $.BER)(value.transparencyIndicator, $.BER));
    }
    if (value.changeOfService !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 10, () => $._encodeSequenceOf<ChangeOfService>(() => _encode_ChangeOfService, $.BER), $.BER)(value.changeOfService, $.BER));
    }
    if (value.supplServicesUsed !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 11, () => $._encodeSequenceOf<SuppServiceUsed>(() => _encode_SuppServiceUsed, $.BER), $.BER)(value.supplServicesUsed, $.BER));
    }
    if (value.seizureTime !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 12, () => $._encodeOctetString, $.BER)(value.seizureTime, $.BER));
    }
    if (value.answerTime !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 13, () => $._encodeOctetString, $.BER)(value.answerTime, $.BER));
    }
    if (value.releaseTime !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 14, () => $._encodeOctetString, $.BER)(value.releaseTime, $.BER));
    }
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 15, () => $._encodeInteger, $.BER)(value.callDuration, $.BER));
    if (value.dataVolume !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 16, () => $._encodeInteger, $.BER)(value.dataVolume, $.BER));
    }
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 17, () => _encode_CauseForTerm, $.BER)(value.causeForTerm, $.BER));
    if (value.diagnostics !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 18, () => _encode_HLRIntResult, $.BER)(value.diagnostics, $.BER));
    }
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 19, () => $._encodeOctetString, $.BER)(value.callReference, $.BER));
    if (value.sequenceNumber !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 20, () => $._encodeInteger, $.BER)(value.sequenceNumber, $.BER));
    }
    if (value.recordExtensions !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 21, () => $._encodeSetOf<ManagementExtension>(() => _encode_ManagementExtension, $.BER), $.BER)(value.recordExtensions, $.BER));
    }
    if (value.networkCallReference !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 22, () => $._encodeOctetString, $.BER)(value.networkCallReference, $.BER));
    }
    if (value.mSCAddress !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 23, () => $._encodeOctetString, $.BER)(value.mSCAddress, $.BER));
    }
    if (value.locationRoutNum !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 24, () => $._encodeOctetString, $.BER)(value.locationRoutNum, $.BER));
    }
    if (value.lrnSoInd !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 25, () => _encode_RoamingRecord_lrnSoInd, $.BER)(value.lrnSoInd, $.BER));
    }
    if (value.lrnQuryStatus !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 26, () => _encode_RoamingRecord_lrnQuryStatus, $.BER)(value.lrnQuryStatus, $.BER));
    }
    if (value.jIPPara !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 27, () => $._encodeOctetString, $.BER)(value.jIPPara, $.BER));
    }
    if (value.jIPSoInd !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 28, () => _encode_RoamingRecord_jIPSoInd, $.BER)(value.jIPSoInd, $.BER));
    }
    if (value.jIPQuryStatus !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 29, () => _encode_RoamingRecord_jIPQuryStatus, $.BER)(value.jIPQuryStatus, $.BER));
    }
    if (value.partialRecordType !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 30, () => _encode_PartialRecordType, $.BER)(value.partialRecordType, $.BER));
    }
    return $._encodeSet(_components, $.BER);
}; }
    return _cached_encoder_for_RoamingRecord(value, elGetter);
}


/* eslint-enable */
