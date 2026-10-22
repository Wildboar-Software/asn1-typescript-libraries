/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { IN_ChainingResults, _decode_IN_ChainingResults, _encode_IN_ChainingResults } from "../IN-SDF-SDF-Operations/IN-ChainingResults.ta.mjs";
// export { IN_ChainingResults, _decode_IN_ChainingResults, _encode_IN_ChainingResults } from "../IN-SDF-SDF-Operations/IN-ChainingResults.ta.mjs";


/**
 * @summary in_Chained_ResultType_Type
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * in-Chained-ResultType-Type ::=
 * SET {
 *   in-chainedResult IN-ChainingResults,
 *   result [0] operation.&ResultType
 * }
 * ```
 *
 * @class
 */
export
class in_Chained_ResultType_Type<ResultType> {
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
    readonly result: ResultType;

    constructor (
        in_chainedResult: IN_ChainingResults,
        result: ResultType
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
    public static _from_object <ResultType> (_o: { [_K in keyof (in_Chained_ResultType_Type<ResultType>)]: (in_Chained_ResultType_Type<ResultType>)[_K] }): in_Chained_ResultType_Type<ResultType> {
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

/**
 * @summary Returns a function that will decode an ASN.1 element into a(n) in_Chained_ResultType_Type
 * @function
 * @param _decode_ResultType Decodes `operation.&ResultType`.
 * @returns A function that will decode an ASN.1 element.
 */
export function _get_decoder_for_in_Chained_ResultType_Type<ResultType>(
    _decode_ResultType: $.ASN1Decoder<ResultType>
): $.ASN1Decoder<in_Chained_ResultType_Type<ResultType>> {
    return function (el: _Element): in_Chained_ResultType_Type<ResultType> {
        let in_chainedResult!: IN_ChainingResults;
        let result!: ResultType;
        const callbacks: $.DecodingMap = {
            "in-chainedResult": (_el: _Element): void => { in_chainedResult = _decode_IN_ChainingResults(_el); },
            "result": (_el: _Element): void => { result = $._decode_explicit<ResultType>(() => _decode_ResultType)(_el); }
        };
        $._parse_set(el, callbacks,
            _root_component_type_list_1_spec_for_in_Chained_ResultType_Type,
            _extension_additions_list_spec_for_in_Chained_ResultType_Type,
            _root_component_type_list_2_spec_for_in_Chained_ResultType_Type,
            undefined,
        );
        return new in_Chained_ResultType_Type(
            in_chainedResult,
            result
        );
    };
}

/**
 * @summary Returns a function that will encode a(n) in_Chained_ResultType_Type into an ASN.1 Element.
 * @function
 * @param _encode_ResultType Encodes `operation.&ResultType`.
 * @returns A function that will encode a(n) in_Chained_ResultType_Type as an ASN.1 element.
 */
export function _get_encoder_for_in_Chained_ResultType_Type<ResultType>(
    _encode_ResultType: $.ASN1Encoder<ResultType>
): $.ASN1Encoder<in_Chained_ResultType_Type<ResultType>> {
    return function (value: in_Chained_ResultType_Type<ResultType>): _Element {
        return $._encodeSet([
            /* REQUIRED   */ _encode_IN_ChainingResults(value.in_chainedResult, $.BER),
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 0, () => _encode_ResultType, $.BER)(value.result, $.BER)
        ], $.BER);
    };
}


/* eslint-enable */
