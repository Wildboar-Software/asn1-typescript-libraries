/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "@wildboar/asn1";
import { type PARAMETERS_BOUND } from "../CAP-classes/PARAMETERS-BOUND.oca.mjs";


/**
 * @summary cAPSpecificBoundSet
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * cAPSpecificBoundSet PARAMETERS-BOUND ::= {
 *     MINIMUM-FOR-ACCESS-POINT-NAME        1
 *     MAXIMUM-FOR-ACCESS-POINT-NAME        100
 *     MINIMUM-FOR-ACH-BILLING-CHARGING        5
 *     MAXIMUM-FOR-ACH-BILLING-CHARGING        177
 *     MINIMUM-FOR-ATTRIBUTES            2
 *     MAXIMUM-FOR-ATTRIBUTES            10
 *     MAXIMUM-FOR-BEARER-CAPABILITY        11
 *     MINIMUM-FOR-CALLED-PARTY-BCD-NUMBER        1
 *     MAXIMUM-FOR-CALLED-PARTY-BCD-NUMBER        41
 *     MINIMUM-FOR-CALLED-PARTY-NUMBER        2
 *     MAXIMUM-FOR-CALLED-PARTY-NUMBER        18
 *     MINIMUM-FOR-CALLING-PARTY-NUMBER        2
 *     MAXIMUM-FOR-CALLING-PARTY-NUMBER        10
 *     MINIMUM-FOR-CALL-RESULT            12
 *     MAXIMUM-FOR-CALL-RESULT            193
 *     MINIMUM-FOR-CARRIER                4
 *     MAXIMUM-FOR-CARRIER                4
 *     MINIMUM-FOR-CAUSE                2
 *     MAXIMUM-FOR-CAUSE                32
 *     MINIMUM-FOR-DIGITS                2
 *     MAXIMUM-FOR-DIGITS                16
 *     MINIMUM-FOR-FCI-BILLING-CHARGING-DATA    1
 *     MAXIMUM-FOR-FCI-BILLING-CHARGING-DATA    160
 *     MINIMUM-FOR-FCI-BILLING-CHARGING        5
 *     MAXIMUM-FOR-FCI-BILLING-CHARGING        225
 *     MINIMUM-FOR-GENERIC-NUMBER            3
 *     MAXIMUM-FOR-GENERIC-NUMBER            11
 *     MINIMUM-FOR-GPRS-CAUSE-LENGTH        1
 *     MAXIMUM-FOR-GPRS-CAUSE-LENGTH        1
 *     MINIMUM-FOR-IP-SSP-CAPABILITIES        1
 *     MAXIMUM-FOR-IP-SSP-CAPABILITIES        4
 *     MINIMUM-FOR-LOCATION-NUMBER            2
 *     MAXIMUM-FOR-LOCATION-NUMBER            10
 *     MINIMUM-FOR-LOW-LAYER-COMPATIBILITY       1
 *     MAXIMUM-FOR-LOW-LAYER-COMPATIBILITY       16
 *     MINIMUM-FOR-MESSAGE-CONTENT            1
 *     MAXIMUM-FOR-MESSAGE-CONTENT            127
 *     MINIMUM-FOR-ORIGINAL-CALLED-PARTY-ID    2
 *     MAXIMUM-FOR-ORIGINAL-CALLED-PARTY-ID    10
 *     MINIMUM-FOR-PDP-ADDRESS-LENGTH        1
 *     MAXIMUM-FOR-PDP-ADDRESS-LENGTH        63
 *     MINIMUM-FOR-REDIRECTING-ID            2
 *     MAXIMUM-FOR-REDIRECTING-ID            10
 *     MINIMUM-FOR-GSMSCF-ID            2
 *     MAXIMUM-FOR-GSMSCF-ID            25
 *     -- maximum length of the ScfID shall be 10 unless the operator defined format
 *     -- of the ScfID requires a higher maximum length
 *     MINIMUM-FOR-SCI-BILLING-CHARGING        4
 *     MAXIMUM-FOR-SCI-BILLING-CHARGING        225
 *     MINIMUM-FOR-TIME-AND-TIMEZONE        8
 *     MAXIMUM-FOR-TIME-AND-TIMEZONE        8
 *     NUM-OF-BCSM-EVENT                30
 *     NUM-OF-CHANGE-OF-POSITION-CONTROL-INFO    10
 *     NUM-OF-CSS                    127
 *     NUM-OF-SMS-EVENTS                10
 *     NUM-OF-GPRS-EVENTS                10
 *     NUM-OF-EXTENSIONS                10
 *     NUM-OF-GENERIC-NUMBERS            5
 *     NUM-OF-MESSAGE-IDS                16}
 * ```
 * 
 * @constant
 * @type {PARAMETERS_BOUND}
 * @implements {PARAMETERS_BOUND}
 */
export
const cAPSpecificBoundSet: PARAMETERS_BOUND = {
    class: "PARAMETERS-BOUND",
    decoderFor: {
    },
    encoderFor: {
    },
    "&minAccessPointNameLength": 1 /* OBJECT_FIELD_SETTING */,
    "&maxAccessPointNameLength": 100 /* OBJECT_FIELD_SETTING */,
    "&minAChBillingChargingLength": 5 /* OBJECT_FIELD_SETTING */,
    "&maxAChBillingChargingLength": 177 /* OBJECT_FIELD_SETTING */,
    "&minAttributesLength": 2 /* OBJECT_FIELD_SETTING */,
    "&maxAttributesLength": 10 /* OBJECT_FIELD_SETTING */,
    "&maxBearerCapabilityLength": 11 /* OBJECT_FIELD_SETTING */,
    "&minCalledPartyBCDNumberLength": 1 /* OBJECT_FIELD_SETTING */,
    "&maxCalledPartyBCDNumberLength": 41 /* OBJECT_FIELD_SETTING */,
    "&minCalledPartyNumberLength": 2 /* OBJECT_FIELD_SETTING */,
    "&maxCalledPartyNumberLength": 18 /* OBJECT_FIELD_SETTING */,
    "&minCallingPartyNumberLength": 2 /* OBJECT_FIELD_SETTING */,
    "&maxCallingPartyNumberLength": 10 /* OBJECT_FIELD_SETTING */,
    "&minCallResultLength": 12 /* OBJECT_FIELD_SETTING */,
    "&maxCallResultLength": 193 /* OBJECT_FIELD_SETTING */,
    "&minCarrierLength": 4 /* OBJECT_FIELD_SETTING */,
    "&maxCarrierLength": 4 /* OBJECT_FIELD_SETTING */,
    "&minCauseLength": 2 /* OBJECT_FIELD_SETTING */,
    "&maxCauseLength": 32 /* OBJECT_FIELD_SETTING */,
    "&minDigitsLength": 2 /* OBJECT_FIELD_SETTING */,
    "&maxDigitsLength": 16 /* OBJECT_FIELD_SETTING */,
    "&minFCIBillingChargingDataLength": 1 /* OBJECT_FIELD_SETTING */,
    "&maxFCIBillingChargingDataLength": 160 /* OBJECT_FIELD_SETTING */,
    "&minFCIBillingChargingLength": 5 /* OBJECT_FIELD_SETTING */,
    "&maxFCIBillingChargingLength": 225 /* OBJECT_FIELD_SETTING */,
    "&minGenericNumberLength": 3 /* OBJECT_FIELD_SETTING */,
    "&maxGenericNumberLength": 11 /* OBJECT_FIELD_SETTING */,
    "&minGPRSCauseLength": 1 /* OBJECT_FIELD_SETTING */,
    "&maxGPRSCauseLength": 1 /* OBJECT_FIELD_SETTING */,
    "&minIPSSPCapabilitiesLength": 1 /* OBJECT_FIELD_SETTING */,
    "&maxIPSSPCapabilitiesLength": 4 /* OBJECT_FIELD_SETTING */,
    "&minLocationNumberLength": 2 /* OBJECT_FIELD_SETTING */,
    "&maxLocationNumberLength": 10 /* OBJECT_FIELD_SETTING */,
    "&minLowLayerCompatibilityLength": 1 /* OBJECT_FIELD_SETTING */,
    "&maxLowLayerCompatibilityLength": 16 /* OBJECT_FIELD_SETTING */,
    "&minMessageContentLength": 1 /* OBJECT_FIELD_SETTING */,
    "&maxMessageContentLength": 127 /* OBJECT_FIELD_SETTING */,
    "&minOriginalCalledPartyIDLength": 2 /* OBJECT_FIELD_SETTING */,
    "&maxOriginalCalledPartyIDLength": 10 /* OBJECT_FIELD_SETTING */,
    "&minPDPAddressLength": 1 /* OBJECT_FIELD_SETTING */,
    "&maxPDPAddressLength": 63 /* OBJECT_FIELD_SETTING */,
    "&minRedirectingPartyIDLength": 2 /* OBJECT_FIELD_SETTING */,
    "&maxRedirectingPartyIDLength": 10 /* OBJECT_FIELD_SETTING */,
    "&minScfIDLength": 2 /* OBJECT_FIELD_SETTING */,
    "&maxScfIDLength": 25 /* OBJECT_FIELD_SETTING */,
    "&minSCIBillingChargingLength": 4 /* OBJECT_FIELD_SETTING */,
    "&maxSCIBillingChargingLength": 225 /* OBJECT_FIELD_SETTING */,
    "&minTimeAndTimezoneLength": 8 /* OBJECT_FIELD_SETTING */,
    "&maxTimeAndTimezoneLength": 8 /* OBJECT_FIELD_SETTING */,
    "&numOfBCSMEvents": 30 /* OBJECT_FIELD_SETTING */,
    "&numOfChangeOfPositionControlInfo": 10 /* OBJECT_FIELD_SETTING */,
    "&numOfCSs": 127 /* OBJECT_FIELD_SETTING */,
    "&numOfSMSEvents": 10 /* OBJECT_FIELD_SETTING */,
    "&numOfGPRSEvents": 10 /* OBJECT_FIELD_SETTING */,
    "&numOfExtensions": 10 /* OBJECT_FIELD_SETTING */,
    "&numOfGenericNumbers": 5 /* OBJECT_FIELD_SETTING */,
    "&numOfMessageIDs": 16 /* OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
