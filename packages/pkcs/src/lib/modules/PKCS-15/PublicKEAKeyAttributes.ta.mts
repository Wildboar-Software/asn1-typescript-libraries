/* eslint-disable */
import {
    DomainParameters,
    _decode_DomainParameters,
    _encode_DomainParameters,
} from "@wildboar/ansi-x9-42";
import { ASN1Element as _Element, OPTIONAL } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    KEAPublicKeyChoice,
    _decode_KEAPublicKeyChoice,
    _encode_KEAPublicKeyChoice,
} from "../PKCS-15/KEAPublicKeyChoice.ta.mjs";
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


/**
 * @summary PublicKEAKeyAttributes
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PublicKEAKeyAttributes ::= SEQUENCE {
 *     value  ObjectValue {KEAPublicKeyChoice},
 *     keyInfo KeyInfo {DomainParameters, PublicKeyOperations} OPTIONAL,
 *     ... -- For future extensions
 * }
 * ```
 *
 */
export class PublicKEAKeyAttributes {
    constructor(
        /**
         * @summary `value`.
         * @public
         * @readonly
         */
        readonly value: ObjectValue<KEAPublicKeyChoice>,
        /**
         * @summary `keyInfo`.
         * @public
         * @readonly
         */
        readonly keyInfo: OPTIONAL<
            KeyInfo<DomainParameters, PublicKeyOperations>
        >,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a PublicKEAKeyAttributes
     * @description
     *
     * This takes an `object` and converts it to a `PublicKEAKeyAttributes`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `PublicKEAKeyAttributes`.
     * @returns {PublicKEAKeyAttributes}
     */
    public static _from_object(
        _o: { [_K in keyof PublicKEAKeyAttributes]: PublicKEAKeyAttributes[_K] }
    ): PublicKEAKeyAttributes {
        return new PublicKEAKeyAttributes(
            _o.value,
            _o.keyInfo,
            _o._unrecognizedExtensionsList
        );
    }
}


/**
 * @summary The Leading Root Component Types of PublicKEAKeyAttributes
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_PublicKEAKeyAttributes: $.ComponentSpec[] = [
    new $.ComponentSpec("value", false, $.hasAnyTag),
    new $.ComponentSpec("keyInfo", true, $.hasAnyTag),
];


/**
 * @summary The Trailing Root Component Types of PublicKEAKeyAttributes
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_PublicKEAKeyAttributes: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of PublicKEAKeyAttributes
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_PublicKEAKeyAttributes: $.ComponentSpec[] = [];


let _cached_decoder_for_PublicKEAKeyAttributes: $.ASN1Decoder<PublicKEAKeyAttributes> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) PublicKEAKeyAttributes
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {PublicKEAKeyAttributes} The decoded data structure.
 */
export function _decode_PublicKEAKeyAttributes(el: _Element): PublicKEAKeyAttributes {
    if (!_cached_decoder_for_PublicKEAKeyAttributes) {
        _cached_decoder_for_PublicKEAKeyAttributes = function (
            el: _Element
        ): PublicKEAKeyAttributes {
            let value!: ObjectValue<KEAPublicKeyChoice>;
            let keyInfo: OPTIONAL<
                KeyInfo<DomainParameters, PublicKeyOperations>
            >;
            let _unrecognizedExtensionsList: _Element[] = [];
            const callbacks: $.DecodingMap = {
                value: (_el: _Element): void => {
                    value = _get_decoder_for_ObjectValue<KEAPublicKeyChoice>(
                        _decode_KEAPublicKeyChoice
                    )(_el);
                },
                keyInfo: (_el: _Element): void => {
                    keyInfo = _get_decoder_for_KeyInfo<
                        DomainParameters,
                        PublicKeyOperations
                    >(
                        _decode_DomainParameters,
                        _decode_PublicKeyOperations
                    )(_el);
                },
            };
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_PublicKEAKeyAttributes,
                _extension_additions_list_spec_for_PublicKEAKeyAttributes,
                _root_component_type_list_2_spec_for_PublicKEAKeyAttributes,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new PublicKEAKeyAttributes(
                value,
                keyInfo,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_PublicKEAKeyAttributes(el);
}


let _cached_encoder_for_PublicKEAKeyAttributes: $.ASN1Encoder<PublicKEAKeyAttributes> | null = null;


/**
 * @summary Encodes a(n) PublicKEAKeyAttributes into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PublicKEAKeyAttributes, encoded as an ASN.1 Element.
 */
export function _encode_PublicKEAKeyAttributes(
    value: PublicKEAKeyAttributes,
    elGetter: $.ASN1Encoder<PublicKEAKeyAttributes>
): _Element {
    if (!_cached_encoder_for_PublicKEAKeyAttributes) {
        _cached_encoder_for_PublicKEAKeyAttributes = function (
            value: PublicKEAKeyAttributes        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _get_encoder_for_ObjectValue<KEAPublicKeyChoice>(
                                _encode_KEAPublicKeyChoice
                            )(value.value, $.BER),
                            /* IF_ABSENT  */ value.keyInfo === undefined
                                ? undefined
                                : _get_encoder_for_KeyInfo<
                                      DomainParameters,
                                      PublicKeyOperations
                                  >(
                                      _encode_DomainParameters,
                                      _encode_PublicKeyOperations
                                  )(value.keyInfo, $.BER),
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
    return _cached_encoder_for_PublicKEAKeyAttributes(value, elGetter);
}


/* eslint-enable */
