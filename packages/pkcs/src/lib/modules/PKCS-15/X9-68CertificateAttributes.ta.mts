/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    ObjectValue,
    _get_decoder_for_ObjectValue,
    _get_encoder_for_ObjectValue,
} from "../PKCS-15/ObjectValue.ta.mjs";

/**
 * @summary X9_68CertificateAttributes
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * X9-68CertificateAttributes ::= SEQUENCE {
 *     value ObjectValue { PKCS15-OPAQUE.&Type },
 *     ... -- For future extensions
 * }
 * ```
 *
 */
export class X9_68CertificateAttributes {
    constructor(
        /**
         * @summary `value`.
         * @public
         * @readonly
         */
        readonly value: ObjectValue<_Element>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a X9_68CertificateAttributes
     * @description
     *
     * This takes an `object` and converts it to a `X9_68CertificateAttributes`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `X9_68CertificateAttributes`.
     * @returns {X9_68CertificateAttributes}
     */
    public static _from_object(
        _o: {
            [_K in keyof X9_68CertificateAttributes]: X9_68CertificateAttributes[_K];
        }
    ): X9_68CertificateAttributes {
        return new X9_68CertificateAttributes(
            _o.value,
            _o._unrecognizedExtensionsList
        );
    }
}


/**
 * @summary The Leading Root Component Types of X9_68CertificateAttributes
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_X9_68CertificateAttributes: $.ComponentSpec[] = [
    new $.ComponentSpec("value", false, $.hasAnyTag),
];


/**
 * @summary The Trailing Root Component Types of X9_68CertificateAttributes
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_X9_68CertificateAttributes: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of X9_68CertificateAttributes
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_X9_68CertificateAttributes: $.ComponentSpec[] = [];


let _cached_decoder_for_X9_68CertificateAttributes: $.ASN1Decoder<X9_68CertificateAttributes> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) X9_68CertificateAttributes
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {X9_68CertificateAttributes} The decoded data structure.
 */
export function _decode_X9_68CertificateAttributes(el: _Element): X9_68CertificateAttributes {
    if (!_cached_decoder_for_X9_68CertificateAttributes) {
        _cached_decoder_for_X9_68CertificateAttributes = function (
            el: _Element
        ): X9_68CertificateAttributes {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 1) {
                throw new _ConstructionError(
                    "X9-68CertificateAttributes contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "value";
            let value!: ObjectValue<_Element>;
            value = _get_decoder_for_ObjectValue<_Element>($._decodeAny)(
                sequence[0]
            );
            return new X9_68CertificateAttributes(value, sequence.slice(1));
        };
    }
    return _cached_decoder_for_X9_68CertificateAttributes(el);
}


let _cached_encoder_for_X9_68CertificateAttributes: $.ASN1Encoder<X9_68CertificateAttributes> | null = null;


/**
 * @summary Encodes a(n) X9_68CertificateAttributes into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The X9_68CertificateAttributes, encoded as an ASN.1 Element.
 */
export function _encode_X9_68CertificateAttributes(
    value: X9_68CertificateAttributes,
    elGetter: $.ASN1Encoder<X9_68CertificateAttributes>
): _Element {
    if (!_cached_encoder_for_X9_68CertificateAttributes) {
        _cached_encoder_for_X9_68CertificateAttributes = function (
            value: X9_68CertificateAttributes        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _get_encoder_for_ObjectValue<_Element>(
                                $._encodeAny
                            )(value.value, $.BER),
                        ],
                        value._unrecognizedExtensionsList
                            ? value._unrecognizedExtensionsList
                            : []
                    )
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_X9_68CertificateAttributes(value, elGetter);
}


/* eslint-enable */
