/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    DeleteAvlRsp_result,
    _decode_DeleteAvlRsp_result,
    _encode_DeleteAvlRsp_result,
} from "../AVL-management/DeleteAvlRsp-result.ta.mjs";
import {
    InvokeID,
    _decode_InvokeID,
    _encode_InvokeID,
} from "../AVL-management/InvokeID.ta.mjs";
/**
 * @summary DeleteAvlRsp
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DeleteAvlRsp ::= SEQUENCE {
 *   invokeID     InvokeID,
 *   result       CHOICE {
 *     success [0]  DelAvlOK,
 *     failure [1]  DelAvlErr,
 *     ... },
 *   ... }
 * ```
 *
 */
export class DeleteAvlRsp {
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
        readonly result: DeleteAvlRsp_result,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a DeleteAvlRsp
     * @description
     *
     * This takes an `object` and converts it to a `DeleteAvlRsp`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `DeleteAvlRsp`.
     * @returns {DeleteAvlRsp}
     */
    public static _from_object(
        _o: { [_K in keyof DeleteAvlRsp]: DeleteAvlRsp[_K] }
    ): DeleteAvlRsp {
        return new DeleteAvlRsp(
            _o.invokeID,
            _o.result,
            _o._unrecognizedExtensionsList
        );
    }
}

/**
 * @summary The Leading Root Component Types of DeleteAvlRsp
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_DeleteAvlRsp: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "invokeID",
        false,
        $.hasTag(_TagClass.universal, 2)
    ),
    new $.ComponentSpec("result", false, $.hasAnyTag),
];

/**
 * @summary The Trailing Root Component Types of DeleteAvlRsp
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_DeleteAvlRsp: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of DeleteAvlRsp
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_DeleteAvlRsp: $.ComponentSpec[] = [];

let _cached_decoder_for_DeleteAvlRsp: $.ASN1Decoder<DeleteAvlRsp> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DeleteAvlRsp
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DeleteAvlRsp} The decoded data structure.
 */
export function _decode_DeleteAvlRsp(el: _Element): DeleteAvlRsp {
    if (!_cached_decoder_for_DeleteAvlRsp) {
        _cached_decoder_for_DeleteAvlRsp = function (
            el: _Element
        ): DeleteAvlRsp {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    "DeleteAvlRsp contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "invokeID";
            sequence[1].name = "result";
            let invokeID!: InvokeID;
            let result!: DeleteAvlRsp_result;
            invokeID = _decode_InvokeID(sequence[0]);
            result = _decode_DeleteAvlRsp_result(sequence[1]);
            return new DeleteAvlRsp(invokeID, result, sequence.slice(2));
        };
    }
    return _cached_decoder_for_DeleteAvlRsp(el);
}

let _cached_encoder_for_DeleteAvlRsp: $.ASN1Encoder<DeleteAvlRsp> | null = null;

/**
 * @summary Encodes a(n) DeleteAvlRsp into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DeleteAvlRsp, encoded as an ASN.1 Element.
 */
export function _encode_DeleteAvlRsp(
    value: DeleteAvlRsp,
    elGetter: $.ASN1Encoder<DeleteAvlRsp>
): _Element {
    if (!_cached_encoder_for_DeleteAvlRsp) {
        _cached_encoder_for_DeleteAvlRsp = function (
            value: DeleteAvlRsp        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _encode_InvokeID(
                                value.invokeID,
                                $.DER
                            ),
                            /* REQUIRED   */ _encode_DeleteAvlRsp_result(
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
    return _cached_encoder_for_DeleteAvlRsp(value, elGetter);
}


/* eslint-enable */
