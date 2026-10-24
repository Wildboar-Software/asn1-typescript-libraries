/* eslint-disable */
import {
    type OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { ActionPerformed, _decode_ActionPerformed, _encode_ActionPerformed, _enum_for_ActionPerformed } from "../IN-SSF-SCF-datatypes/ActionPerformed.ta.mjs";
// export { ActionPerformed, _enum_for_ActionPerformed, ActionPerformed_activated /* IMPORTED_LONG_ENUMERATION_ITEM */, activated /* IMPORTED_SHORT_ENUMERATION_ITEM */, ActionPerformed_deactivated /* IMPORTED_LONG_ENUMERATION_ITEM */, deactivated /* IMPORTED_SHORT_ENUMERATION_ITEM */, ActionPerformed_alreadyActive /* IMPORTED_LONG_ENUMERATION_ITEM */, alreadyActive /* IMPORTED_SHORT_ENUMERATION_ITEM */, ActionPerformed_alreadyInactive /* IMPORTED_LONG_ENUMERATION_ITEM */, alreadyInactive /* IMPORTED_SHORT_ENUMERATION_ITEM */, ActionPerformed_isActive /* IMPORTED_LONG_ENUMERATION_ITEM */, isActive /* IMPORTED_SHORT_ENUMERATION_ITEM */, ActionPerformed_isInactive /* IMPORTED_LONG_ENUMERATION_ITEM */, isInactive /* IMPORTED_SHORT_ENUMERATION_ITEM */, ActionPerformed_tDPunknown /* IMPORTED_LONG_ENUMERATION_ITEM */, tDPunknown /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ActionPerformed, _encode_ActionPerformed } from "../IN-SSF-SCF-datatypes/ActionPerformed.ta.mjs";
import { Extensions, _decode_Extensions, _encode_Extensions } from "../IN-common-datatypes/Extensions.ta.mjs";
// export { Extensions, _decode_Extensions, _encode_Extensions } from "../IN-common-datatypes/Extensions.ta.mjs";


/**
 * @summary ManageTriggerDataResultArg_oneTriggerResult
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ManageTriggerDataResultArg-oneTriggerResult ::=
 * SEQUENCE {
 *   actionPerformed [0] ActionPerformed,
 *   extensions [1] Extensions OPTIONAL,
 *   ...
 * }
 * ```
 * 
 * @class
 */
export
class ManageTriggerDataResultArg_oneTriggerResult {
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
    readonly extensions: OPTIONAL<Extensions>;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        actionPerformed: ActionPerformed,
        extensions?: OPTIONAL<Extensions>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.actionPerformed = actionPerformed;
        this.extensions = extensions;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a ManageTriggerDataResultArg_oneTriggerResult
     * @description
     * 
     * This takes an `object` and converts it to a `ManageTriggerDataResultArg_oneTriggerResult`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ManageTriggerDataResultArg_oneTriggerResult`.
     * @returns {ManageTriggerDataResultArg_oneTriggerResult}
     */
    public static _from_object (_o: { [_K in keyof (ManageTriggerDataResultArg_oneTriggerResult)]: (ManageTriggerDataResultArg_oneTriggerResult)[_K] }): ManageTriggerDataResultArg_oneTriggerResult {
        return new ManageTriggerDataResultArg_oneTriggerResult(_o.actionPerformed, _o.extensions, _o._unrecognizedExtensionsList);
    }

        /**
         * @summary The enum used as the type of the component `actionPerformed`
         * @public
         * @static
         */

    public static _enum_for_actionPerformed = _enum_for_ActionPerformed;
}

/**
 * @summary The Leading Root Component Types of ManageTriggerDataResultArg_oneTriggerResult
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ManageTriggerDataResultArg_oneTriggerResult: $.ComponentSpec[] = [
    new $.ComponentSpec("actionPerformed", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of ManageTriggerDataResultArg_oneTriggerResult
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ManageTriggerDataResultArg_oneTriggerResult: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ManageTriggerDataResultArg_oneTriggerResult
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ManageTriggerDataResultArg_oneTriggerResult: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ManageTriggerDataResultArg_oneTriggerResult: $.ASN1Decoder<ManageTriggerDataResultArg_oneTriggerResult> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ManageTriggerDataResultArg_oneTriggerResult
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ManageTriggerDataResultArg_oneTriggerResult (el: _Element): ManageTriggerDataResultArg_oneTriggerResult {
    if (!_cached_decoder_for_ManageTriggerDataResultArg_oneTriggerResult) { _cached_decoder_for_ManageTriggerDataResultArg_oneTriggerResult = function (el: _Element): ManageTriggerDataResultArg_oneTriggerResult {
    let actionPerformed!: ActionPerformed;
    let extensions: OPTIONAL<Extensions>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "actionPerformed": (_el: _Element): void => { actionPerformed = $._decode_implicit<ActionPerformed>(() => _decode_ActionPerformed)(_el); },
        "extensions": (_el: _Element): void => { extensions = $._decode_implicit<Extensions>(() => _decode_Extensions)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ManageTriggerDataResultArg_oneTriggerResult,
        _extension_additions_list_spec_for_ManageTriggerDataResultArg_oneTriggerResult,
        _root_component_type_list_2_spec_for_ManageTriggerDataResultArg_oneTriggerResult,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new ManageTriggerDataResultArg_oneTriggerResult(
        actionPerformed,
        extensions,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_ManageTriggerDataResultArg_oneTriggerResult(el);
}

let _cached_encoder_for_ManageTriggerDataResultArg_oneTriggerResult: $.ASN1Encoder<ManageTriggerDataResultArg_oneTriggerResult> | null = null;

/**
 * @summary Encodes a(n) ManageTriggerDataResultArg_oneTriggerResult into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ManageTriggerDataResultArg_oneTriggerResult, encoded as an ASN.1 Element.
 */
export
function _encode_ManageTriggerDataResultArg_oneTriggerResult (value: ManageTriggerDataResultArg_oneTriggerResult, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ManageTriggerDataResultArg_oneTriggerResult) { _cached_encoder_for_ManageTriggerDataResultArg_oneTriggerResult = function (value: ManageTriggerDataResultArg_oneTriggerResult, elGetter: $.ASN1Encoder<ManageTriggerDataResultArg_oneTriggerResult>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(2 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_ActionPerformed, $.BER)(value.actionPerformed, $.BER);
    if (value.extensions !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => _encode_Extensions, $.BER)(value.extensions, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_ManageTriggerDataResultArg_oneTriggerResult(value, elGetter);
}


/* eslint-enable */
