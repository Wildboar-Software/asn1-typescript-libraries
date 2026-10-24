/* eslint-disable */
import {
    type OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type DestinationRoutingAddress, _decode_DestinationRoutingAddress, _encode_DestinationRoutingAddress } from "../IN-CS3-SSF-SCF-datatypes/DestinationRoutingAddress.ta.mjs";
// export { DestinationRoutingAddress, _decode_DestinationRoutingAddress, _encode_DestinationRoutingAddress } from "../IN-CS3-SSF-SCF-datatypes/DestinationRoutingAddress.ta.mjs";
import { type AlertingPattern, _decode_AlertingPattern, _encode_AlertingPattern } from "../IN-CS3-SSF-SCF-datatypes/AlertingPattern.ta.mjs";
// export { AlertingPattern, _decode_AlertingPattern, _encode_AlertingPattern } from "../IN-CS3-SSF-SCF-datatypes/AlertingPattern.ta.mjs";
import { type CorrelationID, _decode_CorrelationID, _encode_CorrelationID } from "../IN-CS3-SSF-SCF-datatypes/CorrelationID.ta.mjs";
// export { CorrelationID, _decode_CorrelationID, _encode_CorrelationID } from "../IN-CS3-SSF-SCF-datatypes/CorrelationID.ta.mjs";
import { type CutAndPaste, _decode_CutAndPaste, _encode_CutAndPaste } from "../IN-CS3-SSF-SCF-datatypes/CutAndPaste.ta.mjs";
// export { CutAndPaste, _decode_CutAndPaste, _encode_CutAndPaste } from "../IN-CS3-SSF-SCF-datatypes/CutAndPaste.ta.mjs";
import { ForwardingCondition, _decode_ForwardingCondition, _encode_ForwardingCondition, _enum_for_ForwardingCondition } from "../IN-CS3-SSF-SCF-datatypes/ForwardingCondition.ta.mjs";
// export { ForwardingCondition, _enum_for_ForwardingCondition, ForwardingCondition_busy /* IMPORTED_LONG_ENUMERATION_ITEM */, busy /* IMPORTED_SHORT_ENUMERATION_ITEM */, ForwardingCondition_noanswer /* IMPORTED_LONG_ENUMERATION_ITEM */, noanswer /* IMPORTED_SHORT_ENUMERATION_ITEM */, ForwardingCondition_any /* IMPORTED_LONG_ENUMERATION_ITEM */, any_ /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ForwardingCondition, _encode_ForwardingCondition } from "../IN-CS3-SSF-SCF-datatypes/ForwardingCondition.ta.mjs";
import { type ISDNAccessRelatedInformation, _decode_ISDNAccessRelatedInformation, _encode_ISDNAccessRelatedInformation } from "../IN-CS3-SSF-SCF-datatypes/ISDNAccessRelatedInformation.ta.mjs";
// export { ISDNAccessRelatedInformation, _decode_ISDNAccessRelatedInformation, _encode_ISDNAccessRelatedInformation } from "../IN-CS3-SSF-SCF-datatypes/ISDNAccessRelatedInformation.ta.mjs";
import { type OriginalCalledPartyID, _decode_OriginalCalledPartyID, _encode_OriginalCalledPartyID } from "../IN-CS3-SSF-SCF-datatypes/OriginalCalledPartyID.ta.mjs";
// export { OriginalCalledPartyID, _decode_OriginalCalledPartyID, _encode_OriginalCalledPartyID } from "../IN-CS3-SSF-SCF-datatypes/OriginalCalledPartyID.ta.mjs";
import { type RouteList, _decode_RouteList, _encode_RouteList } from "../IN-CS3-SSF-SCF-datatypes/RouteList.ta.mjs";
// export { RouteList, _decode_RouteList, _encode_RouteList } from "../IN-CS3-SSF-SCF-datatypes/RouteList.ta.mjs";
import { type ScfID, _decode_ScfID, _encode_ScfID } from "../IN-CS3-SSF-SCF-datatypes/ScfID.ta.mjs";
// export { ScfID, _decode_ScfID, _encode_ScfID } from "../IN-CS3-SSF-SCF-datatypes/ScfID.ta.mjs";
import { type TravellingClassMark, _decode_TravellingClassMark, _encode_TravellingClassMark } from "../IN-CS3-SSF-SCF-datatypes/TravellingClassMark.ta.mjs";
// export { TravellingClassMark, _decode_TravellingClassMark, _encode_TravellingClassMark } from "../IN-CS3-SSF-SCF-datatypes/TravellingClassMark.ta.mjs";
import { type Extensions, _decode_Extensions, _encode_Extensions } from "../IN-CS3-common-datatypes/Extensions.ta.mjs";
// export { Extensions, _decode_Extensions, _encode_Extensions } from "../IN-CS3-common-datatypes/Extensions.ta.mjs";
import { type Carrier, _decode_Carrier, _encode_Carrier } from "../IN-CS3-SSF-SCF-datatypes/Carrier.ta.mjs";
// export { Carrier, _decode_Carrier, _encode_Carrier } from "../IN-CS3-SSF-SCF-datatypes/Carrier.ta.mjs";
import { type ServiceInteractionIndicators, _decode_ServiceInteractionIndicators, _encode_ServiceInteractionIndicators } from "../IN-CS3-SSF-SCF-datatypes/ServiceInteractionIndicators.ta.mjs";
// export { ServiceInteractionIndicators, _decode_ServiceInteractionIndicators, _encode_ServiceInteractionIndicators } from "../IN-CS3-SSF-SCF-datatypes/ServiceInteractionIndicators.ta.mjs";
import { type CallingPartyNumber, _decode_CallingPartyNumber, _encode_CallingPartyNumber } from "../IN-CS3-SSF-SCF-datatypes/CallingPartyNumber.ta.mjs";
// export { CallingPartyNumber, _decode_CallingPartyNumber, _encode_CallingPartyNumber } from "../IN-CS3-SSF-SCF-datatypes/CallingPartyNumber.ta.mjs";
import { type CallingPartysCategory, _decode_CallingPartysCategory, _encode_CallingPartysCategory } from "../IN-CS3-SSF-SCF-datatypes/CallingPartysCategory.ta.mjs";
// export { CallingPartysCategory, _decode_CallingPartysCategory, _encode_CallingPartysCategory } from "../IN-CS3-SSF-SCF-datatypes/CallingPartysCategory.ta.mjs";
import { type RedirectingPartyID, _decode_RedirectingPartyID, _encode_RedirectingPartyID } from "../IN-CS3-SSF-SCF-datatypes/RedirectingPartyID.ta.mjs";
// export { RedirectingPartyID, _decode_RedirectingPartyID, _encode_RedirectingPartyID } from "../IN-CS3-SSF-SCF-datatypes/RedirectingPartyID.ta.mjs";
import { type RedirectionInformation, _decode_RedirectionInformation, _encode_RedirectionInformation } from "../IN-CS3-SSF-SCF-datatypes/RedirectionInformation.ta.mjs";
// export { RedirectionInformation, _decode_RedirectionInformation, _encode_RedirectionInformation } from "../IN-CS3-SSF-SCF-datatypes/RedirectionInformation.ta.mjs";
import { type DisplayInformation, _decode_DisplayInformation, _encode_DisplayInformation } from "../IN-CS3-SSF-SCF-datatypes/DisplayInformation.ta.mjs";
// export { DisplayInformation, _decode_DisplayInformation, _encode_DisplayInformation } from "../IN-CS3-SSF-SCF-datatypes/DisplayInformation.ta.mjs";
import { type ForwardCallIndicators, _decode_ForwardCallIndicators, _encode_ForwardCallIndicators } from "../IN-CS3-SSF-SCF-datatypes/ForwardCallIndicators.ta.mjs";
// export { ForwardCallIndicators, _decode_ForwardCallIndicators, _encode_ForwardCallIndicators } from "../IN-CS3-SSF-SCF-datatypes/ForwardCallIndicators.ta.mjs";
import { type GenericNumbers, _decode_GenericNumbers, _encode_GenericNumbers } from "../IN-CS3-SSF-SCF-datatypes/GenericNumbers.ta.mjs";
// export { GenericNumbers, _decode_GenericNumbers, _encode_GenericNumbers } from "../IN-CS3-SSF-SCF-datatypes/GenericNumbers.ta.mjs";
import { ServiceInteractionIndicatorsTwo, _decode_ServiceInteractionIndicatorsTwo, _encode_ServiceInteractionIndicatorsTwo } from "../IN-CS3-SSF-SCF-datatypes/ServiceInteractionIndicatorsTwo.ta.mjs";
// export { ServiceInteractionIndicatorsTwo, _decode_ServiceInteractionIndicatorsTwo, _encode_ServiceInteractionIndicatorsTwo } from "../IN-CS3-SSF-SCF-datatypes/ServiceInteractionIndicatorsTwo.ta.mjs";
import { type INServiceCompatibilityResponse, _decode_INServiceCompatibilityResponse, _encode_INServiceCompatibilityResponse } from "../IN-CS3-SSF-SCF-datatypes/INServiceCompatibilityResponse.ta.mjs";
// export { INServiceCompatibilityResponse, _decode_INServiceCompatibilityResponse, _encode_INServiceCompatibilityResponse } from "../IN-CS3-SSF-SCF-datatypes/INServiceCompatibilityResponse.ta.mjs";
import { type ForwardGVNS, _decode_ForwardGVNS, _encode_ForwardGVNS } from "../IN-CS3-SSF-SCF-datatypes/ForwardGVNS.ta.mjs";
// export { ForwardGVNS, _decode_ForwardGVNS, _encode_ForwardGVNS } from "../IN-CS3-SSF-SCF-datatypes/ForwardGVNS.ta.mjs";
import { type BackwardGVNS, _decode_BackwardGVNS, _encode_BackwardGVNS } from "../IN-CS3-SSF-SCF-datatypes/BackwardGVNS.ta.mjs";
// export { BackwardGVNS, _decode_BackwardGVNS, _encode_BackwardGVNS } from "../IN-CS3-SSF-SCF-datatypes/BackwardGVNS.ta.mjs";
import { type ChargeNumber, _decode_ChargeNumber, _encode_ChargeNumber } from "../IN-CS3-SSF-SCF-datatypes/ChargeNumber.ta.mjs";
// export { ChargeNumber, _decode_ChargeNumber, _encode_ChargeNumber } from "../IN-CS3-SSF-SCF-datatypes/ChargeNumber.ta.mjs";
import { type CallSegmentID, _decode_CallSegmentID, _encode_CallSegmentID } from "../IN-CS3-SSF-SCF-datatypes/CallSegmentID.ta.mjs";
// export { CallSegmentID, _decode_CallSegmentID, _encode_CallSegmentID } from "../IN-CS3-SSF-SCF-datatypes/CallSegmentID.ta.mjs";
import { type LegID, _decode_LegID, _encode_LegID } from "../IN-CS3-SSF-SCF-datatypes/LegID.ta.mjs";
// export { LegID, _decode_LegID, _encode_LegID } from "../IN-CS3-SSF-SCF-datatypes/LegID.ta.mjs";
import { type SDSSinformation, _decode_SDSSinformation, _encode_SDSSinformation } from "../IN-CS3-SSF-SCF-datatypes/SDSSinformation.ta.mjs";
// export { SDSSinformation, _decode_SDSSinformation, _encode_SDSSinformation } from "../IN-CS3-SSF-SCF-datatypes/SDSSinformation.ta.mjs";
import { type CalledDirectoryNumber, _decode_CalledDirectoryNumber, _encode_CalledDirectoryNumber } from "../IN-CS3-SSF-SCF-datatypes/CalledDirectoryNumber.ta.mjs";
// export { CalledDirectoryNumber, _decode_CalledDirectoryNumber, _encode_CalledDirectoryNumber } from "../IN-CS3-SSF-SCF-datatypes/CalledDirectoryNumber.ta.mjs";
import { type BearerCapability, _decode_BearerCapability, _encode_BearerCapability } from "../IN-CS3-SSF-SCF-datatypes/BearerCapability.ta.mjs";
// export { BearerCapability, _decode_BearerCapability, _encode_BearerCapability } from "../IN-CS3-SSF-SCF-datatypes/BearerCapability.ta.mjs";


/**
 * @summary ConnectArg
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ConnectArg ::= SEQUENCE {
 *   destinationRoutingAddress        [0]  DestinationRoutingAddress,
 *   alertingPattern                  [1]  AlertingPattern OPTIONAL,
 *   correlationID                    [2]  CorrelationID OPTIONAL,
 *   cutAndPaste                      [3]  CutAndPaste OPTIONAL,
 *   forwardingCondition              [4]  ForwardingCondition OPTIONAL,
 *   iSDNAccessRelatedInformation
 *     [5]  ISDNAccessRelatedInformation OPTIONAL,
 *   originalCalledPartyID            [6]  OriginalCalledPartyID OPTIONAL,
 *   routeList                        [7]  RouteList OPTIONAL,
 *   scfID                            [8]  ScfID OPTIONAL,
 *   travellingClassMark              [9]  TravellingClassMark OPTIONAL,
 *   extensions                       [10]  Extensions OPTIONAL,
 *   carrier                          [11]  Carrier OPTIONAL,
 *   serviceInteractionIndicators
 *     [26]  ServiceInteractionIndicators OPTIONAL,
 *   callingPartyNumber               [27]  CallingPartyNumber OPTIONAL,
 *   callingPartysCategory            [28]  CallingPartysCategory OPTIONAL,
 *   redirectingPartyID               [29]  RedirectingPartyID OPTIONAL,
 *   redirectionInformation           [30]  RedirectionInformation OPTIONAL,
 *   displayInformation               [12]  DisplayInformation OPTIONAL,
 *   forwardCallIndicators            [13]  ForwardCallIndicators OPTIONAL,
 *   genericNumbers                   [14]  GenericNumbers OPTIONAL,
 *   serviceInteractionIndicatorsTwo
 *     [15]  ServiceInteractionIndicatorsTwo OPTIONAL,
 *   iNServiceCompatibilityResponse
 *     [16]  INServiceCompatibilityResponse OPTIONAL,
 *   forwardGVNS                      [17]  ForwardGVNS OPTIONAL,
 *   backwardGVNS                     [18]  BackwardGVNS OPTIONAL,
 *   chargeNumber                     [19]  ChargeNumber OPTIONAL,
 *   callSegmentID                    [20]  CallSegmentID OPTIONAL,
 *   legToBeCreated                   [21]  LegID OPTIONAL,
 *   sDSSinformation                  [22]  SDSSinformation OPTIONAL,
 *   calledDirectoryNumber            [23]  CalledDirectoryNumber OPTIONAL,
 *   bearerCapability                 [24]  BearerCapability OPTIONAL,
 *   ...
 * }
 * ```
 * 
 * @class
 */
export
class ConnectArg {
    /**
     * @summary `destinationRoutingAddress`.
     * @public
     * @readonly
     */
    readonly destinationRoutingAddress: DestinationRoutingAddress;
    /**
     * @summary `alertingPattern`.
     * @public
     * @readonly
     */
    readonly alertingPattern: OPTIONAL<AlertingPattern>;
    /**
     * @summary `correlationID`.
     * @public
     * @readonly
     */
    readonly correlationID: OPTIONAL<CorrelationID>;
    /**
     * @summary `cutAndPaste`.
     * @public
     * @readonly
     */
    readonly cutAndPaste: OPTIONAL<CutAndPaste>;
    /**
     * @summary `forwardingCondition`.
     * @public
     * @readonly
     */
    readonly forwardingCondition: OPTIONAL<ForwardingCondition>;
    /**
     * @summary `iSDNAccessRelatedInformation`.
     * @public
     * @readonly
     */
    readonly iSDNAccessRelatedInformation: OPTIONAL<ISDNAccessRelatedInformation>;
    /**
     * @summary `originalCalledPartyID`.
     * @public
     * @readonly
     */
    readonly originalCalledPartyID: OPTIONAL<OriginalCalledPartyID>;
    /**
     * @summary `routeList`.
     * @public
     * @readonly
     */
    readonly routeList: OPTIONAL<RouteList>;
    /**
     * @summary `scfID`.
     * @public
     * @readonly
     */
    readonly scfID: OPTIONAL<ScfID>;
    /**
     * @summary `travellingClassMark`.
     * @public
     * @readonly
     */
    readonly travellingClassMark: OPTIONAL<TravellingClassMark>;
    /**
     * @summary `extensions`.
     * @public
     * @readonly
     */
    readonly extensions: OPTIONAL<Extensions>;
    /**
     * @summary `carrier`.
     * @public
     * @readonly
     */
    readonly carrier: OPTIONAL<Carrier>;
    /**
     * @summary `serviceInteractionIndicators`.
     * @public
     * @readonly
     */
    readonly serviceInteractionIndicators: OPTIONAL<ServiceInteractionIndicators>;
    /**
     * @summary `callingPartyNumber`.
     * @public
     * @readonly
     */
    readonly callingPartyNumber: OPTIONAL<CallingPartyNumber>;
    /**
     * @summary `callingPartysCategory`.
     * @public
     * @readonly
     */
    readonly callingPartysCategory: OPTIONAL<CallingPartysCategory>;
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
     * @summary `displayInformation`.
     * @public
     * @readonly
     */
    readonly displayInformation: OPTIONAL<DisplayInformation>;
    /**
     * @summary `forwardCallIndicators`.
     * @public
     * @readonly
     */
    readonly forwardCallIndicators: OPTIONAL<ForwardCallIndicators>;
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
     * @summary `iNServiceCompatibilityResponse`.
     * @public
     * @readonly
     */
    readonly iNServiceCompatibilityResponse: OPTIONAL<INServiceCompatibilityResponse>;
    /**
     * @summary `forwardGVNS`.
     * @public
     * @readonly
     */
    readonly forwardGVNS: OPTIONAL<ForwardGVNS>;
    /**
     * @summary `backwardGVNS`.
     * @public
     * @readonly
     */
    readonly backwardGVNS: OPTIONAL<BackwardGVNS>;
    /**
     * @summary `chargeNumber`.
     * @public
     * @readonly
     */
    readonly chargeNumber: OPTIONAL<ChargeNumber>;
    /**
     * @summary `callSegmentID`.
     * @public
     * @readonly
     */
    readonly callSegmentID: OPTIONAL<CallSegmentID>;
    /**
     * @summary `legToBeCreated`.
     * @public
     * @readonly
     */
    readonly legToBeCreated: OPTIONAL<LegID>;
    /**
     * @summary `sDSSinformation`.
     * @public
     * @readonly
     */
    readonly sDSSinformation: OPTIONAL<SDSSinformation>;
    /**
     * @summary `calledDirectoryNumber`.
     * @public
     * @readonly
     */
    readonly calledDirectoryNumber: OPTIONAL<CalledDirectoryNumber>;
    /**
     * @summary `bearerCapability`.
     * @public
     * @readonly
     */
    readonly bearerCapability: OPTIONAL<BearerCapability>;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        destinationRoutingAddress: DestinationRoutingAddress,
        alertingPattern?: OPTIONAL<AlertingPattern>,
        correlationID?: OPTIONAL<CorrelationID>,
        cutAndPaste?: OPTIONAL<CutAndPaste>,
        forwardingCondition?: OPTIONAL<ForwardingCondition>,
        iSDNAccessRelatedInformation?: OPTIONAL<ISDNAccessRelatedInformation>,
        originalCalledPartyID?: OPTIONAL<OriginalCalledPartyID>,
        routeList?: OPTIONAL<RouteList>,
        scfID?: OPTIONAL<ScfID>,
        travellingClassMark?: OPTIONAL<TravellingClassMark>,
        extensions?: OPTIONAL<Extensions>,
        carrier?: OPTIONAL<Carrier>,
        serviceInteractionIndicators?: OPTIONAL<ServiceInteractionIndicators>,
        callingPartyNumber?: OPTIONAL<CallingPartyNumber>,
        callingPartysCategory?: OPTIONAL<CallingPartysCategory>,
        redirectingPartyID?: OPTIONAL<RedirectingPartyID>,
        redirectionInformation?: OPTIONAL<RedirectionInformation>,
        displayInformation?: OPTIONAL<DisplayInformation>,
        forwardCallIndicators?: OPTIONAL<ForwardCallIndicators>,
        genericNumbers?: OPTIONAL<GenericNumbers>,
        serviceInteractionIndicatorsTwo?: OPTIONAL<ServiceInteractionIndicatorsTwo>,
        iNServiceCompatibilityResponse?: OPTIONAL<INServiceCompatibilityResponse>,
        forwardGVNS?: OPTIONAL<ForwardGVNS>,
        backwardGVNS?: OPTIONAL<BackwardGVNS>,
        chargeNumber?: OPTIONAL<ChargeNumber>,
        callSegmentID?: OPTIONAL<CallSegmentID>,
        legToBeCreated?: OPTIONAL<LegID>,
        sDSSinformation?: OPTIONAL<SDSSinformation>,
        calledDirectoryNumber?: OPTIONAL<CalledDirectoryNumber>,
        bearerCapability?: OPTIONAL<BearerCapability>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.destinationRoutingAddress = destinationRoutingAddress;
        this.alertingPattern = alertingPattern;
        this.correlationID = correlationID;
        this.cutAndPaste = cutAndPaste;
        this.forwardingCondition = forwardingCondition;
        this.iSDNAccessRelatedInformation = iSDNAccessRelatedInformation;
        this.originalCalledPartyID = originalCalledPartyID;
        this.routeList = routeList;
        this.scfID = scfID;
        this.travellingClassMark = travellingClassMark;
        this.extensions = extensions;
        this.carrier = carrier;
        this.serviceInteractionIndicators = serviceInteractionIndicators;
        this.callingPartyNumber = callingPartyNumber;
        this.callingPartysCategory = callingPartysCategory;
        this.redirectingPartyID = redirectingPartyID;
        this.redirectionInformation = redirectionInformation;
        this.displayInformation = displayInformation;
        this.forwardCallIndicators = forwardCallIndicators;
        this.genericNumbers = genericNumbers;
        this.serviceInteractionIndicatorsTwo = serviceInteractionIndicatorsTwo;
        this.iNServiceCompatibilityResponse = iNServiceCompatibilityResponse;
        this.forwardGVNS = forwardGVNS;
        this.backwardGVNS = backwardGVNS;
        this.chargeNumber = chargeNumber;
        this.callSegmentID = callSegmentID;
        this.legToBeCreated = legToBeCreated;
        this.sDSSinformation = sDSSinformation;
        this.calledDirectoryNumber = calledDirectoryNumber;
        this.bearerCapability = bearerCapability;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a ConnectArg
     * @description
     * 
     * This takes an `object` and converts it to a `ConnectArg`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ConnectArg`.
     * @returns {ConnectArg}
     */
    public static _from_object (_o: { [_K in keyof (ConnectArg)]: (ConnectArg)[_K] }): ConnectArg {
        return new ConnectArg(_o.destinationRoutingAddress, _o.alertingPattern, _o.correlationID, _o.cutAndPaste, _o.forwardingCondition, _o.iSDNAccessRelatedInformation, _o.originalCalledPartyID, _o.routeList, _o.scfID, _o.travellingClassMark, _o.extensions, _o.carrier, _o.serviceInteractionIndicators, _o.callingPartyNumber, _o.callingPartysCategory, _o.redirectingPartyID, _o.redirectionInformation, _o.displayInformation, _o.forwardCallIndicators, _o.genericNumbers, _o.serviceInteractionIndicatorsTwo, _o.iNServiceCompatibilityResponse, _o.forwardGVNS, _o.backwardGVNS, _o.chargeNumber, _o.callSegmentID, _o.legToBeCreated, _o.sDSSinformation, _o.calledDirectoryNumber, _o.bearerCapability, _o._unrecognizedExtensionsList);
    }

        /**
         * @summary The enum used as the type of the component `forwardingCondition`
         * @public
         * @static
         */

    public static _enum_for_forwardingCondition = _enum_for_ForwardingCondition;
}

/**
 * @summary The Leading Root Component Types of ConnectArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ConnectArg: $.ComponentSpec[] = [
    new $.ComponentSpec("destinationRoutingAddress", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("alertingPattern", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("correlationID", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("cutAndPaste", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("forwardingCondition", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("iSDNAccessRelatedInformation", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("originalCalledPartyID", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("routeList", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("scfID", true, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("travellingClassMark", true, $.hasTag(_TagClass.context, 9)),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.context, 10)),
    new $.ComponentSpec("carrier", true, $.hasTag(_TagClass.context, 11)),
    new $.ComponentSpec("serviceInteractionIndicators", true, $.hasTag(_TagClass.context, 26)),
    new $.ComponentSpec("callingPartyNumber", true, $.hasTag(_TagClass.context, 27)),
    new $.ComponentSpec("callingPartysCategory", true, $.hasTag(_TagClass.context, 28)),
    new $.ComponentSpec("redirectingPartyID", true, $.hasTag(_TagClass.context, 29)),
    new $.ComponentSpec("redirectionInformation", true, $.hasTag(_TagClass.context, 30)),
    new $.ComponentSpec("displayInformation", true, $.hasTag(_TagClass.context, 12)),
    new $.ComponentSpec("forwardCallIndicators", true, $.hasTag(_TagClass.context, 13)),
    new $.ComponentSpec("genericNumbers", true, $.hasTag(_TagClass.context, 14)),
    new $.ComponentSpec("serviceInteractionIndicatorsTwo", true, $.hasTag(_TagClass.context, 15)),
    new $.ComponentSpec("iNServiceCompatibilityResponse", true, $.hasTag(_TagClass.context, 16)),
    new $.ComponentSpec("forwardGVNS", true, $.hasTag(_TagClass.context, 17)),
    new $.ComponentSpec("backwardGVNS", true, $.hasTag(_TagClass.context, 18)),
    new $.ComponentSpec("chargeNumber", true, $.hasTag(_TagClass.context, 19)),
    new $.ComponentSpec("callSegmentID", true, $.hasTag(_TagClass.context, 20)),
    new $.ComponentSpec("legToBeCreated", true, $.hasTag(_TagClass.context, 21)),
    new $.ComponentSpec("sDSSinformation", true, $.hasTag(_TagClass.context, 22)),
    new $.ComponentSpec("calledDirectoryNumber", true, $.hasTag(_TagClass.context, 23)),
    new $.ComponentSpec("bearerCapability", true, $.hasTag(_TagClass.context, 24))
];

/**
 * @summary The Trailing Root Component Types of ConnectArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ConnectArg: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ConnectArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ConnectArg: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ConnectArg: $.ASN1Decoder<ConnectArg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ConnectArg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ConnectArg (el: _Element): ConnectArg {
    if (!_cached_decoder_for_ConnectArg) { _cached_decoder_for_ConnectArg = function (el: _Element): ConnectArg {
    let destinationRoutingAddress!: DestinationRoutingAddress;
    let alertingPattern: OPTIONAL<AlertingPattern>;
    let correlationID: OPTIONAL<CorrelationID>;
    let cutAndPaste: OPTIONAL<CutAndPaste>;
    let forwardingCondition: OPTIONAL<ForwardingCondition>;
    let iSDNAccessRelatedInformation: OPTIONAL<ISDNAccessRelatedInformation>;
    let originalCalledPartyID: OPTIONAL<OriginalCalledPartyID>;
    let routeList: OPTIONAL<RouteList>;
    let scfID: OPTIONAL<ScfID>;
    let travellingClassMark: OPTIONAL<TravellingClassMark>;
    let extensions: OPTIONAL<Extensions>;
    let carrier: OPTIONAL<Carrier>;
    let serviceInteractionIndicators: OPTIONAL<ServiceInteractionIndicators>;
    let callingPartyNumber: OPTIONAL<CallingPartyNumber>;
    let callingPartysCategory: OPTIONAL<CallingPartysCategory>;
    let redirectingPartyID: OPTIONAL<RedirectingPartyID>;
    let redirectionInformation: OPTIONAL<RedirectionInformation>;
    let displayInformation: OPTIONAL<DisplayInformation>;
    let forwardCallIndicators: OPTIONAL<ForwardCallIndicators>;
    let genericNumbers: OPTIONAL<GenericNumbers>;
    let serviceInteractionIndicatorsTwo: OPTIONAL<ServiceInteractionIndicatorsTwo>;
    let iNServiceCompatibilityResponse: OPTIONAL<INServiceCompatibilityResponse>;
    let forwardGVNS: OPTIONAL<ForwardGVNS>;
    let backwardGVNS: OPTIONAL<BackwardGVNS>;
    let chargeNumber: OPTIONAL<ChargeNumber>;
    let callSegmentID: OPTIONAL<CallSegmentID>;
    let legToBeCreated: OPTIONAL<LegID>;
    let sDSSinformation: OPTIONAL<SDSSinformation>;
    let calledDirectoryNumber: OPTIONAL<CalledDirectoryNumber>;
    let bearerCapability: OPTIONAL<BearerCapability>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "destinationRoutingAddress": (_el: _Element): void => { destinationRoutingAddress = $._decode_implicit<DestinationRoutingAddress>(() => _decode_DestinationRoutingAddress)(_el); },
        "alertingPattern": (_el: _Element): void => { alertingPattern = $._decode_implicit<AlertingPattern>(() => _decode_AlertingPattern)(_el); },
        "correlationID": (_el: _Element): void => { correlationID = $._decode_implicit<CorrelationID>(() => _decode_CorrelationID)(_el); },
        "cutAndPaste": (_el: _Element): void => { cutAndPaste = $._decode_implicit<CutAndPaste>(() => _decode_CutAndPaste)(_el); },
        "forwardingCondition": (_el: _Element): void => { forwardingCondition = $._decode_implicit<ForwardingCondition>(() => _decode_ForwardingCondition)(_el); },
        "iSDNAccessRelatedInformation": (_el: _Element): void => { iSDNAccessRelatedInformation = $._decode_implicit<ISDNAccessRelatedInformation>(() => _decode_ISDNAccessRelatedInformation)(_el); },
        "originalCalledPartyID": (_el: _Element): void => { originalCalledPartyID = $._decode_implicit<OriginalCalledPartyID>(() => _decode_OriginalCalledPartyID)(_el); },
        "routeList": (_el: _Element): void => { routeList = $._decode_implicit<RouteList>(() => _decode_RouteList)(_el); },
        "scfID": (_el: _Element): void => { scfID = $._decode_implicit<ScfID>(() => _decode_ScfID)(_el); },
        "travellingClassMark": (_el: _Element): void => { travellingClassMark = $._decode_implicit<TravellingClassMark>(() => _decode_TravellingClassMark)(_el); },
        "extensions": (_el: _Element): void => { extensions = $._decode_implicit<Extensions>(() => _decode_Extensions)(_el); },
        "carrier": (_el: _Element): void => { carrier = $._decode_implicit<Carrier>(() => _decode_Carrier)(_el); },
        "serviceInteractionIndicators": (_el: _Element): void => { serviceInteractionIndicators = $._decode_implicit<ServiceInteractionIndicators>(() => _decode_ServiceInteractionIndicators)(_el); },
        "callingPartyNumber": (_el: _Element): void => { callingPartyNumber = $._decode_implicit<CallingPartyNumber>(() => _decode_CallingPartyNumber)(_el); },
        "callingPartysCategory": (_el: _Element): void => { callingPartysCategory = $._decode_implicit<CallingPartysCategory>(() => _decode_CallingPartysCategory)(_el); },
        "redirectingPartyID": (_el: _Element): void => { redirectingPartyID = $._decode_implicit<RedirectingPartyID>(() => _decode_RedirectingPartyID)(_el); },
        "redirectionInformation": (_el: _Element): void => { redirectionInformation = $._decode_implicit<RedirectionInformation>(() => _decode_RedirectionInformation)(_el); },
        "displayInformation": (_el: _Element): void => { displayInformation = $._decode_implicit<DisplayInformation>(() => _decode_DisplayInformation)(_el); },
        "forwardCallIndicators": (_el: _Element): void => { forwardCallIndicators = $._decode_implicit<ForwardCallIndicators>(() => _decode_ForwardCallIndicators)(_el); },
        "genericNumbers": (_el: _Element): void => { genericNumbers = $._decode_implicit<GenericNumbers>(() => _decode_GenericNumbers)(_el); },
        "serviceInteractionIndicatorsTwo": (_el: _Element): void => { serviceInteractionIndicatorsTwo = $._decode_implicit<ServiceInteractionIndicatorsTwo>(() => _decode_ServiceInteractionIndicatorsTwo)(_el); },
        "iNServiceCompatibilityResponse": (_el: _Element): void => { iNServiceCompatibilityResponse = $._decode_explicit<INServiceCompatibilityResponse>(() => _decode_INServiceCompatibilityResponse)(_el); },
        "forwardGVNS": (_el: _Element): void => { forwardGVNS = $._decode_implicit<ForwardGVNS>(() => _decode_ForwardGVNS)(_el); },
        "backwardGVNS": (_el: _Element): void => { backwardGVNS = $._decode_implicit<BackwardGVNS>(() => _decode_BackwardGVNS)(_el); },
        "chargeNumber": (_el: _Element): void => { chargeNumber = $._decode_implicit<ChargeNumber>(() => _decode_ChargeNumber)(_el); },
        "callSegmentID": (_el: _Element): void => { callSegmentID = $._decode_implicit<CallSegmentID>(() => _decode_CallSegmentID)(_el); },
        "legToBeCreated": (_el: _Element): void => { legToBeCreated = $._decode_explicit<LegID>(() => _decode_LegID)(_el); },
        "sDSSinformation": (_el: _Element): void => { sDSSinformation = $._decode_implicit<SDSSinformation>(() => _decode_SDSSinformation)(_el); },
        "calledDirectoryNumber": (_el: _Element): void => { calledDirectoryNumber = $._decode_implicit<CalledDirectoryNumber>(() => _decode_CalledDirectoryNumber)(_el); },
        "bearerCapability": (_el: _Element): void => { bearerCapability = $._decode_explicit<BearerCapability>(() => _decode_BearerCapability)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ConnectArg,
        _extension_additions_list_spec_for_ConnectArg,
        _root_component_type_list_2_spec_for_ConnectArg,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new ConnectArg(
        destinationRoutingAddress,
        alertingPattern,
        correlationID,
        cutAndPaste,
        forwardingCondition,
        iSDNAccessRelatedInformation,
        originalCalledPartyID,
        routeList,
        scfID,
        travellingClassMark,
        extensions,
        carrier,
        serviceInteractionIndicators,
        callingPartyNumber,
        callingPartysCategory,
        redirectingPartyID,
        redirectionInformation,
        displayInformation,
        forwardCallIndicators,
        genericNumbers,
        serviceInteractionIndicatorsTwo,
        iNServiceCompatibilityResponse,
        forwardGVNS,
        backwardGVNS,
        chargeNumber,
        callSegmentID,
        legToBeCreated,
        sDSSinformation,
        calledDirectoryNumber,
        bearerCapability,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_ConnectArg(el);
}

let _cached_encoder_for_ConnectArg: $.ASN1Encoder<ConnectArg> | null = null;

/**
 * @summary Encodes a(n) ConnectArg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ConnectArg, encoded as an ASN.1 Element.
 */
export
function _encode_ConnectArg (value: ConnectArg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ConnectArg) { _cached_encoder_for_ConnectArg = function (value: ConnectArg, elGetter: $.ASN1Encoder<ConnectArg>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(30 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_DestinationRoutingAddress, $.BER)(value.destinationRoutingAddress, $.BER);
    if (value.alertingPattern !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => _encode_AlertingPattern, $.BER)(value.alertingPattern, $.BER);
    }
    if (value.correlationID !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => _encode_CorrelationID, $.BER)(value.correlationID, $.BER);
    }
    if (value.cutAndPaste !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => _encode_CutAndPaste, $.BER)(value.cutAndPaste, $.BER);
    }
    if (value.forwardingCondition !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 4, () => _encode_ForwardingCondition, $.BER)(value.forwardingCondition, $.BER);
    }
    if (value.iSDNAccessRelatedInformation !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 5, () => _encode_ISDNAccessRelatedInformation, $.BER)(value.iSDNAccessRelatedInformation, $.BER);
    }
    if (value.originalCalledPartyID !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 6, () => _encode_OriginalCalledPartyID, $.BER)(value.originalCalledPartyID, $.BER);
    }
    if (value.routeList !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 7, () => _encode_RouteList, $.BER)(value.routeList, $.BER);
    }
    if (value.scfID !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 8, () => _encode_ScfID, $.BER)(value.scfID, $.BER);
    }
    if (value.travellingClassMark !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 9, () => _encode_TravellingClassMark, $.BER)(value.travellingClassMark, $.BER);
    }
    if (value.extensions !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 10, () => _encode_Extensions, $.BER)(value.extensions, $.BER);
    }
    if (value.carrier !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 11, () => _encode_Carrier, $.BER)(value.carrier, $.BER);
    }
    if (value.serviceInteractionIndicators !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 26, () => _encode_ServiceInteractionIndicators, $.BER)(value.serviceInteractionIndicators, $.BER);
    }
    if (value.callingPartyNumber !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 27, () => _encode_CallingPartyNumber, $.BER)(value.callingPartyNumber, $.BER);
    }
    if (value.callingPartysCategory !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 28, () => _encode_CallingPartysCategory, $.BER)(value.callingPartysCategory, $.BER);
    }
    if (value.redirectingPartyID !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 29, () => _encode_RedirectingPartyID, $.BER)(value.redirectingPartyID, $.BER);
    }
    if (value.redirectionInformation !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 30, () => _encode_RedirectionInformation, $.BER)(value.redirectionInformation, $.BER);
    }
    if (value.displayInformation !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 12, () => _encode_DisplayInformation, $.BER)(value.displayInformation, $.BER);
    }
    if (value.forwardCallIndicators !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 13, () => _encode_ForwardCallIndicators, $.BER)(value.forwardCallIndicators, $.BER);
    }
    if (value.genericNumbers !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 14, () => _encode_GenericNumbers, $.BER)(value.genericNumbers, $.BER);
    }
    if (value.serviceInteractionIndicatorsTwo !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 15, () => _encode_ServiceInteractionIndicatorsTwo, $.BER)(value.serviceInteractionIndicatorsTwo, $.BER);
    }
    if (value.iNServiceCompatibilityResponse !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 16, () => _encode_INServiceCompatibilityResponse, $.BER)(value.iNServiceCompatibilityResponse, $.BER);
    }
    if (value.forwardGVNS !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 17, () => _encode_ForwardGVNS, $.BER)(value.forwardGVNS, $.BER);
    }
    if (value.backwardGVNS !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 18, () => _encode_BackwardGVNS, $.BER)(value.backwardGVNS, $.BER);
    }
    if (value.chargeNumber !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 19, () => _encode_ChargeNumber, $.BER)(value.chargeNumber, $.BER);
    }
    if (value.callSegmentID !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 20, () => _encode_CallSegmentID, $.BER)(value.callSegmentID, $.BER);
    }
    if (value.legToBeCreated !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 21, () => _encode_LegID, $.BER)(value.legToBeCreated, $.BER);
    }
    if (value.sDSSinformation !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 22, () => _encode_SDSSinformation, $.BER)(value.sDSSinformation, $.BER);
    }
    if (value.calledDirectoryNumber !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 23, () => _encode_CalledDirectoryNumber, $.BER)(value.calledDirectoryNumber, $.BER);
    }
    if (value.bearerCapability !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 24, () => _encode_BearerCapability, $.BER)(value.bearerCapability, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_ConnectArg(value, elGetter);
}


/* eslint-enable */
