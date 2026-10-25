import {
    type Code,
    _decode_Code,
    _encode_Code,
} from "../Remote-Operations-Information-Objects/Code.ta.mjs";
/* eslint-disable */
import {
    type OPTIONAL,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
// export { UISCRIPT } from "../IN-CS2-classes/UISCRIPT.oca.mjs";
// export { SupportedUIScripts } from "../IN-CS2-classes/SupportedUIScripts.osa.mjs";
import { ExtensionField, _decode_ExtensionField, _encode_ExtensionField } from "../IN-CS2-datatypes/ExtensionField.ta.mjs";
// export { ExtensionField, _decode_ExtensionField, _encode_ExtensionField } from "../IN-CS2-datatypes/ExtensionField.ta.mjs";
import { type CallSegmentID, _decode_CallSegmentID, _encode_CallSegmentID } from "../IN-CS2-datatypes/CallSegmentID.ta.mjs";
// export { CallSegmentID, _decode_CallSegmentID, _encode_CallSegmentID } from "../IN-CS2-datatypes/CallSegmentID.ta.mjs";


/**
 * @summary ScriptCloseArg
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ScriptCloseArg ::= SEQUENCE {
 *   uIScriptId            UISCRIPT.&id({SupportedUIScripts}),
 *   uIScriptSpecificInfo
 *     [0]  UISCRIPT.&SpecificInfo({SupportedUIScripts}{@uIScriptId}) OPTIONAL,
 *   extensions
 *     [1]  SEQUENCE OF
 *            ExtensionField OPTIONAL,
 *   callSegmentID         [2]  CallSegmentID OPTIONAL,
 *   ...
 * }
 * ```
 * 
 * @class
 */
export
class ScriptCloseArg {
    /**
     * @summary `uIScriptId`.
     * @public
     * @readonly
     */
    readonly uIScriptId: Code;
    /**
     * @summary `uIScriptSpecificInfo`.
     * @public
     * @readonly
     */
    readonly uIScriptSpecificInfo: OPTIONAL<_Element>;
    /**
     * @summary `extensions`.
     * @public
     * @readonly
     */
    readonly extensions: OPTIONAL<ExtensionField[]>;
    /**
     * @summary `callSegmentID`.
     * @public
     * @readonly
     */
    readonly callSegmentID: OPTIONAL<CallSegmentID>;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        uIScriptId: Code,
        uIScriptSpecificInfo?: OPTIONAL<_Element>,
        extensions?: OPTIONAL<ExtensionField[]>,
        callSegmentID?: OPTIONAL<CallSegmentID>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.uIScriptId = uIScriptId;
        this.uIScriptSpecificInfo = uIScriptSpecificInfo;
        this.extensions = extensions;
        this.callSegmentID = callSegmentID;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a ScriptCloseArg
     * @description
     * 
     * This takes an `object` and converts it to a `ScriptCloseArg`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ScriptCloseArg`.
     * @returns {ScriptCloseArg}
     */
    public static _from_object (_o: { [_K in keyof (ScriptCloseArg)]: (ScriptCloseArg)[_K] }): ScriptCloseArg {
        return new ScriptCloseArg(_o.uIScriptId, _o.uIScriptSpecificInfo, _o.extensions, _o.callSegmentID, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of ScriptCloseArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ScriptCloseArg: $.ComponentSpec[] = [
    new $.ComponentSpec("uIScriptId", false, $.hasAnyTag),
    new $.ComponentSpec("uIScriptSpecificInfo", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("callSegmentID", true, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of ScriptCloseArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ScriptCloseArg: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ScriptCloseArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ScriptCloseArg: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ScriptCloseArg: $.ASN1Decoder<ScriptCloseArg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ScriptCloseArg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ScriptCloseArg (el: _Element): ScriptCloseArg {
    if (!_cached_decoder_for_ScriptCloseArg) { _cached_decoder_for_ScriptCloseArg = function (el: _Element): ScriptCloseArg {
    let uIScriptId!: Code;
    let uIScriptSpecificInfo: OPTIONAL<_Element>;
    let extensions: OPTIONAL<ExtensionField[]>;
    let callSegmentID: OPTIONAL<CallSegmentID>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "uIScriptId": (_el: _Element): void => { uIScriptId = _decode_Code(_el); },
        "uIScriptSpecificInfo": (_el: _Element): void => { uIScriptSpecificInfo = $._decode_implicit<_Element>(() => $._decodeAny)(_el); },
        "extensions": (_el: _Element): void => { extensions = $._decode_implicit<ExtensionField[]>(() => $._decodeSequenceOf<ExtensionField>(() => _decode_ExtensionField))(_el); },
        "callSegmentID": (_el: _Element): void => { callSegmentID = $._decode_implicit<CallSegmentID>(() => _decode_CallSegmentID)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ScriptCloseArg,
        _extension_additions_list_spec_for_ScriptCloseArg,
        _root_component_type_list_2_spec_for_ScriptCloseArg,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new ScriptCloseArg(
        uIScriptId,
        uIScriptSpecificInfo,
        extensions,
        callSegmentID,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_ScriptCloseArg(el);
}

let _cached_encoder_for_ScriptCloseArg: $.ASN1Encoder<ScriptCloseArg> | null = null;

/**
 * @summary Encodes a(n) ScriptCloseArg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ScriptCloseArg, encoded as an ASN.1 Element.
 */
export
function _encode_ScriptCloseArg (value: ScriptCloseArg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ScriptCloseArg) { _cached_encoder_for_ScriptCloseArg = function (value: ScriptCloseArg, elGetter: $.ASN1Encoder<ScriptCloseArg>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(4 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ _encode_Code(value.uIScriptId, $.BER);
    if (value.uIScriptSpecificInfo !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 0, () => $._encodeAny, $.BER)(value.uIScriptSpecificInfo, $.BER);
    }
    if (value.extensions !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => $._encodeSequenceOf<ExtensionField>(() => _encode_ExtensionField, $.BER), $.BER)(value.extensions, $.BER);
    }
    if (value.callSegmentID !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => _encode_CallSegmentID, $.BER)(value.callSegmentID, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_ScriptCloseArg(value, elGetter);
}


/* eslint-enable */
