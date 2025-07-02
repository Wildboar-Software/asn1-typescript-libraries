/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    InvokeId,
    _decode_InvokeId,
    _encode_InvokeId,
} from "../CommonProtocolSpecification/InvokeId.ta.mjs";
import {
    OsiRes_result,
    _decode_OsiRes_result,
    _encode_OsiRes_result,
} from "../OSIProtocolSpecification/OsiRes-result.ta.mjs";
/**
 * @summary OsiRes
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * OsiRes{OPERATION:Operations} ::= [2] IMPLICIT SEQUENCE {
 *   invokeId  InvokeId,
 *   result    SEQUENCE {
 *     opcode    OPERATION.&operationCode({Operations}),
 *     result    OPERATION.&ResultType({Operations}{@.opcode}) }}
 * ```
 *
 */
export class OsiRes {
    constructor(
        /**
         * @summary `invokeId`.
         * @public
         * @readonly
         */
        readonly invokeId: InvokeId,
        /**
         * @summary `result`.
         * @public
         * @readonly
         */
        readonly result: OsiRes_result
    ) {}

    /**
     * @summary Restructures an object into a OsiRes
     * @description
     *
     * This takes an `object` and converts it to a `OsiRes`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `OsiRes`.
     * @returns {OsiRes}
     */
    public static _from_object(
        _o: { [_K in keyof OsiRes]: OsiRes[_K] }
    ): OsiRes {
        return new OsiRes(_o.invokeId, _o.result);
    }
}

/**
 * @summary The Leading Root Component Types of OsiRes
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_OsiRes: $.ComponentSpec[] = [
    new $.ComponentSpec("invokeId", false, $.hasAnyTag),
    new $.ComponentSpec(
        "result",
        false,
        $.hasTag(_TagClass.universal, 16)
    ),
];

/**
 * @summary The Trailing Root Component Types of OsiRes
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_OsiRes: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of OsiRes
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_OsiRes: $.ComponentSpec[] = [];

let _cached_decoder_for_OsiRes: $.ASN1Decoder<OsiRes> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) OsiRes
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {OsiRes} The decoded data structure.
 */
export function _decode_OsiRes(el: _Element): OsiRes {
    if (!_cached_decoder_for_OsiRes) {
        _cached_decoder_for_OsiRes = $._decode_implicit<OsiRes>(
            () =>
                function (el: _Element): OsiRes {
                    const sequence: _Element[] = el.sequence;
                    if (sequence.length < 2) {
                        throw new _ConstructionError(
                            "OsiRes contained only " +
                                sequence.length.toString() +
                                " elements."
                        );
                    }
                    sequence[0].name = "invokeId";
                    sequence[1].name = "result";
                    let invokeId!: InvokeId;
                    let result!: OsiRes_result;
                    invokeId = _decode_InvokeId(sequence[0]);
                    result = _decode_OsiRes_result(sequence[1]);
                    return new OsiRes(invokeId, result);
                }
        );
    }
    return _cached_decoder_for_OsiRes(el);
}

let _cached_encoder_for_OsiRes: $.ASN1Encoder<OsiRes> | null = null;

/**
 * @summary Encodes a(n) OsiRes into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The OsiRes, encoded as an ASN.1 Element.
 */
export function _encode_OsiRes(value: OsiRes, elGetter: $.ASN1Encoder<OsiRes>): _Element {
    if (!_cached_encoder_for_OsiRes) {
        _cached_encoder_for_OsiRes = $._encode_implicit(
            _TagClass.context,
            2,
            () =>
                function (
                    value: OsiRes                ): _Element {
                    return $._encodeSequence(
                        ([] as (_Element | undefined)[])
                            .concat([
                                /* REQUIRED   */ _encode_InvokeId(
                                    value.invokeId,
                                    $.DER
                                ),
                                /* REQUIRED   */ _encode_OsiRes_result(
                                    value.result,
                                    $.DER
                                ),
                            ])
                            .filter(
                                (c: _Element | undefined): c is _Element => !!c
                            ),
                        $.DER
                    );
                },
            $.DER
        );
    }
    return _cached_encoder_for_OsiRes(value, elGetter);
}


/* eslint-enable */
