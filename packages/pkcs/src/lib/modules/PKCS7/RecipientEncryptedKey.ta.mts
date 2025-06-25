/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    EncryptedKey,
    _decode_EncryptedKey,
    _encode_EncryptedKey,
} from "../PKCS7/EncryptedKey.ta.mjs";
import {
    KeyAgreementRecipientIdentifier,
    _decode_KeyAgreementRecipientIdentifier,
    _encode_KeyAgreementRecipientIdentifier,
} from "../PKCS7/KeyAgreementRecipientIdentifier.ta.mjs";

/**
 * @summary RecipientEncryptedKey
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RecipientEncryptedKey ::= SEQUENCE {
 *     recipientIdentifier  KeyAgreementRecipientIdentifier,
 *     encryptedKey         EncryptedKey
 * }
 * ```
 *
 * @class
 */
export class RecipientEncryptedKey {
    constructor(
        /**
         * @summary `recipientIdentifier`.
         * @public
         * @readonly
         */
        readonly recipientIdentifier: KeyAgreementRecipientIdentifier,
        /**
         * @summary `encryptedKey`.
         * @public
         * @readonly
         */
        readonly encryptedKey: EncryptedKey
    ) {}

    /**
     * @summary Restructures an object into a RecipientEncryptedKey
     * @description
     *
     * This takes an `object` and converts it to a `RecipientEncryptedKey`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `RecipientEncryptedKey`.
     * @returns {RecipientEncryptedKey}
     */
    public static _from_object(
        _o: { [_K in keyof RecipientEncryptedKey]: RecipientEncryptedKey[_K] }
    ): RecipientEncryptedKey {
        return new RecipientEncryptedKey(
            _o.recipientIdentifier,
            _o.encryptedKey
        );
    }
}


/**
 * @summary The Leading Root Component Types of RecipientEncryptedKey
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_RecipientEncryptedKey: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "recipientIdentifier",
        false,
        $.hasAnyTag
    ),
    new $.ComponentSpec(
        "encryptedKey",
        false,
        $.hasTag(_TagClass.universal, 4)
    ),
];


/**
 * @summary The Trailing Root Component Types of RecipientEncryptedKey
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_RecipientEncryptedKey: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of RecipientEncryptedKey
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_RecipientEncryptedKey: $.ComponentSpec[] = [];


let _cached_decoder_for_RecipientEncryptedKey: $.ASN1Decoder<RecipientEncryptedKey> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) RecipientEncryptedKey
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {RecipientEncryptedKey} The decoded data structure.
 */
export function _decode_RecipientEncryptedKey(el: _Element): RecipientEncryptedKey {
    if (!_cached_decoder_for_RecipientEncryptedKey) {
        _cached_decoder_for_RecipientEncryptedKey = function (
            el: _Element
        ): RecipientEncryptedKey {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    "RecipientEncryptedKey contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "recipientIdentifier";
            sequence[1].name = "encryptedKey";
            let recipientIdentifier!: KeyAgreementRecipientIdentifier;
            let encryptedKey!: EncryptedKey;
            recipientIdentifier = _decode_KeyAgreementRecipientIdentifier(
                sequence[0]
            );
            encryptedKey = _decode_EncryptedKey(sequence[1]);
            return new RecipientEncryptedKey(recipientIdentifier, encryptedKey);
        };
    }
    return _cached_decoder_for_RecipientEncryptedKey(el);
}


let _cached_encoder_for_RecipientEncryptedKey: $.ASN1Encoder<RecipientEncryptedKey> | null = null;


/**
 * @summary Encodes a(n) RecipientEncryptedKey into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RecipientEncryptedKey, encoded as an ASN.1 Element.
 */
export function _encode_RecipientEncryptedKey(
    value: RecipientEncryptedKey,
    elGetter: $.ASN1Encoder<RecipientEncryptedKey>
): _Element {
    if (!_cached_encoder_for_RecipientEncryptedKey) {
        _cached_encoder_for_RecipientEncryptedKey = function (
            value: RecipientEncryptedKey        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_KeyAgreementRecipientIdentifier(
                            value.recipientIdentifier,
                            $.BER
                        ),
                        /* REQUIRED   */ _encode_EncryptedKey(
                            value.encryptedKey,
                            $.BER
                        ),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_RecipientEncryptedKey(value, elGetter);
}


/* eslint-enable */
