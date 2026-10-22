/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { IN_ChainingResults, _decode_IN_ChainingResults, _encode_IN_ChainingResults } from "../IN-CS3-SDF-SDF-Operations/IN-ChainingResults.ta.mjs";
// export { IN_ChainingResults, _decode_IN_ChainingResults, _encode_IN_ChainingResults } from "../IN-CS3-SDF-SDF-Operations/IN-ChainingResults.ta.mjs";


/**
 * @summary in_Chained_ResultType_Type
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * in-Chained-ResultType-Type ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @class
 */
export
class in_Chained_ResultType_Type {
    /**
     * @summary `in_chainedResult`.
     * @public
     * @readonly
     */
    readonly in_chainedResult: IN_ChainingResults;
    /**
     * @summary `result`.
     * @public
     * @readonly
     */
    readonly result: operation["&ResultType"];

    constructor (
        in_chainedResult: IN_ChainingResults,
        result: operation["&ResultType"]
    ) {
        this.in_chainedResult = in_chainedResult;
        this.result = result;
    }

    /**
     * @summary Restructures an object into a in_Chained_ResultType_Type
     * @description
     * 
     * This takes an `object` and converts it to a `in_Chained_ResultType_Type`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `in_Chained_ResultType_Type`.
     * @returns {in_Chained_ResultType_Type}
     */
    public static _from_object (_o: { [_K in keyof (in_Chained_ResultType_Type)]: (in_Chained_ResultType_Type)[_K] }): in_Chained_ResultType_Type {
        return new in_Chained_ResultType_Type(_o.in_chainedResult, _o.result);
    }


}

/**
 * @summary The Leading Root Component Types of in_Chained_ResultType_Type
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_in_Chained_ResultType_Type: $.ComponentSpec[] = [
    new $.ComponentSpec("in-chainedResult", false, $.hasTag(_TagClass.universal, 17)),
    new $.ComponentSpec("result", false, $.hasTag(_TagClass.context, 0))
];

/**
 * @summary The Trailing Root Component Types of in_Chained_ResultType_Type
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_in_Chained_ResultType_Type: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of in_Chained_ResultType_Type
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_in_Chained_ResultType_Type: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_in_Chained_ResultType_Type: $.ASN1Decoder<in_Chained_ResultType_Type> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) in_Chained_ResultType_Type
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_in_Chained_ResultType_Type (el: _Element): in_Chained_ResultType_Type {
    if (!_cached_decoder_for_in_Chained_ResultType_Type) { _cached_decoder_for_in_Chained_ResultType_Type = function (el: _Element): in_Chained_ResultType_Type {
    /* START_OF_SET_COMPONENT_DECLARATIONS */
    let in_chainedResult!: IN_ChainingResults;
    let result!: operation["&ResultType"];
    /* END_OF_SET_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: $.DecodingMap = {
        "in-chainedResult": (_el: _Element): void => { in_chainedResult = _decode_IN_ChainingResults(_el); },
        "result": (_el: _Element): void => { result = $._decode_explicit<operation["&ResultType"]>(() => operation.decoderFor["&ResultType"])(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    $._parse_set(el, callbacks,
        _root_component_type_list_1_spec_for_in_Chained_ResultType_Type,
        _extension_additions_list_spec_for_in_Chained_ResultType_Type,
        _root_component_type_list_2_spec_for_in_Chained_ResultType_Type,
        undefined,
    );
    return new in_Chained_ResultType_Type( /* SET_CONSTRUCTOR_CALL */
        in_chainedResult,
        result
    );
}; }
    return _cached_decoder_for_in_Chained_ResultType_Type(el);
}

let _cached_encoder_for_in_Chained_ResultType_Type: $.ASN1Encoder<in_Chained_ResultType_Type> | null = null;

/**
 * @summary Encodes a(n) in_Chained_ResultType_Type into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The in_Chained_ResultType_Type, encoded as an ASN.1 Element.
 */
export
function _encode_in_Chained_ResultType_Type (value: in_Chained_ResultType_Type, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_in_Chained_ResultType_Type) { _cached_encoder_for_in_Chained_ResultType_Type = function (value: in_Chained_ResultType_Type, elGetter: $.ASN1Encoder<in_Chained_ResultType_Type>): _Element {
    return $._encodeSet([
        /* REQUIRED   */ _encode_IN_ChainingResults(value.in_chainedResult, $.BER),
        /* REQUIRED   */ $._encode_explicit(_TagClass.context, 0, () => operation.encoderFor["&ResultType"], $.BER)(value.result, $.BER)
    ], $.BER);
}; }
    return _cached_encoder_for_in_Chained_ResultType_Type(value, elGetter);
}


/* eslint-enable */
