/* eslint-disable */
import {
    BOOLEAN,
    IA5String,
    INTEGER,
    OCTET_STRING,
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1SizeError,
    ASN1OverflowError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { ServiceConditionChange, _decode_ServiceConditionChange, _encode_ServiceConditionChange } from "../GPRSChargingDataTypes/ServiceConditionChange.ta.mjs";
import { EPCQoSInformation, _decode_EPCQoSInformation, _encode_EPCQoSInformation } from "../GPRSChargingDataTypes/EPCQoSInformation.ta.mjs";
import { GSNAddress, _decode_GSNAddress, _encode_GSNAddress } from "../GPRSChargingDataTypes/GSNAddress.ta.mjs";
import { PSFurnishChargingInformation, _decode_PSFurnishChargingInformation, _encode_PSFurnishChargingInformation } from "../GPRSChargingDataTypes/PSFurnishChargingInformation.ta.mjs";
import { AFRecordInformation, _decode_AFRecordInformation, _encode_AFRecordInformation } from "../GPRSChargingDataTypes/AFRecordInformation.ta.mjs";
import { EventBasedChargingInformation, _decode_EventBasedChargingInformation, _encode_EventBasedChargingInformation } from "../GPRSChargingDataTypes/EventBasedChargingInformation.ta.mjs";
import { TimeQuotaMechanism, _decode_TimeQuotaMechanism, _encode_TimeQuotaMechanism } from "../GPRSChargingDataTypes/TimeQuotaMechanism.ta.mjs";
import { ServiceSpecificInfo, _decode_ServiceSpecificInfo, _encode_ServiceSpecificInfo } from "../GPRSChargingDataTypes/ServiceSpecificInfo.ta.mjs";
import { PresenceReportingAreaStatus, _decode_PresenceReportingAreaStatus, _encode_PresenceReportingAreaStatus, _enum_for_PresenceReportingAreaStatus } from "../GPRSChargingDataTypes/PresenceReportingAreaStatus.ta.mjs";
import { UserCSGInformation, _decode_UserCSGInformation, _encode_UserCSGInformation } from "../GPRSChargingDataTypes/UserCSGInformation.ta.mjs";
import { UWANUserLocationInfo, _decode_UWANUserLocationInfo, _encode_UWANUserLocationInfo } from "../GPRSChargingDataTypes/UWANUserLocationInfo.ta.mjs";
import { RelatedChangeOfServiceCondition, _decode_RelatedChangeOfServiceCondition, _encode_RelatedChangeOfServiceCondition } from "../GPRSChargingDataTypes/RelatedChangeOfServiceCondition.ta.mjs";
import { ServingPLMNRateControl, _decode_ServingPLMNRateControl, _encode_ServingPLMNRateControl } from "../GPRSChargingDataTypes/ServingPLMNRateControl.ta.mjs";
import { APNRateControl, _decode_APNRateControl, _encode_APNRateControl } from "../GPRSChargingDataTypes/APNRateControl.ta.mjs";
import { ThreeGPPPSDataOffStatus, _decode_ThreeGPPPSDataOffStatus, _encode_ThreeGPPPSDataOffStatus, _enum_for_ThreeGPPPSDataOffStatus } from "../GPRSChargingDataTypes/ThreeGPPPSDataOffStatus.ta.mjs";
import { TWANUserLocationInfo, _decode_TWANUserLocationInfo, _encode_TWANUserLocationInfo } from "../GPRSChargingDataTypes/TWANUserLocationInfo.ta.mjs";
import { PresenceReportingAreaInfo, _decode_PresenceReportingAreaInfo, _encode_PresenceReportingAreaInfo } from "../GPRSChargingDataTypes/PresenceReportingAreaInfo.ta.mjs";


/**
 * @summary ChangeOfServiceCondition
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ChangeOfServiceCondition ::= SEQUENCE {
 *    ratingGroup                              [1] IMPLICIT INTEGER,
 *    chargingRuleBaseName                     [2] IMPLICIT IA5String  OPTIONAL,
 *    resultCode                               [3] IMPLICIT INTEGER OPTIONAL,
 *    localSequenceNumber                      [4] IMPLICIT INTEGER ( 0 .. 4294967295 ) OPTIONAL,
 *    timeOfFirstUsage                         [5] IMPLICIT OCTET STRING ( SIZE( 9 ) ) OPTIONAL,
 *    timeOfLastUsage                          [6] IMPLICIT OCTET STRING ( SIZE( 9 ) ) OPTIONAL,
 *    timeUsage                                [7] IMPLICIT INTEGER OPTIONAL,
 *    serviceConditionChange                   [8] IMPLICIT ServiceConditionChange,
 *    qoSInformationNeg                        [9] IMPLICIT EPCQoSInformation OPTIONAL,
 *    servingNodeAddress                       [10] GSNAddress OPTIONAL,
 *    datavolumeFBCUplink                      [12] IMPLICIT INTEGER OPTIONAL,
 *    datavolumeFBCDownlink                    [13] IMPLICIT INTEGER OPTIONAL,
 *    timeOfReport                             [14] IMPLICIT OCTET STRING ( SIZE( 9 ) ),
 *    failureHandlingContinue                  [16] IMPLICIT BOOLEAN OPTIONAL,
 *    serviceIdentifier                        [17] IMPLICIT INTEGER ( 0 .. 4294967295 ) OPTIONAL,
 *    pSFurnishChargingInformation             [18] IMPLICIT PSFurnishChargingInformation OPTIONAL,
 *    aFRecordInformation                      [19] IMPLICIT SEQUENCE  OF
 *       AFRecordInformation OPTIONAL,
 *    userLocationInformation                  [20] IMPLICIT OCTET STRING OPTIONAL,
 *    eventBasedChargingInformation            [21] IMPLICIT EventBasedChargingInformation OPTIONAL,
 *    timeQuotaMechanism                       [22] IMPLICIT TimeQuotaMechanism OPTIONAL,
 *    serviceSpecificInfo                      [23] IMPLICIT SEQUENCE  OF
 *       ServiceSpecificInfo OPTIONAL,
 *    threeGPP2UserLocationInformation         [24] IMPLICIT OCTET STRING OPTIONAL,
 *    sponsorIdentity                          [25] IMPLICIT OCTET STRING OPTIONAL,
 *    applicationServiceProviderIdentity       [26] IMPLICIT OCTET STRING OPTIONAL,
 *    aDCRuleBaseName                          [27] IMPLICIT IA5String  OPTIONAL,
 *    presenceReportingAreaStatus              [28] IMPLICIT PresenceReportingAreaStatus OPTIONAL,
 *    userCSGInformation                       [29] IMPLICIT UserCSGInformation OPTIONAL,
 *    rATType                                  [30] IMPLICIT INTEGER ( 0 .. 255 ) OPTIONAL,
 *    uWANUserLocationInformation              [32] IMPLICIT UWANUserLocationInfo OPTIONAL,
 *    relatedChangeOfServiceCondition          [33] IMPLICIT RelatedChangeOfServiceCondition OPTIONAL,
 *    servingPLMNRateControl                   [35] IMPLICIT ServingPLMNRateControl OPTIONAL,
 *    aPNRateControl                           [36] IMPLICIT APNRateControl OPTIONAL,
 *    threeGPPPSDataOffStatus                  [37] IMPLICIT ThreeGPPPSDataOffStatus OPTIONAL,
 *    trafficSteeringPolicyIDDownlink          [38] IMPLICIT OCTET STRING OPTIONAL,
 *    trafficSteeringPolicyIDUplink            [39] IMPLICIT OCTET STRING OPTIONAL,
 *    tWANUserLocationInformation              [40] IMPLICIT TWANUserLocationInfo OPTIONAL,
 *    listOfPresenceReportingAreaInformation   [41] IMPLICIT SEQUENCE  OF
 *       PresenceReportingAreaInfo OPTIONAL}
 * ```
 * 
 * @class
 */
export
class ChangeOfServiceCondition {
    /**
     * @summary `ratingGroup`.
     * @public
     * @readonly
     */
    readonly ratingGroup: INTEGER;
    /**
     * @summary `chargingRuleBaseName`.
     * @public
     * @readonly
     */
    readonly chargingRuleBaseName: OPTIONAL<IA5String>;
    /**
     * @summary `resultCode`.
     * @public
     * @readonly
     */
    readonly resultCode: OPTIONAL<INTEGER>;
    /**
     * @summary `localSequenceNumber`.
     * @public
     * @readonly
     */
    readonly localSequenceNumber: OPTIONAL<INTEGER>;
    /**
     * @summary `timeOfFirstUsage`.
     * @public
     * @readonly
     */
    readonly timeOfFirstUsage: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `timeOfLastUsage`.
     * @public
     * @readonly
     */
    readonly timeOfLastUsage: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `timeUsage`.
     * @public
     * @readonly
     */
    readonly timeUsage: OPTIONAL<INTEGER>;
    /**
     * @summary `serviceConditionChange`.
     * @public
     * @readonly
     */
    readonly serviceConditionChange: ServiceConditionChange;
    /**
     * @summary `qoSInformationNeg`.
     * @public
     * @readonly
     */
    readonly qoSInformationNeg: OPTIONAL<EPCQoSInformation>;
    /**
     * @summary `servingNodeAddress`.
     * @public
     * @readonly
     */
    readonly servingNodeAddress: OPTIONAL<GSNAddress>;
    /**
     * @summary `datavolumeFBCUplink`.
     * @public
     * @readonly
     */
    readonly datavolumeFBCUplink: OPTIONAL<INTEGER>;
    /**
     * @summary `datavolumeFBCDownlink`.
     * @public
     * @readonly
     */
    readonly datavolumeFBCDownlink: OPTIONAL<INTEGER>;
    /**
     * @summary `timeOfReport`.
     * @public
     * @readonly
     */
    readonly timeOfReport: OCTET_STRING;
    /**
     * @summary `failureHandlingContinue`.
     * @public
     * @readonly
     */
    readonly failureHandlingContinue: OPTIONAL<BOOLEAN>;
    /**
     * @summary `serviceIdentifier`.
     * @public
     * @readonly
     */
    readonly serviceIdentifier: OPTIONAL<INTEGER>;
    /**
     * @summary `pSFurnishChargingInformation`.
     * @public
     * @readonly
     */
    readonly pSFurnishChargingInformation: OPTIONAL<PSFurnishChargingInformation>;
    /**
     * @summary `aFRecordInformation`.
     * @public
     * @readonly
     */
    readonly aFRecordInformation: OPTIONAL<AFRecordInformation[]>;
    /**
     * @summary `userLocationInformation`.
     * @public
     * @readonly
     */
    readonly userLocationInformation: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `eventBasedChargingInformation`.
     * @public
     * @readonly
     */
    readonly eventBasedChargingInformation: OPTIONAL<EventBasedChargingInformation>;
    /**
     * @summary `timeQuotaMechanism`.
     * @public
     * @readonly
     */
    readonly timeQuotaMechanism: OPTIONAL<TimeQuotaMechanism>;
    /**
     * @summary `serviceSpecificInfo`.
     * @public
     * @readonly
     */
    readonly serviceSpecificInfo: OPTIONAL<ServiceSpecificInfo[]>;
    /**
     * @summary `threeGPP2UserLocationInformation`.
     * @public
     * @readonly
     */
    readonly threeGPP2UserLocationInformation: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `sponsorIdentity`.
     * @public
     * @readonly
     */
    readonly sponsorIdentity: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `applicationServiceProviderIdentity`.
     * @public
     * @readonly
     */
    readonly applicationServiceProviderIdentity: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `aDCRuleBaseName`.
     * @public
     * @readonly
     */
    readonly aDCRuleBaseName: OPTIONAL<IA5String>;
    /**
     * @summary `presenceReportingAreaStatus`.
     * @public
     * @readonly
     */
    readonly presenceReportingAreaStatus: OPTIONAL<PresenceReportingAreaStatus>;
    /**
     * @summary `userCSGInformation`.
     * @public
     * @readonly
     */
    readonly userCSGInformation: OPTIONAL<UserCSGInformation>;
    /**
     * @summary `rATType`.
     * @public
     * @readonly
     */
    readonly rATType: OPTIONAL<INTEGER>;
    /**
     * @summary `uWANUserLocationInformation`.
     * @public
     * @readonly
     */
    readonly uWANUserLocationInformation: OPTIONAL<UWANUserLocationInfo>;
    /**
     * @summary `relatedChangeOfServiceCondition`.
     * @public
     * @readonly
     */
    readonly relatedChangeOfServiceCondition: OPTIONAL<RelatedChangeOfServiceCondition>;
    /**
     * @summary `servingPLMNRateControl`.
     * @public
     * @readonly
     */
    readonly servingPLMNRateControl: OPTIONAL<ServingPLMNRateControl>;
    /**
     * @summary `aPNRateControl`.
     * @public
     * @readonly
     */
    readonly aPNRateControl: OPTIONAL<APNRateControl>;
    /**
     * @summary `threeGPPPSDataOffStatus`.
     * @public
     * @readonly
     */
    readonly threeGPPPSDataOffStatus: OPTIONAL<ThreeGPPPSDataOffStatus>;
    /**
     * @summary `trafficSteeringPolicyIDDownlink`.
     * @public
     * @readonly
     */
    readonly trafficSteeringPolicyIDDownlink: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `trafficSteeringPolicyIDUplink`.
     * @public
     * @readonly
     */
    readonly trafficSteeringPolicyIDUplink: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `tWANUserLocationInformation`.
     * @public
     * @readonly
     */
    readonly tWANUserLocationInformation: OPTIONAL<TWANUserLocationInfo>;
    /**
     * @summary `listOfPresenceReportingAreaInformation`.
     * @public
     * @readonly
     */
    readonly listOfPresenceReportingAreaInformation: OPTIONAL<PresenceReportingAreaInfo[]>;

    constructor (
        ratingGroup: INTEGER,
        chargingRuleBaseName: OPTIONAL<IA5String>,
        resultCode: OPTIONAL<INTEGER>,
        localSequenceNumber: OPTIONAL<INTEGER>,
        timeOfFirstUsage: OPTIONAL<OCTET_STRING>,
        timeOfLastUsage: OPTIONAL<OCTET_STRING>,
        timeUsage: OPTIONAL<INTEGER>,
        serviceConditionChange: ServiceConditionChange,
        qoSInformationNeg: OPTIONAL<EPCQoSInformation>,
        servingNodeAddress: OPTIONAL<GSNAddress>,
        datavolumeFBCUplink: OPTIONAL<INTEGER>,
        datavolumeFBCDownlink: OPTIONAL<INTEGER>,
        timeOfReport: OCTET_STRING,
        failureHandlingContinue: OPTIONAL<BOOLEAN>,
        serviceIdentifier: OPTIONAL<INTEGER>,
        pSFurnishChargingInformation: OPTIONAL<PSFurnishChargingInformation>,
        aFRecordInformation: OPTIONAL<AFRecordInformation[]>,
        userLocationInformation: OPTIONAL<OCTET_STRING>,
        eventBasedChargingInformation: OPTIONAL<EventBasedChargingInformation>,
        timeQuotaMechanism: OPTIONAL<TimeQuotaMechanism>,
        serviceSpecificInfo: OPTIONAL<ServiceSpecificInfo[]>,
        threeGPP2UserLocationInformation: OPTIONAL<OCTET_STRING>,
        sponsorIdentity: OPTIONAL<OCTET_STRING>,
        applicationServiceProviderIdentity: OPTIONAL<OCTET_STRING>,
        aDCRuleBaseName: OPTIONAL<IA5String>,
        presenceReportingAreaStatus: OPTIONAL<PresenceReportingAreaStatus>,
        userCSGInformation: OPTIONAL<UserCSGInformation>,
        rATType: OPTIONAL<INTEGER>,
        uWANUserLocationInformation: OPTIONAL<UWANUserLocationInfo>,
        relatedChangeOfServiceCondition: OPTIONAL<RelatedChangeOfServiceCondition>,
        servingPLMNRateControl: OPTIONAL<ServingPLMNRateControl>,
        aPNRateControl: OPTIONAL<APNRateControl>,
        threeGPPPSDataOffStatus: OPTIONAL<ThreeGPPPSDataOffStatus>,
        trafficSteeringPolicyIDDownlink: OPTIONAL<OCTET_STRING>,
        trafficSteeringPolicyIDUplink: OPTIONAL<OCTET_STRING>,
        tWANUserLocationInformation: OPTIONAL<TWANUserLocationInfo>,
        listOfPresenceReportingAreaInformation: OPTIONAL<PresenceReportingAreaInfo[]>
    ) {
        this.ratingGroup = ratingGroup;
        this.chargingRuleBaseName = chargingRuleBaseName;
        this.resultCode = resultCode;
        this.localSequenceNumber = localSequenceNumber;
        this.timeOfFirstUsage = timeOfFirstUsage;
        this.timeOfLastUsage = timeOfLastUsage;
        this.timeUsage = timeUsage;
        this.serviceConditionChange = serviceConditionChange;
        this.qoSInformationNeg = qoSInformationNeg;
        this.servingNodeAddress = servingNodeAddress;
        this.datavolumeFBCUplink = datavolumeFBCUplink;
        this.datavolumeFBCDownlink = datavolumeFBCDownlink;
        this.timeOfReport = timeOfReport;
        this.failureHandlingContinue = failureHandlingContinue;
        this.serviceIdentifier = serviceIdentifier;
        this.pSFurnishChargingInformation = pSFurnishChargingInformation;
        this.aFRecordInformation = aFRecordInformation;
        this.userLocationInformation = userLocationInformation;
        this.eventBasedChargingInformation = eventBasedChargingInformation;
        this.timeQuotaMechanism = timeQuotaMechanism;
        this.serviceSpecificInfo = serviceSpecificInfo;
        this.threeGPP2UserLocationInformation = threeGPP2UserLocationInformation;
        this.sponsorIdentity = sponsorIdentity;
        this.applicationServiceProviderIdentity = applicationServiceProviderIdentity;
        this.aDCRuleBaseName = aDCRuleBaseName;
        this.presenceReportingAreaStatus = presenceReportingAreaStatus;
        this.userCSGInformation = userCSGInformation;
        this.rATType = rATType;
        this.uWANUserLocationInformation = uWANUserLocationInformation;
        this.relatedChangeOfServiceCondition = relatedChangeOfServiceCondition;
        this.servingPLMNRateControl = servingPLMNRateControl;
        this.aPNRateControl = aPNRateControl;
        this.threeGPPPSDataOffStatus = threeGPPPSDataOffStatus;
        this.trafficSteeringPolicyIDDownlink = trafficSteeringPolicyIDDownlink;
        this.trafficSteeringPolicyIDUplink = trafficSteeringPolicyIDUplink;
        this.tWANUserLocationInformation = tWANUserLocationInformation;
        this.listOfPresenceReportingAreaInformation = listOfPresenceReportingAreaInformation;
    
        if (this.localSequenceNumber !== undefined && ((typeof this.localSequenceNumber === "bigint" ? Number(this.localSequenceNumber) : this.localSequenceNumber) < 0 || (typeof this.localSequenceNumber === "bigint" ? Number(this.localSequenceNumber) : this.localSequenceNumber) > 4294967295)) {
            throw new ASN1OverflowError("ChangeOfServiceCondition.localSequenceNumber violates INTEGER range");
        }
        if (this.timeOfFirstUsage !== undefined && (this.timeOfFirstUsage.length !== 9)) {
            throw new ASN1SizeError("ChangeOfServiceCondition.timeOfFirstUsage violates SIZE constraint");
        }
        if (this.timeOfLastUsage !== undefined && (this.timeOfLastUsage.length !== 9)) {
            throw new ASN1SizeError("ChangeOfServiceCondition.timeOfLastUsage violates SIZE constraint");
        }
        if ((this.timeOfReport.length !== 9)) {
            throw new ASN1SizeError("ChangeOfServiceCondition.timeOfReport violates SIZE constraint");
        }
        if (this.serviceIdentifier !== undefined && ((typeof this.serviceIdentifier === "bigint" ? Number(this.serviceIdentifier) : this.serviceIdentifier) < 0 || (typeof this.serviceIdentifier === "bigint" ? Number(this.serviceIdentifier) : this.serviceIdentifier) > 4294967295)) {
            throw new ASN1OverflowError("ChangeOfServiceCondition.serviceIdentifier violates INTEGER range");
        }
        if (this.rATType !== undefined && ((typeof this.rATType === "bigint" ? Number(this.rATType) : this.rATType) < 0 || (typeof this.rATType === "bigint" ? Number(this.rATType) : this.rATType) > 255)) {
            throw new ASN1OverflowError("ChangeOfServiceCondition.rATType violates INTEGER range");
        }
    }

    /**
     * @summary Restructures an object into a ChangeOfServiceCondition
     * @description
     * 
     * This takes an `object` and converts it to a `ChangeOfServiceCondition`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ChangeOfServiceCondition`.
     * @returns {ChangeOfServiceCondition}
     */
    public static _from_object (_o: { [_K in keyof (ChangeOfServiceCondition)]: (ChangeOfServiceCondition)[_K] }): ChangeOfServiceCondition {
        return new ChangeOfServiceCondition(_o.ratingGroup, _o.chargingRuleBaseName, _o.resultCode, _o.localSequenceNumber, _o.timeOfFirstUsage, _o.timeOfLastUsage, _o.timeUsage, _o.serviceConditionChange, _o.qoSInformationNeg, _o.servingNodeAddress, _o.datavolumeFBCUplink, _o.datavolumeFBCDownlink, _o.timeOfReport, _o.failureHandlingContinue, _o.serviceIdentifier, _o.pSFurnishChargingInformation, _o.aFRecordInformation, _o.userLocationInformation, _o.eventBasedChargingInformation, _o.timeQuotaMechanism, _o.serviceSpecificInfo, _o.threeGPP2UserLocationInformation, _o.sponsorIdentity, _o.applicationServiceProviderIdentity, _o.aDCRuleBaseName, _o.presenceReportingAreaStatus, _o.userCSGInformation, _o.rATType, _o.uWANUserLocationInformation, _o.relatedChangeOfServiceCondition, _o.servingPLMNRateControl, _o.aPNRateControl, _o.threeGPPPSDataOffStatus, _o.trafficSteeringPolicyIDDownlink, _o.trafficSteeringPolicyIDUplink, _o.tWANUserLocationInformation, _o.listOfPresenceReportingAreaInformation);
    }

        /**
         * @summary The enum used as the type of the component `presenceReportingAreaStatus`
         * @public
         * @static
         */

    public static _enum_for_presenceReportingAreaStatus = _enum_for_PresenceReportingAreaStatus;        /**
         * @summary The enum used as the type of the component `threeGPPPSDataOffStatus`
         * @public
         * @static
         */

    public static _enum_for_threeGPPPSDataOffStatus = _enum_for_ThreeGPPPSDataOffStatus;
}

/**
 * @summary The Leading Root Component Types of ChangeOfServiceCondition
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ChangeOfServiceCondition: $.ComponentSpec[] = [
    new $.ComponentSpec("ratingGroup", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("chargingRuleBaseName", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("resultCode", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("localSequenceNumber", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("timeOfFirstUsage", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("timeOfLastUsage", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("timeUsage", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("serviceConditionChange", false, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("qoSInformationNeg", true, $.hasTag(_TagClass.context, 9)),
    new $.ComponentSpec("servingNodeAddress", true, $.hasTag(_TagClass.context, 10)),
    new $.ComponentSpec("datavolumeFBCUplink", true, $.hasTag(_TagClass.context, 12)),
    new $.ComponentSpec("datavolumeFBCDownlink", true, $.hasTag(_TagClass.context, 13)),
    new $.ComponentSpec("timeOfReport", false, $.hasTag(_TagClass.context, 14)),
    new $.ComponentSpec("failureHandlingContinue", true, $.hasTag(_TagClass.context, 16)),
    new $.ComponentSpec("serviceIdentifier", true, $.hasTag(_TagClass.context, 17)),
    new $.ComponentSpec("pSFurnishChargingInformation", true, $.hasTag(_TagClass.context, 18)),
    new $.ComponentSpec("aFRecordInformation", true, $.hasTag(_TagClass.context, 19)),
    new $.ComponentSpec("userLocationInformation", true, $.hasTag(_TagClass.context, 20)),
    new $.ComponentSpec("eventBasedChargingInformation", true, $.hasTag(_TagClass.context, 21)),
    new $.ComponentSpec("timeQuotaMechanism", true, $.hasTag(_TagClass.context, 22)),
    new $.ComponentSpec("serviceSpecificInfo", true, $.hasTag(_TagClass.context, 23)),
    new $.ComponentSpec("threeGPP2UserLocationInformation", true, $.hasTag(_TagClass.context, 24)),
    new $.ComponentSpec("sponsorIdentity", true, $.hasTag(_TagClass.context, 25)),
    new $.ComponentSpec("applicationServiceProviderIdentity", true, $.hasTag(_TagClass.context, 26)),
    new $.ComponentSpec("aDCRuleBaseName", true, $.hasTag(_TagClass.context, 27)),
    new $.ComponentSpec("presenceReportingAreaStatus", true, $.hasTag(_TagClass.context, 28)),
    new $.ComponentSpec("userCSGInformation", true, $.hasTag(_TagClass.context, 29)),
    new $.ComponentSpec("rATType", true, $.hasTag(_TagClass.context, 30)),
    new $.ComponentSpec("uWANUserLocationInformation", true, $.hasTag(_TagClass.context, 32)),
    new $.ComponentSpec("relatedChangeOfServiceCondition", true, $.hasTag(_TagClass.context, 33)),
    new $.ComponentSpec("servingPLMNRateControl", true, $.hasTag(_TagClass.context, 35)),
    new $.ComponentSpec("aPNRateControl", true, $.hasTag(_TagClass.context, 36)),
    new $.ComponentSpec("threeGPPPSDataOffStatus", true, $.hasTag(_TagClass.context, 37)),
    new $.ComponentSpec("trafficSteeringPolicyIDDownlink", true, $.hasTag(_TagClass.context, 38)),
    new $.ComponentSpec("trafficSteeringPolicyIDUplink", true, $.hasTag(_TagClass.context, 39)),
    new $.ComponentSpec("tWANUserLocationInformation", true, $.hasTag(_TagClass.context, 40)),
    new $.ComponentSpec("listOfPresenceReportingAreaInformation", true, $.hasTag(_TagClass.context, 41))
];

/**
 * @summary The Trailing Root Component Types of ChangeOfServiceCondition
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ChangeOfServiceCondition: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ChangeOfServiceCondition
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ChangeOfServiceCondition: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ChangeOfServiceCondition: $.ASN1Decoder<ChangeOfServiceCondition> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ChangeOfServiceCondition
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ChangeOfServiceCondition (el: _Element): ChangeOfServiceCondition {
    if (!_cached_decoder_for_ChangeOfServiceCondition) { _cached_decoder_for_ChangeOfServiceCondition = function (el: _Element): ChangeOfServiceCondition {
    let ratingGroup!: INTEGER;
    let chargingRuleBaseName: OPTIONAL<IA5String>;
    let resultCode: OPTIONAL<INTEGER>;
    let localSequenceNumber: OPTIONAL<INTEGER>;
    let timeOfFirstUsage: OPTIONAL<OCTET_STRING>;
    let timeOfLastUsage: OPTIONAL<OCTET_STRING>;
    let timeUsage: OPTIONAL<INTEGER>;
    let serviceConditionChange!: ServiceConditionChange;
    let qoSInformationNeg: OPTIONAL<EPCQoSInformation>;
    let servingNodeAddress: OPTIONAL<GSNAddress>;
    let datavolumeFBCUplink: OPTIONAL<INTEGER>;
    let datavolumeFBCDownlink: OPTIONAL<INTEGER>;
    let timeOfReport!: OCTET_STRING;
    let failureHandlingContinue: OPTIONAL<BOOLEAN>;
    let serviceIdentifier: OPTIONAL<INTEGER>;
    let pSFurnishChargingInformation: OPTIONAL<PSFurnishChargingInformation>;
    let aFRecordInformation: OPTIONAL<AFRecordInformation[]>;
    let userLocationInformation: OPTIONAL<OCTET_STRING>;
    let eventBasedChargingInformation: OPTIONAL<EventBasedChargingInformation>;
    let timeQuotaMechanism: OPTIONAL<TimeQuotaMechanism>;
    let serviceSpecificInfo: OPTIONAL<ServiceSpecificInfo[]>;
    let threeGPP2UserLocationInformation: OPTIONAL<OCTET_STRING>;
    let sponsorIdentity: OPTIONAL<OCTET_STRING>;
    let applicationServiceProviderIdentity: OPTIONAL<OCTET_STRING>;
    let aDCRuleBaseName: OPTIONAL<IA5String>;
    let presenceReportingAreaStatus: OPTIONAL<PresenceReportingAreaStatus>;
    let userCSGInformation: OPTIONAL<UserCSGInformation>;
    let rATType: OPTIONAL<INTEGER>;
    let uWANUserLocationInformation: OPTIONAL<UWANUserLocationInfo>;
    let relatedChangeOfServiceCondition: OPTIONAL<RelatedChangeOfServiceCondition>;
    let servingPLMNRateControl: OPTIONAL<ServingPLMNRateControl>;
    let aPNRateControl: OPTIONAL<APNRateControl>;
    let threeGPPPSDataOffStatus: OPTIONAL<ThreeGPPPSDataOffStatus>;
    let trafficSteeringPolicyIDDownlink: OPTIONAL<OCTET_STRING>;
    let trafficSteeringPolicyIDUplink: OPTIONAL<OCTET_STRING>;
    let tWANUserLocationInformation: OPTIONAL<TWANUserLocationInfo>;
    let listOfPresenceReportingAreaInformation: OPTIONAL<PresenceReportingAreaInfo[]>;
    const callbacks: $.DecodingMap = {
        "ratingGroup": (_el: _Element): void => { ratingGroup = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "chargingRuleBaseName": (_el: _Element): void => { chargingRuleBaseName = $._decode_implicit<IA5String>(() => $._decodeIA5String)(_el); },
        "resultCode": (_el: _Element): void => { resultCode = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "localSequenceNumber": (_el: _Element): void => { localSequenceNumber = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "timeOfFirstUsage": (_el: _Element): void => { timeOfFirstUsage = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "timeOfLastUsage": (_el: _Element): void => { timeOfLastUsage = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "timeUsage": (_el: _Element): void => { timeUsage = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "serviceConditionChange": (_el: _Element): void => { serviceConditionChange = $._decode_implicit<ServiceConditionChange>(() => _decode_ServiceConditionChange)(_el); },
        "qoSInformationNeg": (_el: _Element): void => { qoSInformationNeg = $._decode_implicit<EPCQoSInformation>(() => _decode_EPCQoSInformation)(_el); },
        "servingNodeAddress": (_el: _Element): void => { servingNodeAddress = $._decode_explicit<GSNAddress>(() => _decode_GSNAddress)(_el); },
        "datavolumeFBCUplink": (_el: _Element): void => { datavolumeFBCUplink = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "datavolumeFBCDownlink": (_el: _Element): void => { datavolumeFBCDownlink = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "timeOfReport": (_el: _Element): void => { timeOfReport = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "failureHandlingContinue": (_el: _Element): void => { failureHandlingContinue = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "serviceIdentifier": (_el: _Element): void => { serviceIdentifier = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "pSFurnishChargingInformation": (_el: _Element): void => { pSFurnishChargingInformation = $._decode_implicit<PSFurnishChargingInformation>(() => _decode_PSFurnishChargingInformation)(_el); },
        "aFRecordInformation": (_el: _Element): void => { aFRecordInformation = $._decode_implicit<AFRecordInformation[]>(() => $._decodeSequenceOf<AFRecordInformation>(() => _decode_AFRecordInformation))(_el); },
        "userLocationInformation": (_el: _Element): void => { userLocationInformation = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "eventBasedChargingInformation": (_el: _Element): void => { eventBasedChargingInformation = $._decode_implicit<EventBasedChargingInformation>(() => _decode_EventBasedChargingInformation)(_el); },
        "timeQuotaMechanism": (_el: _Element): void => { timeQuotaMechanism = $._decode_implicit<TimeQuotaMechanism>(() => _decode_TimeQuotaMechanism)(_el); },
        "serviceSpecificInfo": (_el: _Element): void => { serviceSpecificInfo = $._decode_implicit<ServiceSpecificInfo[]>(() => $._decodeSequenceOf<ServiceSpecificInfo>(() => _decode_ServiceSpecificInfo))(_el); },
        "threeGPP2UserLocationInformation": (_el: _Element): void => { threeGPP2UserLocationInformation = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "sponsorIdentity": (_el: _Element): void => { sponsorIdentity = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "applicationServiceProviderIdentity": (_el: _Element): void => { applicationServiceProviderIdentity = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "aDCRuleBaseName": (_el: _Element): void => { aDCRuleBaseName = $._decode_implicit<IA5String>(() => $._decodeIA5String)(_el); },
        "presenceReportingAreaStatus": (_el: _Element): void => { presenceReportingAreaStatus = $._decode_implicit<PresenceReportingAreaStatus>(() => _decode_PresenceReportingAreaStatus)(_el); },
        "userCSGInformation": (_el: _Element): void => { userCSGInformation = $._decode_implicit<UserCSGInformation>(() => _decode_UserCSGInformation)(_el); },
        "rATType": (_el: _Element): void => { rATType = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "uWANUserLocationInformation": (_el: _Element): void => { uWANUserLocationInformation = $._decode_implicit<UWANUserLocationInfo>(() => _decode_UWANUserLocationInfo)(_el); },
        "relatedChangeOfServiceCondition": (_el: _Element): void => { relatedChangeOfServiceCondition = $._decode_implicit<RelatedChangeOfServiceCondition>(() => _decode_RelatedChangeOfServiceCondition)(_el); },
        "servingPLMNRateControl": (_el: _Element): void => { servingPLMNRateControl = $._decode_implicit<ServingPLMNRateControl>(() => _decode_ServingPLMNRateControl)(_el); },
        "aPNRateControl": (_el: _Element): void => { aPNRateControl = $._decode_implicit<APNRateControl>(() => _decode_APNRateControl)(_el); },
        "threeGPPPSDataOffStatus": (_el: _Element): void => { threeGPPPSDataOffStatus = $._decode_implicit<ThreeGPPPSDataOffStatus>(() => _decode_ThreeGPPPSDataOffStatus)(_el); },
        "trafficSteeringPolicyIDDownlink": (_el: _Element): void => { trafficSteeringPolicyIDDownlink = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "trafficSteeringPolicyIDUplink": (_el: _Element): void => { trafficSteeringPolicyIDUplink = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "tWANUserLocationInformation": (_el: _Element): void => { tWANUserLocationInformation = $._decode_implicit<TWANUserLocationInfo>(() => _decode_TWANUserLocationInfo)(_el); },
        "listOfPresenceReportingAreaInformation": (_el: _Element): void => { listOfPresenceReportingAreaInformation = $._decode_implicit<PresenceReportingAreaInfo[]>(() => $._decodeSequenceOf<PresenceReportingAreaInfo>(() => _decode_PresenceReportingAreaInfo))(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ChangeOfServiceCondition,
        _extension_additions_list_spec_for_ChangeOfServiceCondition,
        _root_component_type_list_2_spec_for_ChangeOfServiceCondition,
        undefined,
    );
    return new ChangeOfServiceCondition(
        ratingGroup,
        chargingRuleBaseName,
        resultCode,
        localSequenceNumber,
        timeOfFirstUsage,
        timeOfLastUsage,
        timeUsage,
        serviceConditionChange,
        qoSInformationNeg,
        servingNodeAddress,
        datavolumeFBCUplink,
        datavolumeFBCDownlink,
        timeOfReport,
        failureHandlingContinue,
        serviceIdentifier,
        pSFurnishChargingInformation,
        aFRecordInformation,
        userLocationInformation,
        eventBasedChargingInformation,
        timeQuotaMechanism,
        serviceSpecificInfo,
        threeGPP2UserLocationInformation,
        sponsorIdentity,
        applicationServiceProviderIdentity,
        aDCRuleBaseName,
        presenceReportingAreaStatus,
        userCSGInformation,
        rATType,
        uWANUserLocationInformation,
        relatedChangeOfServiceCondition,
        servingPLMNRateControl,
        aPNRateControl,
        threeGPPPSDataOffStatus,
        trafficSteeringPolicyIDDownlink,
        trafficSteeringPolicyIDUplink,
        tWANUserLocationInformation,
        listOfPresenceReportingAreaInformation
    );
}; }
    return _cached_decoder_for_ChangeOfServiceCondition(el);
}

let _cached_encoder_for_ChangeOfServiceCondition: $.ASN1Encoder<ChangeOfServiceCondition> | null = null;

/**
 * @summary Encodes a(n) ChangeOfServiceCondition into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ChangeOfServiceCondition, encoded as an ASN.1 Element.
 */
export
function _encode_ChangeOfServiceCondition (value: ChangeOfServiceCondition, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ChangeOfServiceCondition) { _cached_encoder_for_ChangeOfServiceCondition = function (value: ChangeOfServiceCondition, _elGetter: $.ASN1Encoder<ChangeOfServiceCondition>): _Element {
    const _components: _Element[] = [];
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeInteger, $.BER)(value.ratingGroup, $.BER));
    if (value.chargingRuleBaseName !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => $._encodeIA5String, $.BER)(value.chargingRuleBaseName, $.BER));
    }
    if (value.resultCode !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => $._encodeInteger, $.BER)(value.resultCode, $.BER));
    }
    if (value.localSequenceNumber !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 4, () => $._encodeInteger, $.BER)(value.localSequenceNumber, $.BER));
    }
    if (value.timeOfFirstUsage !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 5, () => $._encodeOctetString, $.BER)(value.timeOfFirstUsage, $.BER));
    }
    if (value.timeOfLastUsage !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 6, () => $._encodeOctetString, $.BER)(value.timeOfLastUsage, $.BER));
    }
    if (value.timeUsage !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 7, () => $._encodeInteger, $.BER)(value.timeUsage, $.BER));
    }
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 8, () => _encode_ServiceConditionChange, $.BER)(value.serviceConditionChange, $.BER));
    if (value.qoSInformationNeg !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 9, () => _encode_EPCQoSInformation, $.BER)(value.qoSInformationNeg, $.BER));
    }
    if (value.servingNodeAddress !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 10, () => _encode_GSNAddress, $.BER)(value.servingNodeAddress, $.BER));
    }
    if (value.datavolumeFBCUplink !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 12, () => $._encodeInteger, $.BER)(value.datavolumeFBCUplink, $.BER));
    }
    if (value.datavolumeFBCDownlink !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 13, () => $._encodeInteger, $.BER)(value.datavolumeFBCDownlink, $.BER));
    }
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 14, () => $._encodeOctetString, $.BER)(value.timeOfReport, $.BER));
    if (value.failureHandlingContinue !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 16, () => $._encodeBoolean, $.BER)(value.failureHandlingContinue, $.BER));
    }
    if (value.serviceIdentifier !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 17, () => $._encodeInteger, $.BER)(value.serviceIdentifier, $.BER));
    }
    if (value.pSFurnishChargingInformation !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 18, () => _encode_PSFurnishChargingInformation, $.BER)(value.pSFurnishChargingInformation, $.BER));
    }
    if (value.aFRecordInformation !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 19, () => $._encodeSequenceOf<AFRecordInformation>(() => _encode_AFRecordInformation, $.BER), $.BER)(value.aFRecordInformation, $.BER));
    }
    if (value.userLocationInformation !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 20, () => $._encodeOctetString, $.BER)(value.userLocationInformation, $.BER));
    }
    if (value.eventBasedChargingInformation !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 21, () => _encode_EventBasedChargingInformation, $.BER)(value.eventBasedChargingInformation, $.BER));
    }
    if (value.timeQuotaMechanism !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 22, () => _encode_TimeQuotaMechanism, $.BER)(value.timeQuotaMechanism, $.BER));
    }
    if (value.serviceSpecificInfo !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 23, () => $._encodeSequenceOf<ServiceSpecificInfo>(() => _encode_ServiceSpecificInfo, $.BER), $.BER)(value.serviceSpecificInfo, $.BER));
    }
    if (value.threeGPP2UserLocationInformation !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 24, () => $._encodeOctetString, $.BER)(value.threeGPP2UserLocationInformation, $.BER));
    }
    if (value.sponsorIdentity !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 25, () => $._encodeOctetString, $.BER)(value.sponsorIdentity, $.BER));
    }
    if (value.applicationServiceProviderIdentity !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 26, () => $._encodeOctetString, $.BER)(value.applicationServiceProviderIdentity, $.BER));
    }
    if (value.aDCRuleBaseName !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 27, () => $._encodeIA5String, $.BER)(value.aDCRuleBaseName, $.BER));
    }
    if (value.presenceReportingAreaStatus !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 28, () => _encode_PresenceReportingAreaStatus, $.BER)(value.presenceReportingAreaStatus, $.BER));
    }
    if (value.userCSGInformation !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 29, () => _encode_UserCSGInformation, $.BER)(value.userCSGInformation, $.BER));
    }
    if (value.rATType !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 30, () => $._encodeInteger, $.BER)(value.rATType, $.BER));
    }
    if (value.uWANUserLocationInformation !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 32, () => _encode_UWANUserLocationInfo, $.BER)(value.uWANUserLocationInformation, $.BER));
    }
    if (value.relatedChangeOfServiceCondition !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 33, () => _encode_RelatedChangeOfServiceCondition, $.BER)(value.relatedChangeOfServiceCondition, $.BER));
    }
    if (value.servingPLMNRateControl !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 35, () => _encode_ServingPLMNRateControl, $.BER)(value.servingPLMNRateControl, $.BER));
    }
    if (value.aPNRateControl !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 36, () => _encode_APNRateControl, $.BER)(value.aPNRateControl, $.BER));
    }
    if (value.threeGPPPSDataOffStatus !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 37, () => _encode_ThreeGPPPSDataOffStatus, $.BER)(value.threeGPPPSDataOffStatus, $.BER));
    }
    if (value.trafficSteeringPolicyIDDownlink !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 38, () => $._encodeOctetString, $.BER)(value.trafficSteeringPolicyIDDownlink, $.BER));
    }
    if (value.trafficSteeringPolicyIDUplink !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 39, () => $._encodeOctetString, $.BER)(value.trafficSteeringPolicyIDUplink, $.BER));
    }
    if (value.tWANUserLocationInformation !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 40, () => _encode_TWANUserLocationInfo, $.BER)(value.tWANUserLocationInformation, $.BER));
    }
    if (value.listOfPresenceReportingAreaInformation !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 41, () => $._encodeSequenceOf<PresenceReportingAreaInfo>(() => _encode_PresenceReportingAreaInfo, $.BER), $.BER)(value.listOfPresenceReportingAreaInformation, $.BER));
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_ChangeOfServiceCondition(value, elGetter);
}


/* eslint-enable */
