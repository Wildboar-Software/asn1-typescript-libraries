/* eslint-disable */
import {
    type OPTIONAL,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { ActionPerformed, _decode_ActionPerformed, _encode_ActionPerformed, _enum_for_ActionPerformed } from "../IN-CS2-datatypes/ActionPerformed.ta.mjs";
// export { ActionPerformed, _enum_for_ActionPerformed, ActionPerformed_activated /* IMPORTED_LONG_ENUMERATION_ITEM */, activated /* IMPORTED_SHORT_ENUMERATION_ITEM */, ActionPerformed_deactivated /* IMPORTED_LONG_ENUMERATION_ITEM */, deactivated /* IMPORTED_SHORT_ENUMERATION_ITEM */, ActionPerformed_alreadyActive /* IMPORTED_LONG_ENUMERATION_ITEM */, alreadyActive /* IMPORTED_SHORT_ENUMERATION_ITEM */, ActionPerformed_alreadyInactive /* IMPORTED_LONG_ENUMERATION_ITEM */, alreadyInactive /* IMPORTED_SHORT_ENUMERATION_ITEM */, ActionPerformed_isActive /* IMPORTED_LONG_ENUMERATION_ITEM */, isActive /* IMPORTED_SHORT_ENUMERATION_ITEM */, ActionPerformed_isInactive /* IMPORTED_LONG_ENUMERATION_ITEM */, isInactive /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ActionPerformed, _encode_ActionPerformed } from "../IN-CS2-datatypes/ActionPerformed.ta.mjs";
import { ExtensionField, _decode_ExtensionField, _encode_ExtensionField } from "../IN-CS2-datatypes/ExtensionField.ta.mjs";
// export { ExtensionField, _decode_ExtensionField, _encode_ExtensionField } from "../IN-CS2-datatypes/ExtensionField.ta.mjs";


/**
 * @summary ManageTriggerDataResultArg
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ManageTriggerDataResultArg ::= SEQUENCE {
 *   actionPerformed  [0]  ActionPerformed,
 *   extensions
 *     [1]  SEQUENCE OF
 *            ExtensionField OPTIONAL,
 *   ...
 * }
 * ```
 * 
 * @class
 */
export
class ManageTriggerDataResultArg {
    /**
     * @summary `actionPerformed`.
     * @public
     * @readonly
     */
    readonly actionPerformed: ActionPerformed;
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
        actionPerformed: ActionPerformed,
        extensions?: OPTIONAL<ExtensionField[]>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.actionPerformed = actionPerformed;
        this.extensions = extensions;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a ManageTriggerDataResultArg
     * @description
     * 
     * This takes an `object` and converts it to a `ManageTriggerDataResultArg`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ManageTriggerDataResultArg`.
     * @returns {ManageTriggerDataResultArg}
     */
    public static _from_object (_o: { [_K in keyof (ManageTriggerDataResultArg)]: (ManageTriggerDataResultArg)[_K] }): ManageTriggerDataResultArg {
        return new ManageTriggerDataResultArg(_o.actionPerformed, _o.extensions, _o._unrecognizedExtensionsList);
    }

        /**
         * @summary The enum used as the type of the component `actionPerformed`
         * @public
         * @static
         */

    public static _enum_for_actionPerformed = _enum_for_ActionPerformed;
}

/**
 * @summary The Leading Root Component Types of ManageTriggerDataResultArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ManageTriggerDataResultArg: $.ComponentSpec[] = [
    new $.ComponentSpec("actionPerformed", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of ManageTriggerDataResultArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ManageTriggerDataResultArg: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ManageTriggerDataResultArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ManageTriggerDataResultArg: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ManageTriggerDataResultArg: $.ASN1Decoder<ManageTriggerDataResultArg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ManageTriggerDataResultArg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ManageTriggerDataResultArg (el: _Element): ManageTriggerDataResultArg {
    if (!_cached_decoder_for_ManageTriggerDataResultArg) { _cached_decoder_for_ManageTriggerDataResultArg = function (el: _Element): ManageTriggerDataResultArg {
    let actionPerformed!: ActionPerformed;
    let extensions: OPTIONAL<ExtensionField[]>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "actionPerformed": (_el: _Element): void => { actionPerformed = $._decode_implicit<ActionPerformed>(() => _decode_ActionPerformed)(_el); },
        "extensions": (_el: _Element): void => { extensions = $._decode_implicit<ExtensionField[]>(() => $._decodeSequenceOf<ExtensionField>(() => _decode_ExtensionField))(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ManageTriggerDataResultArg,
        _extension_additions_list_spec_for_ManageTriggerDataResultArg,
        _root_component_type_list_2_spec_for_ManageTriggerDataResultArg,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new ManageTriggerDataResultArg(
        actionPerformed,
        extensions,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_ManageTriggerDataResultArg(el);
}

let _cached_encoder_for_ManageTriggerDataResultArg: $.ASN1Encoder<ManageTriggerDataResultArg> | null = null;

/**
 * @summary Encodes a(n) ManageTriggerDataResultArg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ManageTriggerDataResultArg, encoded as an ASN.1 Element.
 */
export
function _encode_ManageTriggerDataResultArg (value: ManageTriggerDataResultArg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ManageTriggerDataResultArg) { _cached_encoder_for_ManageTriggerDataResultArg = function (value: ManageTriggerDataResultArg, elGetter: $.ASN1Encoder<ManageTriggerDataResultArg>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(2 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_ActionPerformed, $.BER)(value.actionPerformed, $.BER);
    if (value.extensions !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => $._encodeSequenceOf<ExtensionField>(() => _encode_ExtensionField, $.BER), $.BER)(value.extensions, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_ManageTriggerDataResultArg(value, elGetter);
}


/* eslint-enable */
