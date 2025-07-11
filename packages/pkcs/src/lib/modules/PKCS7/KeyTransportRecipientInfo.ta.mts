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
    KeyEncryptionAlgorithmIdentifier,
    _decode_KeyEncryptionAlgorithmIdentifier,
    _encode_KeyEncryptionAlgorithmIdentifier,
} from "../PKCS7/KeyEncryptionAlgorithmIdentifier.ta.mjs";
import {
    RecipientIdentifier,
    _decode_RecipientIdentifier,
    _encode_RecipientIdentifier,
} from "../PKCS7/RecipientIdentifier.ta.mjs";
import { Version, _decode_Version, _encode_Version } from "../PKCS7/Version.ta.mjs";

/**
 * @summary KeyTransportRecipientInfo
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * KeyTransportRecipientInfo ::= SEQUENCE {
 *     version                 Version,
 *     recipientIdentifier     RecipientIdentifier,
 *     keyEncryptionAlgorithm  KeyEncryptionAlgorithmIdentifier,
 *     encryptedKey            EncryptedKey
 * }
 * ```
 *
 */
export class KeyTransportRecipientInfo {
    constructor(
        /**
         * @summary `version`.
         * @public
         * @readonly
         */
        readonly version: Version,
        /**
         * @summary `recipientIdentifier`.
         * @public
         * @readonly
         */
        readonly recipientIdentifier: RecipientIdentifier,
        /**
         * @summary `keyEncryptionAlgorithm`.
         * @public
         * @readonly
         */
        readonly keyEncryptionAlgorithm: KeyEncryptionAlgorithmIdentifier,
        /**
         * @summary `encryptedKey`.
         * @public
         * @readonly
         */
        readonly encryptedKey: EncryptedKey
    ) {}

    /**
     * @summary Restructures an object into a KeyTransportRecipientInfo
     * @description
     *
     * This takes an `object` and converts it to a `KeyTransportRecipientInfo`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `KeyTransportRecipientInfo`.
     * @returns {KeyTransportRecipientInfo}
     */
    public static _from_object(
        _o: {
            [_K in keyof KeyTransportRecipientInfo]: KeyTransportRecipientInfo[_K];
        }
    ): KeyTransportRecipientInfo {
        return new KeyTransportRecipientInfo(
            _o.version,
            _o.recipientIdentifier,
            _o.keyEncryptionAlgorithm,
            _o.encryptedKey
        );
    }
}


/**
 * @summary The Leading Root Component Types of KeyTransportRecipientInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_KeyTransportRecipientInfo: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "version",
        false,
        $.hasTag(_TagClass.universal, 2)
    ),
    new $.ComponentSpec(
        "recipientIdentifier",
        false,
        $.hasAnyTag
    ),
    new $.ComponentSpec(
        "keyEncryptionAlgorithm",
        false,
        $.hasTag(_TagClass.universal, 16)
    ),
    new $.ComponentSpec(
        "encryptedKey",
        false,
        $.hasTag(_TagClass.universal, 4)
    ),
];


/**
 * @summary The Trailing Root Component Types of KeyTransportRecipientInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_KeyTransportRecipientInfo: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of KeyTransportRecipientInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_KeyTransportRecipientInfo: $.ComponentSpec[] = [];


let _cached_decoder_for_KeyTransportRecipientInfo: $.ASN1Decoder<KeyTransportRecipientInfo> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) KeyTransportRecipientInfo
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {KeyTransportRecipientInfo} The decoded data structure.
 */
export function _decode_KeyTransportRecipientInfo(el: _Element): KeyTransportRecipientInfo {
    if (!_cached_decoder_for_KeyTransportRecipientInfo) {
        _cached_decoder_for_KeyTransportRecipientInfo = function (
            el: _Element
        ): KeyTransportRecipientInfo {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 4) {
                throw new _ConstructionError(
                    "KeyTransportRecipientInfo contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "version";
            sequence[1].name = "recipientIdentifier";
            sequence[2].name = "keyEncryptionAlgorithm";
            sequence[3].name = "encryptedKey";
            let version!: Version;
            let recipientIdentifier!: RecipientIdentifier;
            let keyEncryptionAlgorithm!: KeyEncryptionAlgorithmIdentifier;
            let encryptedKey!: EncryptedKey;
            version = _decode_Version(sequence[0]);
            recipientIdentifier = _decode_RecipientIdentifier(sequence[1]);
            keyEncryptionAlgorithm = _decode_KeyEncryptionAlgorithmIdentifier(
                sequence[2]
            );
            encryptedKey = _decode_EncryptedKey(sequence[3]);
            return new KeyTransportRecipientInfo(
                version,
                recipientIdentifier,
                keyEncryptionAlgorithm,
                encryptedKey
            );
        };
    }
    return _cached_decoder_for_KeyTransportRecipientInfo(el);
}


let _cached_encoder_for_KeyTransportRecipientInfo: $.ASN1Encoder<KeyTransportRecipientInfo> | null = null;


/**
 * @summary Encodes a(n) KeyTransportRecipientInfo into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The KeyTransportRecipientInfo, encoded as an ASN.1 Element.
 */
export function _encode_KeyTransportRecipientInfo(
    value: KeyTransportRecipientInfo,
    elGetter: $.ASN1Encoder<KeyTransportRecipientInfo>
): _Element {
    if (!_cached_encoder_for_KeyTransportRecipientInfo) {
        _cached_encoder_for_KeyTransportRecipientInfo = function (
            value: KeyTransportRecipientInfo        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_Version(value.version, $.BER),
                        /* REQUIRED   */ _encode_RecipientIdentifier(
                            value.recipientIdentifier,
                            $.BER
                        ),
                        /* REQUIRED   */ _encode_KeyEncryptionAlgorithmIdentifier(
                            value.keyEncryptionAlgorithm,
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
    return _cached_encoder_for_KeyTransportRecipientInfo(value, elGetter);
}


/* eslint-enable */
