/* eslint-disable */
import {
    type OPTIONAL,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { MCMServiceInfo, _decode_MCMServiceInfo, _encode_MCMServiceInfo } from "../SS-MCM-Operations-asn1-97/MCMServiceInfo.ta.mjs";
import { type MCMExtensions, _decode_MCMExtensions, _encode_MCMExtensions } from "../SS-MCM-Operations-asn1-97/MCMExtensions.ta.mjs";

/**
 * @summary MCMInterrogateRes
 * @description
 *
 * Result of `mCMInterrogate` (ECMA-347 §6.5.1.1.1). For
 * every Message Type in the invoke, whether complete or
 * compressed information is provided for new messages,
 * retrieved messages, or both.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-347/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MCMInterrogateRes ::= SEQUENCE {
 *     interrogateResult SEQUENCE OF MCMServiceInfo,
 *     extensions MCMExtensions OPTIONAL,
 *     ...
 * }
 * ```
 * 
 * @class
 */
export
class MCMInterrogateRes {
    /**
     * @summary `interrogateResult`.
     * @description
     *
     * One entry per Message Type named in the invoke.
     * ECMA-347 §6.5.1.1.1.
     * @public
     * @readonly
     */
    readonly interrogateResult: MCMServiceInfo[];
    /**
     * @summary `extensions`.
     * @description
     *
     * Manufacturer-specific extension. `MCMExtSet` defines none.
     * The procedures do not mention this component. ECMA-347 §6.3.1.
     * @public
     * @readonly
     */
    readonly extensions: OPTIONAL<MCMExtensions>;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        interrogateResult: MCMServiceInfo[],
        extensions?: OPTIONAL<MCMExtensions>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.interrogateResult = interrogateResult;
        this.extensions = extensions;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a MCMInterrogateRes
     * @description
     * 
     * This takes an `object` and converts it to a `MCMInterrogateRes`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `MCMInterrogateRes`.
     * @returns {MCMInterrogateRes}
     */
    public static _from_object (_o: { [_K in keyof (MCMInterrogateRes)]: (MCMInterrogateRes)[_K] }): MCMInterrogateRes {
        return new MCMInterrogateRes(_o.interrogateResult, _o.extensions, _o._unrecognizedExtensionsList);
    }

}

/**
 * @summary The Leading Root Component Types of MCMInterrogateRes
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_MCMInterrogateRes: $.ComponentSpec[] = [
    new $.ComponentSpec("interrogateResult", false, $.hasTag(_TagClass.universal, 16)),
    new $.ComponentSpec("extensions", true, $.or($.hasTag(_TagClass.universal, 5), $.hasTag(_TagClass.context, 1), $.hasTag(_TagClass.context, 2)))
];

/**
 * @summary The Trailing Root Component Types of MCMInterrogateRes
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_MCMInterrogateRes: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of MCMInterrogateRes
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_MCMInterrogateRes: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_MCMInterrogateRes: $.ASN1Decoder<MCMInterrogateRes> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MCMInterrogateRes
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MCMInterrogateRes (el: _Element): MCMInterrogateRes {
    if (!_cached_decoder_for_MCMInterrogateRes) { _cached_decoder_for_MCMInterrogateRes = function (el: _Element): MCMInterrogateRes {
    let interrogateResult!: MCMServiceInfo[];
    let extensions: OPTIONAL<MCMExtensions>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "interrogateResult": (_el: _Element): void => { interrogateResult = $._decodeSequenceOf<MCMServiceInfo>(() => _decode_MCMServiceInfo)(_el); },
        "extensions": (_el: _Element): void => { extensions = _decode_MCMExtensions(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_MCMInterrogateRes,
        _extension_additions_list_spec_for_MCMInterrogateRes,
        _root_component_type_list_2_spec_for_MCMInterrogateRes,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new MCMInterrogateRes(
        interrogateResult,
        extensions,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_MCMInterrogateRes(el);
}

let _cached_encoder_for_MCMInterrogateRes: $.ASN1Encoder<MCMInterrogateRes> | null = null;

/**
 * @summary Encodes a(n) MCMInterrogateRes into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MCMInterrogateRes, encoded as an ASN.1 Element.
 */
export
function _encode_MCMInterrogateRes (value: MCMInterrogateRes, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MCMInterrogateRes) { _cached_encoder_for_MCMInterrogateRes = function (value: MCMInterrogateRes, _elGetter: $.ASN1Encoder<MCMInterrogateRes>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(2 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encodeSequenceOf<MCMServiceInfo>(() => _encode_MCMServiceInfo, $.BER)(value.interrogateResult, $.BER);
    if (value.extensions !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ _encode_MCMExtensions(value.extensions, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_MCMInterrogateRes(value, elGetter);
}

/* eslint-enable */
