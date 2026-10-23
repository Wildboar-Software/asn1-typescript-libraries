/* eslint-disable */
import {
    BOOLEAN,
    GraphicString,
    INTEGER,
    NULL,
    OCTET_STRING,
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1SizeError,
    ASN1OverflowError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { RecordType, _decode_RecordType, _encode_RecordType } from "../CSChargingDataTypes/RecordType.ta.mjs";
import { TrunkGroup, _decode_TrunkGroup, _encode_TrunkGroup } from "../CSChargingDataTypes/TrunkGroup.ta.mjs";
import { LocationAreaAndCell, _decode_LocationAreaAndCell, _encode_LocationAreaAndCell } from "../CSChargingDataTypes/LocationAreaAndCell.ta.mjs";
import { LocationChange, _decode_LocationChange, _encode_LocationChange } from "../CSChargingDataTypes/LocationChange.ta.mjs";
import { BasicService, _decode_BasicService, _encode_BasicService } from "../CSChargingDataTypes/BasicService.ta.mjs";
import { TransparencyInd, _decode_TransparencyInd, _encode_TransparencyInd, _enum_for_TransparencyInd } from "../CSChargingDataTypes/TransparencyInd.ta.mjs";
import { ChangeOfService, _decode_ChangeOfService, _encode_ChangeOfService } from "../CSChargingDataTypes/ChangeOfService.ta.mjs";
import { SuppServiceUsed, _decode_SuppServiceUsed, _encode_SuppServiceUsed } from "../CSChargingDataTypes/SuppServiceUsed.ta.mjs";
import { AOCParameters, _decode_AOCParameters, _encode_AOCParameters } from "../CSChargingDataTypes/AOCParameters.ta.mjs";
import { AOCParmChange, _decode_AOCParmChange, _encode_AOCParmChange } from "../CSChargingDataTypes/AOCParmChange.ta.mjs";
import { ChangeOfClassmark, _decode_ChangeOfClassmark, _encode_ChangeOfClassmark } from "../CSChargingDataTypes/ChangeOfClassmark.ta.mjs";
import { RadioChanRequested, _decode_RadioChanRequested, _encode_RadioChanRequested, _enum_for_RadioChanRequested } from "../CSChargingDataTypes/RadioChanRequested.ta.mjs";
import { TrafficChannel, _decode_TrafficChannel, _encode_TrafficChannel, _enum_for_TrafficChannel } from "../CSChargingDataTypes/TrafficChannel.ta.mjs";
import { ChangeOfRadioChannel, _decode_ChangeOfRadioChannel, _encode_ChangeOfRadioChannel } from "../CSChargingDataTypes/ChangeOfRadioChannel.ta.mjs";
import { CauseForTerm, _decode_CauseForTerm, _encode_CauseForTerm } from "../CSChargingDataTypes/CauseForTerm.ta.mjs";
import { HLRIntResult, _decode_HLRIntResult, _encode_HLRIntResult } from "../CSChargingDataTypes/HLRIntResult.ta.mjs";
import { AdditionalChgInfo, _decode_AdditionalChgInfo, _encode_AdditionalChgInfo } from "../CSChargingDataTypes/AdditionalChgInfo.ta.mjs";
import { ManagementExtension, _decode_ManagementExtension, _encode_ManagementExtension } from "../CSChargingDataTypes/ManagementExtension.ta.mjs";
import { CAMELInitCFIndicator, _decode_CAMELInitCFIndicator, _encode_CAMELInitCFIndicator, _enum_for_CAMELInitCFIndicator } from "../CSChargingDataTypes/CAMELInitCFIndicator.ta.mjs";
import { DefaultCallHandling, _decode_DefaultCallHandling, _encode_DefaultCallHandling, _enum_for_DefaultCallHandling } from "../CSChargingDataTypes/DefaultCallHandling.ta.mjs";
import { HSCSDParmsChange, _decode_HSCSDParmsChange, _encode_HSCSDParmsChange } from "../CSChargingDataTypes/HSCSDParmsChange.ta.mjs";
import { Fnur, _decode_Fnur, _encode_Fnur, _enum_for_Fnur } from "../CSChargingDataTypes/Fnur.ta.mjs";
import { AiurRequested, _decode_AiurRequested, _encode_AiurRequested, _enum_for_AiurRequested } from "../CSChargingDataTypes/AiurRequested.ta.mjs";
import { ChannelCoding, _decode_ChannelCoding, _encode_ChannelCoding, _enum_for_ChannelCoding } from "../CSChargingDataTypes/ChannelCoding.ta.mjs";
import { MOCallRecord_levelOfCAMELService, _decode_MOCallRecord_levelOfCAMELService, _encode_MOCallRecord_levelOfCAMELService } from "../CSChargingDataTypes/MOCallRecord-levelOfCAMELService.ta.mjs";
import { CAMELInformation, _decode_CAMELInformation, _encode_CAMELInformation } from "../CSChargingDataTypes/CAMELInformation.ta.mjs";
import { SystemType, _decode_SystemType, _encode_SystemType, _enum_for_SystemType } from "../CSChargingDataTypes/SystemType.ta.mjs";
import { MOCallRecord_lrnSoInd, _decode_MOCallRecord_lrnSoInd, _encode_MOCallRecord_lrnSoInd } from "../CSChargingDataTypes/MOCallRecord-lrnSoInd.ta.mjs";
import { MOCallRecord_lrnQuryStatus, _decode_MOCallRecord_lrnQuryStatus, _encode_MOCallRecord_lrnQuryStatus } from "../CSChargingDataTypes/MOCallRecord-lrnQuryStatus.ta.mjs";
import { MOCallRecord_jIPSoInd, _decode_MOCallRecord_jIPSoInd, _encode_MOCallRecord_jIPSoInd } from "../CSChargingDataTypes/MOCallRecord-jIPSoInd.ta.mjs";
import { MOCallRecord_jIPQuryStatus, _decode_MOCallRecord_jIPQuryStatus, _encode_MOCallRecord_jIPQuryStatus } from "../CSChargingDataTypes/MOCallRecord-jIPQuryStatus.ta.mjs";
import { PartialRecordType, _decode_PartialRecordType, _encode_PartialRecordType, _enum_for_PartialRecordType } from "../CSChargingDataTypes/PartialRecordType.ta.mjs";
import { GuaranteedBitRate, _decode_GuaranteedBitRate, _encode_GuaranteedBitRate, _enum_for_GuaranteedBitRate } from "../CSChargingDataTypes/GuaranteedBitRate.ta.mjs";
import { MaximumBitRate, _decode_MaximumBitRate, _encode_MaximumBitRate, _enum_for_MaximumBitRate } from "../CSChargingDataTypes/MaximumBitRate.ta.mjs";
import { ReasonForServiceChange, _decode_ReasonForServiceChange, _encode_ReasonForServiceChange, _enum_for_ReasonForServiceChange } from "../CSChargingDataTypes/ReasonForServiceChange.ta.mjs";


/**
 * @summary MOCallRecord
 * @description
 *
 * Mobile-originated call CDR. When MOC generation is enabled, the
 * originating MSC creates one record for each outgoing call attempt (clause
 * 6.1.3.1), including each emergency call attempt (clause 6.1.3.2). The
 * forwarding MSC creates one for the forwarded leg (clauses 5.1.3.4 and
 * 6.1.3.3).
 *
 * An MSC that provides CAMEL Call Party Handling uses this record instead of
 * the ordinary MOC or forwarding record, even when the individual call uses
 * no CPH operation. The incoming leg stays in the main body. Each outgoing
 * leg of the same call segment is one `cAMELCallLegInformation` element. A
 * further leg in a new call segment is another CDR of this type (clauses
 * 5.1.3.14 and 6.1.3.23 to 6.1.3.26). A gsmSCF-initiated call has no
 * incoming leg, so the main body does not carry leg information. The CDR
 * closes when the last leg leaves the call segment.
 *
 * Partial records of one connection share `callReference` and a running
 * `sequenceNumber`. Opening a new partial record sets the previous record's
 * `causeForTerm` to `partialRecord`. A radio-link failure followed by
 * successful re-establishment uses `partialRecordCallReestablishment`
 * instead, and the time spent re-establishing is excluded from the
 * chargeable duration (clauses 5.1.3.6 and 5.1.3.9).
 *
 * Field categories follow TS 32.240 clause 5.4, as cited by clause 6.1.3.0.
 * M is mandatory, C conditional, OM operator-provisionable mandatory, and OC
 * operator-provisionable conditional. A dash means the parameter does not
 * apply to that access.
 *
 * 3GPP TS 32.250 V19.0.0 clauses 5.1.3.4, 5.1.3.6, 5.1.3.9, 5.1.3.14,
 * 6.1.3.1, 6.1.3.2, 6.1.3.3, 6.1.3.23, 6.1.3.24, 6.1.3.25, and 6.1.3.26.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MOCallRecord ::= SET {
 *    recordType                [0] IMPLICIT RecordType,
 *    servedIMSI                [1] IMPLICIT OCTET STRING ( SIZE( 3 .. 8 ) ) OPTIONAL,
 *    servedIMEI                [2] IMPLICIT OCTET STRING ( SIZE( 8 ) ) OPTIONAL,
 *    servedMSISDN              [3] IMPLICIT OCTET STRING ( SIZE( 1 .. 20 ) ) ( SIZE( 1 .. 9 ) ) OPTIONAL,
 *    callingNumber             [4] IMPLICIT OCTET STRING OPTIONAL,
 *    calledNumber              [5] IMPLICIT OCTET STRING OPTIONAL,
 *    translatedNumber          [6] IMPLICIT OCTET STRING OPTIONAL,
 *    connectedNumber           [7] IMPLICIT OCTET STRING OPTIONAL,
 *    roamingNumber             [8] IMPLICIT OCTET STRING ( SIZE( 1 .. 20 ) ) ( SIZE( 1 .. 9 ) ) OPTIONAL,
 *    recordingEntity           [9] IMPLICIT OCTET STRING ( SIZE( 1 .. 20 ) ),
 *    mscIncomingTKGP           [10] TrunkGroup OPTIONAL,
 *    mscOutgoingTKGP           [11] TrunkGroup OPTIONAL,
 *    location                  [12] IMPLICIT LocationAreaAndCell OPTIONAL,
 *    changeOfLocation          [13] IMPLICIT SEQUENCE  OF
 *       LocationChange OPTIONAL,
 *    basicService              [14] BasicService OPTIONAL,
 *    transparencyIndicator     [15] IMPLICIT TransparencyInd OPTIONAL,
 *    changeOfService           [16] IMPLICIT SEQUENCE  OF
 *       ChangeOfService OPTIONAL,
 *    supplServicesUsed         [17] IMPLICIT SEQUENCE  OF
 *       SuppServiceUsed OPTIONAL,
 *    aocParameters             [18] IMPLICIT AOCParameters OPTIONAL,
 *    changeOfAOCParms          [19] IMPLICIT SEQUENCE  OF
 *       AOCParmChange OPTIONAL,
 *    msClassmark               [20] IMPLICIT OCTET STRING OPTIONAL,
 *    changeOfClassmark         [21] IMPLICIT ChangeOfClassmark OPTIONAL,
 *    seizureTime               [22] IMPLICIT OCTET STRING ( SIZE( 9 ) ) OPTIONAL,
 *    answerTime                [23] IMPLICIT OCTET STRING ( SIZE( 9 ) ) OPTIONAL,
 *    releaseTime               [24] IMPLICIT OCTET STRING ( SIZE( 9 ) ) OPTIONAL,
 *    callDuration              [25] IMPLICIT INTEGER,
 *    dataVolume                [26] IMPLICIT INTEGER OPTIONAL,
 *    radioChanRequested        [27] IMPLICIT RadioChanRequested OPTIONAL,
 *    radioChanUsed             [28] IMPLICIT TrafficChannel OPTIONAL,
 *    changeOfRadioChan         [29] IMPLICIT ChangeOfRadioChannel OPTIONAL,
 *    causeForTerm              [30] IMPLICIT CauseForTerm,
 *    diagnostics               [31] HLRIntResult OPTIONAL,
 *    callReference             [32] IMPLICIT OCTET STRING ( SIZE( 1 .. 8 ) ),
 *    sequenceNumber            [33] IMPLICIT INTEGER OPTIONAL,
 *    additionalChgInfo         [34] IMPLICIT AdditionalChgInfo OPTIONAL,
 *    recordExtensions          [35] IMPLICIT SET  OF
 *       ManagementExtension OPTIONAL,
 *    gsm-SCFAddress            [36] IMPLICIT OCTET STRING ( SIZE( 1 .. 20 ) ) ( SIZE( 1 .. 9 ) ) OPTIONAL,
 *    serviceKey                [37] IMPLICIT INTEGER ( 0 .. 2147483647 ) OPTIONAL,
 *    networkCallReference      [38] IMPLICIT OCTET STRING ( SIZE( 1 .. 8 ) ) OPTIONAL,
 *    mSCAddress                [39] IMPLICIT OCTET STRING ( SIZE( 1 .. 20 ) ) OPTIONAL,
 *    cAMELInitCFIndicator      [40] IMPLICIT CAMELInitCFIndicator OPTIONAL,
 *    defaultCallHandling       [41] IMPLICIT DefaultCallHandling OPTIONAL,
 *    hSCSDChanRequested        [42] IMPLICIT INTEGER OPTIONAL,
 *    hSCSDChanAllocated        [43] IMPLICIT INTEGER OPTIONAL,
 *    changeOfHSCSDParms        [44] IMPLICIT SEQUENCE  OF
 *       HSCSDParmsChange OPTIONAL,
 *    fnur                      [45] IMPLICIT Fnur OPTIONAL,
 *    aiurRequested             [46] IMPLICIT AiurRequested OPTIONAL,
 *    chanCodingsAcceptable     [47] IMPLICIT SEQUENCE  OF
 *       ChannelCoding OPTIONAL,
 *    chanCodingUsed            [48] IMPLICIT ChannelCoding OPTIONAL,
 *    speechVersionSupported    [49] IMPLICIT OCTET STRING ( SIZE( 1 ) ) OPTIONAL,
 *    speechVersionUsed         [50] IMPLICIT OCTET STRING ( SIZE( 1 ) ) OPTIONAL,
 *    numberOfDPEncountered     [51] IMPLICIT INTEGER OPTIONAL,
 *    levelOfCAMELService       [52] IMPLICIT BIT STRING {
 *       basic  (0 ),
 *       callDurationSupervision  (1 ),
 *       onlineCharging  (2 )} OPTIONAL,
 *    freeFormatData            [53] IMPLICIT OCTET STRING ( SIZE( 1 .. 160 ) ) OPTIONAL,
 *    cAMELCallLegInformation   [54] IMPLICIT SEQUENCE  OF
 *       CAMELInformation OPTIONAL,
 *    freeFormatDataAppend      [55] IMPLICIT BOOLEAN OPTIONAL,
 *    defaultCallHandling-2     [56] IMPLICIT DefaultCallHandling OPTIONAL,
 *    gsm-SCFAddress-2          [57] IMPLICIT OCTET STRING ( SIZE( 1 .. 20 ) ) ( SIZE( 1 .. 9 ) ) OPTIONAL,
 *    serviceKey-2              [58] IMPLICIT INTEGER ( 0 .. 2147483647 ) OPTIONAL,
 *    freeFormatData-2          [59] IMPLICIT OCTET STRING ( SIZE( 1 .. 160 ) ) OPTIONAL,
 *    freeFormatDataAppend-2    [60] IMPLICIT BOOLEAN OPTIONAL,
 *    systemType                [61] IMPLICIT SystemType OPTIONAL,
 *    rateIndication            [62] IMPLICIT OCTET STRING ( SIZE( 1 ) ) OPTIONAL,
 *    locationRoutNum           [63] IMPLICIT OCTET STRING ( SIZE( 5 ) ) OPTIONAL,
 *    lrnSoInd                  [64] IMPLICIT INTEGER {
 *       lRN-NP-Database        ( 1 ),
 *       switchingSystemData    ( 2 ),
 *       incomingsignaling      ( 3 ),
 *       unknown                ( 9 )} OPTIONAL,
 *    lrnQuryStatus             [65] IMPLICIT INTEGER {
 *       successfulQuery         ( 1 ),
 *       noQueryResponseMsg      ( 2 ),
 *       queryProtocolErr        ( 4 ),
 *       queryResponseDataErr    ( 5 ),
 *       queryRejected           ( 6 ),
 *       queryNotPerformed       ( 9 ),
 *       queryUnsuccessful       ( 99 )} OPTIONAL,
 *    jIPPara                   [66] IMPLICIT OCTET STRING ( SIZE( 5 ) ) OPTIONAL,
 *    jIPSoInd                  [67] IMPLICIT INTEGER {
 *       lRN-NP-Database        ( 1 ),
 *       switchingSystemData    ( 2 ),
 *       incomingsignaling      ( 3 ),
 *       unknown                ( 9 )} OPTIONAL,
 *    jIPQuryStatus             [68] IMPLICIT INTEGER {
 *       successfulQuery         ( 1 ),
 *       noQueryResponseMsg      ( 2 ),
 *       queryProtocolErr        ( 4 ),
 *       queryResponseDataErr    ( 5 ),
 *       queryRejected           ( 6 ),
 *       queryNotPerformed       ( 9 ),
 *       queryUnsuccessful       ( 99 )} OPTIONAL,
 *    partialRecordType         [69] IMPLICIT PartialRecordType OPTIONAL,
 *    guaranteedBitRate         [70] IMPLICIT GuaranteedBitRate OPTIONAL,
 *    maximumBitRate            [71] IMPLICIT MaximumBitRate OPTIONAL,
 *    redial                    [72] IMPLICIT BOOLEAN OPTIONAL,
 *    reasonForServiceChange    [73] IMPLICIT ReasonForServiceChange OPTIONAL,
 *    serviceChangeInitiator    [74] IMPLICIT BOOLEAN OPTIONAL,
 *    iCSI2ActiveFlag           [75] IMPLICIT NULL OPTIONAL,
 *    iMS-Charging-Identifier   [76] IMPLICIT OCTET STRING OPTIONAL,
 *    privateUserID             [77] IMPLICIT GraphicString OPTIONAL}
 * ```
 * @class
 */
export
class MOCallRecord {
    /**
     * @summary `recordType`.
     * @description
     *
     * 2G and 3G mandatory. Mobile originated.
     *
     * 3GPP TS 32.250 V19.0.0 clauses 6.1.3.1, 6.1.3.2, 6.1.3.3, 6.1.3.23,
     * 6.1.3.24, 6.1.3.25, and 6.1.3.26.
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
     * MOC: 2G and 3G mandatory. IMSI of the calling party.
     *
     * emergency MOC: 2G and 3G conditional. IMSI of the calling party in case
     * of an emergency call with a SIM card.
     *
     * forwarding MOC: 2G and 3G mandatory. IMSI of the forwarding party.
     *
     * CPH MOC: 2G and 3G mandatory. IMSI of the calling party.
     *
     * CPH new call segment: 2G and 3G mandatory. IMSI of the served party
     * ('calling party' in case of MOC, 'forwarding party' in case of call
     * forwarding respectively 'called party' in case of MTC).
     *
     * CPH forwarding: 2G and 3G mandatory. IMSI of the forwarding party.
     *
     * 3GPP TS 32.250 V19.0.0 clauses 6.1.3.1, 6.1.3.2, 6.1.3.3, 6.1.3.23,
     * 6.1.3.25, and 6.1.3.26.
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
     * MOC: 2G and 3G conditional. IMEI of the calling ME, if available.
     *
     * emergency MOC: 2G and 3G conditional. IMEI of the calling mobile
     * equipment if available.
     *
     * CPH MOC: 2G and 3G conditional. IMEI of the calling ME, if available.
     *
     * CPH new call segment: 2G and 3G conditional. IMEI of the served ME, if
     * available ('calling party' in case of MOC, 'forwarding party' in case of
     * call forwarding respectively 'called party' in case of MTC).
     *
     * 3GPP TS 32.250 V19.0.0 clauses 6.1.3.1, 6.1.3.2, 6.1.3.23, and 6.1.3.25.
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
     * MOC: 2G and 3G operator-provisionable mandatory. The primary MSISDN of
     * the calling party.
     *
     * emergency MOC: 2G and 3G operator-provisionable conditional. The primary
     * MSISDN of the calling party, if supplied by the UE.
     *
     * forwarding MOC: 2G and 3G operator-provisionable mandatory. The MSISDN of
     * the forwarding party.
     *
     * CPH MOC: 2G and 3G operator-provisionable mandatory. The primary MSISDN
     * of the calling party.
     *
     * gsmSCF-initiated CPH: 2G and 3G operator-provisionable mandatory. The
     * number of the initiating party. "Calling Party Number" as received in the
     * ICA operation.
     *
     * CPH new call segment: 2G and 3G operator-provisionable mandatory. The
     * MSISDN of the served party ('calling party' in case of MOC, 'forwarding
     * party' in case of call forwarding respectively 'called party' in case of
     * MTC).
     *
     * CPH forwarding: 2G and 3G operator-provisionable mandatory. The MSISDN of
     * the forwarding party.
     *
     * 3GPP TS 32.250 V19.0.0 clauses 6.1.3.1, 6.1.3.2, 6.1.3.3, 6.1.3.23,
     * 6.1.3.24, 6.1.3.25, and 6.1.3.26.
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
     * 2G and 3G operator-provisionable conditional. The address of the calling
     * party.
     *
     * 3GPP TS 32.250 V19.0.0 clauses 6.1.3.3 and 6.1.3.26.
     *
     * @public
     * @readonly
     */
    readonly callingNumber: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `calledNumber`.
     * @description
     *
     * MOC: 2G and 3G mandatory. The address of the called party i.e. the number
     * dialled by the calling subscriber.
     *
     * forwarding MOC: 2G and 3G mandatory. The address of the "forwarded-to"
     * party.
     *
     * CPH MOC: 2G and 3G mandatory. The address of the called party i.e. the
     * number dialled by the calling subscriber.
     *
     * gsmSCF-initiated CPH, CPH new call segment: 2G and 3G mandatory. The
     * address of the called party.
     *
     * CPH forwarding: 2G and 3G mandatory. The address of the "forwarded-to"
     * party.
     *
     * 3GPP TS 32.250 V19.0.0 clauses 6.1.3.1, 6.1.3.3, 6.1.3.23, 6.1.3.24,
     * 6.1.3.25, and 6.1.3.26.
     *
     * @public
     * @readonly
     */
    readonly calledNumber: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `translatedNumber`.
     * @description
     *
     * 2G and 3G operator-provisionable conditional. The called number after
     * digit translation within the MSC (if applicable).
     *
     * 3GPP TS 32.250 V19.0.0 clauses 6.1.3.1, 6.1.3.2, and 6.1.3.3.
     *
     * @public
     * @readonly
     */
    readonly translatedNumber: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `connectedNumber`.
     * @description
     *
     * 2G and 3G operator-provisionable conditional. The number of the connected
     * party if different to the Called Number.
     *
     * 3GPP TS 32.250 V19.0.0 clauses 6.1.3.1 and 6.1.3.3.
     *
     * @public
     * @readonly
     */
    readonly connectedNumber: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `roamingNumber`.
     * @description
     *
     * 2G and 3G operator-provisionable conditional. The Mobile Station Roaming
     * Number employed to route this connection, if applicable.
     *
     * 3GPP TS 32.250 V19.0.0 clauses 6.1.3.1 and 6.1.3.3.
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
     * MOC, emergency MOC: 2G and 3G mandatory. The E.164 number of the visited
     * MSC producing the record.
     *
     * forwarding MOC: 2G and 3G mandatory. The E.164 number of the forwarding
     * MSC.
     *
     * CPH MOC, gsmSCF-initiated CPH, CPH new call segment: 2G and 3G mandatory.
     * The E.164 number of the visited MSC producing the record.
     *
     * CPH forwarding: 2G and 3G mandatory. The E.164 number of the forwarding
     * MSC.
     *
     * 3GPP TS 32.250 V19.0.0 clauses 6.1.3.1, 6.1.3.2, 6.1.3.3, 6.1.3.23,
     * 6.1.3.24, 6.1.3.25, and 6.1.3.26.
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
     * MOC, emergency MOC: 2G operator-provisionable mandatory, 3G
     * operator-provisionable conditional. The MSC trunk group on which the call
     * originated , usually from the BSS. If available in 3G, this parameter
     * shall be supplied.
     *
     * forwarding MOC: 2G and 3G operator-provisionable mandatory. The MSC trunk
     * group on which the call originated at the forwarding MSC.
     *
     * CPH MOC: 2G operator-provisionable mandatory, 3G operator-provisionable
     * conditional. The MSC trunk group on which the call originated, usually
     * from the BSS. If available in 3G, this parameter shall be supplied.
     *
     * CPH forwarding: 2G and 3G operator-provisionable mandatory. The MSC trunk
     * group on which the call originated at the forwarding MSC.
     *
     * 3GPP TS 32.250 V19.0.0 clauses 6.1.3.1, 6.1.3.2, 6.1.3.3, 6.1.3.23, and
     * 6.1.3.26.
     *
     * @public
     * @readonly
     */
    readonly mscIncomingTKGP: OPTIONAL<TrunkGroup>;
    /**
     * @summary `mscOutgoingTKGP`.
     * @description
     *
     * MOC, emergency MOC: 2G operator-provisionable mandatory, 3G
     * operator-provisionable conditional. The trunk group on which the call
     * left the MSC. If available in 3G, this parameter shall be supplied.
     *
     * forwarding MOC: 2G and 3G operator-provisionable mandatory. The trunk
     * group on which the call left the forwarding MSC.
     *
     * 3GPP TS 32.250 V19.0.0 clauses 6.1.3.1, 6.1.3.2, and 6.1.3.3.
     *
     * @public
     * @readonly
     */
    readonly mscOutgoingTKGP: OPTIONAL<TrunkGroup>;
    /**
     * @summary `location`.
     * @description
     *
     * MOC: 2G and 3G mandatory. The identity of the cell or the SAC at the time
     * of CDR creation, including the location area code and MCC+MNC.
     *
     * emergency MOC: 2G and 3G mandatory. The identity of the cell or the SAC
     * in which the call originated including the location area code and
     * MCC+MNC.
     *
     * CPH MOC: 2G and 3G mandatory. The identity of the cell or the SAC and
     * MCC+MNC at the time of CDR creation, including the location area code.
     *
     * 3GPP TS 32.250 V19.0.0 clauses 6.1.3.1, 6.1.3.2, and 6.1.3.23.
     *
     * @public
     * @readonly
     */
    readonly location: OPTIONAL<LocationAreaAndCell>;
    /**
     * @summary `changeOfLocation`.
     * @description
     *
     * 2G and 3G operator-provisionable conditional. A list of changes in
     * Location Area Code / Service Area Code / Cell Id and MCC+MNC. Each
     * time-stamped.
     *
     * 3GPP TS 32.250 V19.0.0 clauses 6.1.3.1, 6.1.3.2, and 6.1.3.23.
     *
     * @public
     * @readonly
     */
    readonly changeOfLocation: OPTIONAL<LocationChange[]>;
    /**
     * @summary `basicService`.
     * @description
     *
     * MOC: 2G and 3G mandatory. Bearer or teleservice employed.
     *
     * emergency MOC: 2G and 3G mandatory. Teleservice 'emergency call'.
     *
     * forwarding MOC: 2G and 3G conditional. Bearer or teleservice employed,
     * not always available e.g. in case of call forwarding unconditional.
     *
     * CPH MOC, gsmSCF-initiated CPH, CPH new call segment: 2G and 3G mandatory.
     * Bearer or teleservice employed. 'speech' in case of CAMEL CPH calls.
     *
     * CPH forwarding: 2G and 3G conditional. 'speech' in case of CAMEL CPH, not
     * always available e.g. in case of call forwarding unconditional.
     *
     * 3GPP TS 32.250 V19.0.0 clauses 6.1.3.1, 6.1.3.2, 6.1.3.3, 6.1.3.23,
     * 6.1.3.24, 6.1.3.25, and 6.1.3.26.
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
     * 3GPP TS 32.250 V19.0.0 clauses 6.1.3.1 and 6.1.3.3.
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
     * 3GPP TS 32.250 V19.0.0 clauses 6.1.3.1 and 6.1.3.3.
     *
     * @public
     * @readonly
     */
    readonly changeOfService: OPTIONAL<ChangeOfService[]>;
    /**
     * @summary `supplServicesUsed`.
     * @description
     *
     * MOC: 2G and 3G conditional. Supplementary services invoked as a result of
     * this connection. This field shall be present when one or more
     * supplementary services have been invoked.
     *
     * forwarding MOC: 2G and 3G conditional. Supplementary services invoked as
     * a result of this connection, if this information is available to the
     * forwarding node. This field shall be present when one or more
     * supplementary services have been invoked.
     *
     * CPH MOC, CPH new call segment: 2G and 3G conditional. Supplementary
     * services invoked as a result of this connection. This field shall be
     * present when one or more supplementary services have been invoked.
     *
     * CPH forwarding: 2G and 3G conditional. Supplementary services invoked as
     * a result of this connection, if this information is available to the
     * forwarding node. This field shall be present when one or more
     * supplementary services have been invoked.
     *
     * 3GPP TS 32.250 V19.0.0 clauses 6.1.3.1, 6.1.3.3, 6.1.3.23, 6.1.3.25, and
     * 6.1.3.26.
     *
     * @public
     * @readonly
     */
    readonly supplServicesUsed: OPTIONAL<SuppServiceUsed[]>;
    /**
     * @summary `aocParameters`.
     * @description
     *
     * 2G and 3G operator-provisionable conditional. The charge advice
     * parameters sent to the MS on call set-up. This field shall be supplied
     * only when AoC parameters have been sent.
     *
     * 3GPP TS 32.250 V19.0.0 clauses 6.1.3.1, 6.1.3.2, and 6.1.3.23.
     *
     * @public
     * @readonly
     */
    readonly aocParameters: OPTIONAL<AOCParameters>;
    /**
     * @summary `changeOfAOCParms`.
     * @description
     *
     * 2G and 3G operator-provisionable conditional. New AOC parameters sent to
     * the MS e.g. as a result of a tariff switch over, including the time at
     * which the new set was applied. This field shall be supplied only when AoC
     * parameters have been sent.
     *
     * 3GPP TS 32.250 V19.0.0 clauses 6.1.3.1, 6.1.3.2, and 6.1.3.23.
     *
     * @public
     * @readonly
     */
    readonly changeOfAOCParms: OPTIONAL<AOCParmChange[]>;
    /**
     * @summary `msClassmark`.
     * @description
     *
     * 2G and 3G mandatory. The mobile station classmark employed on call
     * set-up.
     *
     * 3GPP TS 32.250 V19.0.0 clauses 6.1.3.1, 6.1.3.2, and 6.1.3.23.
     *
     * @public
     * @readonly
     */
    readonly msClassmark: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `changeOfClassmark`.
     * @description
     *
     * 2G and 3G operator-provisionable conditional. A list of changes to the
     * classmark during the connection each time-stamped.
     *
     * 3GPP TS 32.250 V19.0.0 clauses 6.1.3.1, 6.1.3.2, and 6.1.3.23.
     *
     * @public
     * @readonly
     */
    readonly changeOfClassmark: OPTIONAL<ChangeOfClassmark>;
    /**
     * @summary `seizureTime`.
     * @description
     *
     * 2G and 3G conditional. Time of incoming traffic channel seizure (for
     * unsuccessful call attempts).
     *
     * 3GPP TS 32.250 V19.0.0 clauses 6.1.3.1, 6.1.3.3, 6.1.3.23, and 6.1.3.26.
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
     * 3GPP TS 32.250 V19.0.0 clauses 6.1.3.1, 6.1.3.3, 6.1.3.23, and 6.1.3.26.
     *
     * @public
     * @readonly
     */
    readonly answerTime: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `releaseTime`.
     * @description
     *
     * MOC, forwarding MOC: 2G and 3G operator-provisionable mandatory. Time of
     * traffic channel release. This field contains the MS Time Zone.
     *
     * CPH MOC: 2G and 3G operator-provisionable mandatory. Time of traffic
     * channel release for the incoming leg.
     *
     * CPH forwarding: 2G and 3G operator-provisionable mandatory. Time of
     * traffic channel release.
     *
     * 3GPP TS 32.250 V19.0.0 clauses 6.1.3.1, 6.1.3.3, 6.1.3.23, and 6.1.3.26.
     *
     * @public
     * @readonly
     */
    readonly releaseTime: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `callDuration`.
     * @description
     *
     * MOC, emergency MOC: 2G and 3G mandatory. The chargeable duration of the
     * connection for successful calls, the holding time for call attempts.
     *
     * forwarding MOC: 2G and 3G mandatory. The chargeable duration of the
     * connection for successful calls, the holding time of call attempts.
     *
     * CPH MOC: 2G and 3G conditional. The chargeable duration of the connection
     * of the incoming leg for successful calls, the holding time of the
     * incoming leg for call attempts.
     *
     * CPH forwarding: 2G and 3G conditional. The chargeable duration of the
     * connection for successful calls, the holding time of call attempts.
     *
     * 3GPP TS 32.250 V19.0.0 clauses 6.1.3.1, 6.1.3.2, 6.1.3.3, 6.1.3.23, and
     * 6.1.3.26.
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
     * transmitted if available at the MSC.
     *
     * 3GPP TS 32.250 V19.0.0 clauses 6.1.3.1 and 6.1.3.3.
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
     * @summary `radioChanRequested`.
     * @description
     *
     * 2G operator-provisionable mandatory, 3G not applicable. The type of radio
     * traffic channel (full / half etc.) requested by the MS.
     *
     * 3GPP TS 32.250 V19.0.0 clauses 6.1.3.1, 6.1.3.2, and 6.1.3.23.
     *
     * @public
     * @readonly
     */
    readonly radioChanRequested: OPTIONAL<RadioChanRequested>;
    /**
     * @summary `radioChanUsed`.
     * @description
     *
     * MOC: 2G mandatory, 3G not applicable. The type of radio channel actually
     * used (full or half rate).
     *
     * emergency MOC: 2G mandatory, 3G not applicable. The type of radio channel
     * used (full or half rate).
     *
     * CPH MOC: 2G mandatory, 3G not applicable. The type of radio channel
     * actually used (full or half rate).
     *
     * 3GPP TS 32.250 V19.0.0 clauses 6.1.3.1, 6.1.3.2, and 6.1.3.23.
     *
     * @public
     * @readonly
     */
    readonly radioChanUsed: OPTIONAL<TrafficChannel>;
    /**
     * @summary `changeOfRadioChan`.
     * @description
     *
     * 2G operator-provisionable conditional, 3G not applicable. A list of
     * changes each time stamped.
     *
     * 3GPP TS 32.250 V19.0.0 clauses 6.1.3.1, 6.1.3.2, and 6.1.3.23.
     *
     * @public
     * @readonly
     */
    readonly changeOfRadioChan: OPTIONAL<ChangeOfRadioChannel>;
    /**
     * @summary `causeForTerm`.
     * @description
     *
     * 2G and 3G mandatory. The reason for the release of the connection.
     *
     * 3GPP TS 32.250 V19.0.0 clauses 6.1.3.1, 6.1.3.2, 6.1.3.3, 6.1.3.23,
     * 6.1.3.24, 6.1.3.25, and 6.1.3.26.
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
     * 3GPP TS 32.250 V19.0.0 clauses 6.1.3.1, 6.1.3.2, 6.1.3.3, 6.1.3.23,
     * 6.1.3.24, 6.1.3.25, and 6.1.3.26.
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
     * 3GPP TS 32.250 V19.0.0 clauses 6.1.3.1, 6.1.3.2, 6.1.3.3, 6.1.3.23,
     * 6.1.3.24, 6.1.3.25, and 6.1.3.26.
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
     * 3GPP TS 32.250 V19.0.0 clauses 6.1.3.1, 6.1.3.2, 6.1.3.3, 6.1.3.23,
     * 6.1.3.24, 6.1.3.25, and 6.1.3.26.
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
     * @summary `additionalChgInfo`.
     * @description
     *
     * MOC: 2G and 3G operator-provisionable conditional. Charge/no charge
     * indicator and additional charging parameters, when available.
     *
     * forwarding MOC: 2G operator-provisionable conditional, 3G optional.
     * Charge/no charge indicator and additional charging parameters, when
     * available.
     *
     * 3GPP TS 32.250 V19.0.0 clauses 6.1.3.1 and 6.1.3.3.
     *
     * This field consists of two parts, a charge indicator and additional
     * charging parameters. The charge indicator is derived from the information
     * contained within the ISUP "backward call indicator" and may be used to
     * store a charge indicator (charge/no charge) received from another network
     * node. The additional charging parameters are non-standard and intended to
     * permit the inclusion of further charging information received from
     * Intelligent Network and/or Value Added Service nodes.
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.2.1.1.
     *
     * @public
     * @readonly
     */
    readonly additionalChgInfo: OPTIONAL<AdditionalChgInfo>;
    /**
     * @summary `recordExtensions`.
     * @description
     *
     * 2G and 3G operator-provisionable conditional. A set of network /
     * manufacturer specific extensions to the record, when available.
     *
     * 3GPP TS 32.250 V19.0.0 clauses 6.1.3.1, 6.1.3.2, 6.1.3.3, 6.1.3.23,
     * 6.1.3.24, 6.1.3.25, and 6.1.3.26.
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
     * @summary `gsm_SCFAddress`.
     * @description
     *
     * MOC, forwarding MOC: 2G and 3G conditional. Identifies the CAMEL server
     * serving the subscriber. Shall be present only if CAMEL is applied.
     *
     * CPH MOC: 2G and 3G mandatory. Identifies the CAMEL server serving the
     * subscriber.
     *
     * gsmSCF-initiated CPH: 2G and 3G conditional. Identifies the CAMEL server
     * serving the subscriber (network call reference).
     *
     * CPH new call segment, CPH forwarding: 2G and 3G conditional. Identifies
     * the CAMEL server serving the subscriber.
     *
     * 3GPP TS 32.250 V19.0.0 clauses 6.1.3.1, 6.1.3.3, 6.1.3.23, 6.1.3.24,
     * 6.1.3.25, and 6.1.3.26.
     *
     * This field identifies the CAMEL server serving the subscriber. Address is
     * defined in HLR as part of CAMEL subscription information.
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.2.1.28.
     *
     * @public
     * @readonly
     */
    readonly gsm_SCFAddress: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `serviceKey`.
     * @description
     *
     * MOC, forwarding MOC: 2G and 3G conditional. The CAMEL service logic to be
     * applied. Shall be present only if CAMEL is applied.
     *
     * CPH MOC, CPH new call segment, CPH forwarding: 2G and 3G conditional. The
     * CAMEL service logic to be applied.
     *
     * 3GPP TS 32.250 V19.0.0 clauses 6.1.3.1, 6.1.3.3, 6.1.3.23, 6.1.3.25, and
     * 6.1.3.26.
     *
     * This field identifies the CAMEL service logic applied. Service key is
     * defined in HLR as part of CAMEL subscription information.
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.2.1.83.
     *
     * @public
     * @readonly
     */
    readonly serviceKey: OPTIONAL<INTEGER>;
    /**
     * @summary `networkCallReference`.
     * @description
     *
     * MOC, forwarding MOC: 2G and 3G conditional. An identifier to correlate
     * transactions on the same call taking place in different network nodes,
     * shall be present if CAMEL is applied.
     *
     * CPH MOC, gsmSCF-initiated CPH, CPH new call segment: 2G and 3G mandatory.
     * An identifier to correlate transactions on the same call taking place in
     * different network nodes.
     *
     * CPH forwarding: 2G and 3G conditional. An identifier to correlate
     * transactions on the same call taking place in different network nodes.
     *
     * 3GPP TS 32.250 V19.0.0 clauses 6.1.3.1, 6.1.3.3, 6.1.3.23, 6.1.3.24,
     * 6.1.3.25, and 6.1.3.26.
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
     * MOC, forwarding MOC: 2G and 3G conditional. This field contains the E.164
     * number assigned to the MSC that generated the network call reference.
     * Shall be present only if CAMEL is applied.
     *
     * CPH MOC: 2G and 3G mandatory. This field contains the E.164 number
     * assigned to the MSC that generated the network call reference.
     *
     * gsmSCF-initiated CPH: 2G and 3G mandatory. This field contains the E.164
     * number assigned to the MSC that generated the record.
     *
     * CPH new call segment: 2G and 3G mandatory. This field contains the E.164
     * number assigned to the MSC that generated the network call reference.
     *
     * CPH forwarding: 2G and 3G conditional. This field contains the E.164
     * number assigned to the MSC that generated the network call reference.
     *
     * 3GPP TS 32.250 V19.0.0 clauses 6.1.3.1, 6.1.3.3, 6.1.3.23, 6.1.3.24,
     * 6.1.3.25, and 6.1.3.26.
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
     * @summary `cAMELInitCFIndicator`.
     * @description
     *
     * forwarding MOC: 2G and 3G conditional. Indicates that the CAMEL server
     * initiated call forwarding. Shall be present only if CAMEL is applied.
     *
     * CPH forwarding: 2G and 3G operator-provisionable conditional. Indicates
     * that the CAMEL server initiated call forwarding. Not available in case of
     * gsm call forwarding.
     *
     * 3GPP TS 32.250 V19.0.0 clauses 6.1.3.3 and 6.1.3.26.
     *
     * @public
     * @readonly
     */
    readonly cAMELInitCFIndicator: OPTIONAL<CAMELInitCFIndicator>;
    /**
     * @summary `defaultCallHandling`.
     * @description
     *
     * 2G and 3G operator-provisionable conditional. Indicates whether or not a
     * CAMEL call encountered default call handling. This field shall be present
     * only if default call handling has been applied.
     *
     * 3GPP TS 32.250 V19.0.0 clauses 6.1.3.1, 6.1.3.3, 6.1.3.23, 6.1.3.25, and
     * 6.1.3.26.
     *
     * @public
     * @readonly
     */
    readonly defaultCallHandling: OPTIONAL<DefaultCallHandling>;
    /**
     * @summary `hSCSDChanRequested`.
     * @description
     *
     * 2G conditional, 3G not applicable. The maximum number of HSCSD channels
     * requested as received from the MS at call set-up. Shall only be present
     * for HSCSD connections.
     *
     * 3GPP TS 32.250 V19.0.0 clause 6.1.3.1.
     *
     * @public
     * @readonly
     */
    readonly hSCSDChanRequested: OPTIONAL<INTEGER>;
    /**
     * @summary `hSCSDChanAllocated`.
     * @description
     *
     * 2G conditional, 3G not applicable. The number of HSCSD channels allocated
     * to the MS at call set-up. Shall only be present for HSCSD connections.
     *
     * 3GPP TS 32.250 V19.0.0 clause 6.1.3.1.
     *
     * @public
     * @readonly
     */
    readonly hSCSDChanAllocated: OPTIONAL<INTEGER>;
    /**
     * @summary `changeOfHSCSDParms`.
     * @description
     *
     * 2G conditional, 3G not applicable. A list of network or user initiated
     * changes of number of HSCSD channels during a connection each
     * time-stamped. Shall only be present in case of an HSCSD call, if the
     * basic HSCSD parameters are modified due the user or network initiated
     * modification procedure.
     *
     * 3GPP TS 32.250 V19.0.0 clause 6.1.3.1.
     *
     * @public
     * @readonly
     */
    readonly changeOfHSCSDParms: OPTIONAL<HSCSDParmsChange[]>;
    /**
     * @summary `fnur`.
     * @description
     *
     * 2G and 3G operator-provisionable conditional. Indicates the user data
     * rate applied for the connection in the fixed network. Shall only be
     * present for 2G HSCSD connections and for UMTS data connections.
     *
     * 3GPP TS 32.250 V19.0.0 clauses 6.1.3.1 and 6.1.3.3.
     *
     * @public
     * @readonly
     */
    readonly fnur: OPTIONAL<Fnur>;
    /**
     * @summary `aiurRequested`.
     * @description
     *
     * 2G conditional, 3G not applicable. The total Air Interface User Rate
     * Requested by the MS at call set-up. Shall only be present for
     * non-transparent HSCSD connections.
     *
     * 3GPP TS 32.250 V19.0.0 clause 6.1.3.1.
     *
     * @public
     * @readonly
     */
    readonly aiurRequested: OPTIONAL<AiurRequested>;
    /**
     * @summary `chanCodingsAcceptable`.
     * @description
     *
     * 2G conditional, 3G not applicable. A list of the traffic channels codings
     * accepted by the MS. Shall only be present for HSCSD connections.
     *
     * 3GPP TS 32.250 V19.0.0 clause 6.1.3.1.
     *
     * @public
     * @readonly
     */
    readonly chanCodingsAcceptable: OPTIONAL<ChannelCoding[]>;
    /**
     * @summary `chanCodingUsed`.
     * @description
     *
     * 2G conditional, 3G not applicable. The traffic channels codings
     * negotiated between the MS and the network at call set-up. Shall only be
     * present for HSCSD connections.
     *
     * 3GPP TS 32.250 V19.0.0 clause 6.1.3.1.
     *
     * @public
     * @readonly
     */
    readonly chanCodingUsed: OPTIONAL<ChannelCoding>;
    /**
     * @summary `speechVersionSupported`.
     * @description
     *
     * 2G operator-provisionable mandatory, 3G not applicable. Speech version
     * supported by the MS with highest priority indicated by MS.
     *
     * 3GPP TS 32.250 V19.0.0 clauses 6.1.3.1 and 6.1.3.23.
     *
     * @public
     * @readonly
     */
    readonly speechVersionSupported: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `speechVersionUsed`.
     * @description
     *
     * 2G operator-provisionable mandatory, 3G not applicable. Speech version
     * used for that call.
     *
     * 3GPP TS 32.250 V19.0.0 clauses 6.1.3.1 and 6.1.3.23.
     *
     * @public
     * @readonly
     */
    readonly speechVersionUsed: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `numberOfDPEncountered`.
     * @description
     *
     * MOC, forwarding MOC: 2G and 3G operator-provisionable conditional. Number
     * that counts how often armed detection points (TDP and EDP) were
     * encountered. Shall be present only if CAMEL is applied.
     *
     * CPH MOC: 2G and 3G operator-provisionable mandatory. Number that counts
     * how often armed detection points (TDP and EDP) were encountered. Sum of
     * all DPs encountered in this call.
     *
     * gsmSCF-initiated CPH, CPH new call segment, CPH forwarding: 2G and 3G
     * operator-provisionable conditional. Number that counts how often armed
     * detection points (TDP and EDP) were encountered. Sum of all DPs
     * encountered in this call.
     *
     * 3GPP TS 32.250 V19.0.0 clauses 6.1.3.1, 6.1.3.3, 6.1.3.23, 6.1.3.24,
     * 6.1.3.25, and 6.1.3.26.
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
     * MOC: 2G and 3G operator-provisionable conditional. Indicator for the
     * complexity of the CAMEL feature used. Shall be present only if CAMEL is
     * applied.
     *
     * forwarding MOC: 2G and 3G operator-provisionable conditional. Indicator
     * of the complexity of the CAMEL feature used. Shall be present only if
     * CAMEL is applied.
     *
     * CPH MOC: 2G and 3G operator-provisionable mandatory. Indicator for the
     * complexity of the CAMEL feature used.
     *
     * gsmSCF-initiated CPH, CPH new call segment: 2G and 3G
     * operator-provisionable conditional. Indicator for the complexity of the
     * CAMEL feature used.
     *
     * CPH forwarding: 2G and 3G operator-provisionable conditional. Indicator
     * of the complexity of the CAMEL feature used.
     *
     * 3GPP TS 32.250 V19.0.0 clauses 6.1.3.1, 6.1.3.3, 6.1.3.23, 6.1.3.24,
     * 6.1.3.25, and 6.1.3.26.
     *
     * This field describes briefly the complexity of CAMEL invocation:
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.2.1.43.
     *
     * @public
     * @readonly
     */
    readonly levelOfCAMELService: OPTIONAL<MOCallRecord_levelOfCAMELService>;
    /**
     * @summary `freeFormatData`.
     * @description
     *
     * MOC, forwarding MOC: 2G and 3G conditional. This field contains data sent
     * by the gsmSCF in the Furnish Charging Information (FCI) message(s). The
     * data can be sent either in one FCI message or several FCI messages with
     * append indicator. Shall be present only if CAMEL is applied.
     *
     * CPH MOC, CPH forwarding: 2G and 3G conditional. This field contains data
     * sent by the gsmSCF in the Furnish Charging Information (FCI) message(s).
     * The data can be sent either in one FCI message or several FCI messages
     * with append indicator.
     *
     * 3GPP TS 32.250 V19.0.0 clauses 6.1.3.1, 6.1.3.3, 6.1.3.23, and 6.1.3.26.
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
     * MOC, forwarding MOC: 2G and 3G conditional. Set of CAMEL information IEs.
     * Each of these IEs contains information related to one outgoing CAMEL call
     * leg. Shall be present only if CAMEL is applied.
     *
     * CPH MOC, gsmSCF-initiated CPH, CPH new call segment, CPH forwarding: 2G
     * and 3G conditional. Set of CAMEL information IEs. Each of these IEs
     * contains information related to one outgoing CAMEL call leg.
     *
     * 3GPP TS 32.250 V19.0.0 clauses 6.1.3.1, 6.1.3.3, 6.1.3.23, 6.1.3.24,
     * 6.1.3.25, and 6.1.3.26.
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
     * MOC, forwarding MOC: 2G and 3G conditional. Indicator if free format data
     * from this CDR is to be appended to free format data in previous partial
     * CDR. Shall be present only if CAMEL is applied.
     *
     * CPH MOC: 2G and 3G conditional. Indicator if free format data from this
     * CDR is to be appended to free format data in previous partial CDR. Shall
     * be present only if CAMEL id applied.
     *
     * CPH forwarding: 2G and 3G conditional. Indicator if free format data from
     * this CDR is to be appended to free format data in previous partial CDR.
     * Shall be present only if CAMEL is applied.
     *
     * 3GPP TS 32.250 V19.0.0 clauses 6.1.3.1, 6.1.3.3, 6.1.3.23, and 6.1.3.26.
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
     * 3GPP TS 32.250 V19.0.0 clauses 6.1.3.1 and 6.1.3.3.
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
     * 3GPP TS 32.250 V19.0.0 clauses 6.1.3.1 and 6.1.3.3.
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
     * 3GPP TS 32.250 V19.0.0 clauses 6.1.3.1 and 6.1.3.3.
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
     * 3GPP TS 32.250 V19.0.0 clauses 6.1.3.1 and 6.1.3.3.
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
     * 3GPP TS 32.250 V19.0.0 clauses 6.1.3.1 and 6.1.3.3.
     *
     * @public
     * @readonly
     */
    readonly freeFormatDataAppend_2: OPTIONAL<BOOLEAN>;
    /**
     * @summary `systemType`.
     * @description
     *
     * MOC, emergency MOC: 2G not applicable, 3G mandatory. This field indicates
     * the use of GERAN, UTRAN (or a value of unknown). This field is present
     * when either the UTRAN or GERAN air-interface is used on call set-up. For
     * an open CDR in a 2G NE (responsible for the CDR), the field is not
     * present (even if the call is handed off to a 3G air interface). For a CDR
     * in a 3G NE (responsible for the CDR), the value unknown shall be used
     * after handover.
     *
     * CPH MOC: 2G not applicable, 3G mandatory. This field indicates the use of
     * GERAN, UTRAN (or a value of unknown) of the incoming leg. This field is
     * present when either the UTRAN or GERAN air-interface is used on call
     * set-up. For an open CDR in a 2G NE (responsible for the CDR), the field
     * is not present (even if the call is handed off to a 3G air interface).For
     * a CDR in a 3G NE (responsible for the CDR), the value unknown shall be
     * used after handover.
     *
     * 3GPP TS 32.250 V19.0.0 clauses 6.1.3.1, 6.1.3.2, and 6.1.3.23.
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
     * @summary `rateIndication`.
     * @description
     *
     * MOC: 2G and 3G operator-provisionable conditional. Present if "rate
     * adaption" parameters for the basic service were signalled between the
     * MS/UE and the network, see 3GPP TS 24.008 [208].
     *
     * forwarding MOC: 2G and 3G operator-provisionable conditional. Present if
     * "rate adaption" parameters for the basic service were signalled between
     * the MS/UE and the network, see 3GPP TS 24.008 [208]. May not always be
     * available in this CDR type.
     *
     * 3GPP TS 32.250 V19.0.0 clauses 6.1.3.1 and 6.1.3.3.
     *
     * This parameter specifies the rate adaptation that was used for the
     * connection. The field is constructed from the information in the
     * parameters "rate adaptation" and "other rate adaptation" signalled
     * between the MS/UE and the network, see TS 24.008 [208]. The format of
     * this field is a single octet with the following format: Bits 0-1: the
     * Rate Adaptation field as defined in TS 24.008 [208]; Bits 2-3: the Other
     * Rate Adaptation field as defined in TS 24.008 [208]; Bits 4-7: not used.
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.2.1.69.
     *
     * @public
     * @readonly
     */
    readonly rateIndication: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `locationRoutNum`.
     * @description
     *
     * 2G not applicable, 3G operator-provisionable conditional. Location
     * Routing Number for Number Portability feature.
     *
     * 3GPP TS 32.250 V19.0.0 clauses 6.1.3.1 and 6.1.3.3.
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
     * 3GPP TS 32.250 V19.0.0 clauses 6.1.3.1 and 6.1.3.3.
     *
     * @public
     * @readonly
     */
    readonly lrnSoInd: OPTIONAL<MOCallRecord_lrnSoInd>;
    /**
     * @summary `lrnQuryStatus`.
     * @description
     *
     * 2G not applicable, 3G operator-provisionable conditional. Status of
     * Number Portability query.
     *
     * 3GPP TS 32.250 V19.0.0 clauses 6.1.3.1 and 6.1.3.3.
     *
     * @public
     * @readonly
     */
    readonly lrnQuryStatus: OPTIONAL<MOCallRecord_lrnQuryStatus>;
    /**
     * @summary `jIPPara`.
     * @description
     *
     * 2G not applicable, 3G operator-provisionable conditional. Jurisdiction
     * Information Parameter.
     *
     * 3GPP TS 32.250 V19.0.0 clauses 6.1.3.1 and 6.1.3.3.
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
     * 3GPP TS 32.250 V19.0.0 clauses 6.1.3.1 and 6.1.3.3.
     *
     * @public
     * @readonly
     */
    readonly jIPSoInd: OPTIONAL<MOCallRecord_jIPSoInd>;
    /**
     * @summary `jIPQuryStatus`.
     * @description
     *
     * 2G not applicable, 3G operator-provisionable conditional. Status of
     * Number Portability query.
     *
     * 3GPP TS 32.250 V19.0.0 clauses 6.1.3.1 and 6.1.3.3.
     *
     * @public
     * @readonly
     */
    readonly jIPQuryStatus: OPTIONAL<MOCallRecord_jIPQuryStatus>;
    /**
     * @summary `partialRecordType`.
     * @description
     *
     * MOC: 2G and 3G operator-provisionable conditional. Indicates the event
     * (time limit etc.) that caused the generation of a partial record.
     *
     * emergency MOC, forwarding MOC, CPH MOC, gsmSCF-initiated CPH, CPH new
     * call segment, CPH forwarding: 2G not applicable, 3G
     * operator-provisionable conditional. Indicates the event (time limit etc.)
     * that caused the generation of a partial record.
     *
     * 3GPP TS 32.250 V19.0.0 clauses 6.1.3.1, 6.1.3.2, 6.1.3.3, 6.1.3.23,
     * 6.1.3.24, 6.1.3.25, and 6.1.3.26.
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
     * @summary `guaranteedBitRate`.
     * @description
     *
     * 2G not applicable, 3G operator-provisionable conditional. Describes the
     * bit-rate the UMTS bearer service shall guarantee to the user or
     * application. Guaranteed Bit Rate may be used to facilitate admission
     * control based on available resources, and for resource allocation within
     * UMTS. Shall only be present for UMTS data connections.
     *
     * 3GPP TS 32.250 V19.0.0 clause 6.1.3.1.
     *
     * This field contains the Guaranteed Bit Rate based on the FNUR for
     * transparent and Wanted AIUR for non-transparent CS data services based on
     * the described mapping in TS 27.001 [213]. The Guaranteed Bit Rate may be
     * used to facilitate admission control based on available resources, and
     * for resource allocation within UMTS. The bit-rate of the UMTS bearer
     * service shall guarantee to the user or applications refer TS 22.002
     * [102]. Operator may choose any of the possible values less or equal to
     * wanted AIUR (Air Interface User Rate). (If WAIUR is less or equal to 14,4
     * kbit/s then Guaranteed Bit Rate and Maximum Bit Rate shall be set to 14,4
     * kbit/s).
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.2.1.29.
     *
     * @public
     * @readonly
     */
    readonly guaranteedBitRate: OPTIONAL<GuaranteedBitRate>;
    /**
     * @summary `maximumBitRate`.
     * @description
     *
     * 2G not applicable, 3G operator-provisionable conditional. Maximum Bit
     * Rate can be used to make code reservations in the downlink of the radio
     * interface. Its purpose is: 1) to limit the delivered bit-rate to
     * applications or external networks with such limitations, 2) to allow
     * maximum wanted user bit-rate to be defined for applications able to
     * operate with different rates (e.g. applications with adapting codecs).
     * Shall only be present for UMTS data connections.
     *
     * 3GPP TS 32.250 V19.0.0 clause 6.1.3.1.
     *
     * This field contains the Maximum Bit Rate based on the FNUR (Fixed Network
     * User Rate) for transparent and WAIUR(Wanted Air Interface User Rate) for
     * non-transparent CS data services based on the described mapping in TS
     * 27.001 [213]. The parameter can be used to make code reservations in the
     * downlink of the radio interface for the UMTS bearer service (BS20 and
     * BS30) refer TS 22.002 [102]. Its purpose is: Maximum bit rate is set to
     * the highest value WAIUR (If WAIUR is less or equal to 14.4 kbit/s then
     * Guaranteed Bit Rate and Maximum Bit Rate shall be set to 14.4 kbit/s).
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.2.1.51.
     *
     * @public
     * @readonly
     */
    readonly maximumBitRate: OPTIONAL<MaximumBitRate>;
    /**
     * @summary `redial`.
     * @description
     *
     * 2G and 3G operator-provisionable conditional. Indicates to the network
     * that a call is the result of a redial attempt to switch from speech to
     * multimedia or vice-versa.
     *
     * 3GPP TS 32.250 V19.0.0 clauses 6.1.3.1 and 6.1.3.23.
     *
     * @public
     * @readonly
     */
    readonly redial: OPTIONAL<BOOLEAN>;
    /**
     * @summary `reasonForServiceChange`.
     * @description
     *
     * 2G not applicable, 3G operator-provisionable conditional. Indicates the
     * type of service change and fallback.
     *
     * 3GPP TS 32.250 V19.0.0 clause 6.1.3.1.
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
     * 3GPP TS 32.250 V19.0.0 clause 6.1.3.1.
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
    /**
     * @summary `iCSI2ActiveFlag`.
     * @description
     *
     * 2G and 3G conditional. This field indicates that the MSC is IMS
     * registered on the UE's behalf during the session for service
     * centralization in the IMS.
     *
     * 3GPP TS 32.250 V19.0.0 clause 6.1.3.1.
     *
     * @public
     * @readonly
     */
    readonly iCSI2ActiveFlag: OPTIONAL<NULL>;
    /**
     * @summary `iMS_Charging_Identifier`.
     * @description
     *
     * 2G and 3G operator-provisionable mandatory. This parameter holds the IMS
     * charging identifier (ICID) as generated by the enhanced MSC server with
     * SIP interface.
     *
     * 3GPP TS 32.250 V19.0.0 clause 6.1.3.1.
     *
     * @public
     * @readonly
     */
    readonly iMS_Charging_Identifier: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `privateUserID`.
     * @description
     *
     * 2G and 3G operator-provisionable mandatory. This field contains the IMS
     * Private User Identity and Public User Identity specifically reserved for
     * IMS registrations.
     *
     * 3GPP TS 32.250 V19.0.0 clause 6.1.3.1.
     *
     * @public
     * @readonly
     */
    readonly privateUserID: OPTIONAL<GraphicString>;

    constructor (
        recordType: RecordType,
        servedIMSI: OPTIONAL<OCTET_STRING>,
        servedIMEI: OPTIONAL<OCTET_STRING>,
        servedMSISDN: OPTIONAL<OCTET_STRING>,
        callingNumber: OPTIONAL<OCTET_STRING>,
        calledNumber: OPTIONAL<OCTET_STRING>,
        translatedNumber: OPTIONAL<OCTET_STRING>,
        connectedNumber: OPTIONAL<OCTET_STRING>,
        roamingNumber: OPTIONAL<OCTET_STRING>,
        recordingEntity: OCTET_STRING,
        mscIncomingTKGP: OPTIONAL<TrunkGroup>,
        mscOutgoingTKGP: OPTIONAL<TrunkGroup>,
        location: OPTIONAL<LocationAreaAndCell>,
        changeOfLocation: OPTIONAL<LocationChange[]>,
        basicService: OPTIONAL<BasicService>,
        transparencyIndicator: OPTIONAL<TransparencyInd>,
        changeOfService: OPTIONAL<ChangeOfService[]>,
        supplServicesUsed: OPTIONAL<SuppServiceUsed[]>,
        aocParameters: OPTIONAL<AOCParameters>,
        changeOfAOCParms: OPTIONAL<AOCParmChange[]>,
        msClassmark: OPTIONAL<OCTET_STRING>,
        changeOfClassmark: OPTIONAL<ChangeOfClassmark>,
        seizureTime: OPTIONAL<OCTET_STRING>,
        answerTime: OPTIONAL<OCTET_STRING>,
        releaseTime: OPTIONAL<OCTET_STRING>,
        callDuration: INTEGER,
        dataVolume: OPTIONAL<INTEGER>,
        radioChanRequested: OPTIONAL<RadioChanRequested>,
        radioChanUsed: OPTIONAL<TrafficChannel>,
        changeOfRadioChan: OPTIONAL<ChangeOfRadioChannel>,
        causeForTerm: CauseForTerm,
        diagnostics: OPTIONAL<HLRIntResult>,
        callReference: OCTET_STRING,
        sequenceNumber?: OPTIONAL<INTEGER>,
        additionalChgInfo?: OPTIONAL<AdditionalChgInfo>,
        recordExtensions?: OPTIONAL<ManagementExtension[]>,
        gsm_SCFAddress?: OPTIONAL<OCTET_STRING>,
        serviceKey?: OPTIONAL<INTEGER>,
        networkCallReference?: OPTIONAL<OCTET_STRING>,
        mSCAddress?: OPTIONAL<OCTET_STRING>,
        cAMELInitCFIndicator?: OPTIONAL<CAMELInitCFIndicator>,
        defaultCallHandling?: OPTIONAL<DefaultCallHandling>,
        hSCSDChanRequested?: OPTIONAL<INTEGER>,
        hSCSDChanAllocated?: OPTIONAL<INTEGER>,
        changeOfHSCSDParms?: OPTIONAL<HSCSDParmsChange[]>,
        fnur?: OPTIONAL<Fnur>,
        aiurRequested?: OPTIONAL<AiurRequested>,
        chanCodingsAcceptable?: OPTIONAL<ChannelCoding[]>,
        chanCodingUsed?: OPTIONAL<ChannelCoding>,
        speechVersionSupported?: OPTIONAL<OCTET_STRING>,
        speechVersionUsed?: OPTIONAL<OCTET_STRING>,
        numberOfDPEncountered?: OPTIONAL<INTEGER>,
        levelOfCAMELService?: OPTIONAL<MOCallRecord_levelOfCAMELService>,
        freeFormatData?: OPTIONAL<OCTET_STRING>,
        cAMELCallLegInformation?: OPTIONAL<CAMELInformation[]>,
        freeFormatDataAppend?: OPTIONAL<BOOLEAN>,
        defaultCallHandling_2?: OPTIONAL<DefaultCallHandling>,
        gsm_SCFAddress_2?: OPTIONAL<OCTET_STRING>,
        serviceKey_2?: OPTIONAL<INTEGER>,
        freeFormatData_2?: OPTIONAL<OCTET_STRING>,
        freeFormatDataAppend_2?: OPTIONAL<BOOLEAN>,
        systemType?: OPTIONAL<SystemType>,
        rateIndication?: OPTIONAL<OCTET_STRING>,
        locationRoutNum?: OPTIONAL<OCTET_STRING>,
        lrnSoInd?: OPTIONAL<MOCallRecord_lrnSoInd>,
        lrnQuryStatus?: OPTIONAL<MOCallRecord_lrnQuryStatus>,
        jIPPara?: OPTIONAL<OCTET_STRING>,
        jIPSoInd?: OPTIONAL<MOCallRecord_jIPSoInd>,
        jIPQuryStatus?: OPTIONAL<MOCallRecord_jIPQuryStatus>,
        partialRecordType?: OPTIONAL<PartialRecordType>,
        guaranteedBitRate?: OPTIONAL<GuaranteedBitRate>,
        maximumBitRate?: OPTIONAL<MaximumBitRate>,
        redial?: OPTIONAL<BOOLEAN>,
        reasonForServiceChange?: OPTIONAL<ReasonForServiceChange>,
        serviceChangeInitiator?: OPTIONAL<BOOLEAN>,
        iCSI2ActiveFlag?: OPTIONAL<NULL>,
        iMS_Charging_Identifier?: OPTIONAL<OCTET_STRING>,
        privateUserID?: OPTIONAL<GraphicString>
    ) {
        this.recordType = recordType;
        this.servedIMSI = servedIMSI;
        this.servedIMEI = servedIMEI;
        this.servedMSISDN = servedMSISDN;
        this.callingNumber = callingNumber;
        this.calledNumber = calledNumber;
        this.translatedNumber = translatedNumber;
        this.connectedNumber = connectedNumber;
        this.roamingNumber = roamingNumber;
        this.recordingEntity = recordingEntity;
        this.mscIncomingTKGP = mscIncomingTKGP;
        this.mscOutgoingTKGP = mscOutgoingTKGP;
        this.location = location;
        this.changeOfLocation = changeOfLocation;
        this.basicService = basicService;
        this.transparencyIndicator = transparencyIndicator;
        this.changeOfService = changeOfService;
        this.supplServicesUsed = supplServicesUsed;
        this.aocParameters = aocParameters;
        this.changeOfAOCParms = changeOfAOCParms;
        this.msClassmark = msClassmark;
        this.changeOfClassmark = changeOfClassmark;
        this.seizureTime = seizureTime;
        this.answerTime = answerTime;
        this.releaseTime = releaseTime;
        this.callDuration = callDuration;
        this.dataVolume = dataVolume;
        this.radioChanRequested = radioChanRequested;
        this.radioChanUsed = radioChanUsed;
        this.changeOfRadioChan = changeOfRadioChan;
        this.causeForTerm = causeForTerm;
        this.diagnostics = diagnostics;
        this.callReference = callReference;
        this.sequenceNumber = sequenceNumber;
        this.additionalChgInfo = additionalChgInfo;
        this.recordExtensions = recordExtensions;
        this.gsm_SCFAddress = gsm_SCFAddress;
        this.serviceKey = serviceKey;
        this.networkCallReference = networkCallReference;
        this.mSCAddress = mSCAddress;
        this.cAMELInitCFIndicator = cAMELInitCFIndicator;
        this.defaultCallHandling = defaultCallHandling;
        this.hSCSDChanRequested = hSCSDChanRequested;
        this.hSCSDChanAllocated = hSCSDChanAllocated;
        this.changeOfHSCSDParms = changeOfHSCSDParms;
        this.fnur = fnur;
        this.aiurRequested = aiurRequested;
        this.chanCodingsAcceptable = chanCodingsAcceptable;
        this.chanCodingUsed = chanCodingUsed;
        this.speechVersionSupported = speechVersionSupported;
        this.speechVersionUsed = speechVersionUsed;
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
        this.systemType = systemType;
        this.rateIndication = rateIndication;
        this.locationRoutNum = locationRoutNum;
        this.lrnSoInd = lrnSoInd;
        this.lrnQuryStatus = lrnQuryStatus;
        this.jIPPara = jIPPara;
        this.jIPSoInd = jIPSoInd;
        this.jIPQuryStatus = jIPQuryStatus;
        this.partialRecordType = partialRecordType;
        this.guaranteedBitRate = guaranteedBitRate;
        this.maximumBitRate = maximumBitRate;
        this.redial = redial;
        this.reasonForServiceChange = reasonForServiceChange;
        this.serviceChangeInitiator = serviceChangeInitiator;
        this.iCSI2ActiveFlag = iCSI2ActiveFlag;
        this.iMS_Charging_Identifier = iMS_Charging_Identifier;
        this.privateUserID = privateUserID;
    
        if (this.servedIMSI !== undefined && (this.servedIMSI.length < 3 || this.servedIMSI.length > 8)) {
            throw new ASN1SizeError("MOCallRecord.servedIMSI violates SIZE constraint");
        }
        if (this.servedIMEI !== undefined && (this.servedIMEI.length !== 8)) {
            throw new ASN1SizeError("MOCallRecord.servedIMEI violates SIZE constraint");
        }
        if (this.servedMSISDN !== undefined && (this.servedMSISDN.length < 1 || this.servedMSISDN.length > 9)) {
            throw new ASN1SizeError("MOCallRecord.servedMSISDN violates SIZE constraint");
        }
        if (this.roamingNumber !== undefined && (this.roamingNumber.length < 1 || this.roamingNumber.length > 9)) {
            throw new ASN1SizeError("MOCallRecord.roamingNumber violates SIZE constraint");
        }
        if ((this.recordingEntity.length < 1 || this.recordingEntity.length > 20)) {
            throw new ASN1SizeError("MOCallRecord.recordingEntity violates SIZE constraint");
        }
        if (this.seizureTime !== undefined && (this.seizureTime.length !== 9)) {
            throw new ASN1SizeError("MOCallRecord.seizureTime violates SIZE constraint");
        }
        if (this.answerTime !== undefined && (this.answerTime.length !== 9)) {
            throw new ASN1SizeError("MOCallRecord.answerTime violates SIZE constraint");
        }
        if (this.releaseTime !== undefined && (this.releaseTime.length !== 9)) {
            throw new ASN1SizeError("MOCallRecord.releaseTime violates SIZE constraint");
        }
        if ((this.callReference.length < 1 || this.callReference.length > 8)) {
            throw new ASN1SizeError("MOCallRecord.callReference violates SIZE constraint");
        }
        if (this.gsm_SCFAddress !== undefined && (this.gsm_SCFAddress.length < 1 || this.gsm_SCFAddress.length > 9)) {
            throw new ASN1SizeError("MOCallRecord.gsm_SCFAddress violates SIZE constraint");
        }
        if (this.serviceKey !== undefined && (this.serviceKey < 0 || this.serviceKey > 2147483647)) {
            throw new ASN1OverflowError("MOCallRecord.serviceKey violates INTEGER range");
        }
        if (this.networkCallReference !== undefined && (this.networkCallReference.length < 1 || this.networkCallReference.length > 8)) {
            throw new ASN1SizeError("MOCallRecord.networkCallReference violates SIZE constraint");
        }
        if (this.mSCAddress !== undefined && (this.mSCAddress.length < 1 || this.mSCAddress.length > 20)) {
            throw new ASN1SizeError("MOCallRecord.mSCAddress violates SIZE constraint");
        }
        if (this.speechVersionSupported !== undefined && (this.speechVersionSupported.length !== 1)) {
            throw new ASN1SizeError("MOCallRecord.speechVersionSupported violates SIZE constraint");
        }
        if (this.speechVersionUsed !== undefined && (this.speechVersionUsed.length !== 1)) {
            throw new ASN1SizeError("MOCallRecord.speechVersionUsed violates SIZE constraint");
        }
        if (this.freeFormatData !== undefined && (this.freeFormatData.length < 1 || this.freeFormatData.length > 160)) {
            throw new ASN1SizeError("MOCallRecord.freeFormatData violates SIZE constraint");
        }
        if (this.gsm_SCFAddress_2 !== undefined && (this.gsm_SCFAddress_2.length < 1 || this.gsm_SCFAddress_2.length > 9)) {
            throw new ASN1SizeError("MOCallRecord.gsm_SCFAddress_2 violates SIZE constraint");
        }
        if (this.serviceKey_2 !== undefined && (this.serviceKey_2 < 0 || this.serviceKey_2 > 2147483647)) {
            throw new ASN1OverflowError("MOCallRecord.serviceKey_2 violates INTEGER range");
        }
        if (this.freeFormatData_2 !== undefined && (this.freeFormatData_2.length < 1 || this.freeFormatData_2.length > 160)) {
            throw new ASN1SizeError("MOCallRecord.freeFormatData_2 violates SIZE constraint");
        }
        if (this.rateIndication !== undefined && (this.rateIndication.length !== 1)) {
            throw new ASN1SizeError("MOCallRecord.rateIndication violates SIZE constraint");
        }
        if (this.locationRoutNum !== undefined && (this.locationRoutNum.length !== 5)) {
            throw new ASN1SizeError("MOCallRecord.locationRoutNum violates SIZE constraint");
        }
        if (this.jIPPara !== undefined && (this.jIPPara.length !== 5)) {
            throw new ASN1SizeError("MOCallRecord.jIPPara violates SIZE constraint");
        }
    }

    /**
     * @summary Restructures an object into a MOCallRecord
     * @description
     *
     * This takes an `object` and converts it to a `MOCallRecord`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `MOCallRecord`.
     * @returns {MOCallRecord}
     */
    public static _from_object (_o: { [_K in keyof (MOCallRecord)]: (MOCallRecord)[_K] }): MOCallRecord {
        return new MOCallRecord(_o.recordType, _o.servedIMSI, _o.servedIMEI, _o.servedMSISDN, _o.callingNumber, _o.calledNumber, _o.translatedNumber, _o.connectedNumber, _o.roamingNumber, _o.recordingEntity, _o.mscIncomingTKGP, _o.mscOutgoingTKGP, _o.location, _o.changeOfLocation, _o.basicService, _o.transparencyIndicator, _o.changeOfService, _o.supplServicesUsed, _o.aocParameters, _o.changeOfAOCParms, _o.msClassmark, _o.changeOfClassmark, _o.seizureTime, _o.answerTime, _o.releaseTime, _o.callDuration, _o.dataVolume, _o.radioChanRequested, _o.radioChanUsed, _o.changeOfRadioChan, _o.causeForTerm, _o.diagnostics, _o.callReference, _o.sequenceNumber, _o.additionalChgInfo, _o.recordExtensions, _o.gsm_SCFAddress, _o.serviceKey, _o.networkCallReference, _o.mSCAddress, _o.cAMELInitCFIndicator, _o.defaultCallHandling, _o.hSCSDChanRequested, _o.hSCSDChanAllocated, _o.changeOfHSCSDParms, _o.fnur, _o.aiurRequested, _o.chanCodingsAcceptable, _o.chanCodingUsed, _o.speechVersionSupported, _o.speechVersionUsed, _o.numberOfDPEncountered, _o.levelOfCAMELService, _o.freeFormatData, _o.cAMELCallLegInformation, _o.freeFormatDataAppend, _o.defaultCallHandling_2, _o.gsm_SCFAddress_2, _o.serviceKey_2, _o.freeFormatData_2, _o.freeFormatDataAppend_2, _o.systemType, _o.rateIndication, _o.locationRoutNum, _o.lrnSoInd, _o.lrnQuryStatus, _o.jIPPara, _o.jIPSoInd, _o.jIPQuryStatus, _o.partialRecordType, _o.guaranteedBitRate, _o.maximumBitRate, _o.redial, _o.reasonForServiceChange, _o.serviceChangeInitiator, _o.iCSI2ActiveFlag, _o.iMS_Charging_Identifier, _o.privateUserID);
    }

        /**
         * @summary The enum used as the type of the component `transparencyIndicator`
         * @public
         * @static
         */

    public static _enum_for_transparencyIndicator = _enum_for_TransparencyInd;        /**
         * @summary The enum used as the type of the component `radioChanRequested`
         * @public
         * @static
         */

    public static _enum_for_radioChanRequested = _enum_for_RadioChanRequested;        /**
         * @summary The enum used as the type of the component `radioChanUsed`
         * @public
         * @static
         */

    public static _enum_for_radioChanUsed = _enum_for_TrafficChannel;        /**
         * @summary The enum used as the type of the component `cAMELInitCFIndicator`
         * @public
         * @static
         */

    public static _enum_for_cAMELInitCFIndicator = _enum_for_CAMELInitCFIndicator;        /**
         * @summary The enum used as the type of the component `defaultCallHandling`
         * @public
         * @static
         */

    public static _enum_for_defaultCallHandling = _enum_for_DefaultCallHandling;        /**
         * @summary The enum used as the type of the component `fnur`
         * @public
         * @static
         */

    public static _enum_for_fnur = _enum_for_Fnur;        /**
         * @summary The enum used as the type of the component `aiurRequested`
         * @public
         * @static
         */

    public static _enum_for_aiurRequested = _enum_for_AiurRequested;        /**
         * @summary The enum used as the type of the component `chanCodingUsed`
         * @public
         * @static
         */

    public static _enum_for_chanCodingUsed = _enum_for_ChannelCoding;        /**
         * @summary The enum used as the type of the component `defaultCallHandling_2`
         * @public
         * @static
         */

    public static _enum_for_defaultCallHandling_2 = _enum_for_DefaultCallHandling;        /**
         * @summary The enum used as the type of the component `systemType`
         * @public
         * @static
         */

    public static _enum_for_systemType = _enum_for_SystemType;        /**
         * @summary The enum used as the type of the component `partialRecordType`
         * @public
         * @static
         */

    public static _enum_for_partialRecordType = _enum_for_PartialRecordType;        /**
         * @summary The enum used as the type of the component `guaranteedBitRate`
         * @public
         * @static
         */

    public static _enum_for_guaranteedBitRate = _enum_for_GuaranteedBitRate;        /**
         * @summary The enum used as the type of the component `maximumBitRate`
         * @public
         * @static
         */

    public static _enum_for_maximumBitRate = _enum_for_MaximumBitRate;        /**
         * @summary The enum used as the type of the component `reasonForServiceChange`
         * @public
         * @static
         */

    public static _enum_for_reasonForServiceChange = _enum_for_ReasonForServiceChange;
}

/**
 * @summary The Leading Root Component Types of MOCallRecord
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading
 * root component type list of a SET or SEQUENCE.
 * @constant
 */
export
const _root_component_type_list_1_spec_for_MOCallRecord: $.ComponentSpec[] = [
    new $.ComponentSpec("recordType", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("servedIMSI", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("servedIMEI", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("servedMSISDN", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("callingNumber", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("calledNumber", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("translatedNumber", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("connectedNumber", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("roamingNumber", true, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("recordingEntity", false, $.hasTag(_TagClass.context, 9)),
    new $.ComponentSpec("mscIncomingTKGP", true, $.hasTag(_TagClass.context, 10)),
    new $.ComponentSpec("mscOutgoingTKGP", true, $.hasTag(_TagClass.context, 11)),
    new $.ComponentSpec("location", true, $.hasTag(_TagClass.context, 12)),
    new $.ComponentSpec("changeOfLocation", true, $.hasTag(_TagClass.context, 13)),
    new $.ComponentSpec("basicService", true, $.hasTag(_TagClass.context, 14)),
    new $.ComponentSpec("transparencyIndicator", true, $.hasTag(_TagClass.context, 15)),
    new $.ComponentSpec("changeOfService", true, $.hasTag(_TagClass.context, 16)),
    new $.ComponentSpec("supplServicesUsed", true, $.hasTag(_TagClass.context, 17)),
    new $.ComponentSpec("aocParameters", true, $.hasTag(_TagClass.context, 18)),
    new $.ComponentSpec("changeOfAOCParms", true, $.hasTag(_TagClass.context, 19)),
    new $.ComponentSpec("msClassmark", true, $.hasTag(_TagClass.context, 20)),
    new $.ComponentSpec("changeOfClassmark", true, $.hasTag(_TagClass.context, 21)),
    new $.ComponentSpec("seizureTime", true, $.hasTag(_TagClass.context, 22)),
    new $.ComponentSpec("answerTime", true, $.hasTag(_TagClass.context, 23)),
    new $.ComponentSpec("releaseTime", true, $.hasTag(_TagClass.context, 24)),
    new $.ComponentSpec("callDuration", false, $.hasTag(_TagClass.context, 25)),
    new $.ComponentSpec("dataVolume", true, $.hasTag(_TagClass.context, 26)),
    new $.ComponentSpec("radioChanRequested", true, $.hasTag(_TagClass.context, 27)),
    new $.ComponentSpec("radioChanUsed", true, $.hasTag(_TagClass.context, 28)),
    new $.ComponentSpec("changeOfRadioChan", true, $.hasTag(_TagClass.context, 29)),
    new $.ComponentSpec("causeForTerm", false, $.hasTag(_TagClass.context, 30)),
    new $.ComponentSpec("diagnostics", true, $.hasTag(_TagClass.context, 31)),
    new $.ComponentSpec("callReference", false, $.hasTag(_TagClass.context, 32)),
    new $.ComponentSpec("sequenceNumber", true, $.hasTag(_TagClass.context, 33)),
    new $.ComponentSpec("additionalChgInfo", true, $.hasTag(_TagClass.context, 34)),
    new $.ComponentSpec("recordExtensions", true, $.hasTag(_TagClass.context, 35)),
    new $.ComponentSpec("gsm-SCFAddress", true, $.hasTag(_TagClass.context, 36)),
    new $.ComponentSpec("serviceKey", true, $.hasTag(_TagClass.context, 37)),
    new $.ComponentSpec("networkCallReference", true, $.hasTag(_TagClass.context, 38)),
    new $.ComponentSpec("mSCAddress", true, $.hasTag(_TagClass.context, 39)),
    new $.ComponentSpec("cAMELInitCFIndicator", true, $.hasTag(_TagClass.context, 40)),
    new $.ComponentSpec("defaultCallHandling", true, $.hasTag(_TagClass.context, 41)),
    new $.ComponentSpec("hSCSDChanRequested", true, $.hasTag(_TagClass.context, 42)),
    new $.ComponentSpec("hSCSDChanAllocated", true, $.hasTag(_TagClass.context, 43)),
    new $.ComponentSpec("changeOfHSCSDParms", true, $.hasTag(_TagClass.context, 44)),
    new $.ComponentSpec("fnur", true, $.hasTag(_TagClass.context, 45)),
    new $.ComponentSpec("aiurRequested", true, $.hasTag(_TagClass.context, 46)),
    new $.ComponentSpec("chanCodingsAcceptable", true, $.hasTag(_TagClass.context, 47)),
    new $.ComponentSpec("chanCodingUsed", true, $.hasTag(_TagClass.context, 48)),
    new $.ComponentSpec("speechVersionSupported", true, $.hasTag(_TagClass.context, 49)),
    new $.ComponentSpec("speechVersionUsed", true, $.hasTag(_TagClass.context, 50)),
    new $.ComponentSpec("numberOfDPEncountered", true, $.hasTag(_TagClass.context, 51)),
    new $.ComponentSpec("levelOfCAMELService", true, $.hasTag(_TagClass.context, 52)),
    new $.ComponentSpec("freeFormatData", true, $.hasTag(_TagClass.context, 53)),
    new $.ComponentSpec("cAMELCallLegInformation", true, $.hasTag(_TagClass.context, 54)),
    new $.ComponentSpec("freeFormatDataAppend", true, $.hasTag(_TagClass.context, 55)),
    new $.ComponentSpec("defaultCallHandling-2", true, $.hasTag(_TagClass.context, 56)),
    new $.ComponentSpec("gsm-SCFAddress-2", true, $.hasTag(_TagClass.context, 57)),
    new $.ComponentSpec("serviceKey-2", true, $.hasTag(_TagClass.context, 58)),
    new $.ComponentSpec("freeFormatData-2", true, $.hasTag(_TagClass.context, 59)),
    new $.ComponentSpec("freeFormatDataAppend-2", true, $.hasTag(_TagClass.context, 60)),
    new $.ComponentSpec("systemType", true, $.hasTag(_TagClass.context, 61)),
    new $.ComponentSpec("rateIndication", true, $.hasTag(_TagClass.context, 62)),
    new $.ComponentSpec("locationRoutNum", true, $.hasTag(_TagClass.context, 63)),
    new $.ComponentSpec("lrnSoInd", true, $.hasTag(_TagClass.context, 64)),
    new $.ComponentSpec("lrnQuryStatus", true, $.hasTag(_TagClass.context, 65)),
    new $.ComponentSpec("jIPPara", true, $.hasTag(_TagClass.context, 66)),
    new $.ComponentSpec("jIPSoInd", true, $.hasTag(_TagClass.context, 67)),
    new $.ComponentSpec("jIPQuryStatus", true, $.hasTag(_TagClass.context, 68)),
    new $.ComponentSpec("partialRecordType", true, $.hasTag(_TagClass.context, 69)),
    new $.ComponentSpec("guaranteedBitRate", true, $.hasTag(_TagClass.context, 70)),
    new $.ComponentSpec("maximumBitRate", true, $.hasTag(_TagClass.context, 71)),
    new $.ComponentSpec("redial", true, $.hasTag(_TagClass.context, 72)),
    new $.ComponentSpec("reasonForServiceChange", true, $.hasTag(_TagClass.context, 73)),
    new $.ComponentSpec("serviceChangeInitiator", true, $.hasTag(_TagClass.context, 74)),
    new $.ComponentSpec("iCSI2ActiveFlag", true, $.hasTag(_TagClass.context, 75)),
    new $.ComponentSpec("iMS-Charging-Identifier", true, $.hasTag(_TagClass.context, 76)),
    new $.ComponentSpec("privateUserID", true, $.hasTag(_TagClass.context, 77))
];

/**
 * @summary The Trailing Root Component Types of MOCallRecord
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing
 * root component type list of a SET or SEQUENCE.
 * @constant
 */
export
const _root_component_type_list_2_spec_for_MOCallRecord: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of MOCallRecord
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension
 * addition component type list of a SET or SEQUENCE.
 * @constant
 */
export
const _extension_additions_list_spec_for_MOCallRecord: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_MOCallRecord: $.ASN1Decoder<MOCallRecord> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MOCallRecord
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MOCallRecord (el: _Element): MOCallRecord {
    if (!_cached_decoder_for_MOCallRecord) { _cached_decoder_for_MOCallRecord = function (el: _Element): MOCallRecord {
    /* START_OF_SET_COMPONENT_DECLARATIONS */
    let recordType!: RecordType;
    let servedIMSI: OPTIONAL<OCTET_STRING>;
    let servedIMEI: OPTIONAL<OCTET_STRING>;
    let servedMSISDN: OPTIONAL<OCTET_STRING>;
    let callingNumber: OPTIONAL<OCTET_STRING>;
    let calledNumber: OPTIONAL<OCTET_STRING>;
    let translatedNumber: OPTIONAL<OCTET_STRING>;
    let connectedNumber: OPTIONAL<OCTET_STRING>;
    let roamingNumber: OPTIONAL<OCTET_STRING>;
    let recordingEntity!: OCTET_STRING;
    let mscIncomingTKGP: OPTIONAL<TrunkGroup>;
    let mscOutgoingTKGP: OPTIONAL<TrunkGroup>;
    let location: OPTIONAL<LocationAreaAndCell>;
    let changeOfLocation: OPTIONAL<LocationChange[]>;
    let basicService: OPTIONAL<BasicService>;
    let transparencyIndicator: OPTIONAL<TransparencyInd>;
    let changeOfService: OPTIONAL<ChangeOfService[]>;
    let supplServicesUsed: OPTIONAL<SuppServiceUsed[]>;
    let aocParameters: OPTIONAL<AOCParameters>;
    let changeOfAOCParms: OPTIONAL<AOCParmChange[]>;
    let msClassmark: OPTIONAL<OCTET_STRING>;
    let changeOfClassmark: OPTIONAL<ChangeOfClassmark>;
    let seizureTime: OPTIONAL<OCTET_STRING>;
    let answerTime: OPTIONAL<OCTET_STRING>;
    let releaseTime: OPTIONAL<OCTET_STRING>;
    let callDuration!: INTEGER;
    let dataVolume: OPTIONAL<INTEGER>;
    let radioChanRequested: OPTIONAL<RadioChanRequested>;
    let radioChanUsed: OPTIONAL<TrafficChannel>;
    let changeOfRadioChan: OPTIONAL<ChangeOfRadioChannel>;
    let causeForTerm!: CauseForTerm;
    let diagnostics: OPTIONAL<HLRIntResult>;
    let callReference!: OCTET_STRING;
    let sequenceNumber: OPTIONAL<INTEGER>;
    let additionalChgInfo: OPTIONAL<AdditionalChgInfo>;
    let recordExtensions: OPTIONAL<ManagementExtension[]>;
    let gsm_SCFAddress: OPTIONAL<OCTET_STRING>;
    let serviceKey: OPTIONAL<INTEGER>;
    let networkCallReference: OPTIONAL<OCTET_STRING>;
    let mSCAddress: OPTIONAL<OCTET_STRING>;
    let cAMELInitCFIndicator: OPTIONAL<CAMELInitCFIndicator>;
    let defaultCallHandling: OPTIONAL<DefaultCallHandling>;
    let hSCSDChanRequested: OPTIONAL<INTEGER>;
    let hSCSDChanAllocated: OPTIONAL<INTEGER>;
    let changeOfHSCSDParms: OPTIONAL<HSCSDParmsChange[]>;
    let fnur: OPTIONAL<Fnur>;
    let aiurRequested: OPTIONAL<AiurRequested>;
    let chanCodingsAcceptable: OPTIONAL<ChannelCoding[]>;
    let chanCodingUsed: OPTIONAL<ChannelCoding>;
    let speechVersionSupported: OPTIONAL<OCTET_STRING>;
    let speechVersionUsed: OPTIONAL<OCTET_STRING>;
    let numberOfDPEncountered: OPTIONAL<INTEGER>;
    let levelOfCAMELService: OPTIONAL<MOCallRecord_levelOfCAMELService>;
    let freeFormatData: OPTIONAL<OCTET_STRING>;
    let cAMELCallLegInformation: OPTIONAL<CAMELInformation[]>;
    let freeFormatDataAppend: OPTIONAL<BOOLEAN>;
    let defaultCallHandling_2: OPTIONAL<DefaultCallHandling>;
    let gsm_SCFAddress_2: OPTIONAL<OCTET_STRING>;
    let serviceKey_2: OPTIONAL<INTEGER>;
    let freeFormatData_2: OPTIONAL<OCTET_STRING>;
    let freeFormatDataAppend_2: OPTIONAL<BOOLEAN>;
    let systemType: OPTIONAL<SystemType>;
    let rateIndication: OPTIONAL<OCTET_STRING>;
    let locationRoutNum: OPTIONAL<OCTET_STRING>;
    let lrnSoInd: OPTIONAL<MOCallRecord_lrnSoInd>;
    let lrnQuryStatus: OPTIONAL<MOCallRecord_lrnQuryStatus>;
    let jIPPara: OPTIONAL<OCTET_STRING>;
    let jIPSoInd: OPTIONAL<MOCallRecord_jIPSoInd>;
    let jIPQuryStatus: OPTIONAL<MOCallRecord_jIPQuryStatus>;
    let partialRecordType: OPTIONAL<PartialRecordType>;
    let guaranteedBitRate: OPTIONAL<GuaranteedBitRate>;
    let maximumBitRate: OPTIONAL<MaximumBitRate>;
    let redial: OPTIONAL<BOOLEAN>;
    let reasonForServiceChange: OPTIONAL<ReasonForServiceChange>;
    let serviceChangeInitiator: OPTIONAL<BOOLEAN>;
    let iCSI2ActiveFlag: OPTIONAL<NULL>;
    let iMS_Charging_Identifier: OPTIONAL<OCTET_STRING>;
    let privateUserID: OPTIONAL<GraphicString>;
    /* END_OF_SET_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: $.DecodingMap = {
        "recordType": (_el: _Element): void => { recordType = $._decode_implicit<RecordType>(() => _decode_RecordType)(_el); },
        "servedIMSI": (_el: _Element): void => { servedIMSI = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "servedIMEI": (_el: _Element): void => { servedIMEI = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "servedMSISDN": (_el: _Element): void => { servedMSISDN = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "callingNumber": (_el: _Element): void => { callingNumber = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "calledNumber": (_el: _Element): void => { calledNumber = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "translatedNumber": (_el: _Element): void => { translatedNumber = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "connectedNumber": (_el: _Element): void => { connectedNumber = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "roamingNumber": (_el: _Element): void => { roamingNumber = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "recordingEntity": (_el: _Element): void => { recordingEntity = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "mscIncomingTKGP": (_el: _Element): void => { mscIncomingTKGP = $._decode_explicit<TrunkGroup>(() => _decode_TrunkGroup)(_el); },
        "mscOutgoingTKGP": (_el: _Element): void => { mscOutgoingTKGP = $._decode_explicit<TrunkGroup>(() => _decode_TrunkGroup)(_el); },
        "location": (_el: _Element): void => { location = $._decode_implicit<LocationAreaAndCell>(() => _decode_LocationAreaAndCell)(_el); },
        "changeOfLocation": (_el: _Element): void => { changeOfLocation = $._decode_implicit<LocationChange[]>(() => $._decodeSequenceOf<LocationChange>(() => _decode_LocationChange))(_el); },
        "basicService": (_el: _Element): void => { basicService = $._decode_explicit<BasicService>(() => _decode_BasicService)(_el); },
        "transparencyIndicator": (_el: _Element): void => { transparencyIndicator = $._decode_implicit<TransparencyInd>(() => _decode_TransparencyInd)(_el); },
        "changeOfService": (_el: _Element): void => { changeOfService = $._decode_implicit<ChangeOfService[]>(() => $._decodeSequenceOf<ChangeOfService>(() => _decode_ChangeOfService))(_el); },
        "supplServicesUsed": (_el: _Element): void => { supplServicesUsed = $._decode_implicit<SuppServiceUsed[]>(() => $._decodeSequenceOf<SuppServiceUsed>(() => _decode_SuppServiceUsed))(_el); },
        "aocParameters": (_el: _Element): void => { aocParameters = $._decode_implicit<AOCParameters>(() => _decode_AOCParameters)(_el); },
        "changeOfAOCParms": (_el: _Element): void => { changeOfAOCParms = $._decode_implicit<AOCParmChange[]>(() => $._decodeSequenceOf<AOCParmChange>(() => _decode_AOCParmChange))(_el); },
        "msClassmark": (_el: _Element): void => { msClassmark = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "changeOfClassmark": (_el: _Element): void => { changeOfClassmark = $._decode_implicit<ChangeOfClassmark>(() => _decode_ChangeOfClassmark)(_el); },
        "seizureTime": (_el: _Element): void => { seizureTime = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "answerTime": (_el: _Element): void => { answerTime = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "releaseTime": (_el: _Element): void => { releaseTime = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "callDuration": (_el: _Element): void => { callDuration = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "dataVolume": (_el: _Element): void => { dataVolume = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "radioChanRequested": (_el: _Element): void => { radioChanRequested = $._decode_implicit<RadioChanRequested>(() => _decode_RadioChanRequested)(_el); },
        "radioChanUsed": (_el: _Element): void => { radioChanUsed = $._decode_implicit<TrafficChannel>(() => _decode_TrafficChannel)(_el); },
        "changeOfRadioChan": (_el: _Element): void => { changeOfRadioChan = $._decode_implicit<ChangeOfRadioChannel>(() => _decode_ChangeOfRadioChannel)(_el); },
        "causeForTerm": (_el: _Element): void => { causeForTerm = $._decode_implicit<CauseForTerm>(() => _decode_CauseForTerm)(_el); },
        "diagnostics": (_el: _Element): void => { diagnostics = $._decode_explicit<HLRIntResult>(() => _decode_HLRIntResult)(_el); },
        "callReference": (_el: _Element): void => { callReference = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "sequenceNumber": (_el: _Element): void => { sequenceNumber = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "additionalChgInfo": (_el: _Element): void => { additionalChgInfo = $._decode_implicit<AdditionalChgInfo>(() => _decode_AdditionalChgInfo)(_el); },
        "recordExtensions": (_el: _Element): void => { recordExtensions = $._decode_implicit<ManagementExtension[]>(() => $._decodeSetOf<ManagementExtension>(() => _decode_ManagementExtension))(_el); },
        "gsm-SCFAddress": (_el: _Element): void => { gsm_SCFAddress = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "serviceKey": (_el: _Element): void => { serviceKey = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "networkCallReference": (_el: _Element): void => { networkCallReference = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "mSCAddress": (_el: _Element): void => { mSCAddress = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "cAMELInitCFIndicator": (_el: _Element): void => { cAMELInitCFIndicator = $._decode_implicit<CAMELInitCFIndicator>(() => _decode_CAMELInitCFIndicator)(_el); },
        "defaultCallHandling": (_el: _Element): void => { defaultCallHandling = $._decode_implicit<DefaultCallHandling>(() => _decode_DefaultCallHandling)(_el); },
        "hSCSDChanRequested": (_el: _Element): void => { hSCSDChanRequested = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "hSCSDChanAllocated": (_el: _Element): void => { hSCSDChanAllocated = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "changeOfHSCSDParms": (_el: _Element): void => { changeOfHSCSDParms = $._decode_implicit<HSCSDParmsChange[]>(() => $._decodeSequenceOf<HSCSDParmsChange>(() => _decode_HSCSDParmsChange))(_el); },
        "fnur": (_el: _Element): void => { fnur = $._decode_implicit<Fnur>(() => _decode_Fnur)(_el); },
        "aiurRequested": (_el: _Element): void => { aiurRequested = $._decode_implicit<AiurRequested>(() => _decode_AiurRequested)(_el); },
        "chanCodingsAcceptable": (_el: _Element): void => { chanCodingsAcceptable = $._decode_implicit<ChannelCoding[]>(() => $._decodeSequenceOf<ChannelCoding>(() => _decode_ChannelCoding))(_el); },
        "chanCodingUsed": (_el: _Element): void => { chanCodingUsed = $._decode_implicit<ChannelCoding>(() => _decode_ChannelCoding)(_el); },
        "speechVersionSupported": (_el: _Element): void => { speechVersionSupported = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "speechVersionUsed": (_el: _Element): void => { speechVersionUsed = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "numberOfDPEncountered": (_el: _Element): void => { numberOfDPEncountered = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "levelOfCAMELService": (_el: _Element): void => { levelOfCAMELService = $._decode_implicit<MOCallRecord_levelOfCAMELService>(() => _decode_MOCallRecord_levelOfCAMELService)(_el); },
        "freeFormatData": (_el: _Element): void => { freeFormatData = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "cAMELCallLegInformation": (_el: _Element): void => { cAMELCallLegInformation = $._decode_implicit<CAMELInformation[]>(() => $._decodeSequenceOf<CAMELInformation>(() => _decode_CAMELInformation))(_el); },
        "freeFormatDataAppend": (_el: _Element): void => { freeFormatDataAppend = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "defaultCallHandling-2": (_el: _Element): void => { defaultCallHandling_2 = $._decode_implicit<DefaultCallHandling>(() => _decode_DefaultCallHandling)(_el); },
        "gsm-SCFAddress-2": (_el: _Element): void => { gsm_SCFAddress_2 = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "serviceKey-2": (_el: _Element): void => { serviceKey_2 = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "freeFormatData-2": (_el: _Element): void => { freeFormatData_2 = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "freeFormatDataAppend-2": (_el: _Element): void => { freeFormatDataAppend_2 = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "systemType": (_el: _Element): void => { systemType = $._decode_implicit<SystemType>(() => _decode_SystemType)(_el); },
        "rateIndication": (_el: _Element): void => { rateIndication = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "locationRoutNum": (_el: _Element): void => { locationRoutNum = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "lrnSoInd": (_el: _Element): void => { lrnSoInd = $._decode_implicit<MOCallRecord_lrnSoInd>(() => _decode_MOCallRecord_lrnSoInd)(_el); },
        "lrnQuryStatus": (_el: _Element): void => { lrnQuryStatus = $._decode_implicit<MOCallRecord_lrnQuryStatus>(() => _decode_MOCallRecord_lrnQuryStatus)(_el); },
        "jIPPara": (_el: _Element): void => { jIPPara = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "jIPSoInd": (_el: _Element): void => { jIPSoInd = $._decode_implicit<MOCallRecord_jIPSoInd>(() => _decode_MOCallRecord_jIPSoInd)(_el); },
        "jIPQuryStatus": (_el: _Element): void => { jIPQuryStatus = $._decode_implicit<MOCallRecord_jIPQuryStatus>(() => _decode_MOCallRecord_jIPQuryStatus)(_el); },
        "partialRecordType": (_el: _Element): void => { partialRecordType = $._decode_implicit<PartialRecordType>(() => _decode_PartialRecordType)(_el); },
        "guaranteedBitRate": (_el: _Element): void => { guaranteedBitRate = $._decode_implicit<GuaranteedBitRate>(() => _decode_GuaranteedBitRate)(_el); },
        "maximumBitRate": (_el: _Element): void => { maximumBitRate = $._decode_implicit<MaximumBitRate>(() => _decode_MaximumBitRate)(_el); },
        "redial": (_el: _Element): void => { redial = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "reasonForServiceChange": (_el: _Element): void => { reasonForServiceChange = $._decode_implicit<ReasonForServiceChange>(() => _decode_ReasonForServiceChange)(_el); },
        "serviceChangeInitiator": (_el: _Element): void => { serviceChangeInitiator = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "iCSI2ActiveFlag": (_el: _Element): void => { iCSI2ActiveFlag = $._decode_implicit<NULL>(() => $._decodeNull)(_el); },
        "iMS-Charging-Identifier": (_el: _Element): void => { iMS_Charging_Identifier = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "privateUserID": (_el: _Element): void => { privateUserID = $._decode_implicit<GraphicString>(() => $._decodeGraphicString)(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    $._parse_set(el, callbacks,
        _root_component_type_list_1_spec_for_MOCallRecord,
        _extension_additions_list_spec_for_MOCallRecord,
        _root_component_type_list_2_spec_for_MOCallRecord,
        undefined,
    );
    return new MOCallRecord( /* SET_CONSTRUCTOR_CALL */
        recordType,
        servedIMSI,
        servedIMEI,
        servedMSISDN,
        callingNumber,
        calledNumber,
        translatedNumber,
        connectedNumber,
        roamingNumber,
        recordingEntity,
        mscIncomingTKGP,
        mscOutgoingTKGP,
        location,
        changeOfLocation,
        basicService,
        transparencyIndicator,
        changeOfService,
        supplServicesUsed,
        aocParameters,
        changeOfAOCParms,
        msClassmark,
        changeOfClassmark,
        seizureTime,
        answerTime,
        releaseTime,
        callDuration,
        dataVolume,
        radioChanRequested,
        radioChanUsed,
        changeOfRadioChan,
        causeForTerm,
        diagnostics,
        callReference,
        sequenceNumber,
        additionalChgInfo,
        recordExtensions,
        gsm_SCFAddress,
        serviceKey,
        networkCallReference,
        mSCAddress,
        cAMELInitCFIndicator,
        defaultCallHandling,
        hSCSDChanRequested,
        hSCSDChanAllocated,
        changeOfHSCSDParms,
        fnur,
        aiurRequested,
        chanCodingsAcceptable,
        chanCodingUsed,
        speechVersionSupported,
        speechVersionUsed,
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
        systemType,
        rateIndication,
        locationRoutNum,
        lrnSoInd,
        lrnQuryStatus,
        jIPPara,
        jIPSoInd,
        jIPQuryStatus,
        partialRecordType,
        guaranteedBitRate,
        maximumBitRate,
        redial,
        reasonForServiceChange,
        serviceChangeInitiator,
        iCSI2ActiveFlag,
        iMS_Charging_Identifier,
        privateUserID
    );
}; }
    return _cached_decoder_for_MOCallRecord(el);
}

let _cached_encoder_for_MOCallRecord: $.ASN1Encoder<MOCallRecord> | null = null;

/**
 * @summary Encodes a(n) MOCallRecord into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MOCallRecord, encoded as an ASN.1 Element.
 */
export
function _encode_MOCallRecord (value: MOCallRecord, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MOCallRecord) { _cached_encoder_for_MOCallRecord = function (value: MOCallRecord, _elGetter: $.ASN1Encoder<MOCallRecord>): _Element {
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
    if (value.callingNumber !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 4, () => $._encodeOctetString, $.BER)(value.callingNumber, $.BER));
    }
    if (value.calledNumber !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 5, () => $._encodeOctetString, $.BER)(value.calledNumber, $.BER));
    }
    if (value.translatedNumber !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 6, () => $._encodeOctetString, $.BER)(value.translatedNumber, $.BER));
    }
    if (value.connectedNumber !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 7, () => $._encodeOctetString, $.BER)(value.connectedNumber, $.BER));
    }
    if (value.roamingNumber !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 8, () => $._encodeOctetString, $.BER)(value.roamingNumber, $.BER));
    }
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 9, () => $._encodeOctetString, $.BER)(value.recordingEntity, $.BER));
    if (value.mscIncomingTKGP !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 10, () => _encode_TrunkGroup, $.BER)(value.mscIncomingTKGP, $.BER));
    }
    if (value.mscOutgoingTKGP !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 11, () => _encode_TrunkGroup, $.BER)(value.mscOutgoingTKGP, $.BER));
    }
    if (value.location !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 12, () => _encode_LocationAreaAndCell, $.BER)(value.location, $.BER));
    }
    if (value.changeOfLocation !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 13, () => $._encodeSequenceOf<LocationChange>(() => _encode_LocationChange, $.BER), $.BER)(value.changeOfLocation, $.BER));
    }
    if (value.basicService !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 14, () => _encode_BasicService, $.BER)(value.basicService, $.BER));
    }
    if (value.transparencyIndicator !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 15, () => _encode_TransparencyInd, $.BER)(value.transparencyIndicator, $.BER));
    }
    if (value.changeOfService !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 16, () => $._encodeSequenceOf<ChangeOfService>(() => _encode_ChangeOfService, $.BER), $.BER)(value.changeOfService, $.BER));
    }
    if (value.supplServicesUsed !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 17, () => $._encodeSequenceOf<SuppServiceUsed>(() => _encode_SuppServiceUsed, $.BER), $.BER)(value.supplServicesUsed, $.BER));
    }
    if (value.aocParameters !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 18, () => _encode_AOCParameters, $.BER)(value.aocParameters, $.BER));
    }
    if (value.changeOfAOCParms !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 19, () => $._encodeSequenceOf<AOCParmChange>(() => _encode_AOCParmChange, $.BER), $.BER)(value.changeOfAOCParms, $.BER));
    }
    if (value.msClassmark !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 20, () => $._encodeOctetString, $.BER)(value.msClassmark, $.BER));
    }
    if (value.changeOfClassmark !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 21, () => _encode_ChangeOfClassmark, $.BER)(value.changeOfClassmark, $.BER));
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
    if (value.dataVolume !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 26, () => $._encodeInteger, $.BER)(value.dataVolume, $.BER));
    }
    if (value.radioChanRequested !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 27, () => _encode_RadioChanRequested, $.BER)(value.radioChanRequested, $.BER));
    }
    if (value.radioChanUsed !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 28, () => _encode_TrafficChannel, $.BER)(value.radioChanUsed, $.BER));
    }
    if (value.changeOfRadioChan !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 29, () => _encode_ChangeOfRadioChannel, $.BER)(value.changeOfRadioChan, $.BER));
    }
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 30, () => _encode_CauseForTerm, $.BER)(value.causeForTerm, $.BER));
    if (value.diagnostics !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 31, () => _encode_HLRIntResult, $.BER)(value.diagnostics, $.BER));
    }
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 32, () => $._encodeOctetString, $.BER)(value.callReference, $.BER));
    if (value.sequenceNumber !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 33, () => $._encodeInteger, $.BER)(value.sequenceNumber, $.BER));
    }
    if (value.additionalChgInfo !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 34, () => _encode_AdditionalChgInfo, $.BER)(value.additionalChgInfo, $.BER));
    }
    if (value.recordExtensions !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 35, () => $._encodeSetOf<ManagementExtension>(() => _encode_ManagementExtension, $.BER), $.BER)(value.recordExtensions, $.BER));
    }
    if (value.gsm_SCFAddress !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 36, () => $._encodeOctetString, $.BER)(value.gsm_SCFAddress, $.BER));
    }
    if (value.serviceKey !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 37, () => $._encodeInteger, $.BER)(value.serviceKey, $.BER));
    }
    if (value.networkCallReference !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 38, () => $._encodeOctetString, $.BER)(value.networkCallReference, $.BER));
    }
    if (value.mSCAddress !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 39, () => $._encodeOctetString, $.BER)(value.mSCAddress, $.BER));
    }
    if (value.cAMELInitCFIndicator !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 40, () => _encode_CAMELInitCFIndicator, $.BER)(value.cAMELInitCFIndicator, $.BER));
    }
    if (value.defaultCallHandling !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 41, () => _encode_DefaultCallHandling, $.BER)(value.defaultCallHandling, $.BER));
    }
    if (value.hSCSDChanRequested !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 42, () => $._encodeInteger, $.BER)(value.hSCSDChanRequested, $.BER));
    }
    if (value.hSCSDChanAllocated !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 43, () => $._encodeInteger, $.BER)(value.hSCSDChanAllocated, $.BER));
    }
    if (value.changeOfHSCSDParms !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 44, () => $._encodeSequenceOf<HSCSDParmsChange>(() => _encode_HSCSDParmsChange, $.BER), $.BER)(value.changeOfHSCSDParms, $.BER));
    }
    if (value.fnur !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 45, () => _encode_Fnur, $.BER)(value.fnur, $.BER));
    }
    if (value.aiurRequested !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 46, () => _encode_AiurRequested, $.BER)(value.aiurRequested, $.BER));
    }
    if (value.chanCodingsAcceptable !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 47, () => $._encodeSequenceOf<ChannelCoding>(() => _encode_ChannelCoding, $.BER), $.BER)(value.chanCodingsAcceptable, $.BER));
    }
    if (value.chanCodingUsed !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 48, () => _encode_ChannelCoding, $.BER)(value.chanCodingUsed, $.BER));
    }
    if (value.speechVersionSupported !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 49, () => $._encodeOctetString, $.BER)(value.speechVersionSupported, $.BER));
    }
    if (value.speechVersionUsed !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 50, () => $._encodeOctetString, $.BER)(value.speechVersionUsed, $.BER));
    }
    if (value.numberOfDPEncountered !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 51, () => $._encodeInteger, $.BER)(value.numberOfDPEncountered, $.BER));
    }
    if (value.levelOfCAMELService !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 52, () => _encode_MOCallRecord_levelOfCAMELService, $.BER)(value.levelOfCAMELService, $.BER));
    }
    if (value.freeFormatData !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 53, () => $._encodeOctetString, $.BER)(value.freeFormatData, $.BER));
    }
    if (value.cAMELCallLegInformation !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 54, () => $._encodeSequenceOf<CAMELInformation>(() => _encode_CAMELInformation, $.BER), $.BER)(value.cAMELCallLegInformation, $.BER));
    }
    if (value.freeFormatDataAppend !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 55, () => $._encodeBoolean, $.BER)(value.freeFormatDataAppend, $.BER));
    }
    if (value.defaultCallHandling_2 !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 56, () => _encode_DefaultCallHandling, $.BER)(value.defaultCallHandling_2, $.BER));
    }
    if (value.gsm_SCFAddress_2 !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 57, () => $._encodeOctetString, $.BER)(value.gsm_SCFAddress_2, $.BER));
    }
    if (value.serviceKey_2 !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 58, () => $._encodeInteger, $.BER)(value.serviceKey_2, $.BER));
    }
    if (value.freeFormatData_2 !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 59, () => $._encodeOctetString, $.BER)(value.freeFormatData_2, $.BER));
    }
    if (value.freeFormatDataAppend_2 !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 60, () => $._encodeBoolean, $.BER)(value.freeFormatDataAppend_2, $.BER));
    }
    if (value.systemType !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 61, () => _encode_SystemType, $.BER)(value.systemType, $.BER));
    }
    if (value.rateIndication !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 62, () => $._encodeOctetString, $.BER)(value.rateIndication, $.BER));
    }
    if (value.locationRoutNum !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 63, () => $._encodeOctetString, $.BER)(value.locationRoutNum, $.BER));
    }
    if (value.lrnSoInd !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 64, () => _encode_MOCallRecord_lrnSoInd, $.BER)(value.lrnSoInd, $.BER));
    }
    if (value.lrnQuryStatus !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 65, () => _encode_MOCallRecord_lrnQuryStatus, $.BER)(value.lrnQuryStatus, $.BER));
    }
    if (value.jIPPara !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 66, () => $._encodeOctetString, $.BER)(value.jIPPara, $.BER));
    }
    if (value.jIPSoInd !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 67, () => _encode_MOCallRecord_jIPSoInd, $.BER)(value.jIPSoInd, $.BER));
    }
    if (value.jIPQuryStatus !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 68, () => _encode_MOCallRecord_jIPQuryStatus, $.BER)(value.jIPQuryStatus, $.BER));
    }
    if (value.partialRecordType !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 69, () => _encode_PartialRecordType, $.BER)(value.partialRecordType, $.BER));
    }
    if (value.guaranteedBitRate !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 70, () => _encode_GuaranteedBitRate, $.BER)(value.guaranteedBitRate, $.BER));
    }
    if (value.maximumBitRate !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 71, () => _encode_MaximumBitRate, $.BER)(value.maximumBitRate, $.BER));
    }
    if (value.redial !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 72, () => $._encodeBoolean, $.BER)(value.redial, $.BER));
    }
    if (value.reasonForServiceChange !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 73, () => _encode_ReasonForServiceChange, $.BER)(value.reasonForServiceChange, $.BER));
    }
    if (value.serviceChangeInitiator !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 74, () => $._encodeBoolean, $.BER)(value.serviceChangeInitiator, $.BER));
    }
    if (value.iCSI2ActiveFlag !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 75, () => $._encodeNull, $.BER)(value.iCSI2ActiveFlag, $.BER));
    }
    if (value.iMS_Charging_Identifier !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 76, () => $._encodeOctetString, $.BER)(value.iMS_Charging_Identifier, $.BER));
    }
    if (value.privateUserID !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 77, () => $._encodeGraphicString, $.BER)(value.privateUserID, $.BER));
    }
    return $._encodeSet(_components, $.BER);
}; }
    return _cached_encoder_for_MOCallRecord(value, elGetter);
}


/* eslint-enable */
