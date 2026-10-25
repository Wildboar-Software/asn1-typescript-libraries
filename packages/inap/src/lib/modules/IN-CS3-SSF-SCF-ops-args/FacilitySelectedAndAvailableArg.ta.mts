/* eslint-disable */
import {
    type OPTIONAL,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { DpSpecificCommonParameters, _decode_DpSpecificCommonParameters, _encode_DpSpecificCommonParameters } from "../IN-CS3-SSF-SCF-datatypes/DpSpecificCommonParameters.ta.mjs";
// export { DpSpecificCommonParameters, _decode_DpSpecificCommonParameters, _encode_DpSpecificCommonParameters } from "../IN-CS3-SSF-SCF-datatypes/DpSpecificCommonParameters.ta.mjs";
import { type CalledPartyBusinessGroupID, _decode_CalledPartyBusinessGroupID, _encode_CalledPartyBusinessGroupID } from "../IN-CS3-SSF-SCF-datatypes/CalledPartyBusinessGroupID.ta.mjs";
// export { CalledPartyBusinessGroupID, _decode_CalledPartyBusinessGroupID, _encode_CalledPartyBusinessGroupID } from "../IN-CS3-SSF-SCF-datatypes/CalledPartyBusinessGroupID.ta.mjs";
import { type CalledPartySubaddress, _decode_CalledPartySubaddress, _encode_CalledPartySubaddress } from "../IN-CS3-SSF-SCF-datatypes/CalledPartySubaddress.ta.mjs";
// export { CalledPartySubaddress, _decode_CalledPartySubaddress, _encode_CalledPartySubaddress } from "../IN-CS3-SSF-SCF-datatypes/CalledPartySubaddress.ta.mjs";
import { type CallingPartyBusinessGroupID, _decode_CallingPartyBusinessGroupID, _encode_CallingPartyBusinessGroupID } from "../IN-CS3-SSF-SCF-datatypes/CallingPartyBusinessGroupID.ta.mjs";
// export { CallingPartyBusinessGroupID, _decode_CallingPartyBusinessGroupID, _encode_CallingPartyBusinessGroupID } from "../IN-CS3-SSF-SCF-datatypes/CallingPartyBusinessGroupID.ta.mjs";
import { type CallingPartyNumber, _decode_CallingPartyNumber, _encode_CallingPartyNumber } from "../IN-CS3-SSF-SCF-datatypes/CallingPartyNumber.ta.mjs";
// export { CallingPartyNumber, _decode_CallingPartyNumber, _encode_CallingPartyNumber } from "../IN-CS3-SSF-SCF-datatypes/CallingPartyNumber.ta.mjs";
import { type OriginalCalledPartyID, _decode_OriginalCalledPartyID, _encode_OriginalCalledPartyID } from "../IN-CS3-SSF-SCF-datatypes/OriginalCalledPartyID.ta.mjs";
// export { OriginalCalledPartyID, _decode_OriginalCalledPartyID, _encode_OriginalCalledPartyID } from "../IN-CS3-SSF-SCF-datatypes/OriginalCalledPartyID.ta.mjs";
import { type RedirectingPartyID, _decode_RedirectingPartyID, _encode_RedirectingPartyID } from "../IN-CS3-SSF-SCF-datatypes/RedirectingPartyID.ta.mjs";
// export { RedirectingPartyID, _decode_RedirectingPartyID, _encode_RedirectingPartyID } from "../IN-CS3-SSF-SCF-datatypes/RedirectingPartyID.ta.mjs";
import { type RedirectionInformation, _decode_RedirectionInformation, _encode_RedirectionInformation } from "../IN-CS3-SSF-SCF-datatypes/RedirectionInformation.ta.mjs";
// export { RedirectionInformation, _decode_RedirectionInformation, _encode_RedirectionInformation } from "../IN-CS3-SSF-SCF-datatypes/RedirectionInformation.ta.mjs";
import { type RouteList, _decode_RouteList, _encode_RouteList } from "../IN-CS3-SSF-SCF-datatypes/RouteList.ta.mjs";
// export { RouteList, _decode_RouteList, _encode_RouteList } from "../IN-CS3-SSF-SCF-datatypes/RouteList.ta.mjs";
import { type TravellingClassMark, _decode_TravellingClassMark, _encode_TravellingClassMark } from "../IN-CS3-SSF-SCF-datatypes/TravellingClassMark.ta.mjs";
// export { TravellingClassMark, _decode_TravellingClassMark, _encode_TravellingClassMark } from "../IN-CS3-SSF-SCF-datatypes/TravellingClassMark.ta.mjs";
import { type Extensions, _decode_Extensions, _encode_Extensions } from "../IN-CS3-common-datatypes/Extensions.ta.mjs";
// export { Extensions, _decode_Extensions, _encode_Extensions } from "../IN-CS3-common-datatypes/Extensions.ta.mjs";
import { ComponentType, _decode_ComponentType, _encode_ComponentType, _enum_for_ComponentType } from "../IN-CS3-SSF-SCF-datatypes/ComponentType.ta.mjs";
// export { ComponentType, _enum_for_ComponentType, ComponentType_any /* IMPORTED_LONG_ENUMERATION_ITEM */, any_ /* IMPORTED_SHORT_ENUMERATION_ITEM */, ComponentType_invoke /* IMPORTED_LONG_ENUMERATION_ITEM */, invoke /* IMPORTED_SHORT_ENUMERATION_ITEM */, ComponentType_rResult /* IMPORTED_LONG_ENUMERATION_ITEM */, rResult /* IMPORTED_SHORT_ENUMERATION_ITEM */, ComponentType_rError /* IMPORTED_LONG_ENUMERATION_ITEM */, rError /* IMPORTED_SHORT_ENUMERATION_ITEM */, ComponentType_rReject /* IMPORTED_LONG_ENUMERATION_ITEM */, rReject /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ComponentType, _encode_ComponentType } from "../IN-CS3-SSF-SCF-datatypes/ComponentType.ta.mjs";
import { type Component, _decode_Component, _encode_Component } from "../IN-CS3-SSF-SCF-datatypes/Component.ta.mjs";
// export { Component, _decode_Component, _encode_Component } from "../IN-CS3-SSF-SCF-datatypes/Component.ta.mjs";
import { type ComponentCorrelationID, _decode_ComponentCorrelationID, _encode_ComponentCorrelationID } from "../IN-CS3-SSF-SCF-datatypes/ComponentCorrelationID.ta.mjs";
// export { ComponentCorrelationID, _decode_ComponentCorrelationID, _encode_ComponentCorrelationID } from "../IN-CS3-SSF-SCF-datatypes/ComponentCorrelationID.ta.mjs";


/**
 * @summary FacilitySelectedAndAvailableArg
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FacilitySelectedAndAvailableArg ::= SEQUENCE {
 *   dpSpecificCommonParameters   [0]  DpSpecificCommonParameters,
 *   calledPartyBusinessGroupID   [1]  CalledPartyBusinessGroupID OPTIONAL,
 *   calledPartySubaddress        [2]  CalledPartySubaddress OPTIONAL,
 *   callingPartyBusinessGroupID  [3]  CallingPartyBusinessGroupID OPTIONAL,
 *   callingPartyNumber           [4]  CallingPartyNumber OPTIONAL,
 *   originalCalledPartyID        [5]  OriginalCalledPartyID OPTIONAL,
 *   redirectingPartyID           [6]  RedirectingPartyID OPTIONAL,
 *   redirectionInformation       [7]  RedirectionInformation OPTIONAL,
 *   routeList                    [8]  RouteList OPTIONAL,
 *   travellingClassMark          [9]  TravellingClassMark OPTIONAL,
 *   extensions                   [10]  Extensions OPTIONAL,
 *   componentType                [11]  ComponentType OPTIONAL,
 *   component                    [12]  Component OPTIONAL,
 *   componentCorrelationID       [13]  ComponentCorrelationID OPTIONAL,
 *   ...
 * }
 * ```
 * 
 * @class
 */
export
class FacilitySelectedAndAvailableArg {
    /**
     * @summary `dpSpecificCommonParameters`.
     * @public
     * @readonly
     */
    readonly dpSpecificCommonParameters: DpSpecificCommonParameters;
    /**
     * @summary `calledPartyBusinessGroupID`.
     * @public
     * @readonly
     */
    readonly calledPartyBusinessGroupID: OPTIONAL<CalledPartyBusinessGroupID>;
    /**
     * @summary `calledPartySubaddress`.
     * @public
     * @readonly
     */
    readonly calledPartySubaddress: OPTIONAL<CalledPartySubaddress>;
    /**
     * @summary `callingPartyBusinessGroupID`.
     * @public
     * @readonly
     */
    readonly callingPartyBusinessGroupID: OPTIONAL<CallingPartyBusinessGroupID>;
    /**
     * @summary `callingPartyNumber`.
     * @public
     * @readonly
     */
    readonly callingPartyNumber: OPTIONAL<CallingPartyNumber>;
    /**
     * @summary `originalCalledPartyID`.
     * @public
     * @readonly
     */
    readonly originalCalledPartyID: OPTIONAL<OriginalCalledPartyID>;
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
     * @summary `routeList`.
     * @public
     * @readonly
     */
    readonly routeList: OPTIONAL<RouteList>;
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
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        dpSpecificCommonParameters: DpSpecificCommonParameters,
        calledPartyBusinessGroupID?: OPTIONAL<CalledPartyBusinessGroupID>,
        calledPartySubaddress?: OPTIONAL<CalledPartySubaddress>,
        callingPartyBusinessGroupID?: OPTIONAL<CallingPartyBusinessGroupID>,
        callingPartyNumber?: OPTIONAL<CallingPartyNumber>,
        originalCalledPartyID?: OPTIONAL<OriginalCalledPartyID>,
        redirectingPartyID?: OPTIONAL<RedirectingPartyID>,
        redirectionInformation?: OPTIONAL<RedirectionInformation>,
        routeList?: OPTIONAL<RouteList>,
        travellingClassMark?: OPTIONAL<TravellingClassMark>,
        extensions?: OPTIONAL<Extensions>,
        componentType?: OPTIONAL<ComponentType>,
        component?: OPTIONAL<Component>,
        componentCorrelationID?: OPTIONAL<ComponentCorrelationID>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.dpSpecificCommonParameters = dpSpecificCommonParameters;
        this.calledPartyBusinessGroupID = calledPartyBusinessGroupID;
        this.calledPartySubaddress = calledPartySubaddress;
        this.callingPartyBusinessGroupID = callingPartyBusinessGroupID;
        this.callingPartyNumber = callingPartyNumber;
        this.originalCalledPartyID = originalCalledPartyID;
        this.redirectingPartyID = redirectingPartyID;
        this.redirectionInformation = redirectionInformation;
        this.routeList = routeList;
        this.travellingClassMark = travellingClassMark;
        this.extensions = extensions;
        this.componentType = componentType;
        this.component = component;
        this.componentCorrelationID = componentCorrelationID;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a FacilitySelectedAndAvailableArg
     * @description
     * 
     * This takes an `object` and converts it to a `FacilitySelectedAndAvailableArg`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `FacilitySelectedAndAvailableArg`.
     * @returns {FacilitySelectedAndAvailableArg}
     */
    public static _from_object (_o: { [_K in keyof (FacilitySelectedAndAvailableArg)]: (FacilitySelectedAndAvailableArg)[_K] }): FacilitySelectedAndAvailableArg {
        return new FacilitySelectedAndAvailableArg(_o.dpSpecificCommonParameters, _o.calledPartyBusinessGroupID, _o.calledPartySubaddress, _o.callingPartyBusinessGroupID, _o.callingPartyNumber, _o.originalCalledPartyID, _o.redirectingPartyID, _o.redirectionInformation, _o.routeList, _o.travellingClassMark, _o.extensions, _o.componentType, _o.component, _o.componentCorrelationID, _o._unrecognizedExtensionsList);
    }

        /**
         * @summary The enum used as the type of the component `componentType`
         * @public
         * @static
         */

    public static _enum_for_componentType: typeof _enum_for_ComponentType = _enum_for_ComponentType;
}

/**
 * @summary The Leading Root Component Types of FacilitySelectedAndAvailableArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_FacilitySelectedAndAvailableArg: $.ComponentSpec[] = [
    new $.ComponentSpec("dpSpecificCommonParameters", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("calledPartyBusinessGroupID", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("calledPartySubaddress", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("callingPartyBusinessGroupID", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("callingPartyNumber", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("originalCalledPartyID", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("redirectingPartyID", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("redirectionInformation", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("routeList", true, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("travellingClassMark", true, $.hasTag(_TagClass.context, 9)),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.context, 10)),
    new $.ComponentSpec("componentType", true, $.hasTag(_TagClass.context, 11)),
    new $.ComponentSpec("component", true, $.hasTag(_TagClass.context, 12)),
    new $.ComponentSpec("componentCorrelationID", true, $.hasTag(_TagClass.context, 13))
];

/**
 * @summary The Trailing Root Component Types of FacilitySelectedAndAvailableArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_FacilitySelectedAndAvailableArg: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of FacilitySelectedAndAvailableArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_FacilitySelectedAndAvailableArg: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_FacilitySelectedAndAvailableArg: $.ASN1Decoder<FacilitySelectedAndAvailableArg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) FacilitySelectedAndAvailableArg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_FacilitySelectedAndAvailableArg (el: _Element): FacilitySelectedAndAvailableArg {
    if (!_cached_decoder_for_FacilitySelectedAndAvailableArg) { _cached_decoder_for_FacilitySelectedAndAvailableArg = function (el: _Element): FacilitySelectedAndAvailableArg {
    let dpSpecificCommonParameters!: DpSpecificCommonParameters;
    let calledPartyBusinessGroupID: OPTIONAL<CalledPartyBusinessGroupID>;
    let calledPartySubaddress: OPTIONAL<CalledPartySubaddress>;
    let callingPartyBusinessGroupID: OPTIONAL<CallingPartyBusinessGroupID>;
    let callingPartyNumber: OPTIONAL<CallingPartyNumber>;
    let originalCalledPartyID: OPTIONAL<OriginalCalledPartyID>;
    let redirectingPartyID: OPTIONAL<RedirectingPartyID>;
    let redirectionInformation: OPTIONAL<RedirectionInformation>;
    let routeList: OPTIONAL<RouteList>;
    let travellingClassMark: OPTIONAL<TravellingClassMark>;
    let extensions: OPTIONAL<Extensions>;
    let componentType: OPTIONAL<ComponentType>;
    let component: OPTIONAL<Component>;
    let componentCorrelationID: OPTIONAL<ComponentCorrelationID>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "dpSpecificCommonParameters": (_el: _Element): void => { dpSpecificCommonParameters = $._decode_implicit<DpSpecificCommonParameters>(() => _decode_DpSpecificCommonParameters)(_el); },
        "calledPartyBusinessGroupID": (_el: _Element): void => { calledPartyBusinessGroupID = $._decode_implicit<CalledPartyBusinessGroupID>(() => _decode_CalledPartyBusinessGroupID)(_el); },
        "calledPartySubaddress": (_el: _Element): void => { calledPartySubaddress = $._decode_implicit<CalledPartySubaddress>(() => _decode_CalledPartySubaddress)(_el); },
        "callingPartyBusinessGroupID": (_el: _Element): void => { callingPartyBusinessGroupID = $._decode_implicit<CallingPartyBusinessGroupID>(() => _decode_CallingPartyBusinessGroupID)(_el); },
        "callingPartyNumber": (_el: _Element): void => { callingPartyNumber = $._decode_implicit<CallingPartyNumber>(() => _decode_CallingPartyNumber)(_el); },
        "originalCalledPartyID": (_el: _Element): void => { originalCalledPartyID = $._decode_implicit<OriginalCalledPartyID>(() => _decode_OriginalCalledPartyID)(_el); },
        "redirectingPartyID": (_el: _Element): void => { redirectingPartyID = $._decode_implicit<RedirectingPartyID>(() => _decode_RedirectingPartyID)(_el); },
        "redirectionInformation": (_el: _Element): void => { redirectionInformation = $._decode_implicit<RedirectionInformation>(() => _decode_RedirectionInformation)(_el); },
        "routeList": (_el: _Element): void => { routeList = $._decode_implicit<RouteList>(() => _decode_RouteList)(_el); },
        "travellingClassMark": (_el: _Element): void => { travellingClassMark = $._decode_implicit<TravellingClassMark>(() => _decode_TravellingClassMark)(_el); },
        "extensions": (_el: _Element): void => { extensions = $._decode_implicit<Extensions>(() => _decode_Extensions)(_el); },
        "componentType": (_el: _Element): void => { componentType = $._decode_implicit<ComponentType>(() => _decode_ComponentType)(_el); },
        "component": (_el: _Element): void => { component = $._decode_explicit<Component>(() => _decode_Component)(_el); },
        "componentCorrelationID": (_el: _Element): void => { componentCorrelationID = $._decode_implicit<ComponentCorrelationID>(() => _decode_ComponentCorrelationID)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_FacilitySelectedAndAvailableArg,
        _extension_additions_list_spec_for_FacilitySelectedAndAvailableArg,
        _root_component_type_list_2_spec_for_FacilitySelectedAndAvailableArg,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new FacilitySelectedAndAvailableArg(
        dpSpecificCommonParameters,
        calledPartyBusinessGroupID,
        calledPartySubaddress,
        callingPartyBusinessGroupID,
        callingPartyNumber,
        originalCalledPartyID,
        redirectingPartyID,
        redirectionInformation,
        routeList,
        travellingClassMark,
        extensions,
        componentType,
        component,
        componentCorrelationID,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_FacilitySelectedAndAvailableArg(el);
}

let _cached_encoder_for_FacilitySelectedAndAvailableArg: $.ASN1Encoder<FacilitySelectedAndAvailableArg> | null = null;

/**
 * @summary Encodes a(n) FacilitySelectedAndAvailableArg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The FacilitySelectedAndAvailableArg, encoded as an ASN.1 Element.
 */
export
function _encode_FacilitySelectedAndAvailableArg (value: FacilitySelectedAndAvailableArg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_FacilitySelectedAndAvailableArg) { _cached_encoder_for_FacilitySelectedAndAvailableArg = function (value: FacilitySelectedAndAvailableArg, elGetter: $.ASN1Encoder<FacilitySelectedAndAvailableArg>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(14 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_DpSpecificCommonParameters, $.BER)(value.dpSpecificCommonParameters, $.BER);
    if (value.calledPartyBusinessGroupID !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => _encode_CalledPartyBusinessGroupID, $.BER)(value.calledPartyBusinessGroupID, $.BER);
    }
    if (value.calledPartySubaddress !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => _encode_CalledPartySubaddress, $.BER)(value.calledPartySubaddress, $.BER);
    }
    if (value.callingPartyBusinessGroupID !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => _encode_CallingPartyBusinessGroupID, $.BER)(value.callingPartyBusinessGroupID, $.BER);
    }
    if (value.callingPartyNumber !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 4, () => _encode_CallingPartyNumber, $.BER)(value.callingPartyNumber, $.BER);
    }
    if (value.originalCalledPartyID !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 5, () => _encode_OriginalCalledPartyID, $.BER)(value.originalCalledPartyID, $.BER);
    }
    if (value.redirectingPartyID !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 6, () => _encode_RedirectingPartyID, $.BER)(value.redirectingPartyID, $.BER);
    }
    if (value.redirectionInformation !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 7, () => _encode_RedirectionInformation, $.BER)(value.redirectionInformation, $.BER);
    }
    if (value.routeList !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 8, () => _encode_RouteList, $.BER)(value.routeList, $.BER);
    }
    if (value.travellingClassMark !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 9, () => _encode_TravellingClassMark, $.BER)(value.travellingClassMark, $.BER);
    }
    if (value.extensions !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 10, () => _encode_Extensions, $.BER)(value.extensions, $.BER);
    }
    if (value.componentType !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 11, () => _encode_ComponentType, $.BER)(value.componentType, $.BER);
    }
    if (value.component !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 12, () => _encode_Component, $.BER)(value.component, $.BER);
    }
    if (value.componentCorrelationID !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 13, () => _encode_ComponentCorrelationID, $.BER)(value.componentCorrelationID, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_FacilitySelectedAndAvailableArg(value, elGetter);
}


/* eslint-enable */
