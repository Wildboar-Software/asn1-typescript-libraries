/* eslint-disable */
import {
    type OPTIONAL,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { MCRExtensions, _decode_MCRExtensions, _encode_MCRExtensions } from "../SS-MCR-Operations-asn97/MCRExtensions.ta.mjs";

/**
 * @summary MCRequestResult
 * @description
 *
 * Result of `mCRequest` (ECMA-344 §6.3.1). The Co-operating PINX sends it when
 * the Destination PINX returns CONNECT (§6.5.2.1.2). Receipt means the
 * Requested Call is connected (§6.5.1.1.2). The only element is optional
 * extensions; §6.5 defines no other result contents.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-344/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MCRequestResult ::= SEQUENCE {
 *     extensions MCRExtensions OPTIONAL,
 *     ...
 * }
 * ```
 * 
 * @class
 */
export
class MCRequestResult {
    /**
     * @summary `extensions`.
     * @description
     *
     * Manufacturer-specific extension. This edition defines none in
     * `MakeCallRequestExtension` (ECMA-344 §6.3.1).
     * @public
     * @readonly
     */
    readonly extensions: OPTIONAL<MCRExtensions>;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        extensions?: OPTIONAL<MCRExtensions>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.extensions = extensions;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a MCRequestResult
     * @description
     * 
     * This takes an `object` and converts it to a `MCRequestResult`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `MCRequestResult`.
     * @returns {MCRequestResult}
     */
    public static _from_object (_o: { [_K in keyof (MCRequestResult)]: (MCRequestResult)[_K] }): MCRequestResult {
        return new MCRequestResult(_o.extensions, _o._unrecognizedExtensionsList);
    }

}

/**
 * @summary The Leading Root Component Types of MCRequestResult
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_MCRequestResult: $.ComponentSpec[] = [
    new $.ComponentSpec("extensions", true, $.or($.hasTag(_TagClass.universal, 5), $.hasTag(_TagClass.context, 0), $.hasTag(_TagClass.context, 1)))
];

/**
 * @summary The Trailing Root Component Types of MCRequestResult
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_MCRequestResult: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of MCRequestResult
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_MCRequestResult: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_MCRequestResult: $.ASN1Decoder<MCRequestResult> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MCRequestResult
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MCRequestResult (el: _Element): MCRequestResult {
    if (!_cached_decoder_for_MCRequestResult) { _cached_decoder_for_MCRequestResult = function (el: _Element): MCRequestResult {
    let extensions: OPTIONAL<MCRExtensions>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "extensions": (_el: _Element): void => { extensions = _decode_MCRExtensions(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_MCRequestResult,
        _extension_additions_list_spec_for_MCRequestResult,
        _root_component_type_list_2_spec_for_MCRequestResult,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new MCRequestResult(
        extensions,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_MCRequestResult(el);
}

let _cached_encoder_for_MCRequestResult: $.ASN1Encoder<MCRequestResult> | null = null;

/**
 * @summary Encodes a(n) MCRequestResult into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MCRequestResult, encoded as an ASN.1 Element.
 */
export
function _encode_MCRequestResult (value: MCRequestResult, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MCRequestResult) { _cached_encoder_for_MCRequestResult = function (value: MCRequestResult, _elGetter: $.ASN1Encoder<MCRequestResult>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(1 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    if (value.extensions !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ _encode_MCRExtensions(value.extensions, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_MCRequestResult(value, elGetter);
}

/* eslint-enable */
