/* eslint-disable */
import {
    type OPTIONAL,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { ActionIndicator, _decode_ActionIndicator, _encode_ActionIndicator, _enum_for_ActionIndicator } from "../IN-CS2-datatypes/ActionIndicator.ta.mjs";
// export { ActionIndicator, _enum_for_ActionIndicator, ActionIndicator_activate /* IMPORTED_LONG_ENUMERATION_ITEM */, activate /* IMPORTED_SHORT_ENUMERATION_ITEM */, ActionIndicator_deactivate /* IMPORTED_LONG_ENUMERATION_ITEM */, deactivate /* IMPORTED_SHORT_ENUMERATION_ITEM */, ActionIndicator_retrieve /* IMPORTED_LONG_ENUMERATION_ITEM */, retrieve /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ActionIndicator, _encode_ActionIndicator } from "../IN-CS2-datatypes/ActionIndicator.ta.mjs";
import { TriggerDataIdentifier, _decode_TriggerDataIdentifier, _encode_TriggerDataIdentifier } from "../IN-CS2-datatypes/TriggerDataIdentifier.ta.mjs";
// export { TriggerDataIdentifier, _decode_TriggerDataIdentifier, _encode_TriggerDataIdentifier } from "../IN-CS2-datatypes/TriggerDataIdentifier.ta.mjs";
import { type RegistratorIdentifier, _decode_RegistratorIdentifier, _encode_RegistratorIdentifier } from "../IN-CS2-datatypes/RegistratorIdentifier.ta.mjs";
// export { RegistratorIdentifier, _decode_RegistratorIdentifier, _encode_RegistratorIdentifier } from "../IN-CS2-datatypes/RegistratorIdentifier.ta.mjs";
import { ExtensionField, _decode_ExtensionField, _encode_ExtensionField } from "../IN-CS2-datatypes/ExtensionField.ta.mjs";
// export { ExtensionField, _decode_ExtensionField, _encode_ExtensionField } from "../IN-CS2-datatypes/ExtensionField.ta.mjs";


/**
 * @summary ManageTriggerDataArg
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ManageTriggerDataArg ::= SEQUENCE {
 *   actionIndicator        [0]  ActionIndicator,
 *   triggerDataIdentifier  [1]  TriggerDataIdentifier,
 *   registratorIdentifier  [2]  RegistratorIdentifier OPTIONAL,
 *   extensions
 *     [3]  SEQUENCE OF
 *            ExtensionField OPTIONAL,
 *   ...
 * }
 * ```
 * 
 * @class
 */
export
class ManageTriggerDataArg {
    /**
     * @summary `actionIndicator`.
     * @public
     * @readonly
     */
    readonly actionIndicator: ActionIndicator;
    /**
     * @summary `triggerDataIdentifier`.
     * @public
     * @readonly
     */
    readonly triggerDataIdentifier: TriggerDataIdentifier;
    /**
     * @summary `registratorIdentifier`.
     * @public
     * @readonly
     */
    readonly registratorIdentifier: OPTIONAL<RegistratorIdentifier>;
    /**
     * @summary `extensions`.
     * @public
     * @readonly
     */
    readonly extensions: OPTIONAL<ExtensionField[]>;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        actionIndicator: ActionIndicator,
        triggerDataIdentifier: TriggerDataIdentifier,
        registratorIdentifier?: OPTIONAL<RegistratorIdentifier>,
        extensions?: OPTIONAL<ExtensionField[]>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.actionIndicator = actionIndicator;
        this.triggerDataIdentifier = triggerDataIdentifier;
        this.registratorIdentifier = registratorIdentifier;
        this.extensions = extensions;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a ManageTriggerDataArg
     * @description
     * 
     * This takes an `object` and converts it to a `ManageTriggerDataArg`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ManageTriggerDataArg`.
     * @returns {ManageTriggerDataArg}
     */
    public static _from_object (_o: { [_K in keyof (ManageTriggerDataArg)]: (ManageTriggerDataArg)[_K] }): ManageTriggerDataArg {
        return new ManageTriggerDataArg(_o.actionIndicator, _o.triggerDataIdentifier, _o.registratorIdentifier, _o.extensions, _o._unrecognizedExtensionsList);
    }

        /**
         * @summary The enum used as the type of the component `actionIndicator`
         * @public
         * @static
         */

    public static _enum_for_actionIndicator: typeof _enum_for_ActionIndicator = _enum_for_ActionIndicator;
}

/**
 * @summary The Leading Root Component Types of ManageTriggerDataArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ManageTriggerDataArg: $.ComponentSpec[] = [
    new $.ComponentSpec("actionIndicator", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("triggerDataIdentifier", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("registratorIdentifier", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.context, 3))
];

/**
 * @summary The Trailing Root Component Types of ManageTriggerDataArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ManageTriggerDataArg: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ManageTriggerDataArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ManageTriggerDataArg: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ManageTriggerDataArg: $.ASN1Decoder<ManageTriggerDataArg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ManageTriggerDataArg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ManageTriggerDataArg (el: _Element): ManageTriggerDataArg {
    if (!_cached_decoder_for_ManageTriggerDataArg) { _cached_decoder_for_ManageTriggerDataArg = function (el: _Element): ManageTriggerDataArg {
    let actionIndicator!: ActionIndicator;
    let triggerDataIdentifier!: TriggerDataIdentifier;
    let registratorIdentifier: OPTIONAL<RegistratorIdentifier>;
    let extensions: OPTIONAL<ExtensionField[]>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "actionIndicator": (_el: _Element): void => { actionIndicator = $._decode_implicit<ActionIndicator>(() => _decode_ActionIndicator)(_el); },
        "triggerDataIdentifier": (_el: _Element): void => { triggerDataIdentifier = $._decode_implicit<TriggerDataIdentifier>(() => _decode_TriggerDataIdentifier)(_el); },
        "registratorIdentifier": (_el: _Element): void => { registratorIdentifier = $._decode_implicit<RegistratorIdentifier>(() => _decode_RegistratorIdentifier)(_el); },
        "extensions": (_el: _Element): void => { extensions = $._decode_implicit<ExtensionField[]>(() => $._decodeSequenceOf<ExtensionField>(() => _decode_ExtensionField))(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ManageTriggerDataArg,
        _extension_additions_list_spec_for_ManageTriggerDataArg,
        _root_component_type_list_2_spec_for_ManageTriggerDataArg,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new ManageTriggerDataArg(
        actionIndicator,
        triggerDataIdentifier,
        registratorIdentifier,
        extensions,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_ManageTriggerDataArg(el);
}

let _cached_encoder_for_ManageTriggerDataArg: $.ASN1Encoder<ManageTriggerDataArg> | null = null;

/**
 * @summary Encodes a(n) ManageTriggerDataArg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ManageTriggerDataArg, encoded as an ASN.1 Element.
 */
export
function _encode_ManageTriggerDataArg (value: ManageTriggerDataArg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ManageTriggerDataArg) { _cached_encoder_for_ManageTriggerDataArg = function (value: ManageTriggerDataArg, elGetter: $.ASN1Encoder<ManageTriggerDataArg>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(4 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_ActionIndicator, $.BER)(value.actionIndicator, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_TriggerDataIdentifier, $.BER)(value.triggerDataIdentifier, $.BER);
    if (value.registratorIdentifier !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => _encode_RegistratorIdentifier, $.BER)(value.registratorIdentifier, $.BER);
    }
    if (value.extensions !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => $._encodeSequenceOf<ExtensionField>(() => _encode_ExtensionField, $.BER), $.BER)(value.extensions, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_ManageTriggerDataArg(value, elGetter);
}


/* eslint-enable */
