/* eslint-disable */
import {
    BOOLEAN,
    INTEGER,
    OCTET_STRING,
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { TrunkGroup, _decode_TrunkGroup, _encode_TrunkGroup } from "../CSChargingDataTypes/TrunkGroup.ta.mjs";
import { CAMELInitCFIndicator, _decode_CAMELInitCFIndicator, _encode_CAMELInitCFIndicator, _enum_for_CAMELInitCFIndicator } from "../CSChargingDataTypes/CAMELInitCFIndicator.ta.mjs";
import { CauseForTerm, _decode_CauseForTerm, _encode_CauseForTerm } from "../CSChargingDataTypes/CauseForTerm.ta.mjs";
import { ChangedParameters, _decode_ChangedParameters, _encode_ChangedParameters } from "../CSChargingDataTypes/ChangedParameters.ta.mjs";
import { HLRIntResult, _decode_HLRIntResult, _encode_HLRIntResult } from "../CSChargingDataTypes/HLRIntResult.ta.mjs";


/**
 * @summary CAMELInformation
 * @description
 *
 * One outgoing CAMEL call leg, or one user interaction, inside
 * `cAMELCallLegInformation`. CAMEL CPH records one of these for each
 * outgoing leg of the call segment. A leg that moves to another call segment
 * is closed here and opened in the other segment's CDR. User interactions
 * such as announcements are recorded the same way, as their own element.
 *
 * A value that is identical to the main body of the CDR need not be
 * repeated. An omitted component means the main-body value still applies, so
 * the element can be empty or absent.
 *
 * Clause 5.1.3.14 also names translated number, additional charging
 * information, the second CAMEL service's default call handling, gsmSCF
 * address, and service key, and the LRN and JIP parameters, as leg fields.
 * In this module those components stay on the parent CDR. The second FCI
 * parameters are `freeFormatData_2` and `freeFormatDataAppend_2`. The
 * clause's editor's note says those two parameters still need clarification
 * in the CDR tables. The leg tables leave the 2G and 3G categories of these
 * components blank.
 *
 * The leg closes when it is released or moved. `causeForTerm` and
 * `diagnostics` then say why it disappeared from this call segment.
 * `callDuration` is the time between this leg's answer and release.
 *
 * 3GPP TS 32.250 V19.0.0 clauses 5.1.3.14 and 6.1.3.23.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CAMELInformation ::= SET {
 *    cAMELDestinationNumber   [1] IMPLICIT SEQUENCE  ( SIZE( 1 ) ) OF
 *       OCTET STRING ( SIZE( 1 .. 41 ) ) OPTIONAL,
 *    connectedNumber          [2] IMPLICIT OCTET STRING OPTIONAL,
 *    roamingNumber            [3] IMPLICIT OCTET STRING ( SIZE( 1 .. 20 ) ) ( SIZE( 1 .. 9 ) ) OPTIONAL,
 *    mscOutgoingTKGP          [4] TrunkGroup OPTIONAL,
 *    seizureTime              [5] IMPLICIT OCTET STRING ( SIZE( 9 ) ) OPTIONAL,
 *    answerTime               [6] IMPLICIT OCTET STRING ( SIZE( 9 ) ) OPTIONAL,
 *    releaseTime              [7] IMPLICIT OCTET STRING ( SIZE( 9 ) ) OPTIONAL,
 *    callDuration             [8] IMPLICIT INTEGER OPTIONAL,
 *    dataVolume               [9] IMPLICIT INTEGER OPTIONAL,
 *    cAMELInitCFIndicator     [10] IMPLICIT CAMELInitCFIndicator OPTIONAL,
 *    causeForTerm             [11] IMPLICIT CauseForTerm OPTIONAL,
 *    cAMELModification        [12] IMPLICIT ChangedParameters OPTIONAL,
 *    freeFormatData           [13] IMPLICIT OCTET STRING ( SIZE( 1 .. 160 ) ) OPTIONAL,
 *    diagnostics              [14] HLRIntResult OPTIONAL,
 *    freeFormatDataAppend     [15] IMPLICIT BOOLEAN OPTIONAL,
 *    freeFormatData-2         [16] IMPLICIT OCTET STRING ( SIZE( 1 .. 160 ) ) OPTIONAL,
 *    freeFormatDataAppend-2   [17] IMPLICIT BOOLEAN OPTIONAL}
 * ```
 * @class
 */
export
class CAMELInformation {
    /**
     * @summary `cAMELDestinationNumber`.
     * @description
     *
     * CPH MOC: Destination modified by camel service.
     *
     * gsmSCF-initiated CPH, CPH new call segment: Destination as received in
     * the ICA operation.
     *
     * CPH forwarding: Destination modified by CAMEL service.
     *
     * CPH terminating CAMEL: Destination as received in the ICA operation or
     * overwritten by TDP3.
     *
     * 3GPP TS 32.250 V19.0.0 clauses 6.1.3.23, 6.1.3.24, 6.1.3.25, 6.1.3.26,
     * and 6.1.3.27.
     *
     * @public
     * @readonly
     */
    readonly cAMELDestinationNumber: OPTIONAL<OCTET_STRING[]>;
    /**
     * @summary `connectedNumber`.
     * @description
     *
     * Number of connected party if different from 'CAMEL Destination Number'.
     *
     * 3GPP TS 32.250 V19.0.0 clauses 6.1.3.23, 6.1.3.24, 6.1.3.25, 6.1.3.26,
     * and 6.1.3.27.
     *
     * @public
     * @readonly
     */
    readonly connectedNumber: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `roamingNumber`.
     * @description
     *
     * CPH MOC, gsmSCF-initiated CPH, CPH new call segment, CPH forwarding: MSRN
     * to route this leg (if applicable).
     *
     * CPH terminating CAMEL: MSRN or B-party (if applicable).
     *
     * 3GPP TS 32.250 V19.0.0 clauses 6.1.3.23, 6.1.3.24, 6.1.3.25, 6.1.3.26,
     * and 6.1.3.27.
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
     * @summary `mscOutgoingTKGP`.
     * @description
     *
     * Trunk on which the leg leaves the MSC.
     *
     * 3GPP TS 32.250 V19.0.0 clauses 6.1.3.23, 6.1.3.24, 6.1.3.25, 6.1.3.26,
     * and 6.1.3.27.
     *
     * @public
     * @readonly
     */
    readonly mscOutgoingTKGP: OPTIONAL<TrunkGroup>;
    /**
     * @summary `seizureTime`.
     * @description
     *
     * Time of traffic channel seizure for this leg.
     *
     * 3GPP TS 32.250 V19.0.0 clauses 6.1.3.23, 6.1.3.24, 6.1.3.25, 6.1.3.26,
     * and 6.1.3.27.
     *
     * @public
     * @readonly
     */
    readonly seizureTime: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `answerTime`.
     * @description
     *
     * Time when the answer message is received for this leg.
     *
     * 3GPP TS 32.250 V19.0.0 clauses 6.1.3.23, 6.1.3.24, 6.1.3.25, 6.1.3.26,
     * and 6.1.3.27.
     *
     * @public
     * @readonly
     */
    readonly answerTime: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `releaseTime`.
     * @description
     *
     * Time when the leg is released or moved into another call segment.
     *
     * 3GPP TS 32.250 V19.0.0 clauses 6.1.3.23, 6.1.3.24, 6.1.3.25, 6.1.3.26,
     * and 6.1.3.27.
     *
     * @public
     * @readonly
     */
    readonly releaseTime: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `callDuration`.
     * @description
     *
     * Time between answer and release timestamp of this leg.
     *
     * 3GPP TS 32.250 V19.0.0 clauses 6.1.3.23, 6.1.3.24, 6.1.3.25, 6.1.3.26,
     * and 6.1.3.27.
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
    readonly callDuration: OPTIONAL<INTEGER>;
    /**
     * @summary `dataVolume`.
     * @description
     *
     * The CAMEL CPH leg tables do not list data volume on the outgoing leg. The
     * parent CDR records the number of data segments when the MSC knows it.
     * 3GPP TS 32.250 V19.0.0 clauses 6.1.3.23 and 6.1.3.1.
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
     * @summary `cAMELInitCFIndicator`.
     * @description
     *
     * Indicates that the CAMEL server initiated call forwarding.
     *
     * 3GPP TS 32.250 V19.0.0 clause 6.1.3.27.
     *
     * @public
     * @readonly
     */
    readonly cAMELInitCFIndicator: OPTIONAL<CAMELInitCFIndicator>;
    /**
     * @summary `causeForTerm`.
     * @description
     *
     * The reason for disappearing of the leg in this call segment.
     *
     * 3GPP TS 32.250 V19.0.0 clauses 6.1.3.23, 6.1.3.24, 6.1.3.25, 6.1.3.26,
     * and 6.1.3.27.
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
    readonly causeForTerm: OPTIONAL<CauseForTerm>;
    /**
     * @summary `cAMELModification`.
     * @description
     *
     * Parameters CAMEL modified on this outgoing leg. Clause 5.1.3.2 says
     * CAMEL-modified parameters are recorded for one call leg, including the
     * effect of every CAMEL service on that leg. 3GPP TS 32.250 V19.0.0 clauses
     * 5.1.3.2 and 5.1.3.14.
     *
     * @public
     * @readonly
     */
    readonly cAMELModification: OPTIONAL<ChangedParameters>;
    /**
     * @summary `freeFormatData`.
     * @description
     *
     * If received in the FCI message from SCF.
     *
     * 3GPP TS 32.250 V19.0.0 clauses 6.1.3.23, 6.1.3.24, 6.1.3.25, 6.1.3.26,
     * and 6.1.3.27.
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
     * @summary `diagnostics`.
     * @description
     *
     * Detailed reason for disappearing of the leg in this call segment.
     *
     * 3GPP TS 32.250 V19.0.0 clauses 6.1.3.23, 6.1.3.24, 6.1.3.25, 6.1.3.26,
     * and 6.1.3.27.
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
     * @summary `freeFormatDataAppend`.
     * @description
     *
     * If received in the FCI message from SCF.
     *
     * 3GPP TS 32.250 V19.0.0 clauses 6.1.3.23, 6.1.3.24, 6.1.3.25, 6.1.3.26,
     * and 6.1.3.27.
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
     * @summary `freeFormatData_2`.
     * @description
     *
     * If provided in the FCI message for a 2nd service.
     *
     * 3GPP TS 32.250 V19.0.0 clauses 6.1.3.23, 6.1.3.24, 6.1.3.25, 6.1.3.26,
     * and 6.1.3.27.
     *
     * @public
     * @readonly
     */
    readonly freeFormatData_2: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `freeFormatDataAppend_2`.
     * @description
     *
     * If provided in the FCI message for a 2nd service.
     *
     * 3GPP TS 32.250 V19.0.0 clauses 6.1.3.23, 6.1.3.24, 6.1.3.25, 6.1.3.26,
     * and 6.1.3.27.
     *
     * @public
     * @readonly
     */
    readonly freeFormatDataAppend_2: OPTIONAL<BOOLEAN>;

    constructor (
        cAMELDestinationNumber: OPTIONAL<OCTET_STRING[]>,
        connectedNumber: OPTIONAL<OCTET_STRING>,
        roamingNumber: OPTIONAL<OCTET_STRING>,
        mscOutgoingTKGP: OPTIONAL<TrunkGroup>,
        seizureTime: OPTIONAL<OCTET_STRING>,
        answerTime: OPTIONAL<OCTET_STRING>,
        releaseTime: OPTIONAL<OCTET_STRING>,
        callDuration: OPTIONAL<INTEGER>,
        dataVolume: OPTIONAL<INTEGER>,
        cAMELInitCFIndicator: OPTIONAL<CAMELInitCFIndicator>,
        causeForTerm: OPTIONAL<CauseForTerm>,
        cAMELModification: OPTIONAL<ChangedParameters>,
        freeFormatData: OPTIONAL<OCTET_STRING>,
        diagnostics: OPTIONAL<HLRIntResult>,
        freeFormatDataAppend: OPTIONAL<BOOLEAN>,
        freeFormatData_2: OPTIONAL<OCTET_STRING>,
        freeFormatDataAppend_2: OPTIONAL<BOOLEAN>
    ) {
        this.cAMELDestinationNumber = cAMELDestinationNumber;
        this.connectedNumber = connectedNumber;
        this.roamingNumber = roamingNumber;
        this.mscOutgoingTKGP = mscOutgoingTKGP;
        this.seizureTime = seizureTime;
        this.answerTime = answerTime;
        this.releaseTime = releaseTime;
        this.callDuration = callDuration;
        this.dataVolume = dataVolume;
        this.cAMELInitCFIndicator = cAMELInitCFIndicator;
        this.causeForTerm = causeForTerm;
        this.cAMELModification = cAMELModification;
        this.freeFormatData = freeFormatData;
        this.diagnostics = diagnostics;
        this.freeFormatDataAppend = freeFormatDataAppend;
        this.freeFormatData_2 = freeFormatData_2;
        this.freeFormatDataAppend_2 = freeFormatDataAppend_2;
    
        if (this.cAMELDestinationNumber !== undefined && (this.cAMELDestinationNumber.length !== 1)) {
            throw new ASN1SizeError("CAMELInformation.cAMELDestinationNumber violates SIZE constraint");
        }
        if (this.cAMELDestinationNumber !== undefined && this.cAMELDestinationNumber) {
            for (const _item of this.cAMELDestinationNumber) {
                if (_item.length < 1 || _item.length > 41) {
                    throw new ASN1SizeError("CAMELInformation.cAMELDestinationNumber element violates SIZE constraint");
                }
            }
        }
        if (this.roamingNumber !== undefined && (this.roamingNumber.length < 1 || this.roamingNumber.length > 9)) {
            throw new ASN1SizeError("CAMELInformation.roamingNumber violates SIZE constraint");
        }
        if (this.seizureTime !== undefined && (this.seizureTime.length !== 9)) {
            throw new ASN1SizeError("CAMELInformation.seizureTime violates SIZE constraint");
        }
        if (this.answerTime !== undefined && (this.answerTime.length !== 9)) {
            throw new ASN1SizeError("CAMELInformation.answerTime violates SIZE constraint");
        }
        if (this.releaseTime !== undefined && (this.releaseTime.length !== 9)) {
            throw new ASN1SizeError("CAMELInformation.releaseTime violates SIZE constraint");
        }
        if (this.freeFormatData !== undefined && (this.freeFormatData.length < 1 || this.freeFormatData.length > 160)) {
            throw new ASN1SizeError("CAMELInformation.freeFormatData violates SIZE constraint");
        }
        if (this.freeFormatData_2 !== undefined && (this.freeFormatData_2.length < 1 || this.freeFormatData_2.length > 160)) {
            throw new ASN1SizeError("CAMELInformation.freeFormatData_2 violates SIZE constraint");
        }
    }

    /**
     * @summary Restructures an object into a CAMELInformation
     * @description
     *
     * This takes an `object` and converts it to a `CAMELInformation`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CAMELInformation`.
     * @returns {CAMELInformation}
     */
    public static _from_object (_o: { [_K in keyof (CAMELInformation)]: (CAMELInformation)[_K] }): CAMELInformation {
        return new CAMELInformation(_o.cAMELDestinationNumber, _o.connectedNumber, _o.roamingNumber, _o.mscOutgoingTKGP, _o.seizureTime, _o.answerTime, _o.releaseTime, _o.callDuration, _o.dataVolume, _o.cAMELInitCFIndicator, _o.causeForTerm, _o.cAMELModification, _o.freeFormatData, _o.diagnostics, _o.freeFormatDataAppend, _o.freeFormatData_2, _o.freeFormatDataAppend_2);
    }

        /**
         * @summary The enum used as the type of the component `cAMELInitCFIndicator`
         * @public
         * @static
         */

    public static _enum_for_cAMELInitCFIndicator = _enum_for_CAMELInitCFIndicator;
}

/**
 * @summary The Leading Root Component Types of CAMELInformation
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading
 * root component type list of a SET or SEQUENCE.
 * @constant
 */
export
const _root_component_type_list_1_spec_for_CAMELInformation: $.ComponentSpec[] = [
    new $.ComponentSpec("cAMELDestinationNumber", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("connectedNumber", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("roamingNumber", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("mscOutgoingTKGP", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("seizureTime", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("answerTime", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("releaseTime", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("callDuration", true, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("dataVolume", true, $.hasTag(_TagClass.context, 9)),
    new $.ComponentSpec("cAMELInitCFIndicator", true, $.hasTag(_TagClass.context, 10)),
    new $.ComponentSpec("causeForTerm", true, $.hasTag(_TagClass.context, 11)),
    new $.ComponentSpec("cAMELModification", true, $.hasTag(_TagClass.context, 12)),
    new $.ComponentSpec("freeFormatData", true, $.hasTag(_TagClass.context, 13)),
    new $.ComponentSpec("diagnostics", true, $.hasTag(_TagClass.context, 14)),
    new $.ComponentSpec("freeFormatDataAppend", true, $.hasTag(_TagClass.context, 15)),
    new $.ComponentSpec("freeFormatData-2", true, $.hasTag(_TagClass.context, 16)),
    new $.ComponentSpec("freeFormatDataAppend-2", true, $.hasTag(_TagClass.context, 17))
];

/**
 * @summary The Trailing Root Component Types of CAMELInformation
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing
 * root component type list of a SET or SEQUENCE.
 * @constant
 */
export
const _root_component_type_list_2_spec_for_CAMELInformation: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of CAMELInformation
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension
 * addition component type list of a SET or SEQUENCE.
 * @constant
 */
export
const _extension_additions_list_spec_for_CAMELInformation: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_CAMELInformation: $.ASN1Decoder<CAMELInformation> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CAMELInformation
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CAMELInformation (el: _Element): CAMELInformation {
    if (!_cached_decoder_for_CAMELInformation) { _cached_decoder_for_CAMELInformation = function (el: _Element): CAMELInformation {
    /* START_OF_SET_COMPONENT_DECLARATIONS */
    let cAMELDestinationNumber: OPTIONAL<OCTET_STRING[]>;
    let connectedNumber: OPTIONAL<OCTET_STRING>;
    let roamingNumber: OPTIONAL<OCTET_STRING>;
    let mscOutgoingTKGP: OPTIONAL<TrunkGroup>;
    let seizureTime: OPTIONAL<OCTET_STRING>;
    let answerTime: OPTIONAL<OCTET_STRING>;
    let releaseTime: OPTIONAL<OCTET_STRING>;
    let callDuration: OPTIONAL<INTEGER>;
    let dataVolume: OPTIONAL<INTEGER>;
    let cAMELInitCFIndicator: OPTIONAL<CAMELInitCFIndicator>;
    let causeForTerm: OPTIONAL<CauseForTerm>;
    let cAMELModification: OPTIONAL<ChangedParameters>;
    let freeFormatData: OPTIONAL<OCTET_STRING>;
    let diagnostics: OPTIONAL<HLRIntResult>;
    let freeFormatDataAppend: OPTIONAL<BOOLEAN>;
    let freeFormatData_2: OPTIONAL<OCTET_STRING>;
    let freeFormatDataAppend_2: OPTIONAL<BOOLEAN>;
    /* END_OF_SET_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: $.DecodingMap = {
        "cAMELDestinationNumber": (_el: _Element): void => { cAMELDestinationNumber = $._decode_implicit<OCTET_STRING[]>(() => $._decodeSequenceOf<OCTET_STRING>(() => $._decodeOctetString))(_el); },
        "connectedNumber": (_el: _Element): void => { connectedNumber = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "roamingNumber": (_el: _Element): void => { roamingNumber = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "mscOutgoingTKGP": (_el: _Element): void => { mscOutgoingTKGP = $._decode_explicit<TrunkGroup>(() => _decode_TrunkGroup)(_el); },
        "seizureTime": (_el: _Element): void => { seizureTime = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "answerTime": (_el: _Element): void => { answerTime = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "releaseTime": (_el: _Element): void => { releaseTime = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "callDuration": (_el: _Element): void => { callDuration = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "dataVolume": (_el: _Element): void => { dataVolume = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "cAMELInitCFIndicator": (_el: _Element): void => { cAMELInitCFIndicator = $._decode_implicit<CAMELInitCFIndicator>(() => _decode_CAMELInitCFIndicator)(_el); },
        "causeForTerm": (_el: _Element): void => { causeForTerm = $._decode_implicit<CauseForTerm>(() => _decode_CauseForTerm)(_el); },
        "cAMELModification": (_el: _Element): void => { cAMELModification = $._decode_implicit<ChangedParameters>(() => _decode_ChangedParameters)(_el); },
        "freeFormatData": (_el: _Element): void => { freeFormatData = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "diagnostics": (_el: _Element): void => { diagnostics = $._decode_explicit<HLRIntResult>(() => _decode_HLRIntResult)(_el); },
        "freeFormatDataAppend": (_el: _Element): void => { freeFormatDataAppend = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "freeFormatData-2": (_el: _Element): void => { freeFormatData_2 = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "freeFormatDataAppend-2": (_el: _Element): void => { freeFormatDataAppend_2 = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    $._parse_set(el, callbacks,
        _root_component_type_list_1_spec_for_CAMELInformation,
        _extension_additions_list_spec_for_CAMELInformation,
        _root_component_type_list_2_spec_for_CAMELInformation,
        undefined,
    );
    return new CAMELInformation( /* SET_CONSTRUCTOR_CALL */
        cAMELDestinationNumber,
        connectedNumber,
        roamingNumber,
        mscOutgoingTKGP,
        seizureTime,
        answerTime,
        releaseTime,
        callDuration,
        dataVolume,
        cAMELInitCFIndicator,
        causeForTerm,
        cAMELModification,
        freeFormatData,
        diagnostics,
        freeFormatDataAppend,
        freeFormatData_2,
        freeFormatDataAppend_2
    );
}; }
    return _cached_decoder_for_CAMELInformation(el);
}

let _cached_encoder_for_CAMELInformation: $.ASN1Encoder<CAMELInformation> | null = null;

/**
 * @summary Encodes a(n) CAMELInformation into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CAMELInformation, encoded as an ASN.1 Element.
 */
export
function _encode_CAMELInformation (value: CAMELInformation, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CAMELInformation) { _cached_encoder_for_CAMELInformation = function (value: CAMELInformation, _elGetter: $.ASN1Encoder<CAMELInformation>): _Element {
    const _components: _Element[] = [];
    if (value.cAMELDestinationNumber !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => $._encodeSequenceOf<OCTET_STRING>(() => $._encodeOctetString, $.BER), $.BER)(value.cAMELDestinationNumber, $.BER));
    }
    if (value.connectedNumber !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => $._encodeOctetString, $.BER)(value.connectedNumber, $.BER));
    }
    if (value.roamingNumber !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => $._encodeOctetString, $.BER)(value.roamingNumber, $.BER));
    }
    if (value.mscOutgoingTKGP !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 4, () => _encode_TrunkGroup, $.BER)(value.mscOutgoingTKGP, $.BER));
    }
    if (value.seizureTime !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 5, () => $._encodeOctetString, $.BER)(value.seizureTime, $.BER));
    }
    if (value.answerTime !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 6, () => $._encodeOctetString, $.BER)(value.answerTime, $.BER));
    }
    if (value.releaseTime !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 7, () => $._encodeOctetString, $.BER)(value.releaseTime, $.BER));
    }
    if (value.callDuration !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 8, () => $._encodeInteger, $.BER)(value.callDuration, $.BER));
    }
    if (value.dataVolume !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 9, () => $._encodeInteger, $.BER)(value.dataVolume, $.BER));
    }
    if (value.cAMELInitCFIndicator !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 10, () => _encode_CAMELInitCFIndicator, $.BER)(value.cAMELInitCFIndicator, $.BER));
    }
    if (value.causeForTerm !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 11, () => _encode_CauseForTerm, $.BER)(value.causeForTerm, $.BER));
    }
    if (value.cAMELModification !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 12, () => _encode_ChangedParameters, $.BER)(value.cAMELModification, $.BER));
    }
    if (value.freeFormatData !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 13, () => $._encodeOctetString, $.BER)(value.freeFormatData, $.BER));
    }
    if (value.diagnostics !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 14, () => _encode_HLRIntResult, $.BER)(value.diagnostics, $.BER));
    }
    if (value.freeFormatDataAppend !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 15, () => $._encodeBoolean, $.BER)(value.freeFormatDataAppend, $.BER));
    }
    if (value.freeFormatData_2 !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 16, () => $._encodeOctetString, $.BER)(value.freeFormatData_2, $.BER));
    }
    if (value.freeFormatDataAppend_2 !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 17, () => $._encodeBoolean, $.BER)(value.freeFormatDataAppend_2, $.BER));
    }
    return $._encodeSet(_components, $.BER);
}; }
    return _cached_encoder_for_CAMELInformation(value, elGetter);
}


/* eslint-enable */
