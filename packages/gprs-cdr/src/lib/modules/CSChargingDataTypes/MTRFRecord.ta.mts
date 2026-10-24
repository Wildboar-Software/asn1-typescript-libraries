/* eslint-disable */
import {
    type INTEGER,
    type OCTET_STRING,
    type OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type RecordType, _decode_RecordType, _encode_RecordType } from "../CSChargingDataTypes/RecordType.ta.mjs";
import { type TrunkGroup, _decode_TrunkGroup, _encode_TrunkGroup } from "../CSChargingDataTypes/TrunkGroup.ta.mjs";
import { type BasicService, _decode_BasicService, _encode_BasicService } from "../CSChargingDataTypes/BasicService.ta.mjs";
import { type CauseForTerm, _decode_CauseForTerm, _encode_CauseForTerm } from "../CSChargingDataTypes/CauseForTerm.ta.mjs";
import { type HLRIntResult, _decode_HLRIntResult, _encode_HLRIntResult } from "../CSChargingDataTypes/HLRIntResult.ta.mjs";
import { ManagementExtension, _decode_ManagementExtension, _encode_ManagementExtension } from "../CSChargingDataTypes/ManagementExtension.ta.mjs";
import { PartialRecordType, _decode_PartialRecordType, _encode_PartialRecordType, _enum_for_PartialRecordType } from "../CSChargingDataTypes/PartialRecordType.ta.mjs";


/**
 * @summary MTRFRecord
 * @description
 *
 * Mobile Terminating Roaming Forwarding CDR. When generation is enabled, the
 * old MSC/VLR from which the call is rerouted creates one record for each
 * call rerouted to a new MSC after a successful retrieval of routeing
 * information. This completes the CDR set along the path and avoids charging
 * the call twice. The new MSC/VLR charges the call as an ordinary
 * terminating call.
 *
 * `roamingNumber` is the MSRN the old VMSC uses to route to the new VMSC.
 * When the new MSC/VLR is in another PLMN, the old MSC/VLR also produces a
 * roaming CDR, even if the new MSC/VLR is in the HPLMN. The same behaviour
 * applies to roaming forwarding for CS fallback (clause 5.1.3.18).
 *
 * The table has a 3G category only. Categories are M, C, OM, and OC as in TS
 * 32.240 clause 5.4.
 *
 * 3GPP TS 32.250 V19.0.0 clauses 5.1.3.18 and 6.1.3.30.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MTRFRecord ::= SET {
 *    recordType          [0] IMPLICIT RecordType,
 *    servedIMSI          [1] IMPLICIT OCTET STRING ( SIZE( 3 .. 8 ) ),
 *    servedIMEI          [2] IMPLICIT OCTET STRING ( SIZE( 8 ) ) OPTIONAL,
 *    servedMSISDN        [3] IMPLICIT OCTET STRING OPTIONAL,
 *    callingNumber       [4] IMPLICIT OCTET STRING OPTIONAL,
 *    roamingNumber       [5] IMPLICIT OCTET STRING ( SIZE( 1 .. 20 ) ) ( SIZE( 1 .. 9 ) ) OPTIONAL,
 *    recordingEntity     [6] IMPLICIT OCTET STRING ( SIZE( 1 .. 20 ) ),
 *    mscIncomingTKGP     [7] TrunkGroup OPTIONAL,
 *    mscOutgoingTKGP     [8] TrunkGroup OPTIONAL,
 *    basicService        [9] BasicService OPTIONAL,
 *    seizureTime         [10] IMPLICIT OCTET STRING ( SIZE( 9 ) ) OPTIONAL,
 *    answerTime          [11] IMPLICIT OCTET STRING ( SIZE( 9 ) ) OPTIONAL,
 *    releaseTime         [12] IMPLICIT OCTET STRING ( SIZE( 9 ) ) OPTIONAL,
 *    callDuration        [13] IMPLICIT INTEGER,
 *    causeForTerm        [14] IMPLICIT CauseForTerm,
 *    diagnostics         [15] HLRIntResult OPTIONAL,
 *    callReference       [16] IMPLICIT OCTET STRING ( SIZE( 1 .. 8 ) ),
 *    sequenceNumber      [17] IMPLICIT INTEGER OPTIONAL,
 *    recordExtensions    [18] IMPLICIT SET  OF
 *       ManagementExtension OPTIONAL,
 *    partialRecordType   [19] IMPLICIT PartialRecordType OPTIONAL}
 * ```
 * @class
 */
export
class MTRFRecord {
    /**
     * @summary `recordType`.
     * @description
     *
     * 3G mandatory. Mobile Terminating Roaming Forwarding.
     *
     * 3GPP TS 32.250 V19.0.0 clause 6.1.3.30.
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
     * 3G mandatory. IMSI of the called party.
     *
     * 3GPP TS 32.250 V19.0.0 clause 6.1.3.30.
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
     * @summary `servedIMEI`.
     * @description
     *
     * 3G conditional. IMEI of the called ME, if available.
     *
     * 3GPP TS 32.250 V19.0.0 clause 6.1.3.30.
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
     * 3G operator-provisionable mandatory. The MSISDN of the called party.
     *
     * 3GPP TS 32.250 V19.0.0 clause 6.1.3.30.
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
     * 3G conditional. The number of the calling party if available.
     *
     * 3GPP TS 32.250 V19.0.0 clause 6.1.3.30.
     *
     * @public
     * @readonly
     */
    readonly callingNumber: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `roamingNumber`.
     * @description
     *
     * 3G mandatory. The Mobile Station Roaming Number employed by the VMSC for
     * routing to the new VMSC.
     *
     * 3GPP TS 32.250 V19.0.0 clause 6.1.3.30.
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
     * 3G mandatory. The E.164 number of the VMSC (i.e Old VMSC the call is
     * re-routed from).
     *
     * 3GPP TS 32.250 V19.0.0 clause 6.1.3.30.
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
     * 3G operator-provisionable mandatory. The VMSC trunk group on which the
     * call originated.
     *
     * 3GPP TS 32.250 V19.0.0 clause 6.1.3.30.
     *
     * @public
     * @readonly
     */
    readonly mscIncomingTKGP: OPTIONAL<TrunkGroup>;
    /**
     * @summary `mscOutgoingTKGP`.
     * @description
     *
     * 3G operator-provisionable conditional. The trunk group on which the call
     * left the VMSC.
     *
     * 3GPP TS 32.250 V19.0.0 clause 6.1.3.30.
     *
     * @public
     * @readonly
     */
    readonly mscOutgoingTKGP: OPTIONAL<TrunkGroup>;
    /**
     * @summary `basicService`.
     * @description
     *
     * 3G mandatory. teleservice employed.
     *
     * 3GPP TS 32.250 V19.0.0 clause 6.1.3.30.
     *
     * @public
     * @readonly
     */
    readonly basicService: OPTIONAL<BasicService>;
    /**
     * @summary `seizureTime`.
     * @description
     *
     * 3G conditional. Time of incoming trunk seizure.
     *
     * 3GPP TS 32.250 V19.0.0 clause 6.1.3.30.
     *
     * @public
     * @readonly
     */
    readonly seizureTime: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `answerTime`.
     * @description
     *
     * 3G conditional. Time of answer for successful calls.
     *
     * 3GPP TS 32.250 V19.0.0 clause 6.1.3.30.
     *
     * @public
     * @readonly
     */
    readonly answerTime: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `releaseTime`.
     * @description
     *
     * 3G operator-provisionable mandatory. Time of outgoing trunk release.
     *
     * 3GPP TS 32.250 V19.0.0 clause 6.1.3.30.
     *
     * @public
     * @readonly
     */
    readonly releaseTime: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `callDuration`.
     * @description
     *
     * 3G mandatory. The chargeable duration of the connection if successful,
     * the holding time of the incoming trunk for call attempts if unsuccessful.
     *
     * 3GPP TS 32.250 V19.0.0 clause 6.1.3.30.
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
     * 3G mandatory. The reason for the release of the call.
     *
     * 3GPP TS 32.250 V19.0.0 clause 6.1.3.30.
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
     * 3G operator-provisionable mandatory. A more detailed reason for the
     * release of the connection.
     *
     * 3GPP TS 32.250 V19.0.0 clause 6.1.3.30.
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
     * 3G mandatory. A local identifier distinguishing between transactions at
     * the same MS.
     *
     * 3GPP TS 32.250 V19.0.0 clause 6.1.3.30.
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
     * 3G conditional. Partial record sequence number, only present in case of
     * partial records.
     *
     * 3GPP TS 32.250 V19.0.0 clause 6.1.3.30.
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
     * 3G operator-provisionable conditional. A set of network/ manufacturer
     * specific extensions to the record, when available.
     *
     * 3GPP TS 32.250 V19.0.0 clause 6.1.3.30.
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
     * 3G operator-provisionable conditional. Indicates the event (time limit,
     * etc.) that caused the generation of a partial record.
     *
     * 3GPP TS 32.250 V19.0.0 clause 6.1.3.30.
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
        servedIMEI: OPTIONAL<OCTET_STRING>,
        servedMSISDN: OPTIONAL<OCTET_STRING>,
        callingNumber: OPTIONAL<OCTET_STRING>,
        roamingNumber: OPTIONAL<OCTET_STRING>,
        recordingEntity: OCTET_STRING,
        mscIncomingTKGP: OPTIONAL<TrunkGroup>,
        mscOutgoingTKGP: OPTIONAL<TrunkGroup>,
        basicService: OPTIONAL<BasicService>,
        seizureTime: OPTIONAL<OCTET_STRING>,
        answerTime: OPTIONAL<OCTET_STRING>,
        releaseTime: OPTIONAL<OCTET_STRING>,
        callDuration: INTEGER,
        causeForTerm: CauseForTerm,
        diagnostics: OPTIONAL<HLRIntResult>,
        callReference: OCTET_STRING,
        sequenceNumber?: OPTIONAL<INTEGER>,
        recordExtensions?: OPTIONAL<ManagementExtension[]>,
        partialRecordType?: OPTIONAL<PartialRecordType>
    ) {
        this.recordType = recordType;
        this.servedIMSI = servedIMSI;
        this.servedIMEI = servedIMEI;
        this.servedMSISDN = servedMSISDN;
        this.callingNumber = callingNumber;
        this.roamingNumber = roamingNumber;
        this.recordingEntity = recordingEntity;
        this.mscIncomingTKGP = mscIncomingTKGP;
        this.mscOutgoingTKGP = mscOutgoingTKGP;
        this.basicService = basicService;
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
    
        if ((this.servedIMSI.length < 3 || this.servedIMSI.length > 8)) {
            throw new ASN1SizeError("MTRFRecord.servedIMSI violates SIZE constraint");
        }
        if (this.servedIMEI !== undefined && (this.servedIMEI.length !== 8)) {
            throw new ASN1SizeError("MTRFRecord.servedIMEI violates SIZE constraint");
        }
        if (this.roamingNumber !== undefined && (this.roamingNumber.length < 1 || this.roamingNumber.length > 9)) {
            throw new ASN1SizeError("MTRFRecord.roamingNumber violates SIZE constraint");
        }
        if ((this.recordingEntity.length < 1 || this.recordingEntity.length > 20)) {
            throw new ASN1SizeError("MTRFRecord.recordingEntity violates SIZE constraint");
        }
        if (this.seizureTime !== undefined && (this.seizureTime.length !== 9)) {
            throw new ASN1SizeError("MTRFRecord.seizureTime violates SIZE constraint");
        }
        if (this.answerTime !== undefined && (this.answerTime.length !== 9)) {
            throw new ASN1SizeError("MTRFRecord.answerTime violates SIZE constraint");
        }
        if (this.releaseTime !== undefined && (this.releaseTime.length !== 9)) {
            throw new ASN1SizeError("MTRFRecord.releaseTime violates SIZE constraint");
        }
        if ((this.callReference.length < 1 || this.callReference.length > 8)) {
            throw new ASN1SizeError("MTRFRecord.callReference violates SIZE constraint");
        }
    }

    /**
     * @summary Restructures an object into a MTRFRecord
     * @description
     *
     * This takes an `object` and converts it to a `MTRFRecord`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `MTRFRecord`.
     * @returns {MTRFRecord}
     */
    public static _from_object (_o: { [_K in keyof (MTRFRecord)]: (MTRFRecord)[_K] }): MTRFRecord {
        return new MTRFRecord(_o.recordType, _o.servedIMSI, _o.servedIMEI, _o.servedMSISDN, _o.callingNumber, _o.roamingNumber, _o.recordingEntity, _o.mscIncomingTKGP, _o.mscOutgoingTKGP, _o.basicService, _o.seizureTime, _o.answerTime, _o.releaseTime, _o.callDuration, _o.causeForTerm, _o.diagnostics, _o.callReference, _o.sequenceNumber, _o.recordExtensions, _o.partialRecordType);
    }

        /**
         * @summary The enum used as the type of the component `partialRecordType`
         * @public
         * @static
         */

    public static _enum_for_partialRecordType = _enum_for_PartialRecordType;
}

/**
 * @summary The Leading Root Component Types of MTRFRecord
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading
 * root component type list of a SET or SEQUENCE.
 * @constant
 */
export
const _root_component_type_list_1_spec_for_MTRFRecord: $.ComponentSpec[] = [
    new $.ComponentSpec("recordType", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("servedIMSI", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("servedIMEI", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("servedMSISDN", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("callingNumber", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("roamingNumber", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("recordingEntity", false, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("mscIncomingTKGP", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("mscOutgoingTKGP", true, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("basicService", true, $.hasTag(_TagClass.context, 9)),
    new $.ComponentSpec("seizureTime", true, $.hasTag(_TagClass.context, 10)),
    new $.ComponentSpec("answerTime", true, $.hasTag(_TagClass.context, 11)),
    new $.ComponentSpec("releaseTime", true, $.hasTag(_TagClass.context, 12)),
    new $.ComponentSpec("callDuration", false, $.hasTag(_TagClass.context, 13)),
    new $.ComponentSpec("causeForTerm", false, $.hasTag(_TagClass.context, 14)),
    new $.ComponentSpec("diagnostics", true, $.hasTag(_TagClass.context, 15)),
    new $.ComponentSpec("callReference", false, $.hasTag(_TagClass.context, 16)),
    new $.ComponentSpec("sequenceNumber", true, $.hasTag(_TagClass.context, 17)),
    new $.ComponentSpec("recordExtensions", true, $.hasTag(_TagClass.context, 18)),
    new $.ComponentSpec("partialRecordType", true, $.hasTag(_TagClass.context, 19))
];

/**
 * @summary The Trailing Root Component Types of MTRFRecord
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing
 * root component type list of a SET or SEQUENCE.
 * @constant
 */
export
const _root_component_type_list_2_spec_for_MTRFRecord: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of MTRFRecord
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension
 * addition component type list of a SET or SEQUENCE.
 * @constant
 */
export
const _extension_additions_list_spec_for_MTRFRecord: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_MTRFRecord: $.ASN1Decoder<MTRFRecord> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MTRFRecord
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MTRFRecord (el: _Element): MTRFRecord {
    if (!_cached_decoder_for_MTRFRecord) { _cached_decoder_for_MTRFRecord = function (el: _Element): MTRFRecord {
    /* START_OF_SET_COMPONENT_DECLARATIONS */
    let recordType!: RecordType;
    let servedIMSI!: OCTET_STRING;
    let servedIMEI: OPTIONAL<OCTET_STRING>;
    let servedMSISDN: OPTIONAL<OCTET_STRING>;
    let callingNumber: OPTIONAL<OCTET_STRING>;
    let roamingNumber: OPTIONAL<OCTET_STRING>;
    let recordingEntity!: OCTET_STRING;
    let mscIncomingTKGP: OPTIONAL<TrunkGroup>;
    let mscOutgoingTKGP: OPTIONAL<TrunkGroup>;
    let basicService: OPTIONAL<BasicService>;
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
    /* END_OF_SET_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: $.DecodingMap = {
        "recordType": (_el: _Element): void => { recordType = $._decode_implicit<RecordType>(() => _decode_RecordType)(_el); },
        "servedIMSI": (_el: _Element): void => { servedIMSI = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "servedIMEI": (_el: _Element): void => { servedIMEI = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "servedMSISDN": (_el: _Element): void => { servedMSISDN = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "callingNumber": (_el: _Element): void => { callingNumber = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "roamingNumber": (_el: _Element): void => { roamingNumber = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "recordingEntity": (_el: _Element): void => { recordingEntity = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "mscIncomingTKGP": (_el: _Element): void => { mscIncomingTKGP = $._decode_explicit<TrunkGroup>(() => _decode_TrunkGroup)(_el); },
        "mscOutgoingTKGP": (_el: _Element): void => { mscOutgoingTKGP = $._decode_explicit<TrunkGroup>(() => _decode_TrunkGroup)(_el); },
        "basicService": (_el: _Element): void => { basicService = $._decode_explicit<BasicService>(() => _decode_BasicService)(_el); },
        "seizureTime": (_el: _Element): void => { seizureTime = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "answerTime": (_el: _Element): void => { answerTime = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "releaseTime": (_el: _Element): void => { releaseTime = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "callDuration": (_el: _Element): void => { callDuration = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "causeForTerm": (_el: _Element): void => { causeForTerm = $._decode_implicit<CauseForTerm>(() => _decode_CauseForTerm)(_el); },
        "diagnostics": (_el: _Element): void => { diagnostics = $._decode_explicit<HLRIntResult>(() => _decode_HLRIntResult)(_el); },
        "callReference": (_el: _Element): void => { callReference = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "sequenceNumber": (_el: _Element): void => { sequenceNumber = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "recordExtensions": (_el: _Element): void => { recordExtensions = $._decode_implicit<ManagementExtension[]>(() => $._decodeSetOf<ManagementExtension>(() => _decode_ManagementExtension))(_el); },
        "partialRecordType": (_el: _Element): void => { partialRecordType = $._decode_implicit<PartialRecordType>(() => _decode_PartialRecordType)(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    $._parse_set(el, callbacks,
        _root_component_type_list_1_spec_for_MTRFRecord,
        _extension_additions_list_spec_for_MTRFRecord,
        _root_component_type_list_2_spec_for_MTRFRecord,
        undefined,
    );
    return new MTRFRecord( /* SET_CONSTRUCTOR_CALL */
        recordType,
        servedIMSI,
        servedIMEI,
        servedMSISDN,
        callingNumber,
        roamingNumber,
        recordingEntity,
        mscIncomingTKGP,
        mscOutgoingTKGP,
        basicService,
        seizureTime,
        answerTime,
        releaseTime,
        callDuration,
        causeForTerm,
        diagnostics,
        callReference,
        sequenceNumber,
        recordExtensions,
        partialRecordType
    );
}; }
    return _cached_decoder_for_MTRFRecord(el);
}

let _cached_encoder_for_MTRFRecord: $.ASN1Encoder<MTRFRecord> | null = null;

/**
 * @summary Encodes a(n) MTRFRecord into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MTRFRecord, encoded as an ASN.1 Element.
 */
export
function _encode_MTRFRecord (value: MTRFRecord, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MTRFRecord) { _cached_encoder_for_MTRFRecord = function (value: MTRFRecord, _elGetter: $.ASN1Encoder<MTRFRecord>): _Element {
    const _components: _Element[] = [];
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_RecordType, $.BER)(value.recordType, $.BER));
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeOctetString, $.BER)(value.servedIMSI, $.BER));
    if (value.servedIMEI !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => $._encodeOctetString, $.BER)(value.servedIMEI, $.BER));
    }
    if (value.servedMSISDN !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => $._encodeOctetString, $.BER)(value.servedMSISDN, $.BER));
    }
    if (value.callingNumber !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 4, () => $._encodeOctetString, $.BER)(value.callingNumber, $.BER));
    }
    if (value.roamingNumber !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 5, () => $._encodeOctetString, $.BER)(value.roamingNumber, $.BER));
    }
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 6, () => $._encodeOctetString, $.BER)(value.recordingEntity, $.BER));
    if (value.mscIncomingTKGP !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 7, () => _encode_TrunkGroup, $.BER)(value.mscIncomingTKGP, $.BER));
    }
    if (value.mscOutgoingTKGP !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 8, () => _encode_TrunkGroup, $.BER)(value.mscOutgoingTKGP, $.BER));
    }
    if (value.basicService !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 9, () => _encode_BasicService, $.BER)(value.basicService, $.BER));
    }
    if (value.seizureTime !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 10, () => $._encodeOctetString, $.BER)(value.seizureTime, $.BER));
    }
    if (value.answerTime !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 11, () => $._encodeOctetString, $.BER)(value.answerTime, $.BER));
    }
    if (value.releaseTime !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 12, () => $._encodeOctetString, $.BER)(value.releaseTime, $.BER));
    }
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 13, () => $._encodeInteger, $.BER)(value.callDuration, $.BER));
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 14, () => _encode_CauseForTerm, $.BER)(value.causeForTerm, $.BER));
    if (value.diagnostics !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 15, () => _encode_HLRIntResult, $.BER)(value.diagnostics, $.BER));
    }
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 16, () => $._encodeOctetString, $.BER)(value.callReference, $.BER));
    if (value.sequenceNumber !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 17, () => $._encodeInteger, $.BER)(value.sequenceNumber, $.BER));
    }
    if (value.recordExtensions !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 18, () => $._encodeSetOf<ManagementExtension>(() => _encode_ManagementExtension, $.BER), $.BER)(value.recordExtensions, $.BER));
    }
    if (value.partialRecordType !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 19, () => _encode_PartialRecordType, $.BER)(value.partialRecordType, $.BER));
    }
    return $._encodeSet(_components, $.BER);
}; }
    return _cached_encoder_for_MTRFRecord(value, elGetter);
}


/* eslint-enable */
