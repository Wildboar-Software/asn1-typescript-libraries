/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { ChainingResult, _decode_ChainingResult, _encode_ChainingResult } from "../IN-CS2-SCF-SCF-ops-args/ChainingResult.ta.mjs";
// export { ChainingResult, _decode_ChainingResult, _encode_ChainingResult } from "../IN-CS2-SCF-SCF-ops-args/ChainingResult.ta.mjs";


/**
 * @summary scfChained_ResultType_Type
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * scfChained-ResultType-Type ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @class
 */
export
class scfChained_ResultType_Type {
    /**
     * @summary `chainedResult`.
     * @public
     * @readonly
     */
    readonly chainedResult: ChainingResult;
    /**
     * @summary `result`.
     * @public
     * @readonly
     */
    readonly result: OPTIONAL<_Element>;

    constructor (
        chainedResult: ChainingResult,
        result: OPTIONAL<_Element>
    ) {
        this.chainedResult = chainedResult;
        this.result = result;
    }

    /**
     * @summary Restructures an object into a scfChained_ResultType_Type
     * @description
     * 
     * This takes an `object` and converts it to a `scfChained_ResultType_Type`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `scfChained_ResultType_Type`.
     * @returns {scfChained_ResultType_Type}
     */
    public static _from_object (_o: { [_K in keyof (scfChained_ResultType_Type)]: (scfChained_ResultType_Type)[_K] }): scfChained_ResultType_Type {
        return new scfChained_ResultType_Type(_o.chainedResult, _o.result);
    }


}

/**
 * @summary The Leading Root Component Types of scfChained_ResultType_Type
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_scfChained_ResultType_Type: $.ComponentSpec[] = [
    new $.ComponentSpec("chainedResult", false, $.hasTag(_TagClass.universal, 16)),
    new $.ComponentSpec("result", true, $.hasTag(_TagClass.context, 0))
];

/**
 * @summary The Trailing Root Component Types of scfChained_ResultType_Type
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_scfChained_ResultType_Type: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of scfChained_ResultType_Type
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_scfChained_ResultType_Type: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_scfChained_ResultType_Type: $.ASN1Decoder<scfChained_ResultType_Type> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) scfChained_ResultType_Type
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_scfChained_ResultType_Type (el: _Element): scfChained_ResultType_Type {
    if (!_cached_decoder_for_scfChained_ResultType_Type) { _cached_decoder_for_scfChained_ResultType_Type = function (el: _Element): scfChained_ResultType_Type {
    let chainedResult!: ChainingResult;
    let result: OPTIONAL<_Element>;
    const callbacks: $.DecodingMap = {
        "chainedResult": (_el: _Element): void => { chainedResult = _decode_ChainingResult(_el); },
        "result": (_el: _Element): void => { result = $._decode_explicit<_Element>(() => $._decodeAny)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_scfChained_ResultType_Type,
        _extension_additions_list_spec_for_scfChained_ResultType_Type,
        _root_component_type_list_2_spec_for_scfChained_ResultType_Type,
        undefined,
    );
    return new scfChained_ResultType_Type(
        chainedResult,
        result
    );
}; }
    return _cached_decoder_for_scfChained_ResultType_Type(el);
}

let _cached_encoder_for_scfChained_ResultType_Type: $.ASN1Encoder<scfChained_ResultType_Type> | null = null;

/**
 * @summary Encodes a(n) scfChained_ResultType_Type into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The scfChained_ResultType_Type, encoded as an ASN.1 Element.
 */
export
function _encode_scfChained_ResultType_Type (value: scfChained_ResultType_Type, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_scfChained_ResultType_Type) { _cached_encoder_for_scfChained_ResultType_Type = function (value: scfChained_ResultType_Type, elGetter: $.ASN1Encoder<scfChained_ResultType_Type>): _Element {
    const _components: _Element[] = [];
    _components.push(/* REQUIRED   */ _encode_ChainingResult(value.chainedResult, $.BER));
    if (value.result !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 0, () => $._encodeAny, $.BER)(value.result, $.BER));
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_scfChained_ResultType_Type(value, elGetter);
}


/* eslint-enable */
