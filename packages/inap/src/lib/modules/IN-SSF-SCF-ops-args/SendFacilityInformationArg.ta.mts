/* eslint-disable */
import {
    type OPTIONAL,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { ComponentType, _decode_ComponentType, _encode_ComponentType, _enum_for_ComponentType } from "../IN-SSF-SCF-datatypes/ComponentType.ta.mjs";
// export { ComponentType, _enum_for_ComponentType, ComponentType_any /* IMPORTED_LONG_ENUMERATION_ITEM */, any_ /* IMPORTED_SHORT_ENUMERATION_ITEM */, ComponentType_invoke /* IMPORTED_LONG_ENUMERATION_ITEM */, invoke /* IMPORTED_SHORT_ENUMERATION_ITEM */, ComponentType_rResult /* IMPORTED_LONG_ENUMERATION_ITEM */, rResult /* IMPORTED_SHORT_ENUMERATION_ITEM */, ComponentType_rError /* IMPORTED_LONG_ENUMERATION_ITEM */, rError /* IMPORTED_SHORT_ENUMERATION_ITEM */, ComponentType_rReject /* IMPORTED_LONG_ENUMERATION_ITEM */, rReject /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ComponentType, _encode_ComponentType } from "../IN-SSF-SCF-datatypes/ComponentType.ta.mjs";
import { type LegID, _decode_LegID, _encode_LegID } from "../IN-SSF-SCF-datatypes/LegID.ta.mjs";
// export { LegID, _decode_LegID, _encode_LegID } from "../IN-SSF-SCF-datatypes/LegID.ta.mjs";
import { type ComponentCorrelationID, _decode_ComponentCorrelationID, _encode_ComponentCorrelationID } from "../IN-SSF-SCF-datatypes/ComponentCorrelationID.ta.mjs";
// export { ComponentCorrelationID, _decode_ComponentCorrelationID, _encode_ComponentCorrelationID } from "../IN-SSF-SCF-datatypes/ComponentCorrelationID.ta.mjs";
import { type Component, _decode_Component, _encode_Component } from "../IN-SSF-SCF-datatypes/Component.ta.mjs";
// export { Component, _decode_Component, _encode_Component } from "../IN-SSF-SCF-datatypes/Component.ta.mjs";
import { CallProcessingOperation, CallProcessingOperation_fACility /* IMPORTED_LONG_ENUMERATION_ITEM */, _decode_CallProcessingOperation, _encode_CallProcessingOperation, _enum_for_CallProcessingOperation } from "../IN-SSF-SCF-datatypes/CallProcessingOperation.ta.mjs";
// export { CallProcessingOperation, _enum_for_CallProcessingOperation, CallProcessingOperation_aLERTing /* IMPORTED_LONG_ENUMERATION_ITEM */, aLERTing /* IMPORTED_SHORT_ENUMERATION_ITEM */, CallProcessingOperation_sETUP /* IMPORTED_LONG_ENUMERATION_ITEM */, sETUP /* IMPORTED_SHORT_ENUMERATION_ITEM */, CallProcessingOperation_cONNect /* IMPORTED_LONG_ENUMERATION_ITEM */, cONNect /* IMPORTED_SHORT_ENUMERATION_ITEM */, CallProcessingOperation_dISConnect /* IMPORTED_LONG_ENUMERATION_ITEM */, dISConnect /* IMPORTED_SHORT_ENUMERATION_ITEM */, CallProcessingOperation_rELease /* IMPORTED_LONG_ENUMERATION_ITEM */, rELease /* IMPORTED_SHORT_ENUMERATION_ITEM */, CallProcessingOperation_rELeaseCOMPlete /* IMPORTED_LONG_ENUMERATION_ITEM */, rELeaseCOMPlete /* IMPORTED_SHORT_ENUMERATION_ITEM */, CallProcessingOperation_fACility /* IMPORTED_LONG_ENUMERATION_ITEM */, fACility /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_CallProcessingOperation, _encode_CallProcessingOperation } from "../IN-SSF-SCF-datatypes/CallProcessingOperation.ta.mjs";
import { type Extensions, _decode_Extensions, _encode_Extensions } from "../IN-common-datatypes/Extensions.ta.mjs";
// export { Extensions, _decode_Extensions, _encode_Extensions } from "../IN-common-datatypes/Extensions.ta.mjs";


/**
 * @summary SendFacilityInformationArg
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SendFacilityInformationArg ::= SEQUENCE {
 *   componentType            [0]  ComponentType,
 *   legID                    [1]  LegID OPTIONAL,
 *   componentCorrelationID   [2]  ComponentCorrelationID OPTIONAL,
 *   component                [3]  Component,
 *   callProcessingOperation  [4]  CallProcessingOperation DEFAULT fACility,
 *   extensions               [5]  Extensions OPTIONAL,
 *   ...
 * }
 * ```
 * 
 * @class
 */
export
class SendFacilityInformationArg {
    /**
     * @summary `componentType`.
     * @public
     * @readonly
     */
    readonly componentType: ComponentType;
    /**
     * @summary `legID`.
     * @public
     * @readonly
     */
    readonly legID: OPTIONAL<LegID>;
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
    readonly component: Component;
    /**
     * @summary `callProcessingOperation`.
     * @public
     * @readonly
     */
    readonly callProcessingOperation: OPTIONAL<CallProcessingOperation>;
    /**
     * @summary `extensions`.
     * @public
     * @readonly
     */
    readonly extensions: OPTIONAL<Extensions>;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        componentType: ComponentType,
        legID: OPTIONAL<LegID>,
        componentCorrelationID: OPTIONAL<ComponentCorrelationID>,
        component: Component,
        callProcessingOperation?: OPTIONAL<CallProcessingOperation>,
        extensions?: OPTIONAL<Extensions>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.componentType = componentType;
        this.legID = legID;
        this.componentCorrelationID = componentCorrelationID;
        this.component = component;
        this.callProcessingOperation = callProcessingOperation;
        this.extensions = extensions;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a SendFacilityInformationArg
     * @description
     * 
     * This takes an `object` and converts it to a `SendFacilityInformationArg`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SendFacilityInformationArg`.
     * @returns {SendFacilityInformationArg}
     */
    public static _from_object (_o: { [_K in keyof (SendFacilityInformationArg)]: (SendFacilityInformationArg)[_K] }): SendFacilityInformationArg {
        return new SendFacilityInformationArg(_o.componentType, _o.legID, _o.componentCorrelationID, _o.component, _o.callProcessingOperation, _o.extensions, _o._unrecognizedExtensionsList);
    }

    /**
     * @summary Getter that returns the default value for `callProcessingOperation`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_callProcessingOperation (): _enum_for_CallProcessingOperation.fACility { return CallProcessingOperation_fACility; }        /**
         * @summary The enum used as the type of the component `componentType`
         * @public
         * @static
         */

    public static _enum_for_componentType: typeof _enum_for_ComponentType = _enum_for_ComponentType;        /**
         * @summary The enum used as the type of the component `callProcessingOperation`
         * @public
         * @static
         */

    public static _enum_for_callProcessingOperation: typeof _enum_for_CallProcessingOperation = _enum_for_CallProcessingOperation;
}

/**
 * @summary The Leading Root Component Types of SendFacilityInformationArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_SendFacilityInformationArg: $.ComponentSpec[] = [
    new $.ComponentSpec("componentType", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("legID", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("componentCorrelationID", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("component", false, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("callProcessingOperation", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.context, 5))
];

/**
 * @summary The Trailing Root Component Types of SendFacilityInformationArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_SendFacilityInformationArg: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of SendFacilityInformationArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_SendFacilityInformationArg: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_SendFacilityInformationArg: $.ASN1Decoder<SendFacilityInformationArg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SendFacilityInformationArg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SendFacilityInformationArg (el: _Element): SendFacilityInformationArg {
    if (!_cached_decoder_for_SendFacilityInformationArg) { _cached_decoder_for_SendFacilityInformationArg = function (el: _Element): SendFacilityInformationArg {
    let componentType!: ComponentType;
    let legID: OPTIONAL<LegID>;
    let componentCorrelationID: OPTIONAL<ComponentCorrelationID>;
    let component!: Component;
    let callProcessingOperation: OPTIONAL<CallProcessingOperation> = SendFacilityInformationArg._default_value_for_callProcessingOperation;
    let extensions: OPTIONAL<Extensions>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "componentType": (_el: _Element): void => { componentType = $._decode_implicit<ComponentType>(() => _decode_ComponentType)(_el); },
        "legID": (_el: _Element): void => { legID = $._decode_explicit<LegID>(() => _decode_LegID)(_el); },
        "componentCorrelationID": (_el: _Element): void => { componentCorrelationID = $._decode_implicit<ComponentCorrelationID>(() => _decode_ComponentCorrelationID)(_el); },
        "component": (_el: _Element): void => { component = $._decode_explicit<Component>(() => _decode_Component)(_el); },
        "callProcessingOperation": (_el: _Element): void => { callProcessingOperation = $._decode_implicit<CallProcessingOperation>(() => _decode_CallProcessingOperation)(_el); },
        "extensions": (_el: _Element): void => { extensions = $._decode_implicit<Extensions>(() => _decode_Extensions)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_SendFacilityInformationArg,
        _extension_additions_list_spec_for_SendFacilityInformationArg,
        _root_component_type_list_2_spec_for_SendFacilityInformationArg,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new SendFacilityInformationArg(
        componentType,
        legID,
        componentCorrelationID,
        component,
        callProcessingOperation,
        extensions,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_SendFacilityInformationArg(el);
}

let _cached_encoder_for_SendFacilityInformationArg: $.ASN1Encoder<SendFacilityInformationArg> | null = null;

/**
 * @summary Encodes a(n) SendFacilityInformationArg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SendFacilityInformationArg, encoded as an ASN.1 Element.
 */
export
function _encode_SendFacilityInformationArg (value: SendFacilityInformationArg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SendFacilityInformationArg) { _cached_encoder_for_SendFacilityInformationArg = function (value: SendFacilityInformationArg, elGetter: $.ASN1Encoder<SendFacilityInformationArg>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(6 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_ComponentType, $.BER)(value.componentType, $.BER);
    if (value.legID !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 1, () => _encode_LegID, $.BER)(value.legID, $.BER);
    }
    if (value.componentCorrelationID !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => _encode_ComponentCorrelationID, $.BER)(value.componentCorrelationID, $.BER);
    }
    _components[_components_i++] = /* REQUIRED   */ $._encode_explicit(_TagClass.context, 3, () => _encode_Component, $.BER)(value.component, $.BER);
    if (value.callProcessingOperation !== undefined && !$.deepEq(value.callProcessingOperation, SendFacilityInformationArg._default_value_for_callProcessingOperation)) {
        _components[_components_i++] = /* IF_DEFAULT */ $._encode_implicit(_TagClass.context, 4, () => _encode_CallProcessingOperation, $.BER)(value.callProcessingOperation, $.BER);
    }
    if (value.extensions !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 5, () => _encode_Extensions, $.BER)(value.extensions, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_SendFacilityInformationArg(value, elGetter);
}


/* eslint-enable */
