/* eslint-disable */
import { ASN1Element as _Element, ASN1TagClass as _TagClass } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    ChainingResults,
    _decode_ChainingResults,
    _encode_ChainingResults,
} from "../DistributedOperations/ChainingResults.ta.mjs";
/**
 * @summary Chained_ResultType_OPTIONALLY_PROTECTED_Parameter1
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Chained-ResultType-OPTIONALLY-PROTECTED-Parameter1 {OPERATION:operation} ::= SET {
 *     chainedResult        ChainingResults,
 *     result          [0]  operation.&ResultType }
 * ```
 *
 */
export class Chained_ResultType_OPTIONALLY_PROTECTED_Parameter1 {
    constructor(
        /**
         * @summary `chainedResult`.
         * @public
         * @readonly
         */
        readonly chainedResult: ChainingResults,
        /**
         * @summary `result`.
         * @public
         * @readonly
         */
        readonly result: _Element
    ) {}

    /**
     * @summary Restructures an object into a Chained_ResultType_OPTIONALLY_PROTECTED_Parameter1
     * @description
     *
     * This takes an `object` and converts it to a `Chained_ResultType_OPTIONALLY_PROTECTED_Parameter1`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Chained_ResultType_OPTIONALLY_PROTECTED_Parameter1`.
     * @returns {Chained_ResultType_OPTIONALLY_PROTECTED_Parameter1}
     */
    public static _from_object(
        _o: Partial<
            {
                [_K in keyof Chained_ResultType_OPTIONALLY_PROTECTED_Parameter1]: Chained_ResultType_OPTIONALLY_PROTECTED_Parameter1[_K];
            }
        >
    ): Chained_ResultType_OPTIONALLY_PROTECTED_Parameter1 {
        return new Chained_ResultType_OPTIONALLY_PROTECTED_Parameter1(
            _o.chainedResult,
            _o.result
        );
    }
}

/**
 * @summary The Leading Root Component Types of Chained_ResultType_OPTIONALLY_PROTECTED_Parameter1
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_Chained_ResultType_OPTIONALLY_PROTECTED_Parameter1: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "chainedResult",
        false,
        $.hasTag(_TagClass.universal, 17)
    ),
    new $.ComponentSpec(
        "result",
        false,
        $.hasTag(_TagClass.context, 0)
    ),
];

/**
 * @summary The Trailing Root Component Types of Chained_ResultType_OPTIONALLY_PROTECTED_Parameter1
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_Chained_ResultType_OPTIONALLY_PROTECTED_Parameter1: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of Chained_ResultType_OPTIONALLY_PROTECTED_Parameter1
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_Chained_ResultType_OPTIONALLY_PROTECTED_Parameter1: $.ComponentSpec[] = [];

let _cached_decoder_for_Chained_ResultType_OPTIONALLY_PROTECTED_Parameter1: $.ASN1Decoder<Chained_ResultType_OPTIONALLY_PROTECTED_Parameter1> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Chained_ResultType_OPTIONALLY_PROTECTED_Parameter1
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Chained_ResultType_OPTIONALLY_PROTECTED_Parameter1} The decoded data structure.
 */
export function _decode_Chained_ResultType_OPTIONALLY_PROTECTED_Parameter1(
    el: _Element
): Chained_ResultType_OPTIONALLY_PROTECTED_Parameter1 {
    if (
        !_cached_decoder_for_Chained_ResultType_OPTIONALLY_PROTECTED_Parameter1
    ) {
        _cached_decoder_for_Chained_ResultType_OPTIONALLY_PROTECTED_Parameter1 = function (
            el: _Element
        ): Chained_ResultType_OPTIONALLY_PROTECTED_Parameter1 {
            /* START_OF_SET_COMPONENT_DECLARATIONS */
            let chainedResult!: ChainingResults;
            let result!: _Element;
            /* END_OF_SET_COMPONENT_DECLARATIONS */
            const callbacks: $.DecodingMap = {
                chainedResult: (_el: _Element): void => {
                    chainedResult = _decode_ChainingResults(_el);
                },
                result: (_el: _Element): void => {
                    result = $._decode_explicit<_Element>(() => $._decodeAny)(
                        _el
                    );
                },
            };
            $._parse_set(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_Chained_ResultType_OPTIONALLY_PROTECTED_Parameter1,
                _extension_additions_list_spec_for_Chained_ResultType_OPTIONALLY_PROTECTED_Parameter1,
                _root_component_type_list_2_spec_for_Chained_ResultType_OPTIONALLY_PROTECTED_Parameter1,
                undefined
            );
            return new Chained_ResultType_OPTIONALLY_PROTECTED_Parameter1(
                /* SET_CONSTRUCTOR_CALL */ chainedResult,
                result
            );
        };
    }
    return _cached_decoder_for_Chained_ResultType_OPTIONALLY_PROTECTED_Parameter1(
        el
    );
}

let _cached_encoder_for_Chained_ResultType_OPTIONALLY_PROTECTED_Parameter1: $.ASN1Encoder<Chained_ResultType_OPTIONALLY_PROTECTED_Parameter1> | null = null;

/**
 * @summary Encodes a(n) Chained_ResultType_OPTIONALLY_PROTECTED_Parameter1 into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Chained_ResultType_OPTIONALLY_PROTECTED_Parameter1, encoded as an ASN.1 Element.
 */
export function _encode_Chained_ResultType_OPTIONALLY_PROTECTED_Parameter1(
    value: Chained_ResultType_OPTIONALLY_PROTECTED_Parameter1,
    elGetter: $.ASN1Encoder<Chained_ResultType_OPTIONALLY_PROTECTED_Parameter1>
): _Element {
    if (
        !_cached_encoder_for_Chained_ResultType_OPTIONALLY_PROTECTED_Parameter1
    ) {
        _cached_encoder_for_Chained_ResultType_OPTIONALLY_PROTECTED_Parameter1 = function (
            value: Chained_ResultType_OPTIONALLY_PROTECTED_Parameter1        ): _Element {
            return $._encodeSet(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_ChainingResults(
                            value.chainedResult,
                            $.DER
                        ),
                        /* REQUIRED   */ $._encode_explicit(
                            _TagClass.context,
                            0,
                            () => $._encodeAny,
                            $.DER
                        )(value.result, $.DER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.DER
            );
        };
    }
    return _cached_encoder_for_Chained_ResultType_OPTIONALLY_PROTECTED_Parameter1(
        value,
        elGetter
    );
}


/* eslint-enable */
