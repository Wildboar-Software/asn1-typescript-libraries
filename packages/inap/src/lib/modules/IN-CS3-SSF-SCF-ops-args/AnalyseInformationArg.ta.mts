/* eslint-disable */
import {
    type OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { DestinationRoutingAddress, _decode_DestinationRoutingAddress, _encode_DestinationRoutingAddress } from "../IN-CS3-SSF-SCF-datatypes/DestinationRoutingAddress.ta.mjs";
// export { DestinationRoutingAddress, _decode_DestinationRoutingAddress, _encode_DestinationRoutingAddress } from "../IN-CS3-SSF-SCF-datatypes/DestinationRoutingAddress.ta.mjs";
import { AlertingPattern, _decode_AlertingPattern, _encode_AlertingPattern } from "../IN-CS3-SSF-SCF-datatypes/AlertingPattern.ta.mjs";
// export { AlertingPattern, _decode_AlertingPattern, _encode_AlertingPattern } from "../IN-CS3-SSF-SCF-datatypes/AlertingPattern.ta.mjs";
import { ISDNAccessRelatedInformation, _decode_ISDNAccessRelatedInformation, _encode_ISDNAccessRelatedInformation } from "../IN-CS3-SSF-SCF-datatypes/ISDNAccessRelatedInformation.ta.mjs";
// export { ISDNAccessRelatedInformation, _decode_ISDNAccessRelatedInformation, _encode_ISDNAccessRelatedInformation } from "../IN-CS3-SSF-SCF-datatypes/ISDNAccessRelatedInformation.ta.mjs";
import { OriginalCalledPartyID, _decode_OriginalCalledPartyID, _encode_OriginalCalledPartyID } from "../IN-CS3-SSF-SCF-datatypes/OriginalCalledPartyID.ta.mjs";
// export { OriginalCalledPartyID, _decode_OriginalCalledPartyID, _encode_OriginalCalledPartyID } from "../IN-CS3-SSF-SCF-datatypes/OriginalCalledPartyID.ta.mjs";
import { Extensions, _decode_Extensions, _encode_Extensions } from "../IN-CS3-common-datatypes/Extensions.ta.mjs";
// export { Extensions, _decode_Extensions, _encode_Extensions } from "../IN-CS3-common-datatypes/Extensions.ta.mjs";
import { CallingPartyNumber, _decode_CallingPartyNumber, _encode_CallingPartyNumber } from "../IN-CS3-SSF-SCF-datatypes/CallingPartyNumber.ta.mjs";
// export { CallingPartyNumber, _decode_CallingPartyNumber, _encode_CallingPartyNumber } from "../IN-CS3-SSF-SCF-datatypes/CallingPartyNumber.ta.mjs";
import { CallingPartysCategory, _decode_CallingPartysCategory, _encode_CallingPartysCategory } from "../IN-CS3-SSF-SCF-datatypes/CallingPartysCategory.ta.mjs";
// export { CallingPartysCategory, _decode_CallingPartysCategory, _encode_CallingPartysCategory } from "../IN-CS3-SSF-SCF-datatypes/CallingPartysCategory.ta.mjs";
import { CalledPartyNumber, _decode_CalledPartyNumber, _encode_CalledPartyNumber } from "../IN-CS3-SSF-SCF-datatypes/CalledPartyNumber.ta.mjs";
// export { CalledPartyNumber, _decode_CalledPartyNumber, _encode_CalledPartyNumber } from "../IN-CS3-SSF-SCF-datatypes/CalledPartyNumber.ta.mjs";
import { ChargeNumber, _decode_ChargeNumber, _encode_ChargeNumber } from "../IN-CS3-SSF-SCF-datatypes/ChargeNumber.ta.mjs";
// export { ChargeNumber, _decode_ChargeNumber, _encode_ChargeNumber } from "../IN-CS3-SSF-SCF-datatypes/ChargeNumber.ta.mjs";
import { TravellingClassMark, _decode_TravellingClassMark, _encode_TravellingClassMark } from "../IN-CS3-SSF-SCF-datatypes/TravellingClassMark.ta.mjs";
// export { TravellingClassMark, _decode_TravellingClassMark, _encode_TravellingClassMark } from "../IN-CS3-SSF-SCF-datatypes/TravellingClassMark.ta.mjs";
import { Carrier, _decode_Carrier, _encode_Carrier } from "../IN-CS3-SSF-SCF-datatypes/Carrier.ta.mjs";
// export { Carrier, _decode_Carrier, _encode_Carrier } from "../IN-CS3-SSF-SCF-datatypes/Carrier.ta.mjs";
import { ServiceInteractionIndicators, _decode_ServiceInteractionIndicators, _encode_ServiceInteractionIndicators } from "../IN-CS3-SSF-SCF-datatypes/ServiceInteractionIndicators.ta.mjs";
// export { ServiceInteractionIndicators, _decode_ServiceInteractionIndicators, _encode_ServiceInteractionIndicators } from "../IN-CS3-SSF-SCF-datatypes/ServiceInteractionIndicators.ta.mjs";
import { INServiceCompatibilityResponse, _decode_INServiceCompatibilityResponse, _encode_INServiceCompatibilityResponse } from "../IN-CS3-SSF-SCF-datatypes/INServiceCompatibilityResponse.ta.mjs";
// export { INServiceCompatibilityResponse, _decode_INServiceCompatibilityResponse, _encode_INServiceCompatibilityResponse } from "../IN-CS3-SSF-SCF-datatypes/INServiceCompatibilityResponse.ta.mjs";
import { ForwardGVNS, _decode_ForwardGVNS, _encode_ForwardGVNS } from "../IN-CS3-SSF-SCF-datatypes/ForwardGVNS.ta.mjs";
// export { ForwardGVNS, _decode_ForwardGVNS, _encode_ForwardGVNS } from "../IN-CS3-SSF-SCF-datatypes/ForwardGVNS.ta.mjs";
import { BackwardGVNS, _decode_BackwardGVNS, _encode_BackwardGVNS } from "../IN-CS3-SSF-SCF-datatypes/BackwardGVNS.ta.mjs";
// export { BackwardGVNS, _decode_BackwardGVNS, _encode_BackwardGVNS } from "../IN-CS3-SSF-SCF-datatypes/BackwardGVNS.ta.mjs";
import { ServiceInteractionIndicatorsTwo, _decode_ServiceInteractionIndicatorsTwo, _encode_ServiceInteractionIndicatorsTwo } from "../IN-CS3-SSF-SCF-datatypes/ServiceInteractionIndicatorsTwo.ta.mjs";
// export { ServiceInteractionIndicatorsTwo, _decode_ServiceInteractionIndicatorsTwo, _encode_ServiceInteractionIndicatorsTwo } from "../IN-CS3-SSF-SCF-datatypes/ServiceInteractionIndicatorsTwo.ta.mjs";
import { CorrelationID, _decode_CorrelationID, _encode_CorrelationID } from "../IN-CS3-SSF-SCF-datatypes/CorrelationID.ta.mjs";
// export { CorrelationID, _decode_CorrelationID, _encode_CorrelationID } from "../IN-CS3-SSF-SCF-datatypes/CorrelationID.ta.mjs";
import { ScfID, _decode_ScfID, _encode_ScfID } from "../IN-CS3-SSF-SCF-datatypes/ScfID.ta.mjs";
// export { ScfID, _decode_ScfID, _encode_ScfID } from "../IN-CS3-SSF-SCF-datatypes/ScfID.ta.mjs";
import { CallSegmentID, _decode_CallSegmentID, _encode_CallSegmentID } from "../IN-CS3-SSF-SCF-datatypes/CallSegmentID.ta.mjs";
// export { CallSegmentID, _decode_CallSegmentID, _encode_CallSegmentID } from "../IN-CS3-SSF-SCF-datatypes/CallSegmentID.ta.mjs";
import { LegID, _decode_LegID, _encode_LegID } from "../IN-CS3-SSF-SCF-datatypes/LegID.ta.mjs";
// export { LegID, _decode_LegID, _encode_LegID } from "../IN-CS3-SSF-SCF-datatypes/LegID.ta.mjs";


/**
 * @summary AnalyseInformationArg
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AnalyseInformationArg ::= SEQUENCE {
 *   destinationRoutingAddress        [0]  DestinationRoutingAddress,
 *   alertingPattern                  [1]  AlertingPattern OPTIONAL,
 *   iSDNAccessRelatedInformation
 *     [2]  ISDNAccessRelatedInformation OPTIONAL,
 *   originalCalledPartyID            [3]  OriginalCalledPartyID OPTIONAL,
 *   extensions                       [4]  Extensions OPTIONAL,
 *   callingPartyNumber               [5]  CallingPartyNumber OPTIONAL,
 *   callingPartysCategory            [6]  CallingPartysCategory OPTIONAL,
 *   calledPartyNumber                [7]  CalledPartyNumber OPTIONAL,
 *   chargeNumber                     [8]  ChargeNumber OPTIONAL,
 *   travellingClassMark              [9]  TravellingClassMark OPTIONAL,
 *   carrier                          [10]  Carrier OPTIONAL,
 *   serviceInteractionIndicators
 *     [11]  ServiceInteractionIndicators OPTIONAL,
 *   iNServiceCompatibilityResponse
 *     [12]  INServiceCompatibilityResponse OPTIONAL,
 *   forwardGVNS                      [13]  ForwardGVNS OPTIONAL,
 *   backwardGVNS                     [14]  BackwardGVNS OPTIONAL,
 *   serviceInteractionIndicatorsTwo
 *     [15]  ServiceInteractionIndicatorsTwo OPTIONAL,
 *   correlationID                    [16]  CorrelationID OPTIONAL,
 *   scfID                            [17]  ScfID OPTIONAL,
 *   callSegmentID                    [18]  CallSegmentID OPTIONAL,
 *   legToBeCreated                   [19]  LegID OPTIONAL,
 *   ...
 * }
 * ```
 * 
 * @class
 */
export
class AnalyseInformationArg {
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
     * @summary `originalCalledPartyID`.
     * @public
     * @readonly
     */
    readonly originalCalledPartyID: OPTIONAL<OriginalCalledPartyID>;
    /**
     * @summary `extensions`.
     * @public
     * @readonly
     */
    readonly extensions: OPTIONAL<Extensions>;
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
     * @summary `calledPartyNumber`.
     * @public
     * @readonly
     */
    readonly calledPartyNumber: OPTIONAL<CalledPartyNumber>;
    /**
     * @summary `chargeNumber`.
     * @public
     * @readonly
     */
    readonly chargeNumber: OPTIONAL<ChargeNumber>;
    /**
     * @summary `travellingClassMark`.
     * @public
     * @readonly
     */
    readonly travellingClassMark: OPTIONAL<TravellingClassMark>;
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
     * @summary `serviceInteractionIndicatorsTwo`.
     * @public
     * @readonly
     */
    readonly serviceInteractionIndicatorsTwo: OPTIONAL<ServiceInteractionIndicatorsTwo>;
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
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        destinationRoutingAddress: DestinationRoutingAddress,
        alertingPattern?: OPTIONAL<AlertingPattern>,
        iSDNAccessRelatedInformation?: OPTIONAL<ISDNAccessRelatedInformation>,
        originalCalledPartyID?: OPTIONAL<OriginalCalledPartyID>,
        extensions?: OPTIONAL<Extensions>,
        callingPartyNumber?: OPTIONAL<CallingPartyNumber>,
        callingPartysCategory?: OPTIONAL<CallingPartysCategory>,
        calledPartyNumber?: OPTIONAL<CalledPartyNumber>,
        chargeNumber?: OPTIONAL<ChargeNumber>,
        travellingClassMark?: OPTIONAL<TravellingClassMark>,
        carrier?: OPTIONAL<Carrier>,
        serviceInteractionIndicators?: OPTIONAL<ServiceInteractionIndicators>,
        iNServiceCompatibilityResponse?: OPTIONAL<INServiceCompatibilityResponse>,
        forwardGVNS?: OPTIONAL<ForwardGVNS>,
        backwardGVNS?: OPTIONAL<BackwardGVNS>,
        serviceInteractionIndicatorsTwo?: OPTIONAL<ServiceInteractionIndicatorsTwo>,
        correlationID?: OPTIONAL<CorrelationID>,
        scfID?: OPTIONAL<ScfID>,
        callSegmentID?: OPTIONAL<CallSegmentID>,
        legToBeCreated?: OPTIONAL<LegID>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.destinationRoutingAddress = destinationRoutingAddress;
        this.alertingPattern = alertingPattern;
        this.iSDNAccessRelatedInformation = iSDNAccessRelatedInformation;
        this.originalCalledPartyID = originalCalledPartyID;
        this.extensions = extensions;
        this.callingPartyNumber = callingPartyNumber;
        this.callingPartysCategory = callingPartysCategory;
        this.calledPartyNumber = calledPartyNumber;
        this.chargeNumber = chargeNumber;
        this.travellingClassMark = travellingClassMark;
        this.carrier = carrier;
        this.serviceInteractionIndicators = serviceInteractionIndicators;
        this.iNServiceCompatibilityResponse = iNServiceCompatibilityResponse;
        this.forwardGVNS = forwardGVNS;
        this.backwardGVNS = backwardGVNS;
        this.serviceInteractionIndicatorsTwo = serviceInteractionIndicatorsTwo;
        this.correlationID = correlationID;
        this.scfID = scfID;
        this.callSegmentID = callSegmentID;
        this.legToBeCreated = legToBeCreated;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a AnalyseInformationArg
     * @description
     * 
     * This takes an `object` and converts it to a `AnalyseInformationArg`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AnalyseInformationArg`.
     * @returns {AnalyseInformationArg}
     */
    public static _from_object (_o: { [_K in keyof (AnalyseInformationArg)]: (AnalyseInformationArg)[_K] }): AnalyseInformationArg {
        return new AnalyseInformationArg(_o.destinationRoutingAddress, _o.alertingPattern, _o.iSDNAccessRelatedInformation, _o.originalCalledPartyID, _o.extensions, _o.callingPartyNumber, _o.callingPartysCategory, _o.calledPartyNumber, _o.chargeNumber, _o.travellingClassMark, _o.carrier, _o.serviceInteractionIndicators, _o.iNServiceCompatibilityResponse, _o.forwardGVNS, _o.backwardGVNS, _o.serviceInteractionIndicatorsTwo, _o.correlationID, _o.scfID, _o.callSegmentID, _o.legToBeCreated, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of AnalyseInformationArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_AnalyseInformationArg: $.ComponentSpec[] = [
    new $.ComponentSpec("destinationRoutingAddress", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("alertingPattern", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("iSDNAccessRelatedInformation", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("originalCalledPartyID", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("callingPartyNumber", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("callingPartysCategory", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("calledPartyNumber", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("chargeNumber", true, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("travellingClassMark", true, $.hasTag(_TagClass.context, 9)),
    new $.ComponentSpec("carrier", true, $.hasTag(_TagClass.context, 10)),
    new $.ComponentSpec("serviceInteractionIndicators", true, $.hasTag(_TagClass.context, 11)),
    new $.ComponentSpec("iNServiceCompatibilityResponse", true, $.hasTag(_TagClass.context, 12)),
    new $.ComponentSpec("forwardGVNS", true, $.hasTag(_TagClass.context, 13)),
    new $.ComponentSpec("backwardGVNS", true, $.hasTag(_TagClass.context, 14)),
    new $.ComponentSpec("serviceInteractionIndicatorsTwo", true, $.hasTag(_TagClass.context, 15)),
    new $.ComponentSpec("correlationID", true, $.hasTag(_TagClass.context, 16)),
    new $.ComponentSpec("scfID", true, $.hasTag(_TagClass.context, 17)),
    new $.ComponentSpec("callSegmentID", true, $.hasTag(_TagClass.context, 18)),
    new $.ComponentSpec("legToBeCreated", true, $.hasTag(_TagClass.context, 19))
];

/**
 * @summary The Trailing Root Component Types of AnalyseInformationArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_AnalyseInformationArg: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of AnalyseInformationArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_AnalyseInformationArg: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_AnalyseInformationArg: $.ASN1Decoder<AnalyseInformationArg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AnalyseInformationArg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AnalyseInformationArg (el: _Element): AnalyseInformationArg {
    if (!_cached_decoder_for_AnalyseInformationArg) { _cached_decoder_for_AnalyseInformationArg = function (el: _Element): AnalyseInformationArg {
    let destinationRoutingAddress!: DestinationRoutingAddress;
    let alertingPattern: OPTIONAL<AlertingPattern>;
    let iSDNAccessRelatedInformation: OPTIONAL<ISDNAccessRelatedInformation>;
    let originalCalledPartyID: OPTIONAL<OriginalCalledPartyID>;
    let extensions: OPTIONAL<Extensions>;
    let callingPartyNumber: OPTIONAL<CallingPartyNumber>;
    let callingPartysCategory: OPTIONAL<CallingPartysCategory>;
    let calledPartyNumber: OPTIONAL<CalledPartyNumber>;
    let chargeNumber: OPTIONAL<ChargeNumber>;
    let travellingClassMark: OPTIONAL<TravellingClassMark>;
    let carrier: OPTIONAL<Carrier>;
    let serviceInteractionIndicators: OPTIONAL<ServiceInteractionIndicators>;
    let iNServiceCompatibilityResponse: OPTIONAL<INServiceCompatibilityResponse>;
    let forwardGVNS: OPTIONAL<ForwardGVNS>;
    let backwardGVNS: OPTIONAL<BackwardGVNS>;
    let serviceInteractionIndicatorsTwo: OPTIONAL<ServiceInteractionIndicatorsTwo>;
    let correlationID: OPTIONAL<CorrelationID>;
    let scfID: OPTIONAL<ScfID>;
    let callSegmentID: OPTIONAL<CallSegmentID>;
    let legToBeCreated: OPTIONAL<LegID>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "destinationRoutingAddress": (_el: _Element): void => { destinationRoutingAddress = $._decode_implicit<DestinationRoutingAddress>(() => _decode_DestinationRoutingAddress)(_el); },
        "alertingPattern": (_el: _Element): void => { alertingPattern = $._decode_implicit<AlertingPattern>(() => _decode_AlertingPattern)(_el); },
        "iSDNAccessRelatedInformation": (_el: _Element): void => { iSDNAccessRelatedInformation = $._decode_implicit<ISDNAccessRelatedInformation>(() => _decode_ISDNAccessRelatedInformation)(_el); },
        "originalCalledPartyID": (_el: _Element): void => { originalCalledPartyID = $._decode_implicit<OriginalCalledPartyID>(() => _decode_OriginalCalledPartyID)(_el); },
        "extensions": (_el: _Element): void => { extensions = $._decode_implicit<Extensions>(() => _decode_Extensions)(_el); },
        "callingPartyNumber": (_el: _Element): void => { callingPartyNumber = $._decode_implicit<CallingPartyNumber>(() => _decode_CallingPartyNumber)(_el); },
        "callingPartysCategory": (_el: _Element): void => { callingPartysCategory = $._decode_implicit<CallingPartysCategory>(() => _decode_CallingPartysCategory)(_el); },
        "calledPartyNumber": (_el: _Element): void => { calledPartyNumber = $._decode_implicit<CalledPartyNumber>(() => _decode_CalledPartyNumber)(_el); },
        "chargeNumber": (_el: _Element): void => { chargeNumber = $._decode_implicit<ChargeNumber>(() => _decode_ChargeNumber)(_el); },
        "travellingClassMark": (_el: _Element): void => { travellingClassMark = $._decode_implicit<TravellingClassMark>(() => _decode_TravellingClassMark)(_el); },
        "carrier": (_el: _Element): void => { carrier = $._decode_implicit<Carrier>(() => _decode_Carrier)(_el); },
        "serviceInteractionIndicators": (_el: _Element): void => { serviceInteractionIndicators = $._decode_implicit<ServiceInteractionIndicators>(() => _decode_ServiceInteractionIndicators)(_el); },
        "iNServiceCompatibilityResponse": (_el: _Element): void => { iNServiceCompatibilityResponse = $._decode_explicit<INServiceCompatibilityResponse>(() => _decode_INServiceCompatibilityResponse)(_el); },
        "forwardGVNS": (_el: _Element): void => { forwardGVNS = $._decode_implicit<ForwardGVNS>(() => _decode_ForwardGVNS)(_el); },
        "backwardGVNS": (_el: _Element): void => { backwardGVNS = $._decode_implicit<BackwardGVNS>(() => _decode_BackwardGVNS)(_el); },
        "serviceInteractionIndicatorsTwo": (_el: _Element): void => { serviceInteractionIndicatorsTwo = $._decode_implicit<ServiceInteractionIndicatorsTwo>(() => _decode_ServiceInteractionIndicatorsTwo)(_el); },
        "correlationID": (_el: _Element): void => { correlationID = $._decode_implicit<CorrelationID>(() => _decode_CorrelationID)(_el); },
        "scfID": (_el: _Element): void => { scfID = $._decode_implicit<ScfID>(() => _decode_ScfID)(_el); },
        "callSegmentID": (_el: _Element): void => { callSegmentID = $._decode_implicit<CallSegmentID>(() => _decode_CallSegmentID)(_el); },
        "legToBeCreated": (_el: _Element): void => { legToBeCreated = $._decode_explicit<LegID>(() => _decode_LegID)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_AnalyseInformationArg,
        _extension_additions_list_spec_for_AnalyseInformationArg,
        _root_component_type_list_2_spec_for_AnalyseInformationArg,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new AnalyseInformationArg(
        destinationRoutingAddress,
        alertingPattern,
        iSDNAccessRelatedInformation,
        originalCalledPartyID,
        extensions,
        callingPartyNumber,
        callingPartysCategory,
        calledPartyNumber,
        chargeNumber,
        travellingClassMark,
        carrier,
        serviceInteractionIndicators,
        iNServiceCompatibilityResponse,
        forwardGVNS,
        backwardGVNS,
        serviceInteractionIndicatorsTwo,
        correlationID,
        scfID,
        callSegmentID,
        legToBeCreated,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_AnalyseInformationArg(el);
}

let _cached_encoder_for_AnalyseInformationArg: $.ASN1Encoder<AnalyseInformationArg> | null = null;

/**
 * @summary Encodes a(n) AnalyseInformationArg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AnalyseInformationArg, encoded as an ASN.1 Element.
 */
export
function _encode_AnalyseInformationArg (value: AnalyseInformationArg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AnalyseInformationArg) { _cached_encoder_for_AnalyseInformationArg = function (value: AnalyseInformationArg, elGetter: $.ASN1Encoder<AnalyseInformationArg>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(20 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_DestinationRoutingAddress, $.BER)(value.destinationRoutingAddress, $.BER);
    if (value.alertingPattern !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => _encode_AlertingPattern, $.BER)(value.alertingPattern, $.BER);
    }
    if (value.iSDNAccessRelatedInformation !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => _encode_ISDNAccessRelatedInformation, $.BER)(value.iSDNAccessRelatedInformation, $.BER);
    }
    if (value.originalCalledPartyID !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => _encode_OriginalCalledPartyID, $.BER)(value.originalCalledPartyID, $.BER);
    }
    if (value.extensions !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 4, () => _encode_Extensions, $.BER)(value.extensions, $.BER);
    }
    if (value.callingPartyNumber !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 5, () => _encode_CallingPartyNumber, $.BER)(value.callingPartyNumber, $.BER);
    }
    if (value.callingPartysCategory !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 6, () => _encode_CallingPartysCategory, $.BER)(value.callingPartysCategory, $.BER);
    }
    if (value.calledPartyNumber !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 7, () => _encode_CalledPartyNumber, $.BER)(value.calledPartyNumber, $.BER);
    }
    if (value.chargeNumber !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 8, () => _encode_ChargeNumber, $.BER)(value.chargeNumber, $.BER);
    }
    if (value.travellingClassMark !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 9, () => _encode_TravellingClassMark, $.BER)(value.travellingClassMark, $.BER);
    }
    if (value.carrier !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 10, () => _encode_Carrier, $.BER)(value.carrier, $.BER);
    }
    if (value.serviceInteractionIndicators !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 11, () => _encode_ServiceInteractionIndicators, $.BER)(value.serviceInteractionIndicators, $.BER);
    }
    if (value.iNServiceCompatibilityResponse !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 12, () => _encode_INServiceCompatibilityResponse, $.BER)(value.iNServiceCompatibilityResponse, $.BER);
    }
    if (value.forwardGVNS !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 13, () => _encode_ForwardGVNS, $.BER)(value.forwardGVNS, $.BER);
    }
    if (value.backwardGVNS !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 14, () => _encode_BackwardGVNS, $.BER)(value.backwardGVNS, $.BER);
    }
    if (value.serviceInteractionIndicatorsTwo !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 15, () => _encode_ServiceInteractionIndicatorsTwo, $.BER)(value.serviceInteractionIndicatorsTwo, $.BER);
    }
    if (value.correlationID !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 16, () => _encode_CorrelationID, $.BER)(value.correlationID, $.BER);
    }
    if (value.scfID !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 17, () => _encode_ScfID, $.BER)(value.scfID, $.BER);
    }
    if (value.callSegmentID !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 18, () => _encode_CallSegmentID, $.BER)(value.callSegmentID, $.BER);
    }
    if (value.legToBeCreated !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 19, () => _encode_LegID, $.BER)(value.legToBeCreated, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_AnalyseInformationArg(value, elGetter);
}


/* eslint-enable */
