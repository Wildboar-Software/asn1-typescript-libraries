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
import { RecordType, _decode_RecordType, _encode_RecordType } from "../CSChargingDataTypes/RecordType.ta.mjs";
import { LCSClientType, _decode_LCSClientType, _encode_LCSClientType, _enum_for_LCSClientType } from "../CSChargingDataTypes/LCSClientType.ta.mjs";
import { LCSClientIdentity, _decode_LCSClientIdentity, _encode_LCSClientIdentity } from "../CSChargingDataTypes/LCSClientIdentity.ta.mjs";
import { LocationAreaAndCell, _decode_LocationAreaAndCell, _encode_LocationAreaAndCell } from "../CSChargingDataTypes/LocationAreaAndCell.ta.mjs";
import { HLRIntResult, _decode_HLRIntResult, _encode_HLRIntResult } from "../CSChargingDataTypes/HLRIntResult.ta.mjs";
import { SystemType, _decode_SystemType, _encode_SystemType, _enum_for_SystemType } from "../CSChargingDataTypes/SystemType.ta.mjs";
import { ManagementExtension, _decode_ManagementExtension, _encode_ManagementExtension } from "../CSChargingDataTypes/ManagementExtension.ta.mjs";
import { CauseForTerm, _decode_CauseForTerm, _encode_CauseForTerm } from "../CSChargingDataTypes/CauseForTerm.ta.mjs";


/**
 * @summary NILCSRecord
 * @description
 *
 * Network-induced location-request CDR. When enabled, the visited MSC
 * produces one for each network-induced location request, for example during
 * an emergency call. Clause 5.1.3.12 says it is generated when the MSC
 * receives the RANAP Location Report from the RNC.
 *
 * `emsDigits` and `emsKey` are the emergency-service routing digits and key,
 * present for an emergency call. The served IMSI, MSISDN, and IMEI are
 * present when the UE supplies them or, for the IMEI, when it is available.
 *
 * `causeForTerm` is why the location service ended. `diagnostics` and
 * `lcsCause` carry a more detailed failure or partial success when one is
 * known.
 *
 * Categories are M, C, OM, and OC as in TS 32.240 clause 5.4.
 *
 * 3GPP TS 32.250 V19.0.0 clauses 5.1.3.12 and 6.1.3.22.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NILCSRecord ::= SET {
 *    recordType          [0] IMPLICIT RecordType,
 *    recordingEntity     [1] IMPLICIT OCTET STRING ( SIZE( 1 .. 20 ) ),
 *    lcsClientType       [2] IMPLICIT LCSClientType OPTIONAL,
 *    lcsClientIdentity   [3] IMPLICIT LCSClientIdentity OPTIONAL,
 *    servedIMSI          [4] IMPLICIT OCTET STRING ( SIZE( 3 .. 8 ) ) OPTIONAL,
 *    servedMSISDN        [5] IMPLICIT OCTET STRING ( SIZE( 1 .. 20 ) ) ( SIZE( 1 .. 9 ) ) OPTIONAL,
 *    servedIMEI          [6] IMPLICIT OCTET STRING ( SIZE( 8 ) ) OPTIONAL,
 *    emsDigits           [7] IMPLICIT OCTET STRING ( SIZE( 1 .. 20 ) ) ( SIZE( 1 .. 9 ) ) OPTIONAL,
 *    emsKey              [8] IMPLICIT OCTET STRING ( SIZE( 1 .. 20 ) ) ( SIZE( 1 .. 9 ) ) OPTIONAL,
 *    lcsQos              [9] IMPLICIT OCTET STRING ( SIZE( 4 ) ) OPTIONAL,
 *    lcsPriority         [10] IMPLICIT OCTET STRING ( SIZE( 1 ) ) OPTIONAL,
 *    mlc-Number          [11] IMPLICIT OCTET STRING ( SIZE( 1 .. 20 ) ) ( SIZE( 1 .. 9 ) ) OPTIONAL,
 *    eventTimeStamp      [12] IMPLICIT OCTET STRING ( SIZE( 9 ) ),
 *    measureDuration     [13] IMPLICIT INTEGER OPTIONAL,
 *    location            [14] IMPLICIT LocationAreaAndCell OPTIONAL,
 *    locationEstimate    [15] IMPLICIT OCTET STRING ( SIZE( 1 .. 20 ) ) OPTIONAL,
 *    positioningData     [16] IMPLICIT OCTET STRING ( SIZE( 1 .. 33 ) ) OPTIONAL,
 *    lcsCause            [17] IMPLICIT OCTET STRING ( SIZE( 1 ) ) OPTIONAL,
 *    diagnostics         [18] HLRIntResult OPTIONAL,
 *    systemType          [19] IMPLICIT SystemType OPTIONAL,
 *    recordExtensions    [20] IMPLICIT SET  OF
 *       ManagementExtension OPTIONAL,
 *    causeForTerm        [21] IMPLICIT CauseForTerm}
 * ```
 * @class
 */
export
class NILCSRecord {
    /**
     * @summary `recordType`.
     * @description
     *
     * 2G and 3G mandatory. LCS-NI record.
     *
     * 3GPP TS 32.250 V19.0.0 clause 6.1.3.22.
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
     * @summary `recordingEntity`.
     * @description
     *
     * 2G and 3G mandatory. The E.164 number of the visited MSC producing the
     * record.
     *
     * 3GPP TS 32.250 V19.0.0 clause 6.1.3.22.
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
     * @summary `lcsClientType`.
     * @description
     *
     * 2G and 3G conditional. The type of the LCS client that invoked the LR, if
     * available.
     *
     * 3GPP TS 32.250 V19.0.0 clause 6.1.3.22.
     *
     * This field contains the type of the LCS Client as defined in TS 29.002
     * [214].
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.2.1.40.
     *
     * @public
     * @readonly
     */
    readonly lcsClientType: OPTIONAL<LCSClientType>;
    /**
     * @summary `lcsClientIdentity`.
     * @description
     *
     * 2G and 3G conditional. Further identification of the LCS client, if
     * available.
     *
     * 3GPP TS 32.250 V19.0.0 clause 6.1.3.22.
     *
     * This field contains further information on the LCS Client identity:
     * Client External ID; Client Dialled by MS ID; Client Internal ID.
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.2.1.39.
     *
     * @public
     * @readonly
     */
    readonly lcsClientIdentity: OPTIONAL<LCSClientIdentity>;
    /**
     * @summary `servedIMSI`.
     * @description
     *
     * 2G and 3G conditional. The IMSI of the calling party the LR is executed
     * for if supplied by the UE.
     *
     * 3GPP TS 32.250 V19.0.0 clause 6.1.3.22.
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
     * @summary `servedMSISDN`.
     * @description
     *
     * 2G and 3G conditional. The MSISDN of the calling party the LR is executed
     * for if supplied by the UE.
     *
     * 3GPP TS 32.250 V19.0.0 clause 6.1.3.22.
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
     * @summary `servedIMEI`.
     * @description
     *
     * 2G and 3G conditional. The IMEI of the calling party the LR is executed
     * for if available.
     *
     * 3GPP TS 32.250 V19.0.0 clause 6.1.3.22.
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
     * @summary `emsDigits`.
     * @description
     *
     * 2G and 3G operator-provisionable conditional. The emergency service
     * routing digits, if emergency call.
     *
     * 3GPP TS 32.250 V19.0.0 clause 6.1.3.22.
     *
     * This parameter only applies to location for an emergency services call in
     * North America and gives the North American Emergency Services Routing
     * Digits as defined in TS 29.002 [214].
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.2.1.19.
     *
     * @public
     * @readonly
     */
    readonly emsDigits: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `emsKey`.
     * @description
     *
     * 2G and 3G operator-provisionable conditional. The emergency service
     * routing key, if emergency call.
     *
     * 3GPP TS 32.250 V19.0.0 clause 6.1.3.22.
     *
     * This parameter only applies to location for an emergency services call in
     * North America and gives the North American Emergency Services Routing Key
     * as defined in TS 29.002 [214].
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.2.1.20.
     *
     * @public
     * @readonly
     */
    readonly emsKey: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `lcsQos`.
     * @description
     *
     * 2G and 3G conditional. QoS of the LR, if available.
     *
     * 3GPP TS 32.250 V19.0.0 clause 6.1.3.22.
     *
     * This information element defines the Quality of Service for a location
     * request as defined in TS 49.031 [227].
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.2.1.42.
     *
     * @public
     * @readonly
     */
    readonly lcsQos: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `lcsPriority`.
     * @description
     *
     * 2G and 3G conditional. Priority of the LR, if available.
     *
     * 3GPP TS 32.250 V19.0.0 clause 6.1.3.22.
     *
     * This parameter gives the priority of the location request as defined in
     * TS 49.031 [227]
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.2.1.41.
     *
     * @public
     * @readonly
     */
    readonly lcsPriority: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `mlc_Number`.
     * @description
     *
     * 2G and 3G conditional. The E.164 address of the involved GMLC, if
     * available.
     *
     * 3GPP TS 32.250 V19.0.0 clause 6.1.3.22.
     *
     * This parameter refers to the ISDN (E.164[308]) number of an MLC.
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.2.1.54.
     *
     * @public
     * @readonly
     */
    readonly mlc_Number: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `eventTimeStamp`.
     * @description
     *
     * 2G and 3G mandatory. The time at which the LR was received by the MSC.
     *
     * 3GPP TS 32.250 V19.0.0 clause 6.1.3.22.
     *
     * These fields contain the event time stamps relevant for each of the
     * individual record types. The call records may contain three significant
     * call handling time stamps: the time at which the resource in question was
     * seized (Seizure time); the time at which the call was answered or at
     * which charging commences (Answer time); the time at which the resource
     * was released (Release time). For both Mobile Originated and Mobile
     * Terminated calls, the Seizure time is the time at which the traffic
     * channel is allocated i.e. the time at which the ASSIGN COMMAND message is
     * sent to the MS. For Mobile Originated calls the Answer time is the time
     * at which the CONNECT message is sent to the calling party. For Mobile
     * Terminated calls the time at which the CONNECT message is received from
     * the called party. However, if the subscriber has subscribed to the advice
     * of charge charging level service, then the answer time shall be derived
     * from the time at which the FACILITY message is received from the MS
     * containing the acknowledgement of receipt of the AOC parameters.
     * Similarly, if the AOC parameters are changed during the call then the
     * change time recorded for a subscriber with AOC charging level is the
     * receipt of the FACILITY message from the MS. For a subscriber with AOC
     * information level the change time recorded is the time at which the
     * FACILITY is sent to the MS. Finally, in case of call re-establishment the
     * answer time is the time at which the new traffic channel is allocated by
     * the MSC i.e. when the ASSIGN COMMAND is sent to the MS.
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.2.1.24.
     *
     * @public
     * @readonly
     */
    readonly eventTimeStamp: OCTET_STRING;
    /**
     * @summary `measureDuration`.
     * @description
     *
     * 2G and 3G operator-provisionable mandatory. The duration of proceeding
     * the location request .
     *
     * 3GPP TS 32.250 V19.0.0 clause 6.1.3.22.
     *
     * This field contains the duration for the section of the location
     * measurement corresponding to the location request and the location report
     * messages.
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.2.1.52.
     *
     * @public
     * @readonly
     */
    readonly measureDuration: OPTIONAL<INTEGER>;
    /**
     * @summary `location`.
     * @description
     *
     * Table 6.1.3.22 does not list a location on the LCS-NI record. The LCS-MT
     * record does carry the LAC, CI, and MCC+MNC where the request was
     * received, and that field applies to 2G only. 3GPP TS 32.250 V19.0.0
     * clauses 6.1.3.22 and 6.1.3.20.
     *
     * @public
     * @readonly
     */
    readonly location: OPTIONAL<LocationAreaAndCell>;
    /**
     * @summary `locationEstimate`.
     * @description
     *
     * 2G and 3G operator-provisionable conditional. The location estimate for
     * the subscriber if contained in geographic position and the LR was
     * successful.
     *
     * 3GPP TS 32.250 V19.0.0 clause 6.1.3.22.
     *
     * The Location Estimate field is providing an estimate of a geographic
     * location of a target MS according to TS 29.002 [214].
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.2.1.45.
     *
     * @public
     * @readonly
     */
    readonly locationEstimate: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `positioningData`.
     * @description
     *
     * 2G and 3G conditional. The positioning method used or attempted, if
     * available.
     *
     * 3GPP TS 32.250 V19.0.0 clause 6.1.3.22.
     *
     * This information element is providing positioning data associated with a
     * successful or unsuccessful location attempt for a target MS according TS
     * 49.031 [227].
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.2.1.65 and clause 5.1.2.1.66.
     *
     * @public
     * @readonly
     */
    readonly positioningData: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `lcsCause`.
     * @description
     *
     * 2G and 3G conditional. The result of the LR if any failure or partial
     * success happened as known at the radio interface.
     *
     * 3GPP TS 32.250 V19.0.0 clause 6.1.3.22.
     *
     * The LCS Cause parameter provides the reason for an unsuccessful location
     * request according TS 49.031 [227].
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.2.1.38.
     *
     * @public
     * @readonly
     */
    readonly lcsCause: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `diagnostics`.
     * @description
     *
     * 2G and 3G conditional. A more detailed information about the Cause for
     * Termination if any failure or partial success happened.
     *
     * 3GPP TS 32.250 V19.0.0 clause 6.1.3.22.
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
     * @summary `systemType`.
     * @description
     *
     * 2G not applicable, 3G mandatory. This field indicates the use of GERAN or
     * UTRAN at the time of the LCS request. This field is present when either
     * the UTRAN or GERAN air-interface is used on call set-up.
     *
     * 3GPP TS 32.250 V19.0.0 clause 6.1.3.22.
     *
     * This field indicates the use of GERAN, UTRAN (or a value of unknown).
     * This field is present when either the UTRAN or GERAN air-interface is
     * used on call set-up. For an open CDR in a 2G NE (responsible for the
     * CDR), the field is not present (even if the call is handed off to a 3G
     * air interface). For a CDR in a 3G NE (responsible for the CDR), the value
     * unknown shall be used after handover.
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.2.1.91.
     *
     * @public
     * @readonly
     */
    readonly systemType: OPTIONAL<SystemType>;
    /**
     * @summary `recordExtensions`.
     * @description
     *
     * 2G and 3G operator-provisionable conditional. A set of network/
     * manufacturer specific extensions to the record.
     *
     * 3GPP TS 32.250 V19.0.0 clause 6.1.3.22.
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
     * @summary `causeForTerm`.
     * @description
     *
     * 2G and 3G mandatory. The reason for the termination of the location
     * service.
     *
     * 3GPP TS 32.250 V19.0.0 clause 6.1.3.22.
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

    constructor (
        recordType: RecordType,
        recordingEntity: OCTET_STRING,
        lcsClientType: OPTIONAL<LCSClientType>,
        lcsClientIdentity: OPTIONAL<LCSClientIdentity>,
        servedIMSI: OPTIONAL<OCTET_STRING>,
        servedMSISDN: OPTIONAL<OCTET_STRING>,
        servedIMEI: OPTIONAL<OCTET_STRING>,
        emsDigits: OPTIONAL<OCTET_STRING>,
        emsKey: OPTIONAL<OCTET_STRING>,
        lcsQos: OPTIONAL<OCTET_STRING>,
        lcsPriority: OPTIONAL<OCTET_STRING>,
        mlc_Number: OPTIONAL<OCTET_STRING>,
        eventTimeStamp: OCTET_STRING,
        measureDuration: OPTIONAL<INTEGER>,
        location: OPTIONAL<LocationAreaAndCell>,
        locationEstimate: OPTIONAL<OCTET_STRING>,
        positioningData: OPTIONAL<OCTET_STRING>,
        lcsCause: OPTIONAL<OCTET_STRING>,
        diagnostics: OPTIONAL<HLRIntResult>,
        systemType: OPTIONAL<SystemType>,
        recordExtensions: OPTIONAL<ManagementExtension[]>,
        causeForTerm: CauseForTerm
    ) {
        this.recordType = recordType;
        this.recordingEntity = recordingEntity;
        this.lcsClientType = lcsClientType;
        this.lcsClientIdentity = lcsClientIdentity;
        this.servedIMSI = servedIMSI;
        this.servedMSISDN = servedMSISDN;
        this.servedIMEI = servedIMEI;
        this.emsDigits = emsDigits;
        this.emsKey = emsKey;
        this.lcsQos = lcsQos;
        this.lcsPriority = lcsPriority;
        this.mlc_Number = mlc_Number;
        this.eventTimeStamp = eventTimeStamp;
        this.measureDuration = measureDuration;
        this.location = location;
        this.locationEstimate = locationEstimate;
        this.positioningData = positioningData;
        this.lcsCause = lcsCause;
        this.diagnostics = diagnostics;
        this.systemType = systemType;
        this.recordExtensions = recordExtensions;
        this.causeForTerm = causeForTerm;
    
        if ((this.recordingEntity.length < 1 || this.recordingEntity.length > 20)) {
            throw new ASN1SizeError("NILCSRecord.recordingEntity violates SIZE constraint");
        }
        if (this.servedIMSI !== undefined && (this.servedIMSI.length < 3 || this.servedIMSI.length > 8)) {
            throw new ASN1SizeError("NILCSRecord.servedIMSI violates SIZE constraint");
        }
        if (this.servedMSISDN !== undefined && (this.servedMSISDN.length < 1 || this.servedMSISDN.length > 9)) {
            throw new ASN1SizeError("NILCSRecord.servedMSISDN violates SIZE constraint");
        }
        if (this.servedIMEI !== undefined && (this.servedIMEI.length !== 8)) {
            throw new ASN1SizeError("NILCSRecord.servedIMEI violates SIZE constraint");
        }
        if (this.emsDigits !== undefined && (this.emsDigits.length < 1 || this.emsDigits.length > 9)) {
            throw new ASN1SizeError("NILCSRecord.emsDigits violates SIZE constraint");
        }
        if (this.emsKey !== undefined && (this.emsKey.length < 1 || this.emsKey.length > 9)) {
            throw new ASN1SizeError("NILCSRecord.emsKey violates SIZE constraint");
        }
        if (this.lcsQos !== undefined && (this.lcsQos.length !== 4)) {
            throw new ASN1SizeError("NILCSRecord.lcsQos violates SIZE constraint");
        }
        if (this.lcsPriority !== undefined && (this.lcsPriority.length !== 1)) {
            throw new ASN1SizeError("NILCSRecord.lcsPriority violates SIZE constraint");
        }
        if (this.mlc_Number !== undefined && (this.mlc_Number.length < 1 || this.mlc_Number.length > 9)) {
            throw new ASN1SizeError("NILCSRecord.mlc_Number violates SIZE constraint");
        }
        if ((this.eventTimeStamp.length !== 9)) {
            throw new ASN1SizeError("NILCSRecord.eventTimeStamp violates SIZE constraint");
        }
        if (this.locationEstimate !== undefined && (this.locationEstimate.length < 1 || this.locationEstimate.length > 20)) {
            throw new ASN1SizeError("NILCSRecord.locationEstimate violates SIZE constraint");
        }
        if (this.positioningData !== undefined && (this.positioningData.length < 1 || this.positioningData.length > 33)) {
            throw new ASN1SizeError("NILCSRecord.positioningData violates SIZE constraint");
        }
        if (this.lcsCause !== undefined && (this.lcsCause.length !== 1)) {
            throw new ASN1SizeError("NILCSRecord.lcsCause violates SIZE constraint");
        }
    }

    /**
     * @summary Restructures an object into a NILCSRecord
     * @description
     *
     * This takes an `object` and converts it to a `NILCSRecord`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `NILCSRecord`.
     * @returns {NILCSRecord}
     */
    public static _from_object (_o: { [_K in keyof (NILCSRecord)]: (NILCSRecord)[_K] }): NILCSRecord {
        return new NILCSRecord(_o.recordType, _o.recordingEntity, _o.lcsClientType, _o.lcsClientIdentity, _o.servedIMSI, _o.servedMSISDN, _o.servedIMEI, _o.emsDigits, _o.emsKey, _o.lcsQos, _o.lcsPriority, _o.mlc_Number, _o.eventTimeStamp, _o.measureDuration, _o.location, _o.locationEstimate, _o.positioningData, _o.lcsCause, _o.diagnostics, _o.systemType, _o.recordExtensions, _o.causeForTerm);
    }

        /**
         * @summary The enum used as the type of the component `lcsClientType`
         * @public
         * @static
         */

    public static _enum_for_lcsClientType = _enum_for_LCSClientType;        /**
         * @summary The enum used as the type of the component `systemType`
         * @public
         * @static
         */

    public static _enum_for_systemType = _enum_for_SystemType;
}

/**
 * @summary The Leading Root Component Types of NILCSRecord
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading
 * root component type list of a SET or SEQUENCE.
 * @constant
 */
export
const _root_component_type_list_1_spec_for_NILCSRecord: $.ComponentSpec[] = [
    new $.ComponentSpec("recordType", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("recordingEntity", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("lcsClientType", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("lcsClientIdentity", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("servedIMSI", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("servedMSISDN", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("servedIMEI", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("emsDigits", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("emsKey", true, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("lcsQos", true, $.hasTag(_TagClass.context, 9)),
    new $.ComponentSpec("lcsPriority", true, $.hasTag(_TagClass.context, 10)),
    new $.ComponentSpec("mlc-Number", true, $.hasTag(_TagClass.context, 11)),
    new $.ComponentSpec("eventTimeStamp", false, $.hasTag(_TagClass.context, 12)),
    new $.ComponentSpec("measureDuration", true, $.hasTag(_TagClass.context, 13)),
    new $.ComponentSpec("location", true, $.hasTag(_TagClass.context, 14)),
    new $.ComponentSpec("locationEstimate", true, $.hasTag(_TagClass.context, 15)),
    new $.ComponentSpec("positioningData", true, $.hasTag(_TagClass.context, 16)),
    new $.ComponentSpec("lcsCause", true, $.hasTag(_TagClass.context, 17)),
    new $.ComponentSpec("diagnostics", true, $.hasTag(_TagClass.context, 18)),
    new $.ComponentSpec("systemType", true, $.hasTag(_TagClass.context, 19)),
    new $.ComponentSpec("recordExtensions", true, $.hasTag(_TagClass.context, 20)),
    new $.ComponentSpec("causeForTerm", false, $.hasTag(_TagClass.context, 21))
];

/**
 * @summary The Trailing Root Component Types of NILCSRecord
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing
 * root component type list of a SET or SEQUENCE.
 * @constant
 */
export
const _root_component_type_list_2_spec_for_NILCSRecord: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of NILCSRecord
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension
 * addition component type list of a SET or SEQUENCE.
 * @constant
 */
export
const _extension_additions_list_spec_for_NILCSRecord: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_NILCSRecord: $.ASN1Decoder<NILCSRecord> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) NILCSRecord
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_NILCSRecord (el: _Element): NILCSRecord {
    if (!_cached_decoder_for_NILCSRecord) { _cached_decoder_for_NILCSRecord = function (el: _Element): NILCSRecord {
    /* START_OF_SET_COMPONENT_DECLARATIONS */
    let recordType!: RecordType;
    let recordingEntity!: OCTET_STRING;
    let lcsClientType: OPTIONAL<LCSClientType>;
    let lcsClientIdentity: OPTIONAL<LCSClientIdentity>;
    let servedIMSI: OPTIONAL<OCTET_STRING>;
    let servedMSISDN: OPTIONAL<OCTET_STRING>;
    let servedIMEI: OPTIONAL<OCTET_STRING>;
    let emsDigits: OPTIONAL<OCTET_STRING>;
    let emsKey: OPTIONAL<OCTET_STRING>;
    let lcsQos: OPTIONAL<OCTET_STRING>;
    let lcsPriority: OPTIONAL<OCTET_STRING>;
    let mlc_Number: OPTIONAL<OCTET_STRING>;
    let eventTimeStamp!: OCTET_STRING;
    let measureDuration: OPTIONAL<INTEGER>;
    let location: OPTIONAL<LocationAreaAndCell>;
    let locationEstimate: OPTIONAL<OCTET_STRING>;
    let positioningData: OPTIONAL<OCTET_STRING>;
    let lcsCause: OPTIONAL<OCTET_STRING>;
    let diagnostics: OPTIONAL<HLRIntResult>;
    let systemType: OPTIONAL<SystemType>;
    let recordExtensions: OPTIONAL<ManagementExtension[]>;
    let causeForTerm!: CauseForTerm;
    /* END_OF_SET_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: $.DecodingMap = {
        "recordType": (_el: _Element): void => { recordType = $._decode_implicit<RecordType>(() => _decode_RecordType)(_el); },
        "recordingEntity": (_el: _Element): void => { recordingEntity = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "lcsClientType": (_el: _Element): void => { lcsClientType = $._decode_implicit<LCSClientType>(() => _decode_LCSClientType)(_el); },
        "lcsClientIdentity": (_el: _Element): void => { lcsClientIdentity = $._decode_implicit<LCSClientIdentity>(() => _decode_LCSClientIdentity)(_el); },
        "servedIMSI": (_el: _Element): void => { servedIMSI = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "servedMSISDN": (_el: _Element): void => { servedMSISDN = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "servedIMEI": (_el: _Element): void => { servedIMEI = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "emsDigits": (_el: _Element): void => { emsDigits = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "emsKey": (_el: _Element): void => { emsKey = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "lcsQos": (_el: _Element): void => { lcsQos = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "lcsPriority": (_el: _Element): void => { lcsPriority = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "mlc-Number": (_el: _Element): void => { mlc_Number = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "eventTimeStamp": (_el: _Element): void => { eventTimeStamp = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "measureDuration": (_el: _Element): void => { measureDuration = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "location": (_el: _Element): void => { location = $._decode_implicit<LocationAreaAndCell>(() => _decode_LocationAreaAndCell)(_el); },
        "locationEstimate": (_el: _Element): void => { locationEstimate = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "positioningData": (_el: _Element): void => { positioningData = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "lcsCause": (_el: _Element): void => { lcsCause = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "diagnostics": (_el: _Element): void => { diagnostics = $._decode_explicit<HLRIntResult>(() => _decode_HLRIntResult)(_el); },
        "systemType": (_el: _Element): void => { systemType = $._decode_implicit<SystemType>(() => _decode_SystemType)(_el); },
        "recordExtensions": (_el: _Element): void => { recordExtensions = $._decode_implicit<ManagementExtension[]>(() => $._decodeSetOf<ManagementExtension>(() => _decode_ManagementExtension))(_el); },
        "causeForTerm": (_el: _Element): void => { causeForTerm = $._decode_implicit<CauseForTerm>(() => _decode_CauseForTerm)(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    $._parse_set(el, callbacks,
        _root_component_type_list_1_spec_for_NILCSRecord,
        _extension_additions_list_spec_for_NILCSRecord,
        _root_component_type_list_2_spec_for_NILCSRecord,
        undefined,
    );
    return new NILCSRecord( /* SET_CONSTRUCTOR_CALL */
        recordType,
        recordingEntity,
        lcsClientType,
        lcsClientIdentity,
        servedIMSI,
        servedMSISDN,
        servedIMEI,
        emsDigits,
        emsKey,
        lcsQos,
        lcsPriority,
        mlc_Number,
        eventTimeStamp,
        measureDuration,
        location,
        locationEstimate,
        positioningData,
        lcsCause,
        diagnostics,
        systemType,
        recordExtensions,
        causeForTerm
    );
}; }
    return _cached_decoder_for_NILCSRecord(el);
}

let _cached_encoder_for_NILCSRecord: $.ASN1Encoder<NILCSRecord> | null = null;

/**
 * @summary Encodes a(n) NILCSRecord into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NILCSRecord, encoded as an ASN.1 Element.
 */
export
function _encode_NILCSRecord (value: NILCSRecord, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_NILCSRecord) { _cached_encoder_for_NILCSRecord = function (value: NILCSRecord, _elGetter: $.ASN1Encoder<NILCSRecord>): _Element {
    const _components: _Element[] = [];
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_RecordType, $.BER)(value.recordType, $.BER));
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeOctetString, $.BER)(value.recordingEntity, $.BER));
    if (value.lcsClientType !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => _encode_LCSClientType, $.BER)(value.lcsClientType, $.BER));
    }
    if (value.lcsClientIdentity !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => _encode_LCSClientIdentity, $.BER)(value.lcsClientIdentity, $.BER));
    }
    if (value.servedIMSI !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 4, () => $._encodeOctetString, $.BER)(value.servedIMSI, $.BER));
    }
    if (value.servedMSISDN !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 5, () => $._encodeOctetString, $.BER)(value.servedMSISDN, $.BER));
    }
    if (value.servedIMEI !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 6, () => $._encodeOctetString, $.BER)(value.servedIMEI, $.BER));
    }
    if (value.emsDigits !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 7, () => $._encodeOctetString, $.BER)(value.emsDigits, $.BER));
    }
    if (value.emsKey !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 8, () => $._encodeOctetString, $.BER)(value.emsKey, $.BER));
    }
    if (value.lcsQos !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 9, () => $._encodeOctetString, $.BER)(value.lcsQos, $.BER));
    }
    if (value.lcsPriority !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 10, () => $._encodeOctetString, $.BER)(value.lcsPriority, $.BER));
    }
    if (value.mlc_Number !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 11, () => $._encodeOctetString, $.BER)(value.mlc_Number, $.BER));
    }
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 12, () => $._encodeOctetString, $.BER)(value.eventTimeStamp, $.BER));
    if (value.measureDuration !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 13, () => $._encodeInteger, $.BER)(value.measureDuration, $.BER));
    }
    if (value.location !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 14, () => _encode_LocationAreaAndCell, $.BER)(value.location, $.BER));
    }
    if (value.locationEstimate !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 15, () => $._encodeOctetString, $.BER)(value.locationEstimate, $.BER));
    }
    if (value.positioningData !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 16, () => $._encodeOctetString, $.BER)(value.positioningData, $.BER));
    }
    if (value.lcsCause !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 17, () => $._encodeOctetString, $.BER)(value.lcsCause, $.BER));
    }
    if (value.diagnostics !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 18, () => _encode_HLRIntResult, $.BER)(value.diagnostics, $.BER));
    }
    if (value.systemType !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 19, () => _encode_SystemType, $.BER)(value.systemType, $.BER));
    }
    if (value.recordExtensions !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 20, () => $._encodeSetOf<ManagementExtension>(() => _encode_ManagementExtension, $.BER), $.BER)(value.recordExtensions, $.BER));
    }
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 21, () => _encode_CauseForTerm, $.BER)(value.causeForTerm, $.BER));
    return $._encodeSet(_components, $.BER);
}; }
    return _cached_encoder_for_NILCSRecord(value, elGetter);
}


/* eslint-enable */
