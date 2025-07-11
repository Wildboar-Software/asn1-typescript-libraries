/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    OCTET_STRING,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    ObjectValue,
    _get_decoder_for_ObjectValue,
    _get_encoder_for_ObjectValue,
} from "../PKCS-15/ObjectValue.ta.mjs";

/**
 * @summary GenericSecretKeyAttributes
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * GenericSecretKeyAttributes ::= SEQUENCE {
 *     value ObjectValue { OCTET STRING },
 *     ... -- For future extensions
 * }
 * ```
 *
 */
export class GenericSecretKeyAttributes {
    constructor(
        /**
         * @summary `value`.
         * @public
         * @readonly
         */
        readonly value: ObjectValue<OCTET_STRING>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a GenericSecretKeyAttributes
     * @description
     *
     * This takes an `object` and converts it to a `GenericSecretKeyAttributes`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `GenericSecretKeyAttributes`.
     * @returns {GenericSecretKeyAttributes}
     */
    public static _from_object(
        _o: {
            [_K in keyof GenericSecretKeyAttributes]: GenericSecretKeyAttributes[_K];
        }
    ): GenericSecretKeyAttributes {
        return new GenericSecretKeyAttributes(
            _o.value,
            _o._unrecognizedExtensionsList
        );
    }
}


/**
 * @summary The Leading Root Component Types of GenericSecretKeyAttributes
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_GenericSecretKeyAttributes: $.ComponentSpec[] = [
    new $.ComponentSpec("value", false, $.hasAnyTag),
];


/**
 * @summary The Trailing Root Component Types of GenericSecretKeyAttributes
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_GenericSecretKeyAttributes: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of GenericSecretKeyAttributes
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_GenericSecretKeyAttributes: $.ComponentSpec[] = [];


let _cached_decoder_for_GenericSecretKeyAttributes: $.ASN1Decoder<GenericSecretKeyAttributes> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) GenericSecretKeyAttributes
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {GenericSecretKeyAttributes} The decoded data structure.
 */
export function _decode_GenericSecretKeyAttributes(el: _Element): GenericSecretKeyAttributes {
    if (!_cached_decoder_for_GenericSecretKeyAttributes) {
        _cached_decoder_for_GenericSecretKeyAttributes = function (
            el: _Element
        ): GenericSecretKeyAttributes {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 1) {
                throw new _ConstructionError(
                    "GenericSecretKeyAttributes contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "value";
            let value!: ObjectValue<OCTET_STRING>;
            value = _get_decoder_for_ObjectValue<OCTET_STRING>(
                $._decodeOctetString
            )(sequence[0]);
            return new GenericSecretKeyAttributes(value, sequence.slice(1));
        };
    }
    return _cached_decoder_for_GenericSecretKeyAttributes(el);
}


let _cached_encoder_for_GenericSecretKeyAttributes: $.ASN1Encoder<GenericSecretKeyAttributes> | null = null;


/**
 * @summary Encodes a(n) GenericSecretKeyAttributes into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GenericSecretKeyAttributes, encoded as an ASN.1 Element.
 */
export function _encode_GenericSecretKeyAttributes(
    value: GenericSecretKeyAttributes,
    elGetter: $.ASN1Encoder<GenericSecretKeyAttributes>
): _Element {
    if (!_cached_encoder_for_GenericSecretKeyAttributes) {
        _cached_encoder_for_GenericSecretKeyAttributes = function (
            value: GenericSecretKeyAttributes        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _get_encoder_for_ObjectValue<OCTET_STRING>(
                                $._encodeOctetString
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
    return _cached_encoder_for_GenericSecretKeyAttributes(value, elGetter);
}


/* eslint-enable */
