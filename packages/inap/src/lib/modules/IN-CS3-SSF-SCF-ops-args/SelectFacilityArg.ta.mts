/* eslint-disable */
import {
    type OPTIONAL,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { AlertingPattern, _decode_AlertingPattern, _encode_AlertingPattern } from "../IN-CS3-SSF-SCF-datatypes/AlertingPattern.ta.mjs";
// export { AlertingPattern, _decode_AlertingPattern, _encode_AlertingPattern } from "../IN-CS3-SSF-SCF-datatypes/AlertingPattern.ta.mjs";
import { CalledPartyNumber, _decode_CalledPartyNumber, _encode_CalledPartyNumber } from "../IN-CS3-SSF-SCF-datatypes/CalledPartyNumber.ta.mjs";
// export { CalledPartyNumber, _decode_CalledPartyNumber, _encode_CalledPartyNumber } from "../IN-CS3-SSF-SCF-datatypes/CalledPartyNumber.ta.mjs";
import { ISDNAccessRelatedInformation, _decode_ISDNAccessRelatedInformation, _encode_ISDNAccessRelatedInformation } from "../IN-CS3-SSF-SCF-datatypes/ISDNAccessRelatedInformation.ta.mjs";
// export { ISDNAccessRelatedInformation, _decode_ISDNAccessRelatedInformation, _encode_ISDNAccessRelatedInformation } from "../IN-CS3-SSF-SCF-datatypes/ISDNAccessRelatedInformation.ta.mjs";
import { FacilityGroup, _decode_FacilityGroup, _encode_FacilityGroup } from "../IN-CS3-SSF-SCF-datatypes/FacilityGroup.ta.mjs";
// export { FacilityGroup, _decode_FacilityGroup, _encode_FacilityGroup } from "../IN-CS3-SSF-SCF-datatypes/FacilityGroup.ta.mjs";
import { FacilityGroupMember, _decode_FacilityGroupMember, _encode_FacilityGroupMember } from "../IN-CS3-SSF-SCF-datatypes/FacilityGroupMember.ta.mjs";
// export { FacilityGroupMember, _decode_FacilityGroupMember, _encode_FacilityGroupMember } from "../IN-CS3-SSF-SCF-datatypes/FacilityGroupMember.ta.mjs";
import { OriginalCalledPartyID, _decode_OriginalCalledPartyID, _encode_OriginalCalledPartyID } from "../IN-CS3-SSF-SCF-datatypes/OriginalCalledPartyID.ta.mjs";
// export { OriginalCalledPartyID, _decode_OriginalCalledPartyID, _encode_OriginalCalledPartyID } from "../IN-CS3-SSF-SCF-datatypes/OriginalCalledPartyID.ta.mjs";
import { Extensions, _decode_Extensions, _encode_Extensions } from "../IN-CS3-common-datatypes/Extensions.ta.mjs";
// export { Extensions, _decode_Extensions, _encode_Extensions } from "../IN-CS3-common-datatypes/Extensions.ta.mjs";
import { DisplayInformation, _decode_DisplayInformation, _encode_DisplayInformation } from "../IN-CS3-SSF-SCF-datatypes/DisplayInformation.ta.mjs";
// export { DisplayInformation, _decode_DisplayInformation, _encode_DisplayInformation } from "../IN-CS3-SSF-SCF-datatypes/DisplayInformation.ta.mjs";
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
 * @summary SelectFacilityArg
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SelectFacilityArg ::= SEQUENCE {
 *   alertingPattern                  [0]  AlertingPattern OPTIONAL,
 *   destinationNumberRoutingAddress  [1]  CalledPartyNumber OPTIONAL,
 *   iSDNAccessRelatedInformation
 *     [2]  ISDNAccessRelatedInformation OPTIONAL,
 *   calledFacilityGroup              [3]  FacilityGroup OPTIONAL,
 *   calledFacilityGroupMember        [4]  FacilityGroupMember OPTIONAL,
 *   originalCalledPartyID            [5]  OriginalCalledPartyID OPTIONAL,
 *   extensions                       [6]  Extensions OPTIONAL,
 *   displayInformation               [7]  DisplayInformation OPTIONAL,
 *   serviceInteractionIndicators
 *     [8]  ServiceInteractionIndicators OPTIONAL,
 *   iNServiceCompatibilityResponse   [9]  INServiceCompatibilityResponse OPTIONAL,
 *   forwardGVNS                      [10]  ForwardGVNS OPTIONAL,
 *   backwardGVNS                     [11]  BackwardGVNS OPTIONAL,
 *   serviceInteractionIndicatorsTwo
 *     [12]  ServiceInteractionIndicatorsTwo OPTIONAL,
 *   correlationID                    [13]  CorrelationID OPTIONAL,
 *   scfID                            [14]  ScfID OPTIONAL,
 *   callSegmentID                    [15]  CallSegmentID OPTIONAL,
 *   legToBeCreated                   [16]  LegID OPTIONAL,
 *   ...
 * }
 * ```
 * 
 * @class
 */
export
class SelectFacilityArg {
    /**
     * @summary `alertingPattern`.
     * @public
     * @readonly
     */
    readonly alertingPattern: OPTIONAL<AlertingPattern>;
    /**
     * @summary `destinationNumberRoutingAddress`.
     * @public
     * @readonly
     */
    readonly destinationNumberRoutingAddress: OPTIONAL<CalledPartyNumber>;
    /**
     * @summary `iSDNAccessRelatedInformation`.
     * @public
     * @readonly
     */
    readonly iSDNAccessRelatedInformation: OPTIONAL<ISDNAccessRelatedInformation>;
    /**
     * @summary `calledFacilityGroup`.
     * @public
     * @readonly
     */
    readonly calledFacilityGroup: OPTIONAL<FacilityGroup>;
    /**
     * @summary `calledFacilityGroupMember`.
     * @public
     * @readonly
     */
    readonly calledFacilityGroupMember: OPTIONAL<FacilityGroupMember>;
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
     * @summary `displayInformation`.
     * @public
     * @readonly
     */
    readonly displayInformation: OPTIONAL<DisplayInformation>;
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
        alertingPattern?: OPTIONAL<AlertingPattern>,
        destinationNumberRoutingAddress?: OPTIONAL<CalledPartyNumber>,
        iSDNAccessRelatedInformation?: OPTIONAL<ISDNAccessRelatedInformation>,
        calledFacilityGroup?: OPTIONAL<FacilityGroup>,
        calledFacilityGroupMember?: OPTIONAL<FacilityGroupMember>,
        originalCalledPartyID?: OPTIONAL<OriginalCalledPartyID>,
        extensions?: OPTIONAL<Extensions>,
        displayInformation?: OPTIONAL<DisplayInformation>,
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
        this.alertingPattern = alertingPattern;
        this.destinationNumberRoutingAddress = destinationNumberRoutingAddress;
        this.iSDNAccessRelatedInformation = iSDNAccessRelatedInformation;
        this.calledFacilityGroup = calledFacilityGroup;
        this.calledFacilityGroupMember = calledFacilityGroupMember;
        this.originalCalledPartyID = originalCalledPartyID;
        this.extensions = extensions;
        this.displayInformation = displayInformation;
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
     * @summary Restructures an object into a SelectFacilityArg
     * @description
     * 
     * This takes an `object` and converts it to a `SelectFacilityArg`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SelectFacilityArg`.
     * @returns {SelectFacilityArg}
     */
    public static _from_object (_o: { [_K in keyof (SelectFacilityArg)]: (SelectFacilityArg)[_K] }): SelectFacilityArg {
        return new SelectFacilityArg(_o.alertingPattern, _o.destinationNumberRoutingAddress, _o.iSDNAccessRelatedInformation, _o.calledFacilityGroup, _o.calledFacilityGroupMember, _o.originalCalledPartyID, _o.extensions, _o.displayInformation, _o.serviceInteractionIndicators, _o.iNServiceCompatibilityResponse, _o.forwardGVNS, _o.backwardGVNS, _o.serviceInteractionIndicatorsTwo, _o.correlationID, _o.scfID, _o.callSegmentID, _o.legToBeCreated, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of SelectFacilityArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_SelectFacilityArg: $.ComponentSpec[] = [
    new $.ComponentSpec("alertingPattern", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("destinationNumberRoutingAddress", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("iSDNAccessRelatedInformation", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("calledFacilityGroup", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("calledFacilityGroupMember", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("originalCalledPartyID", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("displayInformation", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("serviceInteractionIndicators", true, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("iNServiceCompatibilityResponse", true, $.hasTag(_TagClass.context, 9)),
    new $.ComponentSpec("forwardGVNS", true, $.hasTag(_TagClass.context, 10)),
    new $.ComponentSpec("backwardGVNS", true, $.hasTag(_TagClass.context, 11)),
    new $.ComponentSpec("serviceInteractionIndicatorsTwo", true, $.hasTag(_TagClass.context, 12)),
    new $.ComponentSpec("correlationID", true, $.hasTag(_TagClass.context, 13)),
    new $.ComponentSpec("scfID", true, $.hasTag(_TagClass.context, 14)),
    new $.ComponentSpec("callSegmentID", true, $.hasTag(_TagClass.context, 15)),
    new $.ComponentSpec("legToBeCreated", true, $.hasTag(_TagClass.context, 16))
];

/**
 * @summary The Trailing Root Component Types of SelectFacilityArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_SelectFacilityArg: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of SelectFacilityArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_SelectFacilityArg: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_SelectFacilityArg: $.ASN1Decoder<SelectFacilityArg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SelectFacilityArg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SelectFacilityArg (el: _Element): SelectFacilityArg {
    if (!_cached_decoder_for_SelectFacilityArg) { _cached_decoder_for_SelectFacilityArg = function (el: _Element): SelectFacilityArg {
    let alertingPattern: OPTIONAL<AlertingPattern>;
    let destinationNumberRoutingAddress: OPTIONAL<CalledPartyNumber>;
    let iSDNAccessRelatedInformation: OPTIONAL<ISDNAccessRelatedInformation>;
    let calledFacilityGroup: OPTIONAL<FacilityGroup>;
    let calledFacilityGroupMember: OPTIONAL<FacilityGroupMember>;
    let originalCalledPartyID: OPTIONAL<OriginalCalledPartyID>;
    let extensions: OPTIONAL<Extensions>;
    let displayInformation: OPTIONAL<DisplayInformation>;
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
        "alertingPattern": (_el: _Element): void => { alertingPattern = $._decode_implicit<AlertingPattern>(() => _decode_AlertingPattern)(_el); },
        "destinationNumberRoutingAddress": (_el: _Element): void => { destinationNumberRoutingAddress = $._decode_implicit<CalledPartyNumber>(() => _decode_CalledPartyNumber)(_el); },
        "iSDNAccessRelatedInformation": (_el: _Element): void => { iSDNAccessRelatedInformation = $._decode_implicit<ISDNAccessRelatedInformation>(() => _decode_ISDNAccessRelatedInformation)(_el); },
        "calledFacilityGroup": (_el: _Element): void => { calledFacilityGroup = $._decode_explicit<FacilityGroup>(() => _decode_FacilityGroup)(_el); },
        "calledFacilityGroupMember": (_el: _Element): void => { calledFacilityGroupMember = $._decode_implicit<FacilityGroupMember>(() => _decode_FacilityGroupMember)(_el); },
        "originalCalledPartyID": (_el: _Element): void => { originalCalledPartyID = $._decode_implicit<OriginalCalledPartyID>(() => _decode_OriginalCalledPartyID)(_el); },
        "extensions": (_el: _Element): void => { extensions = $._decode_implicit<Extensions>(() => _decode_Extensions)(_el); },
        "displayInformation": (_el: _Element): void => { displayInformation = $._decode_implicit<DisplayInformation>(() => _decode_DisplayInformation)(_el); },
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
        _root_component_type_list_1_spec_for_SelectFacilityArg,
        _extension_additions_list_spec_for_SelectFacilityArg,
        _root_component_type_list_2_spec_for_SelectFacilityArg,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new SelectFacilityArg(
        alertingPattern,
        destinationNumberRoutingAddress,
        iSDNAccessRelatedInformation,
        calledFacilityGroup,
        calledFacilityGroupMember,
        originalCalledPartyID,
        extensions,
        displayInformation,
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
    return _cached_decoder_for_SelectFacilityArg(el);
}

let _cached_encoder_for_SelectFacilityArg: $.ASN1Encoder<SelectFacilityArg> | null = null;

/**
 * @summary Encodes a(n) SelectFacilityArg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SelectFacilityArg, encoded as an ASN.1 Element.
 */
export
function _encode_SelectFacilityArg (value: SelectFacilityArg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SelectFacilityArg) { _cached_encoder_for_SelectFacilityArg = function (value: SelectFacilityArg, elGetter: $.ASN1Encoder<SelectFacilityArg>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(17 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    if (value.alertingPattern !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 0, () => _encode_AlertingPattern, $.BER)(value.alertingPattern, $.BER);
    }
    if (value.destinationNumberRoutingAddress !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => _encode_CalledPartyNumber, $.BER)(value.destinationNumberRoutingAddress, $.BER);
    }
    if (value.iSDNAccessRelatedInformation !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => _encode_ISDNAccessRelatedInformation, $.BER)(value.iSDNAccessRelatedInformation, $.BER);
    }
    if (value.calledFacilityGroup !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 3, () => _encode_FacilityGroup, $.BER)(value.calledFacilityGroup, $.BER);
    }
    if (value.calledFacilityGroupMember !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 4, () => _encode_FacilityGroupMember, $.BER)(value.calledFacilityGroupMember, $.BER);
    }
    if (value.originalCalledPartyID !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 5, () => _encode_OriginalCalledPartyID, $.BER)(value.originalCalledPartyID, $.BER);
    }
    if (value.extensions !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 6, () => _encode_Extensions, $.BER)(value.extensions, $.BER);
    }
    if (value.displayInformation !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 7, () => _encode_DisplayInformation, $.BER)(value.displayInformation, $.BER);
    }
    if (value.serviceInteractionIndicators !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 8, () => _encode_ServiceInteractionIndicators, $.BER)(value.serviceInteractionIndicators, $.BER);
    }
    if (value.iNServiceCompatibilityResponse !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 9, () => _encode_INServiceCompatibilityResponse, $.BER)(value.iNServiceCompatibilityResponse, $.BER);
    }
    if (value.forwardGVNS !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 10, () => _encode_ForwardGVNS, $.BER)(value.forwardGVNS, $.BER);
    }
    if (value.backwardGVNS !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 11, () => _encode_BackwardGVNS, $.BER)(value.backwardGVNS, $.BER);
    }
    if (value.serviceInteractionIndicatorsTwo !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 12, () => _encode_ServiceInteractionIndicatorsTwo, $.BER)(value.serviceInteractionIndicatorsTwo, $.BER);
    }
    if (value.correlationID !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 13, () => _encode_CorrelationID, $.BER)(value.correlationID, $.BER);
    }
    if (value.scfID !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 14, () => _encode_ScfID, $.BER)(value.scfID, $.BER);
    }
    if (value.callSegmentID !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 15, () => _encode_CallSegmentID, $.BER)(value.callSegmentID, $.BER);
    }
    if (value.legToBeCreated !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 16, () => _encode_LegID, $.BER)(value.legToBeCreated, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_SelectFacilityArg(value, elGetter);
}


/* eslint-enable */
