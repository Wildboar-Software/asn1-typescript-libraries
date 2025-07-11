/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    Code,
    _decode_Code,
    _encode_Code,
} from "../CommonProtocolSpecification/Code.ta.mjs";
import {
    InvokeId,
    _decode_InvokeId,
    _encode_InvokeId,
} from "../CommonProtocolSpecification/InvokeId.ta.mjs";
/**
 * @summary OsiReq
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * OsiReq{OPERATION:Operations} ::= [1] IMPLICIT SEQUENCE {
 *   invokeId  InvokeId,
 *   opcode    OPERATION.&operationCode({Operations}),
 *   argument  OPERATION.&ArgumentType({Operations}{@opcode}) }
 * ```
 *
 */
export class OsiReq {
    constructor(
        /**
         * @summary `invokeId`.
         * @public
         * @readonly
         */
        readonly invokeId: InvokeId,
        /**
         * @summary `opcode`.
         * @public
         * @readonly
         */
        readonly opcode: Code,
        /**
         * @summary `argument`.
         * @public
         * @readonly
         */
        readonly argument: _Element
    ) {}

    /**
     * @summary Restructures an object into a OsiReq
     * @description
     *
     * This takes an `object` and converts it to a `OsiReq`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `OsiReq`.
     * @returns {OsiReq}
     */
    public static _from_object(
        _o: { [_K in keyof OsiReq]: OsiReq[_K] }
    ): OsiReq {
        return new OsiReq(_o.invokeId, _o.opcode, _o.argument);
    }
}

/**
 * @summary The Leading Root Component Types of OsiReq
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_OsiReq: $.ComponentSpec[] = [
    new $.ComponentSpec("invokeId", false, $.hasAnyTag),
    new $.ComponentSpec("opcode", false, $.hasAnyTag),
    new $.ComponentSpec("argument", false, $.hasAnyTag),
];

/**
 * @summary The Trailing Root Component Types of OsiReq
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_OsiReq: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of OsiReq
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_OsiReq: $.ComponentSpec[] = [];

let _cached_decoder_for_OsiReq: $.ASN1Decoder<OsiReq> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) OsiReq
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {OsiReq} The decoded data structure.
 */
export function _decode_OsiReq(el: _Element): OsiReq {
    if (!_cached_decoder_for_OsiReq) {
        _cached_decoder_for_OsiReq = $._decode_implicit<OsiReq>(
            () =>
                function (el: _Element): OsiReq {
                    const sequence: _Element[] = el.sequence;
                    if (sequence.length < 3) {
                        throw new _ConstructionError(
                            "OsiReq contained only " +
                                sequence.length.toString() +
                                " elements."
                        );
                    }
                    sequence[0].name = "invokeId";
                    sequence[1].name = "opcode";
                    sequence[2].name = "argument";
                    let invokeId!: InvokeId;
                    let opcode!: Code;
                    let argument!: _Element;
                    invokeId = _decode_InvokeId(sequence[0]);
                    opcode = _decode_Code(sequence[1]);
                    argument = $._decodeAny(sequence[2]);
                    return new OsiReq(invokeId, opcode, argument);
                }
        );
    }
    return _cached_decoder_for_OsiReq(el);
}

let _cached_encoder_for_OsiReq: $.ASN1Encoder<OsiReq> | null = null;

/**
 * @summary Encodes a(n) OsiReq into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The OsiReq, encoded as an ASN.1 Element.
 */
export function _encode_OsiReq(value: OsiReq, elGetter: $.ASN1Encoder<OsiReq>): _Element {
    if (!_cached_encoder_for_OsiReq) {
        _cached_encoder_for_OsiReq = $._encode_implicit(
            _TagClass.context,
            1,
            () =>
                function (
                    value: OsiReq                ): _Element {
                    return $._encodeSequence(
                        ([] as (_Element | undefined)[])
                            .concat([
                                /* REQUIRED   */ _encode_InvokeId(
                                    value.invokeId,
                                    $.DER
                                ),
                                /* REQUIRED   */ _encode_Code(
                                    value.opcode,
                                    $.DER
                                ),
                                /* REQUIRED   */ $._encodeAny(
                                    value.argument,
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
    return _cached_encoder_for_OsiReq(value, elGetter);
}


/* eslint-enable */
