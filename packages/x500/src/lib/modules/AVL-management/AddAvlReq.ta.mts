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
    CertAVL,
    _decode_CertAVL,
    _encode_CertAVL,
} from "@wildboar/pki-stub";
/**
 * @summary AddAvlReq
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AddAvlReq ::= SEQUENCE {
 *   invokeID     InvokeID,
 *   certlist     CertAVL,
 *   ... }
 * ```
 *
 */
export class AddAvlReq {
    constructor(
        /**
         * @summary `invokeID`.
         * @public
         * @readonly
         */
        readonly invokeID: InvokeID,
        /**
         * @summary `certlist`.
         * @public
         * @readonly
         */
        readonly certlist: CertAVL,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a AddAvlReq
     * @description
     *
     * This takes an `object` and converts it to a `AddAvlReq`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AddAvlReq`.
     * @returns {AddAvlReq}
     */
    public static _from_object(
        _o: { [_K in keyof AddAvlReq]: AddAvlReq[_K] }
    ): AddAvlReq {
        return new AddAvlReq(
            _o.invokeID,
            _o.certlist,
            _o._unrecognizedExtensionsList
        );
    }
}

/**
 * @summary The Leading Root Component Types of AddAvlReq
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_AddAvlReq: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "invokeID",
        false,
        $.hasTag(_TagClass.universal, 2)
    ),
    new $.ComponentSpec(
        "certlist",
        false,
        $.hasTag(_TagClass.universal, 16)
    ),
];

/**
 * @summary The Trailing Root Component Types of AddAvlReq
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_AddAvlReq: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of AddAvlReq
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_AddAvlReq: $.ComponentSpec[] = [];

let _cached_decoder_for_AddAvlReq: $.ASN1Decoder<AddAvlReq> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AddAvlReq
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AddAvlReq} The decoded data structure.
 */
export function _decode_AddAvlReq(el: _Element): AddAvlReq {
    if (!_cached_decoder_for_AddAvlReq) {
        _cached_decoder_for_AddAvlReq = function (el: _Element): AddAvlReq {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    "AddAvlReq contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "invokeID";
            sequence[1].name = "certlist";
            let invokeID!: InvokeID;
            let certlist!: CertAVL;
            invokeID = _decode_InvokeID(sequence[0]);
            certlist = _decode_CertAVL(sequence[1]);
            return new AddAvlReq(invokeID, certlist, sequence.slice(2));
        };
    }
    return _cached_decoder_for_AddAvlReq(el);
}

let _cached_encoder_for_AddAvlReq: $.ASN1Encoder<AddAvlReq> | null = null;

/**
 * @summary Encodes a(n) AddAvlReq into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AddAvlReq, encoded as an ASN.1 Element.
 */
export function _encode_AddAvlReq(
    value: AddAvlReq,
    elGetter: $.ASN1Encoder<AddAvlReq>
): _Element {
    if (!_cached_encoder_for_AddAvlReq) {
        _cached_encoder_for_AddAvlReq = function (
            value: AddAvlReq        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _encode_InvokeID(
                                value.invokeID,
                                $.DER
                            ),
                            /* REQUIRED   */ _encode_CertAVL(
                                value.certlist,
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
    return _cached_encoder_for_AddAvlReq(value, elGetter);
}


/* eslint-enable */
