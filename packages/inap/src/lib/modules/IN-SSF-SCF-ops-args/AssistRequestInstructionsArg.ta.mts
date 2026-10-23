/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { CorrelationID, _decode_CorrelationID, _encode_CorrelationID } from "../IN-SSF-SCF-datatypes/CorrelationID.ta.mjs";
// export { CorrelationID, _decode_CorrelationID, _encode_CorrelationID } from "../IN-SSF-SCF-datatypes/CorrelationID.ta.mjs";
import { IPAvailable, _decode_IPAvailable, _encode_IPAvailable } from "../IN-SSF-SCF-datatypes/IPAvailable.ta.mjs";
// export { IPAvailable, _decode_IPAvailable, _encode_IPAvailable } from "../IN-SSF-SCF-datatypes/IPAvailable.ta.mjs";
import { IPSSPCapabilities, _decode_IPSSPCapabilities, _encode_IPSSPCapabilities } from "../IN-SSF-SCF-datatypes/IPSSPCapabilities.ta.mjs";
// export { IPSSPCapabilities, _decode_IPSSPCapabilities, _encode_IPSSPCapabilities } from "../IN-SSF-SCF-datatypes/IPSSPCapabilities.ta.mjs";
import { Extensions, _decode_Extensions, _encode_Extensions } from "../IN-common-datatypes/Extensions.ta.mjs";
// export { Extensions, _decode_Extensions, _encode_Extensions } from "../IN-common-datatypes/Extensions.ta.mjs";


/**
 * @summary AssistRequestInstructionsArg
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AssistRequestInstructionsArg ::= SEQUENCE {
 *   correlationID      [0]  CorrelationID,
 *   iPAvailable        [1]  IPAvailable OPTIONAL,
 *   iPSSPCapabilities  [2]  IPSSPCapabilities OPTIONAL,
 *   extensions         [3]  Extensions OPTIONAL,
 *   ...
 * }
 * ```
 * 
 * @class
 */
export
class AssistRequestInstructionsArg {
    /**
     * @summary `correlationID`.
     * @public
     * @readonly
     */
    readonly correlationID: CorrelationID;
    /**
     * @summary `iPAvailable`.
     * @public
     * @readonly
     */
    readonly iPAvailable: OPTIONAL<IPAvailable>;
    /**
     * @summary `iPSSPCapabilities`.
     * @public
     * @readonly
     */
    readonly iPSSPCapabilities: OPTIONAL<IPSSPCapabilities>;
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
        correlationID: CorrelationID,
        iPAvailable?: OPTIONAL<IPAvailable>,
        iPSSPCapabilities?: OPTIONAL<IPSSPCapabilities>,
        extensions?: OPTIONAL<Extensions>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.correlationID = correlationID;
        this.iPAvailable = iPAvailable;
        this.iPSSPCapabilities = iPSSPCapabilities;
        this.extensions = extensions;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a AssistRequestInstructionsArg
     * @description
     * 
     * This takes an `object` and converts it to a `AssistRequestInstructionsArg`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AssistRequestInstructionsArg`.
     * @returns {AssistRequestInstructionsArg}
     */
    public static _from_object (_o: { [_K in keyof (AssistRequestInstructionsArg)]: (AssistRequestInstructionsArg)[_K] }): AssistRequestInstructionsArg {
        return new AssistRequestInstructionsArg(_o.correlationID, _o.iPAvailable, _o.iPSSPCapabilities, _o.extensions, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of AssistRequestInstructionsArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_AssistRequestInstructionsArg: $.ComponentSpec[] = [
    new $.ComponentSpec("correlationID", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("iPAvailable", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("iPSSPCapabilities", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.context, 3))
];

/**
 * @summary The Trailing Root Component Types of AssistRequestInstructionsArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_AssistRequestInstructionsArg: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of AssistRequestInstructionsArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_AssistRequestInstructionsArg: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_AssistRequestInstructionsArg: $.ASN1Decoder<AssistRequestInstructionsArg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AssistRequestInstructionsArg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AssistRequestInstructionsArg (el: _Element): AssistRequestInstructionsArg {
    if (!_cached_decoder_for_AssistRequestInstructionsArg) { _cached_decoder_for_AssistRequestInstructionsArg = function (el: _Element): AssistRequestInstructionsArg {
    let correlationID!: CorrelationID;
    let iPAvailable: OPTIONAL<IPAvailable>;
    let iPSSPCapabilities: OPTIONAL<IPSSPCapabilities>;
    let extensions: OPTIONAL<Extensions>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "correlationID": (_el: _Element): void => { correlationID = $._decode_implicit<CorrelationID>(() => _decode_CorrelationID)(_el); },
        "iPAvailable": (_el: _Element): void => { iPAvailable = $._decode_implicit<IPAvailable>(() => _decode_IPAvailable)(_el); },
        "iPSSPCapabilities": (_el: _Element): void => { iPSSPCapabilities = $._decode_implicit<IPSSPCapabilities>(() => _decode_IPSSPCapabilities)(_el); },
        "extensions": (_el: _Element): void => { extensions = $._decode_implicit<Extensions>(() => _decode_Extensions)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_AssistRequestInstructionsArg,
        _extension_additions_list_spec_for_AssistRequestInstructionsArg,
        _root_component_type_list_2_spec_for_AssistRequestInstructionsArg,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new AssistRequestInstructionsArg(
        correlationID,
        iPAvailable,
        iPSSPCapabilities,
        extensions,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_AssistRequestInstructionsArg(el);
}

let _cached_encoder_for_AssistRequestInstructionsArg: $.ASN1Encoder<AssistRequestInstructionsArg> | null = null;

/**
 * @summary Encodes a(n) AssistRequestInstructionsArg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AssistRequestInstructionsArg, encoded as an ASN.1 Element.
 */
export
function _encode_AssistRequestInstructionsArg (value: AssistRequestInstructionsArg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AssistRequestInstructionsArg) { _cached_encoder_for_AssistRequestInstructionsArg = function (value: AssistRequestInstructionsArg, elGetter: $.ASN1Encoder<AssistRequestInstructionsArg>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(4 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_CorrelationID, $.BER)(value.correlationID, $.BER);
    if (value.iPAvailable !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => _encode_IPAvailable, $.BER)(value.iPAvailable, $.BER);
    }
    if (value.iPSSPCapabilities !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => _encode_IPSSPCapabilities, $.BER)(value.iPSSPCapabilities, $.BER);
    }
    if (value.extensions !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => _encode_Extensions, $.BER)(value.extensions, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_AssistRequestInstructionsArg(value, elGetter);
}


/* eslint-enable */
