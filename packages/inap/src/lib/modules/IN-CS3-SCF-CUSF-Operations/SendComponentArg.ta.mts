/* eslint-disable */
import {
    type OPTIONAL,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { ComponentType, _decode_ComponentType, _encode_ComponentType, _enum_for_ComponentType } from "../IN-CS3-SSF-SCF-datatypes/ComponentType.ta.mjs";
// export { ComponentType, _enum_for_ComponentType, ComponentType_any /* IMPORTED_LONG_ENUMERATION_ITEM */, any_ /* IMPORTED_SHORT_ENUMERATION_ITEM */, ComponentType_invoke /* IMPORTED_LONG_ENUMERATION_ITEM */, invoke /* IMPORTED_SHORT_ENUMERATION_ITEM */, ComponentType_rResult /* IMPORTED_LONG_ENUMERATION_ITEM */, rResult /* IMPORTED_SHORT_ENUMERATION_ITEM */, ComponentType_rError /* IMPORTED_LONG_ENUMERATION_ITEM */, rError /* IMPORTED_SHORT_ENUMERATION_ITEM */, ComponentType_rReject /* IMPORTED_LONG_ENUMERATION_ITEM */, rReject /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ComponentType, _encode_ComponentType } from "../IN-CS3-SSF-SCF-datatypes/ComponentType.ta.mjs";
import { type ComponentCorrelationID, _decode_ComponentCorrelationID, _encode_ComponentCorrelationID } from "../IN-CS3-SSF-SCF-datatypes/ComponentCorrelationID.ta.mjs";
// export { ComponentCorrelationID, _decode_ComponentCorrelationID, _encode_ComponentCorrelationID } from "../IN-CS3-SSF-SCF-datatypes/ComponentCorrelationID.ta.mjs";
import { Message, Message_rELeaseCOMPlete /* IMPORTED_LONG_ENUMERATION_ITEM */, _decode_Message, _encode_Message, _enum_for_Message } from "../IN-CS3-SCF-CUSF-Datatypes/Message.ta.mjs";
// export { Message, _enum_for_Message, Message_rELease /* IMPORTED_LONG_ENUMERATION_ITEM */, rELease /* IMPORTED_SHORT_ENUMERATION_ITEM */, Message_rELeaseCOMPlete /* IMPORTED_LONG_ENUMERATION_ITEM */, rELeaseCOMPlete /* IMPORTED_SHORT_ENUMERATION_ITEM */, Message_fACility /* IMPORTED_LONG_ENUMERATION_ITEM */, fACility /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_Message, _encode_Message } from "../IN-CS3-SCF-CUSF-Datatypes/Message.ta.mjs";
import { type Duration, _decode_Duration, _encode_Duration } from "../IN-CS3-SSF-SCF-datatypes/Duration.ta.mjs";
// export { Duration, _decode_Duration, _encode_Duration } from "../IN-CS3-SSF-SCF-datatypes/Duration.ta.mjs";
import { type Extensions, _decode_Extensions, _encode_Extensions } from "../IN-CS3-common-datatypes/Extensions.ta.mjs";
// export { Extensions, _decode_Extensions, _encode_Extensions } from "../IN-CS3-common-datatypes/Extensions.ta.mjs";
import { type Component, _decode_Component, _encode_Component } from "../IN-CS3-SSF-SCF-datatypes/Component.ta.mjs";
// export { Component, _decode_Component, _encode_Component } from "../IN-CS3-SSF-SCF-datatypes/Component.ta.mjs";


/**
 * @summary SendComponentArg
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SendComponentArg ::= SEQUENCE {
 *   componentType           [0]  ComponentType,
 *   componentCorrelationID  [2]  ComponentCorrelationID OPTIONAL,
 *   message                 [3]  Message DEFAULT rELeaseCOMPlete,
 *   monitorDuration         [4]  Duration OPTIONAL,
 *   extensions              [5]  Extensions OPTIONAL,
 *   component               [6]  Component OPTIONAL,
 *   ...
 * }
 * ```
 * 
 * @class
 */
export
class SendComponentArg {
    /**
     * @summary `componentType`.
     * @public
     * @readonly
     */
    readonly componentType: ComponentType;
    /**
     * @summary `componentCorrelationID`.
     * @public
     * @readonly
     */
    readonly componentCorrelationID: OPTIONAL<ComponentCorrelationID>;
    /**
     * @summary `message`.
     * @public
     * @readonly
     */
    readonly message: OPTIONAL<Message>;
    /**
     * @summary `monitorDuration`.
     * @public
     * @readonly
     */
    readonly monitorDuration: OPTIONAL<Duration>;
    /**
     * @summary `extensions`.
     * @public
     * @readonly
     */
    readonly extensions: OPTIONAL<Extensions>;
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
        componentType: ComponentType,
        componentCorrelationID?: OPTIONAL<ComponentCorrelationID>,
        message?: OPTIONAL<Message>,
        monitorDuration?: OPTIONAL<Duration>,
        extensions?: OPTIONAL<Extensions>,
        component?: OPTIONAL<Component>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.componentType = componentType;
        this.componentCorrelationID = componentCorrelationID;
        this.message = message;
        this.monitorDuration = monitorDuration;
        this.extensions = extensions;
        this.component = component;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a SendComponentArg
     * @description
     * 
     * This takes an `object` and converts it to a `SendComponentArg`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SendComponentArg`.
     * @returns {SendComponentArg}
     */
    public static _from_object (_o: { [_K in keyof (SendComponentArg)]: (SendComponentArg)[_K] }): SendComponentArg {
        return new SendComponentArg(_o.componentType, _o.componentCorrelationID, _o.message, _o.monitorDuration, _o.extensions, _o.component, _o._unrecognizedExtensionsList);
    }

    /**
     * @summary Getter that returns the default value for `message`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_message (): _enum_for_Message.rELeaseCOMPlete { return Message_rELeaseCOMPlete; }        /**
         * @summary The enum used as the type of the component `componentType`
         * @public
         * @static
         */

    public static _enum_for_componentType: typeof _enum_for_ComponentType = _enum_for_ComponentType;        /**
         * @summary The enum used as the type of the component `message`
         * @public
         * @static
         */

    public static _enum_for_message: typeof _enum_for_Message = _enum_for_Message;
}

/**
 * @summary The Leading Root Component Types of SendComponentArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_SendComponentArg: $.ComponentSpec[] = [
    new $.ComponentSpec("componentType", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("componentCorrelationID", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("message", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("monitorDuration", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("component", true, $.hasTag(_TagClass.context, 6))
];

/**
 * @summary The Trailing Root Component Types of SendComponentArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_SendComponentArg: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of SendComponentArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_SendComponentArg: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_SendComponentArg: $.ASN1Decoder<SendComponentArg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SendComponentArg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SendComponentArg (el: _Element): SendComponentArg {
    if (!_cached_decoder_for_SendComponentArg) { _cached_decoder_for_SendComponentArg = function (el: _Element): SendComponentArg {
    let componentType!: ComponentType;
    let componentCorrelationID: OPTIONAL<ComponentCorrelationID>;
    let message: OPTIONAL<Message> = SendComponentArg._default_value_for_message;
    let monitorDuration: OPTIONAL<Duration>;
    let extensions: OPTIONAL<Extensions>;
    let component: OPTIONAL<Component>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "componentType": (_el: _Element): void => { componentType = $._decode_implicit<ComponentType>(() => _decode_ComponentType)(_el); },
        "componentCorrelationID": (_el: _Element): void => { componentCorrelationID = $._decode_implicit<ComponentCorrelationID>(() => _decode_ComponentCorrelationID)(_el); },
        "message": (_el: _Element): void => { message = $._decode_implicit<Message>(() => _decode_Message)(_el); },
        "monitorDuration": (_el: _Element): void => { monitorDuration = $._decode_implicit<Duration>(() => _decode_Duration)(_el); },
        "extensions": (_el: _Element): void => { extensions = $._decode_implicit<Extensions>(() => _decode_Extensions)(_el); },
        "component": (_el: _Element): void => { component = $._decode_explicit<Component>(() => _decode_Component)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_SendComponentArg,
        _extension_additions_list_spec_for_SendComponentArg,
        _root_component_type_list_2_spec_for_SendComponentArg,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new SendComponentArg(
        componentType,
        componentCorrelationID,
        message,
        monitorDuration,
        extensions,
        component,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_SendComponentArg(el);
}

let _cached_encoder_for_SendComponentArg: $.ASN1Encoder<SendComponentArg> | null = null;

/**
 * @summary Encodes a(n) SendComponentArg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SendComponentArg, encoded as an ASN.1 Element.
 */
export
function _encode_SendComponentArg (value: SendComponentArg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SendComponentArg) { _cached_encoder_for_SendComponentArg = function (value: SendComponentArg, elGetter: $.ASN1Encoder<SendComponentArg>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(6 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_ComponentType, $.BER)(value.componentType, $.BER);
    if (value.componentCorrelationID !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => _encode_ComponentCorrelationID, $.BER)(value.componentCorrelationID, $.BER);
    }
    if (value.message !== undefined && !$.deepEq(value.message, SendComponentArg._default_value_for_message)) {
        _components[_components_i++] = /* IF_DEFAULT */ $._encode_implicit(_TagClass.context, 3, () => _encode_Message, $.BER)(value.message, $.BER);
    }
    if (value.monitorDuration !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 4, () => _encode_Duration, $.BER)(value.monitorDuration, $.BER);
    }
    if (value.extensions !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 5, () => _encode_Extensions, $.BER)(value.extensions, $.BER);
    }
    if (value.component !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 6, () => _encode_Component, $.BER)(value.component, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_SendComponentArg(value, elGetter);
}


/* eslint-enable */
