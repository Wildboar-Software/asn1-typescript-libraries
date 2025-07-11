/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    NULL,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary AddAvlOK
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AddAvlOK ::= SEQUENCE {
 *   ok     NULL,
 *   ... }
 * ```
 *
 */
export class AddAvlOK {
    constructor(
        /**
         * @summary `ok`.
         * @public
         * @readonly
         */
        readonly ok: NULL,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a AddAvlOK
     * @description
     *
     * This takes an `object` and converts it to a `AddAvlOK`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AddAvlOK`.
     * @returns {AddAvlOK}
     */
    public static _from_object(
        _o: { [_K in keyof AddAvlOK]: AddAvlOK[_K] }
    ): AddAvlOK {
        return new AddAvlOK(_o.ok, _o._unrecognizedExtensionsList);
    }
}

/**
 * @summary The Leading Root Component Types of AddAvlOK
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_AddAvlOK: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "ok",
        false,
        $.hasTag(_TagClass.universal, 5)
    ),
];

/**
 * @summary The Trailing Root Component Types of AddAvlOK
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_AddAvlOK: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of AddAvlOK
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_AddAvlOK: $.ComponentSpec[] = [];

let _cached_decoder_for_AddAvlOK: $.ASN1Decoder<AddAvlOK> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AddAvlOK
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AddAvlOK} The decoded data structure.
 */
export function _decode_AddAvlOK(el: _Element): AddAvlOK {
    if (!_cached_decoder_for_AddAvlOK) {
        _cached_decoder_for_AddAvlOK = function (el: _Element): AddAvlOK {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 1) {
                throw new _ConstructionError(
                    "AddAvlOK contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "ok";
            let ok!: NULL;
            ok = $._decodeNull(sequence[0]);
            return new AddAvlOK(ok, sequence.slice(1));
        };
    }
    return _cached_decoder_for_AddAvlOK(el);
}

let _cached_encoder_for_AddAvlOK: $.ASN1Encoder<AddAvlOK> | null = null;

/**
 * @summary Encodes a(n) AddAvlOK into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AddAvlOK, encoded as an ASN.1 Element.
 */
export function _encode_AddAvlOK(
    value: AddAvlOK,
    elGetter: $.ASN1Encoder<AddAvlOK>
): _Element {
    if (!_cached_encoder_for_AddAvlOK) {
        _cached_encoder_for_AddAvlOK = function (
            value: AddAvlOK        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [/* REQUIRED   */ $._encodeNull(value.ok, $.DER)],
                        value._unrecognizedExtensionsList
                            ? value._unrecognizedExtensionsList
                            : []
                    )
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.DER
            );
        };
    }
    return _cached_encoder_for_AddAvlOK(value, elGetter);
}


/* eslint-enable */
