/* eslint-disable */
import {
    DomainParameters,
    _decode_DomainParameters,
    _encode_DomainParameters,
} from "@wildboar/ansi-x9-42";
import { ASN1Element as _Element, OPTIONAL } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    DHPublicKeyChoice,
    _decode_DHPublicKeyChoice,
    _encode_DHPublicKeyChoice,
} from "../PKCS-15/DHPublicKeyChoice.ta.mjs";
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
 * @summary PublicDHKeyAttributes
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PublicDHKeyAttributes ::= SEQUENCE {
 *     value  ObjectValue {DHPublicKeyChoice},
 *     keyInfo KeyInfo {DomainParameters, PublicKeyOperations} OPTIONAL,
 *     ... -- For future extensions
 * }
 * ```
 *
 */
export class PublicDHKeyAttributes {
    constructor(
        /**
         * @summary `value`.
         * @public
         * @readonly
         */
        readonly value: ObjectValue<DHPublicKeyChoice>,
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
     * @summary Restructures an object into a PublicDHKeyAttributes
     * @description
     *
     * This takes an `object` and converts it to a `PublicDHKeyAttributes`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `PublicDHKeyAttributes`.
     * @returns {PublicDHKeyAttributes}
     */
    public static _from_object(
        _o: { [_K in keyof PublicDHKeyAttributes]: PublicDHKeyAttributes[_K] }
    ): PublicDHKeyAttributes {
        return new PublicDHKeyAttributes(
            _o.value,
            _o.keyInfo,
            _o._unrecognizedExtensionsList
        );
    }
}


/**
 * @summary The Leading Root Component Types of PublicDHKeyAttributes
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_PublicDHKeyAttributes: $.ComponentSpec[] = [
    new $.ComponentSpec("value", false, $.hasAnyTag),
    new $.ComponentSpec("keyInfo", true, $.hasAnyTag),
];


/**
 * @summary The Trailing Root Component Types of PublicDHKeyAttributes
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_PublicDHKeyAttributes: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of PublicDHKeyAttributes
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_PublicDHKeyAttributes: $.ComponentSpec[] = [];


let _cached_decoder_for_PublicDHKeyAttributes: $.ASN1Decoder<PublicDHKeyAttributes> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) PublicDHKeyAttributes
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {PublicDHKeyAttributes} The decoded data structure.
 */
export function _decode_PublicDHKeyAttributes(el: _Element): PublicDHKeyAttributes {
    if (!_cached_decoder_for_PublicDHKeyAttributes) {
        _cached_decoder_for_PublicDHKeyAttributes = function (
            el: _Element
        ): PublicDHKeyAttributes {
            let value!: ObjectValue<DHPublicKeyChoice>;
            let keyInfo: OPTIONAL<
                KeyInfo<DomainParameters, PublicKeyOperations>
            >;
            let _unrecognizedExtensionsList: _Element[] = [];
            const callbacks: $.DecodingMap = {
                value: (_el: _Element): void => {
                    value = _get_decoder_for_ObjectValue<DHPublicKeyChoice>(
                        _decode_DHPublicKeyChoice
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
                _root_component_type_list_1_spec_for_PublicDHKeyAttributes,
                _extension_additions_list_spec_for_PublicDHKeyAttributes,
                _root_component_type_list_2_spec_for_PublicDHKeyAttributes,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new PublicDHKeyAttributes(
                value,
                keyInfo,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_PublicDHKeyAttributes(el);
}


let _cached_encoder_for_PublicDHKeyAttributes: $.ASN1Encoder<PublicDHKeyAttributes> | null = null;


/**
 * @summary Encodes a(n) PublicDHKeyAttributes into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PublicDHKeyAttributes, encoded as an ASN.1 Element.
 */
export function _encode_PublicDHKeyAttributes(
    value: PublicDHKeyAttributes,
    elGetter: $.ASN1Encoder<PublicDHKeyAttributes>
): _Element {
    if (!_cached_encoder_for_PublicDHKeyAttributes) {
        _cached_encoder_for_PublicDHKeyAttributes = function (
            value: PublicDHKeyAttributes        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _get_encoder_for_ObjectValue<DHPublicKeyChoice>(
                                _encode_DHPublicKeyChoice
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
    return _cached_encoder_for_PublicDHKeyAttributes(value, elGetter);
}


/* eslint-enable */
