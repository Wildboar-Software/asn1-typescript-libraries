/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";
import {
    ObjectValue,
    _get_decoder_for_ObjectValue,
    _get_encoder_for_ObjectValue,
} from "../PKCS-15/ObjectValue.ta.mjs";

/**
 * @summary WTLSCertificateAttributes
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * WTLSCertificateAttributes ::= SEQUENCE {
 *     value ObjectValue { PKCS15-OPAQUE.&Type },
 *     ... -- For future extensions
 * }
 * ```
 *
 * @class
 */
export class WTLSCertificateAttributes {
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
     * @summary Restructures an object into a WTLSCertificateAttributes
     * @description
     *
     * This takes an `object` and converts it to a `WTLSCertificateAttributes`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `WTLSCertificateAttributes`.
     * @returns {WTLSCertificateAttributes}
     */
    public static _from_object(
        _o: {
            [_K in keyof WTLSCertificateAttributes]: WTLSCertificateAttributes[_K];
        }
    ): WTLSCertificateAttributes {
        return new WTLSCertificateAttributes(
            _o.value,
            _o._unrecognizedExtensionsList
        );
    }
}


/**
 * @summary The Leading Root Component Types of WTLSCertificateAttributes
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_WTLSCertificateAttributes: $.ComponentSpec[] = [
    new $.ComponentSpec("value", false, $.hasAnyTag),
];


/**
 * @summary The Trailing Root Component Types of WTLSCertificateAttributes
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_WTLSCertificateAttributes: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of WTLSCertificateAttributes
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_WTLSCertificateAttributes: $.ComponentSpec[] = [];


let _cached_decoder_for_WTLSCertificateAttributes: $.ASN1Decoder<WTLSCertificateAttributes> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) WTLSCertificateAttributes
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {WTLSCertificateAttributes} The decoded data structure.
 */
export function _decode_WTLSCertificateAttributes(el: _Element) {
    if (!_cached_decoder_for_WTLSCertificateAttributes) {
        _cached_decoder_for_WTLSCertificateAttributes = function (
            el: _Element
        ): WTLSCertificateAttributes {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 1) {
                throw new _ConstructionError(
                    "WTLSCertificateAttributes contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "value";
            let value!: ObjectValue<_Element>;
            value = _get_decoder_for_ObjectValue<_Element>($._decodeAny)(
                sequence[0]
            );
            return new WTLSCertificateAttributes(value, sequence.slice(1));
        };
    }
    return _cached_decoder_for_WTLSCertificateAttributes(el);
}


let _cached_encoder_for_WTLSCertificateAttributes: $.ASN1Encoder<WTLSCertificateAttributes> | null = null;


/**
 * @summary Encodes a(n) WTLSCertificateAttributes into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The WTLSCertificateAttributes, encoded as an ASN.1 Element.
 */
export function _encode_WTLSCertificateAttributes(
    value: WTLSCertificateAttributes,
    elGetter: $.ASN1Encoder<WTLSCertificateAttributes>
) {
    if (!_cached_encoder_for_WTLSCertificateAttributes) {
        _cached_encoder_for_WTLSCertificateAttributes = function (
            value: WTLSCertificateAttributes        ): _Element {
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
    return _cached_encoder_for_WTLSCertificateAttributes(value, elGetter);
}


/* eslint-enable */
