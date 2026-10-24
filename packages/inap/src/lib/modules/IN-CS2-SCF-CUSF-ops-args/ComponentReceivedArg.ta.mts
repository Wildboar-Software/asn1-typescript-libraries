/* eslint-disable */
import {
    type OPTIONAL,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { CallUnrelatedDpSpecificCommonParameters, _decode_CallUnrelatedDpSpecificCommonParameters, _encode_CallUnrelatedDpSpecificCommonParameters } from "../IN-CS2-datatypes/CallUnrelatedDpSpecificCommonParameters.ta.mjs";
// export { CallUnrelatedDpSpecificCommonParameters, _decode_CallUnrelatedDpSpecificCommonParameters, _encode_CallUnrelatedDpSpecificCommonParameters } from "../IN-CS2-datatypes/CallUnrelatedDpSpecificCommonParameters.ta.mjs";
import { ComponentType, _decode_ComponentType, _encode_ComponentType, _enum_for_ComponentType } from "../IN-CS2-datatypes/ComponentType.ta.mjs";
// export { ComponentType, _enum_for_ComponentType, ComponentType_any /* IMPORTED_LONG_ENUMERATION_ITEM */, any_ /* IMPORTED_SHORT_ENUMERATION_ITEM */, ComponentType_invoke /* IMPORTED_LONG_ENUMERATION_ITEM */, invoke /* IMPORTED_SHORT_ENUMERATION_ITEM */, ComponentType_rResult /* IMPORTED_LONG_ENUMERATION_ITEM */, rResult /* IMPORTED_SHORT_ENUMERATION_ITEM */, ComponentType_rError /* IMPORTED_LONG_ENUMERATION_ITEM */, rError /* IMPORTED_SHORT_ENUMERATION_ITEM */, ComponentType_rReject /* IMPORTED_LONG_ENUMERATION_ITEM */, rReject /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ComponentType, _encode_ComponentType } from "../IN-CS2-datatypes/ComponentType.ta.mjs";
import { ComponentCorrelationID, _decode_ComponentCorrelationID, _encode_ComponentCorrelationID } from "../IN-CS2-datatypes/ComponentCorrelationID.ta.mjs";
// export { ComponentCorrelationID, _decode_ComponentCorrelationID, _encode_ComponentCorrelationID } from "../IN-CS2-datatypes/ComponentCorrelationID.ta.mjs";
import { ExtensionField, _decode_ExtensionField, _encode_ExtensionField } from "../IN-CS2-datatypes/ExtensionField.ta.mjs";
// export { ExtensionField, _decode_ExtensionField, _encode_ExtensionField } from "../IN-CS2-datatypes/ExtensionField.ta.mjs";
import { Component, _decode_Component, _encode_Component } from "../IN-CS2-datatypes/Component.ta.mjs";
// export { Component, _decode_Component, _encode_Component } from "../IN-CS2-datatypes/Component.ta.mjs";


/**
 * @summary ComponentReceivedArg
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ComponentReceivedArg ::= SEQUENCE {
 *   callUnrelatedDpSpecificCommonParameters
 *     [0]  CallUnrelatedDpSpecificCommonParameters,
 *   componentType                            [1]  ComponentType OPTIONAL,
 *   componentCorrelationID                   [3]  ComponentCorrelationID OPTIONAL,
 *   extensions
 *     [4]  SEQUENCE OF
 *            ExtensionField OPTIONAL,
 *   component                                [5]  Component OPTIONAL,
 *   ...
 * }
 * ```
 * 
 * @class
 */
export
class ComponentReceivedArg {
    /**
     * @summary `callUnrelatedDpSpecificCommonParameters`.
     * @public
     * @readonly
     */
    readonly callUnrelatedDpSpecificCommonParameters: CallUnrelatedDpSpecificCommonParameters;
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
     * @summary `extensions`.
     * @public
     * @readonly
     */
    readonly extensions: OPTIONAL<ExtensionField[]>;
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
        callUnrelatedDpSpecificCommonParameters: CallUnrelatedDpSpecificCommonParameters,
        componentType?: OPTIONAL<ComponentType>,
        componentCorrelationID?: OPTIONAL<ComponentCorrelationID>,
        extensions?: OPTIONAL<ExtensionField[]>,
        component?: OPTIONAL<Component>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.callUnrelatedDpSpecificCommonParameters = callUnrelatedDpSpecificCommonParameters;
        this.componentType = componentType;
        this.componentCorrelationID = componentCorrelationID;
        this.extensions = extensions;
        this.component = component;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a ComponentReceivedArg
     * @description
     * 
     * This takes an `object` and converts it to a `ComponentReceivedArg`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ComponentReceivedArg`.
     * @returns {ComponentReceivedArg}
     */
    public static _from_object (_o: { [_K in keyof (ComponentReceivedArg)]: (ComponentReceivedArg)[_K] }): ComponentReceivedArg {
        return new ComponentReceivedArg(_o.callUnrelatedDpSpecificCommonParameters, _o.componentType, _o.componentCorrelationID, _o.extensions, _o.component, _o._unrecognizedExtensionsList);
    }

        /**
         * @summary The enum used as the type of the component `componentType`
         * @public
         * @static
         */

    public static _enum_for_componentType = _enum_for_ComponentType;
}

/**
 * @summary The Leading Root Component Types of ComponentReceivedArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ComponentReceivedArg: $.ComponentSpec[] = [
    new $.ComponentSpec("callUnrelatedDpSpecificCommonParameters", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("componentType", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("componentCorrelationID", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("component", true, $.hasTag(_TagClass.context, 5))
];

/**
 * @summary The Trailing Root Component Types of ComponentReceivedArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ComponentReceivedArg: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ComponentReceivedArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ComponentReceivedArg: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ComponentReceivedArg: $.ASN1Decoder<ComponentReceivedArg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ComponentReceivedArg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ComponentReceivedArg (el: _Element): ComponentReceivedArg {
    if (!_cached_decoder_for_ComponentReceivedArg) { _cached_decoder_for_ComponentReceivedArg = function (el: _Element): ComponentReceivedArg {
    let callUnrelatedDpSpecificCommonParameters!: CallUnrelatedDpSpecificCommonParameters;
    let componentType: OPTIONAL<ComponentType>;
    let componentCorrelationID: OPTIONAL<ComponentCorrelationID>;
    let extensions: OPTIONAL<ExtensionField[]>;
    let component: OPTIONAL<Component>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "callUnrelatedDpSpecificCommonParameters": (_el: _Element): void => { callUnrelatedDpSpecificCommonParameters = $._decode_implicit<CallUnrelatedDpSpecificCommonParameters>(() => _decode_CallUnrelatedDpSpecificCommonParameters)(_el); },
        "componentType": (_el: _Element): void => { componentType = $._decode_implicit<ComponentType>(() => _decode_ComponentType)(_el); },
        "componentCorrelationID": (_el: _Element): void => { componentCorrelationID = $._decode_implicit<ComponentCorrelationID>(() => _decode_ComponentCorrelationID)(_el); },
        "extensions": (_el: _Element): void => { extensions = $._decode_implicit<ExtensionField[]>(() => $._decodeSequenceOf<ExtensionField>(() => _decode_ExtensionField))(_el); },
        "component": (_el: _Element): void => { component = $._decode_explicit<Component>(() => _decode_Component)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ComponentReceivedArg,
        _extension_additions_list_spec_for_ComponentReceivedArg,
        _root_component_type_list_2_spec_for_ComponentReceivedArg,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new ComponentReceivedArg(
        callUnrelatedDpSpecificCommonParameters,
        componentType,
        componentCorrelationID,
        extensions,
        component,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_ComponentReceivedArg(el);
}

let _cached_encoder_for_ComponentReceivedArg: $.ASN1Encoder<ComponentReceivedArg> | null = null;

/**
 * @summary Encodes a(n) ComponentReceivedArg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ComponentReceivedArg, encoded as an ASN.1 Element.
 */
export
function _encode_ComponentReceivedArg (value: ComponentReceivedArg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ComponentReceivedArg) { _cached_encoder_for_ComponentReceivedArg = function (value: ComponentReceivedArg, elGetter: $.ASN1Encoder<ComponentReceivedArg>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(5 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_CallUnrelatedDpSpecificCommonParameters, $.BER)(value.callUnrelatedDpSpecificCommonParameters, $.BER);
    if (value.componentType !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => _encode_ComponentType, $.BER)(value.componentType, $.BER);
    }
    if (value.componentCorrelationID !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => _encode_ComponentCorrelationID, $.BER)(value.componentCorrelationID, $.BER);
    }
    if (value.extensions !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 4, () => $._encodeSequenceOf<ExtensionField>(() => _encode_ExtensionField, $.BER), $.BER)(value.extensions, $.BER);
    }
    if (value.component !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 5, () => _encode_Component, $.BER)(value.component, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_ComponentReceivedArg(value, elGetter);
}


/* eslint-enable */
