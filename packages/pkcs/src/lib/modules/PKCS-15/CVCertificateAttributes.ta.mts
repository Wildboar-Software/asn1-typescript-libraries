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
 * @summary CVCertificateAttributes
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CVCertificateAttributes ::= SEQUENCE {
 *     value ObjectValue { PKCS15-OPAQUE.&Type},
 *     ... -- For future extensions
 * }
 * ```
 *
 */
export class CVCertificateAttributes {
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
     * @summary Restructures an object into a CVCertificateAttributes
     * @description
     *
     * This takes an `object` and converts it to a `CVCertificateAttributes`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CVCertificateAttributes`.
     * @returns {CVCertificateAttributes}
     */
    public static _from_object(
        _o: {
            [_K in keyof CVCertificateAttributes]: CVCertificateAttributes[_K];
        }
    ): CVCertificateAttributes {
        return new CVCertificateAttributes(
            _o.value,
            _o._unrecognizedExtensionsList
        );
    }
}


/**
 * @summary The Leading Root Component Types of CVCertificateAttributes
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_CVCertificateAttributes: $.ComponentSpec[] = [
    new $.ComponentSpec("value", false, $.hasAnyTag),
];


/**
 * @summary The Trailing Root Component Types of CVCertificateAttributes
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_CVCertificateAttributes: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of CVCertificateAttributes
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_CVCertificateAttributes: $.ComponentSpec[] = [];


let _cached_decoder_for_CVCertificateAttributes: $.ASN1Decoder<CVCertificateAttributes> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) CVCertificateAttributes
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CVCertificateAttributes} The decoded data structure.
 */
export function _decode_CVCertificateAttributes(el: _Element): CVCertificateAttributes {
    if (!_cached_decoder_for_CVCertificateAttributes) {
        _cached_decoder_for_CVCertificateAttributes = function (
            el: _Element
        ): CVCertificateAttributes {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 1) {
                throw new _ConstructionError(
                    "CVCertificateAttributes contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "value";
            let value!: ObjectValue<_Element>;
            value = _get_decoder_for_ObjectValue<_Element>($._decodeAny)(
                sequence[0]
            );
            return new CVCertificateAttributes(value, sequence.slice(1));
        };
    }
    return _cached_decoder_for_CVCertificateAttributes(el);
}


let _cached_encoder_for_CVCertificateAttributes: $.ASN1Encoder<CVCertificateAttributes> | null = null;


/**
 * @summary Encodes a(n) CVCertificateAttributes into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CVCertificateAttributes, encoded as an ASN.1 Element.
 */
export function _encode_CVCertificateAttributes(
    value: CVCertificateAttributes,
    elGetter: $.ASN1Encoder<CVCertificateAttributes>
): _Element {
    if (!_cached_encoder_for_CVCertificateAttributes) {
        _cached_encoder_for_CVCertificateAttributes = function (
            value: CVCertificateAttributes        ): _Element {
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
    return _cached_encoder_for_CVCertificateAttributes(value, elGetter);
}


/* eslint-enable */
