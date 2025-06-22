/* eslint-disable */
import {
    Parameters,
    _decode_Parameters,
    _encode_Parameters,
} from "@wildboar/ansi-x9-62/src/lib/modules/ANSI-X9-62/Parameters.ta.mjs";
import { ASN1Element as _Element, OPTIONAL } from "asn1-ts";
import * as $ from "@wildboar/asn1/functional";
import {
    ECPrivateKey,
    _decode_ECPrivateKey,
    _encode_ECPrivateKey,
} from "../PKCS-15/ECPrivateKey.ta.mjs";
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
 * @summary PrivateECKeyAttributes
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PrivateECKeyAttributes ::= SEQUENCE {
 *     value  ObjectValue {ECPrivateKey},
 *     keyInfo KeyInfo {Parameters, PublicKeyOperations} OPTIONAL,
 *     ... -- For future extensions
 * }
 * ```
 *
 * @class
 */
export class PrivateECKeyAttributes {
    constructor(
        /**
         * @summary `value`.
         * @public
         * @readonly
         */
        readonly value: ObjectValue<ECPrivateKey>,
        /**
         * @summary `keyInfo`.
         * @public
         * @readonly
         */
        readonly keyInfo: OPTIONAL<KeyInfo<Parameters, PublicKeyOperations>>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a PrivateECKeyAttributes
     * @description
     *
     * This takes an `object` and converts it to a `PrivateECKeyAttributes`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `PrivateECKeyAttributes`.
     * @returns {PrivateECKeyAttributes}
     */
    public static _from_object(
        _o: { [_K in keyof PrivateECKeyAttributes]: PrivateECKeyAttributes[_K] }
    ): PrivateECKeyAttributes {
        return new PrivateECKeyAttributes(
            _o.value,
            _o.keyInfo,
            _o._unrecognizedExtensionsList
        );
    }
}


/**
 * @summary The Leading Root Component Types of PrivateECKeyAttributes
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_PrivateECKeyAttributes: $.ComponentSpec[] = [
    new $.ComponentSpec("value", false, $.hasAnyTag),
    new $.ComponentSpec("keyInfo", true, $.hasAnyTag),
];


/**
 * @summary The Trailing Root Component Types of PrivateECKeyAttributes
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_PrivateECKeyAttributes: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of PrivateECKeyAttributes
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_PrivateECKeyAttributes: $.ComponentSpec[] = [];


let _cached_decoder_for_PrivateECKeyAttributes: $.ASN1Decoder<PrivateECKeyAttributes> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) PrivateECKeyAttributes
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {PrivateECKeyAttributes} The decoded data structure.
 */
export function _decode_PrivateECKeyAttributes(el: _Element) {
    if (!_cached_decoder_for_PrivateECKeyAttributes) {
        _cached_decoder_for_PrivateECKeyAttributes = function (
            el: _Element
        ): PrivateECKeyAttributes {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let value!: ObjectValue<ECPrivateKey>;
            let keyInfo: OPTIONAL<KeyInfo<Parameters, PublicKeyOperations>>;
            let _unrecognizedExtensionsList: _Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                value: (_el: _Element): void => {
                    value = _get_decoder_for_ObjectValue<ECPrivateKey>(
                        _decode_ECPrivateKey
                    )(_el);
                },
                keyInfo: (_el: _Element): void => {
                    keyInfo = _get_decoder_for_KeyInfo<
                        Parameters,
                        PublicKeyOperations
                    >(
                        _decode_Parameters,
                        _decode_PublicKeyOperations
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_PrivateECKeyAttributes,
                _extension_additions_list_spec_for_PrivateECKeyAttributes,
                _root_component_type_list_2_spec_for_PrivateECKeyAttributes,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new PrivateECKeyAttributes(
                /* SEQUENCE_CONSTRUCTOR_CALL */ value,
                keyInfo,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_PrivateECKeyAttributes(el);
}


let _cached_encoder_for_PrivateECKeyAttributes: $.ASN1Encoder<PrivateECKeyAttributes> | null = null;


/**
 * @summary Encodes a(n) PrivateECKeyAttributes into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PrivateECKeyAttributes, encoded as an ASN.1 Element.
 */
export function _encode_PrivateECKeyAttributes(
    value: PrivateECKeyAttributes,
    elGetter: $.ASN1Encoder<PrivateECKeyAttributes>
) {
    if (!_cached_encoder_for_PrivateECKeyAttributes) {
        _cached_encoder_for_PrivateECKeyAttributes = function (
            value: PrivateECKeyAttributes        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _get_encoder_for_ObjectValue<ECPrivateKey>(
                                _encode_ECPrivateKey
                            )(value.value, $.BER),
                            /* IF_ABSENT  */ value.keyInfo === undefined
                                ? undefined
                                : _get_encoder_for_KeyInfo<
                                      Parameters,
                                      PublicKeyOperations
                                  >(
                                      _encode_Parameters,
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
    return _cached_encoder_for_PrivateECKeyAttributes(value, elGetter);
}


/* eslint-enable */
