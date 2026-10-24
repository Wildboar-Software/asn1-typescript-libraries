/* eslint-disable */
import {
    type OPTIONAL,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { ServiceKey, _decode_ServiceKey, _encode_ServiceKey } from "../IN-CS3-SSF-SCF-datatypes/ServiceKey.ta.mjs";
// export { ServiceKey, _decode_ServiceKey, _encode_ServiceKey } from "../IN-CS3-SSF-SCF-datatypes/ServiceKey.ta.mjs";
import { CalledPartyNumber, _decode_CalledPartyNumber, _encode_CalledPartyNumber } from "../IN-CS3-SSF-SCF-datatypes/CalledPartyNumber.ta.mjs";
// export { CalledPartyNumber, _decode_CalledPartyNumber, _encode_CalledPartyNumber } from "../IN-CS3-SSF-SCF-datatypes/CalledPartyNumber.ta.mjs";
import { CallingPartyNumber, _decode_CallingPartyNumber, _encode_CallingPartyNumber } from "../IN-CS3-SSF-SCF-datatypes/CallingPartyNumber.ta.mjs";
// export { CallingPartyNumber, _decode_CallingPartyNumber, _encode_CallingPartyNumber } from "../IN-CS3-SSF-SCF-datatypes/CallingPartyNumber.ta.mjs";
import { CallingPartyBusinessGroupID, _decode_CallingPartyBusinessGroupID, _encode_CallingPartyBusinessGroupID } from "../IN-CS3-SSF-SCF-datatypes/CallingPartyBusinessGroupID.ta.mjs";
// export { CallingPartyBusinessGroupID, _decode_CallingPartyBusinessGroupID, _encode_CallingPartyBusinessGroupID } from "../IN-CS3-SSF-SCF-datatypes/CallingPartyBusinessGroupID.ta.mjs";
import { CallingPartysCategory, _decode_CallingPartysCategory, _encode_CallingPartysCategory } from "../IN-CS3-SSF-SCF-datatypes/CallingPartysCategory.ta.mjs";
// export { CallingPartysCategory, _decode_CallingPartysCategory, _encode_CallingPartysCategory } from "../IN-CS3-SSF-SCF-datatypes/CallingPartysCategory.ta.mjs";
import { CallingPartySubaddress, _decode_CallingPartySubaddress, _encode_CallingPartySubaddress } from "../IN-CS3-SSF-SCF-datatypes/CallingPartySubaddress.ta.mjs";
// export { CallingPartySubaddress, _decode_CallingPartySubaddress, _encode_CallingPartySubaddress } from "../IN-CS3-SSF-SCF-datatypes/CallingPartySubaddress.ta.mjs";
import { CGEncountered, _decode_CGEncountered, _encode_CGEncountered, _enum_for_CGEncountered } from "../IN-CS3-SSF-SCF-datatypes/CGEncountered.ta.mjs";
// export { CGEncountered, _enum_for_CGEncountered, CGEncountered_noCGencountered /* IMPORTED_LONG_ENUMERATION_ITEM */, noCGencountered /* IMPORTED_SHORT_ENUMERATION_ITEM */, CGEncountered_manualCGencountered /* IMPORTED_LONG_ENUMERATION_ITEM */, manualCGencountered /* IMPORTED_SHORT_ENUMERATION_ITEM */, CGEncountered_sCPOverload /* IMPORTED_LONG_ENUMERATION_ITEM */, sCPOverload /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_CGEncountered, _encode_CGEncountered } from "../IN-CS3-SSF-SCF-datatypes/CGEncountered.ta.mjs";
import { IPSSPCapabilities, _decode_IPSSPCapabilities, _encode_IPSSPCapabilities } from "../IN-CS3-SSF-SCF-datatypes/IPSSPCapabilities.ta.mjs";
// export { IPSSPCapabilities, _decode_IPSSPCapabilities, _encode_IPSSPCapabilities } from "../IN-CS3-SSF-SCF-datatypes/IPSSPCapabilities.ta.mjs";
import { IPAvailable, _decode_IPAvailable, _encode_IPAvailable } from "../IN-CS3-SSF-SCF-datatypes/IPAvailable.ta.mjs";
// export { IPAvailable, _decode_IPAvailable, _encode_IPAvailable } from "../IN-CS3-SSF-SCF-datatypes/IPAvailable.ta.mjs";
import { LocationNumber, _decode_LocationNumber, _encode_LocationNumber } from "../IN-CS3-SSF-SCF-datatypes/LocationNumber.ta.mjs";
// export { LocationNumber, _decode_LocationNumber, _encode_LocationNumber } from "../IN-CS3-SSF-SCF-datatypes/LocationNumber.ta.mjs";
import { MiscCallInfo, _decode_MiscCallInfo, _encode_MiscCallInfo } from "../IN-CS3-SSF-SCF-datatypes/MiscCallInfo.ta.mjs";
// export { MiscCallInfo, _decode_MiscCallInfo, _encode_MiscCallInfo } from "../IN-CS3-SSF-SCF-datatypes/MiscCallInfo.ta.mjs";
import { OriginalCalledPartyID, _decode_OriginalCalledPartyID, _encode_OriginalCalledPartyID } from "../IN-CS3-SSF-SCF-datatypes/OriginalCalledPartyID.ta.mjs";
// export { OriginalCalledPartyID, _decode_OriginalCalledPartyID, _encode_OriginalCalledPartyID } from "../IN-CS3-SSF-SCF-datatypes/OriginalCalledPartyID.ta.mjs";
import { ServiceProfileIdentifier, _decode_ServiceProfileIdentifier, _encode_ServiceProfileIdentifier } from "../IN-CS3-SSF-SCF-datatypes/ServiceProfileIdentifier.ta.mjs";
// export { ServiceProfileIdentifier, _decode_ServiceProfileIdentifier, _encode_ServiceProfileIdentifier } from "../IN-CS3-SSF-SCF-datatypes/ServiceProfileIdentifier.ta.mjs";
import { TerminalType, _decode_TerminalType, _encode_TerminalType, _enum_for_TerminalType } from "../IN-CS3-SSF-SCF-datatypes/TerminalType.ta.mjs";
// export { TerminalType, _enum_for_TerminalType, TerminalType_unknown /* IMPORTED_LONG_ENUMERATION_ITEM */, unknown /* IMPORTED_SHORT_ENUMERATION_ITEM */, TerminalType_dialPulse /* IMPORTED_LONG_ENUMERATION_ITEM */, dialPulse /* IMPORTED_SHORT_ENUMERATION_ITEM */, TerminalType_dtmf /* IMPORTED_LONG_ENUMERATION_ITEM */, dtmf /* IMPORTED_SHORT_ENUMERATION_ITEM */, TerminalType_isdn /* IMPORTED_LONG_ENUMERATION_ITEM */, isdn /* IMPORTED_SHORT_ENUMERATION_ITEM */, TerminalType_isdnNoDtmf /* IMPORTED_LONG_ENUMERATION_ITEM */, isdnNoDtmf /* IMPORTED_SHORT_ENUMERATION_ITEM */, TerminalType_spare /* IMPORTED_LONG_ENUMERATION_ITEM */, spare /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_TerminalType, _encode_TerminalType } from "../IN-CS3-SSF-SCF-datatypes/TerminalType.ta.mjs";
import { Extensions, _decode_Extensions, _encode_Extensions } from "../IN-CS3-common-datatypes/Extensions.ta.mjs";
// export { Extensions, _decode_Extensions, _encode_Extensions } from "../IN-CS3-common-datatypes/Extensions.ta.mjs";
import { TriggerType, _decode_TriggerType, _encode_TriggerType, _enum_for_TriggerType } from "../IN-CS3-SSF-SCF-datatypes/TriggerType.ta.mjs";
// export { TriggerType, _enum_for_TriggerType, TriggerType_featureActivation /* IMPORTED_LONG_ENUMERATION_ITEM */, featureActivation /* IMPORTED_SHORT_ENUMERATION_ITEM */, TriggerType_verticalServiceCode /* IMPORTED_LONG_ENUMERATION_ITEM */, verticalServiceCode /* IMPORTED_SHORT_ENUMERATION_ITEM */, TriggerType_customizedAccess /* IMPORTED_LONG_ENUMERATION_ITEM */, customizedAccess /* IMPORTED_SHORT_ENUMERATION_ITEM */, TriggerType_customizedIntercom /* IMPORTED_LONG_ENUMERATION_ITEM */, customizedIntercom /* IMPORTED_SHORT_ENUMERATION_ITEM */, TriggerType_emergencyService /* IMPORTED_LONG_ENUMERATION_ITEM */, emergencyService /* IMPORTED_SHORT_ENUMERATION_ITEM */, TriggerType_aFR /* IMPORTED_LONG_ENUMERATION_ITEM */, aFR /* IMPORTED_SHORT_ENUMERATION_ITEM */, TriggerType_sharedIOTrunk /* IMPORTED_LONG_ENUMERATION_ITEM */, sharedIOTrunk /* IMPORTED_SHORT_ENUMERATION_ITEM */, TriggerType_offHookDelay /* IMPORTED_LONG_ENUMERATION_ITEM */, offHookDelay /* IMPORTED_SHORT_ENUMERATION_ITEM */, TriggerType_channelSetupPRI /* IMPORTED_LONG_ENUMERATION_ITEM */, channelSetupPRI /* IMPORTED_SHORT_ENUMERATION_ITEM */, TriggerType_tNoAnswer /* IMPORTED_LONG_ENUMERATION_ITEM */, TriggerType_tBusy /* IMPORTED_LONG_ENUMERATION_ITEM */, TriggerType_oCalledPartyBusy /* IMPORTED_LONG_ENUMERATION_ITEM */, TriggerType_oNoAnswer /* IMPORTED_LONG_ENUMERATION_ITEM */, TriggerType_originationAttemptAuthorized /* IMPORTED_LONG_ENUMERATION_ITEM */, originationAttemptAuthorized /* IMPORTED_SHORT_ENUMERATION_ITEM */, TriggerType_oAnswer /* IMPORTED_LONG_ENUMERATION_ITEM */, TriggerType_oDisconnect /* IMPORTED_LONG_ENUMERATION_ITEM */, TriggerType_termAttemptAuthorized /* IMPORTED_LONG_ENUMERATION_ITEM */, TriggerType_tAnswer /* IMPORTED_LONG_ENUMERATION_ITEM */, TriggerType_tDisconnect /* IMPORTED_LONG_ENUMERATION_ITEM */, _decode_TriggerType, _encode_TriggerType } from "../IN-CS3-SSF-SCF-datatypes/TriggerType.ta.mjs";
import { HighLayerCompatibility, _decode_HighLayerCompatibility, _encode_HighLayerCompatibility } from "../IN-CS3-SSF-SCF-datatypes/HighLayerCompatibility.ta.mjs";
// export { HighLayerCompatibility, _decode_HighLayerCompatibility, _encode_HighLayerCompatibility } from "../IN-CS3-SSF-SCF-datatypes/HighLayerCompatibility.ta.mjs";
import { ServiceInteractionIndicators, _decode_ServiceInteractionIndicators, _encode_ServiceInteractionIndicators } from "../IN-CS3-SSF-SCF-datatypes/ServiceInteractionIndicators.ta.mjs";
// export { ServiceInteractionIndicators, _decode_ServiceInteractionIndicators, _encode_ServiceInteractionIndicators } from "../IN-CS3-SSF-SCF-datatypes/ServiceInteractionIndicators.ta.mjs";
import { AdditionalCallingPartyNumber, _decode_AdditionalCallingPartyNumber, _encode_AdditionalCallingPartyNumber } from "../IN-CS3-SSF-SCF-datatypes/AdditionalCallingPartyNumber.ta.mjs";
// export { AdditionalCallingPartyNumber, _decode_AdditionalCallingPartyNumber, _encode_AdditionalCallingPartyNumber } from "../IN-CS3-SSF-SCF-datatypes/AdditionalCallingPartyNumber.ta.mjs";
import { ForwardCallIndicators, _decode_ForwardCallIndicators, _encode_ForwardCallIndicators } from "../IN-CS3-SSF-SCF-datatypes/ForwardCallIndicators.ta.mjs";
// export { ForwardCallIndicators, _decode_ForwardCallIndicators, _encode_ForwardCallIndicators } from "../IN-CS3-SSF-SCF-datatypes/ForwardCallIndicators.ta.mjs";
import { BearerCapability, _decode_BearerCapability, _encode_BearerCapability } from "../IN-CS3-SSF-SCF-datatypes/BearerCapability.ta.mjs";
// export { BearerCapability, _decode_BearerCapability, _encode_BearerCapability } from "../IN-CS3-SSF-SCF-datatypes/BearerCapability.ta.mjs";
import { EventTypeBCSM, _decode_EventTypeBCSM, _encode_EventTypeBCSM, _enum_for_EventTypeBCSM } from "../IN-CS3-SSF-SCF-datatypes/EventTypeBCSM.ta.mjs";
// export { EventTypeBCSM, _enum_for_EventTypeBCSM, EventTypeBCSM_origAttemptAuthorized /* IMPORTED_LONG_ENUMERATION_ITEM */, origAttemptAuthorized /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventTypeBCSM_collectedInfo /* IMPORTED_LONG_ENUMERATION_ITEM */, collectedInfo /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventTypeBCSM_analysedInformation /* IMPORTED_LONG_ENUMERATION_ITEM */, analysedInformation /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventTypeBCSM_routeSelectFailure /* IMPORTED_LONG_ENUMERATION_ITEM */, routeSelectFailure /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventTypeBCSM_oCalledPartyBusy /* IMPORTED_LONG_ENUMERATION_ITEM */, EventTypeBCSM_oNoAnswer /* IMPORTED_LONG_ENUMERATION_ITEM */, EventTypeBCSM_oAnswer /* IMPORTED_LONG_ENUMERATION_ITEM */, EventTypeBCSM_oMidCall /* IMPORTED_LONG_ENUMERATION_ITEM */, oMidCall /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventTypeBCSM_oDisconnect /* IMPORTED_LONG_ENUMERATION_ITEM */, EventTypeBCSM_oAbandon /* IMPORTED_LONG_ENUMERATION_ITEM */, oAbandon /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventTypeBCSM_termAttemptAuthorized /* IMPORTED_LONG_ENUMERATION_ITEM */, EventTypeBCSM_tBusy /* IMPORTED_LONG_ENUMERATION_ITEM */, EventTypeBCSM_tNoAnswer /* IMPORTED_LONG_ENUMERATION_ITEM */, EventTypeBCSM_tAnswer /* IMPORTED_LONG_ENUMERATION_ITEM */, EventTypeBCSM_tMidCall /* IMPORTED_LONG_ENUMERATION_ITEM */, tMidCall /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventTypeBCSM_tDisconnect /* IMPORTED_LONG_ENUMERATION_ITEM */, EventTypeBCSM_tAbandon /* IMPORTED_LONG_ENUMERATION_ITEM */, tAbandon /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventTypeBCSM_oTermSeized /* IMPORTED_LONG_ENUMERATION_ITEM */, oTermSeized /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventTypeBCSM_oSuspend /* IMPORTED_LONG_ENUMERATION_ITEM */, oSuspend /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventTypeBCSM_tSuspend /* IMPORTED_LONG_ENUMERATION_ITEM */, tSuspend /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventTypeBCSM_origAttempt /* IMPORTED_LONG_ENUMERATION_ITEM */, origAttempt /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventTypeBCSM_termAttempt /* IMPORTED_LONG_ENUMERATION_ITEM */, termAttempt /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventTypeBCSM_oReAnswer /* IMPORTED_LONG_ENUMERATION_ITEM */, oReAnswer /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventTypeBCSM_tReAnswer /* IMPORTED_LONG_ENUMERATION_ITEM */, tReAnswer /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventTypeBCSM_facilitySelectedAndAvailable /* IMPORTED_LONG_ENUMERATION_ITEM */, facilitySelectedAndAvailable /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventTypeBCSM_callAccepted /* IMPORTED_LONG_ENUMERATION_ITEM */, callAccepted /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventTypeBCSM_authorizeRouteFailure /* IMPORTED_LONG_ENUMERATION_ITEM */, authorizeRouteFailure /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventTypeBCSM_originationAttemptDenied /* IMPORTED_LONG_ENUMERATION_ITEM */, originationAttemptDenied /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventTypeBCSM_terminationAttemptDenied /* IMPORTED_LONG_ENUMERATION_ITEM */, terminationAttemptDenied /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_EventTypeBCSM, _encode_EventTypeBCSM } from "../IN-CS3-SSF-SCF-datatypes/EventTypeBCSM.ta.mjs";
import { RedirectingPartyID, _decode_RedirectingPartyID, _encode_RedirectingPartyID } from "../IN-CS3-SSF-SCF-datatypes/RedirectingPartyID.ta.mjs";
// export { RedirectingPartyID, _decode_RedirectingPartyID, _encode_RedirectingPartyID } from "../IN-CS3-SSF-SCF-datatypes/RedirectingPartyID.ta.mjs";
import { RedirectionInformation, _decode_RedirectionInformation, _encode_RedirectionInformation } from "../IN-CS3-SSF-SCF-datatypes/RedirectionInformation.ta.mjs";
// export { RedirectionInformation, _decode_RedirectionInformation, _encode_RedirectionInformation } from "../IN-CS3-SSF-SCF-datatypes/RedirectionInformation.ta.mjs";
import { Cause, _decode_Cause, _encode_Cause } from "../IN-CS3-SSF-SCF-datatypes/Cause.ta.mjs";
// export { Cause, _decode_Cause, _encode_Cause } from "../IN-CS3-SSF-SCF-datatypes/Cause.ta.mjs";
import { ComponentType, _decode_ComponentType, _encode_ComponentType, _enum_for_ComponentType } from "../IN-CS3-SSF-SCF-datatypes/ComponentType.ta.mjs";
// export { ComponentType, _enum_for_ComponentType, ComponentType_any /* IMPORTED_LONG_ENUMERATION_ITEM */, any_ /* IMPORTED_SHORT_ENUMERATION_ITEM */, ComponentType_invoke /* IMPORTED_LONG_ENUMERATION_ITEM */, invoke /* IMPORTED_SHORT_ENUMERATION_ITEM */, ComponentType_rResult /* IMPORTED_LONG_ENUMERATION_ITEM */, rResult /* IMPORTED_SHORT_ENUMERATION_ITEM */, ComponentType_rError /* IMPORTED_LONG_ENUMERATION_ITEM */, rError /* IMPORTED_SHORT_ENUMERATION_ITEM */, ComponentType_rReject /* IMPORTED_LONG_ENUMERATION_ITEM */, rReject /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ComponentType, _encode_ComponentType } from "../IN-CS3-SSF-SCF-datatypes/ComponentType.ta.mjs";
import { Component, _decode_Component, _encode_Component } from "../IN-CS3-SSF-SCF-datatypes/Component.ta.mjs";
// export { Component, _decode_Component, _encode_Component } from "../IN-CS3-SSF-SCF-datatypes/Component.ta.mjs";
import { ComponentCorrelationID, _decode_ComponentCorrelationID, _encode_ComponentCorrelationID } from "../IN-CS3-SSF-SCF-datatypes/ComponentCorrelationID.ta.mjs";
// export { ComponentCorrelationID, _decode_ComponentCorrelationID, _encode_ComponentCorrelationID } from "../IN-CS3-SSF-SCF-datatypes/ComponentCorrelationID.ta.mjs";
import { ISDNAccessRelatedInformation, _decode_ISDNAccessRelatedInformation, _encode_ISDNAccessRelatedInformation } from "../IN-CS3-SSF-SCF-datatypes/ISDNAccessRelatedInformation.ta.mjs";
// export { ISDNAccessRelatedInformation, _decode_ISDNAccessRelatedInformation, _encode_ISDNAccessRelatedInformation } from "../IN-CS3-SSF-SCF-datatypes/ISDNAccessRelatedInformation.ta.mjs";
import { INServiceCompatibilityIndication, _decode_INServiceCompatibilityIndication, _encode_INServiceCompatibilityIndication } from "../IN-CS3-SSF-SCF-datatypes/INServiceCompatibilityIndication.ta.mjs";
// export { INServiceCompatibilityIndication, _decode_INServiceCompatibilityIndication, _encode_INServiceCompatibilityIndication } from "../IN-CS3-SSF-SCF-datatypes/INServiceCompatibilityIndication.ta.mjs";
import { GenericNumbers, _decode_GenericNumbers, _encode_GenericNumbers } from "../IN-CS3-SSF-SCF-datatypes/GenericNumbers.ta.mjs";
// export { GenericNumbers, _decode_GenericNumbers, _encode_GenericNumbers } from "../IN-CS3-SSF-SCF-datatypes/GenericNumbers.ta.mjs";
import { ServiceInteractionIndicatorsTwo, _decode_ServiceInteractionIndicatorsTwo, _encode_ServiceInteractionIndicatorsTwo } from "../IN-CS3-SSF-SCF-datatypes/ServiceInteractionIndicatorsTwo.ta.mjs";
// export { ServiceInteractionIndicatorsTwo, _decode_ServiceInteractionIndicatorsTwo, _encode_ServiceInteractionIndicatorsTwo } from "../IN-CS3-SSF-SCF-datatypes/ServiceInteractionIndicatorsTwo.ta.mjs";
import { ForwardGVNS, _decode_ForwardGVNS, _encode_ForwardGVNS } from "../IN-CS3-SSF-SCF-datatypes/ForwardGVNS.ta.mjs";
// export { ForwardGVNS, _decode_ForwardGVNS, _encode_ForwardGVNS } from "../IN-CS3-SSF-SCF-datatypes/ForwardGVNS.ta.mjs";
import { CSAID, _decode_CSAID, _encode_CSAID } from "../IN-CS3-SSF-SCF-datatypes/CSAID.ta.mjs";
// export { CSAID, _decode_CSAID, _encode_CSAID } from "../IN-CS3-SSF-SCF-datatypes/CSAID.ta.mjs";
import { USIServiceIndicator, _decode_USIServiceIndicator, _encode_USIServiceIndicator } from "../IN-CS3-SSF-SCF-datatypes/USIServiceIndicator.ta.mjs";
// export { USIServiceIndicator, _decode_USIServiceIndicator, _encode_USIServiceIndicator } from "../IN-CS3-SSF-SCF-datatypes/USIServiceIndicator.ta.mjs";
import { USIInformation, _decode_USIInformation, _encode_USIInformation } from "../IN-CS3-SSF-SCF-datatypes/USIInformation.ta.mjs";
// export { USIInformation, _decode_USIInformation, _encode_USIInformation } from "../IN-CS3-SSF-SCF-datatypes/USIInformation.ta.mjs";
import { Carrier, _decode_Carrier, _encode_Carrier } from "../IN-CS3-SSF-SCF-datatypes/Carrier.ta.mjs";
// export { Carrier, _decode_Carrier, _encode_Carrier } from "../IN-CS3-SSF-SCF-datatypes/Carrier.ta.mjs";
import { CCSS, _decode_CCSS, _encode_CCSS } from "../IN-CS3-SSF-SCF-datatypes/CCSS.ta.mjs";
// export { CCSS, _decode_CCSS, _encode_CCSS } from "../IN-CS3-SSF-SCF-datatypes/CCSS.ta.mjs";
import { VPNIndicator, _decode_VPNIndicator, _encode_VPNIndicator } from "../IN-CS3-SSF-SCF-datatypes/VPNIndicator.ta.mjs";
// export { VPNIndicator, _decode_VPNIndicator, _encode_VPNIndicator } from "../IN-CS3-SSF-SCF-datatypes/VPNIndicator.ta.mjs";
import { CNInfo, _decode_CNInfo, _encode_CNInfo } from "../IN-CS3-SSF-SCF-datatypes/CNInfo.ta.mjs";
// export { CNInfo, _decode_CNInfo, _encode_CNInfo } from "../IN-CS3-SSF-SCF-datatypes/CNInfo.ta.mjs";
import { CallReference, _decode_CallReference, _encode_CallReference } from "../IN-CS3-SSF-SCF-datatypes/CallReference.ta.mjs";
// export { CallReference, _decode_CallReference, _encode_CallReference } from "../IN-CS3-SSF-SCF-datatypes/CallReference.ta.mjs";
import { RouteingNumber, _decode_RouteingNumber, _encode_RouteingNumber } from "../IN-CS3-SSF-SCF-datatypes/RouteingNumber.ta.mjs";
// export { RouteingNumber, _decode_RouteingNumber, _encode_RouteingNumber } from "../IN-CS3-SSF-SCF-datatypes/RouteingNumber.ta.mjs";
import { CallingGeodeticLocation, _decode_CallingGeodeticLocation, _encode_CallingGeodeticLocation } from "../IN-CS3-SSF-SCF-datatypes/CallingGeodeticLocation.ta.mjs";
// export { CallingGeodeticLocation, _decode_CallingGeodeticLocation, _encode_CallingGeodeticLocation } from "../IN-CS3-SSF-SCF-datatypes/CallingGeodeticLocation.ta.mjs";


/**
 * @summary InitialDPArg
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * InitialDPArg ::= SEQUENCE {
 *   serviceKey                        [0]  ServiceKey OPTIONAL,
 *   dialledDigits                     [1]  CalledPartyNumber OPTIONAL,
 *   calledPartyNumber                 [2]  CalledPartyNumber OPTIONAL,
 *   callingPartyNumber                [3]  CallingPartyNumber OPTIONAL,
 *   callingPartyBusinessGroupID       [4]  CallingPartyBusinessGroupID OPTIONAL,
 *   callingPartysCategory             [5]  CallingPartysCategory OPTIONAL,
 *   callingPartySubaddress            [6]  CallingPartySubaddress OPTIONAL,
 *   cGEncountered                     [7]  CGEncountered OPTIONAL,
 *   iPSSPCapabilities                 [8]  IPSSPCapabilities OPTIONAL,
 *   iPAvailable                       [9]  IPAvailable OPTIONAL,
 *   locationNumber                    [10]  LocationNumber OPTIONAL,
 *   miscCallInfo                      [11]  MiscCallInfo OPTIONAL,
 *   originalCalledPartyID             [12]  OriginalCalledPartyID OPTIONAL,
 *   serviceProfileIdentifier          [13]  ServiceProfileIdentifier OPTIONAL,
 *   terminalType                      [14]  TerminalType OPTIONAL,
 *   extensions                        [15]  Extensions OPTIONAL,
 *   triggerType                       [16]  TriggerType OPTIONAL,
 *   highLayerCompatibility            [23]  HighLayerCompatibility OPTIONAL,
 *   serviceInteractionIndicators
 *     [24]  ServiceInteractionIndicators OPTIONAL,
 *   additionalCallingPartyNumber
 *     [25]  AdditionalCallingPartyNumber OPTIONAL,
 *   forwardCallIndicators             [26]  ForwardCallIndicators OPTIONAL,
 *   bearerCapability                  [27]  BearerCapability OPTIONAL,
 *   eventTypeBCSM                     [28]  EventTypeBCSM OPTIONAL,
 *   redirectingPartyID                [29]  RedirectingPartyID OPTIONAL,
 *   redirectionInformation            [30]  RedirectionInformation OPTIONAL,
 *   cause                             [17]  Cause OPTIONAL,
 *   componentType                     [18]  ComponentType OPTIONAL,
 *   component                         [19]  Component OPTIONAL,
 *   componentCorrelationID            [20]  ComponentCorrelationID OPTIONAL,
 *   iSDNAccessRelatedInformation
 *     [21]  ISDNAccessRelatedInformation OPTIONAL,
 *   iNServiceCompatibilityIndication
 *     [22]  INServiceCompatibilityIndication OPTIONAL,
 *   genericNumbers                    [31]  GenericNumbers OPTIONAL,
 *   serviceInteractionIndicatorsTwo
 *     [32]  ServiceInteractionIndicatorsTwo OPTIONAL,
 *   forwardGVNS                       [33]  ForwardGVNS OPTIONAL,
 *   createdCallSegmentAssociation     [34]  CSAID OPTIONAL,
 *   uSIServiceIndicator               [35]  USIServiceIndicator OPTIONAL,
 *   uSIInformation                    [36]  USIInformation OPTIONAL,
 *   carrier                           [37]  Carrier OPTIONAL,
 *   cCSS                              [38]  CCSS OPTIONAL,
 *   vPNIndicator                      [39]  VPNIndicator OPTIONAL,
 *   cNInfo                            [40]  CNInfo OPTIONAL,
 *   callReference                     [41]  CallReference OPTIONAL,
 *   routeingNumber                    [42]  RouteingNumber OPTIONAL,
 *   callingGeodeticLocation           [43]  CallingGeodeticLocation OPTIONAL,
 *   ...
 * }
 * ```
 * 
 * @class
 */
export
class InitialDPArg {
    /**
     * @summary `serviceKey`.
     * @public
     * @readonly
     */
    readonly serviceKey: OPTIONAL<ServiceKey>;
    /**
     * @summary `dialledDigits`.
     * @public
     * @readonly
     */
    readonly dialledDigits: OPTIONAL<CalledPartyNumber>;
    /**
     * @summary `calledPartyNumber`.
     * @public
     * @readonly
     */
    readonly calledPartyNumber: OPTIONAL<CalledPartyNumber>;
    /**
     * @summary `callingPartyNumber`.
     * @public
     * @readonly
     */
    readonly callingPartyNumber: OPTIONAL<CallingPartyNumber>;
    /**
     * @summary `callingPartyBusinessGroupID`.
     * @public
     * @readonly
     */
    readonly callingPartyBusinessGroupID: OPTIONAL<CallingPartyBusinessGroupID>;
    /**
     * @summary `callingPartysCategory`.
     * @public
     * @readonly
     */
    readonly callingPartysCategory: OPTIONAL<CallingPartysCategory>;
    /**
     * @summary `callingPartySubaddress`.
     * @public
     * @readonly
     */
    readonly callingPartySubaddress: OPTIONAL<CallingPartySubaddress>;
    /**
     * @summary `cGEncountered`.
     * @public
     * @readonly
     */
    readonly cGEncountered: OPTIONAL<CGEncountered>;
    /**
     * @summary `iPSSPCapabilities`.
     * @public
     * @readonly
     */
    readonly iPSSPCapabilities: OPTIONAL<IPSSPCapabilities>;
    /**
     * @summary `iPAvailable`.
     * @public
     * @readonly
     */
    readonly iPAvailable: OPTIONAL<IPAvailable>;
    /**
     * @summary `locationNumber`.
     * @public
     * @readonly
     */
    readonly locationNumber: OPTIONAL<LocationNumber>;
    /**
     * @summary `miscCallInfo`.
     * @public
     * @readonly
     */
    readonly miscCallInfo: OPTIONAL<MiscCallInfo>;
    /**
     * @summary `originalCalledPartyID`.
     * @public
     * @readonly
     */
    readonly originalCalledPartyID: OPTIONAL<OriginalCalledPartyID>;
    /**
     * @summary `serviceProfileIdentifier`.
     * @public
     * @readonly
     */
    readonly serviceProfileIdentifier: OPTIONAL<ServiceProfileIdentifier>;
    /**
     * @summary `terminalType`.
     * @public
     * @readonly
     */
    readonly terminalType: OPTIONAL<TerminalType>;
    /**
     * @summary `extensions`.
     * @public
     * @readonly
     */
    readonly extensions: OPTIONAL<Extensions>;
    /**
     * @summary `triggerType`.
     * @public
     * @readonly
     */
    readonly triggerType: OPTIONAL<TriggerType>;
    /**
     * @summary `highLayerCompatibility`.
     * @public
     * @readonly
     */
    readonly highLayerCompatibility: OPTIONAL<HighLayerCompatibility>;
    /**
     * @summary `serviceInteractionIndicators`.
     * @public
     * @readonly
     */
    readonly serviceInteractionIndicators: OPTIONAL<ServiceInteractionIndicators>;
    /**
     * @summary `additionalCallingPartyNumber`.
     * @public
     * @readonly
     */
    readonly additionalCallingPartyNumber: OPTIONAL<AdditionalCallingPartyNumber>;
    /**
     * @summary `forwardCallIndicators`.
     * @public
     * @readonly
     */
    readonly forwardCallIndicators: OPTIONAL<ForwardCallIndicators>;
    /**
     * @summary `bearerCapability`.
     * @public
     * @readonly
     */
    readonly bearerCapability: OPTIONAL<BearerCapability>;
    /**
     * @summary `eventTypeBCSM`.
     * @public
     * @readonly
     */
    readonly eventTypeBCSM: OPTIONAL<EventTypeBCSM>;
    /**
     * @summary `redirectingPartyID`.
     * @public
     * @readonly
     */
    readonly redirectingPartyID: OPTIONAL<RedirectingPartyID>;
    /**
     * @summary `redirectionInformation`.
     * @public
     * @readonly
     */
    readonly redirectionInformation: OPTIONAL<RedirectionInformation>;
    /**
     * @summary `cause`.
     * @public
     * @readonly
     */
    readonly cause: OPTIONAL<Cause>;
    /**
     * @summary `componentType`.
     * @public
     * @readonly
     */
    readonly componentType: OPTIONAL<ComponentType>;
    /**
     * @summary `component`.
     * @public
     * @readonly
     */
    readonly component: OPTIONAL<Component>;
    /**
     * @summary `componentCorrelationID`.
     * @public
     * @readonly
     */
    readonly componentCorrelationID: OPTIONAL<ComponentCorrelationID>;
    /**
     * @summary `iSDNAccessRelatedInformation`.
     * @public
     * @readonly
     */
    readonly iSDNAccessRelatedInformation: OPTIONAL<ISDNAccessRelatedInformation>;
    /**
     * @summary `iNServiceCompatibilityIndication`.
     * @public
     * @readonly
     */
    readonly iNServiceCompatibilityIndication: OPTIONAL<INServiceCompatibilityIndication>;
    /**
     * @summary `genericNumbers`.
     * @public
     * @readonly
     */
    readonly genericNumbers: OPTIONAL<GenericNumbers>;
    /**
     * @summary `serviceInteractionIndicatorsTwo`.
     * @public
     * @readonly
     */
    readonly serviceInteractionIndicatorsTwo: OPTIONAL<ServiceInteractionIndicatorsTwo>;
    /**
     * @summary `forwardGVNS`.
     * @public
     * @readonly
     */
    readonly forwardGVNS: OPTIONAL<ForwardGVNS>;
    /**
     * @summary `createdCallSegmentAssociation`.
     * @public
     * @readonly
     */
    readonly createdCallSegmentAssociation: OPTIONAL<CSAID>;
    /**
     * @summary `uSIServiceIndicator`.
     * @public
     * @readonly
     */
    readonly uSIServiceIndicator: OPTIONAL<USIServiceIndicator>;
    /**
     * @summary `uSIInformation`.
     * @public
     * @readonly
     */
    readonly uSIInformation: OPTIONAL<USIInformation>;
    /**
     * @summary `carrier`.
     * @public
     * @readonly
     */
    readonly carrier: OPTIONAL<Carrier>;
    /**
     * @summary `cCSS`.
     * @public
     * @readonly
     */
    readonly cCSS: OPTIONAL<CCSS>;
    /**
     * @summary `vPNIndicator`.
     * @public
     * @readonly
     */
    readonly vPNIndicator: OPTIONAL<VPNIndicator>;
    /**
     * @summary `cNInfo`.
     * @public
     * @readonly
     */
    readonly cNInfo: OPTIONAL<CNInfo>;
    /**
     * @summary `callReference`.
     * @public
     * @readonly
     */
    readonly callReference: OPTIONAL<CallReference>;
    /**
     * @summary `routeingNumber`.
     * @public
     * @readonly
     */
    readonly routeingNumber: OPTIONAL<RouteingNumber>;
    /**
     * @summary `callingGeodeticLocation`.
     * @public
     * @readonly
     */
    readonly callingGeodeticLocation: OPTIONAL<CallingGeodeticLocation>;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        serviceKey?: OPTIONAL<ServiceKey>,
        dialledDigits?: OPTIONAL<CalledPartyNumber>,
        calledPartyNumber?: OPTIONAL<CalledPartyNumber>,
        callingPartyNumber?: OPTIONAL<CallingPartyNumber>,
        callingPartyBusinessGroupID?: OPTIONAL<CallingPartyBusinessGroupID>,
        callingPartysCategory?: OPTIONAL<CallingPartysCategory>,
        callingPartySubaddress?: OPTIONAL<CallingPartySubaddress>,
        cGEncountered?: OPTIONAL<CGEncountered>,
        iPSSPCapabilities?: OPTIONAL<IPSSPCapabilities>,
        iPAvailable?: OPTIONAL<IPAvailable>,
        locationNumber?: OPTIONAL<LocationNumber>,
        miscCallInfo?: OPTIONAL<MiscCallInfo>,
        originalCalledPartyID?: OPTIONAL<OriginalCalledPartyID>,
        serviceProfileIdentifier?: OPTIONAL<ServiceProfileIdentifier>,
        terminalType?: OPTIONAL<TerminalType>,
        extensions?: OPTIONAL<Extensions>,
        triggerType?: OPTIONAL<TriggerType>,
        highLayerCompatibility?: OPTIONAL<HighLayerCompatibility>,
        serviceInteractionIndicators?: OPTIONAL<ServiceInteractionIndicators>,
        additionalCallingPartyNumber?: OPTIONAL<AdditionalCallingPartyNumber>,
        forwardCallIndicators?: OPTIONAL<ForwardCallIndicators>,
        bearerCapability?: OPTIONAL<BearerCapability>,
        eventTypeBCSM?: OPTIONAL<EventTypeBCSM>,
        redirectingPartyID?: OPTIONAL<RedirectingPartyID>,
        redirectionInformation?: OPTIONAL<RedirectionInformation>,
        cause?: OPTIONAL<Cause>,
        componentType?: OPTIONAL<ComponentType>,
        component?: OPTIONAL<Component>,
        componentCorrelationID?: OPTIONAL<ComponentCorrelationID>,
        iSDNAccessRelatedInformation?: OPTIONAL<ISDNAccessRelatedInformation>,
        iNServiceCompatibilityIndication?: OPTIONAL<INServiceCompatibilityIndication>,
        genericNumbers?: OPTIONAL<GenericNumbers>,
        serviceInteractionIndicatorsTwo?: OPTIONAL<ServiceInteractionIndicatorsTwo>,
        forwardGVNS?: OPTIONAL<ForwardGVNS>,
        createdCallSegmentAssociation?: OPTIONAL<CSAID>,
        uSIServiceIndicator?: OPTIONAL<USIServiceIndicator>,
        uSIInformation?: OPTIONAL<USIInformation>,
        carrier?: OPTIONAL<Carrier>,
        cCSS?: OPTIONAL<CCSS>,
        vPNIndicator?: OPTIONAL<VPNIndicator>,
        cNInfo?: OPTIONAL<CNInfo>,
        callReference?: OPTIONAL<CallReference>,
        routeingNumber?: OPTIONAL<RouteingNumber>,
        callingGeodeticLocation?: OPTIONAL<CallingGeodeticLocation>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.serviceKey = serviceKey;
        this.dialledDigits = dialledDigits;
        this.calledPartyNumber = calledPartyNumber;
        this.callingPartyNumber = callingPartyNumber;
        this.callingPartyBusinessGroupID = callingPartyBusinessGroupID;
        this.callingPartysCategory = callingPartysCategory;
        this.callingPartySubaddress = callingPartySubaddress;
        this.cGEncountered = cGEncountered;
        this.iPSSPCapabilities = iPSSPCapabilities;
        this.iPAvailable = iPAvailable;
        this.locationNumber = locationNumber;
        this.miscCallInfo = miscCallInfo;
        this.originalCalledPartyID = originalCalledPartyID;
        this.serviceProfileIdentifier = serviceProfileIdentifier;
        this.terminalType = terminalType;
        this.extensions = extensions;
        this.triggerType = triggerType;
        this.highLayerCompatibility = highLayerCompatibility;
        this.serviceInteractionIndicators = serviceInteractionIndicators;
        this.additionalCallingPartyNumber = additionalCallingPartyNumber;
        this.forwardCallIndicators = forwardCallIndicators;
        this.bearerCapability = bearerCapability;
        this.eventTypeBCSM = eventTypeBCSM;
        this.redirectingPartyID = redirectingPartyID;
        this.redirectionInformation = redirectionInformation;
        this.cause = cause;
        this.componentType = componentType;
        this.component = component;
        this.componentCorrelationID = componentCorrelationID;
        this.iSDNAccessRelatedInformation = iSDNAccessRelatedInformation;
        this.iNServiceCompatibilityIndication = iNServiceCompatibilityIndication;
        this.genericNumbers = genericNumbers;
        this.serviceInteractionIndicatorsTwo = serviceInteractionIndicatorsTwo;
        this.forwardGVNS = forwardGVNS;
        this.createdCallSegmentAssociation = createdCallSegmentAssociation;
        this.uSIServiceIndicator = uSIServiceIndicator;
        this.uSIInformation = uSIInformation;
        this.carrier = carrier;
        this.cCSS = cCSS;
        this.vPNIndicator = vPNIndicator;
        this.cNInfo = cNInfo;
        this.callReference = callReference;
        this.routeingNumber = routeingNumber;
        this.callingGeodeticLocation = callingGeodeticLocation;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a InitialDPArg
     * @description
     * 
     * This takes an `object` and converts it to a `InitialDPArg`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `InitialDPArg`.
     * @returns {InitialDPArg}
     */
    public static _from_object (_o: { [_K in keyof (InitialDPArg)]: (InitialDPArg)[_K] }): InitialDPArg {
        return new InitialDPArg(_o.serviceKey, _o.dialledDigits, _o.calledPartyNumber, _o.callingPartyNumber, _o.callingPartyBusinessGroupID, _o.callingPartysCategory, _o.callingPartySubaddress, _o.cGEncountered, _o.iPSSPCapabilities, _o.iPAvailable, _o.locationNumber, _o.miscCallInfo, _o.originalCalledPartyID, _o.serviceProfileIdentifier, _o.terminalType, _o.extensions, _o.triggerType, _o.highLayerCompatibility, _o.serviceInteractionIndicators, _o.additionalCallingPartyNumber, _o.forwardCallIndicators, _o.bearerCapability, _o.eventTypeBCSM, _o.redirectingPartyID, _o.redirectionInformation, _o.cause, _o.componentType, _o.component, _o.componentCorrelationID, _o.iSDNAccessRelatedInformation, _o.iNServiceCompatibilityIndication, _o.genericNumbers, _o.serviceInteractionIndicatorsTwo, _o.forwardGVNS, _o.createdCallSegmentAssociation, _o.uSIServiceIndicator, _o.uSIInformation, _o.carrier, _o.cCSS, _o.vPNIndicator, _o.cNInfo, _o.callReference, _o.routeingNumber, _o.callingGeodeticLocation, _o._unrecognizedExtensionsList);
    }

        /**
         * @summary The enum used as the type of the component `cGEncountered`
         * @public
         * @static
         */

    public static _enum_for_cGEncountered = _enum_for_CGEncountered;        /**
         * @summary The enum used as the type of the component `terminalType`
         * @public
         * @static
         */

    public static _enum_for_terminalType = _enum_for_TerminalType;        /**
         * @summary The enum used as the type of the component `triggerType`
         * @public
         * @static
         */

    public static _enum_for_triggerType = _enum_for_TriggerType;        /**
         * @summary The enum used as the type of the component `eventTypeBCSM`
         * @public
         * @static
         */

    public static _enum_for_eventTypeBCSM = _enum_for_EventTypeBCSM;        /**
         * @summary The enum used as the type of the component `componentType`
         * @public
         * @static
         */

    public static _enum_for_componentType = _enum_for_ComponentType;
}

/**
 * @summary The Leading Root Component Types of InitialDPArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_InitialDPArg: $.ComponentSpec[] = [
    new $.ComponentSpec("serviceKey", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("dialledDigits", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("calledPartyNumber", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("callingPartyNumber", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("callingPartyBusinessGroupID", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("callingPartysCategory", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("callingPartySubaddress", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("cGEncountered", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("iPSSPCapabilities", true, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("iPAvailable", true, $.hasTag(_TagClass.context, 9)),
    new $.ComponentSpec("locationNumber", true, $.hasTag(_TagClass.context, 10)),
    new $.ComponentSpec("miscCallInfo", true, $.hasTag(_TagClass.context, 11)),
    new $.ComponentSpec("originalCalledPartyID", true, $.hasTag(_TagClass.context, 12)),
    new $.ComponentSpec("serviceProfileIdentifier", true, $.hasTag(_TagClass.context, 13)),
    new $.ComponentSpec("terminalType", true, $.hasTag(_TagClass.context, 14)),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.context, 15)),
    new $.ComponentSpec("triggerType", true, $.hasTag(_TagClass.context, 16)),
    new $.ComponentSpec("highLayerCompatibility", true, $.hasTag(_TagClass.context, 23)),
    new $.ComponentSpec("serviceInteractionIndicators", true, $.hasTag(_TagClass.context, 24)),
    new $.ComponentSpec("additionalCallingPartyNumber", true, $.hasTag(_TagClass.context, 25)),
    new $.ComponentSpec("forwardCallIndicators", true, $.hasTag(_TagClass.context, 26)),
    new $.ComponentSpec("bearerCapability", true, $.hasTag(_TagClass.context, 27)),
    new $.ComponentSpec("eventTypeBCSM", true, $.hasTag(_TagClass.context, 28)),
    new $.ComponentSpec("redirectingPartyID", true, $.hasTag(_TagClass.context, 29)),
    new $.ComponentSpec("redirectionInformation", true, $.hasTag(_TagClass.context, 30)),
    new $.ComponentSpec("cause", true, $.hasTag(_TagClass.context, 17)),
    new $.ComponentSpec("componentType", true, $.hasTag(_TagClass.context, 18)),
    new $.ComponentSpec("component", true, $.hasTag(_TagClass.context, 19)),
    new $.ComponentSpec("componentCorrelationID", true, $.hasTag(_TagClass.context, 20)),
    new $.ComponentSpec("iSDNAccessRelatedInformation", true, $.hasTag(_TagClass.context, 21)),
    new $.ComponentSpec("iNServiceCompatibilityIndication", true, $.hasTag(_TagClass.context, 22)),
    new $.ComponentSpec("genericNumbers", true, $.hasTag(_TagClass.context, 31)),
    new $.ComponentSpec("serviceInteractionIndicatorsTwo", true, $.hasTag(_TagClass.context, 32)),
    new $.ComponentSpec("forwardGVNS", true, $.hasTag(_TagClass.context, 33)),
    new $.ComponentSpec("createdCallSegmentAssociation", true, $.hasTag(_TagClass.context, 34)),
    new $.ComponentSpec("uSIServiceIndicator", true, $.hasTag(_TagClass.context, 35)),
    new $.ComponentSpec("uSIInformation", true, $.hasTag(_TagClass.context, 36)),
    new $.ComponentSpec("carrier", true, $.hasTag(_TagClass.context, 37)),
    new $.ComponentSpec("cCSS", true, $.hasTag(_TagClass.context, 38)),
    new $.ComponentSpec("vPNIndicator", true, $.hasTag(_TagClass.context, 39)),
    new $.ComponentSpec("cNInfo", true, $.hasTag(_TagClass.context, 40)),
    new $.ComponentSpec("callReference", true, $.hasTag(_TagClass.context, 41)),
    new $.ComponentSpec("routeingNumber", true, $.hasTag(_TagClass.context, 42)),
    new $.ComponentSpec("callingGeodeticLocation", true, $.hasTag(_TagClass.context, 43))
];

/**
 * @summary The Trailing Root Component Types of InitialDPArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_InitialDPArg: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of InitialDPArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_InitialDPArg: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_InitialDPArg: $.ASN1Decoder<InitialDPArg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) InitialDPArg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_InitialDPArg (el: _Element): InitialDPArg {
    if (!_cached_decoder_for_InitialDPArg) { _cached_decoder_for_InitialDPArg = function (el: _Element): InitialDPArg {
    let serviceKey: OPTIONAL<ServiceKey>;
    let dialledDigits: OPTIONAL<CalledPartyNumber>;
    let calledPartyNumber: OPTIONAL<CalledPartyNumber>;
    let callingPartyNumber: OPTIONAL<CallingPartyNumber>;
    let callingPartyBusinessGroupID: OPTIONAL<CallingPartyBusinessGroupID>;
    let callingPartysCategory: OPTIONAL<CallingPartysCategory>;
    let callingPartySubaddress: OPTIONAL<CallingPartySubaddress>;
    let cGEncountered: OPTIONAL<CGEncountered>;
    let iPSSPCapabilities: OPTIONAL<IPSSPCapabilities>;
    let iPAvailable: OPTIONAL<IPAvailable>;
    let locationNumber: OPTIONAL<LocationNumber>;
    let miscCallInfo: OPTIONAL<MiscCallInfo>;
    let originalCalledPartyID: OPTIONAL<OriginalCalledPartyID>;
    let serviceProfileIdentifier: OPTIONAL<ServiceProfileIdentifier>;
    let terminalType: OPTIONAL<TerminalType>;
    let extensions: OPTIONAL<Extensions>;
    let triggerType: OPTIONAL<TriggerType>;
    let highLayerCompatibility: OPTIONAL<HighLayerCompatibility>;
    let serviceInteractionIndicators: OPTIONAL<ServiceInteractionIndicators>;
    let additionalCallingPartyNumber: OPTIONAL<AdditionalCallingPartyNumber>;
    let forwardCallIndicators: OPTIONAL<ForwardCallIndicators>;
    let bearerCapability: OPTIONAL<BearerCapability>;
    let eventTypeBCSM: OPTIONAL<EventTypeBCSM>;
    let redirectingPartyID: OPTIONAL<RedirectingPartyID>;
    let redirectionInformation: OPTIONAL<RedirectionInformation>;
    let cause: OPTIONAL<Cause>;
    let componentType: OPTIONAL<ComponentType>;
    let component: OPTIONAL<Component>;
    let componentCorrelationID: OPTIONAL<ComponentCorrelationID>;
    let iSDNAccessRelatedInformation: OPTIONAL<ISDNAccessRelatedInformation>;
    let iNServiceCompatibilityIndication: OPTIONAL<INServiceCompatibilityIndication>;
    let genericNumbers: OPTIONAL<GenericNumbers>;
    let serviceInteractionIndicatorsTwo: OPTIONAL<ServiceInteractionIndicatorsTwo>;
    let forwardGVNS: OPTIONAL<ForwardGVNS>;
    let createdCallSegmentAssociation: OPTIONAL<CSAID>;
    let uSIServiceIndicator: OPTIONAL<USIServiceIndicator>;
    let uSIInformation: OPTIONAL<USIInformation>;
    let carrier: OPTIONAL<Carrier>;
    let cCSS: OPTIONAL<CCSS>;
    let vPNIndicator: OPTIONAL<VPNIndicator>;
    let cNInfo: OPTIONAL<CNInfo>;
    let callReference: OPTIONAL<CallReference>;
    let routeingNumber: OPTIONAL<RouteingNumber>;
    let callingGeodeticLocation: OPTIONAL<CallingGeodeticLocation>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "serviceKey": (_el: _Element): void => { serviceKey = $._decode_implicit<ServiceKey>(() => _decode_ServiceKey)(_el); },
        "dialledDigits": (_el: _Element): void => { dialledDigits = $._decode_implicit<CalledPartyNumber>(() => _decode_CalledPartyNumber)(_el); },
        "calledPartyNumber": (_el: _Element): void => { calledPartyNumber = $._decode_implicit<CalledPartyNumber>(() => _decode_CalledPartyNumber)(_el); },
        "callingPartyNumber": (_el: _Element): void => { callingPartyNumber = $._decode_implicit<CallingPartyNumber>(() => _decode_CallingPartyNumber)(_el); },
        "callingPartyBusinessGroupID": (_el: _Element): void => { callingPartyBusinessGroupID = $._decode_implicit<CallingPartyBusinessGroupID>(() => _decode_CallingPartyBusinessGroupID)(_el); },
        "callingPartysCategory": (_el: _Element): void => { callingPartysCategory = $._decode_implicit<CallingPartysCategory>(() => _decode_CallingPartysCategory)(_el); },
        "callingPartySubaddress": (_el: _Element): void => { callingPartySubaddress = $._decode_implicit<CallingPartySubaddress>(() => _decode_CallingPartySubaddress)(_el); },
        "cGEncountered": (_el: _Element): void => { cGEncountered = $._decode_implicit<CGEncountered>(() => _decode_CGEncountered)(_el); },
        "iPSSPCapabilities": (_el: _Element): void => { iPSSPCapabilities = $._decode_implicit<IPSSPCapabilities>(() => _decode_IPSSPCapabilities)(_el); },
        "iPAvailable": (_el: _Element): void => { iPAvailable = $._decode_implicit<IPAvailable>(() => _decode_IPAvailable)(_el); },
        "locationNumber": (_el: _Element): void => { locationNumber = $._decode_implicit<LocationNumber>(() => _decode_LocationNumber)(_el); },
        "miscCallInfo": (_el: _Element): void => { miscCallInfo = $._decode_implicit<MiscCallInfo>(() => _decode_MiscCallInfo)(_el); },
        "originalCalledPartyID": (_el: _Element): void => { originalCalledPartyID = $._decode_implicit<OriginalCalledPartyID>(() => _decode_OriginalCalledPartyID)(_el); },
        "serviceProfileIdentifier": (_el: _Element): void => { serviceProfileIdentifier = $._decode_implicit<ServiceProfileIdentifier>(() => _decode_ServiceProfileIdentifier)(_el); },
        "terminalType": (_el: _Element): void => { terminalType = $._decode_implicit<TerminalType>(() => _decode_TerminalType)(_el); },
        "extensions": (_el: _Element): void => { extensions = $._decode_implicit<Extensions>(() => _decode_Extensions)(_el); },
        "triggerType": (_el: _Element): void => { triggerType = $._decode_implicit<TriggerType>(() => _decode_TriggerType)(_el); },
        "highLayerCompatibility": (_el: _Element): void => { highLayerCompatibility = $._decode_implicit<HighLayerCompatibility>(() => _decode_HighLayerCompatibility)(_el); },
        "serviceInteractionIndicators": (_el: _Element): void => { serviceInteractionIndicators = $._decode_implicit<ServiceInteractionIndicators>(() => _decode_ServiceInteractionIndicators)(_el); },
        "additionalCallingPartyNumber": (_el: _Element): void => { additionalCallingPartyNumber = $._decode_implicit<AdditionalCallingPartyNumber>(() => _decode_AdditionalCallingPartyNumber)(_el); },
        "forwardCallIndicators": (_el: _Element): void => { forwardCallIndicators = $._decode_implicit<ForwardCallIndicators>(() => _decode_ForwardCallIndicators)(_el); },
        "bearerCapability": (_el: _Element): void => { bearerCapability = $._decode_explicit<BearerCapability>(() => _decode_BearerCapability)(_el); },
        "eventTypeBCSM": (_el: _Element): void => { eventTypeBCSM = $._decode_implicit<EventTypeBCSM>(() => _decode_EventTypeBCSM)(_el); },
        "redirectingPartyID": (_el: _Element): void => { redirectingPartyID = $._decode_implicit<RedirectingPartyID>(() => _decode_RedirectingPartyID)(_el); },
        "redirectionInformation": (_el: _Element): void => { redirectionInformation = $._decode_implicit<RedirectionInformation>(() => _decode_RedirectionInformation)(_el); },
        "cause": (_el: _Element): void => { cause = $._decode_implicit<Cause>(() => _decode_Cause)(_el); },
        "componentType": (_el: _Element): void => { componentType = $._decode_implicit<ComponentType>(() => _decode_ComponentType)(_el); },
        "component": (_el: _Element): void => { component = $._decode_explicit<Component>(() => _decode_Component)(_el); },
        "componentCorrelationID": (_el: _Element): void => { componentCorrelationID = $._decode_implicit<ComponentCorrelationID>(() => _decode_ComponentCorrelationID)(_el); },
        "iSDNAccessRelatedInformation": (_el: _Element): void => { iSDNAccessRelatedInformation = $._decode_implicit<ISDNAccessRelatedInformation>(() => _decode_ISDNAccessRelatedInformation)(_el); },
        "iNServiceCompatibilityIndication": (_el: _Element): void => { iNServiceCompatibilityIndication = $._decode_implicit<INServiceCompatibilityIndication>(() => _decode_INServiceCompatibilityIndication)(_el); },
        "genericNumbers": (_el: _Element): void => { genericNumbers = $._decode_implicit<GenericNumbers>(() => _decode_GenericNumbers)(_el); },
        "serviceInteractionIndicatorsTwo": (_el: _Element): void => { serviceInteractionIndicatorsTwo = $._decode_implicit<ServiceInteractionIndicatorsTwo>(() => _decode_ServiceInteractionIndicatorsTwo)(_el); },
        "forwardGVNS": (_el: _Element): void => { forwardGVNS = $._decode_implicit<ForwardGVNS>(() => _decode_ForwardGVNS)(_el); },
        "createdCallSegmentAssociation": (_el: _Element): void => { createdCallSegmentAssociation = $._decode_implicit<CSAID>(() => _decode_CSAID)(_el); },
        "uSIServiceIndicator": (_el: _Element): void => { uSIServiceIndicator = $._decode_explicit<USIServiceIndicator>(() => _decode_USIServiceIndicator)(_el); },
        "uSIInformation": (_el: _Element): void => { uSIInformation = $._decode_implicit<USIInformation>(() => _decode_USIInformation)(_el); },
        "carrier": (_el: _Element): void => { carrier = $._decode_implicit<Carrier>(() => _decode_Carrier)(_el); },
        "cCSS": (_el: _Element): void => { cCSS = $._decode_implicit<CCSS>(() => _decode_CCSS)(_el); },
        "vPNIndicator": (_el: _Element): void => { vPNIndicator = $._decode_implicit<VPNIndicator>(() => _decode_VPNIndicator)(_el); },
        "cNInfo": (_el: _Element): void => { cNInfo = $._decode_implicit<CNInfo>(() => _decode_CNInfo)(_el); },
        "callReference": (_el: _Element): void => { callReference = $._decode_implicit<CallReference>(() => _decode_CallReference)(_el); },
        "routeingNumber": (_el: _Element): void => { routeingNumber = $._decode_implicit<RouteingNumber>(() => _decode_RouteingNumber)(_el); },
        "callingGeodeticLocation": (_el: _Element): void => { callingGeodeticLocation = $._decode_implicit<CallingGeodeticLocation>(() => _decode_CallingGeodeticLocation)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_InitialDPArg,
        _extension_additions_list_spec_for_InitialDPArg,
        _root_component_type_list_2_spec_for_InitialDPArg,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new InitialDPArg(
        serviceKey,
        dialledDigits,
        calledPartyNumber,
        callingPartyNumber,
        callingPartyBusinessGroupID,
        callingPartysCategory,
        callingPartySubaddress,
        cGEncountered,
        iPSSPCapabilities,
        iPAvailable,
        locationNumber,
        miscCallInfo,
        originalCalledPartyID,
        serviceProfileIdentifier,
        terminalType,
        extensions,
        triggerType,
        highLayerCompatibility,
        serviceInteractionIndicators,
        additionalCallingPartyNumber,
        forwardCallIndicators,
        bearerCapability,
        eventTypeBCSM,
        redirectingPartyID,
        redirectionInformation,
        cause,
        componentType,
        component,
        componentCorrelationID,
        iSDNAccessRelatedInformation,
        iNServiceCompatibilityIndication,
        genericNumbers,
        serviceInteractionIndicatorsTwo,
        forwardGVNS,
        createdCallSegmentAssociation,
        uSIServiceIndicator,
        uSIInformation,
        carrier,
        cCSS,
        vPNIndicator,
        cNInfo,
        callReference,
        routeingNumber,
        callingGeodeticLocation,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_InitialDPArg(el);
}

let _cached_encoder_for_InitialDPArg: $.ASN1Encoder<InitialDPArg> | null = null;

/**
 * @summary Encodes a(n) InitialDPArg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The InitialDPArg, encoded as an ASN.1 Element.
 */
export
function _encode_InitialDPArg (value: InitialDPArg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_InitialDPArg) { _cached_encoder_for_InitialDPArg = function (value: InitialDPArg, elGetter: $.ASN1Encoder<InitialDPArg>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(44 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    if (value.serviceKey !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 0, () => _encode_ServiceKey, $.BER)(value.serviceKey, $.BER);
    }
    if (value.dialledDigits !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => _encode_CalledPartyNumber, $.BER)(value.dialledDigits, $.BER);
    }
    if (value.calledPartyNumber !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => _encode_CalledPartyNumber, $.BER)(value.calledPartyNumber, $.BER);
    }
    if (value.callingPartyNumber !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => _encode_CallingPartyNumber, $.BER)(value.callingPartyNumber, $.BER);
    }
    if (value.callingPartyBusinessGroupID !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 4, () => _encode_CallingPartyBusinessGroupID, $.BER)(value.callingPartyBusinessGroupID, $.BER);
    }
    if (value.callingPartysCategory !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 5, () => _encode_CallingPartysCategory, $.BER)(value.callingPartysCategory, $.BER);
    }
    if (value.callingPartySubaddress !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 6, () => _encode_CallingPartySubaddress, $.BER)(value.callingPartySubaddress, $.BER);
    }
    if (value.cGEncountered !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 7, () => _encode_CGEncountered, $.BER)(value.cGEncountered, $.BER);
    }
    if (value.iPSSPCapabilities !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 8, () => _encode_IPSSPCapabilities, $.BER)(value.iPSSPCapabilities, $.BER);
    }
    if (value.iPAvailable !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 9, () => _encode_IPAvailable, $.BER)(value.iPAvailable, $.BER);
    }
    if (value.locationNumber !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 10, () => _encode_LocationNumber, $.BER)(value.locationNumber, $.BER);
    }
    if (value.miscCallInfo !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 11, () => _encode_MiscCallInfo, $.BER)(value.miscCallInfo, $.BER);
    }
    if (value.originalCalledPartyID !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 12, () => _encode_OriginalCalledPartyID, $.BER)(value.originalCalledPartyID, $.BER);
    }
    if (value.serviceProfileIdentifier !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 13, () => _encode_ServiceProfileIdentifier, $.BER)(value.serviceProfileIdentifier, $.BER);
    }
    if (value.terminalType !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 14, () => _encode_TerminalType, $.BER)(value.terminalType, $.BER);
    }
    if (value.extensions !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 15, () => _encode_Extensions, $.BER)(value.extensions, $.BER);
    }
    if (value.triggerType !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 16, () => _encode_TriggerType, $.BER)(value.triggerType, $.BER);
    }
    if (value.highLayerCompatibility !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 23, () => _encode_HighLayerCompatibility, $.BER)(value.highLayerCompatibility, $.BER);
    }
    if (value.serviceInteractionIndicators !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 24, () => _encode_ServiceInteractionIndicators, $.BER)(value.serviceInteractionIndicators, $.BER);
    }
    if (value.additionalCallingPartyNumber !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 25, () => _encode_AdditionalCallingPartyNumber, $.BER)(value.additionalCallingPartyNumber, $.BER);
    }
    if (value.forwardCallIndicators !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 26, () => _encode_ForwardCallIndicators, $.BER)(value.forwardCallIndicators, $.BER);
    }
    if (value.bearerCapability !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 27, () => _encode_BearerCapability, $.BER)(value.bearerCapability, $.BER);
    }
    if (value.eventTypeBCSM !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 28, () => _encode_EventTypeBCSM, $.BER)(value.eventTypeBCSM, $.BER);
    }
    if (value.redirectingPartyID !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 29, () => _encode_RedirectingPartyID, $.BER)(value.redirectingPartyID, $.BER);
    }
    if (value.redirectionInformation !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 30, () => _encode_RedirectionInformation, $.BER)(value.redirectionInformation, $.BER);
    }
    if (value.cause !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 17, () => _encode_Cause, $.BER)(value.cause, $.BER);
    }
    if (value.componentType !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 18, () => _encode_ComponentType, $.BER)(value.componentType, $.BER);
    }
    if (value.component !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 19, () => _encode_Component, $.BER)(value.component, $.BER);
    }
    if (value.componentCorrelationID !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 20, () => _encode_ComponentCorrelationID, $.BER)(value.componentCorrelationID, $.BER);
    }
    if (value.iSDNAccessRelatedInformation !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 21, () => _encode_ISDNAccessRelatedInformation, $.BER)(value.iSDNAccessRelatedInformation, $.BER);
    }
    if (value.iNServiceCompatibilityIndication !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 22, () => _encode_INServiceCompatibilityIndication, $.BER)(value.iNServiceCompatibilityIndication, $.BER);
    }
    if (value.genericNumbers !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 31, () => _encode_GenericNumbers, $.BER)(value.genericNumbers, $.BER);
    }
    if (value.serviceInteractionIndicatorsTwo !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 32, () => _encode_ServiceInteractionIndicatorsTwo, $.BER)(value.serviceInteractionIndicatorsTwo, $.BER);
    }
    if (value.forwardGVNS !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 33, () => _encode_ForwardGVNS, $.BER)(value.forwardGVNS, $.BER);
    }
    if (value.createdCallSegmentAssociation !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 34, () => _encode_CSAID, $.BER)(value.createdCallSegmentAssociation, $.BER);
    }
    if (value.uSIServiceIndicator !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 35, () => _encode_USIServiceIndicator, $.BER)(value.uSIServiceIndicator, $.BER);
    }
    if (value.uSIInformation !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 36, () => _encode_USIInformation, $.BER)(value.uSIInformation, $.BER);
    }
    if (value.carrier !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 37, () => _encode_Carrier, $.BER)(value.carrier, $.BER);
    }
    if (value.cCSS !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 38, () => _encode_CCSS, $.BER)(value.cCSS, $.BER);
    }
    if (value.vPNIndicator !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 39, () => _encode_VPNIndicator, $.BER)(value.vPNIndicator, $.BER);
    }
    if (value.cNInfo !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 40, () => _encode_CNInfo, $.BER)(value.cNInfo, $.BER);
    }
    if (value.callReference !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 41, () => _encode_CallReference, $.BER)(value.callReference, $.BER);
    }
    if (value.routeingNumber !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 42, () => _encode_RouteingNumber, $.BER)(value.routeingNumber, $.BER);
    }
    if (value.callingGeodeticLocation !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 43, () => _encode_CallingGeodeticLocation, $.BER)(value.callingGeodeticLocation, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_InitialDPArg(value, elGetter);
}


/* eslint-enable */
