/* eslint-disable */
import {
    type BOOLEAN,
    type INTEGER,
    type OCTET_STRING,
    type OPTIONAL,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1SizeError,
    ASN1OverflowError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type RecordType, _decode_RecordType, _encode_RecordType } from "../CSChargingDataTypes/RecordType.ta.mjs";
import { type DefaultCallHandling, _decode_DefaultCallHandling, _encode_DefaultCallHandling, _enum_for_DefaultCallHandling } from "../CSChargingDataTypes/DefaultCallHandling.ta.mjs";
import { ManagementExtension, _decode_ManagementExtension, _encode_ManagementExtension } from "../CSChargingDataTypes/ManagementExtension.ta.mjs";
import { type TrunkGroup, _decode_TrunkGroup, _encode_TrunkGroup } from "../CSChargingDataTypes/TrunkGroup.ta.mjs";
import { type CauseForTerm, _decode_CauseForTerm, _encode_CauseForTerm } from "../CSChargingDataTypes/CauseForTerm.ta.mjs";
import { type HLRIntResult, _decode_HLRIntResult, _encode_HLRIntResult } from "../CSChargingDataTypes/HLRIntResult.ta.mjs";
import { type TermCAMELRecord_levelOfCAMELService, _decode_TermCAMELRecord_levelOfCAMELService, _encode_TermCAMELRecord_levelOfCAMELService } from "../CSChargingDataTypes/TermCAMELRecord-levelOfCAMELService.ta.mjs";
import { CAMELInformation, _decode_CAMELInformation, _encode_CAMELInformation } from "../CSChargingDataTypes/CAMELInformation.ta.mjs";
import { type TermCAMELRecord_lrnSoInd, _decode_TermCAMELRecord_lrnSoInd, _encode_TermCAMELRecord_lrnSoInd } from "../CSChargingDataTypes/TermCAMELRecord-lrnSoInd.ta.mjs";
import { type TermCAMELRecord_lrnQuryStatus, _decode_TermCAMELRecord_lrnQuryStatus, _encode_TermCAMELRecord_lrnQuryStatus } from "../CSChargingDataTypes/TermCAMELRecord-lrnQuryStatus.ta.mjs";
import { type TermCAMELRecord_jIPSoInd, _decode_TermCAMELRecord_jIPSoInd, _encode_TermCAMELRecord_jIPSoInd } from "../CSChargingDataTypes/TermCAMELRecord-jIPSoInd.ta.mjs";
import { type TermCAMELRecord_jIPQuryStatus, _decode_TermCAMELRecord_jIPQuryStatus, _encode_TermCAMELRecord_jIPQuryStatus } from "../CSChargingDataTypes/TermCAMELRecord-jIPQuryStatus.ta.mjs";
import { PartialRecordType, _decode_PartialRecordType, _encode_PartialRecordType, _enum_for_PartialRecordType } from "../CSChargingDataTypes/PartialRecordType.ta.mjs";


/**
 * @summary TermCAMELRecord
 * @description
 *
 * Terminating CAMEL call-attempt CDR. When generation is enabled, the
 * GMSC/gsmSSF that performs terminating CAMEL handling, and the MSC
 * server/gsmSSF that performs a visited terminating CAMEL attempt, each
 * generate one record for a call towards a subscriber with T-CSI or VT-CSI
 * whose terminating trigger criteria are met.
 *
 * `destinationRoutingAddress` is the number available for routing after the
 * CAMEL server enquiry. `calledNumber` is the address as received by the
 * GMSC/gsmSSF. `mscServerIndication` indicates that CAMEL call handling is
 * active in the MSC server.
 *
 * An MSC that provides CAMEL CPH uses the CPH-adapted form of this record
 * for every terminating CAMEL attempt, even when that call uses no CPH
 * operation (clauses 5.1.3.14 and 6.1.3.27). Outgoing legs of the call
 * segment are recorded in `cAMELCallLegInformation`. A new call segment
 * produces a further CDR (clause 6.1.3.25, encoded as `MOCallRecord`).
 *
 * Two CAMEL services can be active. The unsuffixed CAMEL fields are the
 * first service. Fields suffixed `2` are a second service such as a dialled
 * service. Clause 5.1.3.2 says the stored CAMEL information covers one call
 * leg, including the impact of all CAMEL services.
 *
 * Categories are M, C, OM, and OC as in TS 32.240 clause 5.4.
 *
 * 3GPP TS 32.250 V19.0.0 clauses 5.1.3.2, 5.1.3.14, 5.2.1.19, 6.1.3.18, and
 * 6.1.3.27.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TermCAMELRecord ::= SET {
 *    recordtype                  [0] IMPLICIT RecordType,
 *    servedIMSI                  [1] IMPLICIT OCTET STRING ( SIZE( 3 .. 8 ) ),
 *    servedMSISDN                [2] IMPLICIT OCTET STRING ( SIZE( 1 .. 20 ) ) ( SIZE( 1 .. 9 ) ) OPTIONAL,
 *    recordingEntity             [3] IMPLICIT OCTET STRING ( SIZE( 1 .. 20 ) ),
 *    interrogationTime           [4] IMPLICIT OCTET STRING ( SIZE( 9 ) ),
 *    destinationRoutingAddress   [5] IMPLICIT SEQUENCE  ( SIZE( 1 ) ) OF
 *       OCTET STRING ( SIZE( 1 .. 41 ) ),
 *    gsm-SCFAddress              [6] IMPLICIT OCTET STRING ( SIZE( 1 .. 20 ) ) ( SIZE( 1 .. 9 ) ),
 *    serviceKey                  [7] IMPLICIT INTEGER ( 0 .. 2147483647 ),
 *    networkCallReference        [8] IMPLICIT OCTET STRING ( SIZE( 1 .. 8 ) ) OPTIONAL,
 *    mSCAddress                  [9] IMPLICIT OCTET STRING ( SIZE( 1 .. 20 ) ) OPTIONAL,
 *    defaultCallHandling         [10] IMPLICIT DefaultCallHandling OPTIONAL,
 *    recordExtensions            [11] IMPLICIT SET  OF
 *       ManagementExtension OPTIONAL,
 *    calledNumber                [12] IMPLICIT OCTET STRING,
 *    callingNumber               [13] IMPLICIT OCTET STRING OPTIONAL,
 *    mscIncomingTKGP             [14] TrunkGroup OPTIONAL,
 *    mscOutgoingTKGP             [15] TrunkGroup OPTIONAL,
 *    seizureTime                 [16] IMPLICIT OCTET STRING ( SIZE( 9 ) ) OPTIONAL,
 *    answerTime                  [17] IMPLICIT OCTET STRING ( SIZE( 9 ) ) OPTIONAL,
 *    releaseTime                 [18] IMPLICIT OCTET STRING ( SIZE( 9 ) ) OPTIONAL,
 *    callDuration                [19] IMPLICIT INTEGER,
 *    dataVolume                  [20] IMPLICIT INTEGER OPTIONAL,
 *    causeForTerm                [21] IMPLICIT CauseForTerm,
 *    diagnostics                 [22] HLRIntResult OPTIONAL,
 *    callReference               [23] IMPLICIT OCTET STRING ( SIZE( 1 .. 8 ) ),
 *    sequenceNumber              [24] IMPLICIT INTEGER OPTIONAL,
 *    numberOfDPEncountered       [25] IMPLICIT INTEGER OPTIONAL,
 *    levelOfCAMELService         [26] IMPLICIT BIT STRING {
 *       basic  (0 ),
 *       callDurationSupervision  (1 ),
 *       onlineCharging  (2 )} OPTIONAL,
 *    freeFormatData              [27] IMPLICIT OCTET STRING ( SIZE( 1 .. 160 ) ) OPTIONAL,
 *    cAMELCallLegInformation     [28] IMPLICIT SEQUENCE  OF
 *       CAMELInformation OPTIONAL,
 *    freeFormatDataAppend        [29] IMPLICIT BOOLEAN OPTIONAL,
 *    defaultCallHandling-2       [30] IMPLICIT DefaultCallHandling OPTIONAL,
 *    gsm-SCFAddress-2            [31] IMPLICIT OCTET STRING ( SIZE( 1 .. 20 ) ) ( SIZE( 1 .. 9 ) ) OPTIONAL,
 *    serviceKey-2                [32] IMPLICIT INTEGER ( 0 .. 2147483647 ) OPTIONAL,
 *    freeFormatData-2            [33] IMPLICIT OCTET STRING ( SIZE( 1 .. 160 ) ) OPTIONAL,
 *    freeFormatDataAppend-2      [34] IMPLICIT BOOLEAN OPTIONAL,
 *    mscServerIndication         [35] IMPLICIT BOOLEAN OPTIONAL,
 *    locationRoutNum             [36] IMPLICIT OCTET STRING ( SIZE( 5 ) ) OPTIONAL,
 *    lrnSoInd                    [37] IMPLICIT INTEGER {
 *       lRN-NP-Database        ( 1 ),
 *       switchingSystemData    ( 2 ),
 *       incomingsignaling      ( 3 ),
 *       unknown                ( 9 )} OPTIONAL,
 *    lrnQuryStatus               [38] IMPLICIT INTEGER {
 *       successfulQuery         ( 1 ),
 *       noQueryResponseMsg      ( 2 ),
 *       queryProtocolErr        ( 4 ),
 *       queryResponseDataErr    ( 5 ),
 *       queryRejected           ( 6 ),
 *       queryNotPerformed       ( 9 ),
 *       queryUnsuccessful       ( 99 )} OPTIONAL,
 *    jIPPara                     [39] IMPLICIT OCTET STRING ( SIZE( 5 ) ) OPTIONAL,
 *    jIPSoInd                    [40] IMPLICIT INTEGER {
 *       lRN-NP-Database        ( 1 ),
 *       switchingSystemData    ( 2 ),
 *       incomingsignaling      ( 3 ),
 *       unknown                ( 9 )} OPTIONAL,
 *    jIPQuryStatus               [41] IMPLICIT INTEGER {
 *       successfulQuery         ( 1 ),
 *       noQueryResponseMsg      ( 2 ),
 *       queryProtocolErr        ( 4 ),
 *       queryResponseDataErr    ( 5 ),
 *       queryRejected           ( 6 ),
 *       queryNotPerformed       ( 9 ),
 *       queryUnsuccessful       ( 99 )} OPTIONAL,
 *    partialRecordType           [42] IMPLICIT PartialRecordType OPTIONAL}
 * ```
 * @class
 */
export
class TermCAMELRecord {
    /**
     * @summary `recordtype`.
     * @description
     *
     * 2G and 3G mandatory. Terminating CAMEL interrogation.
     *
     * 3GPP TS 32.250 V19.0.0 clauses 6.1.3.18 and 6.1.3.27.
     *
     * @public
     * @readonly
     */
    readonly recordtype: RecordType;
    /**
     * @summary `servedIMSI`.
     * @description
     *
     * 2G and 3G mandatory. IMSI of the called party.
     *
     * 3GPP TS 32.250 V19.0.0 clauses 6.1.3.18 and 6.1.3.27.
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
     * party.
     *
     * 3GPP TS 32.250 V19.0.0 clauses 6.1.3.18 and 6.1.3.27.
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
     * @summary `recordingEntity`.
     * @description
     *
     * 2G and 3G mandatory. The E.164 number of the GMSC.
     *
     * 3GPP TS 32.250 V19.0.0 clauses 6.1.3.18 and 6.1.3.27.
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
     * @summary `interrogationTime`.
     * @description
     *
     * 2G and 3G mandatory. Time at which the interrogation was invoked.
     *
     * 3GPP TS 32.250 V19.0.0 clauses 6.1.3.18 and 6.1.3.27.
     *
     * @public
     * @readonly
     */
    readonly interrogationTime: OCTET_STRING;
    /**
     * @summary `destinationRoutingAddress`.
     * @description
     *
     * 2G and 3G mandatory. The number available for routing after the CAMEL
     * server enquiry.
     *
     * 3GPP TS 32.250 V19.0.0 clause 6.1.3.18.
     *
     * @public
     * @readonly
     */
    readonly destinationRoutingAddress: OCTET_STRING[];
    /**
     * @summary `gsm_SCFAddress`.
     * @description
     *
     * 2G and 3G mandatory. The CAMEL server serving the subscriber.
     *
     * 3GPP TS 32.250 V19.0.0 clauses 6.1.3.18 and 6.1.3.27.
     *
     * This field identifies the CAMEL server serving the subscriber. Address is
     * defined in HLR as part of CAMEL subscription information.
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.2.1.28.
     *
     * @public
     * @readonly
     */
    readonly gsm_SCFAddress: OCTET_STRING;
    /**
     * @summary `serviceKey`.
     * @description
     *
     * 2G and 3G mandatory. The CAMEL service logic to be applied.
     *
     * 3GPP TS 32.250 V19.0.0 clauses 6.1.3.18 and 6.1.3.27.
     *
     * This field identifies the CAMEL service logic applied. Service key is
     * defined in HLR as part of CAMEL subscription information.
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.2.1.83.
     *
     * @public
     * @readonly
     */
    readonly serviceKey: INTEGER;
    /**
     * @summary `networkCallReference`.
     * @description
     *
     * 2G and 3G mandatory. An identifier to correlate transactions on the same
     * call taking place in different network nodes.
     *
     * 3GPP TS 32.250 V19.0.0 clauses 6.1.3.18 and 6.1.3.27.
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
     * 2G and 3G mandatory. This field contains the E.164 number assigned to the
     * MSC that generated the network call reference.
     *
     * 3GPP TS 32.250 V19.0.0 clauses 6.1.3.18 and 6.1.3.27.
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
     * @summary `defaultCallHandling`.
     * @description
     *
     * 2G and 3G operator-provisionable conditional. Indicates whether or not a
     * CAMEL call encountered default call handling. This field shall be present
     * only if default call handling has been applied.
     *
     * 3GPP TS 32.250 V19.0.0 clauses 6.1.3.18 and 6.1.3.27.
     *
     * @public
     * @readonly
     */
    readonly defaultCallHandling: OPTIONAL<DefaultCallHandling>;
    /**
     * @summary `recordExtensions`.
     * @description
     *
     * 2G and 3G operator-provisionable conditional. A set of network/
     * manufacturer specific extensions to the record, when available.
     *
     * 3GPP TS 32.250 V19.0.0 clauses 6.1.3.18 and 6.1.3.27.
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
     * @summary `calledNumber`.
     * @description
     *
     * 2G and 3G mandatory. The address of the called party as received by the
     * GMSC/gsmSSF.
     *
     * 3GPP TS 32.250 V19.0.0 clauses 6.1.3.18 and 6.1.3.27.
     *
     * @public
     * @readonly
     */
    readonly calledNumber: OCTET_STRING;
    /**
     * @summary `callingNumber`.
     * @description
     *
     * 2G and 3G conditional. The address of the calling party, if available.
     *
     * 3GPP TS 32.250 V19.0.0 clauses 6.1.3.18 and 6.1.3.27.
     *
     * @public
     * @readonly
     */
    readonly callingNumber: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `mscIncomingTKGP`.
     * @description
     *
     * 2G operator-provisionable mandatory, 3G operator-provisionable
     * conditional. The GMSC trunk group on which the call originated. If
     * available in 3G, this parameter shall be supplied.
     *
     * 3GPP TS 32.250 V19.0.0 clauses 6.1.3.18 and 6.1.3.27.
     *
     * @public
     * @readonly
     */
    readonly mscIncomingTKGP: OPTIONAL<TrunkGroup>;
    /**
     * @summary `mscOutgoingTKGP`.
     * @description
     *
     * 2G operator-provisionable mandatory, 3G operator-provisionable
     * conditional. The trunk group on which the call left the GMSC. If
     * available in 3G, this parameter shall be supplied.
     *
     * 3GPP TS 32.250 V19.0.0 clause 6.1.3.18.
     *
     * @public
     * @readonly
     */
    readonly mscOutgoingTKGP: OPTIONAL<TrunkGroup>;
    /**
     * @summary `seizureTime`.
     * @description
     *
     * 2G and 3G conditional. Time of incoming traffic channel seizure (for
     * unsuccessful call attempts).
     *
     * 3GPP TS 32.250 V19.0.0 clauses 6.1.3.18 and 6.1.3.27.
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
     * 3GPP TS 32.250 V19.0.0 clauses 6.1.3.18 and 6.1.3.27.
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
     * 3GPP TS 32.250 V19.0.0 clauses 6.1.3.18 and 6.1.3.27.
     *
     * @public
     * @readonly
     */
    readonly releaseTime: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `callDuration`.
     * @description
     *
     * terminating CAMEL: 2G and 3G mandatory. The chargeable duration of the
     * connection for successful calls, the holding time of call attempts.
     *
     * CPH terminating CAMEL: 2G and 3G conditional. The chargeable duration of
     * the connection for successful calls, the holding time of call attempts.
     *
     * 3GPP TS 32.250 V19.0.0 clauses 6.1.3.18 and 6.1.3.27.
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
     * 2G conditional, 3G not applicable. The number of data segments
     * transmitted if available at the GMSC.
     *
     * 3GPP TS 32.250 V19.0.0 clause 6.1.3.18.
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
     * 3GPP TS 32.250 V19.0.0 clauses 6.1.3.18 and 6.1.3.27.
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
     * 3GPP TS 32.250 V19.0.0 clauses 6.1.3.18 and 6.1.3.27.
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
     * 3GPP TS 32.250 V19.0.0 clauses 6.1.3.18 and 6.1.3.27.
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
     * 3GPP TS 32.250 V19.0.0 clauses 6.1.3.18 and 6.1.3.27.
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
     * @summary `numberOfDPEncountered`.
     * @description
     *
     * terminating CAMEL: 2G and 3G operator-provisionable conditional. Number
     * that counts how often armed detection points (TDP and EDP) were
     * encountered.
     *
     * CPH terminating CAMEL: 2G and 3G operator-provisionable conditional.
     * Number that counts how often armed detection points (TDP and EDP) were
     * encountered. Sum of all DPs encountered in this call.
     *
     * 3GPP TS 32.250 V19.0.0 clauses 6.1.3.18 and 6.1.3.27.
     *
     * This field indicates how often CAMEL armed detection points (TDP and EDP)
     * were encountered and is a measure of signalling between serving network
     * and CAMEL service and complements 'Level of CAMEL service' field.
     * Detection points from all applied CAMEL services for a single call leg
     * and processed in the same gsmSSF shall be counted together.
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.2.1.61.
     *
     * @public
     * @readonly
     */
    readonly numberOfDPEncountered: OPTIONAL<INTEGER>;
    /**
     * @summary `levelOfCAMELService`.
     * @description
     *
     * 2G and 3G operator-provisionable conditional. Indicator of the complexity
     * of the CAMEL feature used.
     *
     * 3GPP TS 32.250 V19.0.0 clauses 6.1.3.18 and 6.1.3.27.
     *
     * This field describes briefly the complexity of CAMEL invocation:
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.2.1.43.
     *
     * @public
     * @readonly
     */
    readonly levelOfCAMELService: OPTIONAL<TermCAMELRecord_levelOfCAMELService>;
    /**
     * @summary `freeFormatData`.
     * @description
     *
     * 2G and 3G conditional. This field contains data sent by the gsmSCF in the
     * Furnish Charging Information (FCI) message(s). The data can be sent
     * either in one FCI message or several FCI messages with append indicator.
     *
     * 3GPP TS 32.250 V19.0.0 clauses 6.1.3.18 and 6.1.3.27.
     *
     * This field contains charging information sent by the gsmSCF in the
     * Furnish Charging Information (FCI) messages as defined in TS 29.078
     * [217]. The data can be sent either in one FCI message or several FCI
     * messages with append indicator. This data is transferred transparently in
     * the CAMEL clauses of the relevant call records. 'Free format data' sent
     * to the legID=1 is always stored in the top level of the respective
     * record. 'Free format data' sent to the legID >1 is stored in the
     * appropriate CAMEL call leg information field. If the FCI is received more
     * than once during one continuing incoming/outgoing CAMEL call leg, the
     * append indicator defines whether the FCI information is appended to
     * previous FCI and stored in the relevant record or the information of the
     * last FCI received is stored in the relevant record (the previous FCI
     * information shall be overwritten). In the event of partial output the
     * currently valid 'Free format data' is stored in the partial record.
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.2.1.26.
     *
     * @public
     * @readonly
     */
    readonly freeFormatData: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `cAMELCallLegInformation`.
     * @description
     *
     * 2G and 3G conditional. Set of CAMEL information IEs. Each of these IEs
     * contains information related to one outgoing CAMEL call leg.
     *
     * 3GPP TS 32.250 V19.0.0 clauses 6.1.3.18 and 6.1.3.27.
     *
     * This field contains a set of CAMEL information IEs according to the
     * number of outgoing CAMEL call legs.
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.2.1.8.
     *
     * @public
     * @readonly
     */
    readonly cAMELCallLegInformation: OPTIONAL<CAMELInformation[]>;
    /**
     * @summary `freeFormatDataAppend`.
     * @description
     *
     * 2G and 3G conditional. Indicator if free format data from this CDR is to
     * be appended to free format data in previous partial CDR.
     *
     * 3GPP TS 32.250 V19.0.0 clauses 6.1.3.18 and 6.1.3.27.
     *
     * This field contains an indicator whether free format data is to be
     * appended to free format data stored in previous partial CDR. This field
     * is needed in CDR post-processing to sort out valid free format data for
     * that call leg from sequence of partial records. Creation of partial
     * records is independent on received FCIs and thus valid free format data
     * may be divided to different partial records. If field is missing then
     * free format data in this CDR replaces all received free format data in
     * previous CDRs. Append indicator is not needed in the first partial
     * record. In following partial records indicator shall get value true if
     * all FCIs received during that partial record have append indicator. If
     * one or more of the received FCIs for that call leg during the partial
     * record do not have append indicator then this field shall be missing.
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.2.1.27.
     *
     * @public
     * @readonly
     */
    readonly freeFormatDataAppend: OPTIONAL<BOOLEAN>;
    /**
     * @summary `defaultCallHandling_2`.
     * @description
     *
     * 2G and 3G operator-provisionable conditional. Indicates whether or not a
     * CAMEL call encountered default call handling for 2nd service such as
     * dialled service. This field shall be present only if default call
     * handling has been applied.
     *
     * 3GPP TS 32.250 V19.0.0 clause 6.1.3.18.
     *
     * @public
     * @readonly
     */
    readonly defaultCallHandling_2: OPTIONAL<DefaultCallHandling>;
    /**
     * @summary `gsm_SCFAddress_2`.
     * @description
     *
     * 2G and 3G conditional. Identifies the CAMEL server serving the subscriber
     * for 2nd service such as dialled service. Shall be present only if CAMEL
     * is applied for 2nd service.
     *
     * 3GPP TS 32.250 V19.0.0 clause 6.1.3.18.
     *
     * @public
     * @readonly
     */
    readonly gsm_SCFAddress_2: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `serviceKey_2`.
     * @description
     *
     * 2G and 3G conditional. The CAMEL service logic to be applied for 2nd
     * service such as dialled service. Shall be present only if CAMEL is
     * applied for 2nd service.
     *
     * 3GPP TS 32.250 V19.0.0 clause 6.1.3.18.
     *
     * @public
     * @readonly
     */
    readonly serviceKey_2: OPTIONAL<INTEGER>;
    /**
     * @summary `freeFormatData_2`.
     * @description
     *
     * 2G and 3G conditional. This field contains data sent by the gsmSCF in the
     * FCI message(s) for 2nd service such as dialled service. The data can be
     * sent either in one FCI message or several FCI messages with append
     * indicator. Shall be present only if CAMEL is applied for 2nd service.
     *
     * 3GPP TS 32.250 V19.0.0 clause 6.1.3.18.
     *
     * @public
     * @readonly
     */
    readonly freeFormatData_2: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `freeFormatDataAppend_2`.
     * @description
     *
     * 2G and 3G conditional. Indicator if free format data for 2nd service from
     * this CDR is to be appended to free format data in previous partial CDR.
     * Shall be present only if CAMEL is applied for 2nd service.
     *
     * 3GPP TS 32.250 V19.0.0 clause 6.1.3.18.
     *
     * @public
     * @readonly
     */
    readonly freeFormatDataAppend_2: OPTIONAL<BOOLEAN>;
    /**
     * @summary `mscServerIndication`.
     * @description
     *
     * 2G and 3G conditional. Indication if the CAMEL call handling is active in
     * the MSC server.
     *
     * 3GPP TS 32.250 V19.0.0 clauses 6.1.3.18 and 6.1.3.27.
     *
     * This field contains an indicator whether the CAMEL subscription
     * information is active. The parameter is present for the VT-CSI in the
     * VMSC and not present for the T-CSI in the GMSC. This indication should be
     * used for differentiation between the validity of the record content for
     * T-CSI in the GMSC and VT-CSI in the VMSC.
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.2.1.58.
     *
     * @public
     * @readonly
     */
    readonly mscServerIndication: OPTIONAL<BOOLEAN>;
    /**
     * @summary `locationRoutNum`.
     * @description
     *
     * 2G not applicable, 3G operator-provisionable conditional. Location
     * Routing Number for Number Portability feature.
     *
     * 3GPP TS 32.250 V19.0.0 clause 6.1.3.18.
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
     * 3GPP TS 32.250 V19.0.0 clause 6.1.3.18.
     *
     * @public
     * @readonly
     */
    readonly lrnSoInd: OPTIONAL<TermCAMELRecord_lrnSoInd>;
    /**
     * @summary `lrnQuryStatus`.
     * @description
     *
     * 2G not applicable, 3G operator-provisionable conditional. Status of
     * Number Portability query.
     *
     * 3GPP TS 32.250 V19.0.0 clause 6.1.3.18.
     *
     * @public
     * @readonly
     */
    readonly lrnQuryStatus: OPTIONAL<TermCAMELRecord_lrnQuryStatus>;
    /**
     * @summary `jIPPara`.
     * @description
     *
     * 2G not applicable, 3G operator-provisionable conditional. Jurisdiction
     * Information Parameter.
     *
     * 3GPP TS 32.250 V19.0.0 clause 6.1.3.18.
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
     * 3GPP TS 32.250 V19.0.0 clause 6.1.3.18.
     *
     * @public
     * @readonly
     */
    readonly jIPSoInd: OPTIONAL<TermCAMELRecord_jIPSoInd>;
    /**
     * @summary `jIPQuryStatus`.
     * @description
     *
     * 2G not applicable, 3G operator-provisionable conditional. Status of
     * Number Portability query.
     *
     * 3GPP TS 32.250 V19.0.0 clause 6.1.3.18.
     *
     * @public
     * @readonly
     */
    readonly jIPQuryStatus: OPTIONAL<TermCAMELRecord_jIPQuryStatus>;
    /**
     * @summary `partialRecordType`.
     * @description
     *
     * terminating CAMEL: 2G and 3G operator-provisionable conditional.
     * Indicates the event (time limit etc.) that caused the generation of a
     * partial record.
     *
     * CPH terminating CAMEL: 2G not applicable, 3G operator-provisionable
     * conditional. Indicates the event (time limit etc.) that caused the
     * generation of a partial record.
     *
     * 3GPP TS 32.250 V19.0.0 clauses 6.1.3.18 and 6.1.3.27.
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
        recordtype: RecordType,
        servedIMSI: OCTET_STRING,
        servedMSISDN: OPTIONAL<OCTET_STRING>,
        recordingEntity: OCTET_STRING,
        interrogationTime: OCTET_STRING,
        destinationRoutingAddress: OCTET_STRING[],
        gsm_SCFAddress: OCTET_STRING,
        serviceKey: INTEGER,
        networkCallReference: OPTIONAL<OCTET_STRING>,
        mSCAddress: OPTIONAL<OCTET_STRING>,
        defaultCallHandling: OPTIONAL<DefaultCallHandling>,
        recordExtensions: OPTIONAL<ManagementExtension[]>,
        calledNumber: OCTET_STRING,
        callingNumber: OPTIONAL<OCTET_STRING>,
        mscIncomingTKGP: OPTIONAL<TrunkGroup>,
        mscOutgoingTKGP: OPTIONAL<TrunkGroup>,
        seizureTime: OPTIONAL<OCTET_STRING>,
        answerTime: OPTIONAL<OCTET_STRING>,
        releaseTime: OPTIONAL<OCTET_STRING>,
        callDuration: INTEGER,
        dataVolume: OPTIONAL<INTEGER>,
        causeForTerm: CauseForTerm,
        diagnostics: OPTIONAL<HLRIntResult>,
        callReference: OCTET_STRING,
        sequenceNumber?: OPTIONAL<INTEGER>,
        numberOfDPEncountered?: OPTIONAL<INTEGER>,
        levelOfCAMELService?: OPTIONAL<TermCAMELRecord_levelOfCAMELService>,
        freeFormatData?: OPTIONAL<OCTET_STRING>,
        cAMELCallLegInformation?: OPTIONAL<CAMELInformation[]>,
        freeFormatDataAppend?: OPTIONAL<BOOLEAN>,
        defaultCallHandling_2?: OPTIONAL<DefaultCallHandling>,
        gsm_SCFAddress_2?: OPTIONAL<OCTET_STRING>,
        serviceKey_2?: OPTIONAL<INTEGER>,
        freeFormatData_2?: OPTIONAL<OCTET_STRING>,
        freeFormatDataAppend_2?: OPTIONAL<BOOLEAN>,
        mscServerIndication?: OPTIONAL<BOOLEAN>,
        locationRoutNum?: OPTIONAL<OCTET_STRING>,
        lrnSoInd?: OPTIONAL<TermCAMELRecord_lrnSoInd>,
        lrnQuryStatus?: OPTIONAL<TermCAMELRecord_lrnQuryStatus>,
        jIPPara?: OPTIONAL<OCTET_STRING>,
        jIPSoInd?: OPTIONAL<TermCAMELRecord_jIPSoInd>,
        jIPQuryStatus?: OPTIONAL<TermCAMELRecord_jIPQuryStatus>,
        partialRecordType?: OPTIONAL<PartialRecordType>
    ) {
        this.recordtype = recordtype;
        this.servedIMSI = servedIMSI;
        this.servedMSISDN = servedMSISDN;
        this.recordingEntity = recordingEntity;
        this.interrogationTime = interrogationTime;
        this.destinationRoutingAddress = destinationRoutingAddress;
        this.gsm_SCFAddress = gsm_SCFAddress;
        this.serviceKey = serviceKey;
        this.networkCallReference = networkCallReference;
        this.mSCAddress = mSCAddress;
        this.defaultCallHandling = defaultCallHandling;
        this.recordExtensions = recordExtensions;
        this.calledNumber = calledNumber;
        this.callingNumber = callingNumber;
        this.mscIncomingTKGP = mscIncomingTKGP;
        this.mscOutgoingTKGP = mscOutgoingTKGP;
        this.seizureTime = seizureTime;
        this.answerTime = answerTime;
        this.releaseTime = releaseTime;
        this.callDuration = callDuration;
        this.dataVolume = dataVolume;
        this.causeForTerm = causeForTerm;
        this.diagnostics = diagnostics;
        this.callReference = callReference;
        this.sequenceNumber = sequenceNumber;
        this.numberOfDPEncountered = numberOfDPEncountered;
        this.levelOfCAMELService = levelOfCAMELService;
        this.freeFormatData = freeFormatData;
        this.cAMELCallLegInformation = cAMELCallLegInformation;
        this.freeFormatDataAppend = freeFormatDataAppend;
        this.defaultCallHandling_2 = defaultCallHandling_2;
        this.gsm_SCFAddress_2 = gsm_SCFAddress_2;
        this.serviceKey_2 = serviceKey_2;
        this.freeFormatData_2 = freeFormatData_2;
        this.freeFormatDataAppend_2 = freeFormatDataAppend_2;
        this.mscServerIndication = mscServerIndication;
        this.locationRoutNum = locationRoutNum;
        this.lrnSoInd = lrnSoInd;
        this.lrnQuryStatus = lrnQuryStatus;
        this.jIPPara = jIPPara;
        this.jIPSoInd = jIPSoInd;
        this.jIPQuryStatus = jIPQuryStatus;
        this.partialRecordType = partialRecordType;
    
        if ((this.servedIMSI.length < 3 || this.servedIMSI.length > 8)) {
            throw new ASN1SizeError("TermCAMELRecord.servedIMSI violates SIZE constraint");
        }
        if (this.servedMSISDN !== undefined && (this.servedMSISDN.length < 1 || this.servedMSISDN.length > 9)) {
            throw new ASN1SizeError("TermCAMELRecord.servedMSISDN violates SIZE constraint");
        }
        if ((this.recordingEntity.length < 1 || this.recordingEntity.length > 20)) {
            throw new ASN1SizeError("TermCAMELRecord.recordingEntity violates SIZE constraint");
        }
        if ((this.interrogationTime.length !== 9)) {
            throw new ASN1SizeError("TermCAMELRecord.interrogationTime violates SIZE constraint");
        }
        if ((this.destinationRoutingAddress.length !== 1)) {
            throw new ASN1SizeError("TermCAMELRecord.destinationRoutingAddress violates SIZE constraint");
        }
        if (this.destinationRoutingAddress) {
            for (const _item of this.destinationRoutingAddress) {
                if (_item.length < 1 || _item.length > 41) {
                    throw new ASN1SizeError("TermCAMELRecord.destinationRoutingAddress element violates SIZE constraint");
                }
            }
        }
        if ((this.gsm_SCFAddress.length < 1 || this.gsm_SCFAddress.length > 9)) {
            throw new ASN1SizeError("TermCAMELRecord.gsm_SCFAddress violates SIZE constraint");
        }
        if ((this.serviceKey < 0 || this.serviceKey > 2147483647)) {
            throw new ASN1OverflowError("TermCAMELRecord.serviceKey violates INTEGER range");
        }
        if (this.networkCallReference !== undefined && (this.networkCallReference.length < 1 || this.networkCallReference.length > 8)) {
            throw new ASN1SizeError("TermCAMELRecord.networkCallReference violates SIZE constraint");
        }
        if (this.mSCAddress !== undefined && (this.mSCAddress.length < 1 || this.mSCAddress.length > 20)) {
            throw new ASN1SizeError("TermCAMELRecord.mSCAddress violates SIZE constraint");
        }
        if (this.seizureTime !== undefined && (this.seizureTime.length !== 9)) {
            throw new ASN1SizeError("TermCAMELRecord.seizureTime violates SIZE constraint");
        }
        if (this.answerTime !== undefined && (this.answerTime.length !== 9)) {
            throw new ASN1SizeError("TermCAMELRecord.answerTime violates SIZE constraint");
        }
        if (this.releaseTime !== undefined && (this.releaseTime.length !== 9)) {
            throw new ASN1SizeError("TermCAMELRecord.releaseTime violates SIZE constraint");
        }
        if ((this.callReference.length < 1 || this.callReference.length > 8)) {
            throw new ASN1SizeError("TermCAMELRecord.callReference violates SIZE constraint");
        }
        if (this.freeFormatData !== undefined && (this.freeFormatData.length < 1 || this.freeFormatData.length > 160)) {
            throw new ASN1SizeError("TermCAMELRecord.freeFormatData violates SIZE constraint");
        }
        if (this.gsm_SCFAddress_2 !== undefined && (this.gsm_SCFAddress_2.length < 1 || this.gsm_SCFAddress_2.length > 9)) {
            throw new ASN1SizeError("TermCAMELRecord.gsm_SCFAddress_2 violates SIZE constraint");
        }
        if (this.serviceKey_2 !== undefined && (this.serviceKey_2 < 0 || this.serviceKey_2 > 2147483647)) {
            throw new ASN1OverflowError("TermCAMELRecord.serviceKey_2 violates INTEGER range");
        }
        if (this.freeFormatData_2 !== undefined && (this.freeFormatData_2.length < 1 || this.freeFormatData_2.length > 160)) {
            throw new ASN1SizeError("TermCAMELRecord.freeFormatData_2 violates SIZE constraint");
        }
        if (this.locationRoutNum !== undefined && (this.locationRoutNum.length !== 5)) {
            throw new ASN1SizeError("TermCAMELRecord.locationRoutNum violates SIZE constraint");
        }
        if (this.jIPPara !== undefined && (this.jIPPara.length !== 5)) {
            throw new ASN1SizeError("TermCAMELRecord.jIPPara violates SIZE constraint");
        }
    }

    /**
     * @summary Restructures an object into a TermCAMELRecord
     * @description
     *
     * This takes an `object` and converts it to a `TermCAMELRecord`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `TermCAMELRecord`.
     * @returns {TermCAMELRecord}
     */
    public static _from_object (_o: { [_K in keyof (TermCAMELRecord)]: (TermCAMELRecord)[_K] }): TermCAMELRecord {
        return new TermCAMELRecord(_o.recordtype, _o.servedIMSI, _o.servedMSISDN, _o.recordingEntity, _o.interrogationTime, _o.destinationRoutingAddress, _o.gsm_SCFAddress, _o.serviceKey, _o.networkCallReference, _o.mSCAddress, _o.defaultCallHandling, _o.recordExtensions, _o.calledNumber, _o.callingNumber, _o.mscIncomingTKGP, _o.mscOutgoingTKGP, _o.seizureTime, _o.answerTime, _o.releaseTime, _o.callDuration, _o.dataVolume, _o.causeForTerm, _o.diagnostics, _o.callReference, _o.sequenceNumber, _o.numberOfDPEncountered, _o.levelOfCAMELService, _o.freeFormatData, _o.cAMELCallLegInformation, _o.freeFormatDataAppend, _o.defaultCallHandling_2, _o.gsm_SCFAddress_2, _o.serviceKey_2, _o.freeFormatData_2, _o.freeFormatDataAppend_2, _o.mscServerIndication, _o.locationRoutNum, _o.lrnSoInd, _o.lrnQuryStatus, _o.jIPPara, _o.jIPSoInd, _o.jIPQuryStatus, _o.partialRecordType);
    }

        /**
         * @summary The enum used as the type of the component `defaultCallHandling`
         * @public
         * @static
         */

    public static _enum_for_defaultCallHandling: typeof _enum_for_DefaultCallHandling = _enum_for_DefaultCallHandling;        /**
         * @summary The enum used as the type of the component `defaultCallHandling_2`
         * @public
         * @static
         */

    public static _enum_for_defaultCallHandling_2: typeof _enum_for_DefaultCallHandling = _enum_for_DefaultCallHandling;        /**
         * @summary The enum used as the type of the component `partialRecordType`
         * @public
         * @static
         */

    public static _enum_for_partialRecordType: typeof _enum_for_PartialRecordType = _enum_for_PartialRecordType;
}

/**
 * @summary The Leading Root Component Types of TermCAMELRecord
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading
 * root component type list of a SET or SEQUENCE.
 * @constant
 */
export
const _root_component_type_list_1_spec_for_TermCAMELRecord: $.ComponentSpec[] = [
    new $.ComponentSpec("recordtype", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("servedIMSI", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("servedMSISDN", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("recordingEntity", false, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("interrogationTime", false, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("destinationRoutingAddress", false, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("gsm-SCFAddress", false, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("serviceKey", false, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("networkCallReference", true, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("mSCAddress", true, $.hasTag(_TagClass.context, 9)),
    new $.ComponentSpec("defaultCallHandling", true, $.hasTag(_TagClass.context, 10)),
    new $.ComponentSpec("recordExtensions", true, $.hasTag(_TagClass.context, 11)),
    new $.ComponentSpec("calledNumber", false, $.hasTag(_TagClass.context, 12)),
    new $.ComponentSpec("callingNumber", true, $.hasTag(_TagClass.context, 13)),
    new $.ComponentSpec("mscIncomingTKGP", true, $.hasTag(_TagClass.context, 14)),
    new $.ComponentSpec("mscOutgoingTKGP", true, $.hasTag(_TagClass.context, 15)),
    new $.ComponentSpec("seizureTime", true, $.hasTag(_TagClass.context, 16)),
    new $.ComponentSpec("answerTime", true, $.hasTag(_TagClass.context, 17)),
    new $.ComponentSpec("releaseTime", true, $.hasTag(_TagClass.context, 18)),
    new $.ComponentSpec("callDuration", false, $.hasTag(_TagClass.context, 19)),
    new $.ComponentSpec("dataVolume", true, $.hasTag(_TagClass.context, 20)),
    new $.ComponentSpec("causeForTerm", false, $.hasTag(_TagClass.context, 21)),
    new $.ComponentSpec("diagnostics", true, $.hasTag(_TagClass.context, 22)),
    new $.ComponentSpec("callReference", false, $.hasTag(_TagClass.context, 23)),
    new $.ComponentSpec("sequenceNumber", true, $.hasTag(_TagClass.context, 24)),
    new $.ComponentSpec("numberOfDPEncountered", true, $.hasTag(_TagClass.context, 25)),
    new $.ComponentSpec("levelOfCAMELService", true, $.hasTag(_TagClass.context, 26)),
    new $.ComponentSpec("freeFormatData", true, $.hasTag(_TagClass.context, 27)),
    new $.ComponentSpec("cAMELCallLegInformation", true, $.hasTag(_TagClass.context, 28)),
    new $.ComponentSpec("freeFormatDataAppend", true, $.hasTag(_TagClass.context, 29)),
    new $.ComponentSpec("defaultCallHandling-2", true, $.hasTag(_TagClass.context, 30)),
    new $.ComponentSpec("gsm-SCFAddress-2", true, $.hasTag(_TagClass.context, 31)),
    new $.ComponentSpec("serviceKey-2", true, $.hasTag(_TagClass.context, 32)),
    new $.ComponentSpec("freeFormatData-2", true, $.hasTag(_TagClass.context, 33)),
    new $.ComponentSpec("freeFormatDataAppend-2", true, $.hasTag(_TagClass.context, 34)),
    new $.ComponentSpec("mscServerIndication", true, $.hasTag(_TagClass.context, 35)),
    new $.ComponentSpec("locationRoutNum", true, $.hasTag(_TagClass.context, 36)),
    new $.ComponentSpec("lrnSoInd", true, $.hasTag(_TagClass.context, 37)),
    new $.ComponentSpec("lrnQuryStatus", true, $.hasTag(_TagClass.context, 38)),
    new $.ComponentSpec("jIPPara", true, $.hasTag(_TagClass.context, 39)),
    new $.ComponentSpec("jIPSoInd", true, $.hasTag(_TagClass.context, 40)),
    new $.ComponentSpec("jIPQuryStatus", true, $.hasTag(_TagClass.context, 41)),
    new $.ComponentSpec("partialRecordType", true, $.hasTag(_TagClass.context, 42))
];

/**
 * @summary The Trailing Root Component Types of TermCAMELRecord
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing
 * root component type list of a SET or SEQUENCE.
 * @constant
 */
export
const _root_component_type_list_2_spec_for_TermCAMELRecord: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of TermCAMELRecord
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension
 * addition component type list of a SET or SEQUENCE.
 * @constant
 */
export
const _extension_additions_list_spec_for_TermCAMELRecord: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_TermCAMELRecord: $.ASN1Decoder<TermCAMELRecord> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TermCAMELRecord
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_TermCAMELRecord (el: _Element): TermCAMELRecord {
    if (!_cached_decoder_for_TermCAMELRecord) { _cached_decoder_for_TermCAMELRecord = function (el: _Element): TermCAMELRecord {
    /* START_OF_SET_COMPONENT_DECLARATIONS */
    let recordtype!: RecordType;
    let servedIMSI!: OCTET_STRING;
    let servedMSISDN: OPTIONAL<OCTET_STRING>;
    let recordingEntity!: OCTET_STRING;
    let interrogationTime!: OCTET_STRING;
    let destinationRoutingAddress!: OCTET_STRING[];
    let gsm_SCFAddress!: OCTET_STRING;
    let serviceKey!: INTEGER;
    let networkCallReference: OPTIONAL<OCTET_STRING>;
    let mSCAddress: OPTIONAL<OCTET_STRING>;
    let defaultCallHandling: OPTIONAL<DefaultCallHandling>;
    let recordExtensions: OPTIONAL<ManagementExtension[]>;
    let calledNumber!: OCTET_STRING;
    let callingNumber: OPTIONAL<OCTET_STRING>;
    let mscIncomingTKGP: OPTIONAL<TrunkGroup>;
    let mscOutgoingTKGP: OPTIONAL<TrunkGroup>;
    let seizureTime: OPTIONAL<OCTET_STRING>;
    let answerTime: OPTIONAL<OCTET_STRING>;
    let releaseTime: OPTIONAL<OCTET_STRING>;
    let callDuration!: INTEGER;
    let dataVolume: OPTIONAL<INTEGER>;
    let causeForTerm!: CauseForTerm;
    let diagnostics: OPTIONAL<HLRIntResult>;
    let callReference!: OCTET_STRING;
    let sequenceNumber: OPTIONAL<INTEGER>;
    let numberOfDPEncountered: OPTIONAL<INTEGER>;
    let levelOfCAMELService: OPTIONAL<TermCAMELRecord_levelOfCAMELService>;
    let freeFormatData: OPTIONAL<OCTET_STRING>;
    let cAMELCallLegInformation: OPTIONAL<CAMELInformation[]>;
    let freeFormatDataAppend: OPTIONAL<BOOLEAN>;
    let defaultCallHandling_2: OPTIONAL<DefaultCallHandling>;
    let gsm_SCFAddress_2: OPTIONAL<OCTET_STRING>;
    let serviceKey_2: OPTIONAL<INTEGER>;
    let freeFormatData_2: OPTIONAL<OCTET_STRING>;
    let freeFormatDataAppend_2: OPTIONAL<BOOLEAN>;
    let mscServerIndication: OPTIONAL<BOOLEAN>;
    let locationRoutNum: OPTIONAL<OCTET_STRING>;
    let lrnSoInd: OPTIONAL<TermCAMELRecord_lrnSoInd>;
    let lrnQuryStatus: OPTIONAL<TermCAMELRecord_lrnQuryStatus>;
    let jIPPara: OPTIONAL<OCTET_STRING>;
    let jIPSoInd: OPTIONAL<TermCAMELRecord_jIPSoInd>;
    let jIPQuryStatus: OPTIONAL<TermCAMELRecord_jIPQuryStatus>;
    let partialRecordType: OPTIONAL<PartialRecordType>;
    /* END_OF_SET_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: $.DecodingMap = {
        "recordtype": (_el: _Element): void => { recordtype = $._decode_implicit<RecordType>(() => _decode_RecordType)(_el); },
        "servedIMSI": (_el: _Element): void => { servedIMSI = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "servedMSISDN": (_el: _Element): void => { servedMSISDN = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "recordingEntity": (_el: _Element): void => { recordingEntity = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "interrogationTime": (_el: _Element): void => { interrogationTime = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "destinationRoutingAddress": (_el: _Element): void => { destinationRoutingAddress = $._decode_implicit<OCTET_STRING[]>(() => $._decodeSequenceOf<OCTET_STRING>(() => $._decodeOctetString))(_el); },
        "gsm-SCFAddress": (_el: _Element): void => { gsm_SCFAddress = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "serviceKey": (_el: _Element): void => { serviceKey = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "networkCallReference": (_el: _Element): void => { networkCallReference = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "mSCAddress": (_el: _Element): void => { mSCAddress = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "defaultCallHandling": (_el: _Element): void => { defaultCallHandling = $._decode_implicit<DefaultCallHandling>(() => _decode_DefaultCallHandling)(_el); },
        "recordExtensions": (_el: _Element): void => { recordExtensions = $._decode_implicit<ManagementExtension[]>(() => $._decodeSetOf<ManagementExtension>(() => _decode_ManagementExtension))(_el); },
        "calledNumber": (_el: _Element): void => { calledNumber = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "callingNumber": (_el: _Element): void => { callingNumber = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "mscIncomingTKGP": (_el: _Element): void => { mscIncomingTKGP = $._decode_explicit<TrunkGroup>(() => _decode_TrunkGroup)(_el); },
        "mscOutgoingTKGP": (_el: _Element): void => { mscOutgoingTKGP = $._decode_explicit<TrunkGroup>(() => _decode_TrunkGroup)(_el); },
        "seizureTime": (_el: _Element): void => { seizureTime = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "answerTime": (_el: _Element): void => { answerTime = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "releaseTime": (_el: _Element): void => { releaseTime = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "callDuration": (_el: _Element): void => { callDuration = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "dataVolume": (_el: _Element): void => { dataVolume = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "causeForTerm": (_el: _Element): void => { causeForTerm = $._decode_implicit<CauseForTerm>(() => _decode_CauseForTerm)(_el); },
        "diagnostics": (_el: _Element): void => { diagnostics = $._decode_explicit<HLRIntResult>(() => _decode_HLRIntResult)(_el); },
        "callReference": (_el: _Element): void => { callReference = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "sequenceNumber": (_el: _Element): void => { sequenceNumber = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "numberOfDPEncountered": (_el: _Element): void => { numberOfDPEncountered = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "levelOfCAMELService": (_el: _Element): void => { levelOfCAMELService = $._decode_implicit<TermCAMELRecord_levelOfCAMELService>(() => _decode_TermCAMELRecord_levelOfCAMELService)(_el); },
        "freeFormatData": (_el: _Element): void => { freeFormatData = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "cAMELCallLegInformation": (_el: _Element): void => { cAMELCallLegInformation = $._decode_implicit<CAMELInformation[]>(() => $._decodeSequenceOf<CAMELInformation>(() => _decode_CAMELInformation))(_el); },
        "freeFormatDataAppend": (_el: _Element): void => { freeFormatDataAppend = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "defaultCallHandling-2": (_el: _Element): void => { defaultCallHandling_2 = $._decode_implicit<DefaultCallHandling>(() => _decode_DefaultCallHandling)(_el); },
        "gsm-SCFAddress-2": (_el: _Element): void => { gsm_SCFAddress_2 = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "serviceKey-2": (_el: _Element): void => { serviceKey_2 = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "freeFormatData-2": (_el: _Element): void => { freeFormatData_2 = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "freeFormatDataAppend-2": (_el: _Element): void => { freeFormatDataAppend_2 = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "mscServerIndication": (_el: _Element): void => { mscServerIndication = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "locationRoutNum": (_el: _Element): void => { locationRoutNum = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "lrnSoInd": (_el: _Element): void => { lrnSoInd = $._decode_implicit<TermCAMELRecord_lrnSoInd>(() => _decode_TermCAMELRecord_lrnSoInd)(_el); },
        "lrnQuryStatus": (_el: _Element): void => { lrnQuryStatus = $._decode_implicit<TermCAMELRecord_lrnQuryStatus>(() => _decode_TermCAMELRecord_lrnQuryStatus)(_el); },
        "jIPPara": (_el: _Element): void => { jIPPara = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "jIPSoInd": (_el: _Element): void => { jIPSoInd = $._decode_implicit<TermCAMELRecord_jIPSoInd>(() => _decode_TermCAMELRecord_jIPSoInd)(_el); },
        "jIPQuryStatus": (_el: _Element): void => { jIPQuryStatus = $._decode_implicit<TermCAMELRecord_jIPQuryStatus>(() => _decode_TermCAMELRecord_jIPQuryStatus)(_el); },
        "partialRecordType": (_el: _Element): void => { partialRecordType = $._decode_implicit<PartialRecordType>(() => _decode_PartialRecordType)(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    $._parse_set(el, callbacks,
        _root_component_type_list_1_spec_for_TermCAMELRecord,
        _extension_additions_list_spec_for_TermCAMELRecord,
        _root_component_type_list_2_spec_for_TermCAMELRecord,
        undefined,
    );
    return new TermCAMELRecord( /* SET_CONSTRUCTOR_CALL */
        recordtype,
        servedIMSI,
        servedMSISDN,
        recordingEntity,
        interrogationTime,
        destinationRoutingAddress,
        gsm_SCFAddress,
        serviceKey,
        networkCallReference,
        mSCAddress,
        defaultCallHandling,
        recordExtensions,
        calledNumber,
        callingNumber,
        mscIncomingTKGP,
        mscOutgoingTKGP,
        seizureTime,
        answerTime,
        releaseTime,
        callDuration,
        dataVolume,
        causeForTerm,
        diagnostics,
        callReference,
        sequenceNumber,
        numberOfDPEncountered,
        levelOfCAMELService,
        freeFormatData,
        cAMELCallLegInformation,
        freeFormatDataAppend,
        defaultCallHandling_2,
        gsm_SCFAddress_2,
        serviceKey_2,
        freeFormatData_2,
        freeFormatDataAppend_2,
        mscServerIndication,
        locationRoutNum,
        lrnSoInd,
        lrnQuryStatus,
        jIPPara,
        jIPSoInd,
        jIPQuryStatus,
        partialRecordType
    );
}; }
    return _cached_decoder_for_TermCAMELRecord(el);
}

let _cached_encoder_for_TermCAMELRecord: $.ASN1Encoder<TermCAMELRecord> | null = null;

/**
 * @summary Encodes a(n) TermCAMELRecord into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TermCAMELRecord, encoded as an ASN.1 Element.
 */
export
function _encode_TermCAMELRecord (value: TermCAMELRecord, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_TermCAMELRecord) { _cached_encoder_for_TermCAMELRecord = function (value: TermCAMELRecord, _elGetter: $.ASN1Encoder<TermCAMELRecord>): _Element {
    const _components: _Element[] = [];
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_RecordType, $.BER)(value.recordtype, $.BER));
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeOctetString, $.BER)(value.servedIMSI, $.BER));
    if (value.servedMSISDN !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => $._encodeOctetString, $.BER)(value.servedMSISDN, $.BER));
    }
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => $._encodeOctetString, $.BER)(value.recordingEntity, $.BER));
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 4, () => $._encodeOctetString, $.BER)(value.interrogationTime, $.BER));
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 5, () => $._encodeSequenceOf<OCTET_STRING>(() => $._encodeOctetString, $.BER), $.BER)(value.destinationRoutingAddress, $.BER));
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 6, () => $._encodeOctetString, $.BER)(value.gsm_SCFAddress, $.BER));
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 7, () => $._encodeInteger, $.BER)(value.serviceKey, $.BER));
    if (value.networkCallReference !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 8, () => $._encodeOctetString, $.BER)(value.networkCallReference, $.BER));
    }
    if (value.mSCAddress !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 9, () => $._encodeOctetString, $.BER)(value.mSCAddress, $.BER));
    }
    if (value.defaultCallHandling !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 10, () => _encode_DefaultCallHandling, $.BER)(value.defaultCallHandling, $.BER));
    }
    if (value.recordExtensions !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 11, () => $._encodeSetOf<ManagementExtension>(() => _encode_ManagementExtension, $.BER), $.BER)(value.recordExtensions, $.BER));
    }
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 12, () => $._encodeOctetString, $.BER)(value.calledNumber, $.BER));
    if (value.callingNumber !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 13, () => $._encodeOctetString, $.BER)(value.callingNumber, $.BER));
    }
    if (value.mscIncomingTKGP !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 14, () => _encode_TrunkGroup, $.BER)(value.mscIncomingTKGP, $.BER));
    }
    if (value.mscOutgoingTKGP !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 15, () => _encode_TrunkGroup, $.BER)(value.mscOutgoingTKGP, $.BER));
    }
    if (value.seizureTime !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 16, () => $._encodeOctetString, $.BER)(value.seizureTime, $.BER));
    }
    if (value.answerTime !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 17, () => $._encodeOctetString, $.BER)(value.answerTime, $.BER));
    }
    if (value.releaseTime !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 18, () => $._encodeOctetString, $.BER)(value.releaseTime, $.BER));
    }
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 19, () => $._encodeInteger, $.BER)(value.callDuration, $.BER));
    if (value.dataVolume !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 20, () => $._encodeInteger, $.BER)(value.dataVolume, $.BER));
    }
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 21, () => _encode_CauseForTerm, $.BER)(value.causeForTerm, $.BER));
    if (value.diagnostics !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 22, () => _encode_HLRIntResult, $.BER)(value.diagnostics, $.BER));
    }
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 23, () => $._encodeOctetString, $.BER)(value.callReference, $.BER));
    if (value.sequenceNumber !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 24, () => $._encodeInteger, $.BER)(value.sequenceNumber, $.BER));
    }
    if (value.numberOfDPEncountered !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 25, () => $._encodeInteger, $.BER)(value.numberOfDPEncountered, $.BER));
    }
    if (value.levelOfCAMELService !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 26, () => _encode_TermCAMELRecord_levelOfCAMELService, $.BER)(value.levelOfCAMELService, $.BER));
    }
    if (value.freeFormatData !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 27, () => $._encodeOctetString, $.BER)(value.freeFormatData, $.BER));
    }
    if (value.cAMELCallLegInformation !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 28, () => $._encodeSequenceOf<CAMELInformation>(() => _encode_CAMELInformation, $.BER), $.BER)(value.cAMELCallLegInformation, $.BER));
    }
    if (value.freeFormatDataAppend !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 29, () => $._encodeBoolean, $.BER)(value.freeFormatDataAppend, $.BER));
    }
    if (value.defaultCallHandling_2 !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 30, () => _encode_DefaultCallHandling, $.BER)(value.defaultCallHandling_2, $.BER));
    }
    if (value.gsm_SCFAddress_2 !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 31, () => $._encodeOctetString, $.BER)(value.gsm_SCFAddress_2, $.BER));
    }
    if (value.serviceKey_2 !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 32, () => $._encodeInteger, $.BER)(value.serviceKey_2, $.BER));
    }
    if (value.freeFormatData_2 !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 33, () => $._encodeOctetString, $.BER)(value.freeFormatData_2, $.BER));
    }
    if (value.freeFormatDataAppend_2 !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 34, () => $._encodeBoolean, $.BER)(value.freeFormatDataAppend_2, $.BER));
    }
    if (value.mscServerIndication !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 35, () => $._encodeBoolean, $.BER)(value.mscServerIndication, $.BER));
    }
    if (value.locationRoutNum !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 36, () => $._encodeOctetString, $.BER)(value.locationRoutNum, $.BER));
    }
    if (value.lrnSoInd !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 37, () => _encode_TermCAMELRecord_lrnSoInd, $.BER)(value.lrnSoInd, $.BER));
    }
    if (value.lrnQuryStatus !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 38, () => _encode_TermCAMELRecord_lrnQuryStatus, $.BER)(value.lrnQuryStatus, $.BER));
    }
    if (value.jIPPara !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 39, () => $._encodeOctetString, $.BER)(value.jIPPara, $.BER));
    }
    if (value.jIPSoInd !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 40, () => _encode_TermCAMELRecord_jIPSoInd, $.BER)(value.jIPSoInd, $.BER));
    }
    if (value.jIPQuryStatus !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 41, () => _encode_TermCAMELRecord_jIPQuryStatus, $.BER)(value.jIPQuryStatus, $.BER));
    }
    if (value.partialRecordType !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 42, () => _encode_PartialRecordType, $.BER)(value.partialRecordType, $.BER));
    }
    return $._encodeSet(_components, $.BER);
}; }
    return _cached_encoder_for_TermCAMELRecord(value, elGetter);
}


/* eslint-enable */
