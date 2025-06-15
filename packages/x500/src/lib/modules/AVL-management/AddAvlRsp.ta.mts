/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";
import {
    AddAvlRsp_result,
    _decode_AddAvlRsp_result,
    _encode_AddAvlRsp_result,
} from "../AVL-management/AddAvlRsp-result.ta.mjs";
import {
    InvokeID,
    _decode_InvokeID,
    _encode_InvokeID,
} from "../AVL-management/InvokeID.ta.mjs";
/**
 * @summary AddAvlRsp
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AddAvlRsp ::= SEQUENCE {
 *   invokeID     InvokeID,
 *   result       CHOICE {
 *     success [0]  AddAvlOK,
 *     failure [1]  AddAvlErr,
 *     ... },
 *   ... }
 * ```
 *
 * @class
 */
export class AddAvlRsp {
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
        readonly result: AddAvlRsp_result,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a AddAvlRsp
     * @description
     *
     * This takes an `object` and converts it to a `AddAvlRsp`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AddAvlRsp`.
     * @returns {AddAvlRsp}
     */
    public static _from_object(
        _o: { [_K in keyof AddAvlRsp]: AddAvlRsp[_K] }
    ): AddAvlRsp {
        return new AddAvlRsp(
            _o.invokeID,
            _o.result,
            _o._unrecognizedExtensionsList
        );
    }
}

/**
 * @summary The Leading Root Component Types of AddAvlRsp
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_AddAvlRsp: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "invokeID",
        false,
        $.hasTag(_TagClass.universal, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec("result", false, $.hasAnyTag, undefined, undefined),
];

/**
 * @summary The Trailing Root Component Types of AddAvlRsp
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_AddAvlRsp: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of AddAvlRsp
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_AddAvlRsp: $.ComponentSpec[] = [];

let _cached_decoder_for_AddAvlRsp: $.ASN1Decoder<AddAvlRsp> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AddAvlRsp
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AddAvlRsp} The decoded data structure.
 */
export function _decode_AddAvlRsp(el: _Element) {
    if (!_cached_decoder_for_AddAvlRsp) {
        _cached_decoder_for_AddAvlRsp = function (el: _Element): AddAvlRsp {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    "AddAvlRsp contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "invokeID";
            sequence[1].name = "result";
            let invokeID!: InvokeID;
            let result!: AddAvlRsp_result;
            invokeID = _decode_InvokeID(sequence[0]);
            result = _decode_AddAvlRsp_result(sequence[1]);
            return new AddAvlRsp(invokeID, result, sequence.slice(2));
        };
    }
    return _cached_decoder_for_AddAvlRsp(el);
}

let _cached_encoder_for_AddAvlRsp: $.ASN1Encoder<AddAvlRsp> | null = null;

/**
 * @summary Encodes a(n) AddAvlRsp into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AddAvlRsp, encoded as an ASN.1 Element.
 */
export function _encode_AddAvlRsp(
    value: AddAvlRsp,
    elGetter: $.ASN1Encoder<AddAvlRsp>
) {
    if (!_cached_encoder_for_AddAvlRsp) {
        _cached_encoder_for_AddAvlRsp = function (
            value: AddAvlRsp        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _encode_InvokeID(
                                value.invokeID,
                                $.DER
                            ),
                            /* REQUIRED   */ _encode_AddAvlRsp_result(
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
    return _cached_encoder_for_AddAvlRsp(value, elGetter);
}


/* eslint-enable */
