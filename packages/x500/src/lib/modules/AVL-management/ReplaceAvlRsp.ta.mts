/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    InvokeID,
    _decode_InvokeID,
    _encode_InvokeID,
} from "../AVL-management/InvokeID.ta.mjs";
import {
    ReplaceAvlRsp_result,
    _decode_ReplaceAvlRsp_result,
    _encode_ReplaceAvlRsp_result,
} from "../AVL-management/ReplaceAvlRsp-result.ta.mjs";
/**
 * @summary ReplaceAvlRsp
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ReplaceAvlRsp ::= SEQUENCE {
 *   invokeID     InvokeID,
 *   result       CHOICE {
 *     success [0]  RepAvlOK,
 *     failure [1]  RepAvlErr,
 *     ... },
 *   ... }
 * ```
 *
 */
export class ReplaceAvlRsp {
    constructor(
        /**
         * @summary `invokeID`.
         * @public
         * @readonly
         */
        readonly invokeID: InvokeID,
        /**
         * @summary `result`.
         * @public
         * @readonly
         */
        readonly result: ReplaceAvlRsp_result,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a ReplaceAvlRsp
     * @description
     *
     * This takes an `object` and converts it to a `ReplaceAvlRsp`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ReplaceAvlRsp`.
     * @returns {ReplaceAvlRsp}
     */
    public static _from_object(
        _o: { [_K in keyof ReplaceAvlRsp]: ReplaceAvlRsp[_K] }
    ): ReplaceAvlRsp {
        return new ReplaceAvlRsp(
            _o.invokeID,
            _o.result,
            _o._unrecognizedExtensionsList
        );
    }
}

/**
 * @summary The Leading Root Component Types of ReplaceAvlRsp
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_ReplaceAvlRsp: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "invokeID",
        false,
        $.hasTag(_TagClass.universal, 2)
    ),
    new $.ComponentSpec("result", false, $.hasAnyTag),
];

/**
 * @summary The Trailing Root Component Types of ReplaceAvlRsp
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_ReplaceAvlRsp: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of ReplaceAvlRsp
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_ReplaceAvlRsp: $.ComponentSpec[] = [];

let _cached_decoder_for_ReplaceAvlRsp: $.ASN1Decoder<ReplaceAvlRsp> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ReplaceAvlRsp
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ReplaceAvlRsp} The decoded data structure.
 */
export function _decode_ReplaceAvlRsp(el: _Element): ReplaceAvlRsp {
    if (!_cached_decoder_for_ReplaceAvlRsp) {
        _cached_decoder_for_ReplaceAvlRsp = function (
            el: _Element
        ): ReplaceAvlRsp {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    "ReplaceAvlRsp contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "invokeID";
            sequence[1].name = "result";
            let invokeID!: InvokeID;
            let result!: ReplaceAvlRsp_result;
            invokeID = _decode_InvokeID(sequence[0]);
            result = _decode_ReplaceAvlRsp_result(sequence[1]);
            return new ReplaceAvlRsp(invokeID, result, sequence.slice(2));
        };
    }
    return _cached_decoder_for_ReplaceAvlRsp(el);
}

let _cached_encoder_for_ReplaceAvlRsp: $.ASN1Encoder<ReplaceAvlRsp> | null = null;

/**
 * @summary Encodes a(n) ReplaceAvlRsp into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ReplaceAvlRsp, encoded as an ASN.1 Element.
 */
export function _encode_ReplaceAvlRsp(
    value: ReplaceAvlRsp,
    elGetter: $.ASN1Encoder<ReplaceAvlRsp>
): _Element {
    if (!_cached_encoder_for_ReplaceAvlRsp) {
        _cached_encoder_for_ReplaceAvlRsp = function (
            value: ReplaceAvlRsp        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _encode_InvokeID(
                                value.invokeID,
                                $.DER
                            ),
                            /* REQUIRED   */ _encode_ReplaceAvlRsp_result(
                                value.result,
                                $.DER
                            ),
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
    return _cached_encoder_for_ReplaceAvlRsp(value, elGetter);
}


/* eslint-enable */
