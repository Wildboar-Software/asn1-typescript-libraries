import {
    type Code,
    _decode_Code,
    _encode_Code,
} from "../Remote-Operations-Information-Objects/Code.ta.mjs";
/* eslint-disable */
import {
    type BOOLEAN,
    type OPTIONAL,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
// export { UISCRIPT } from "../IN-SCF-SRF-Classes/UISCRIPT.oca.mjs";
// export { SupportedUIScripts } from "../IN-SCF-SRF-Classes/SupportedUIScripts.osa.mjs";
import { Extensions, _decode_Extensions, _encode_Extensions } from "../IN-common-datatypes/Extensions.ta.mjs";
// export { Extensions, _decode_Extensions, _encode_Extensions } from "../IN-common-datatypes/Extensions.ta.mjs";
import { CallSegmentID, _decode_CallSegmentID, _encode_CallSegmentID } from "../IN-SSF-SCF-datatypes/CallSegmentID.ta.mjs";
// export { CallSegmentID, _decode_CallSegmentID, _encode_CallSegmentID } from "../IN-SSF-SCF-datatypes/CallSegmentID.ta.mjs";


/**
 * @summary ScriptRunArg
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ScriptRunArg ::= SEQUENCE {
 *   uIScriptId                 UISCRIPT.&id({SupportedUIScripts}),
 *   uIScriptSpecificInfo
 *     [0]  UISCRIPT.&SpecificInfo({SupportedUIScripts}{@uIScriptId}) OPTIONAL,
 *   extensions                 [1]  Extensions OPTIONAL,
 *   disconnectFromIPForbidden  [2]  BOOLEAN DEFAULT TRUE,
 *   callSegmentID              [3]  CallSegmentID OPTIONAL,
 *   ...
 * }
 * ```
 * 
 * @class
 */
export
class ScriptRunArg {
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
    readonly extensions: OPTIONAL<Extensions>;
    /**
     * @summary `disconnectFromIPForbidden`.
     * @public
     * @readonly
     */
    readonly disconnectFromIPForbidden: OPTIONAL<BOOLEAN>;
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
        extensions?: OPTIONAL<Extensions>,
        disconnectFromIPForbidden?: OPTIONAL<BOOLEAN>,
        callSegmentID?: OPTIONAL<CallSegmentID>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.uIScriptId = uIScriptId;
        this.uIScriptSpecificInfo = uIScriptSpecificInfo;
        this.extensions = extensions;
        this.disconnectFromIPForbidden = disconnectFromIPForbidden;
        this.callSegmentID = callSegmentID;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a ScriptRunArg
     * @description
     * 
     * This takes an `object` and converts it to a `ScriptRunArg`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ScriptRunArg`.
     * @returns {ScriptRunArg}
     */
    public static _from_object (_o: { [_K in keyof (ScriptRunArg)]: (ScriptRunArg)[_K] }): ScriptRunArg {
        return new ScriptRunArg(_o.uIScriptId, _o.uIScriptSpecificInfo, _o.extensions, _o.disconnectFromIPForbidden, _o.callSegmentID, _o._unrecognizedExtensionsList);
    }

    /**
     * @summary Getter that returns the default value for `disconnectFromIPForbidden`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_disconnectFromIPForbidden () { return true; }
}

/**
 * @summary The Leading Root Component Types of ScriptRunArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ScriptRunArg: $.ComponentSpec[] = [
    new $.ComponentSpec("uIScriptId", false, $.hasAnyTag),
    new $.ComponentSpec("uIScriptSpecificInfo", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("disconnectFromIPForbidden", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("callSegmentID", true, $.hasTag(_TagClass.context, 3))
];

/**
 * @summary The Trailing Root Component Types of ScriptRunArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ScriptRunArg: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ScriptRunArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ScriptRunArg: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ScriptRunArg: $.ASN1Decoder<ScriptRunArg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ScriptRunArg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ScriptRunArg (el: _Element): ScriptRunArg {
    if (!_cached_decoder_for_ScriptRunArg) { _cached_decoder_for_ScriptRunArg = function (el: _Element): ScriptRunArg {
    let uIScriptId!: Code;
    let uIScriptSpecificInfo: OPTIONAL<_Element>;
    let extensions: OPTIONAL<Extensions>;
    let disconnectFromIPForbidden: OPTIONAL<BOOLEAN> = ScriptRunArg._default_value_for_disconnectFromIPForbidden;
    let callSegmentID: OPTIONAL<CallSegmentID>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "uIScriptId": (_el: _Element): void => { uIScriptId = _decode_Code(_el); },
        "uIScriptSpecificInfo": (_el: _Element): void => { uIScriptSpecificInfo = $._decode_implicit<_Element>(() => $._decodeAny)(_el); },
        "extensions": (_el: _Element): void => { extensions = $._decode_implicit<Extensions>(() => _decode_Extensions)(_el); },
        "disconnectFromIPForbidden": (_el: _Element): void => { disconnectFromIPForbidden = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "callSegmentID": (_el: _Element): void => { callSegmentID = $._decode_implicit<CallSegmentID>(() => _decode_CallSegmentID)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ScriptRunArg,
        _extension_additions_list_spec_for_ScriptRunArg,
        _root_component_type_list_2_spec_for_ScriptRunArg,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new ScriptRunArg(
        uIScriptId,
        uIScriptSpecificInfo,
        extensions,
        disconnectFromIPForbidden,
        callSegmentID,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_ScriptRunArg(el);
}

let _cached_encoder_for_ScriptRunArg: $.ASN1Encoder<ScriptRunArg> | null = null;

/**
 * @summary Encodes a(n) ScriptRunArg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ScriptRunArg, encoded as an ASN.1 Element.
 */
export
function _encode_ScriptRunArg (value: ScriptRunArg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ScriptRunArg) { _cached_encoder_for_ScriptRunArg = function (value: ScriptRunArg, elGetter: $.ASN1Encoder<ScriptRunArg>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(5 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ _encode_Code(value.uIScriptId, $.BER);
    if (value.uIScriptSpecificInfo !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 0, () => $._encodeAny, $.BER)(value.uIScriptSpecificInfo, $.BER);
    }
    if (value.extensions !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => _encode_Extensions, $.BER)(value.extensions, $.BER);
    }
    if (value.disconnectFromIPForbidden !== undefined && !$.deepEq(value.disconnectFromIPForbidden, ScriptRunArg._default_value_for_disconnectFromIPForbidden)) {
        _components[_components_i++] = /* IF_DEFAULT */ $._encode_implicit(_TagClass.context, 2, () => $._encodeBoolean, $.BER)(value.disconnectFromIPForbidden, $.BER);
    }
    if (value.callSegmentID !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => _encode_CallSegmentID, $.BER)(value.callSegmentID, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_ScriptRunArg(value, elGetter);
}


/* eslint-enable */
