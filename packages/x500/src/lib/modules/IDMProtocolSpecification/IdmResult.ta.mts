/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    INTEGER,
} from "asn1-ts";
import * as $ from "@wildboar/asn1/functional";
import {
    Code,
    _decode_Code,
    _encode_Code,
} from "../CommonProtocolSpecification/Code.ta.mjs";
/**
 * @summary IdmResult
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * IdmResult{OPERATION:Operations} ::= SEQUENCE {
 *   invokeID  INTEGER,
 *   opcode    OPERATION.&operationCode({Operations}),
 *   result    OPERATION.&ResultType({Operations}{@opcode}),
 *   ... }
 * ```
 *
 * @class
 */
export class IdmResult {
    constructor(
        /**
         * @summary `invokeID`.
         * @public
         * @readonly
         */
        readonly invokeID: INTEGER,
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
        readonly result: _Element,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a IdmResult
     * @description
     *
     * This takes an `object` and converts it to a `IdmResult`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `IdmResult`.
     * @returns {IdmResult}
     */
    public static _from_object(
        _o: { [_K in keyof IdmResult]: IdmResult[_K] }
    ): IdmResult {
        return new IdmResult(
            _o.invokeID,
            _o.opcode,
            _o.result,
            _o._unrecognizedExtensionsList
        );
    }
}

/**
 * @summary The Leading Root Component Types of IdmResult
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_IdmResult: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "invokeID",
        false,
        $.hasTag(_TagClass.universal, 2)
    ),
    new $.ComponentSpec("opcode", false, $.hasAnyTag),
    new $.ComponentSpec("result", false, $.hasAnyTag),
];

/**
 * @summary The Trailing Root Component Types of IdmResult
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_IdmResult: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of IdmResult
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_IdmResult: $.ComponentSpec[] = [];

let _cached_decoder_for_IdmResult: $.ASN1Decoder<IdmResult> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) IdmResult
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {IdmResult} The decoded data structure.
 */
export function _decode_IdmResult(el: _Element) {
    if (!_cached_decoder_for_IdmResult) {
        _cached_decoder_for_IdmResult = function (el: _Element): IdmResult {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 3) {
                throw new _ConstructionError(
                    "IdmResult contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "invokeID";
            sequence[1].name = "opcode";
            sequence[2].name = "result";
            let invokeID!: INTEGER;
            let opcode!: Code;
            let result!: _Element;
            invokeID = $._decodeInteger(sequence[0]);
            opcode = _decode_Code(sequence[1]);
            result = $._decodeAny(sequence[2]);
            return new IdmResult(invokeID, opcode, result, sequence.slice(3));
        };
    }
    return _cached_decoder_for_IdmResult(el);
}

let _cached_encoder_for_IdmResult: $.ASN1Encoder<IdmResult> | null = null;

/**
 * @summary Encodes a(n) IdmResult into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IdmResult, encoded as an ASN.1 Element.
 */
export function _encode_IdmResult(
    value: IdmResult,
    elGetter: $.ASN1Encoder<IdmResult>
) {
    if (!_cached_encoder_for_IdmResult) {
        _cached_encoder_for_IdmResult = function (
            value: IdmResult        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ $._encodeInteger(
                                value.invokeID,
                                $.DER
                            ),
                            /* REQUIRED   */ _encode_Code(value.opcode, $.DER),
                            /* REQUIRED   */ $._encodeAny(value.result, $.DER),
                        ],
                        value._unrecognizedExtensionsList
                            ? value._unrecognizedExtensionsList
                            : []
                    )
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.DER
            );
        };
    }
    return _cached_encoder_for_IdmResult(value, elGetter);
}


/* eslint-enable */
