/* eslint-disable */
import {
    type INTEGER
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
 *   &minAChBillingChargingLength                INTEGER,
 *   &maxAChBillingChargingLength                INTEGER,
 *   &minAttributesLength                        INTEGER,
 *   &maxAttributesLength                        INTEGER,
 *   &minBackwardGVNSLength                      INTEGER,
 *   &maxBackwardGVNSLength                      INTEGER,
 *   &maxBearerCapabilityLength                  INTEGER,
 *   &minCalledPartyNumberLength                 INTEGER,
 *   &maxCalledPartyNumberLength                 INTEGER,
 *   &minCallingPartyNumberLength                INTEGER,
 *   &maxCallingPartyNumberLength                INTEGER,
 *   &minCallResultLength                        INTEGER,
 *   &maxCallResultLength                        INTEGER,
 *   &maxCauseLength                             INTEGER,
 *   &minDigitsLength                            INTEGER,
 *   &maxDigitsLength                            INTEGER,
 *   &minDisplayInformationLength                INTEGER,
 *   &maxDisplayInformationLength                INTEGER,
 *   &minEventSpecificInformationChargingLength  INTEGER,
 *   &maxEventSpecificInformationChargingLength  INTEGER,
 *   &minEventTypeChargingLength                 INTEGER,
 *   &maxEventTypeChargingLength                 INTEGER,
 *   &minFCIBillingChargingLength                INTEGER,
 *   &maxFCIBillingChargingLength                INTEGER,
 *   &minForwardGVNSLength                       INTEGER,
 *   &maxForwardGVNSLength                       INTEGER,
 *   &minGenericNameLength                       INTEGER,
 *   &maxGenericNameLength                       INTEGER,
 *   &minGenericNumberLength                     INTEGER,
 *   &maxGenericNumberLength                     INTEGER,
 *   &maxInitialTimeInterval                     INTEGER,
 *   &maxINServiceCompatibilityIndLength         INTEGER,
 *   &minIPAvailableLength                       INTEGER,
 *   &maxIPAvailableLength                       INTEGER,
 *   &minIPSSPCapabilitiesLength                 INTEGER,
 *   &maxIPSSPCapabilitiesLength                 INTEGER,
 *   &minLocationNumberLength                    INTEGER,
 *   &maxLocationNumberLength                    INTEGER,
 *   &minMailBoxIDLength                         INTEGER,
 *   &maxMailBoxIDLength                         INTEGER,
 *   &minMessageContentLength                    INTEGER,
 *   &maxMessageContentLength                    INTEGER,
 *   &minMidCallControlInfoNum                   INTEGER,
 *   &maxMidCallControlInfoNum                   INTEGER,
 *   &minOriginalCalledPartyIDLength             INTEGER,
 *   &maxOriginalCalledPartyIDLength             INTEGER,
 *   &minReasonLength                            INTEGER,
 *   &maxReasonLength                            INTEGER,
 *   &minReceivedInformationLength               INTEGER,
 *   &maxReceivedInformationLength               INTEGER,
 *   &maxRecordedMessageUnits                    INTEGER,
 *   &maxRecordingTime                           INTEGER,
 *   &minRedirectingPartyIDLength                INTEGER,
 *   &maxRedirectingPartyIDLength                INTEGER,
 *   &minRequestedUTSINum                        INTEGER,
 *   &maxRequestedUTSINum                        INTEGER,
 *   &minRouteListLength                         INTEGER,
 *   &maxRouteListLength                         INTEGER,
 *   &minScfIDLength                             INTEGER,
 *   &maxScfIDLength                             INTEGER,
 *   &minScfAddressLength                        INTEGER,
 *   &maxScfAddressLength                        INTEGER,
 *   &minSCIBillingChargingLength                INTEGER,
 *   &maxSCIBillingChargingLength                INTEGER,
 *   &minServiceInteractionIndicatorsLength      INTEGER,
 *   &maxServiceInteractionIndicatorsLength      INTEGER,
 *   &minSFBillingChargingLength                 INTEGER,
 *   &maxSFBillingChargingLength                 INTEGER,
 *   &minUSIInformationLength                    INTEGER,
 *   &maxUSIInformationLength                    INTEGER,
 *   &minUSIServiceIndicatorLength               INTEGER,
 *   &maxUSIServiceIndicatorLength               INTEGER,
 *   &numOfBCSMEvents                            INTEGER,
 *   &numOfBCUSMEvents                           INTEGER,
 *   &numOfChargingEvents                        INTEGER,
 *   &numOfCSAs                                  INTEGER,
 *   &numOfCSs                                   INTEGER,
 *   &numOfExtensions                            INTEGER,
 *   &numOfGenericNumbers                        INTEGER,
 *   &numOfInServiceCompatibilityIndLength       INTEGER,
 *   &numOfLegs                                  INTEGER,
 *   &numOfMessageIDs                            INTEGER,
 *   &maxAmount                                  INTEGER,
 *   &maxInitialUnitIncrement                    INTEGER,
 *   &maxScalingFactor                           INTEGER,
 *   &maxSegmentsPerDataInterval                 INTEGER,
 *   &maxTimePerInterval                         INTEGER,
 *   &maxUnitsPerDataInterval                    INTEGER,
 *   &maxUnitsPerInterval                        INTEGER,
 *   &ub-maxUserCredit                           INTEGER,
 *   &ub-nbCall                                  INTEGER
 * }
 * WITH SYNTAX {
 *   MINIMUM-FOR-ACH-BILLING-CHARGING &minAChBillingChargingLength
 *   MAXIMUM-FOR-ACH-BILLING-CHARGING &maxAChBillingChargingLength
 *   MINIMUM-FOR-ATTRIBUTES &minAttributesLength
 *   MAXIMUM-FOR-ATTRIBUTES &maxAttributesLength
 *   MINIMUM-FOR-BACKWARD-GVNS &minBackwardGVNSLength
 *   MAXIMUM-FOR-BACKWARD-GVNS &maxBackwardGVNSLength
 *   MAXIMUM-FOR-BEARER-CAPABILITY &maxBearerCapabilityLength
 *   MINIMUM-FOR-CALLED-PARTY-NUMBER &minCalledPartyNumberLength
 *   MAXIMUM-FOR-CALLED-PARTY-NUMBER &maxCalledPartyNumberLength
 *   MINIMUM-FOR-CALLING-PARTY-NUMBER &minCallingPartyNumberLength
 *   MAXIMUM-FOR-CALLING-PARTY-NUMBER &maxCallingPartyNumberLength
 *   MINIMUM-FOR-CALL-RESULT &minCallResultLength
 *   MAXIMUM-FOR-CALL-RESULT &maxCallResultLength
 *   MAXIMUM-FOR-CAUSE &maxCauseLength
 *   MINIMUM-FOR-DIGITS &minDigitsLength
 *   MAXIMUM-FOR-DIGITS &maxDigitsLength
 *   MINIMUM-FOR-DISPLAY &minDisplayInformationLength
 *   MAXIMUM-FOR-DISPLAY &maxDisplayInformationLength
 *   MINIMUM-FOR-EVENT-SPECIFIC-CHARGING
 *     &minEventSpecificInformationChargingLength
 *   MAXIMUM-FOR-EVENT-SPECIFIC-CHARGING
 *     &maxEventSpecificInformationChargingLength
 *   MINIMUM-FOR-EVENT-TYPE-CHARGING &minEventTypeChargingLength
 *   MAXIMUM-FOR-EVENT-TYPE-CHARGING &maxEventTypeChargingLength
 *   MINIMUM-FOR-FCI-BILLING-CHARGING &minFCIBillingChargingLength
 *   MAXIMUM-FOR-FCI-BILLING-CHARGING &maxFCIBillingChargingLength
 *   MINIMUM-FOR-FORWARD-GVNS &minForwardGVNSLength
 *   MAXIMUM-FOR-FORWARD-GVNS &maxForwardGVNSLength
 *   MINIMUM-FOR-GENERIC-NAME &minGenericNameLength
 *   MAXIMUM-FOR-GENERIC-NAME &maxGenericNameLength
 *   MINIMUM-FOR-GENERIC-NUMBER &minGenericNumberLength
 *   MAXIMUM-FOR-GENERIC-NUMBER &maxGenericNumberLength
 *   MAXIMUM-FOR-INITIAL-TIME-INTERVAL &maxInitialTimeInterval
 *   MAXIMUM-FOR-IN-SERVICE-COMPATIBILITY &maxINServiceCompatibilityIndLength
 *   MINIMUM-FOR-IP-AVAILABLE &minIPAvailableLength
 *   MAXIMUM-FOR-IP-AVAILABLE &maxIPAvailableLength
 *   MINIMUM-FOR-IP-SSP-CAPABILITIES &minIPSSPCapabilitiesLength
 *   MAXIMUM-FOR-IP-SSP-CAPABILITIES &maxIPSSPCapabilitiesLength
 *   MINIMUM-FOR-LOCATION-NUMBER &minLocationNumberLength
 *   MAXIMUM-FOR-LOCATION-NUMBER &maxLocationNumberLength
 *   MINIMUM-FOR-MAIL-BOX-ID &minMailBoxIDLength
 *   MAXIMUM-FOR-MAIL-BOX-ID &maxMailBoxIDLength
 *   MINIMUM-FOR-MESSAGE-CONTENT &minMessageContentLength
 *   MAXIMUM-FOR-MESSAGE-CONTENT &maxMessageContentLength
 *   MINIMUM-FOR-MID-CALL-CONTROL-INFO &minMidCallControlInfoNum
 *   MAXIMUM-FOR-MID-CALL-CONTROL-INFO &maxMidCallControlInfoNum
 *   MINIMUM-FOR-ORIGINAL-CALLED-PARTY-ID &minOriginalCalledPartyIDLength
 *   MAXIMUM-FOR-ORIGINAL-CALLED-PARTY-ID &maxOriginalCalledPartyIDLength
 *   MINIMUM-FOR-REASON &minReasonLength
 *   MAXIMUM-FOR-REASON &maxReasonLength
 *   MINIMUM-FOR-RECEIVED-INFORMATION &minReceivedInformationLength
 *   MAXIMUM-FOR-RECEIVED-INFORMATION &maxReceivedInformationLength
 *   MAXIMUM-FOR-RECORDED-MESSAGE-UNITS &maxRecordedMessageUnits
 *   MAXIMUM-FOR-RECORDING-TIME &maxRecordingTime
 *   MINIMUM-FOR-REDIRECTING-ID &minRedirectingPartyIDLength
 *   MAXIMUM-FOR-REDIRECTING-ID &maxRedirectingPartyIDLength
 *   MINIMUM-FOR-REQUESTED-UTSI-NUM &minRequestedUTSINum
 *   MAXIMUM-FOR-REQUESTED-UTSI-NUM &maxRequestedUTSINum
 *   MINIMUM-FOR-ROUTE-LIST &minRouteListLength
 *   MAXIMUM-FOR-ROUTE-LIST &maxRouteListLength
 *   MINIMUM-FOR-SCF-ID &minScfIDLength
 *   MAXIMUM-FOR-SCF-ID &maxScfIDLength
 *   MINIMUM-FOR-SCF-ADDRESS &minScfAddressLength
 *   MAXIMUM-FOR-SCF-ADDRESS &maxScfAddressLength
 *   MINIMUM-FOR-SCI-BILLING-CHARGING &minSCIBillingChargingLength
 *   MAXIMUM-FOR-SCI-BILLING-CHARGING &maxSCIBillingChargingLength
 *   MINIMUM-FOR-SII &minServiceInteractionIndicatorsLength
 *   MAXIMUM-FOR-SII &maxServiceInteractionIndicatorsLength
 *   MINIMUM-FOR-SF-BILLING-CHARGING &minSFBillingChargingLength
 *   MAXIMUM-FOR-SF-BILLING-CHARGING &maxSFBillingChargingLength
 *   MINIMUM-FOR-USI-INFORMATION &minUSIInformationLength
 *   MAXIMUM-FOR-USI-INFORMATION &maxUSIInformationLength
 *   MINIMUM-FOR-USI-SERVICE-INDICATOR &minUSIServiceIndicatorLength
 *   MAXIMUM-FOR-USI-SERVICE-INDICATOR &maxUSIServiceIndicatorLength
 *   NUM-OF-BCSM-EVENT &numOfBCSMEvents
 *   NUM-OF-BCUSM-EVENT &numOfBCUSMEvents
 *   NUM-OF-CHARGING-EVENT &numOfChargingEvents
 *   NUM-OF-CSAS &numOfCSAs
 *   NUM-OF-CSS &numOfCSs
 *   NUM-OF-EXTENSIONS &numOfExtensions
 *   NUM-OF-GENERIC-NUMBERS &numOfGenericNumbers
 *   NUM-OF-IN-SERVICE-COMPATIBILITY-ID &numOfInServiceCompatibilityIndLength
 *   NUM-OF-LEGS &numOfLegs
 *   NUM-OF-MESSAGE-IDS &numOfMessageIDs
 *   MAXIMUM-FOR-AMOUNT &maxAmount
 *   MAXIMUM-FOR-INITIAL-UNIT-INCREMENT &maxInitialUnitIncrement
 *   MAXIMUM-FOR-SCALING-FACTOR &maxScalingFactor
 *   MAXIMUM-FOR-SEGMENTS-PER-DATA-INTERVAL &maxSegmentsPerDataInterval
 *   MAXIMUM-FOR-TIME-PER-INTERVAL &maxTimePerInterval
 *   MAXIMUM-FOR-UNITS-PER-DATA-INTERVAL &maxUnitsPerDataInterval
 *   MAXIMUM-FOR-UNITS-PER-INTERVAL &maxUnitsPerInterval
 *   MAXIMUM-FOR-UB-USER-CREDIT &ub-maxUserCredit
 *   MAXIMUM-FOR-UB-NB-CALL &ub-nbCall
 * }
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
     * @summary &minLocationNumberLength
     */
    readonly "&minLocationNumberLength"?: INTEGER;
    /**
     * @summary &maxLocationNumberLength
     */
    readonly "&maxLocationNumberLength"?: INTEGER;
    /**
     * @summary &minMailBoxIDLength
     */
    readonly "&minMailBoxIDLength"?: INTEGER;
    /**
     * @summary &maxMailBoxIDLength
     */
    readonly "&maxMailBoxIDLength"?: INTEGER;
    /**
     * @summary &minMessageContentLength
     */
    readonly "&minMessageContentLength"?: INTEGER;
    /**
     * @summary &maxMessageContentLength
     */
    readonly "&maxMessageContentLength"?: INTEGER;
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
     * @summary &minReceivedInformationLength
     */
    readonly "&minReceivedInformationLength"?: INTEGER;
    /**
     * @summary &maxReceivedInformationLength
     */
    readonly "&maxReceivedInformationLength"?: INTEGER;
    /**
     * @summary &maxRecordedMessageUnits
     */
    readonly "&maxRecordedMessageUnits"?: INTEGER;
    /**
     * @summary &maxRecordingTime
     */
    readonly "&maxRecordingTime"?: INTEGER;
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
     * @summary &minScfIDLength
     */
    readonly "&minScfIDLength"?: INTEGER;
    /**
     * @summary &maxScfIDLength
     */
    readonly "&maxScfIDLength"?: INTEGER;
    /**
     * @summary &minScfAddressLength
     */
    readonly "&minScfAddressLength"?: INTEGER;
    /**
     * @summary &maxScfAddressLength
     */
    readonly "&maxScfAddressLength"?: INTEGER;
    /**
     * @summary &minSCIBillingChargingLength
     */
    readonly "&minSCIBillingChargingLength"?: INTEGER;
    /**
     * @summary &maxSCIBillingChargingLength
     */
    readonly "&maxSCIBillingChargingLength"?: INTEGER;
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
     * @summary &numOfExtensions
     */
    readonly "&numOfExtensions"?: INTEGER;
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
     * @summary &maxTimePerInterval
     */
    readonly "&maxTimePerInterval"?: INTEGER;
    /**
     * @summary &maxUnitsPerDataInterval
     */
    readonly "&maxUnitsPerDataInterval"?: INTEGER;
    /**
     * @summary &maxUnitsPerInterval
     */
    readonly "&maxUnitsPerInterval"?: INTEGER;
    /**
     * @summary &ub-maxUserCredit
     */
    readonly "&ub-maxUserCredit"?: INTEGER;
    /**
     * @summary &ub-nbCall
     */
    readonly "&ub-nbCall"?: INTEGER;
};

/* eslint-enable */
