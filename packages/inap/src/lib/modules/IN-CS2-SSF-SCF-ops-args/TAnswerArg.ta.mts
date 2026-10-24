/* eslint-disable */
import {
    type OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { DpSpecificCommonParameters, _decode_DpSpecificCommonParameters, _encode_DpSpecificCommonParameters } from "../IN-CS2-datatypes/DpSpecificCommonParameters.ta.mjs";
// export { DpSpecificCommonParameters, _decode_DpSpecificCommonParameters, _encode_DpSpecificCommonParameters } from "../IN-CS2-datatypes/DpSpecificCommonParameters.ta.mjs";
import { CalledPartyBusinessGroupID, _decode_CalledPartyBusinessGroupID, _encode_CalledPartyBusinessGroupID } from "../IN-CS2-datatypes/CalledPartyBusinessGroupID.ta.mjs";
// export { CalledPartyBusinessGroupID, _decode_CalledPartyBusinessGroupID, _encode_CalledPartyBusinessGroupID } from "../IN-CS2-datatypes/CalledPartyBusinessGroupID.ta.mjs";
import { CalledPartySubaddress, _decode_CalledPartySubaddress, _encode_CalledPartySubaddress } from "../IN-CS2-datatypes/CalledPartySubaddress.ta.mjs";
// export { CalledPartySubaddress, _decode_CalledPartySubaddress, _encode_CalledPartySubaddress } from "../IN-CS2-datatypes/CalledPartySubaddress.ta.mjs";
import { FacilityGroup, _decode_FacilityGroup, _encode_FacilityGroup } from "../IN-CS2-datatypes/FacilityGroup.ta.mjs";
// export { FacilityGroup, _decode_FacilityGroup, _encode_FacilityGroup } from "../IN-CS2-datatypes/FacilityGroup.ta.mjs";
import { FacilityGroupMember, _decode_FacilityGroupMember, _encode_FacilityGroupMember } from "../IN-CS2-datatypes/FacilityGroupMember.ta.mjs";
// export { FacilityGroupMember, _decode_FacilityGroupMember, _encode_FacilityGroupMember } from "../IN-CS2-datatypes/FacilityGroupMember.ta.mjs";
import { ExtensionField, _decode_ExtensionField, _encode_ExtensionField } from "../IN-CS2-datatypes/ExtensionField.ta.mjs";
// export { ExtensionField, _decode_ExtensionField, _encode_ExtensionField } from "../IN-CS2-datatypes/ExtensionField.ta.mjs";
import { ComponentType, _decode_ComponentType, _encode_ComponentType, _enum_for_ComponentType } from "../IN-CS2-datatypes/ComponentType.ta.mjs";
// export { ComponentType, _enum_for_ComponentType, ComponentType_any /* IMPORTED_LONG_ENUMERATION_ITEM */, any_ /* IMPORTED_SHORT_ENUMERATION_ITEM */, ComponentType_invoke /* IMPORTED_LONG_ENUMERATION_ITEM */, invoke /* IMPORTED_SHORT_ENUMERATION_ITEM */, ComponentType_rResult /* IMPORTED_LONG_ENUMERATION_ITEM */, rResult /* IMPORTED_SHORT_ENUMERATION_ITEM */, ComponentType_rError /* IMPORTED_LONG_ENUMERATION_ITEM */, rError /* IMPORTED_SHORT_ENUMERATION_ITEM */, ComponentType_rReject /* IMPORTED_LONG_ENUMERATION_ITEM */, rReject /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ComponentType, _encode_ComponentType } from "../IN-CS2-datatypes/ComponentType.ta.mjs";
import { Component, _decode_Component, _encode_Component } from "../IN-CS2-datatypes/Component.ta.mjs";
// export { Component, _decode_Component, _encode_Component } from "../IN-CS2-datatypes/Component.ta.mjs";
import { ComponentCorrelationID, _decode_ComponentCorrelationID, _encode_ComponentCorrelationID } from "../IN-CS2-datatypes/ComponentCorrelationID.ta.mjs";
// export { ComponentCorrelationID, _decode_ComponentCorrelationID, _encode_ComponentCorrelationID } from "../IN-CS2-datatypes/ComponentCorrelationID.ta.mjs";


/**
 * @summary TAnswerArg
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TAnswerArg ::= SEQUENCE {
 *   dpSpecificCommonParameters  [0]  DpSpecificCommonParameters,
 *   calledPartyBusinessGroupID  [1]  CalledPartyBusinessGroupID OPTIONAL,
 *   calledPartySubaddress       [2]  CalledPartySubaddress OPTIONAL,
 *   calledFacilityGroup         [3]  FacilityGroup OPTIONAL,
 *   calledFacilityGroupMember   [4]  FacilityGroupMember OPTIONAL,
 *   extensions
 *     [5]  SEQUENCE OF
 *            ExtensionField OPTIONAL,
 *   componentType               [6]  ComponentType OPTIONAL,
 *   component                   [7]  Component OPTIONAL,
 *   componentCorrelationID      [8]  ComponentCorrelationID OPTIONAL,
 *   ...
 * }
 * ```
 * 
 * @class
 */
export
class TAnswerArg {
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
     * @summary `extensions`.
     * @public
     * @readonly
     */
    readonly extensions: OPTIONAL<ExtensionField[]>;
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
        calledFacilityGroup?: OPTIONAL<FacilityGroup>,
        calledFacilityGroupMember?: OPTIONAL<FacilityGroupMember>,
        extensions?: OPTIONAL<ExtensionField[]>,
        componentType?: OPTIONAL<ComponentType>,
        component?: OPTIONAL<Component>,
        componentCorrelationID?: OPTIONAL<ComponentCorrelationID>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.dpSpecificCommonParameters = dpSpecificCommonParameters;
        this.calledPartyBusinessGroupID = calledPartyBusinessGroupID;
        this.calledPartySubaddress = calledPartySubaddress;
        this.calledFacilityGroup = calledFacilityGroup;
        this.calledFacilityGroupMember = calledFacilityGroupMember;
        this.extensions = extensions;
        this.componentType = componentType;
        this.component = component;
        this.componentCorrelationID = componentCorrelationID;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a TAnswerArg
     * @description
     * 
     * This takes an `object` and converts it to a `TAnswerArg`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `TAnswerArg`.
     * @returns {TAnswerArg}
     */
    public static _from_object (_o: { [_K in keyof (TAnswerArg)]: (TAnswerArg)[_K] }): TAnswerArg {
        return new TAnswerArg(_o.dpSpecificCommonParameters, _o.calledPartyBusinessGroupID, _o.calledPartySubaddress, _o.calledFacilityGroup, _o.calledFacilityGroupMember, _o.extensions, _o.componentType, _o.component, _o.componentCorrelationID, _o._unrecognizedExtensionsList);
    }

        /**
         * @summary The enum used as the type of the component `componentType`
         * @public
         * @static
         */

    public static _enum_for_componentType = _enum_for_ComponentType;
}

/**
 * @summary The Leading Root Component Types of TAnswerArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_TAnswerArg: $.ComponentSpec[] = [
    new $.ComponentSpec("dpSpecificCommonParameters", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("calledPartyBusinessGroupID", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("calledPartySubaddress", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("calledFacilityGroup", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("calledFacilityGroupMember", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("componentType", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("component", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("componentCorrelationID", true, $.hasTag(_TagClass.context, 8))
];

/**
 * @summary The Trailing Root Component Types of TAnswerArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_TAnswerArg: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of TAnswerArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_TAnswerArg: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_TAnswerArg: $.ASN1Decoder<TAnswerArg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TAnswerArg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_TAnswerArg (el: _Element): TAnswerArg {
    if (!_cached_decoder_for_TAnswerArg) { _cached_decoder_for_TAnswerArg = function (el: _Element): TAnswerArg {
    let dpSpecificCommonParameters!: DpSpecificCommonParameters;
    let calledPartyBusinessGroupID: OPTIONAL<CalledPartyBusinessGroupID>;
    let calledPartySubaddress: OPTIONAL<CalledPartySubaddress>;
    let calledFacilityGroup: OPTIONAL<FacilityGroup>;
    let calledFacilityGroupMember: OPTIONAL<FacilityGroupMember>;
    let extensions: OPTIONAL<ExtensionField[]>;
    let componentType: OPTIONAL<ComponentType>;
    let component: OPTIONAL<Component>;
    let componentCorrelationID: OPTIONAL<ComponentCorrelationID>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "dpSpecificCommonParameters": (_el: _Element): void => { dpSpecificCommonParameters = $._decode_implicit<DpSpecificCommonParameters>(() => _decode_DpSpecificCommonParameters)(_el); },
        "calledPartyBusinessGroupID": (_el: _Element): void => { calledPartyBusinessGroupID = $._decode_implicit<CalledPartyBusinessGroupID>(() => _decode_CalledPartyBusinessGroupID)(_el); },
        "calledPartySubaddress": (_el: _Element): void => { calledPartySubaddress = $._decode_implicit<CalledPartySubaddress>(() => _decode_CalledPartySubaddress)(_el); },
        "calledFacilityGroup": (_el: _Element): void => { calledFacilityGroup = $._decode_explicit<FacilityGroup>(() => _decode_FacilityGroup)(_el); },
        "calledFacilityGroupMember": (_el: _Element): void => { calledFacilityGroupMember = $._decode_implicit<FacilityGroupMember>(() => _decode_FacilityGroupMember)(_el); },
        "extensions": (_el: _Element): void => { extensions = $._decode_implicit<ExtensionField[]>(() => $._decodeSequenceOf<ExtensionField>(() => _decode_ExtensionField))(_el); },
        "componentType": (_el: _Element): void => { componentType = $._decode_implicit<ComponentType>(() => _decode_ComponentType)(_el); },
        "component": (_el: _Element): void => { component = $._decode_explicit<Component>(() => _decode_Component)(_el); },
        "componentCorrelationID": (_el: _Element): void => { componentCorrelationID = $._decode_implicit<ComponentCorrelationID>(() => _decode_ComponentCorrelationID)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_TAnswerArg,
        _extension_additions_list_spec_for_TAnswerArg,
        _root_component_type_list_2_spec_for_TAnswerArg,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new TAnswerArg(
        dpSpecificCommonParameters,
        calledPartyBusinessGroupID,
        calledPartySubaddress,
        calledFacilityGroup,
        calledFacilityGroupMember,
        extensions,
        componentType,
        component,
        componentCorrelationID,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_TAnswerArg(el);
}

let _cached_encoder_for_TAnswerArg: $.ASN1Encoder<TAnswerArg> | null = null;

/**
 * @summary Encodes a(n) TAnswerArg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TAnswerArg, encoded as an ASN.1 Element.
 */
export
function _encode_TAnswerArg (value: TAnswerArg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_TAnswerArg) { _cached_encoder_for_TAnswerArg = function (value: TAnswerArg, elGetter: $.ASN1Encoder<TAnswerArg>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(9 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_DpSpecificCommonParameters, $.BER)(value.dpSpecificCommonParameters, $.BER);
    if (value.calledPartyBusinessGroupID !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => _encode_CalledPartyBusinessGroupID, $.BER)(value.calledPartyBusinessGroupID, $.BER);
    }
    if (value.calledPartySubaddress !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => _encode_CalledPartySubaddress, $.BER)(value.calledPartySubaddress, $.BER);
    }
    if (value.calledFacilityGroup !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 3, () => _encode_FacilityGroup, $.BER)(value.calledFacilityGroup, $.BER);
    }
    if (value.calledFacilityGroupMember !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 4, () => _encode_FacilityGroupMember, $.BER)(value.calledFacilityGroupMember, $.BER);
    }
    if (value.extensions !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 5, () => $._encodeSequenceOf<ExtensionField>(() => _encode_ExtensionField, $.BER), $.BER)(value.extensions, $.BER);
    }
    if (value.componentType !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 6, () => _encode_ComponentType, $.BER)(value.componentType, $.BER);
    }
    if (value.component !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 7, () => _encode_Component, $.BER)(value.component, $.BER);
    }
    if (value.componentCorrelationID !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 8, () => _encode_ComponentCorrelationID, $.BER)(value.componentCorrelationID, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_TAnswerArg(value, elGetter);
}


/* eslint-enable */
