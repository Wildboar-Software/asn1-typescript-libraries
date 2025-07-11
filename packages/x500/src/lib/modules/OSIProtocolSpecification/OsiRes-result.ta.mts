/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    Code,
    _decode_Code,
    _encode_Code,
} from "../CommonProtocolSpecification/Code.ta.mjs";
/**
 * @summary OsiRes_result
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * OsiRes-result ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 */
export class OsiRes_result {
    constructor(
        /**
         * @summary `opcode`.
         * @public
         * @readonly
         */
        readonly opcode: Code,
        /**
         * @summary `result`.
         * @public
         * @readonly
         */
        readonly result: _Element
    ) {}

    /**
     * @summary Restructures an object into a OsiRes_result
     * @description
     *
     * This takes an `object` and converts it to a `OsiRes_result`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `OsiRes_result`.
     * @returns {OsiRes_result}
     */
    public static _from_object(
        _o: { [_K in keyof OsiRes_result]: OsiRes_result[_K] }
    ): OsiRes_result {
        return new OsiRes_result(_o.opcode, _o.result);
    }
}

/**
 * @summary The Leading Root Component Types of OsiRes_result
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_OsiRes_result: $.ComponentSpec[] = [
    new $.ComponentSpec("opcode", false, $.hasAnyTag),
    new $.ComponentSpec("result", false, $.hasAnyTag),
];

/**
 * @summary The Trailing Root Component Types of OsiRes_result
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_OsiRes_result: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of OsiRes_result
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_OsiRes_result: $.ComponentSpec[] = [];

let _cached_decoder_for_OsiRes_result: $.ASN1Decoder<OsiRes_result> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) OsiRes_result
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {OsiRes_result} The decoded data structure.
 */
export function _decode_OsiRes_result(el: _Element): OsiRes_result {
    if (!_cached_decoder_for_OsiRes_result) {
        _cached_decoder_for_OsiRes_result = function (
            el: _Element
        ): OsiRes_result {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    "OsiRes-result contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "opcode";
            sequence[1].name = "result";
            let opcode!: Code;
            let result!: _Element;
            opcode = _decode_Code(sequence[0]);
            result = $._decodeAny(sequence[1]);
            return new OsiRes_result(opcode, result);
        };
    }
    return _cached_decoder_for_OsiRes_result(el);
}

let _cached_encoder_for_OsiRes_result: $.ASN1Encoder<OsiRes_result> | null = null;

/**
 * @summary Encodes a(n) OsiRes_result into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The OsiRes_result, encoded as an ASN.1 Element.
 */
export function _encode_OsiRes_result(
    value: OsiRes_result,
    elGetter: $.ASN1Encoder<OsiRes_result>
): _Element {
    if (!_cached_encoder_for_OsiRes_result) {
        _cached_encoder_for_OsiRes_result = function (
            value: OsiRes_result        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_Code(value.opcode, $.DER),
                        /* REQUIRED   */ $._encodeAny(value.result, $.DER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.DER
            );
        };
    }
    return _cached_encoder_for_OsiRes_result(value, elGetter);
}


/* eslint-enable */
