/* eslint-disable */
import {
    type OPTIONAL,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type ServiceKey, _decode_ServiceKey, _encode_ServiceKey } from "../IN-SSF-SCF-datatypes/ServiceKey.ta.mjs";
// export { ServiceKey, _decode_ServiceKey, _encode_ServiceKey } from "../IN-SSF-SCF-datatypes/ServiceKey.ta.mjs";
import { type CUApplicationInd, _decode_CUApplicationInd, _encode_CUApplicationInd } from "../IN-SCF-CUSF-Datatypes/CUApplicationInd.ta.mjs";
// export { CUApplicationInd, _decode_CUApplicationInd, _encode_CUApplicationInd } from "../IN-SCF-CUSF-Datatypes/CUApplicationInd.ta.mjs";
import { MiscCallInfo, _decode_MiscCallInfo, _encode_MiscCallInfo } from "../IN-SSF-SCF-datatypes/MiscCallInfo.ta.mjs";
// export { MiscCallInfo, _decode_MiscCallInfo, _encode_MiscCallInfo } from "../IN-SSF-SCF-datatypes/MiscCallInfo.ta.mjs";
import { EventTypeBCUSM, _decode_EventTypeBCUSM, _encode_EventTypeBCUSM, _enum_for_EventTypeBCUSM } from "../IN-SCF-CUSF-Datatypes/EventTypeBCUSM.ta.mjs";
// export { EventTypeBCUSM, _enum_for_EventTypeBCUSM, EventTypeBCUSM_componentReceived /* IMPORTED_LONG_ENUMERATION_ITEM */, componentReceived /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventTypeBCUSM_associationReleaseRequested /* IMPORTED_LONG_ENUMERATION_ITEM */, associationReleaseRequested /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventTypeBCUSM_activationReceivedAndAuthorized /* IMPORTED_LONG_ENUMERATION_ITEM */, activationReceivedAndAuthorized /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_EventTypeBCUSM, _encode_EventTypeBCUSM } from "../IN-SCF-CUSF-Datatypes/EventTypeBCUSM.ta.mjs";
import { type CalledPartyNumber, _decode_CalledPartyNumber, _encode_CalledPartyNumber } from "../IN-SSF-SCF-datatypes/CalledPartyNumber.ta.mjs";
// export { CalledPartyNumber, _decode_CalledPartyNumber, _encode_CalledPartyNumber } from "../IN-SSF-SCF-datatypes/CalledPartyNumber.ta.mjs";
import { type CallingPartyNumber, _decode_CallingPartyNumber, _encode_CallingPartyNumber } from "../IN-SSF-SCF-datatypes/CallingPartyNumber.ta.mjs";
// export { CallingPartyNumber, _decode_CallingPartyNumber, _encode_CallingPartyNumber } from "../IN-SSF-SCF-datatypes/CallingPartyNumber.ta.mjs";
import { type CallingPartySubaddress, _decode_CallingPartySubaddress, _encode_CallingPartySubaddress } from "../IN-SSF-SCF-datatypes/CallingPartySubaddress.ta.mjs";
// export { CallingPartySubaddress, _decode_CallingPartySubaddress, _encode_CallingPartySubaddress } from "../IN-SSF-SCF-datatypes/CallingPartySubaddress.ta.mjs";
import { type HighLayerCompatibility, _decode_HighLayerCompatibility, _encode_HighLayerCompatibility } from "../IN-SSF-SCF-datatypes/HighLayerCompatibility.ta.mjs";
// export { HighLayerCompatibility, _decode_HighLayerCompatibility, _encode_HighLayerCompatibility } from "../IN-SSF-SCF-datatypes/HighLayerCompatibility.ta.mjs";
import { type BearerCapability, _decode_BearerCapability, _encode_BearerCapability } from "../IN-SSF-SCF-datatypes/BearerCapability.ta.mjs";
// export { BearerCapability, _decode_BearerCapability, _encode_BearerCapability } from "../IN-SSF-SCF-datatypes/BearerCapability.ta.mjs";
import { type USIServiceIndicator, _decode_USIServiceIndicator, _encode_USIServiceIndicator } from "../IN-SSF-SCF-datatypes/USIServiceIndicator.ta.mjs";
// export { USIServiceIndicator, _decode_USIServiceIndicator, _encode_USIServiceIndicator } from "../IN-SSF-SCF-datatypes/USIServiceIndicator.ta.mjs";
import { type USIInformation, _decode_USIInformation, _encode_USIInformation } from "../IN-SSF-SCF-datatypes/USIInformation.ta.mjs";
// export { USIInformation, _decode_USIInformation, _encode_USIInformation } from "../IN-SSF-SCF-datatypes/USIInformation.ta.mjs";
import { type Extensions, _decode_Extensions, _encode_Extensions } from "../IN-common-datatypes/Extensions.ta.mjs";
// export { Extensions, _decode_Extensions, _encode_Extensions } from "../IN-common-datatypes/Extensions.ta.mjs";
import { type GenericNumbers, _decode_GenericNumbers, _encode_GenericNumbers } from "../IN-SSF-SCF-datatypes/GenericNumbers.ta.mjs";
// export { GenericNumbers, _decode_GenericNumbers, _encode_GenericNumbers } from "../IN-SSF-SCF-datatypes/GenericNumbers.ta.mjs";
import { ComponentType, _decode_ComponentType, _encode_ComponentType, _enum_for_ComponentType } from "../IN-SSF-SCF-datatypes/ComponentType.ta.mjs";
// export { ComponentType, _enum_for_ComponentType, ComponentType_any /* IMPORTED_LONG_ENUMERATION_ITEM */, any_ /* IMPORTED_SHORT_ENUMERATION_ITEM */, ComponentType_invoke /* IMPORTED_LONG_ENUMERATION_ITEM */, invoke /* IMPORTED_SHORT_ENUMERATION_ITEM */, ComponentType_rResult /* IMPORTED_LONG_ENUMERATION_ITEM */, rResult /* IMPORTED_SHORT_ENUMERATION_ITEM */, ComponentType_rError /* IMPORTED_LONG_ENUMERATION_ITEM */, rError /* IMPORTED_SHORT_ENUMERATION_ITEM */, ComponentType_rReject /* IMPORTED_LONG_ENUMERATION_ITEM */, rReject /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ComponentType, _encode_ComponentType } from "../IN-SSF-SCF-datatypes/ComponentType.ta.mjs";
import { type ComponentCorrelationID, _decode_ComponentCorrelationID, _encode_ComponentCorrelationID } from "../IN-SSF-SCF-datatypes/ComponentCorrelationID.ta.mjs";
// export { ComponentCorrelationID, _decode_ComponentCorrelationID, _encode_ComponentCorrelationID } from "../IN-SSF-SCF-datatypes/ComponentCorrelationID.ta.mjs";
import { type Component, _decode_Component, _encode_Component } from "../IN-SSF-SCF-datatypes/Component.ta.mjs";
// export { Component, _decode_Component, _encode_Component } from "../IN-SSF-SCF-datatypes/Component.ta.mjs";


/**
 * @summary InitialAssociationDPArg
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * InitialAssociationDPArg ::= SEQUENCE {
 *   serviceKey              [0]  ServiceKey,
 *   cUApplicationInd        [1]  CUApplicationInd OPTIONAL,
 *   miscCallInfo            [2]  MiscCallInfo OPTIONAL,
 *   eventTypeBCUSM          [3]  EventTypeBCUSM OPTIONAL,
 *   calledPartyNumber       [4]  CalledPartyNumber OPTIONAL,
 *   callingPartyNumber      [5]  CallingPartyNumber OPTIONAL,
 *   callingPartySubaddress  [6]  CallingPartySubaddress OPTIONAL,
 *   highLayerCompatibility  [7]  HighLayerCompatibility OPTIONAL,
 *   bearerCapability        [8]  BearerCapability OPTIONAL,
 *   uSIServiceIndicator     [9]  USIServiceIndicator OPTIONAL,
 *   uSIInformation          [10]  USIInformation OPTIONAL,
 *   extensions              [11]  Extensions OPTIONAL,
 *   genericNumbers          [12]  GenericNumbers OPTIONAL,
 *   componentType           [13]  ComponentType OPTIONAL,
 *   componentCorrelationID  [14]  ComponentCorrelationID OPTIONAL,
 *   component               [15]  Component OPTIONAL,
 *   ...
 * }
 * ```
 * 
 * @class
 */
export
class InitialAssociationDPArg {
    /**
     * @summary `serviceKey`.
     * @public
     * @readonly
     */
    readonly serviceKey: ServiceKey;
    /**
     * @summary `cUApplicationInd`.
     * @public
     * @readonly
     */
    readonly cUApplicationInd: OPTIONAL<CUApplicationInd>;
    /**
     * @summary `miscCallInfo`.
     * @public
     * @readonly
     */
    readonly miscCallInfo: OPTIONAL<MiscCallInfo>;
    /**
     * @summary `eventTypeBCUSM`.
     * @public
     * @readonly
     */
    readonly eventTypeBCUSM: OPTIONAL<EventTypeBCUSM>;
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
     * @summary `callingPartySubaddress`.
     * @public
     * @readonly
     */
    readonly callingPartySubaddress: OPTIONAL<CallingPartySubaddress>;
    /**
     * @summary `highLayerCompatibility`.
     * @public
     * @readonly
     */
    readonly highLayerCompatibility: OPTIONAL<HighLayerCompatibility>;
    /**
     * @summary `bearerCapability`.
     * @public
     * @readonly
     */
    readonly bearerCapability: OPTIONAL<BearerCapability>;
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
     * @summary `extensions`.
     * @public
     * @readonly
     */
    readonly extensions: OPTIONAL<Extensions>;
    /**
     * @summary `genericNumbers`.
     * @public
     * @readonly
     */
    readonly genericNumbers: OPTIONAL<GenericNumbers>;
    /**
     * @summary `componentType`.
     * @public
     * @readonly
     */
    readonly componentType: OPTIONAL<ComponentType>;
    /**
     * @summary `componentCorrelationID`.
     * @public
     * @readonly
     */
    readonly componentCorrelationID: OPTIONAL<ComponentCorrelationID>;
    /**
     * @summary `component`.
     * @public
     * @readonly
     */
    readonly component: OPTIONAL<Component>;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        serviceKey: ServiceKey,
        cUApplicationInd?: OPTIONAL<CUApplicationInd>,
        miscCallInfo?: OPTIONAL<MiscCallInfo>,
        eventTypeBCUSM?: OPTIONAL<EventTypeBCUSM>,
        calledPartyNumber?: OPTIONAL<CalledPartyNumber>,
        callingPartyNumber?: OPTIONAL<CallingPartyNumber>,
        callingPartySubaddress?: OPTIONAL<CallingPartySubaddress>,
        highLayerCompatibility?: OPTIONAL<HighLayerCompatibility>,
        bearerCapability?: OPTIONAL<BearerCapability>,
        uSIServiceIndicator?: OPTIONAL<USIServiceIndicator>,
        uSIInformation?: OPTIONAL<USIInformation>,
        extensions?: OPTIONAL<Extensions>,
        genericNumbers?: OPTIONAL<GenericNumbers>,
        componentType?: OPTIONAL<ComponentType>,
        componentCorrelationID?: OPTIONAL<ComponentCorrelationID>,
        component?: OPTIONAL<Component>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.serviceKey = serviceKey;
        this.cUApplicationInd = cUApplicationInd;
        this.miscCallInfo = miscCallInfo;
        this.eventTypeBCUSM = eventTypeBCUSM;
        this.calledPartyNumber = calledPartyNumber;
        this.callingPartyNumber = callingPartyNumber;
        this.callingPartySubaddress = callingPartySubaddress;
        this.highLayerCompatibility = highLayerCompatibility;
        this.bearerCapability = bearerCapability;
        this.uSIServiceIndicator = uSIServiceIndicator;
        this.uSIInformation = uSIInformation;
        this.extensions = extensions;
        this.genericNumbers = genericNumbers;
        this.componentType = componentType;
        this.componentCorrelationID = componentCorrelationID;
        this.component = component;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a InitialAssociationDPArg
     * @description
     * 
     * This takes an `object` and converts it to a `InitialAssociationDPArg`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `InitialAssociationDPArg`.
     * @returns {InitialAssociationDPArg}
     */
    public static _from_object (_o: { [_K in keyof (InitialAssociationDPArg)]: (InitialAssociationDPArg)[_K] }): InitialAssociationDPArg {
        return new InitialAssociationDPArg(_o.serviceKey, _o.cUApplicationInd, _o.miscCallInfo, _o.eventTypeBCUSM, _o.calledPartyNumber, _o.callingPartyNumber, _o.callingPartySubaddress, _o.highLayerCompatibility, _o.bearerCapability, _o.uSIServiceIndicator, _o.uSIInformation, _o.extensions, _o.genericNumbers, _o.componentType, _o.componentCorrelationID, _o.component, _o._unrecognizedExtensionsList);
    }

        /**
         * @summary The enum used as the type of the component `eventTypeBCUSM`
         * @public
         * @static
         */

    public static _enum_for_eventTypeBCUSM: typeof _enum_for_EventTypeBCUSM = _enum_for_EventTypeBCUSM;        /**
         * @summary The enum used as the type of the component `componentType`
         * @public
         * @static
         */

    public static _enum_for_componentType: typeof _enum_for_ComponentType = _enum_for_ComponentType;
}

/**
 * @summary The Leading Root Component Types of InitialAssociationDPArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_InitialAssociationDPArg: $.ComponentSpec[] = [
    new $.ComponentSpec("serviceKey", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("cUApplicationInd", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("miscCallInfo", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("eventTypeBCUSM", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("calledPartyNumber", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("callingPartyNumber", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("callingPartySubaddress", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("highLayerCompatibility", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("bearerCapability", true, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("uSIServiceIndicator", true, $.hasTag(_TagClass.context, 9)),
    new $.ComponentSpec("uSIInformation", true, $.hasTag(_TagClass.context, 10)),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.context, 11)),
    new $.ComponentSpec("genericNumbers", true, $.hasTag(_TagClass.context, 12)),
    new $.ComponentSpec("componentType", true, $.hasTag(_TagClass.context, 13)),
    new $.ComponentSpec("componentCorrelationID", true, $.hasTag(_TagClass.context, 14)),
    new $.ComponentSpec("component", true, $.hasTag(_TagClass.context, 15))
];

/**
 * @summary The Trailing Root Component Types of InitialAssociationDPArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_InitialAssociationDPArg: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of InitialAssociationDPArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_InitialAssociationDPArg: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_InitialAssociationDPArg: $.ASN1Decoder<InitialAssociationDPArg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) InitialAssociationDPArg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_InitialAssociationDPArg (el: _Element): InitialAssociationDPArg {
    if (!_cached_decoder_for_InitialAssociationDPArg) { _cached_decoder_for_InitialAssociationDPArg = function (el: _Element): InitialAssociationDPArg {
    let serviceKey!: ServiceKey;
    let cUApplicationInd: OPTIONAL<CUApplicationInd>;
    let miscCallInfo: OPTIONAL<MiscCallInfo>;
    let eventTypeBCUSM: OPTIONAL<EventTypeBCUSM>;
    let calledPartyNumber: OPTIONAL<CalledPartyNumber>;
    let callingPartyNumber: OPTIONAL<CallingPartyNumber>;
    let callingPartySubaddress: OPTIONAL<CallingPartySubaddress>;
    let highLayerCompatibility: OPTIONAL<HighLayerCompatibility>;
    let bearerCapability: OPTIONAL<BearerCapability>;
    let uSIServiceIndicator: OPTIONAL<USIServiceIndicator>;
    let uSIInformation: OPTIONAL<USIInformation>;
    let extensions: OPTIONAL<Extensions>;
    let genericNumbers: OPTIONAL<GenericNumbers>;
    let componentType: OPTIONAL<ComponentType>;
    let componentCorrelationID: OPTIONAL<ComponentCorrelationID>;
    let component: OPTIONAL<Component>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "serviceKey": (_el: _Element): void => { serviceKey = $._decode_implicit<ServiceKey>(() => _decode_ServiceKey)(_el); },
        "cUApplicationInd": (_el: _Element): void => { cUApplicationInd = $._decode_explicit<CUApplicationInd>(() => _decode_CUApplicationInd)(_el); },
        "miscCallInfo": (_el: _Element): void => { miscCallInfo = $._decode_implicit<MiscCallInfo>(() => _decode_MiscCallInfo)(_el); },
        "eventTypeBCUSM": (_el: _Element): void => { eventTypeBCUSM = $._decode_implicit<EventTypeBCUSM>(() => _decode_EventTypeBCUSM)(_el); },
        "calledPartyNumber": (_el: _Element): void => { calledPartyNumber = $._decode_implicit<CalledPartyNumber>(() => _decode_CalledPartyNumber)(_el); },
        "callingPartyNumber": (_el: _Element): void => { callingPartyNumber = $._decode_implicit<CallingPartyNumber>(() => _decode_CallingPartyNumber)(_el); },
        "callingPartySubaddress": (_el: _Element): void => { callingPartySubaddress = $._decode_implicit<CallingPartySubaddress>(() => _decode_CallingPartySubaddress)(_el); },
        "highLayerCompatibility": (_el: _Element): void => { highLayerCompatibility = $._decode_implicit<HighLayerCompatibility>(() => _decode_HighLayerCompatibility)(_el); },
        "bearerCapability": (_el: _Element): void => { bearerCapability = $._decode_explicit<BearerCapability>(() => _decode_BearerCapability)(_el); },
        "uSIServiceIndicator": (_el: _Element): void => { uSIServiceIndicator = $._decode_explicit<USIServiceIndicator>(() => _decode_USIServiceIndicator)(_el); },
        "uSIInformation": (_el: _Element): void => { uSIInformation = $._decode_implicit<USIInformation>(() => _decode_USIInformation)(_el); },
        "extensions": (_el: _Element): void => { extensions = $._decode_implicit<Extensions>(() => _decode_Extensions)(_el); },
        "genericNumbers": (_el: _Element): void => { genericNumbers = $._decode_implicit<GenericNumbers>(() => _decode_GenericNumbers)(_el); },
        "componentType": (_el: _Element): void => { componentType = $._decode_implicit<ComponentType>(() => _decode_ComponentType)(_el); },
        "componentCorrelationID": (_el: _Element): void => { componentCorrelationID = $._decode_implicit<ComponentCorrelationID>(() => _decode_ComponentCorrelationID)(_el); },
        "component": (_el: _Element): void => { component = $._decode_explicit<Component>(() => _decode_Component)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_InitialAssociationDPArg,
        _extension_additions_list_spec_for_InitialAssociationDPArg,
        _root_component_type_list_2_spec_for_InitialAssociationDPArg,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new InitialAssociationDPArg(
        serviceKey,
        cUApplicationInd,
        miscCallInfo,
        eventTypeBCUSM,
        calledPartyNumber,
        callingPartyNumber,
        callingPartySubaddress,
        highLayerCompatibility,
        bearerCapability,
        uSIServiceIndicator,
        uSIInformation,
        extensions,
        genericNumbers,
        componentType,
        componentCorrelationID,
        component,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_InitialAssociationDPArg(el);
}

let _cached_encoder_for_InitialAssociationDPArg: $.ASN1Encoder<InitialAssociationDPArg> | null = null;

/**
 * @summary Encodes a(n) InitialAssociationDPArg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The InitialAssociationDPArg, encoded as an ASN.1 Element.
 */
export
function _encode_InitialAssociationDPArg (value: InitialAssociationDPArg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_InitialAssociationDPArg) { _cached_encoder_for_InitialAssociationDPArg = function (value: InitialAssociationDPArg, elGetter: $.ASN1Encoder<InitialAssociationDPArg>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(16 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_ServiceKey, $.BER)(value.serviceKey, $.BER);
    if (value.cUApplicationInd !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 1, () => _encode_CUApplicationInd, $.BER)(value.cUApplicationInd, $.BER);
    }
    if (value.miscCallInfo !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => _encode_MiscCallInfo, $.BER)(value.miscCallInfo, $.BER);
    }
    if (value.eventTypeBCUSM !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => _encode_EventTypeBCUSM, $.BER)(value.eventTypeBCUSM, $.BER);
    }
    if (value.calledPartyNumber !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 4, () => _encode_CalledPartyNumber, $.BER)(value.calledPartyNumber, $.BER);
    }
    if (value.callingPartyNumber !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 5, () => _encode_CallingPartyNumber, $.BER)(value.callingPartyNumber, $.BER);
    }
    if (value.callingPartySubaddress !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 6, () => _encode_CallingPartySubaddress, $.BER)(value.callingPartySubaddress, $.BER);
    }
    if (value.highLayerCompatibility !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 7, () => _encode_HighLayerCompatibility, $.BER)(value.highLayerCompatibility, $.BER);
    }
    if (value.bearerCapability !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 8, () => _encode_BearerCapability, $.BER)(value.bearerCapability, $.BER);
    }
    if (value.uSIServiceIndicator !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 9, () => _encode_USIServiceIndicator, $.BER)(value.uSIServiceIndicator, $.BER);
    }
    if (value.uSIInformation !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 10, () => _encode_USIInformation, $.BER)(value.uSIInformation, $.BER);
    }
    if (value.extensions !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 11, () => _encode_Extensions, $.BER)(value.extensions, $.BER);
    }
    if (value.genericNumbers !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 12, () => _encode_GenericNumbers, $.BER)(value.genericNumbers, $.BER);
    }
    if (value.componentType !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 13, () => _encode_ComponentType, $.BER)(value.componentType, $.BER);
    }
    if (value.componentCorrelationID !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 14, () => _encode_ComponentCorrelationID, $.BER)(value.componentCorrelationID, $.BER);
    }
    if (value.component !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 15, () => _encode_Component, $.BER)(value.component, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_InitialAssociationDPArg(value, elGetter);
}


/* eslint-enable */
