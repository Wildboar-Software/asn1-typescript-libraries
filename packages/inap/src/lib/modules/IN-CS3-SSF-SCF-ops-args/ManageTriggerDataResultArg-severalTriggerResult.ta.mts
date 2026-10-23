/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { TriggerResults, _decode_TriggerResults, _encode_TriggerResults } from "../IN-CS3-SSF-SCF-datatypes/TriggerResults.ta.mjs";
// export { TriggerResults, _decode_TriggerResults, _encode_TriggerResults } from "../IN-CS3-SSF-SCF-datatypes/TriggerResults.ta.mjs";
import { Extensions, _decode_Extensions, _encode_Extensions } from "../IN-CS3-common-datatypes/Extensions.ta.mjs";
// export { Extensions, _decode_Extensions, _encode_Extensions } from "../IN-CS3-common-datatypes/Extensions.ta.mjs";


/**
 * @summary ManageTriggerDataResultArg_severalTriggerResult
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ManageTriggerDataResultArg-severalTriggerResult ::=
 * SEQUENCE {
 *   results [0] TriggerResults,
 *   extensions [1] Extensions OPTIONAL,
 *   ...
 * }
 * ```
 * 
 * @class
 */
export
class ManageTriggerDataResultArg_severalTriggerResult {
    /**
     * @summary `results`.
     * @public
     * @readonly
     */
    readonly results: TriggerResults;
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
        results: TriggerResults,
        extensions?: OPTIONAL<Extensions>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.results = results;
        this.extensions = extensions;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a ManageTriggerDataResultArg_severalTriggerResult
     * @description
     * 
     * This takes an `object` and converts it to a `ManageTriggerDataResultArg_severalTriggerResult`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ManageTriggerDataResultArg_severalTriggerResult`.
     * @returns {ManageTriggerDataResultArg_severalTriggerResult}
     */
    public static _from_object (_o: { [_K in keyof (ManageTriggerDataResultArg_severalTriggerResult)]: (ManageTriggerDataResultArg_severalTriggerResult)[_K] }): ManageTriggerDataResultArg_severalTriggerResult {
        return new ManageTriggerDataResultArg_severalTriggerResult(_o.results, _o.extensions, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of ManageTriggerDataResultArg_severalTriggerResult
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ManageTriggerDataResultArg_severalTriggerResult: $.ComponentSpec[] = [
    new $.ComponentSpec("results", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of ManageTriggerDataResultArg_severalTriggerResult
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ManageTriggerDataResultArg_severalTriggerResult: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ManageTriggerDataResultArg_severalTriggerResult
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ManageTriggerDataResultArg_severalTriggerResult: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ManageTriggerDataResultArg_severalTriggerResult: $.ASN1Decoder<ManageTriggerDataResultArg_severalTriggerResult> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ManageTriggerDataResultArg_severalTriggerResult
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ManageTriggerDataResultArg_severalTriggerResult (el: _Element): ManageTriggerDataResultArg_severalTriggerResult {
    if (!_cached_decoder_for_ManageTriggerDataResultArg_severalTriggerResult) { _cached_decoder_for_ManageTriggerDataResultArg_severalTriggerResult = function (el: _Element): ManageTriggerDataResultArg_severalTriggerResult {
    let results!: TriggerResults;
    let extensions: OPTIONAL<Extensions>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "results": (_el: _Element): void => { results = $._decode_implicit<TriggerResults>(() => _decode_TriggerResults)(_el); },
        "extensions": (_el: _Element): void => { extensions = $._decode_implicit<Extensions>(() => _decode_Extensions)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ManageTriggerDataResultArg_severalTriggerResult,
        _extension_additions_list_spec_for_ManageTriggerDataResultArg_severalTriggerResult,
        _root_component_type_list_2_spec_for_ManageTriggerDataResultArg_severalTriggerResult,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new ManageTriggerDataResultArg_severalTriggerResult(
        results,
        extensions,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_ManageTriggerDataResultArg_severalTriggerResult(el);
}

let _cached_encoder_for_ManageTriggerDataResultArg_severalTriggerResult: $.ASN1Encoder<ManageTriggerDataResultArg_severalTriggerResult> | null = null;

/**
 * @summary Encodes a(n) ManageTriggerDataResultArg_severalTriggerResult into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ManageTriggerDataResultArg_severalTriggerResult, encoded as an ASN.1 Element.
 */
export
function _encode_ManageTriggerDataResultArg_severalTriggerResult (value: ManageTriggerDataResultArg_severalTriggerResult, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ManageTriggerDataResultArg_severalTriggerResult) { _cached_encoder_for_ManageTriggerDataResultArg_severalTriggerResult = function (value: ManageTriggerDataResultArg_severalTriggerResult, elGetter: $.ASN1Encoder<ManageTriggerDataResultArg_severalTriggerResult>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(2 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_TriggerResults, $.BER)(value.results, $.BER);
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
    return _cached_encoder_for_ManageTriggerDataResultArg_severalTriggerResult(value, elGetter);
}


/* eslint-enable */
