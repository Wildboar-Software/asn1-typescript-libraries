/* eslint-disable */
import {
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary SCF_SSF_BOUNDS
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SCF-SSF-BOUNDS ::= CLASS {
 *   &minAChBillingChargingLength                INTEGER OPTIONAL,
 *   &maxAChBillingChargingLength                INTEGER OPTIONAL,
 *   &minBackwardGVNSLength                      INTEGER OPTIONAL,
 *   &maxBackwardGVNSLength                      INTEGER OPTIONAL,
 *   &maxBearerCapabilityLength                  INTEGER OPTIONAL,
 *   &minCalledDirectoryNumberLength             INTEGER OPTIONAL,
 *   &maxCalledDirectoryNumberLength             INTEGER OPTIONAL,
 *   &minCalledPartyNumberLength                 INTEGER OPTIONAL,
 *   &maxCalledPartyNumberLength                 INTEGER OPTIONAL,
 *   &minCalledPartySubaddressLength             INTEGER OPTIONAL,
 *   &maxCalledPartySubaddressLength             INTEGER OPTIONAL,
 *   &minCallingGeodeticLocationLength           INTEGER OPTIONAL,
 *   &maxCallingGeodeticLocationLength           INTEGER OPTIONAL,
 *   &minCallingPartyNumberLength                INTEGER OPTIONAL,
 *   &maxCallingPartyNumberLength                INTEGER OPTIONAL,
 *   &minCallingPartySubaddressLength            INTEGER OPTIONAL,
 *   &maxCallingPartySubaddressLength            INTEGER OPTIONAL,
 *   &minCallResultLength                        INTEGER OPTIONAL,
 *   &maxCallResultLength                        INTEGER OPTIONAL,
 *   &maxCallReferenceLength                     INTEGER OPTIONAL,
 *   &minCarrierLength                           INTEGER OPTIONAL,
 *   &maxCarrierLength                           INTEGER OPTIONAL,
 *   &minCauseLength                             INTEGER OPTIONAL,
 *   &maxCauseLength                             INTEGER OPTIONAL,
 *   &maxCNInfoLength                            INTEGER OPTIONAL,
 *   &minDigitsLength                            INTEGER OPTIONAL,
 *   &maxDigitsLength                            INTEGER OPTIONAL,
 *   &minDisplayInformationLength                INTEGER OPTIONAL,
 *   &maxDisplayInformationLength                INTEGER OPTIONAL,
 *   &minEventSpecificInformationChargingLength  INTEGER OPTIONAL,
 *   &maxEventSpecificInformationChargingLength  INTEGER OPTIONAL,
 *   &minEventTypeChargingLength                 INTEGER OPTIONAL,
 *   &maxEventTypeChargingLength                 INTEGER OPTIONAL,
 *   &minFCIBillingChargingLength                INTEGER OPTIONAL,
 *   &maxFCIBillingChargingLength                INTEGER OPTIONAL,
 *   &minForwardGVNSLength                       INTEGER OPTIONAL,
 *   &maxForwardGVNSLength                       INTEGER OPTIONAL,
 *   &minGenericNameLength                       INTEGER OPTIONAL,
 *   &maxGenericNameLength                       INTEGER OPTIONAL,
 *   &minGenericNumberLength                     INTEGER OPTIONAL,
 *   &maxGenericNumberLength                     INTEGER OPTIONAL,
 *   &maxInitialTimeInterval                     INTEGER OPTIONAL,
 *   &maxINServiceCompatibilityIndLength         INTEGER OPTIONAL,
 *   &minIPAvailableLength                       INTEGER OPTIONAL,
 *   &maxIPAvailableLength                       INTEGER OPTIONAL,
 *   &minIPSSPCapabilitiesLength                 INTEGER OPTIONAL,
 *   &maxIPSSPCapabilitiesLength                 INTEGER OPTIONAL,
 *   &minISDNAccessRelatedInfoLength             INTEGER OPTIONAL,
 *   &maxISDNAccessRelatedInfoLength             INTEGER OPTIONAL,
 *   &minLocationNumberLength                    INTEGER OPTIONAL,
 *   &maxLocationNumberLength                    INTEGER OPTIONAL,
 *   &minMidCallControlInfoNum                   INTEGER OPTIONAL,
 *   &maxMidCallControlInfoNum                   INTEGER OPTIONAL,
 *   &minOriginalCalledPartyIDLength             INTEGER OPTIONAL,
 *   &maxOriginalCalledPartyIDLength             INTEGER OPTIONAL,
 *   &minReasonLength                            INTEGER OPTIONAL,
 *   &maxReasonLength                            INTEGER OPTIONAL,
 *   &minRedirectingPartyIDLength                INTEGER OPTIONAL,
 *   &maxRedirectingPartyIDLength                INTEGER OPTIONAL,
 *   &minRequestedUTSINum                        INTEGER OPTIONAL,
 *   &maxRequestedUTSINum                        INTEGER OPTIONAL,
 *   &minRouteListLength                         INTEGER OPTIONAL,
 *   &maxRouteListLength                         INTEGER OPTIONAL,
 *   &minRouteingNumberLength                    INTEGER OPTIONAL,
 *   &maxRouteingNumberLength                    INTEGER OPTIONAL,
 *   &minScfIDLength                             INTEGER OPTIONAL,
 *   &maxScfIDLength                             INTEGER OPTIONAL,
 *   &minSCIBillingChargingLength                INTEGER OPTIONAL,
 *   &maxSCIBillingChargingLength                INTEGER OPTIONAL,
 *   &minSDSSinformationLength                   INTEGER OPTIONAL,
 *   &maxSDSSinformationLength                   INTEGER OPTIONAL,
 *   &minServiceInteractionIndicatorsLength      INTEGER OPTIONAL,
 *   &maxServiceInteractionIndicatorsLength      INTEGER OPTIONAL,
 *   &minSFBillingChargingLength                 INTEGER OPTIONAL,
 *   &maxSFBillingChargingLength                 INTEGER OPTIONAL,
 *   &minUSIInformationLength                    INTEGER OPTIONAL,
 *   &maxUSIInformationLength                    INTEGER OPTIONAL,
 *   &minUSIServiceIndicatorLength               INTEGER OPTIONAL,
 *   &maxUSIServiceIndicatorLength               INTEGER OPTIONAL,
 *   &numOfBCSMEvents                            INTEGER OPTIONAL,
 *   &numOfBCUSMEvents                           INTEGER OPTIONAL,
 *   &numOfChargingEvents                        INTEGER OPTIONAL,
 *   &numOfCSAs                                  INTEGER OPTIONAL,
 *   &numOfCSs                                   INTEGER OPTIONAL,
 *   &numOfGenericNumbers                        INTEGER OPTIONAL,
 *   &numOfInServiceCompatibilityIndLength       INTEGER OPTIONAL,
 *   &numOfLegs                                  INTEGER OPTIONAL,
 *   &numOfMessageIDs                            INTEGER OPTIONAL,
 *   &maxAmount                                  INTEGER OPTIONAL,
 *   &maxInitialUnitIncrement                    INTEGER OPTIONAL,
 *   &maxScalingFactor                           INTEGER OPTIONAL,
 *   &maxSegmentsPerDataInterval                 INTEGER OPTIONAL,
 *   &ub-nbCall                                  INTEGER OPTIONAL,
 *   &numOfAddresses                             INTEGER OPTIONAL,
 *   &numOfINProfile                             INTEGER OPTIONAL,
 *   &numOfTriggers                              INTEGER OPTIONAL
 * }
 * WITH SYNTAX {
 *   [MINIMUM-FOR-ACH-BILLING-CHARGING &minAChBillingChargingLength]
 *   [MAXIMUM-FOR-ACH-BILLING-CHARGING &maxAChBillingChargingLength]
 *   [MINIMUM-FOR-BACKWARD-GVNS &minBackwardGVNSLength]
 *   [MAXIMUM-FOR-BACKWARD-GVNS &maxBackwardGVNSLength]
 *   [MAXIMUM-FOR-BEARER-CAPABILITY &maxBearerCapabilityLength]
 *   [MINIMUM-FOR-CALLED-DIRECTORY-NUMBER &minCalledDirectoryNumberLength]
 *   [MAXIMUM-FOR-CALLED-DIRECTORY-NUMBER &maxCalledDirectoryNumberLength]
 *   [MINIMUM-FOR-CALLED-PARTY-NUMBER &minCalledPartyNumberLength]
 *   [MAXIMUM-FOR-CALLED-PARTY-NUMBER &maxCalledPartyNumberLength]
 *   [MINIMUM-FOR-CALLED-PARTY-SUBADDRESS &minCalledPartySubaddressLength]
 *   [MAXIMUM-FOR-CALLED-PARTY-SUBADDRESS &maxCalledPartySubaddressLength]
 *   [MINIMUM-FOR-CALLING-GEODETIC-LOCATION &minCallingGeodeticLocationLength]
 *   [MAXIMUM-FOR-CALLING-GEODETIC-LOCATION &maxCallingGeodeticLocationLength]
 *   [MINIMUM-FOR-CALLING-PARTY-NUMBER &minCallingPartyNumberLength]
 *   [MAXIMUM-FOR-CALLING-PARTY-NUMBER &maxCallingPartyNumberLength]
 *   [MINIMUM-FOR-CALLING-PARTY-SUBADDRESS &minCallingPartySubaddressLength]
 *   [MAXIMUM-FOR-CALLING-PARTY-SUBADDRESS &maxCallingPartySubaddressLength]
 *   [MINIMUM-FOR-CALL-RESULT &minCallResultLength]
 *   [MAXIMUM-FOR-CALL-RESULT &maxCallResultLength]
 *   [MINIMUM-FOR-CARRIER &minCarrierLength]
 *   [MAXIMUM-FOR-CARRIER &maxCarrierLength]
 *   [MINIMUM-FOR-CAUSE &minCauseLength]
 *   [MAXIMUM-FOR-CAUSE &maxCauseLength]
 *   [MINIMUM-FOR-DIGITS &minDigitsLength]
 *   [MAXIMUM-FOR-DIGITS &maxDigitsLength]
 *   [MINIMUM-FOR-DISPLAY &minDisplayInformationLength]
 *   [MAXIMUM-FOR-DISPLAY &maxDisplayInformationLength]
 *   [MINIMUM-FOR-EVENT-SPECIFIC-CHARGING
 *      &minEventSpecificInformationChargingLength]
 *   [MAXIMUM-FOR-EVENT-SPECIFIC-CHARGING
 *      &maxEventSpecificInformationChargingLength]
 *   [MINIMUM-FOR-EVENT-TYPE-CHARGING &minEventTypeChargingLength]
 *   [MAXIMUM-FOR-EVENT-TYPE-CHARGING &maxEventTypeChargingLength]
 *   [MINIMUM-FOR-FCI-BILLING-CHARGING &minFCIBillingChargingLength]
 *   [MAXIMUM-FOR-FCI-BILLING-CHARGING &maxFCIBillingChargingLength]
 *   [MINIMUM-FOR-FORWARD-GVNS &minForwardGVNSLength]
 *   [MAXIMUM-FOR-FORWARD-GVNS &maxForwardGVNSLength]
 *   [MINIMUM-FOR-GENERIC-NAME &minGenericNameLength]
 *   [MAXIMUM-FOR-GENERIC-NAME &maxGenericNameLength]
 *   [MINIMUM-FOR-GENERIC-NUMBER &minGenericNumberLength]
 *   [MAXIMUM-FOR-GENERIC-NUMBER &maxGenericNumberLength]
 *   [MAXIMUM-FOR-INITIAL-TIME-INTERVAL &maxInitialTimeInterval]
 *   [MAXIMUM-FOR-IN-SERVICE-COMPATIBILITY &maxINServiceCompatibilityIndLength]
 *   [MINIMUM-FOR-IP-AVAILABLE &minIPAvailableLength]
 *   [MAXIMUM-FOR-IP-AVAILABLE &maxIPAvailableLength]
 *   [MINIMUM-FOR-IP-SSP-CAPABILITIES &minIPSSPCapabilitiesLength]
 *   [MAXIMUM-FOR-IP-SSP-CAPABILITIES &maxIPSSPCapabilitiesLength]
 *   [MINIMUM-FOR-ISDN-ACCESS-RELATED-INFO &minISDNAccessRelatedInfoLength]
 *   [MAXIMUM-FOR-ISDN-ACCESS-RELATED-INFO &maxISDNAccessRelatedInfoLength]
 *   [MINIMUM-FOR-LOCATION-NUMBER &minLocationNumberLength]
 *   [MAXIMUM-FOR-LOCATION-NUMBER &maxLocationNumberLength]
 *   [MINIMUM-FOR-MID-CALL-CONTROL-INFO &minMidCallControlInfoNum]
 *   [MAXIMUM-FOR-MID-CALL-CONTROL-INFO &maxMidCallControlInfoNum]
 *   [MINIMUM-FOR-ORIGINAL-CALLED-PARTY-ID &minOriginalCalledPartyIDLength]
 *   [MAXIMUM-FOR-ORIGINAL-CALLED-PARTY-ID &maxOriginalCalledPartyIDLength]
 *   [MINIMUM-FOR-REASON &minReasonLength]
 *   [MAXIMUM-FOR-REASON &maxReasonLength]
 *   [MINIMUM-FOR-REDIRECTING-ID &minRedirectingPartyIDLength]
 *   [MAXIMUM-FOR-REDIRECTING-ID &maxRedirectingPartyIDLength]
 *   [MINIMUM-FOR-REQUESTED-UTSI-NUM &minRequestedUTSINum]
 *   [MAXIMUM-FOR-REQUESTED-UTSI-NUM &maxRequestedUTSINum]
 *   [MINIMUM-FOR-ROUTE-LIST &minRouteListLength]
 *   [MAXIMUM-FOR-ROUTE-LIST &maxRouteListLength]
 *   [MINIMUM-FOR-ROUTING-NUMBER &minRouteingNumberLength]
 *   [MAXIMUM-FOR-ROUTING-NUMBER &maxRouteingNumberLength]
 *   [MINIMUM-FOR-SCF-ID &minScfIDLength]
 *   [MAXIMUM-FOR-SCF-ID &maxScfIDLength]
 *   [MINIMUM-FOR-SCI-BILLING-CHARGING &minSCIBillingChargingLength]
 *   [MAXIMUM-FOR-SCI-BILLING-CHARGING &maxSCIBillingChargingLength]
 *   [MINIMUM-FOR-SDSS-INFORMATION &minSDSSinformationLength]
 *   [MAXIMUM-FOR-SDSS-INFORMATION &maxSDSSinformationLength]
 *   [MINIMUM-FOR-SII &minServiceInteractionIndicatorsLength]
 *   [MAXIMUM-FOR-SII &maxServiceInteractionIndicatorsLength]
 *   [MINIMUM-FOR-SF-BILLING-CHARGING &minSFBillingChargingLength]
 *   [MAXIMUM-FOR-SF-BILLING-CHARGING &maxSFBillingChargingLength]
 *   [MINIMUM-FOR-USI-INFORMATION &minUSIInformationLength]
 *   [MAXIMUM-FOR-USI-INFORMATION &maxUSIInformationLength]
 *   [MINIMUM-FOR-USI-SERVICE-INDICATOR &minUSIServiceIndicatorLength]
 *   [MAXIMUM-FOR-USI-SERVICE-INDICATOR &maxUSIServiceIndicatorLength]
 *   [NUM-OF-BCSM-EVENT &numOfBCSMEvents]
 *   [NUM-OF-BCUSM-EVENT &numOfBCUSMEvents]
 *   [NUM-OF-CHARGING-EVENT &numOfChargingEvents]
 *   [NUM-OF-CSAS &numOfCSAs]
 *   [NUM-OF-CSS &numOfCSs]
 *   [NUM-OF-GENERIC-NUMBERS &numOfGenericNumbers]
 *   [NUM-OF-INPROFILE &numOfINProfile]
 *   [NUM-OF-SEVERAL-TRIGGER &numOfTriggers]
 *   [NUM-OF-IN-SERVICE-COMPATIBILITY-ID &numOfInServiceCompatibilityIndLength]
 *   [NUM-OF-LEGS &numOfLegs]
 *   [NUM-OF-MESSAGE-IDS &numOfMessageIDs]
 *   [MAXIMUM-FOR-AMOUNT &maxAmount]
 *   [MAXIMUM-FOR-CALL-REFERENCE &maxCallReferenceLength]
 *   [MAXIMUM-FOR-CNINFO &maxCNInfoLength]
 *   [MAXIMUM-FOR-INITIAL-UNIT-INCREMENT &maxInitialUnitIncrement]
 *   [MAXIMUM-FOR-SCALING-FACTOR &maxScalingFactor]
 *   [MAXIMUM-FOR-SEGMENTS-PER-DATA-INTERVAL &maxSegmentsPerDataInterval]
 *   [MAXIMUM-FOR-UB-NB-CALL &ub-nbCall]
 *   [NUM-OF-ADDRESSES &numOfAddresses]
 * }
 * ```
 * 
 * @interface
 */
export
interface SCF_SSF_BOUNDS {
    /**
     * @summary A fixed string that can be used for external programs to determine the object class of this object.
     */
    readonly class: "SCF-SSF-BOUNDS";
    /**
     * @summary A map of type fields to their corresponding decoders.
     */
    readonly decoderFor: Partial<{ // For decoding types supplied in type fields
        [_K in keyof SCF_SSF_BOUNDS]: $.ASN1Decoder<SCF_SSF_BOUNDS[_K]>;
    }>;
    /**
     * @summary A map of type fields to their corresponding encoders.
     */
    readonly encoderFor: Partial<{ // For encoding types supplied in type fields
        [_K in keyof SCF_SSF_BOUNDS]: $.ASN1Encoder<SCF_SSF_BOUNDS[_K]>;
    }>;
    /**
     * @summary &minAChBillingChargingLength
     */
    readonly "&minAChBillingChargingLength"?: INTEGER;
    /**
     * @summary &maxAChBillingChargingLength
     */
    readonly "&maxAChBillingChargingLength"?: INTEGER;
    /**
     * @summary &minBackwardGVNSLength
     */
    readonly "&minBackwardGVNSLength"?: INTEGER;
    /**
     * @summary &maxBackwardGVNSLength
     */
    readonly "&maxBackwardGVNSLength"?: INTEGER;
    /**
     * @summary &maxBearerCapabilityLength
     */
    readonly "&maxBearerCapabilityLength"?: INTEGER;
    /**
     * @summary &minCalledDirectoryNumberLength
     */
    readonly "&minCalledDirectoryNumberLength"?: INTEGER;
    /**
     * @summary &maxCalledDirectoryNumberLength
     */
    readonly "&maxCalledDirectoryNumberLength"?: INTEGER;
    /**
     * @summary &minCalledPartyNumberLength
     */
    readonly "&minCalledPartyNumberLength"?: INTEGER;
    /**
     * @summary &maxCalledPartyNumberLength
     */
    readonly "&maxCalledPartyNumberLength"?: INTEGER;
    /**
     * @summary &minCalledPartySubaddressLength
     */
    readonly "&minCalledPartySubaddressLength"?: INTEGER;
    /**
     * @summary &maxCalledPartySubaddressLength
     */
    readonly "&maxCalledPartySubaddressLength"?: INTEGER;
    /**
     * @summary &minCallingGeodeticLocationLength
     */
    readonly "&minCallingGeodeticLocationLength"?: INTEGER;
    /**
     * @summary &maxCallingGeodeticLocationLength
     */
    readonly "&maxCallingGeodeticLocationLength"?: INTEGER;
    /**
     * @summary &minCallingPartyNumberLength
     */
    readonly "&minCallingPartyNumberLength"?: INTEGER;
    /**
     * @summary &maxCallingPartyNumberLength
     */
    readonly "&maxCallingPartyNumberLength"?: INTEGER;
    /**
     * @summary &minCallingPartySubaddressLength
     */
    readonly "&minCallingPartySubaddressLength"?: INTEGER;
    /**
     * @summary &maxCallingPartySubaddressLength
     */
    readonly "&maxCallingPartySubaddressLength"?: INTEGER;
    /**
     * @summary &minCallResultLength
     */
    readonly "&minCallResultLength"?: INTEGER;
    /**
     * @summary &maxCallResultLength
     */
    readonly "&maxCallResultLength"?: INTEGER;
    /**
     * @summary &maxCallReferenceLength
     */
    readonly "&maxCallReferenceLength"?: INTEGER;
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
     * @summary &maxCNInfoLength
     */
    readonly "&maxCNInfoLength"?: INTEGER;
    /**
     * @summary &minDigitsLength
     */
    readonly "&minDigitsLength"?: INTEGER;
    /**
     * @summary &maxDigitsLength
     */
    readonly "&maxDigitsLength"?: INTEGER;
    /**
     * @summary &minDisplayInformationLength
     */
    readonly "&minDisplayInformationLength"?: INTEGER;
    /**
     * @summary &maxDisplayInformationLength
     */
    readonly "&maxDisplayInformationLength"?: INTEGER;
    /**
     * @summary &minEventSpecificInformationChargingLength
     */
    readonly "&minEventSpecificInformationChargingLength"?: INTEGER;
    /**
     * @summary &maxEventSpecificInformationChargingLength
     */
    readonly "&maxEventSpecificInformationChargingLength"?: INTEGER;
    /**
     * @summary &minEventTypeChargingLength
     */
    readonly "&minEventTypeChargingLength"?: INTEGER;
    /**
     * @summary &maxEventTypeChargingLength
     */
    readonly "&maxEventTypeChargingLength"?: INTEGER;
    /**
     * @summary &minFCIBillingChargingLength
     */
    readonly "&minFCIBillingChargingLength"?: INTEGER;
    /**
     * @summary &maxFCIBillingChargingLength
     */
    readonly "&maxFCIBillingChargingLength"?: INTEGER;
    /**
     * @summary &minForwardGVNSLength
     */
    readonly "&minForwardGVNSLength"?: INTEGER;
    /**
     * @summary &maxForwardGVNSLength
     */
    readonly "&maxForwardGVNSLength"?: INTEGER;
    /**
     * @summary &minGenericNameLength
     */
    readonly "&minGenericNameLength"?: INTEGER;
    /**
     * @summary &maxGenericNameLength
     */
    readonly "&maxGenericNameLength"?: INTEGER;
    /**
     * @summary &minGenericNumberLength
     */
    readonly "&minGenericNumberLength"?: INTEGER;
    /**
     * @summary &maxGenericNumberLength
     */
    readonly "&maxGenericNumberLength"?: INTEGER;
    /**
     * @summary &maxInitialTimeInterval
     */
    readonly "&maxInitialTimeInterval"?: INTEGER;
    /**
     * @summary &maxINServiceCompatibilityIndLength
     */
    readonly "&maxINServiceCompatibilityIndLength"?: INTEGER;
    /**
     * @summary &minIPAvailableLength
     */
    readonly "&minIPAvailableLength"?: INTEGER;
    /**
     * @summary &maxIPAvailableLength
     */
    readonly "&maxIPAvailableLength"?: INTEGER;
    /**
     * @summary &minIPSSPCapabilitiesLength
     */
    readonly "&minIPSSPCapabilitiesLength"?: INTEGER;
    /**
     * @summary &maxIPSSPCapabilitiesLength
     */
    readonly "&maxIPSSPCapabilitiesLength"?: INTEGER;
    /**
     * @summary &minISDNAccessRelatedInfoLength
     */
    readonly "&minISDNAccessRelatedInfoLength"?: INTEGER;
    /**
     * @summary &maxISDNAccessRelatedInfoLength
     */
    readonly "&maxISDNAccessRelatedInfoLength"?: INTEGER;
    /**
     * @summary &minLocationNumberLength
     */
    readonly "&minLocationNumberLength"?: INTEGER;
    /**
     * @summary &maxLocationNumberLength
     */
    readonly "&maxLocationNumberLength"?: INTEGER;
    /**
     * @summary &minMidCallControlInfoNum
     */
    readonly "&minMidCallControlInfoNum"?: INTEGER;
    /**
     * @summary &maxMidCallControlInfoNum
     */
    readonly "&maxMidCallControlInfoNum"?: INTEGER;
    /**
     * @summary &minOriginalCalledPartyIDLength
     */
    readonly "&minOriginalCalledPartyIDLength"?: INTEGER;
    /**
     * @summary &maxOriginalCalledPartyIDLength
     */
    readonly "&maxOriginalCalledPartyIDLength"?: INTEGER;
    /**
     * @summary &minReasonLength
     */
    readonly "&minReasonLength"?: INTEGER;
    /**
     * @summary &maxReasonLength
     */
    readonly "&maxReasonLength"?: INTEGER;
    /**
     * @summary &minRedirectingPartyIDLength
     */
    readonly "&minRedirectingPartyIDLength"?: INTEGER;
    /**
     * @summary &maxRedirectingPartyIDLength
     */
    readonly "&maxRedirectingPartyIDLength"?: INTEGER;
    /**
     * @summary &minRequestedUTSINum
     */
    readonly "&minRequestedUTSINum"?: INTEGER;
    /**
     * @summary &maxRequestedUTSINum
     */
    readonly "&maxRequestedUTSINum"?: INTEGER;
    /**
     * @summary &minRouteListLength
     */
    readonly "&minRouteListLength"?: INTEGER;
    /**
     * @summary &maxRouteListLength
     */
    readonly "&maxRouteListLength"?: INTEGER;
    /**
     * @summary &minRouteingNumberLength
     */
    readonly "&minRouteingNumberLength"?: INTEGER;
    /**
     * @summary &maxRouteingNumberLength
     */
    readonly "&maxRouteingNumberLength"?: INTEGER;
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
     * @summary &minSDSSinformationLength
     */
    readonly "&minSDSSinformationLength"?: INTEGER;
    /**
     * @summary &maxSDSSinformationLength
     */
    readonly "&maxSDSSinformationLength"?: INTEGER;
    /**
     * @summary &minServiceInteractionIndicatorsLength
     */
    readonly "&minServiceInteractionIndicatorsLength"?: INTEGER;
    /**
     * @summary &maxServiceInteractionIndicatorsLength
     */
    readonly "&maxServiceInteractionIndicatorsLength"?: INTEGER;
    /**
     * @summary &minSFBillingChargingLength
     */
    readonly "&minSFBillingChargingLength"?: INTEGER;
    /**
     * @summary &maxSFBillingChargingLength
     */
    readonly "&maxSFBillingChargingLength"?: INTEGER;
    /**
     * @summary &minUSIInformationLength
     */
    readonly "&minUSIInformationLength"?: INTEGER;
    /**
     * @summary &maxUSIInformationLength
     */
    readonly "&maxUSIInformationLength"?: INTEGER;
    /**
     * @summary &minUSIServiceIndicatorLength
     */
    readonly "&minUSIServiceIndicatorLength"?: INTEGER;
    /**
     * @summary &maxUSIServiceIndicatorLength
     */
    readonly "&maxUSIServiceIndicatorLength"?: INTEGER;
    /**
     * @summary &numOfBCSMEvents
     */
    readonly "&numOfBCSMEvents"?: INTEGER;
    /**
     * @summary &numOfBCUSMEvents
     */
    readonly "&numOfBCUSMEvents"?: INTEGER;
    /**
     * @summary &numOfChargingEvents
     */
    readonly "&numOfChargingEvents"?: INTEGER;
    /**
     * @summary &numOfCSAs
     */
    readonly "&numOfCSAs"?: INTEGER;
    /**
     * @summary &numOfCSs
     */
    readonly "&numOfCSs"?: INTEGER;
    /**
     * @summary &numOfGenericNumbers
     */
    readonly "&numOfGenericNumbers"?: INTEGER;
    /**
     * @summary &numOfInServiceCompatibilityIndLength
     */
    readonly "&numOfInServiceCompatibilityIndLength"?: INTEGER;
    /**
     * @summary &numOfLegs
     */
    readonly "&numOfLegs"?: INTEGER;
    /**
     * @summary &numOfMessageIDs
     */
    readonly "&numOfMessageIDs"?: INTEGER;
    /**
     * @summary &maxAmount
     */
    readonly "&maxAmount"?: INTEGER;
    /**
     * @summary &maxInitialUnitIncrement
     */
    readonly "&maxInitialUnitIncrement"?: INTEGER;
    /**
     * @summary &maxScalingFactor
     */
    readonly "&maxScalingFactor"?: INTEGER;
    /**
     * @summary &maxSegmentsPerDataInterval
     */
    readonly "&maxSegmentsPerDataInterval"?: INTEGER;
    /**
     * @summary &ub-nbCall
     */
    readonly "&ub-nbCall"?: INTEGER;
    /**
     * @summary &numOfAddresses
     */
    readonly "&numOfAddresses"?: INTEGER;
    /**
     * @summary &numOfINProfile
     */
    readonly "&numOfINProfile"?: INTEGER;
    /**
     * @summary &numOfTriggers
     */
    readonly "&numOfTriggers"?: INTEGER;
};

/* eslint-enable */
