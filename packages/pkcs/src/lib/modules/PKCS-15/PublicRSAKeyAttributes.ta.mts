/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    INTEGER,
    NULL,
    OPTIONAL,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    KeyInfo,
    _get_decoder_for_KeyInfo,
    _get_encoder_for_KeyInfo,
} from "../PKCS-15/KeyInfo.ta.mjs";
import {
    ObjectValue,
    _get_decoder_for_ObjectValue,
    _get_encoder_for_ObjectValue,
} from "../PKCS-15/ObjectValue.ta.mjs";
import {
    PublicKeyOperations,
    _decode_PublicKeyOperations,
    _encode_PublicKeyOperations,
} from "../PKCS-15/PublicKeyOperations.ta.mjs";
import {
    RSAPublicKeyChoice,
    _decode_RSAPublicKeyChoice,
    _encode_RSAPublicKeyChoice,
} from "../PKCS-15/RSAPublicKeyChoice.ta.mjs";

/**
 * @summary PublicRSAKeyAttributes
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PublicRSAKeyAttributes ::= SEQUENCE {
 *     value ObjectValue {RSAPublicKeyChoice},
 *     modulusLength INTEGER, -- modulus length in bits, e.g. 1024
 *     keyInfo KeyInfo {NULL, PublicKeyOperations} OPTIONAL,
 *     ... -- For future extensions
 * }
 * ```
 *
 */
export class PublicRSAKeyAttributes {
    constructor(
        /**
         * @summary `value`.
         * @public
         * @readonly
         */
        readonly value: ObjectValue<RSAPublicKeyChoice>,
        /**
         * @summary `modulusLength`.
         * @public
         * @readonly
         */
        readonly modulusLength: INTEGER,
        /**
         * @summary `keyInfo`.
         * @public
         * @readonly
         */
        readonly keyInfo: OPTIONAL<KeyInfo<NULL, PublicKeyOperations>>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a PublicRSAKeyAttributes
     * @description
     *
     * This takes an `object` and converts it to a `PublicRSAKeyAttributes`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `PublicRSAKeyAttributes`.
     * @returns {PublicRSAKeyAttributes}
     */
    public static _from_object(
        _o: { [_K in keyof PublicRSAKeyAttributes]: PublicRSAKeyAttributes[_K] }
    ): PublicRSAKeyAttributes {
        return new PublicRSAKeyAttributes(
            _o.value,
            _o.modulusLength,
            _o.keyInfo,
            _o._unrecognizedExtensionsList
        );
    }
}


/**
 * @summary The Leading Root Component Types of PublicRSAKeyAttributes
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_PublicRSAKeyAttributes: $.ComponentSpec[] = [
    new $.ComponentSpec("value", false, $.hasAnyTag),
    new $.ComponentSpec(
        "modulusLength",
        false,
        $.hasTag(_TagClass.universal, 2)
    ),
    new $.ComponentSpec("keyInfo", true, $.hasAnyTag),
];


/**
 * @summary The Trailing Root Component Types of PublicRSAKeyAttributes
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_PublicRSAKeyAttributes: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of PublicRSAKeyAttributes
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_PublicRSAKeyAttributes: $.ComponentSpec[] = [];


let _cached_decoder_for_PublicRSAKeyAttributes: $.ASN1Decoder<PublicRSAKeyAttributes> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) PublicRSAKeyAttributes
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {PublicRSAKeyAttributes} The decoded data structure.
 */
export function _decode_PublicRSAKeyAttributes(el: _Element): PublicRSAKeyAttributes {
    if (!_cached_decoder_for_PublicRSAKeyAttributes) {
        _cached_decoder_for_PublicRSAKeyAttributes = function (
            el: _Element
        ): PublicRSAKeyAttributes {
            let value!: ObjectValue<RSAPublicKeyChoice>;
            let modulusLength!: INTEGER;
            let keyInfo: OPTIONAL<KeyInfo<NULL, PublicKeyOperations>>;
            let _unrecognizedExtensionsList: _Element[] = [];
            const callbacks: $.DecodingMap = {
                value: (_el: _Element): void => {
                    value = _get_decoder_for_ObjectValue<RSAPublicKeyChoice>(
                        _decode_RSAPublicKeyChoice
                    )(_el);
                },
                modulusLength: (_el: _Element): void => {
                    modulusLength = $._decodeInteger(_el);
                },
                keyInfo: (_el: _Element): void => {
                    keyInfo = _get_decoder_for_KeyInfo<
                        NULL,
                        PublicKeyOperations
                    >(
                        $._decodeNull,
                        _decode_PublicKeyOperations
                    )(_el);
                },
            };
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_PublicRSAKeyAttributes,
                _extension_additions_list_spec_for_PublicRSAKeyAttributes,
                _root_component_type_list_2_spec_for_PublicRSAKeyAttributes,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new PublicRSAKeyAttributes(
                value,
                modulusLength,
                keyInfo,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_PublicRSAKeyAttributes(el);
}


let _cached_encoder_for_PublicRSAKeyAttributes: $.ASN1Encoder<PublicRSAKeyAttributes> | null = null;


/**
 * @summary Encodes a(n) PublicRSAKeyAttributes into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PublicRSAKeyAttributes, encoded as an ASN.1 Element.
 */
export function _encode_PublicRSAKeyAttributes(
    value: PublicRSAKeyAttributes,
    elGetter: $.ASN1Encoder<PublicRSAKeyAttributes>
): _Element {
    if (!_cached_encoder_for_PublicRSAKeyAttributes) {
        _cached_encoder_for_PublicRSAKeyAttributes = function (
            value: PublicRSAKeyAttributes        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _get_encoder_for_ObjectValue<RSAPublicKeyChoice>(
                                _encode_RSAPublicKeyChoice
                            )(value.value, $.BER),
                            /* REQUIRED   */ $._encodeInteger(
                                value.modulusLength,
                                $.BER
                            ),
                            /* IF_ABSENT  */ value.keyInfo === undefined
                                ? undefined
                                : _get_encoder_for_KeyInfo<
                                      NULL,
                                      PublicKeyOperations
                                  >($._encodeNull, _encode_PublicKeyOperations)(
                                      value.keyInfo,
                                      $.BER
                                  ),
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
    return _cached_encoder_for_PublicRSAKeyAttributes(value, elGetter);
}


/* eslint-enable */
