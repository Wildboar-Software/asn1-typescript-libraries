/* eslint-disable */
import {
    type OPTIONAL,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { ScfAddress, _decode_ScfAddress, _encode_ScfAddress } from "../IN-CS2-datatypes/ScfAddress.ta.mjs";
// export { ScfAddress, _decode_ScfAddress, _encode_ScfAddress } from "../IN-CS2-datatypes/ScfAddress.ta.mjs";
import { TraceInformation, _decode_TraceInformation, _encode_TraceInformation } from "../IN-CS2-datatypes/TraceInformation.ta.mjs";
// export { TraceInformation, _decode_TraceInformation, _encode_TraceInformation } from "../IN-CS2-datatypes/TraceInformation.ta.mjs";
import { SecurityParameters, _decode_SecurityParameters, _encode_SecurityParameters } from "../DirectoryAbstractService/SecurityParameters.ta.mjs";
// export { SecurityParameters, _decode_SecurityParameters, _encode_SecurityParameters } from "../DirectoryAbstractService/SecurityParameters.ta.mjs";
import { ExtensionField, _decode_ExtensionField, _encode_ExtensionField } from "../IN-CS2-datatypes/ExtensionField.ta.mjs";
// export { ExtensionField, _decode_ExtensionField, _encode_ExtensionField } from "../IN-CS2-datatypes/ExtensionField.ta.mjs";


/**
 * @summary ChainingResult
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ChainingResult ::= SEQUENCE {
 *   ultimateResponder   [0]  ScfAddress OPTIONAL,
 *   traceInformation    [1]  TraceInformation,
 *   securityParameters  [2]  SecurityParameters OPTIONAL,
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
class ChainingResult {
    /**
     * @summary `ultimateResponder`.
     * @public
     * @readonly
     */
    readonly ultimateResponder: OPTIONAL<ScfAddress>;
    /**
     * @summary `traceInformation`.
     * @public
     * @readonly
     */
    readonly traceInformation: TraceInformation;
    /**
     * @summary `securityParameters`.
     * @public
     * @readonly
     */
    readonly securityParameters: OPTIONAL<SecurityParameters>;
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
        ultimateResponder: OPTIONAL<ScfAddress>,
        traceInformation: TraceInformation,
        securityParameters?: OPTIONAL<SecurityParameters>,
        extensions?: OPTIONAL<ExtensionField[]>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.ultimateResponder = ultimateResponder;
        this.traceInformation = traceInformation;
        this.securityParameters = securityParameters;
        this.extensions = extensions;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a ChainingResult
     * @description
     * 
     * This takes an `object` and converts it to a `ChainingResult`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ChainingResult`.
     * @returns {ChainingResult}
     */
    public static _from_object (_o: { [_K in keyof (ChainingResult)]: (ChainingResult)[_K] }): ChainingResult {
        return new ChainingResult(_o.ultimateResponder, _o.traceInformation, _o.securityParameters, _o.extensions, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of ChainingResult
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ChainingResult: $.ComponentSpec[] = [
    new $.ComponentSpec("ultimateResponder", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("traceInformation", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("securityParameters", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.context, 3))
];

/**
 * @summary The Trailing Root Component Types of ChainingResult
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ChainingResult: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ChainingResult
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ChainingResult: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ChainingResult: $.ASN1Decoder<ChainingResult> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ChainingResult
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ChainingResult (el: _Element): ChainingResult {
    if (!_cached_decoder_for_ChainingResult) { _cached_decoder_for_ChainingResult = function (el: _Element): ChainingResult {
    let ultimateResponder: OPTIONAL<ScfAddress>;
    let traceInformation!: TraceInformation;
    let securityParameters: OPTIONAL<SecurityParameters>;
    let extensions: OPTIONAL<ExtensionField[]>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "ultimateResponder": (_el: _Element): void => { ultimateResponder = $._decode_implicit<ScfAddress>(() => _decode_ScfAddress)(_el); },
        "traceInformation": (_el: _Element): void => { traceInformation = $._decode_implicit<TraceInformation>(() => _decode_TraceInformation)(_el); },
        "securityParameters": (_el: _Element): void => { securityParameters = $._decode_implicit<SecurityParameters>(() => _decode_SecurityParameters)(_el); },
        "extensions": (_el: _Element): void => { extensions = $._decode_implicit<ExtensionField[]>(() => $._decodeSequenceOf<ExtensionField>(() => _decode_ExtensionField))(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ChainingResult,
        _extension_additions_list_spec_for_ChainingResult,
        _root_component_type_list_2_spec_for_ChainingResult,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new ChainingResult(
        ultimateResponder,
        traceInformation,
        securityParameters,
        extensions,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_ChainingResult(el);
}

let _cached_encoder_for_ChainingResult: $.ASN1Encoder<ChainingResult> | null = null;

/**
 * @summary Encodes a(n) ChainingResult into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ChainingResult, encoded as an ASN.1 Element.
 */
export
function _encode_ChainingResult (value: ChainingResult, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ChainingResult) { _cached_encoder_for_ChainingResult = function (value: ChainingResult, elGetter: $.ASN1Encoder<ChainingResult>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(4 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    if (value.ultimateResponder !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 0, () => _encode_ScfAddress, $.BER)(value.ultimateResponder, $.BER);
    }
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_TraceInformation, $.BER)(value.traceInformation, $.BER);
    if (value.securityParameters !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => _encode_SecurityParameters, $.BER)(value.securityParameters, $.BER);
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
    return _cached_encoder_for_ChainingResult(value, elGetter);
}


/* eslint-enable */
