/* eslint-disable */
import {
    BOOLEAN,
    NULL,
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { DestinationRoutingAddress, _decode_DestinationRoutingAddress, _encode_DestinationRoutingAddress } from "../IN-SSF-SCF-datatypes/DestinationRoutingAddress.ta.mjs";
// export { DestinationRoutingAddress, _decode_DestinationRoutingAddress, _encode_DestinationRoutingAddress } from "../IN-SSF-SCF-datatypes/DestinationRoutingAddress.ta.mjs";
import { AlertingPattern, _decode_AlertingPattern, _encode_AlertingPattern } from "../IN-SSF-SCF-datatypes/AlertingPattern.ta.mjs";
// export { AlertingPattern, _decode_AlertingPattern, _encode_AlertingPattern } from "../IN-SSF-SCF-datatypes/AlertingPattern.ta.mjs";
import { ISDNAccessRelatedInformation, _decode_ISDNAccessRelatedInformation, _encode_ISDNAccessRelatedInformation } from "../IN-SSF-SCF-datatypes/ISDNAccessRelatedInformation.ta.mjs";
// export { ISDNAccessRelatedInformation, _decode_ISDNAccessRelatedInformation, _encode_ISDNAccessRelatedInformation } from "../IN-SSF-SCF-datatypes/ISDNAccessRelatedInformation.ta.mjs";
import { TravellingClassMark, _decode_TravellingClassMark, _encode_TravellingClassMark } from "../IN-SSF-SCF-datatypes/TravellingClassMark.ta.mjs";
// export { TravellingClassMark, _decode_TravellingClassMark, _encode_TravellingClassMark } from "../IN-SSF-SCF-datatypes/TravellingClassMark.ta.mjs";
import { Extensions, _decode_Extensions, _encode_Extensions } from "../IN-common-datatypes/Extensions.ta.mjs";
// export { Extensions, _decode_Extensions, _encode_Extensions } from "../IN-common-datatypes/Extensions.ta.mjs";
import { ServiceInteractionIndicators, _decode_ServiceInteractionIndicators, _encode_ServiceInteractionIndicators } from "../IN-SSF-SCF-datatypes/ServiceInteractionIndicators.ta.mjs";
// export { ServiceInteractionIndicators, _decode_ServiceInteractionIndicators, _encode_ServiceInteractionIndicators } from "../IN-SSF-SCF-datatypes/ServiceInteractionIndicators.ta.mjs";
import { CallingPartyNumber, _decode_CallingPartyNumber, _encode_CallingPartyNumber } from "../IN-SSF-SCF-datatypes/CallingPartyNumber.ta.mjs";
// export { CallingPartyNumber, _decode_CallingPartyNumber, _encode_CallingPartyNumber } from "../IN-SSF-SCF-datatypes/CallingPartyNumber.ta.mjs";
import { LegID, _decode_LegID, _encode_LegID } from "../IN-SSF-SCF-datatypes/LegID.ta.mjs";
// export { LegID, _decode_LegID, _encode_LegID } from "../IN-SSF-SCF-datatypes/LegID.ta.mjs";
import { leg1 } from "../IN-SSF-SCF-datatypes/leg1.va.mjs";
// export { leg1 } from "../IN-SSF-SCF-datatypes/leg1.va.mjs";
import { CallSegmentID, _decode_CallSegmentID, _encode_CallSegmentID } from "../IN-SSF-SCF-datatypes/CallSegmentID.ta.mjs";
// export { CallSegmentID, _decode_CallSegmentID, _encode_CallSegmentID } from "../IN-SSF-SCF-datatypes/CallSegmentID.ta.mjs";
import { initialCallSegment } from "../IN-SSF-SCF-datatypes/initialCallSegment.va.mjs";
// export { initialCallSegment } from "../IN-SSF-SCF-datatypes/initialCallSegment.va.mjs";
import { INServiceCompatibilityResponse, _decode_INServiceCompatibilityResponse, _encode_INServiceCompatibilityResponse } from "../IN-SSF-SCF-datatypes/INServiceCompatibilityResponse.ta.mjs";
// export { INServiceCompatibilityResponse, _decode_INServiceCompatibilityResponse, _encode_INServiceCompatibilityResponse } from "../IN-SSF-SCF-datatypes/INServiceCompatibilityResponse.ta.mjs";
import { ServiceInteractionIndicatorsTwo, _decode_ServiceInteractionIndicatorsTwo, _encode_ServiceInteractionIndicatorsTwo } from "../IN-SSF-SCF-datatypes/ServiceInteractionIndicatorsTwo.ta.mjs";
// export { ServiceInteractionIndicatorsTwo, _decode_ServiceInteractionIndicatorsTwo, _encode_ServiceInteractionIndicatorsTwo } from "../IN-SSF-SCF-datatypes/ServiceInteractionIndicatorsTwo.ta.mjs";
import { Carrier, _decode_Carrier, _encode_Carrier } from "../IN-SSF-SCF-datatypes/Carrier.ta.mjs";
// export { Carrier, _decode_Carrier, _encode_Carrier } from "../IN-SSF-SCF-datatypes/Carrier.ta.mjs";
import { CorrelationID, _decode_CorrelationID, _encode_CorrelationID } from "../IN-SSF-SCF-datatypes/CorrelationID.ta.mjs";
// export { CorrelationID, _decode_CorrelationID, _encode_CorrelationID } from "../IN-SSF-SCF-datatypes/CorrelationID.ta.mjs";
import { ScfID, _decode_ScfID, _encode_ScfID } from "../IN-SSF-SCF-datatypes/ScfID.ta.mjs";
// export { ScfID, _decode_ScfID, _encode_ScfID } from "../IN-SSF-SCF-datatypes/ScfID.ta.mjs";
import { CallReference, _decode_CallReference, _encode_CallReference } from "../IN-SSF-SCF-datatypes/CallReference.ta.mjs";
// export { CallReference, _decode_CallReference, _encode_CallReference } from "../IN-SSF-SCF-datatypes/CallReference.ta.mjs";
import { CalledDirectoryNumber, _decode_CalledDirectoryNumber, _encode_CalledDirectoryNumber } from "../IN-SSF-SCF-datatypes/CalledDirectoryNumber.ta.mjs";
// export { CalledDirectoryNumber, _decode_CalledDirectoryNumber, _encode_CalledDirectoryNumber } from "../IN-SSF-SCF-datatypes/CalledDirectoryNumber.ta.mjs";
import { BearerCapability, _decode_BearerCapability, _encode_BearerCapability } from "../IN-SSF-SCF-datatypes/BearerCapability.ta.mjs";
// export { BearerCapability, _decode_BearerCapability, _encode_BearerCapability } from "../IN-SSF-SCF-datatypes/BearerCapability.ta.mjs";
import { CalledPartySubaddress, _decode_CalledPartySubaddress, _encode_CalledPartySubaddress } from "../IN-SSF-SCF-datatypes/CalledPartySubaddress.ta.mjs";
// export { CalledPartySubaddress, _decode_CalledPartySubaddress, _encode_CalledPartySubaddress } from "../IN-SSF-SCF-datatypes/CalledPartySubaddress.ta.mjs";
import { ConnectionIdentifier, _decode_ConnectionIdentifier, _encode_ConnectionIdentifier } from "../IN-SSF-SCF-datatypes/ConnectionIdentifier.ta.mjs";
// export { ConnectionIdentifier, _decode_ConnectionIdentifier, _encode_ConnectionIdentifier } from "../IN-SSF-SCF-datatypes/ConnectionIdentifier.ta.mjs";
import { GenericIdentifier, _decode_GenericIdentifier, _encode_GenericIdentifier } from "../IN-SSF-SCF-datatypes/GenericIdentifier.ta.mjs";
// export { GenericIdentifier, _decode_GenericIdentifier, _encode_GenericIdentifier } from "../IN-SSF-SCF-datatypes/GenericIdentifier.ta.mjs";
import { QoSParameter, _decode_QoSParameter, _encode_QoSParameter } from "../IN-SSF-SCF-datatypes/QoSParameter.ta.mjs";
// export { QoSParameter, _decode_QoSParameter, _encode_QoSParameter } from "../IN-SSF-SCF-datatypes/QoSParameter.ta.mjs";
import { BISDNParameters, _decode_BISDNParameters, _encode_BISDNParameters } from "../IN-SSF-SCF-datatypes/BISDNParameters.ta.mjs";
// export { BISDNParameters, _decode_BISDNParameters, _encode_BISDNParameters } from "../IN-SSF-SCF-datatypes/BISDNParameters.ta.mjs";
import { OriginalCalledPartyID, _decode_OriginalCalledPartyID, _encode_OriginalCalledPartyID } from "../IN-SSF-SCF-datatypes/OriginalCalledPartyID.ta.mjs";
// export { OriginalCalledPartyID, _decode_OriginalCalledPartyID, _encode_OriginalCalledPartyID } from "../IN-SSF-SCF-datatypes/OriginalCalledPartyID.ta.mjs";
import { CallingPartysCategory, _decode_CallingPartysCategory, _encode_CallingPartysCategory } from "../IN-SSF-SCF-datatypes/CallingPartysCategory.ta.mjs";
// export { CallingPartysCategory, _decode_CallingPartysCategory, _encode_CallingPartysCategory } from "../IN-SSF-SCF-datatypes/CallingPartysCategory.ta.mjs";
import { RedirectingPartyID, _decode_RedirectingPartyID, _encode_RedirectingPartyID } from "../IN-SSF-SCF-datatypes/RedirectingPartyID.ta.mjs";
// export { RedirectingPartyID, _decode_RedirectingPartyID, _encode_RedirectingPartyID } from "../IN-SSF-SCF-datatypes/RedirectingPartyID.ta.mjs";
import { RedirectionInformation, _decode_RedirectionInformation, _encode_RedirectionInformation } from "../IN-SSF-SCF-datatypes/RedirectionInformation.ta.mjs";
// export { RedirectionInformation, _decode_RedirectionInformation, _encode_RedirectionInformation } from "../IN-SSF-SCF-datatypes/RedirectionInformation.ta.mjs";
import { DisplayInformation, _decode_DisplayInformation, _encode_DisplayInformation } from "../IN-SSF-SCF-datatypes/DisplayInformation.ta.mjs";
// export { DisplayInformation, _decode_DisplayInformation, _encode_DisplayInformation } from "../IN-SSF-SCF-datatypes/DisplayInformation.ta.mjs";
import { ForwardCallIndicators, _decode_ForwardCallIndicators, _encode_ForwardCallIndicators } from "../IN-SSF-SCF-datatypes/ForwardCallIndicators.ta.mjs";
// export { ForwardCallIndicators, _decode_ForwardCallIndicators, _encode_ForwardCallIndicators } from "../IN-SSF-SCF-datatypes/ForwardCallIndicators.ta.mjs";
import { GenericNumbers, _decode_GenericNumbers, _encode_GenericNumbers } from "../IN-SSF-SCF-datatypes/GenericNumbers.ta.mjs";
// export { GenericNumbers, _decode_GenericNumbers, _encode_GenericNumbers } from "../IN-SSF-SCF-datatypes/GenericNumbers.ta.mjs";
import { ForwardGVNS, _decode_ForwardGVNS, _encode_ForwardGVNS } from "../IN-SSF-SCF-datatypes/ForwardGVNS.ta.mjs";
// export { ForwardGVNS, _decode_ForwardGVNS, _encode_ForwardGVNS } from "../IN-SSF-SCF-datatypes/ForwardGVNS.ta.mjs";
import { GlobalCallReference, _decode_GlobalCallReference, _encode_GlobalCallReference } from "../IN-SSF-SCF-datatypes/GlobalCallReference.ta.mjs";
// export { GlobalCallReference, _decode_GlobalCallReference, _encode_GlobalCallReference } from "../IN-SSF-SCF-datatypes/GlobalCallReference.ta.mjs";
import { CUG_Interlock, _decode_CUG_Interlock, _encode_CUG_Interlock } from "../IN-SSF-SCF-datatypes/CUG-Interlock.ta.mjs";
// export { CUG_Interlock, _decode_CUG_Interlock, _encode_CUG_Interlock } from "../IN-SSF-SCF-datatypes/CUG-Interlock.ta.mjs";
import { IPRelatedInformation, _decode_IPRelatedInformation, _encode_IPRelatedInformation } from "../IN-SSF-SCF-datatypes/IPRelatedInformation.ta.mjs";
// export { IPRelatedInformation, _decode_IPRelatedInformation, _encode_IPRelatedInformation } from "../IN-SSF-SCF-datatypes/IPRelatedInformation.ta.mjs";


/**
 * @summary InitiateCallAttemptArg
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * InitiateCallAttemptArg ::= SEQUENCE {
 *   destinationRoutingAddress        [0]  DestinationRoutingAddress,
 *   alertingPattern                  [1]  AlertingPattern OPTIONAL,
 *   iSDNAccessRelatedInformation
 *     [2]  ISDNAccessRelatedInformation OPTIONAL,
 *   travellingClassMark              [3]  TravellingClassMark OPTIONAL,
 *   extensions                       [4]  Extensions OPTIONAL,
 *   serviceInteractionIndicators
 *     [29]  ServiceInteractionIndicators OPTIONAL,
 *   callingPartyNumber               [30]  CallingPartyNumber OPTIONAL,
 *   legToBeCreated                   [5]  LegID DEFAULT sendingSideID:leg1,
 *   newCallSegment
 *     [6]  CallSegmentID DEFAULT initialCallSegment,
 *   iNServiceCompatibilityResponse   [7]  INServiceCompatibilityResponse OPTIONAL,
 *   serviceInteractionIndicatorsTwo
 *     [8]  ServiceInteractionIndicatorsTwo OPTIONAL,
 *   carrier                          [9]  Carrier OPTIONAL,
 *   correlationID                    [10]  CorrelationID OPTIONAL,
 *   scfID                            [11]  ScfID OPTIONAL,
 *   callReference                    [12]  CallReference OPTIONAL,
 *   calledDirectoryNumber            [13]  CalledDirectoryNumber OPTIONAL,
 *   bearerCapability                 [60]  BearerCapability OPTIONAL,
 *   calledPartySubaddress            [61]  CalledPartySubaddress OPTIONAL,
 *   connectionIdentifier             [62]  ConnectionIdentifier OPTIONAL,
 *   genericIdentifier                [63]  GenericIdentifier OPTIONAL,
 *   qOSParameter                     [64]  QoSParameter OPTIONAL,
 *   bISDNParameters                  [65]  BISDNParameters OPTIONAL,
 *   ...,
 *   originalCalledPartyID            [14]  OriginalCalledPartyID OPTIONAL,
 *   callingPartysCategory            [15]  CallingPartysCategory OPTIONAL,
 *   redirectingPartyID               [16]  RedirectingPartyID OPTIONAL,
 *   redirectionInformation           [17]  RedirectionInformation OPTIONAL,
 *   displayInformation               [18]  DisplayInformation OPTIONAL,
 *   forwardCallIndicators            [19]  ForwardCallIndicators OPTIONAL,
 *   genericNumbers                   [20]  GenericNumbers OPTIONAL,
 *   forwardGVNS                      [21]  ForwardGVNS OPTIONAL,
 *   globalCallReference              [23]  GlobalCallReference OPTIONAL,
 *   -- syntax to be confirmed
 *   cug-Interlock                    [24]  CUG-Interlock OPTIONAL,
 *   cug-OutgoingAccess               [25]  NULL OPTIONAL,
 *   incomingSignallingBufferCopy     [26]  BOOLEAN DEFAULT FALSE,
 *   ipRelatedInformation             [27]  IPRelatedInformation OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class InitiateCallAttemptArg {
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
     * @summary `iSDNAccessRelatedInformation`.
     * @public
     * @readonly
     */
    readonly iSDNAccessRelatedInformation: OPTIONAL<ISDNAccessRelatedInformation>;
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
     * @summary `legToBeCreated`.
     * @public
     * @readonly
     */
    readonly legToBeCreated: OPTIONAL<LegID>;
    /**
     * @summary `newCallSegment`.
     * @public
     * @readonly
     */
    readonly newCallSegment: OPTIONAL<CallSegmentID>;
    /**
     * @summary `iNServiceCompatibilityResponse`.
     * @public
     * @readonly
     */
    readonly iNServiceCompatibilityResponse: OPTIONAL<INServiceCompatibilityResponse>;
    /**
     * @summary `serviceInteractionIndicatorsTwo`.
     * @public
     * @readonly
     */
    readonly serviceInteractionIndicatorsTwo: OPTIONAL<ServiceInteractionIndicatorsTwo>;
    /**
     * @summary `carrier`.
     * @public
     * @readonly
     */
    readonly carrier: OPTIONAL<Carrier>;
    /**
     * @summary `correlationID`.
     * @public
     * @readonly
     */
    readonly correlationID: OPTIONAL<CorrelationID>;
    /**
     * @summary `scfID`.
     * @public
     * @readonly
     */
    readonly scfID: OPTIONAL<ScfID>;
    /**
     * @summary `callReference`.
     * @public
     * @readonly
     */
    readonly callReference: OPTIONAL<CallReference>;
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
     * @summary `calledPartySubaddress`.
     * @public
     * @readonly
     */
    readonly calledPartySubaddress: OPTIONAL<CalledPartySubaddress>;
    /**
     * @summary `connectionIdentifier`.
     * @public
     * @readonly
     */
    readonly connectionIdentifier: OPTIONAL<ConnectionIdentifier>;
    /**
     * @summary `genericIdentifier`.
     * @public
     * @readonly
     */
    readonly genericIdentifier: OPTIONAL<GenericIdentifier>;
    /**
     * @summary `qOSParameter`.
     * @public
     * @readonly
     */
    readonly qOSParameter: OPTIONAL<QoSParameter>;
    /**
     * @summary `bISDNParameters`.
     * @public
     * @readonly
     */
    readonly bISDNParameters: OPTIONAL<BISDNParameters>;
    /**
     * @summary `originalCalledPartyID`.
     * @public
     * @readonly
     */
    readonly originalCalledPartyID: OPTIONAL<OriginalCalledPartyID>;
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
     * @summary `forwardGVNS`.
     * @public
     * @readonly
     */
    readonly forwardGVNS: OPTIONAL<ForwardGVNS>;
    /**
     * @summary `globalCallReference`.
     * @public
     * @readonly
     */
    readonly globalCallReference: OPTIONAL<GlobalCallReference>;
    /**
     * @summary `cug_Interlock`.
     * @public
     * @readonly
     */
    readonly cug_Interlock: OPTIONAL<CUG_Interlock>;
    /**
     * @summary `cug_OutgoingAccess`.
     * @public
     * @readonly
     */
    readonly cug_OutgoingAccess: OPTIONAL<NULL>;
    /**
     * @summary `incomingSignallingBufferCopy`.
     * @public
     * @readonly
     */
    readonly incomingSignallingBufferCopy: OPTIONAL<BOOLEAN>;
    /**
     * @summary `ipRelatedInformation`.
     * @public
     * @readonly
     */
    readonly ipRelatedInformation: OPTIONAL<IPRelatedInformation>;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        destinationRoutingAddress: DestinationRoutingAddress,
        alertingPattern: OPTIONAL<AlertingPattern>,
        iSDNAccessRelatedInformation: OPTIONAL<ISDNAccessRelatedInformation>,
        travellingClassMark: OPTIONAL<TravellingClassMark>,
        extensions: OPTIONAL<Extensions>,
        serviceInteractionIndicators: OPTIONAL<ServiceInteractionIndicators>,
        callingPartyNumber: OPTIONAL<CallingPartyNumber>,
        legToBeCreated: OPTIONAL<LegID>,
        newCallSegment: OPTIONAL<CallSegmentID>,
        iNServiceCompatibilityResponse: OPTIONAL<INServiceCompatibilityResponse>,
        serviceInteractionIndicatorsTwo: OPTIONAL<ServiceInteractionIndicatorsTwo>,
        carrier: OPTIONAL<Carrier>,
        correlationID: OPTIONAL<CorrelationID>,
        scfID: OPTIONAL<ScfID>,
        callReference: OPTIONAL<CallReference>,
        calledDirectoryNumber: OPTIONAL<CalledDirectoryNumber>,
        bearerCapability: OPTIONAL<BearerCapability>,
        calledPartySubaddress: OPTIONAL<CalledPartySubaddress>,
        connectionIdentifier: OPTIONAL<ConnectionIdentifier>,
        genericIdentifier: OPTIONAL<GenericIdentifier>,
        qOSParameter: OPTIONAL<QoSParameter>,
        bISDNParameters: OPTIONAL<BISDNParameters>,
        originalCalledPartyID: OPTIONAL<OriginalCalledPartyID>,
        callingPartysCategory: OPTIONAL<CallingPartysCategory>,
        redirectingPartyID: OPTIONAL<RedirectingPartyID>,
        redirectionInformation: OPTIONAL<RedirectionInformation>,
        displayInformation: OPTIONAL<DisplayInformation>,
        forwardCallIndicators: OPTIONAL<ForwardCallIndicators>,
        genericNumbers: OPTIONAL<GenericNumbers>,
        forwardGVNS: OPTIONAL<ForwardGVNS>,
        globalCallReference: OPTIONAL<GlobalCallReference>,
        cug_Interlock: OPTIONAL<CUG_Interlock>,
        cug_OutgoingAccess: OPTIONAL<NULL>,
        incomingSignallingBufferCopy: OPTIONAL<BOOLEAN>,
        ipRelatedInformation: OPTIONAL<IPRelatedInformation>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.destinationRoutingAddress = destinationRoutingAddress;
        this.alertingPattern = alertingPattern;
        this.iSDNAccessRelatedInformation = iSDNAccessRelatedInformation;
        this.travellingClassMark = travellingClassMark;
        this.extensions = extensions;
        this.serviceInteractionIndicators = serviceInteractionIndicators;
        this.callingPartyNumber = callingPartyNumber;
        this.legToBeCreated = legToBeCreated;
        this.newCallSegment = newCallSegment;
        this.iNServiceCompatibilityResponse = iNServiceCompatibilityResponse;
        this.serviceInteractionIndicatorsTwo = serviceInteractionIndicatorsTwo;
        this.carrier = carrier;
        this.correlationID = correlationID;
        this.scfID = scfID;
        this.callReference = callReference;
        this.calledDirectoryNumber = calledDirectoryNumber;
        this.bearerCapability = bearerCapability;
        this.calledPartySubaddress = calledPartySubaddress;
        this.connectionIdentifier = connectionIdentifier;
        this.genericIdentifier = genericIdentifier;
        this.qOSParameter = qOSParameter;
        this.bISDNParameters = bISDNParameters;
        this.originalCalledPartyID = originalCalledPartyID;
        this.callingPartysCategory = callingPartysCategory;
        this.redirectingPartyID = redirectingPartyID;
        this.redirectionInformation = redirectionInformation;
        this.displayInformation = displayInformation;
        this.forwardCallIndicators = forwardCallIndicators;
        this.genericNumbers = genericNumbers;
        this.forwardGVNS = forwardGVNS;
        this.globalCallReference = globalCallReference;
        this.cug_Interlock = cug_Interlock;
        this.cug_OutgoingAccess = cug_OutgoingAccess;
        this.incomingSignallingBufferCopy = incomingSignallingBufferCopy;
        this.ipRelatedInformation = ipRelatedInformation;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a InitiateCallAttemptArg
     * @description
     * 
     * This takes an `object` and converts it to a `InitiateCallAttemptArg`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `InitiateCallAttemptArg`.
     * @returns {InitiateCallAttemptArg}
     */
    public static _from_object (_o: { [_K in keyof (InitiateCallAttemptArg)]: (InitiateCallAttemptArg)[_K] }): InitiateCallAttemptArg {
        return new InitiateCallAttemptArg(_o.destinationRoutingAddress, _o.alertingPattern, _o.iSDNAccessRelatedInformation, _o.travellingClassMark, _o.extensions, _o.serviceInteractionIndicators, _o.callingPartyNumber, _o.legToBeCreated, _o.newCallSegment, _o.iNServiceCompatibilityResponse, _o.serviceInteractionIndicatorsTwo, _o.carrier, _o.correlationID, _o.scfID, _o.callReference, _o.calledDirectoryNumber, _o.bearerCapability, _o.calledPartySubaddress, _o.connectionIdentifier, _o.genericIdentifier, _o.qOSParameter, _o.bISDNParameters, _o.originalCalledPartyID, _o.callingPartysCategory, _o.redirectingPartyID, _o.redirectionInformation, _o.displayInformation, _o.forwardCallIndicators, _o.genericNumbers, _o.forwardGVNS, _o.globalCallReference, _o.cug_Interlock, _o.cug_OutgoingAccess, _o.incomingSignallingBufferCopy, _o.ipRelatedInformation, _o._unrecognizedExtensionsList);
    }

    /**
     * @summary Getter that returns the default value for `legToBeCreated`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_legToBeCreated () { return { sendingSideID: leg1 }; }
    /**
     * @summary Getter that returns the default value for `newCallSegment`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_newCallSegment () { return initialCallSegment; }
    /**
     * @summary Getter that returns the default value for `incomingSignallingBufferCopy`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_incomingSignallingBufferCopy () { return false; }
}

/**
 * @summary The Leading Root Component Types of InitiateCallAttemptArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_InitiateCallAttemptArg: $.ComponentSpec[] = [
    new $.ComponentSpec("destinationRoutingAddress", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("alertingPattern", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("iSDNAccessRelatedInformation", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("travellingClassMark", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("serviceInteractionIndicators", true, $.hasTag(_TagClass.context, 29)),
    new $.ComponentSpec("callingPartyNumber", true, $.hasTag(_TagClass.context, 30)),
    new $.ComponentSpec("legToBeCreated", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("newCallSegment", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("iNServiceCompatibilityResponse", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("serviceInteractionIndicatorsTwo", true, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("carrier", true, $.hasTag(_TagClass.context, 9)),
    new $.ComponentSpec("correlationID", true, $.hasTag(_TagClass.context, 10)),
    new $.ComponentSpec("scfID", true, $.hasTag(_TagClass.context, 11)),
    new $.ComponentSpec("callReference", true, $.hasTag(_TagClass.context, 12)),
    new $.ComponentSpec("calledDirectoryNumber", true, $.hasTag(_TagClass.context, 13)),
    new $.ComponentSpec("bearerCapability", true, $.hasTag(_TagClass.context, 60)),
    new $.ComponentSpec("calledPartySubaddress", true, $.hasTag(_TagClass.context, 61)),
    new $.ComponentSpec("connectionIdentifier", true, $.hasTag(_TagClass.context, 62)),
    new $.ComponentSpec("genericIdentifier", true, $.hasTag(_TagClass.context, 63)),
    new $.ComponentSpec("qOSParameter", true, $.hasTag(_TagClass.context, 64)),
    new $.ComponentSpec("bISDNParameters", true, $.hasTag(_TagClass.context, 65))
];

/**
 * @summary The Trailing Root Component Types of InitiateCallAttemptArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_InitiateCallAttemptArg: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of InitiateCallAttemptArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_InitiateCallAttemptArg: $.ComponentSpec[] = [
    new $.ComponentSpec("originalCalledPartyID", true, $.hasTag(_TagClass.context, 14)),
    new $.ComponentSpec("callingPartysCategory", true, $.hasTag(_TagClass.context, 15)),
    new $.ComponentSpec("redirectingPartyID", true, $.hasTag(_TagClass.context, 16)),
    new $.ComponentSpec("redirectionInformation", true, $.hasTag(_TagClass.context, 17)),
    new $.ComponentSpec("displayInformation", true, $.hasTag(_TagClass.context, 18)),
    new $.ComponentSpec("forwardCallIndicators", true, $.hasTag(_TagClass.context, 19)),
    new $.ComponentSpec("genericNumbers", true, $.hasTag(_TagClass.context, 20)),
    new $.ComponentSpec("forwardGVNS", true, $.hasTag(_TagClass.context, 21)),
    new $.ComponentSpec("globalCallReference", true, $.hasTag(_TagClass.context, 23)),
    new $.ComponentSpec("cug-Interlock", true, $.hasTag(_TagClass.context, 24)),
    new $.ComponentSpec("cug-OutgoingAccess", true, $.hasTag(_TagClass.context, 25)),
    new $.ComponentSpec("incomingSignallingBufferCopy", true, $.hasTag(_TagClass.context, 26)),
    new $.ComponentSpec("ipRelatedInformation", true, $.hasTag(_TagClass.context, 27))
];

let _cached_decoder_for_InitiateCallAttemptArg: $.ASN1Decoder<InitiateCallAttemptArg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) InitiateCallAttemptArg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_InitiateCallAttemptArg (el: _Element): InitiateCallAttemptArg {
    if (!_cached_decoder_for_InitiateCallAttemptArg) { _cached_decoder_for_InitiateCallAttemptArg = function (el: _Element): InitiateCallAttemptArg {
    let destinationRoutingAddress!: DestinationRoutingAddress;
    let alertingPattern: OPTIONAL<AlertingPattern>;
    let iSDNAccessRelatedInformation: OPTIONAL<ISDNAccessRelatedInformation>;
    let travellingClassMark: OPTIONAL<TravellingClassMark>;
    let extensions: OPTIONAL<Extensions>;
    let serviceInteractionIndicators: OPTIONAL<ServiceInteractionIndicators>;
    let callingPartyNumber: OPTIONAL<CallingPartyNumber>;
    let legToBeCreated: OPTIONAL<LegID> = InitiateCallAttemptArg._default_value_for_legToBeCreated;
    let newCallSegment: OPTIONAL<CallSegmentID> = InitiateCallAttemptArg._default_value_for_newCallSegment;
    let iNServiceCompatibilityResponse: OPTIONAL<INServiceCompatibilityResponse>;
    let serviceInteractionIndicatorsTwo: OPTIONAL<ServiceInteractionIndicatorsTwo>;
    let carrier: OPTIONAL<Carrier>;
    let correlationID: OPTIONAL<CorrelationID>;
    let scfID: OPTIONAL<ScfID>;
    let callReference: OPTIONAL<CallReference>;
    let calledDirectoryNumber: OPTIONAL<CalledDirectoryNumber>;
    let bearerCapability: OPTIONAL<BearerCapability>;
    let calledPartySubaddress: OPTIONAL<CalledPartySubaddress>;
    let connectionIdentifier: OPTIONAL<ConnectionIdentifier>;
    let genericIdentifier: OPTIONAL<GenericIdentifier>;
    let qOSParameter: OPTIONAL<QoSParameter>;
    let bISDNParameters: OPTIONAL<BISDNParameters>;
    let originalCalledPartyID: OPTIONAL<OriginalCalledPartyID>;
    let callingPartysCategory: OPTIONAL<CallingPartysCategory>;
    let redirectingPartyID: OPTIONAL<RedirectingPartyID>;
    let redirectionInformation: OPTIONAL<RedirectionInformation>;
    let displayInformation: OPTIONAL<DisplayInformation>;
    let forwardCallIndicators: OPTIONAL<ForwardCallIndicators>;
    let genericNumbers: OPTIONAL<GenericNumbers>;
    let forwardGVNS: OPTIONAL<ForwardGVNS>;
    let globalCallReference: OPTIONAL<GlobalCallReference>;
    let cug_Interlock: OPTIONAL<CUG_Interlock>;
    let cug_OutgoingAccess: OPTIONAL<NULL>;
    let incomingSignallingBufferCopy: OPTIONAL<BOOLEAN> = InitiateCallAttemptArg._default_value_for_incomingSignallingBufferCopy;
    let ipRelatedInformation: OPTIONAL<IPRelatedInformation>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "destinationRoutingAddress": (_el: _Element): void => { destinationRoutingAddress = $._decode_implicit<DestinationRoutingAddress>(() => _decode_DestinationRoutingAddress)(_el); },
        "alertingPattern": (_el: _Element): void => { alertingPattern = $._decode_implicit<AlertingPattern>(() => _decode_AlertingPattern)(_el); },
        "iSDNAccessRelatedInformation": (_el: _Element): void => { iSDNAccessRelatedInformation = $._decode_implicit<ISDNAccessRelatedInformation>(() => _decode_ISDNAccessRelatedInformation)(_el); },
        "travellingClassMark": (_el: _Element): void => { travellingClassMark = $._decode_implicit<TravellingClassMark>(() => _decode_TravellingClassMark)(_el); },
        "extensions": (_el: _Element): void => { extensions = $._decode_implicit<Extensions>(() => _decode_Extensions)(_el); },
        "serviceInteractionIndicators": (_el: _Element): void => { serviceInteractionIndicators = $._decode_implicit<ServiceInteractionIndicators>(() => _decode_ServiceInteractionIndicators)(_el); },
        "callingPartyNumber": (_el: _Element): void => { callingPartyNumber = $._decode_implicit<CallingPartyNumber>(() => _decode_CallingPartyNumber)(_el); },
        "legToBeCreated": (_el: _Element): void => { legToBeCreated = $._decode_explicit<LegID>(() => _decode_LegID)(_el); },
        "newCallSegment": (_el: _Element): void => { newCallSegment = $._decode_implicit<CallSegmentID>(() => _decode_CallSegmentID)(_el); },
        "iNServiceCompatibilityResponse": (_el: _Element): void => { iNServiceCompatibilityResponse = $._decode_explicit<INServiceCompatibilityResponse>(() => _decode_INServiceCompatibilityResponse)(_el); },
        "serviceInteractionIndicatorsTwo": (_el: _Element): void => { serviceInteractionIndicatorsTwo = $._decode_implicit<ServiceInteractionIndicatorsTwo>(() => _decode_ServiceInteractionIndicatorsTwo)(_el); },
        "carrier": (_el: _Element): void => { carrier = $._decode_implicit<Carrier>(() => _decode_Carrier)(_el); },
        "correlationID": (_el: _Element): void => { correlationID = $._decode_implicit<CorrelationID>(() => _decode_CorrelationID)(_el); },
        "scfID": (_el: _Element): void => { scfID = $._decode_implicit<ScfID>(() => _decode_ScfID)(_el); },
        "callReference": (_el: _Element): void => { callReference = $._decode_implicit<CallReference>(() => _decode_CallReference)(_el); },
        "calledDirectoryNumber": (_el: _Element): void => { calledDirectoryNumber = $._decode_implicit<CalledDirectoryNumber>(() => _decode_CalledDirectoryNumber)(_el); },
        "bearerCapability": (_el: _Element): void => { bearerCapability = $._decode_explicit<BearerCapability>(() => _decode_BearerCapability)(_el); },
        "calledPartySubaddress": (_el: _Element): void => { calledPartySubaddress = $._decode_implicit<CalledPartySubaddress>(() => _decode_CalledPartySubaddress)(_el); },
        "connectionIdentifier": (_el: _Element): void => { connectionIdentifier = $._decode_implicit<ConnectionIdentifier>(() => _decode_ConnectionIdentifier)(_el); },
        "genericIdentifier": (_el: _Element): void => { genericIdentifier = $._decode_implicit<GenericIdentifier>(() => _decode_GenericIdentifier)(_el); },
        "qOSParameter": (_el: _Element): void => { qOSParameter = $._decode_implicit<QoSParameter>(() => _decode_QoSParameter)(_el); },
        "bISDNParameters": (_el: _Element): void => { bISDNParameters = $._decode_implicit<BISDNParameters>(() => _decode_BISDNParameters)(_el); },
        "originalCalledPartyID": (_el: _Element): void => { originalCalledPartyID = $._decode_implicit<OriginalCalledPartyID>(() => _decode_OriginalCalledPartyID)(_el); },
        "callingPartysCategory": (_el: _Element): void => { callingPartysCategory = $._decode_implicit<CallingPartysCategory>(() => _decode_CallingPartysCategory)(_el); },
        "redirectingPartyID": (_el: _Element): void => { redirectingPartyID = $._decode_implicit<RedirectingPartyID>(() => _decode_RedirectingPartyID)(_el); },
        "redirectionInformation": (_el: _Element): void => { redirectionInformation = $._decode_implicit<RedirectionInformation>(() => _decode_RedirectionInformation)(_el); },
        "displayInformation": (_el: _Element): void => { displayInformation = $._decode_implicit<DisplayInformation>(() => _decode_DisplayInformation)(_el); },
        "forwardCallIndicators": (_el: _Element): void => { forwardCallIndicators = $._decode_implicit<ForwardCallIndicators>(() => _decode_ForwardCallIndicators)(_el); },
        "genericNumbers": (_el: _Element): void => { genericNumbers = $._decode_implicit<GenericNumbers>(() => _decode_GenericNumbers)(_el); },
        "forwardGVNS": (_el: _Element): void => { forwardGVNS = $._decode_implicit<ForwardGVNS>(() => _decode_ForwardGVNS)(_el); },
        "globalCallReference": (_el: _Element): void => { globalCallReference = $._decode_implicit<GlobalCallReference>(() => _decode_GlobalCallReference)(_el); },
        "cug-Interlock": (_el: _Element): void => { cug_Interlock = $._decode_implicit<CUG_Interlock>(() => _decode_CUG_Interlock)(_el); },
        "cug-OutgoingAccess": (_el: _Element): void => { cug_OutgoingAccess = $._decode_implicit<NULL>(() => $._decodeNull)(_el); },
        "incomingSignallingBufferCopy": (_el: _Element): void => { incomingSignallingBufferCopy = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "ipRelatedInformation": (_el: _Element): void => { ipRelatedInformation = $._decode_implicit<IPRelatedInformation>(() => _decode_IPRelatedInformation)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_InitiateCallAttemptArg,
        _extension_additions_list_spec_for_InitiateCallAttemptArg,
        _root_component_type_list_2_spec_for_InitiateCallAttemptArg,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new InitiateCallAttemptArg(
        destinationRoutingAddress,
        alertingPattern,
        iSDNAccessRelatedInformation,
        travellingClassMark,
        extensions,
        serviceInteractionIndicators,
        callingPartyNumber,
        legToBeCreated,
        newCallSegment,
        iNServiceCompatibilityResponse,
        serviceInteractionIndicatorsTwo,
        carrier,
        correlationID,
        scfID,
        callReference,
        calledDirectoryNumber,
        bearerCapability,
        calledPartySubaddress,
        connectionIdentifier,
        genericIdentifier,
        qOSParameter,
        bISDNParameters,
        originalCalledPartyID,
        callingPartysCategory,
        redirectingPartyID,
        redirectionInformation,
        displayInformation,
        forwardCallIndicators,
        genericNumbers,
        forwardGVNS,
        globalCallReference,
        cug_Interlock,
        cug_OutgoingAccess,
        incomingSignallingBufferCopy,
        ipRelatedInformation,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_InitiateCallAttemptArg(el);
}

let _cached_encoder_for_InitiateCallAttemptArg: $.ASN1Encoder<InitiateCallAttemptArg> | null = null;

/**
 * @summary Encodes a(n) InitiateCallAttemptArg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The InitiateCallAttemptArg, encoded as an ASN.1 Element.
 */
export
function _encode_InitiateCallAttemptArg (value: InitiateCallAttemptArg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_InitiateCallAttemptArg) { _cached_encoder_for_InitiateCallAttemptArg = function (value: InitiateCallAttemptArg, elGetter: $.ASN1Encoder<InitiateCallAttemptArg>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(35 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_DestinationRoutingAddress, $.BER)(value.destinationRoutingAddress, $.BER);
    if (value.alertingPattern !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => _encode_AlertingPattern, $.BER)(value.alertingPattern, $.BER);
    }
    if (value.iSDNAccessRelatedInformation !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => _encode_ISDNAccessRelatedInformation, $.BER)(value.iSDNAccessRelatedInformation, $.BER);
    }
    if (value.travellingClassMark !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => _encode_TravellingClassMark, $.BER)(value.travellingClassMark, $.BER);
    }
    if (value.extensions !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 4, () => _encode_Extensions, $.BER)(value.extensions, $.BER);
    }
    if (value.serviceInteractionIndicators !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 29, () => _encode_ServiceInteractionIndicators, $.BER)(value.serviceInteractionIndicators, $.BER);
    }
    if (value.callingPartyNumber !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 30, () => _encode_CallingPartyNumber, $.BER)(value.callingPartyNumber, $.BER);
    }
    if (value.legToBeCreated !== undefined && !$.deepEq(value.legToBeCreated, InitiateCallAttemptArg._default_value_for_legToBeCreated)) {
        _components[_components_i++] = /* IF_DEFAULT */ $._encode_explicit(_TagClass.context, 5, () => _encode_LegID, $.BER)(value.legToBeCreated, $.BER);
    }
    if (value.newCallSegment !== undefined && !$.deepEq(value.newCallSegment, InitiateCallAttemptArg._default_value_for_newCallSegment)) {
        _components[_components_i++] = /* IF_DEFAULT */ $._encode_implicit(_TagClass.context, 6, () => _encode_CallSegmentID, $.BER)(value.newCallSegment, $.BER);
    }
    if (value.iNServiceCompatibilityResponse !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 7, () => _encode_INServiceCompatibilityResponse, $.BER)(value.iNServiceCompatibilityResponse, $.BER);
    }
    if (value.serviceInteractionIndicatorsTwo !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 8, () => _encode_ServiceInteractionIndicatorsTwo, $.BER)(value.serviceInteractionIndicatorsTwo, $.BER);
    }
    if (value.carrier !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 9, () => _encode_Carrier, $.BER)(value.carrier, $.BER);
    }
    if (value.correlationID !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 10, () => _encode_CorrelationID, $.BER)(value.correlationID, $.BER);
    }
    if (value.scfID !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 11, () => _encode_ScfID, $.BER)(value.scfID, $.BER);
    }
    if (value.callReference !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 12, () => _encode_CallReference, $.BER)(value.callReference, $.BER);
    }
    if (value.calledDirectoryNumber !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 13, () => _encode_CalledDirectoryNumber, $.BER)(value.calledDirectoryNumber, $.BER);
    }
    if (value.bearerCapability !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 60, () => _encode_BearerCapability, $.BER)(value.bearerCapability, $.BER);
    }
    if (value.calledPartySubaddress !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 61, () => _encode_CalledPartySubaddress, $.BER)(value.calledPartySubaddress, $.BER);
    }
    if (value.connectionIdentifier !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 62, () => _encode_ConnectionIdentifier, $.BER)(value.connectionIdentifier, $.BER);
    }
    if (value.genericIdentifier !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 63, () => _encode_GenericIdentifier, $.BER)(value.genericIdentifier, $.BER);
    }
    if (value.qOSParameter !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 64, () => _encode_QoSParameter, $.BER)(value.qOSParameter, $.BER);
    }
    if (value.bISDNParameters !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 65, () => _encode_BISDNParameters, $.BER)(value.bISDNParameters, $.BER);
    }
    if (value.originalCalledPartyID !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 14, () => _encode_OriginalCalledPartyID, $.BER)(value.originalCalledPartyID, $.BER);
    }
    if (value.callingPartysCategory !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 15, () => _encode_CallingPartysCategory, $.BER)(value.callingPartysCategory, $.BER);
    }
    if (value.redirectingPartyID !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 16, () => _encode_RedirectingPartyID, $.BER)(value.redirectingPartyID, $.BER);
    }
    if (value.redirectionInformation !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 17, () => _encode_RedirectionInformation, $.BER)(value.redirectionInformation, $.BER);
    }
    if (value.displayInformation !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 18, () => _encode_DisplayInformation, $.BER)(value.displayInformation, $.BER);
    }
    if (value.forwardCallIndicators !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 19, () => _encode_ForwardCallIndicators, $.BER)(value.forwardCallIndicators, $.BER);
    }
    if (value.genericNumbers !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 20, () => _encode_GenericNumbers, $.BER)(value.genericNumbers, $.BER);
    }
    if (value.forwardGVNS !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 21, () => _encode_ForwardGVNS, $.BER)(value.forwardGVNS, $.BER);
    }
    if (value.globalCallReference !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 23, () => _encode_GlobalCallReference, $.BER)(value.globalCallReference, $.BER);
    }
    if (value.cug_Interlock !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 24, () => _encode_CUG_Interlock, $.BER)(value.cug_Interlock, $.BER);
    }
    if (value.cug_OutgoingAccess !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 25, () => $._encodeNull, $.BER)(value.cug_OutgoingAccess, $.BER);
    }
    if (value.incomingSignallingBufferCopy !== undefined && !$.deepEq(value.incomingSignallingBufferCopy, InitiateCallAttemptArg._default_value_for_incomingSignallingBufferCopy)) {
        _components[_components_i++] = /* IF_DEFAULT */ $._encode_implicit(_TagClass.context, 26, () => $._encodeBoolean, $.BER)(value.incomingSignallingBufferCopy, $.BER);
    }
    if (value.ipRelatedInformation !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 27, () => _encode_IPRelatedInformation, $.BER)(value.ipRelatedInformation, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_InitiateCallAttemptArg(value, elGetter);
}


/* eslint-enable */
