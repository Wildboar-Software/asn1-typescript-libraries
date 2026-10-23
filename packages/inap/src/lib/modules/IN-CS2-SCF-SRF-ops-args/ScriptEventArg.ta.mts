import {
    type Code,
    _decode_Code,
    _encode_Code,
} from "../Remote-Operations-Information-Objects/Code.ta.mjs";
/* eslint-disable */
import {
    BOOLEAN,
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
// export { UISCRIPT } from "../IN-CS2-classes/UISCRIPT.oca.mjs";
// export { SupportedUIScripts } from "../IN-CS2-classes/SupportedUIScripts.osa.mjs";
import { ExtensionField, _decode_ExtensionField, _encode_ExtensionField } from "../IN-CS2-datatypes/ExtensionField.ta.mjs";
// export { ExtensionField, _decode_ExtensionField, _encode_ExtensionField } from "../IN-CS2-datatypes/ExtensionField.ta.mjs";
import { CallSegmentID, _decode_CallSegmentID, _encode_CallSegmentID } from "../IN-CS2-datatypes/CallSegmentID.ta.mjs";
// export { CallSegmentID, _decode_CallSegmentID, _encode_CallSegmentID } from "../IN-CS2-datatypes/CallSegmentID.ta.mjs";


/**
 * @summary ScriptEventArg
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ScriptEventArg ::= SEQUENCE {
 *   uIScriptId          UISCRIPT.&id({SupportedUIScripts}),
 *   uIScriptResult
 *     [0]  UISCRIPT.&Result({SupportedUIScripts}{@uIScriptId}) OPTIONAL,
 *   extensions
 *     [1]  SEQUENCE OF
 *            ExtensionField OPTIONAL,
 *   callSegmentID       [2]  CallSegmentID OPTIONAL,
 *   lastEventIndicator  [3]  BOOLEAN DEFAULT FALSE,
 *   ...
 * }
 * ```
 * 
 * @class
 */
export
class ScriptEventArg {
    /**
     * @summary `uIScriptId`.
     * @public
     * @readonly
     */
    readonly uIScriptId: Code;
    /**
     * @summary `uIScriptResult`.
     * @public
     * @readonly
     */
    readonly uIScriptResult: OPTIONAL<_Element>;
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
     * @summary `lastEventIndicator`.
     * @public
     * @readonly
     */
    readonly lastEventIndicator: OPTIONAL<BOOLEAN>;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        uIScriptId: Code,
        uIScriptResult?: OPTIONAL<_Element>,
        extensions?: OPTIONAL<ExtensionField[]>,
        callSegmentID?: OPTIONAL<CallSegmentID>,
        lastEventIndicator?: OPTIONAL<BOOLEAN>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.uIScriptId = uIScriptId;
        this.uIScriptResult = uIScriptResult;
        this.extensions = extensions;
        this.callSegmentID = callSegmentID;
        this.lastEventIndicator = lastEventIndicator;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a ScriptEventArg
     * @description
     * 
     * This takes an `object` and converts it to a `ScriptEventArg`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ScriptEventArg`.
     * @returns {ScriptEventArg}
     */
    public static _from_object (_o: { [_K in keyof (ScriptEventArg)]: (ScriptEventArg)[_K] }): ScriptEventArg {
        return new ScriptEventArg(_o.uIScriptId, _o.uIScriptResult, _o.extensions, _o.callSegmentID, _o.lastEventIndicator, _o._unrecognizedExtensionsList);
    }

    /**
     * @summary Getter that returns the default value for `lastEventIndicator`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_lastEventIndicator () { return false; }
}

/**
 * @summary The Leading Root Component Types of ScriptEventArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ScriptEventArg: $.ComponentSpec[] = [
    new $.ComponentSpec("uIScriptId", false, $.hasAnyTag),
    new $.ComponentSpec("uIScriptResult", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("callSegmentID", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("lastEventIndicator", true, $.hasTag(_TagClass.context, 3))
];

/**
 * @summary The Trailing Root Component Types of ScriptEventArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ScriptEventArg: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ScriptEventArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ScriptEventArg: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ScriptEventArg: $.ASN1Decoder<ScriptEventArg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ScriptEventArg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ScriptEventArg (el: _Element): ScriptEventArg {
    if (!_cached_decoder_for_ScriptEventArg) { _cached_decoder_for_ScriptEventArg = function (el: _Element): ScriptEventArg {
    let uIScriptId!: Code;
    let uIScriptResult: OPTIONAL<_Element>;
    let extensions: OPTIONAL<ExtensionField[]>;
    let callSegmentID: OPTIONAL<CallSegmentID>;
    let lastEventIndicator: OPTIONAL<BOOLEAN> = ScriptEventArg._default_value_for_lastEventIndicator;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "uIScriptId": (_el: _Element): void => { uIScriptId = _decode_Code(_el); },
        "uIScriptResult": (_el: _Element): void => { uIScriptResult = $._decode_implicit<_Element>(() => $._decodeAny)(_el); },
        "extensions": (_el: _Element): void => { extensions = $._decode_implicit<ExtensionField[]>(() => $._decodeSequenceOf<ExtensionField>(() => _decode_ExtensionField))(_el); },
        "callSegmentID": (_el: _Element): void => { callSegmentID = $._decode_implicit<CallSegmentID>(() => _decode_CallSegmentID)(_el); },
        "lastEventIndicator": (_el: _Element): void => { lastEventIndicator = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ScriptEventArg,
        _extension_additions_list_spec_for_ScriptEventArg,
        _root_component_type_list_2_spec_for_ScriptEventArg,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new ScriptEventArg(
        uIScriptId,
        uIScriptResult,
        extensions,
        callSegmentID,
        lastEventIndicator,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_ScriptEventArg(el);
}

let _cached_encoder_for_ScriptEventArg: $.ASN1Encoder<ScriptEventArg> | null = null;

/**
 * @summary Encodes a(n) ScriptEventArg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ScriptEventArg, encoded as an ASN.1 Element.
 */
export
function _encode_ScriptEventArg (value: ScriptEventArg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ScriptEventArg) { _cached_encoder_for_ScriptEventArg = function (value: ScriptEventArg, elGetter: $.ASN1Encoder<ScriptEventArg>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(5 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ _encode_Code(value.uIScriptId, $.BER);
    if (value.uIScriptResult !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 0, () => $._encodeAny, $.BER)(value.uIScriptResult, $.BER);
    }
    if (value.extensions !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => $._encodeSequenceOf<ExtensionField>(() => _encode_ExtensionField, $.BER), $.BER)(value.extensions, $.BER);
    }
    if (value.callSegmentID !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => _encode_CallSegmentID, $.BER)(value.callSegmentID, $.BER);
    }
    if (value.lastEventIndicator !== undefined && !$.deepEq(value.lastEventIndicator, ScriptEventArg._default_value_for_lastEventIndicator)) {
        _components[_components_i++] = /* IF_DEFAULT */ $._encode_implicit(_TagClass.context, 3, () => $._encodeBoolean, $.BER)(value.lastEventIndicator, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_ScriptEventArg(value, elGetter);
}


/* eslint-enable */
