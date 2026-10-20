/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { ServiceKey, _decode_ServiceKey, _encode_ServiceKey } from "../IN-CS-1-Datatypes/ServiceKey.ta.mjs";
// export { ServiceKey, _decode_ServiceKey, _encode_ServiceKey } from "../IN-CS-1-Datatypes/ServiceKey.ta.mjs";
import { CalledPartyNumber, _decode_CalledPartyNumber, _encode_CalledPartyNumber } from "../IN-CS-1-Datatypes/CalledPartyNumber.ta.mjs";
// export { CalledPartyNumber, _decode_CalledPartyNumber, _encode_CalledPartyNumber } from "../IN-CS-1-Datatypes/CalledPartyNumber.ta.mjs";
import { CallingPartyNumber, _decode_CallingPartyNumber, _encode_CallingPartyNumber } from "../IN-CS-1-Datatypes/CallingPartyNumber.ta.mjs";
// export { CallingPartyNumber, _decode_CallingPartyNumber, _encode_CallingPartyNumber } from "../IN-CS-1-Datatypes/CallingPartyNumber.ta.mjs";
import { CallingPartyBusinessGroupID, _decode_CallingPartyBusinessGroupID, _encode_CallingPartyBusinessGroupID } from "../IN-CS-1-Datatypes/CallingPartyBusinessGroupID.ta.mjs";
// export { CallingPartyBusinessGroupID, _decode_CallingPartyBusinessGroupID, _encode_CallingPartyBusinessGroupID } from "../IN-CS-1-Datatypes/CallingPartyBusinessGroupID.ta.mjs";
import { CallingPartysCategory, _decode_CallingPartysCategory, _encode_CallingPartysCategory } from "../IN-CS-1-Datatypes/CallingPartysCategory.ta.mjs";
// export { CallingPartysCategory, _decode_CallingPartysCategory, _encode_CallingPartysCategory } from "../IN-CS-1-Datatypes/CallingPartysCategory.ta.mjs";
import { CallingPartySubaddress, _decode_CallingPartySubaddress, _encode_CallingPartySubaddress } from "../IN-CS-1-Datatypes/CallingPartySubaddress.ta.mjs";
// export { CallingPartySubaddress, _decode_CallingPartySubaddress, _encode_CallingPartySubaddress } from "../IN-CS-1-Datatypes/CallingPartySubaddress.ta.mjs";
import { CGEncountered, _decode_CGEncountered, _encode_CGEncountered, _enum_for_CGEncountered } from "../IN-CS-1-Datatypes/CGEncountered.ta.mjs";
// export { CGEncountered, _enum_for_CGEncountered, CGEncountered_noCGencountered /* IMPORTED_LONG_ENUMERATION_ITEM */, noCGencountered /* IMPORTED_SHORT_ENUMERATION_ITEM */, CGEncountered_manualCGencountered /* IMPORTED_LONG_ENUMERATION_ITEM */, manualCGencountered /* IMPORTED_SHORT_ENUMERATION_ITEM */, CGEncountered_scpOverload /* IMPORTED_LONG_ENUMERATION_ITEM */, scpOverload /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_CGEncountered, _encode_CGEncountered } from "../IN-CS-1-Datatypes/CGEncountered.ta.mjs";
import { IPSSPCapabilities, _decode_IPSSPCapabilities, _encode_IPSSPCapabilities } from "../IN-CS-1-Datatypes/IPSSPCapabilities.ta.mjs";
// export { IPSSPCapabilities, _decode_IPSSPCapabilities, _encode_IPSSPCapabilities } from "../IN-CS-1-Datatypes/IPSSPCapabilities.ta.mjs";
import { IPAvailable, _decode_IPAvailable, _encode_IPAvailable } from "../IN-CS-1-Datatypes/IPAvailable.ta.mjs";
// export { IPAvailable, _decode_IPAvailable, _encode_IPAvailable } from "../IN-CS-1-Datatypes/IPAvailable.ta.mjs";
import { LocationNumber, _decode_LocationNumber, _encode_LocationNumber } from "../IN-CS-1-Datatypes/LocationNumber.ta.mjs";
// export { LocationNumber, _decode_LocationNumber, _encode_LocationNumber } from "../IN-CS-1-Datatypes/LocationNumber.ta.mjs";
import { MiscCallInfo, _decode_MiscCallInfo, _encode_MiscCallInfo } from "../IN-CS-1-Datatypes/MiscCallInfo.ta.mjs";
// export { MiscCallInfo, _decode_MiscCallInfo, _encode_MiscCallInfo } from "../IN-CS-1-Datatypes/MiscCallInfo.ta.mjs";
import { OriginalCalledPartyID, _decode_OriginalCalledPartyID, _encode_OriginalCalledPartyID } from "../IN-CS-1-Datatypes/OriginalCalledPartyID.ta.mjs";
// export { OriginalCalledPartyID, _decode_OriginalCalledPartyID, _encode_OriginalCalledPartyID } from "../IN-CS-1-Datatypes/OriginalCalledPartyID.ta.mjs";
import { ServiceProfileIdentifier, _decode_ServiceProfileIdentifier, _encode_ServiceProfileIdentifier } from "../IN-CS-1-Datatypes/ServiceProfileIdentifier.ta.mjs";
// export { ServiceProfileIdentifier, _decode_ServiceProfileIdentifier, _encode_ServiceProfileIdentifier } from "../IN-CS-1-Datatypes/ServiceProfileIdentifier.ta.mjs";
import { TerminalType, _decode_TerminalType, _encode_TerminalType, _enum_for_TerminalType } from "../IN-CS-1-Datatypes/TerminalType.ta.mjs";
// export { TerminalType, _enum_for_TerminalType, TerminalType_unknown /* IMPORTED_LONG_ENUMERATION_ITEM */, unknown /* IMPORTED_SHORT_ENUMERATION_ITEM */, TerminalType_dialPulse /* IMPORTED_LONG_ENUMERATION_ITEM */, dialPulse /* IMPORTED_SHORT_ENUMERATION_ITEM */, TerminalType_dtmf /* IMPORTED_LONG_ENUMERATION_ITEM */, dtmf /* IMPORTED_SHORT_ENUMERATION_ITEM */, TerminalType_isdn /* IMPORTED_LONG_ENUMERATION_ITEM */, isdn /* IMPORTED_SHORT_ENUMERATION_ITEM */, TerminalType_isdnNoDtmf /* IMPORTED_LONG_ENUMERATION_ITEM */, isdnNoDtmf /* IMPORTED_SHORT_ENUMERATION_ITEM */, TerminalType_spare /* IMPORTED_LONG_ENUMERATION_ITEM */, spare /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_TerminalType, _encode_TerminalType } from "../IN-CS-1-Datatypes/TerminalType.ta.mjs";
import { ExtensionField, _decode_ExtensionField, _encode_ExtensionField } from "../IN-CS-1-Datatypes/ExtensionField.ta.mjs";
// export { ExtensionField, _decode_ExtensionField, _encode_ExtensionField } from "../IN-CS-1-Datatypes/ExtensionField.ta.mjs";
import { TriggerType, _decode_TriggerType, _encode_TriggerType, _enum_for_TriggerType } from "../IN-CS-1-Datatypes/TriggerType.ta.mjs";
// export { TriggerType, _enum_for_TriggerType, TriggerType_featureActivation /* IMPORTED_LONG_ENUMERATION_ITEM */, featureActivation /* IMPORTED_SHORT_ENUMERATION_ITEM */, TriggerType_verticalServiceCode /* IMPORTED_LONG_ENUMERATION_ITEM */, verticalServiceCode /* IMPORTED_SHORT_ENUMERATION_ITEM */, TriggerType_customizedAccess /* IMPORTED_LONG_ENUMERATION_ITEM */, customizedAccess /* IMPORTED_SHORT_ENUMERATION_ITEM */, TriggerType_customizedIntercom /* IMPORTED_LONG_ENUMERATION_ITEM */, customizedIntercom /* IMPORTED_SHORT_ENUMERATION_ITEM */, TriggerType_emergencyService /* IMPORTED_LONG_ENUMERATION_ITEM */, emergencyService /* IMPORTED_SHORT_ENUMERATION_ITEM */, TriggerType_aFR /* IMPORTED_LONG_ENUMERATION_ITEM */, aFR /* IMPORTED_SHORT_ENUMERATION_ITEM */, TriggerType_sharedIOTrunk /* IMPORTED_LONG_ENUMERATION_ITEM */, sharedIOTrunk /* IMPORTED_SHORT_ENUMERATION_ITEM */, TriggerType_offHookDelay /* IMPORTED_LONG_ENUMERATION_ITEM */, offHookDelay /* IMPORTED_SHORT_ENUMERATION_ITEM */, TriggerType_channelSetupPRI /* IMPORTED_LONG_ENUMERATION_ITEM */, channelSetupPRI /* IMPORTED_SHORT_ENUMERATION_ITEM */, TriggerType_tNoAnswer /* IMPORTED_LONG_ENUMERATION_ITEM */, TriggerType_tBusy /* IMPORTED_LONG_ENUMERATION_ITEM */, TriggerType_oCalledPartyBusy /* IMPORTED_LONG_ENUMERATION_ITEM */, TriggerType_oNoAnswer /* IMPORTED_LONG_ENUMERATION_ITEM */, TriggerType_originationAttemptAuthorized /* IMPORTED_LONG_ENUMERATION_ITEM */, originationAttemptAuthorized /* IMPORTED_SHORT_ENUMERATION_ITEM */, TriggerType_oAnswer /* IMPORTED_LONG_ENUMERATION_ITEM */, TriggerType_oDisconnect /* IMPORTED_LONG_ENUMERATION_ITEM */, TriggerType_termAttemptAuthorized /* IMPORTED_LONG_ENUMERATION_ITEM */, TriggerType_tAnswer /* IMPORTED_LONG_ENUMERATION_ITEM */, TriggerType_tDisconnect /* IMPORTED_LONG_ENUMERATION_ITEM */, _decode_TriggerType, _encode_TriggerType } from "../IN-CS-1-Datatypes/TriggerType.ta.mjs";
import { HighLayerCompatibility, _decode_HighLayerCompatibility, _encode_HighLayerCompatibility } from "../IN-CS-1-Datatypes/HighLayerCompatibility.ta.mjs";
// export { HighLayerCompatibility, _decode_HighLayerCompatibility, _encode_HighLayerCompatibility } from "../IN-CS-1-Datatypes/HighLayerCompatibility.ta.mjs";
import { ServiceInteractionIndicators, _decode_ServiceInteractionIndicators, _encode_ServiceInteractionIndicators } from "../IN-CS-1-Datatypes/ServiceInteractionIndicators.ta.mjs";
// export { ServiceInteractionIndicators, _decode_ServiceInteractionIndicators, _encode_ServiceInteractionIndicators } from "../IN-CS-1-Datatypes/ServiceInteractionIndicators.ta.mjs";
import { AdditionalCallingPartyNumber, _decode_AdditionalCallingPartyNumber, _encode_AdditionalCallingPartyNumber } from "../IN-CS-1-Datatypes/AdditionalCallingPartyNumber.ta.mjs";
// export { AdditionalCallingPartyNumber, _decode_AdditionalCallingPartyNumber, _encode_AdditionalCallingPartyNumber } from "../IN-CS-1-Datatypes/AdditionalCallingPartyNumber.ta.mjs";
import { ForwardCallIndicators, _decode_ForwardCallIndicators, _encode_ForwardCallIndicators } from "../IN-CS-1-Datatypes/ForwardCallIndicators.ta.mjs";
// export { ForwardCallIndicators, _decode_ForwardCallIndicators, _encode_ForwardCallIndicators } from "../IN-CS-1-Datatypes/ForwardCallIndicators.ta.mjs";
import { BearerCapability, _decode_BearerCapability, _encode_BearerCapability } from "../IN-CS-1-Datatypes/BearerCapability.ta.mjs";
// export { BearerCapability, _decode_BearerCapability, _encode_BearerCapability } from "../IN-CS-1-Datatypes/BearerCapability.ta.mjs";
import { EventTypeBCSM, _decode_EventTypeBCSM, _encode_EventTypeBCSM, _enum_for_EventTypeBCSM } from "../IN-CS-1-Datatypes/EventTypeBCSM.ta.mjs";
// export { EventTypeBCSM, _enum_for_EventTypeBCSM, EventTypeBCSM_origAttemptAuthorized /* IMPORTED_LONG_ENUMERATION_ITEM */, origAttemptAuthorized /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventTypeBCSM_collectedInfo /* IMPORTED_LONG_ENUMERATION_ITEM */, collectedInfo /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventTypeBCSM_analysedInformation /* IMPORTED_LONG_ENUMERATION_ITEM */, analysedInformation /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventTypeBCSM_routeSelectFailure /* IMPORTED_LONG_ENUMERATION_ITEM */, routeSelectFailure /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventTypeBCSM_oCalledPartyBusy /* IMPORTED_LONG_ENUMERATION_ITEM */, EventTypeBCSM_oNoAnswer /* IMPORTED_LONG_ENUMERATION_ITEM */, EventTypeBCSM_oAnswer /* IMPORTED_LONG_ENUMERATION_ITEM */, EventTypeBCSM_oMidCall /* IMPORTED_LONG_ENUMERATION_ITEM */, oMidCall /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventTypeBCSM_oDisconnect /* IMPORTED_LONG_ENUMERATION_ITEM */, EventTypeBCSM_oAbandon /* IMPORTED_LONG_ENUMERATION_ITEM */, oAbandon /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventTypeBCSM_termAttemptAuthorized /* IMPORTED_LONG_ENUMERATION_ITEM */, EventTypeBCSM_tBusy /* IMPORTED_LONG_ENUMERATION_ITEM */, EventTypeBCSM_tNoAnswer /* IMPORTED_LONG_ENUMERATION_ITEM */, EventTypeBCSM_tAnswer /* IMPORTED_LONG_ENUMERATION_ITEM */, EventTypeBCSM_tMidCall /* IMPORTED_LONG_ENUMERATION_ITEM */, tMidCall /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventTypeBCSM_tDisconnect /* IMPORTED_LONG_ENUMERATION_ITEM */, EventTypeBCSM_tAbandon /* IMPORTED_LONG_ENUMERATION_ITEM */, tAbandon /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_EventTypeBCSM, _encode_EventTypeBCSM } from "../IN-CS-1-Datatypes/EventTypeBCSM.ta.mjs";
import { RedirectingPartyID, _decode_RedirectingPartyID, _encode_RedirectingPartyID } from "../IN-CS-1-Datatypes/RedirectingPartyID.ta.mjs";
// export { RedirectingPartyID, _decode_RedirectingPartyID, _encode_RedirectingPartyID } from "../IN-CS-1-Datatypes/RedirectingPartyID.ta.mjs";
import { RedirectionInformation, _decode_RedirectionInformation, _encode_RedirectionInformation } from "../IN-CS-1-Datatypes/RedirectionInformation.ta.mjs";
// export { RedirectionInformation, _decode_RedirectionInformation, _encode_RedirectionInformation } from "../IN-CS-1-Datatypes/RedirectionInformation.ta.mjs";


/**
 * @summary InitialDPArg
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * InitialDPArg ::= SEQUENCE {
 *   serviceKey                    [0]  ServiceKey OPTIONAL,
 *   dialledDigits                 [1]  CalledPartyNumber OPTIONAL,
 *   calledPartyNumber             [2]  CalledPartyNumber OPTIONAL,
 *   callingPartyNumber            [3]  CallingPartyNumber OPTIONAL,
 *   callingPartyBusinessGroupID   [4]  CallingPartyBusinessGroupID OPTIONAL,
 *   callingPartysCategory         [5]  CallingPartysCategory OPTIONAL,
 *   callingPartySubaddress        [6]  CallingPartySubaddress OPTIONAL,
 *   cGEncountered                 [7]  CGEncountered OPTIONAL,
 *   iPSSPCapabilities             [8]  IPSSPCapabilities OPTIONAL,
 *   iPAvailable                   [9]  IPAvailable OPTIONAL,
 *   locationNumber                [10]  LocationNumber OPTIONAL,
 *   miscCallInfo                  [11]  MiscCallInfo OPTIONAL,
 *   originalCalledPartyID         [12]  OriginalCalledPartyID OPTIONAL,
 *   serviceProfileIdentifier      [13]  ServiceProfileIdentifier OPTIONAL,
 *   terminalType                  [14]  TerminalType OPTIONAL,
 *   extensions
 *     [15]  SEQUENCE SIZE (1..numOfExtensions) OF
 *             ExtensionField,
 *   triggerType                   [16]  TriggerType OPTIONAL,
 *   highLayerCompatibility        [23]  HighLayerCompatibility OPTIONAL,
 *   serviceInteractionIndicators  [24]  ServiceInteractionIndicators OPTIONAL,
 *   additionalCallingPartyNumber  [25]  AdditionalCallingPartyNumber OPTIONAL,
 *   forwardCallIndicators         [26]  ForwardCallIndicators OPTIONAL,
 *   bearerCapability              [27]  BearerCapability OPTIONAL,
 *   eventTypeBCSM                 [28]  EventTypeBCSM OPTIONAL,
 *   redirectingPartyID            [29]  RedirectingPartyID OPTIONAL,
 *   redirectionInformation        [30]  RedirectionInformation OPTIONAL,
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
    readonly extensions: ExtensionField[];
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
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        serviceKey: OPTIONAL<ServiceKey>,
        dialledDigits: OPTIONAL<CalledPartyNumber>,
        calledPartyNumber: OPTIONAL<CalledPartyNumber>,
        callingPartyNumber: OPTIONAL<CallingPartyNumber>,
        callingPartyBusinessGroupID: OPTIONAL<CallingPartyBusinessGroupID>,
        callingPartysCategory: OPTIONAL<CallingPartysCategory>,
        callingPartySubaddress: OPTIONAL<CallingPartySubaddress>,
        cGEncountered: OPTIONAL<CGEncountered>,
        iPSSPCapabilities: OPTIONAL<IPSSPCapabilities>,
        iPAvailable: OPTIONAL<IPAvailable>,
        locationNumber: OPTIONAL<LocationNumber>,
        miscCallInfo: OPTIONAL<MiscCallInfo>,
        originalCalledPartyID: OPTIONAL<OriginalCalledPartyID>,
        serviceProfileIdentifier: OPTIONAL<ServiceProfileIdentifier>,
        terminalType: OPTIONAL<TerminalType>,
        extensions: ExtensionField[],
        triggerType: OPTIONAL<TriggerType>,
        highLayerCompatibility: OPTIONAL<HighLayerCompatibility>,
        serviceInteractionIndicators: OPTIONAL<ServiceInteractionIndicators>,
        additionalCallingPartyNumber: OPTIONAL<AdditionalCallingPartyNumber>,
        forwardCallIndicators: OPTIONAL<ForwardCallIndicators>,
        bearerCapability: OPTIONAL<BearerCapability>,
        eventTypeBCSM: OPTIONAL<EventTypeBCSM>,
        redirectingPartyID: OPTIONAL<RedirectingPartyID>,
        redirectionInformation: OPTIONAL<RedirectionInformation>,
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
        return new InitialDPArg(_o.serviceKey, _o.dialledDigits, _o.calledPartyNumber, _o.callingPartyNumber, _o.callingPartyBusinessGroupID, _o.callingPartysCategory, _o.callingPartySubaddress, _o.cGEncountered, _o.iPSSPCapabilities, _o.iPAvailable, _o.locationNumber, _o.miscCallInfo, _o.originalCalledPartyID, _o.serviceProfileIdentifier, _o.terminalType, _o.extensions, _o.triggerType, _o.highLayerCompatibility, _o.serviceInteractionIndicators, _o.additionalCallingPartyNumber, _o.forwardCallIndicators, _o.bearerCapability, _o.eventTypeBCSM, _o.redirectingPartyID, _o.redirectionInformation, _o._unrecognizedExtensionsList);
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

    public static _enum_for_eventTypeBCSM = _enum_for_EventTypeBCSM;
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
    new $.ComponentSpec("extensions", false, $.hasTag(_TagClass.context, 15)),
    new $.ComponentSpec("triggerType", true, $.hasTag(_TagClass.context, 16)),
    new $.ComponentSpec("highLayerCompatibility", true, $.hasTag(_TagClass.context, 23)),
    new $.ComponentSpec("serviceInteractionIndicators", true, $.hasTag(_TagClass.context, 24)),
    new $.ComponentSpec("additionalCallingPartyNumber", true, $.hasTag(_TagClass.context, 25)),
    new $.ComponentSpec("forwardCallIndicators", true, $.hasTag(_TagClass.context, 26)),
    new $.ComponentSpec("bearerCapability", true, $.hasTag(_TagClass.context, 27)),
    new $.ComponentSpec("eventTypeBCSM", true, $.hasTag(_TagClass.context, 28)),
    new $.ComponentSpec("redirectingPartyID", true, $.hasTag(_TagClass.context, 29)),
    new $.ComponentSpec("redirectionInformation", true, $.hasTag(_TagClass.context, 30))
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
    let extensions!: ExtensionField[];
    let triggerType: OPTIONAL<TriggerType>;
    let highLayerCompatibility: OPTIONAL<HighLayerCompatibility>;
    let serviceInteractionIndicators: OPTIONAL<ServiceInteractionIndicators>;
    let additionalCallingPartyNumber: OPTIONAL<AdditionalCallingPartyNumber>;
    let forwardCallIndicators: OPTIONAL<ForwardCallIndicators>;
    let bearerCapability: OPTIONAL<BearerCapability>;
    let eventTypeBCSM: OPTIONAL<EventTypeBCSM>;
    let redirectingPartyID: OPTIONAL<RedirectingPartyID>;
    let redirectionInformation: OPTIONAL<RedirectionInformation>;
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
        "extensions": (_el: _Element): void => { extensions = $._decode_implicit<ExtensionField[]>(() => $._decodeSequenceOf<ExtensionField>(() => _decode_ExtensionField))(_el); },
        "triggerType": (_el: _Element): void => { triggerType = $._decode_implicit<TriggerType>(() => _decode_TriggerType)(_el); },
        "highLayerCompatibility": (_el: _Element): void => { highLayerCompatibility = $._decode_implicit<HighLayerCompatibility>(() => _decode_HighLayerCompatibility)(_el); },
        "serviceInteractionIndicators": (_el: _Element): void => { serviceInteractionIndicators = $._decode_implicit<ServiceInteractionIndicators>(() => _decode_ServiceInteractionIndicators)(_el); },
        "additionalCallingPartyNumber": (_el: _Element): void => { additionalCallingPartyNumber = $._decode_implicit<AdditionalCallingPartyNumber>(() => _decode_AdditionalCallingPartyNumber)(_el); },
        "forwardCallIndicators": (_el: _Element): void => { forwardCallIndicators = $._decode_implicit<ForwardCallIndicators>(() => _decode_ForwardCallIndicators)(_el); },
        "bearerCapability": (_el: _Element): void => { bearerCapability = $._decode_explicit<BearerCapability>(() => _decode_BearerCapability)(_el); },
        "eventTypeBCSM": (_el: _Element): void => { eventTypeBCSM = $._decode_implicit<EventTypeBCSM>(() => _decode_EventTypeBCSM)(_el); },
        "redirectingPartyID": (_el: _Element): void => { redirectingPartyID = $._decode_implicit<RedirectingPartyID>(() => _decode_RedirectingPartyID)(_el); },
        "redirectionInformation": (_el: _Element): void => { redirectionInformation = $._decode_implicit<RedirectionInformation>(() => _decode_RedirectionInformation)(_el); }
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
    const _components: _Element[] = new Array(25 + (_unrecognized ? _unrecognized.length : 0));
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
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 15, () => $._encodeSequenceOf<ExtensionField>(() => _encode_ExtensionField, $.BER), $.BER)(value.extensions, $.BER);
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
