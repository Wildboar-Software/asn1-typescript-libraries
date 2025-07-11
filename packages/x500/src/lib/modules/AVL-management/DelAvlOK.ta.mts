/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    NULL,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary DelAvlOK
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DelAvlOK ::= SEQUENCE {
 *   ok     NULL,
 *   ... }
 * ```
 *
 */
export class DelAvlOK {
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
     * @summary Restructures an object into a DelAvlOK
     * @description
     *
     * This takes an `object` and converts it to a `DelAvlOK`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `DelAvlOK`.
     * @returns {DelAvlOK}
     */
    public static _from_object(
        _o: { [_K in keyof DelAvlOK]: DelAvlOK[_K] }
    ): DelAvlOK {
        return new DelAvlOK(_o.ok, _o._unrecognizedExtensionsList);
    }
}

/**
 * @summary The Leading Root Component Types of DelAvlOK
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_DelAvlOK: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "ok",
        false,
        $.hasTag(_TagClass.universal, 5)
    ),
];

/**
 * @summary The Trailing Root Component Types of DelAvlOK
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_DelAvlOK: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of DelAvlOK
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_DelAvlOK: $.ComponentSpec[] = [];

let _cached_decoder_for_DelAvlOK: $.ASN1Decoder<DelAvlOK> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DelAvlOK
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DelAvlOK} The decoded data structure.
 */
export function _decode_DelAvlOK(el: _Element): DelAvlOK {
    if (!_cached_decoder_for_DelAvlOK) {
        _cached_decoder_for_DelAvlOK = function (el: _Element): DelAvlOK {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 1) {
                throw new _ConstructionError(
                    "DelAvlOK contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "ok";
            let ok!: NULL;
            ok = $._decodeNull(sequence[0]);
            return new DelAvlOK(ok, sequence.slice(1));
        };
    }
    return _cached_decoder_for_DelAvlOK(el);
}

let _cached_encoder_for_DelAvlOK: $.ASN1Encoder<DelAvlOK> | null = null;

/**
 * @summary Encodes a(n) DelAvlOK into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DelAvlOK, encoded as an ASN.1 Element.
 */
export function _encode_DelAvlOK(
    value: DelAvlOK,
    elGetter: $.ASN1Encoder<DelAvlOK>
): _Element {
    if (!_cached_encoder_for_DelAvlOK) {
        _cached_encoder_for_DelAvlOK = function (
            value: DelAvlOK        ): _Element {
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
    return _cached_encoder_for_DelAvlOK(value, elGetter);
}


/* eslint-enable */
