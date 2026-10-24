/* eslint-disable */
import {
    type OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { DpSpecificCommonParameters, _decode_DpSpecificCommonParameters, _encode_DpSpecificCommonParameters } from "../IN-CS3-SSF-SCF-datatypes/DpSpecificCommonParameters.ta.mjs";
// export { DpSpecificCommonParameters, _decode_DpSpecificCommonParameters, _encode_DpSpecificCommonParameters } from "../IN-CS3-SSF-SCF-datatypes/DpSpecificCommonParameters.ta.mjs";
import { CalledPartyNumber, _decode_CalledPartyNumber, _encode_CalledPartyNumber } from "../IN-CS3-SSF-SCF-datatypes/CalledPartyNumber.ta.mjs";
// export { CalledPartyNumber, _decode_CalledPartyNumber, _encode_CalledPartyNumber } from "../IN-CS3-SSF-SCF-datatypes/CalledPartyNumber.ta.mjs";
import { CallingPartyBusinessGroupID, _decode_CallingPartyBusinessGroupID, _encode_CallingPartyBusinessGroupID } from "../IN-CS3-SSF-SCF-datatypes/CallingPartyBusinessGroupID.ta.mjs";
// export { CallingPartyBusinessGroupID, _decode_CallingPartyBusinessGroupID, _encode_CallingPartyBusinessGroupID } from "../IN-CS3-SSF-SCF-datatypes/CallingPartyBusinessGroupID.ta.mjs";
import { CallingPartySubaddress, _decode_CallingPartySubaddress, _encode_CallingPartySubaddress } from "../IN-CS3-SSF-SCF-datatypes/CallingPartySubaddress.ta.mjs";
// export { CallingPartySubaddress, _decode_CallingPartySubaddress, _encode_CallingPartySubaddress } from "../IN-CS3-SSF-SCF-datatypes/CallingPartySubaddress.ta.mjs";
import { FacilityGroup, _decode_FacilityGroup, _encode_FacilityGroup } from "../IN-CS3-SSF-SCF-datatypes/FacilityGroup.ta.mjs";
// export { FacilityGroup, _decode_FacilityGroup, _encode_FacilityGroup } from "../IN-CS3-SSF-SCF-datatypes/FacilityGroup.ta.mjs";
import { FacilityGroupMember, _decode_FacilityGroupMember, _encode_FacilityGroupMember } from "../IN-CS3-SSF-SCF-datatypes/FacilityGroupMember.ta.mjs";
// export { FacilityGroupMember, _decode_FacilityGroupMember, _encode_FacilityGroupMember } from "../IN-CS3-SSF-SCF-datatypes/FacilityGroupMember.ta.mjs";
import { TravellingClassMark, _decode_TravellingClassMark, _encode_TravellingClassMark } from "../IN-CS3-SSF-SCF-datatypes/TravellingClassMark.ta.mjs";
// export { TravellingClassMark, _decode_TravellingClassMark, _encode_TravellingClassMark } from "../IN-CS3-SSF-SCF-datatypes/TravellingClassMark.ta.mjs";
import { Extensions, _decode_Extensions, _encode_Extensions } from "../IN-CS3-common-datatypes/Extensions.ta.mjs";
// export { Extensions, _decode_Extensions, _encode_Extensions } from "../IN-CS3-common-datatypes/Extensions.ta.mjs";
import { Carrier, _decode_Carrier, _encode_Carrier } from "../IN-CS3-SSF-SCF-datatypes/Carrier.ta.mjs";
// export { Carrier, _decode_Carrier, _encode_Carrier } from "../IN-CS3-SSF-SCF-datatypes/Carrier.ta.mjs";
import { ComponentType, _decode_ComponentType, _encode_ComponentType, _enum_for_ComponentType } from "../IN-CS3-SSF-SCF-datatypes/ComponentType.ta.mjs";
// export { ComponentType, _enum_for_ComponentType, ComponentType_any /* IMPORTED_LONG_ENUMERATION_ITEM */, any_ /* IMPORTED_SHORT_ENUMERATION_ITEM */, ComponentType_invoke /* IMPORTED_LONG_ENUMERATION_ITEM */, invoke /* IMPORTED_SHORT_ENUMERATION_ITEM */, ComponentType_rResult /* IMPORTED_LONG_ENUMERATION_ITEM */, rResult /* IMPORTED_SHORT_ENUMERATION_ITEM */, ComponentType_rError /* IMPORTED_LONG_ENUMERATION_ITEM */, rError /* IMPORTED_SHORT_ENUMERATION_ITEM */, ComponentType_rReject /* IMPORTED_LONG_ENUMERATION_ITEM */, rReject /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ComponentType, _encode_ComponentType } from "../IN-CS3-SSF-SCF-datatypes/ComponentType.ta.mjs";
import { Component, _decode_Component, _encode_Component } from "../IN-CS3-SSF-SCF-datatypes/Component.ta.mjs";
// export { Component, _decode_Component, _encode_Component } from "../IN-CS3-SSF-SCF-datatypes/Component.ta.mjs";
import { ComponentCorrelationID, _decode_ComponentCorrelationID, _encode_ComponentCorrelationID } from "../IN-CS3-SSF-SCF-datatypes/ComponentCorrelationID.ta.mjs";
// export { ComponentCorrelationID, _decode_ComponentCorrelationID, _encode_ComponentCorrelationID } from "../IN-CS3-SSF-SCF-datatypes/ComponentCorrelationID.ta.mjs";


/**
 * @summary OriginationAttemptAuthorizedArg
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * OriginationAttemptAuthorizedArg ::= SEQUENCE {
 *   dpSpecificCommonParameters   [0]  DpSpecificCommonParameters,
 *   dialledDigits                [1]  CalledPartyNumber OPTIONAL,
 *   callingPartyBusinessGroupID  [2]  CallingPartyBusinessGroupID OPTIONAL,
 *   callingPartySubaddress       [3]  CallingPartySubaddress OPTIONAL,
 *   callingFacilityGroup         [4]  FacilityGroup OPTIONAL,
 *   callingFacilityGroupMember   [5]  FacilityGroupMember OPTIONAL,
 *   travellingClassMark          [6]  TravellingClassMark OPTIONAL,
 *   extensions                   [7]  Extensions OPTIONAL,
 *   carrier                      [8]  Carrier OPTIONAL,
 *   componentType                [9]  ComponentType OPTIONAL,
 *   component                    [10]  Component OPTIONAL,
 *   componentCorrelationID       [11]  ComponentCorrelationID OPTIONAL,
 *   ...
 * }
 * ```
 * 
 * @class
 */
export
class OriginationAttemptAuthorizedArg {
    /**
     * @summary `dpSpecificCommonParameters`.
     * @public
     * @readonly
     */
    readonly dpSpecificCommonParameters: DpSpecificCommonParameters;
    /**
     * @summary `dialledDigits`.
     * @public
     * @readonly
     */
    readonly dialledDigits: OPTIONAL<CalledPartyNumber>;
    /**
     * @summary `callingPartyBusinessGroupID`.
     * @public
     * @readonly
     */
    readonly callingPartyBusinessGroupID: OPTIONAL<CallingPartyBusinessGroupID>;
    /**
     * @summary `callingPartySubaddress`.
     * @public
     * @readonly
     */
    readonly callingPartySubaddress: OPTIONAL<CallingPartySubaddress>;
    /**
     * @summary `callingFacilityGroup`.
     * @public
     * @readonly
     */
    readonly callingFacilityGroup: OPTIONAL<FacilityGroup>;
    /**
     * @summary `callingFacilityGroupMember`.
     * @public
     * @readonly
     */
    readonly callingFacilityGroupMember: OPTIONAL<FacilityGroupMember>;
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
        dialledDigits?: OPTIONAL<CalledPartyNumber>,
        callingPartyBusinessGroupID?: OPTIONAL<CallingPartyBusinessGroupID>,
        callingPartySubaddress?: OPTIONAL<CallingPartySubaddress>,
        callingFacilityGroup?: OPTIONAL<FacilityGroup>,
        callingFacilityGroupMember?: OPTIONAL<FacilityGroupMember>,
        travellingClassMark?: OPTIONAL<TravellingClassMark>,
        extensions?: OPTIONAL<Extensions>,
        carrier?: OPTIONAL<Carrier>,
        componentType?: OPTIONAL<ComponentType>,
        component?: OPTIONAL<Component>,
        componentCorrelationID?: OPTIONAL<ComponentCorrelationID>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.dpSpecificCommonParameters = dpSpecificCommonParameters;
        this.dialledDigits = dialledDigits;
        this.callingPartyBusinessGroupID = callingPartyBusinessGroupID;
        this.callingPartySubaddress = callingPartySubaddress;
        this.callingFacilityGroup = callingFacilityGroup;
        this.callingFacilityGroupMember = callingFacilityGroupMember;
        this.travellingClassMark = travellingClassMark;
        this.extensions = extensions;
        this.carrier = carrier;
        this.componentType = componentType;
        this.component = component;
        this.componentCorrelationID = componentCorrelationID;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a OriginationAttemptAuthorizedArg
     * @description
     * 
     * This takes an `object` and converts it to a `OriginationAttemptAuthorizedArg`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `OriginationAttemptAuthorizedArg`.
     * @returns {OriginationAttemptAuthorizedArg}
     */
    public static _from_object (_o: { [_K in keyof (OriginationAttemptAuthorizedArg)]: (OriginationAttemptAuthorizedArg)[_K] }): OriginationAttemptAuthorizedArg {
        return new OriginationAttemptAuthorizedArg(_o.dpSpecificCommonParameters, _o.dialledDigits, _o.callingPartyBusinessGroupID, _o.callingPartySubaddress, _o.callingFacilityGroup, _o.callingFacilityGroupMember, _o.travellingClassMark, _o.extensions, _o.carrier, _o.componentType, _o.component, _o.componentCorrelationID, _o._unrecognizedExtensionsList);
    }

        /**
         * @summary The enum used as the type of the component `componentType`
         * @public
         * @static
         */

    public static _enum_for_componentType = _enum_for_ComponentType;
}

/**
 * @summary The Leading Root Component Types of OriginationAttemptAuthorizedArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_OriginationAttemptAuthorizedArg: $.ComponentSpec[] = [
    new $.ComponentSpec("dpSpecificCommonParameters", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("dialledDigits", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("callingPartyBusinessGroupID", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("callingPartySubaddress", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("callingFacilityGroup", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("callingFacilityGroupMember", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("travellingClassMark", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("carrier", true, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("componentType", true, $.hasTag(_TagClass.context, 9)),
    new $.ComponentSpec("component", true, $.hasTag(_TagClass.context, 10)),
    new $.ComponentSpec("componentCorrelationID", true, $.hasTag(_TagClass.context, 11))
];

/**
 * @summary The Trailing Root Component Types of OriginationAttemptAuthorizedArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_OriginationAttemptAuthorizedArg: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of OriginationAttemptAuthorizedArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_OriginationAttemptAuthorizedArg: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_OriginationAttemptAuthorizedArg: $.ASN1Decoder<OriginationAttemptAuthorizedArg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) OriginationAttemptAuthorizedArg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_OriginationAttemptAuthorizedArg (el: _Element): OriginationAttemptAuthorizedArg {
    if (!_cached_decoder_for_OriginationAttemptAuthorizedArg) { _cached_decoder_for_OriginationAttemptAuthorizedArg = function (el: _Element): OriginationAttemptAuthorizedArg {
    let dpSpecificCommonParameters!: DpSpecificCommonParameters;
    let dialledDigits: OPTIONAL<CalledPartyNumber>;
    let callingPartyBusinessGroupID: OPTIONAL<CallingPartyBusinessGroupID>;
    let callingPartySubaddress: OPTIONAL<CallingPartySubaddress>;
    let callingFacilityGroup: OPTIONAL<FacilityGroup>;
    let callingFacilityGroupMember: OPTIONAL<FacilityGroupMember>;
    let travellingClassMark: OPTIONAL<TravellingClassMark>;
    let extensions: OPTIONAL<Extensions>;
    let carrier: OPTIONAL<Carrier>;
    let componentType: OPTIONAL<ComponentType>;
    let component: OPTIONAL<Component>;
    let componentCorrelationID: OPTIONAL<ComponentCorrelationID>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "dpSpecificCommonParameters": (_el: _Element): void => { dpSpecificCommonParameters = $._decode_implicit<DpSpecificCommonParameters>(() => _decode_DpSpecificCommonParameters)(_el); },
        "dialledDigits": (_el: _Element): void => { dialledDigits = $._decode_implicit<CalledPartyNumber>(() => _decode_CalledPartyNumber)(_el); },
        "callingPartyBusinessGroupID": (_el: _Element): void => { callingPartyBusinessGroupID = $._decode_implicit<CallingPartyBusinessGroupID>(() => _decode_CallingPartyBusinessGroupID)(_el); },
        "callingPartySubaddress": (_el: _Element): void => { callingPartySubaddress = $._decode_implicit<CallingPartySubaddress>(() => _decode_CallingPartySubaddress)(_el); },
        "callingFacilityGroup": (_el: _Element): void => { callingFacilityGroup = $._decode_explicit<FacilityGroup>(() => _decode_FacilityGroup)(_el); },
        "callingFacilityGroupMember": (_el: _Element): void => { callingFacilityGroupMember = $._decode_implicit<FacilityGroupMember>(() => _decode_FacilityGroupMember)(_el); },
        "travellingClassMark": (_el: _Element): void => { travellingClassMark = $._decode_implicit<TravellingClassMark>(() => _decode_TravellingClassMark)(_el); },
        "extensions": (_el: _Element): void => { extensions = $._decode_implicit<Extensions>(() => _decode_Extensions)(_el); },
        "carrier": (_el: _Element): void => { carrier = $._decode_implicit<Carrier>(() => _decode_Carrier)(_el); },
        "componentType": (_el: _Element): void => { componentType = $._decode_implicit<ComponentType>(() => _decode_ComponentType)(_el); },
        "component": (_el: _Element): void => { component = $._decode_explicit<Component>(() => _decode_Component)(_el); },
        "componentCorrelationID": (_el: _Element): void => { componentCorrelationID = $._decode_implicit<ComponentCorrelationID>(() => _decode_ComponentCorrelationID)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_OriginationAttemptAuthorizedArg,
        _extension_additions_list_spec_for_OriginationAttemptAuthorizedArg,
        _root_component_type_list_2_spec_for_OriginationAttemptAuthorizedArg,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new OriginationAttemptAuthorizedArg(
        dpSpecificCommonParameters,
        dialledDigits,
        callingPartyBusinessGroupID,
        callingPartySubaddress,
        callingFacilityGroup,
        callingFacilityGroupMember,
        travellingClassMark,
        extensions,
        carrier,
        componentType,
        component,
        componentCorrelationID,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_OriginationAttemptAuthorizedArg(el);
}

let _cached_encoder_for_OriginationAttemptAuthorizedArg: $.ASN1Encoder<OriginationAttemptAuthorizedArg> | null = null;

/**
 * @summary Encodes a(n) OriginationAttemptAuthorizedArg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The OriginationAttemptAuthorizedArg, encoded as an ASN.1 Element.
 */
export
function _encode_OriginationAttemptAuthorizedArg (value: OriginationAttemptAuthorizedArg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_OriginationAttemptAuthorizedArg) { _cached_encoder_for_OriginationAttemptAuthorizedArg = function (value: OriginationAttemptAuthorizedArg, elGetter: $.ASN1Encoder<OriginationAttemptAuthorizedArg>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(12 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_DpSpecificCommonParameters, $.BER)(value.dpSpecificCommonParameters, $.BER);
    if (value.dialledDigits !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => _encode_CalledPartyNumber, $.BER)(value.dialledDigits, $.BER);
    }
    if (value.callingPartyBusinessGroupID !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => _encode_CallingPartyBusinessGroupID, $.BER)(value.callingPartyBusinessGroupID, $.BER);
    }
    if (value.callingPartySubaddress !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => _encode_CallingPartySubaddress, $.BER)(value.callingPartySubaddress, $.BER);
    }
    if (value.callingFacilityGroup !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 4, () => _encode_FacilityGroup, $.BER)(value.callingFacilityGroup, $.BER);
    }
    if (value.callingFacilityGroupMember !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 5, () => _encode_FacilityGroupMember, $.BER)(value.callingFacilityGroupMember, $.BER);
    }
    if (value.travellingClassMark !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 6, () => _encode_TravellingClassMark, $.BER)(value.travellingClassMark, $.BER);
    }
    if (value.extensions !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 7, () => _encode_Extensions, $.BER)(value.extensions, $.BER);
    }
    if (value.carrier !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 8, () => _encode_Carrier, $.BER)(value.carrier, $.BER);
    }
    if (value.componentType !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 9, () => _encode_ComponentType, $.BER)(value.componentType, $.BER);
    }
    if (value.component !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 10, () => _encode_Component, $.BER)(value.component, $.BER);
    }
    if (value.componentCorrelationID !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 11, () => _encode_ComponentCorrelationID, $.BER)(value.componentCorrelationID, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_OriginationAttemptAuthorizedArg(value, elGetter);
}


/* eslint-enable */
