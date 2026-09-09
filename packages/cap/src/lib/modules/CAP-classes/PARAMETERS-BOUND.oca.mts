/* eslint-disable */
import {
    INTEGER,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary PARAMETERS_BOUND
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PARAMETERS-BOUND ::= CLASS {
 *     &minAccessPointNameLength            INTEGER,
 *     &maxAccessPointNameLength            INTEGER,
 *     &minAChBillingChargingLength        INTEGER,
 *     &maxAChBillingChargingLength        INTEGER,
 *     &minAttributesLength            INTEGER,
 *     &maxAttributesLength            INTEGER,
 *     &maxBearerCapabilityLength            INTEGER,
 *     &minCalledPartyBCDNumberLength        INTEGER,
 *     &maxCalledPartyBCDNumberLength        INTEGER,
 *     &minCalledPartyNumberLength            INTEGER,
 *     &maxCalledPartyNumberLength            INTEGER,
 *     &minCallingPartyNumberLength        INTEGER,
 *     &maxCallingPartyNumberLength        INTEGER,
 *     &minCallResultLength            INTEGER,
 *     &maxCallResultLength            INTEGER,
 *     &minCarrierLength                INTEGER,
 *     &maxCarrierLength                INTEGER,
 *     &minCauseLength                INTEGER,
 *     &maxCauseLength                INTEGER,
 *     &minDigitsLength                INTEGER,
 *     &maxDigitsLength                INTEGER,
 *     &minFCIBillingChargingDataLength        INTEGER,
 *     &maxFCIBillingChargingDataLength        INTEGER,
 *     &minFCIBillingChargingLength        INTEGER,
 *     &maxFCIBillingChargingLength        INTEGER,
 *     &minGenericNumberLength            INTEGER,
 *     &maxGenericNumberLength            INTEGER,
 *     &minGPRSCauseLength                INTEGER,
 *     &maxGPRSCauseLength                INTEGER,
 *     &minIPSSPCapabilitiesLength            INTEGER,
 *     &maxIPSSPCapabilitiesLength            INTEGER,
 *     &minLocationNumberLength            INTEGER,
 *     &maxLocationNumberLength            INTEGER,
 *     &minLowLayerCompatibilityLength             INTEGER,
 *     &maxLowLayerCompatibilityLength             INTEGER,
 *     &minMessageContentLength            INTEGER,
 *     &maxMessageContentLength            INTEGER,
 *     &minOriginalCalledPartyIDLength        INTEGER,
 *     &maxOriginalCalledPartyIDLength        INTEGER,
 *     &minPDPAddressLength            INTEGER,
 *     &maxPDPAddressLength            INTEGER,
 *     &minRedirectingPartyIDLength        INTEGER,
 *     &maxRedirectingPartyIDLength        INTEGER,
 *     &minScfIDLength                INTEGER,
 *     &maxScfIDLength                INTEGER,
 *     &minSCIBillingChargingLength        INTEGER,
 *     &maxSCIBillingChargingLength        INTEGER,
 *     &minTimeAndTimezoneLength            INTEGER,
 *     &maxTimeAndTimezoneLength            INTEGER,
 *     &numOfBCSMEvents                INTEGER,
 *     &numOfChangeOfPositionControlInfo        INTEGER,
 *     &numOfCSs                    INTEGER,
 *     &numOfSMSEvents                INTEGER,
 *     &numOfGPRSEvents                INTEGER,
 *     &numOfExtensions                INTEGER,
 *     &numOfGenericNumbers            INTEGER,
 *     &numOfMessageIDs                INTEGER}
 * 
 * WITH SYNTAX {
 *     MINIMUM-FOR-ACCESS-POINT-NAME        &minAccessPointNameLength
 *     MAXIMUM-FOR-ACCESS-POINT-NAME        &maxAccessPointNameLength
 *     MINIMUM-FOR-ACH-BILLING-CHARGING        &minAChBillingChargingLength
 *     MAXIMUM-FOR-ACH-BILLING-CHARGING        &maxAChBillingChargingLength
 *     MINIMUM-FOR-ATTRIBUTES            &minAttributesLength
 *     MAXIMUM-FOR-ATTRIBUTES            &maxAttributesLength
 *     MAXIMUM-FOR-BEARER-CAPABILITY        &maxBearerCapabilityLength
 *     MINIMUM-FOR-CALLED-PARTY-BCD-NUMBER        &minCalledPartyBCDNumberLength
 *     MAXIMUM-FOR-CALLED-PARTY-BCD-NUMBER        &maxCalledPartyBCDNumberLength
 *     MINIMUM-FOR-CALLED-PARTY-NUMBER        &minCalledPartyNumberLength
 *     MAXIMUM-FOR-CALLED-PARTY-NUMBER        &maxCalledPartyNumberLength
 *     MINIMUM-FOR-CALLING-PARTY-NUMBER        &minCallingPartyNumberLength
 *     MAXIMUM-FOR-CALLING-PARTY-NUMBER        &maxCallingPartyNumberLength
 *     MINIMUM-FOR-CALL-RESULT            &minCallResultLength
 *     MAXIMUM-FOR-CALL-RESULT            &maxCallResultLength
 *     MINIMUM-FOR-CARRIER                &minCarrierLength
 *     MAXIMUM-FOR-CARRIER                &maxCarrierLength
 *     MINIMUM-FOR-CAUSE                &minCauseLength
 *     MAXIMUM-FOR-CAUSE                &maxCauseLength
 *     MINIMUM-FOR-DIGITS                &minDigitsLength
 *     MAXIMUM-FOR-DIGITS                &maxDigitsLength
 *     MINIMUM-FOR-FCI-BILLING-CHARGING-DATA    &minFCIBillingChargingDataLength
 *     MAXIMUM-FOR-FCI-BILLING-CHARGING-DATA    &maxFCIBillingChargingDataLength
 *     MINIMUM-FOR-FCI-BILLING-CHARGING        &minFCIBillingChargingLength
 *     MAXIMUM-FOR-FCI-BILLING-CHARGING        &maxFCIBillingChargingLength
 *     MINIMUM-FOR-GENERIC-NUMBER            &minGenericNumberLength
 *     MAXIMUM-FOR-GENERIC-NUMBER            &maxGenericNumberLength
 *     MINIMUM-FOR-GPRS-CAUSE-LENGTH        &minGPRSCauseLength
 *     MAXIMUM-FOR-GPRS-CAUSE-LENGTH        &maxGPRSCauseLength
 *     MINIMUM-FOR-IP-SSP-CAPABILITIES        &minIPSSPCapabilitiesLength
 *     MAXIMUM-FOR-IP-SSP-CAPABILITIES        &maxIPSSPCapabilitiesLength
 *     MINIMUM-FOR-LOCATION-NUMBER            &minLocationNumberLength
 *     MAXIMUM-FOR-LOCATION-NUMBER            &maxLocationNumberLength
 *     MINIMUM-FOR-LOW-LAYER-COMPATIBILITY        &minLowLayerCompatibilityLength
 *     MAXIMUM-FOR-LOW-LAYER-COMPATIBILITY    &maxLowLayerCompatibilityLength
 *     MINIMUM-FOR-MESSAGE-CONTENT            &minMessageContentLength
 *     MAXIMUM-FOR-MESSAGE-CONTENT            &maxMessageContentLength
 *     MINIMUM-FOR-ORIGINAL-CALLED-PARTY-ID    &minOriginalCalledPartyIDLength
 *     MAXIMUM-FOR-ORIGINAL-CALLED-PARTY-ID    &maxOriginalCalledPartyIDLength
 *     MINIMUM-FOR-PDP-ADDRESS-LENGTH        &minPDPAddressLength
 *     MAXIMUM-FOR-PDP-ADDRESS-LENGTH        &maxPDPAddressLength
 *     MINIMUM-FOR-REDIRECTING-ID            &minRedirectingPartyIDLength
 *     MAXIMUM-FOR-REDIRECTING-ID            &maxRedirectingPartyIDLength
 *     MINIMUM-FOR-GSMSCF-ID            &minScfIDLength
 *     MAXIMUM-FOR-GSMSCF-ID            &maxScfIDLength
 *     MINIMUM-FOR-SCI-BILLING-CHARGING        &minSCIBillingChargingLength
 *     MAXIMUM-FOR-SCI-BILLING-CHARGING        &maxSCIBillingChargingLength
 *     MINIMUM-FOR-TIME-AND-TIMEZONE        &minTimeAndTimezoneLength
 *     MAXIMUM-FOR-TIME-AND-TIMEZONE        &maxTimeAndTimezoneLength
 *     NUM-OF-BCSM-EVENT                &numOfBCSMEvents
 *     NUM-OF-CHANGE-OF-POSITION-CONTROL-INFO    &numOfChangeOfPositionControlInfo
 *     NUM-OF-CSS                    &numOfCSs
 *     NUM-OF-SMS-EVENTS                &numOfSMSEvents
 *     NUM-OF-GPRS-EVENTS                &numOfGPRSEvents
 *     NUM-OF-EXTENSIONS                &numOfExtensions
 *     NUM-OF-GENERIC-NUMBERS            &numOfGenericNumbers
 *     NUM-OF-MESSAGE-IDS                &numOfMessageIDs}
 * ```
 * 
 * @interface
 */
export
interface PARAMETERS_BOUND {
    /**
     * @summary A fixed string that can be used for external programs to determine the object class of this object.
     */
    readonly class: "PARAMETERS-BOUND";
    /**
     * @summary A map of type fields to their corresponding decoders.
     */
    readonly decoderFor: Partial<{ // For decoding types supplied in type fields
        [_K in keyof PARAMETERS_BOUND]: $.ASN1Decoder<PARAMETERS_BOUND[_K]>;
    }>;
    /**
     * @summary A map of type fields to their corresponding encoders.
     */
    readonly encoderFor: Partial<{ // For encoding types supplied in type fields
        [_K in keyof PARAMETERS_BOUND]: $.ASN1Encoder<PARAMETERS_BOUND[_K]>;
    }>;
    /**
     * @summary &minAccessPointNameLength
     */
    readonly "&minAccessPointNameLength"?: INTEGER;
    /**
     * @summary &maxAccessPointNameLength
     */
    readonly "&maxAccessPointNameLength"?: INTEGER;
    /**
     * @summary &minAChBillingChargingLength
     */
    readonly "&minAChBillingChargingLength"?: INTEGER;
    /**
     * @summary &maxAChBillingChargingLength
     */
    readonly "&maxAChBillingChargingLength"?: INTEGER;
    /**
     * @summary &minAttributesLength
     */
    readonly "&minAttributesLength"?: INTEGER;
    /**
     * @summary &maxAttributesLength
     */
    readonly "&maxAttributesLength"?: INTEGER;
    /**
     * @summary &maxBearerCapabilityLength
     */
    readonly "&maxBearerCapabilityLength"?: INTEGER;
    /**
     * @summary &minCalledPartyBCDNumberLength
     */
    readonly "&minCalledPartyBCDNumberLength"?: INTEGER;
    /**
     * @summary &maxCalledPartyBCDNumberLength
     */
    readonly "&maxCalledPartyBCDNumberLength"?: INTEGER;
    /**
     * @summary &minCalledPartyNumberLength
     */
    readonly "&minCalledPartyNumberLength"?: INTEGER;
    /**
     * @summary &maxCalledPartyNumberLength
     */
    readonly "&maxCalledPartyNumberLength"?: INTEGER;
    /**
     * @summary &minCallingPartyNumberLength
     */
    readonly "&minCallingPartyNumberLength"?: INTEGER;
    /**
     * @summary &maxCallingPartyNumberLength
     */
    readonly "&maxCallingPartyNumberLength"?: INTEGER;
    /**
     * @summary &minCallResultLength
     */
    readonly "&minCallResultLength"?: INTEGER;
    /**
     * @summary &maxCallResultLength
     */
    readonly "&maxCallResultLength"?: INTEGER;
    /**
     * @summary &minCarrierLength
     */
    readonly "&minCarrierLength"?: INTEGER;
    /**
     * @summary &maxCarrierLength
     */
    readonly "&maxCarrierLength"?: INTEGER;
    /**
     * @summary &minCauseLength
     */
    readonly "&minCauseLength"?: INTEGER;
    /**
     * @summary &maxCauseLength
     */
    readonly "&maxCauseLength"?: INTEGER;
    /**
     * @summary &minDigitsLength
     */
    readonly "&minDigitsLength"?: INTEGER;
    /**
     * @summary &maxDigitsLength
     */
    readonly "&maxDigitsLength"?: INTEGER;
    /**
     * @summary &minFCIBillingChargingDataLength
     */
    readonly "&minFCIBillingChargingDataLength"?: INTEGER;
    /**
     * @summary &maxFCIBillingChargingDataLength
     */
    readonly "&maxFCIBillingChargingDataLength"?: INTEGER;
    /**
     * @summary &minFCIBillingChargingLength
     */
    readonly "&minFCIBillingChargingLength"?: INTEGER;
    /**
     * @summary &maxFCIBillingChargingLength
     */
    readonly "&maxFCIBillingChargingLength"?: INTEGER;
    /**
     * @summary &minGenericNumberLength
     */
    readonly "&minGenericNumberLength"?: INTEGER;
    /**
     * @summary &maxGenericNumberLength
     */
    readonly "&maxGenericNumberLength"?: INTEGER;
    /**
     * @summary &minGPRSCauseLength
     */
    readonly "&minGPRSCauseLength"?: INTEGER;
    /**
     * @summary &maxGPRSCauseLength
     */
    readonly "&maxGPRSCauseLength"?: INTEGER;
    /**
     * @summary &minIPSSPCapabilitiesLength
     */
    readonly "&minIPSSPCapabilitiesLength"?: INTEGER;
    /**
     * @summary &maxIPSSPCapabilitiesLength
     */
    readonly "&maxIPSSPCapabilitiesLength"?: INTEGER;
    /**
     * @summary &minLocationNumberLength
     */
    readonly "&minLocationNumberLength"?: INTEGER;
    /**
     * @summary &maxLocationNumberLength
     */
    readonly "&maxLocationNumberLength"?: INTEGER;
    /**
     * @summary &minLowLayerCompatibilityLength
     */
    readonly "&minLowLayerCompatibilityLength"?: INTEGER;
    /**
     * @summary &maxLowLayerCompatibilityLength
     */
    readonly "&maxLowLayerCompatibilityLength"?: INTEGER;
    /**
     * @summary &minMessageContentLength
     */
    readonly "&minMessageContentLength"?: INTEGER;
    /**
     * @summary &maxMessageContentLength
     */
    readonly "&maxMessageContentLength"?: INTEGER;
    /**
     * @summary &minOriginalCalledPartyIDLength
     */
    readonly "&minOriginalCalledPartyIDLength"?: INTEGER;
    /**
     * @summary &maxOriginalCalledPartyIDLength
     */
    readonly "&maxOriginalCalledPartyIDLength"?: INTEGER;
    /**
     * @summary &minPDPAddressLength
     */
    readonly "&minPDPAddressLength"?: INTEGER;
    /**
     * @summary &maxPDPAddressLength
     */
    readonly "&maxPDPAddressLength"?: INTEGER;
    /**
     * @summary &minRedirectingPartyIDLength
     */
    readonly "&minRedirectingPartyIDLength"?: INTEGER;
    /**
     * @summary &maxRedirectingPartyIDLength
     */
    readonly "&maxRedirectingPartyIDLength"?: INTEGER;
    /**
     * @summary &minScfIDLength
     */
    readonly "&minScfIDLength"?: INTEGER;
    /**
     * @summary &maxScfIDLength
     */
    readonly "&maxScfIDLength"?: INTEGER;
    /**
     * @summary &minSCIBillingChargingLength
     */
    readonly "&minSCIBillingChargingLength"?: INTEGER;
    /**
     * @summary &maxSCIBillingChargingLength
     */
    readonly "&maxSCIBillingChargingLength"?: INTEGER;
    /**
     * @summary &minTimeAndTimezoneLength
     */
    readonly "&minTimeAndTimezoneLength"?: INTEGER;
    /**
     * @summary &maxTimeAndTimezoneLength
     */
    readonly "&maxTimeAndTimezoneLength"?: INTEGER;
    /**
     * @summary &numOfBCSMEvents
     */
    readonly "&numOfBCSMEvents"?: INTEGER;
    /**
     * @summary &numOfChangeOfPositionControlInfo
     */
    readonly "&numOfChangeOfPositionControlInfo"?: INTEGER;
    /**
     * @summary &numOfCSs
     */
    readonly "&numOfCSs"?: INTEGER;
    /**
     * @summary &numOfSMSEvents
     */
    readonly "&numOfSMSEvents"?: INTEGER;
    /**
     * @summary &numOfGPRSEvents
     */
    readonly "&numOfGPRSEvents"?: INTEGER;
    /**
     * @summary &numOfExtensions
     */
    readonly "&numOfExtensions"?: INTEGER;
    /**
     * @summary &numOfGenericNumbers
     */
    readonly "&numOfGenericNumbers"?: INTEGER;
    /**
     * @summary &numOfMessageIDs
     */
    readonly "&numOfMessageIDs"?: INTEGER;
};

/* eslint-enable */
