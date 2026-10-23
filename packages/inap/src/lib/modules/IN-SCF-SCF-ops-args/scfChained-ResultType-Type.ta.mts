/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { ChainingResult, _decode_ChainingResult, _encode_ChainingResult } from "../IN-SCF-SCF-ops-args/ChainingResult.ta.mjs";
// export { ChainingResult, _decode_ChainingResult, _encode_ChainingResult } from "../IN-SCF-SCF-ops-args/ChainingResult.ta.mjs";


/**
 * @summary scfChained_ResultType_Type
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * scfChained-ResultType-Type ::=
 * SEQUENCE {
 *   chainedResult ChainingResult,
 *   result [0] operation.&ResultType OPTIONAL
 * }
 * ```
 *
 * @class
 */
export
class scfChained_ResultType_Type<ResultType> {
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
    readonly result: OPTIONAL<ResultType>;

    constructor (
        chainedResult: ChainingResult,
        result: OPTIONAL<ResultType>
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
    public static _from_object <ResultType> (_o: { [_K in keyof (scfChained_ResultType_Type<ResultType>)]: (scfChained_ResultType_Type<ResultType>)[_K] }): scfChained_ResultType_Type<ResultType> {
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

/**
 * @summary Returns a function that will decode an ASN.1 element into a(n) scfChained_ResultType_Type
 * @function
 * @param _decode_ResultType Decodes `operation.&ResultType`.
 * @returns A function that will decode an ASN.1 element.
 */
export function _get_decoder_for_scfChained_ResultType_Type<ResultType>(
    _decode_ResultType: $.ASN1Decoder<ResultType>
): $.ASN1Decoder<scfChained_ResultType_Type<ResultType>> {
    return function (el: _Element): scfChained_ResultType_Type<ResultType> {
        let chainedResult!: ChainingResult;
        let result: OPTIONAL<ResultType>;
        const callbacks: $.DecodingMap = {
            "chainedResult": (_el: _Element): void => { chainedResult = _decode_ChainingResult(_el); },
            "result": (_el: _Element): void => { result = $._decode_explicit<ResultType>(() => _decode_ResultType)(_el); }
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
    };
}

/**
 * @summary Returns a function that will encode a(n) scfChained_ResultType_Type into an ASN.1 Element.
 * @function
 * @param _encode_ResultType Encodes `operation.&ResultType`.
 * @returns A function that will encode a(n) scfChained_ResultType_Type as an ASN.1 element.
 */
export function _get_encoder_for_scfChained_ResultType_Type<ResultType>(
    _encode_ResultType: $.ASN1Encoder<ResultType>
): $.ASN1Encoder<scfChained_ResultType_Type<ResultType>> {
    return function (value: scfChained_ResultType_Type<ResultType>): _Element {
        const _components: _Element[] = [
            /* REQUIRED   */ _encode_ChainingResult(value.chainedResult, $.BER),
        ];
        if (value.result !== undefined) {
            _components.push(
                /* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 0, () => _encode_ResultType, $.BER)(value.result, $.BER)
            );
        }
        return $._encodeSequence(_components, $.BER);
    };
}


/* eslint-enable */
