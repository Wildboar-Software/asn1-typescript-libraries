/* eslint-disable */
import {
    type BOOLEAN,
    type INTEGER,
    type OCTET_STRING,
    type OPTIONAL,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { RecordType, _decode_RecordType, _encode_RecordType } from "../CSChargingDataTypes/RecordType.ta.mjs";
import { TrunkGroup, _decode_TrunkGroup, _encode_TrunkGroup } from "../CSChargingDataTypes/TrunkGroup.ta.mjs";
import { CauseForTerm, _decode_CauseForTerm, _encode_CauseForTerm } from "../CSChargingDataTypes/CauseForTerm.ta.mjs";
import { HLRIntResult, _decode_HLRIntResult, _encode_HLRIntResult } from "../CSChargingDataTypes/HLRIntResult.ta.mjs";
import { ManagementExtension, _decode_ManagementExtension, _encode_ManagementExtension } from "../CSChargingDataTypes/ManagementExtension.ta.mjs";
import { OutGatewayRecord_lrnSoInd, _decode_OutGatewayRecord_lrnSoInd, _encode_OutGatewayRecord_lrnSoInd } from "../CSChargingDataTypes/OutGatewayRecord-lrnSoInd.ta.mjs";
import { OutGatewayRecord_lrnQuryStatus, _decode_OutGatewayRecord_lrnQuryStatus, _encode_OutGatewayRecord_lrnQuryStatus } from "../CSChargingDataTypes/OutGatewayRecord-lrnQuryStatus.ta.mjs";
import { OutGatewayRecord_jIPSoInd, _decode_OutGatewayRecord_jIPSoInd, _encode_OutGatewayRecord_jIPSoInd } from "../CSChargingDataTypes/OutGatewayRecord-jIPSoInd.ta.mjs";
import { OutGatewayRecord_jIPQuryStatus, _decode_OutGatewayRecord_jIPQuryStatus, _encode_OutGatewayRecord_jIPQuryStatus } from "../CSChargingDataTypes/OutGatewayRecord-jIPQuryStatus.ta.mjs";
import { ReasonForServiceChange, _decode_ReasonForServiceChange, _encode_ReasonForServiceChange, _enum_for_ReasonForServiceChange } from "../CSChargingDataTypes/ReasonForServiceChange.ta.mjs";


/**
 * @summary OutGatewayRecord
 * @description
 *
 * Outgoing gateway CDR. When generation is enabled, the GMSC creates one for
 * each outgoing call attempt towards another network. It is used to settle
 * accounts with that network. Production does not depend on MOC generation:
 * a co-located GMSC and originating MSC still produce the gateway record.
 *
 * Call duration is the accountable duration from answer to release of the
 * outgoing trunk, or the outgoing-trunk holding time for an unsuccessful
 * attempt.
 *
 * Table 6.1.3.7 also lists partial record type. This SET does not contain
 * that component.
 *
 * Categories are M, C, OM, and OC as in TS 32.240 clause 5.4.
 *
 * 3GPP TS 32.250 V19.0.0 clauses 5.1.2.2.4 and 6.1.3.7.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * OutGatewayRecord ::= SET {
 *    recordType               [0] IMPLICIT RecordType,
 *    callingNumber            [1] IMPLICIT OCTET STRING OPTIONAL,
 *    calledNumber             [2] IMPLICIT OCTET STRING,
 *    recordingEntity          [3] IMPLICIT OCTET STRING ( SIZE( 1 .. 20 ) ),
 *    mscIncomingTKGP          [4] TrunkGroup OPTIONAL,
 *    mscOutgoingTKGP          [5] TrunkGroup OPTIONAL,
 *    seizureTime              [6] IMPLICIT OCTET STRING ( SIZE( 9 ) ) OPTIONAL,
 *    answerTime               [7] IMPLICIT OCTET STRING ( SIZE( 9 ) ) OPTIONAL,
 *    releaseTime              [8] IMPLICIT OCTET STRING ( SIZE( 9 ) ) OPTIONAL,
 *    callDuration             [9] IMPLICIT INTEGER,
 *    dataVolume               [10] IMPLICIT INTEGER OPTIONAL,
 *    causeForTerm             [11] IMPLICIT CauseForTerm,
 *    diagnostics              [12] HLRIntResult OPTIONAL,
 *    callReference            [13] IMPLICIT OCTET STRING ( SIZE( 1 .. 8 ) ),
 *    sequenceNumber           [14] IMPLICIT INTEGER OPTIONAL,
 *    recordExtensions         [15] IMPLICIT SET  OF
 *       ManagementExtension OPTIONAL,
 *    locationRoutNum          [16] IMPLICIT OCTET STRING ( SIZE( 5 ) ) OPTIONAL,
 *    lrnSoInd                 [17] IMPLICIT INTEGER {
 *       lRN-NP-Database        ( 1 ),
 *       switchingSystemData    ( 2 ),
 *       incomingsignaling      ( 3 ),
 *       unknown                ( 9 )} OPTIONAL,
 *    lrnQuryStatus            [18] IMPLICIT INTEGER {
 *       successfulQuery         ( 1 ),
 *       noQueryResponseMsg      ( 2 ),
 *       queryProtocolErr        ( 4 ),
 *       queryResponseDataErr    ( 5 ),
 *       queryRejected           ( 6 ),
 *       queryNotPerformed       ( 9 ),
 *       queryUnsuccessful       ( 99 )} OPTIONAL,
 *    jIPPara                  [19] IMPLICIT OCTET STRING ( SIZE( 5 ) ) OPTIONAL,
 *    jIPSoInd                 [20] IMPLICIT INTEGER {
 *       lRN-NP-Database        ( 1 ),
 *       switchingSystemData    ( 2 ),
 *       incomingsignaling      ( 3 ),
 *       unknown                ( 9 )} OPTIONAL,
 *    jIPQuryStatus            [21] IMPLICIT INTEGER {
 *       successfulQuery         ( 1 ),
 *       noQueryResponseMsg      ( 2 ),
 *       queryProtocolErr        ( 4 ),
 *       queryResponseDataErr    ( 5 ),
 *       queryRejected           ( 6 ),
 *       queryNotPerformed       ( 9 ),
 *       queryUnsuccessful       ( 99 )} OPTIONAL,
 *    reasonForServiceChange   [22] IMPLICIT ReasonForServiceChange OPTIONAL,
 *    serviceChangeInitiator   [23] IMPLICIT BOOLEAN OPTIONAL}
 * ```
 * @class
 */
export
class OutGatewayRecord {
    /**
     * @summary `recordType`.
     * @description
     *
     * 2G and 3G mandatory. Outgoing gateway record.
     *
     * 3GPP TS 32.250 V19.0.0 clause 6.1.3.7.
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
     * @summary `callingNumber`.
     * @description
     *
     * 2G and 3G conditional. The number of the calling party if available at
     * this node.
     *
     * 3GPP TS 32.250 V19.0.0 clause 6.1.3.7.
     *
     * @public
     * @readonly
     */
    readonly callingNumber: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `calledNumber`.
     * @description
     *
     * 2G and 3G mandatory. The address of the called party as seen by the GMSC.
     * This is the number employed by the GMSC for routing.
     *
     * 3GPP TS 32.250 V19.0.0 clause 6.1.3.7.
     *
     * @public
     * @readonly
     */
    readonly calledNumber: OCTET_STRING;
    /**
     * @summary `recordingEntity`.
     * @description
     *
     * 2G and 3G mandatory. The E.164 number of the GMSC.
     *
     * 3GPP TS 32.250 V19.0.0 clause 6.1.3.7.
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
     * 2G operator-provisionable mandatory, 3G operator-provisionable
     * conditional. The incoming GMSC trunk group on which the call originated.
     * If available in 3G, this parameter shall be supplied.
     *
     * 3GPP TS 32.250 V19.0.0 clause 6.1.3.7.
     *
     * @public
     * @readonly
     */
    readonly mscIncomingTKGP: OPTIONAL<TrunkGroup>;
    /**
     * @summary `mscOutgoingTKGP`.
     * @description
     *
     * 2G and 3G mandatory. The trunk group on which the call left the GMSC.
     *
     * 3GPP TS 32.250 V19.0.0 clause 6.1.3.7.
     *
     * @public
     * @readonly
     */
    readonly mscOutgoingTKGP: OPTIONAL<TrunkGroup>;
    /**
     * @summary `seizureTime`.
     * @description
     *
     * 2G and 3G mandatory. Time of outgoing trunk seizure.
     *
     * 3GPP TS 32.250 V19.0.0 clause 6.1.3.7.
     *
     * @public
     * @readonly
     */
    readonly seizureTime: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `answerTime`.
     * @description
     *
     * 2G and 3G conditional. Time of answer (successful calls only).
     *
     * 3GPP TS 32.250 V19.0.0 clause 6.1.3.7.
     *
     * @public
     * @readonly
     */
    readonly answerTime: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `releaseTime`.
     * @description
     *
     * 2G and 3G operator-provisionable mandatory. Time of outgoing trunk
     * release.
     *
     * 3GPP TS 32.250 V19.0.0 clause 6.1.3.7.
     *
     * @public
     * @readonly
     */
    readonly releaseTime: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `callDuration`.
     * @description
     *
     * 2G and 3G mandatory. The accountable duration (answer -> release of
     * outgoing trunk) of the connection if successful, the call holding time of
     * the outgoing trunk for call attempts.
     *
     * 3GPP TS 32.250 V19.0.0 clause 6.1.3.7.
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
     * 2G conditional, 3G not applicable. If applicable and known at the GMSC.
     *
     * 3GPP TS 32.250 V19.0.0 clause 6.1.3.7.
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
     * 3GPP TS 32.250 V19.0.0 clause 6.1.3.7.
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
     * 3GPP TS 32.250 V19.0.0 clause 6.1.3.7.
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
     * transactions.
     *
     * 3GPP TS 32.250 V19.0.0 clause 6.1.3.7.
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
     * 2G and 3G conditional. Partial record sequence number, if applicable.
     *
     * 3GPP TS 32.250 V19.0.0 clause 6.1.3.7.
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
     * 3GPP TS 32.250 V19.0.0 clause 6.1.3.7.
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
     * @summary `locationRoutNum`.
     * @description
     *
     * 2G not applicable, 3G operator-provisionable conditional. Location
     * Routing Number for Number Portability feature.
     *
     * 3GPP TS 32.250 V19.0.0 clause 6.1.3.7.
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
     * 3GPP TS 32.250 V19.0.0 clause 6.1.3.7.
     *
     * @public
     * @readonly
     */
    readonly lrnSoInd: OPTIONAL<OutGatewayRecord_lrnSoInd>;
    /**
     * @summary `lrnQuryStatus`.
     * @description
     *
     * 2G not applicable, 3G operator-provisionable conditional. Status of
     * Number Portability query.
     *
     * 3GPP TS 32.250 V19.0.0 clause 6.1.3.7.
     *
     * @public
     * @readonly
     */
    readonly lrnQuryStatus: OPTIONAL<OutGatewayRecord_lrnQuryStatus>;
    /**
     * @summary `jIPPara`.
     * @description
     *
     * 2G not applicable, 3G operator-provisionable conditional. Jurisdiction
     * Information Parameter.
     *
     * 3GPP TS 32.250 V19.0.0 clause 6.1.3.7.
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
     * 3GPP TS 32.250 V19.0.0 clause 6.1.3.7.
     *
     * @public
     * @readonly
     */
    readonly jIPSoInd: OPTIONAL<OutGatewayRecord_jIPSoInd>;
    /**
     * @summary `jIPQuryStatus`.
     * @description
     *
     * 2G not applicable, 3G operator-provisionable conditional. Status of
     * Number Portability query.
     *
     * 3GPP TS 32.250 V19.0.0 clause 6.1.3.7.
     *
     * @public
     * @readonly
     */
    readonly jIPQuryStatus: OPTIONAL<OutGatewayRecord_jIPQuryStatus>;
    /**
     * @summary `reasonForServiceChange`.
     * @description
     *
     * 2G not applicable, 3G operator-provisionable conditional. Indicates the
     * type of service change and fallback.
     *
     * 3GPP TS 32.250 V19.0.0 clause 6.1.3.7.
     *
     * This field contains the type of service change requested by the
     * subscriber or performed by the network. Possible values include:
     * subscriber initiated; network initiated; call setup fallback; call setup
     * change order. For further details see TS 23.172 [207].
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.2.1.70.
     *
     * @public
     * @readonly
     */
    readonly reasonForServiceChange: OPTIONAL<ReasonForServiceChange>;
    /**
     * @summary `serviceChangeInitiator`.
     * @description
     *
     * 2G not applicable, 3G operator-provisionable conditional. Indicates the
     * service change initiator.
     *
     * 3GPP TS 32.250 V19.0.0 clause 6.1.3.7.
     *
     * This field indicates that the owner of this CDR is the initiator of the
     * service change.
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.2.1.82.
     *
     * @public
     * @readonly
     */
    readonly serviceChangeInitiator: OPTIONAL<BOOLEAN>;

    constructor (
        recordType: RecordType,
        callingNumber: OPTIONAL<OCTET_STRING>,
        calledNumber: OCTET_STRING,
        recordingEntity: OCTET_STRING,
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
        recordExtensions?: OPTIONAL<ManagementExtension[]>,
        locationRoutNum?: OPTIONAL<OCTET_STRING>,
        lrnSoInd?: OPTIONAL<OutGatewayRecord_lrnSoInd>,
        lrnQuryStatus?: OPTIONAL<OutGatewayRecord_lrnQuryStatus>,
        jIPPara?: OPTIONAL<OCTET_STRING>,
        jIPSoInd?: OPTIONAL<OutGatewayRecord_jIPSoInd>,
        jIPQuryStatus?: OPTIONAL<OutGatewayRecord_jIPQuryStatus>,
        reasonForServiceChange?: OPTIONAL<ReasonForServiceChange>,
        serviceChangeInitiator?: OPTIONAL<BOOLEAN>
    ) {
        this.recordType = recordType;
        this.callingNumber = callingNumber;
        this.calledNumber = calledNumber;
        this.recordingEntity = recordingEntity;
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
        this.recordExtensions = recordExtensions;
        this.locationRoutNum = locationRoutNum;
        this.lrnSoInd = lrnSoInd;
        this.lrnQuryStatus = lrnQuryStatus;
        this.jIPPara = jIPPara;
        this.jIPSoInd = jIPSoInd;
        this.jIPQuryStatus = jIPQuryStatus;
        this.reasonForServiceChange = reasonForServiceChange;
        this.serviceChangeInitiator = serviceChangeInitiator;
    
        if ((this.recordingEntity.length < 1 || this.recordingEntity.length > 20)) {
            throw new ASN1SizeError("OutGatewayRecord.recordingEntity violates SIZE constraint");
        }
        if (this.seizureTime !== undefined && (this.seizureTime.length !== 9)) {
            throw new ASN1SizeError("OutGatewayRecord.seizureTime violates SIZE constraint");
        }
        if (this.answerTime !== undefined && (this.answerTime.length !== 9)) {
            throw new ASN1SizeError("OutGatewayRecord.answerTime violates SIZE constraint");
        }
        if (this.releaseTime !== undefined && (this.releaseTime.length !== 9)) {
            throw new ASN1SizeError("OutGatewayRecord.releaseTime violates SIZE constraint");
        }
        if ((this.callReference.length < 1 || this.callReference.length > 8)) {
            throw new ASN1SizeError("OutGatewayRecord.callReference violates SIZE constraint");
        }
        if (this.locationRoutNum !== undefined && (this.locationRoutNum.length !== 5)) {
            throw new ASN1SizeError("OutGatewayRecord.locationRoutNum violates SIZE constraint");
        }
        if (this.jIPPara !== undefined && (this.jIPPara.length !== 5)) {
            throw new ASN1SizeError("OutGatewayRecord.jIPPara violates SIZE constraint");
        }
    }

    /**
     * @summary Restructures an object into a OutGatewayRecord
     * @description
     *
     * This takes an `object` and converts it to a `OutGatewayRecord`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `OutGatewayRecord`.
     * @returns {OutGatewayRecord}
     */
    public static _from_object (_o: { [_K in keyof (OutGatewayRecord)]: (OutGatewayRecord)[_K] }): OutGatewayRecord {
        return new OutGatewayRecord(_o.recordType, _o.callingNumber, _o.calledNumber, _o.recordingEntity, _o.mscIncomingTKGP, _o.mscOutgoingTKGP, _o.seizureTime, _o.answerTime, _o.releaseTime, _o.callDuration, _o.dataVolume, _o.causeForTerm, _o.diagnostics, _o.callReference, _o.sequenceNumber, _o.recordExtensions, _o.locationRoutNum, _o.lrnSoInd, _o.lrnQuryStatus, _o.jIPPara, _o.jIPSoInd, _o.jIPQuryStatus, _o.reasonForServiceChange, _o.serviceChangeInitiator);
    }

        /**
         * @summary The enum used as the type of the component `reasonForServiceChange`
         * @public
         * @static
         */

    public static _enum_for_reasonForServiceChange = _enum_for_ReasonForServiceChange;
}

/**
 * @summary The Leading Root Component Types of OutGatewayRecord
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading
 * root component type list of a SET or SEQUENCE.
 * @constant
 */
export
const _root_component_type_list_1_spec_for_OutGatewayRecord: $.ComponentSpec[] = [
    new $.ComponentSpec("recordType", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("callingNumber", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("calledNumber", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("recordingEntity", false, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("mscIncomingTKGP", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("mscOutgoingTKGP", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("seizureTime", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("answerTime", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("releaseTime", true, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("callDuration", false, $.hasTag(_TagClass.context, 9)),
    new $.ComponentSpec("dataVolume", true, $.hasTag(_TagClass.context, 10)),
    new $.ComponentSpec("causeForTerm", false, $.hasTag(_TagClass.context, 11)),
    new $.ComponentSpec("diagnostics", true, $.hasTag(_TagClass.context, 12)),
    new $.ComponentSpec("callReference", false, $.hasTag(_TagClass.context, 13)),
    new $.ComponentSpec("sequenceNumber", true, $.hasTag(_TagClass.context, 14)),
    new $.ComponentSpec("recordExtensions", true, $.hasTag(_TagClass.context, 15)),
    new $.ComponentSpec("locationRoutNum", true, $.hasTag(_TagClass.context, 16)),
    new $.ComponentSpec("lrnSoInd", true, $.hasTag(_TagClass.context, 17)),
    new $.ComponentSpec("lrnQuryStatus", true, $.hasTag(_TagClass.context, 18)),
    new $.ComponentSpec("jIPPara", true, $.hasTag(_TagClass.context, 19)),
    new $.ComponentSpec("jIPSoInd", true, $.hasTag(_TagClass.context, 20)),
    new $.ComponentSpec("jIPQuryStatus", true, $.hasTag(_TagClass.context, 21)),
    new $.ComponentSpec("reasonForServiceChange", true, $.hasTag(_TagClass.context, 22)),
    new $.ComponentSpec("serviceChangeInitiator", true, $.hasTag(_TagClass.context, 23))
];

/**
 * @summary The Trailing Root Component Types of OutGatewayRecord
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing
 * root component type list of a SET or SEQUENCE.
 * @constant
 */
export
const _root_component_type_list_2_spec_for_OutGatewayRecord: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of OutGatewayRecord
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension
 * addition component type list of a SET or SEQUENCE.
 * @constant
 */
export
const _extension_additions_list_spec_for_OutGatewayRecord: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_OutGatewayRecord: $.ASN1Decoder<OutGatewayRecord> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) OutGatewayRecord
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_OutGatewayRecord (el: _Element): OutGatewayRecord {
    if (!_cached_decoder_for_OutGatewayRecord) { _cached_decoder_for_OutGatewayRecord = function (el: _Element): OutGatewayRecord {
    /* START_OF_SET_COMPONENT_DECLARATIONS */
    let recordType!: RecordType;
    let callingNumber: OPTIONAL<OCTET_STRING>;
    let calledNumber!: OCTET_STRING;
    let recordingEntity!: OCTET_STRING;
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
    let recordExtensions: OPTIONAL<ManagementExtension[]>;
    let locationRoutNum: OPTIONAL<OCTET_STRING>;
    let lrnSoInd: OPTIONAL<OutGatewayRecord_lrnSoInd>;
    let lrnQuryStatus: OPTIONAL<OutGatewayRecord_lrnQuryStatus>;
    let jIPPara: OPTIONAL<OCTET_STRING>;
    let jIPSoInd: OPTIONAL<OutGatewayRecord_jIPSoInd>;
    let jIPQuryStatus: OPTIONAL<OutGatewayRecord_jIPQuryStatus>;
    let reasonForServiceChange: OPTIONAL<ReasonForServiceChange>;
    let serviceChangeInitiator: OPTIONAL<BOOLEAN>;
    /* END_OF_SET_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: $.DecodingMap = {
        "recordType": (_el: _Element): void => { recordType = $._decode_implicit<RecordType>(() => _decode_RecordType)(_el); },
        "callingNumber": (_el: _Element): void => { callingNumber = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "calledNumber": (_el: _Element): void => { calledNumber = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "recordingEntity": (_el: _Element): void => { recordingEntity = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
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
        "recordExtensions": (_el: _Element): void => { recordExtensions = $._decode_implicit<ManagementExtension[]>(() => $._decodeSetOf<ManagementExtension>(() => _decode_ManagementExtension))(_el); },
        "locationRoutNum": (_el: _Element): void => { locationRoutNum = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "lrnSoInd": (_el: _Element): void => { lrnSoInd = $._decode_implicit<OutGatewayRecord_lrnSoInd>(() => _decode_OutGatewayRecord_lrnSoInd)(_el); },
        "lrnQuryStatus": (_el: _Element): void => { lrnQuryStatus = $._decode_implicit<OutGatewayRecord_lrnQuryStatus>(() => _decode_OutGatewayRecord_lrnQuryStatus)(_el); },
        "jIPPara": (_el: _Element): void => { jIPPara = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "jIPSoInd": (_el: _Element): void => { jIPSoInd = $._decode_implicit<OutGatewayRecord_jIPSoInd>(() => _decode_OutGatewayRecord_jIPSoInd)(_el); },
        "jIPQuryStatus": (_el: _Element): void => { jIPQuryStatus = $._decode_implicit<OutGatewayRecord_jIPQuryStatus>(() => _decode_OutGatewayRecord_jIPQuryStatus)(_el); },
        "reasonForServiceChange": (_el: _Element): void => { reasonForServiceChange = $._decode_implicit<ReasonForServiceChange>(() => _decode_ReasonForServiceChange)(_el); },
        "serviceChangeInitiator": (_el: _Element): void => { serviceChangeInitiator = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    $._parse_set(el, callbacks,
        _root_component_type_list_1_spec_for_OutGatewayRecord,
        _extension_additions_list_spec_for_OutGatewayRecord,
        _root_component_type_list_2_spec_for_OutGatewayRecord,
        undefined,
    );
    return new OutGatewayRecord( /* SET_CONSTRUCTOR_CALL */
        recordType,
        callingNumber,
        calledNumber,
        recordingEntity,
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
        recordExtensions,
        locationRoutNum,
        lrnSoInd,
        lrnQuryStatus,
        jIPPara,
        jIPSoInd,
        jIPQuryStatus,
        reasonForServiceChange,
        serviceChangeInitiator
    );
}; }
    return _cached_decoder_for_OutGatewayRecord(el);
}

let _cached_encoder_for_OutGatewayRecord: $.ASN1Encoder<OutGatewayRecord> | null = null;

/**
 * @summary Encodes a(n) OutGatewayRecord into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The OutGatewayRecord, encoded as an ASN.1 Element.
 */
export
function _encode_OutGatewayRecord (value: OutGatewayRecord, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_OutGatewayRecord) { _cached_encoder_for_OutGatewayRecord = function (value: OutGatewayRecord, _elGetter: $.ASN1Encoder<OutGatewayRecord>): _Element {
    const _components: _Element[] = [];
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_RecordType, $.BER)(value.recordType, $.BER));
    if (value.callingNumber !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => $._encodeOctetString, $.BER)(value.callingNumber, $.BER));
    }
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => $._encodeOctetString, $.BER)(value.calledNumber, $.BER));
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => $._encodeOctetString, $.BER)(value.recordingEntity, $.BER));
    if (value.mscIncomingTKGP !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 4, () => _encode_TrunkGroup, $.BER)(value.mscIncomingTKGP, $.BER));
    }
    if (value.mscOutgoingTKGP !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 5, () => _encode_TrunkGroup, $.BER)(value.mscOutgoingTKGP, $.BER));
    }
    if (value.seizureTime !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 6, () => $._encodeOctetString, $.BER)(value.seizureTime, $.BER));
    }
    if (value.answerTime !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 7, () => $._encodeOctetString, $.BER)(value.answerTime, $.BER));
    }
    if (value.releaseTime !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 8, () => $._encodeOctetString, $.BER)(value.releaseTime, $.BER));
    }
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 9, () => $._encodeInteger, $.BER)(value.callDuration, $.BER));
    if (value.dataVolume !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 10, () => $._encodeInteger, $.BER)(value.dataVolume, $.BER));
    }
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 11, () => _encode_CauseForTerm, $.BER)(value.causeForTerm, $.BER));
    if (value.diagnostics !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 12, () => _encode_HLRIntResult, $.BER)(value.diagnostics, $.BER));
    }
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 13, () => $._encodeOctetString, $.BER)(value.callReference, $.BER));
    if (value.sequenceNumber !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 14, () => $._encodeInteger, $.BER)(value.sequenceNumber, $.BER));
    }
    if (value.recordExtensions !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 15, () => $._encodeSetOf<ManagementExtension>(() => _encode_ManagementExtension, $.BER), $.BER)(value.recordExtensions, $.BER));
    }
    if (value.locationRoutNum !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 16, () => $._encodeOctetString, $.BER)(value.locationRoutNum, $.BER));
    }
    if (value.lrnSoInd !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 17, () => _encode_OutGatewayRecord_lrnSoInd, $.BER)(value.lrnSoInd, $.BER));
    }
    if (value.lrnQuryStatus !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 18, () => _encode_OutGatewayRecord_lrnQuryStatus, $.BER)(value.lrnQuryStatus, $.BER));
    }
    if (value.jIPPara !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 19, () => $._encodeOctetString, $.BER)(value.jIPPara, $.BER));
    }
    if (value.jIPSoInd !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 20, () => _encode_OutGatewayRecord_jIPSoInd, $.BER)(value.jIPSoInd, $.BER));
    }
    if (value.jIPQuryStatus !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 21, () => _encode_OutGatewayRecord_jIPQuryStatus, $.BER)(value.jIPQuryStatus, $.BER));
    }
    if (value.reasonForServiceChange !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 22, () => _encode_ReasonForServiceChange, $.BER)(value.reasonForServiceChange, $.BER));
    }
    if (value.serviceChangeInitiator !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 23, () => $._encodeBoolean, $.BER)(value.serviceChangeInitiator, $.BER));
    }
    return $._encodeSet(_components, $.BER);
}; }
    return _cached_encoder_for_OutGatewayRecord(value, elGetter);
}


/* eslint-enable */
