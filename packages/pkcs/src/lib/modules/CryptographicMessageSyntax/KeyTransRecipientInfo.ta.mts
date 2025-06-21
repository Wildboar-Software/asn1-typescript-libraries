/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";
import {
    CMSVersion,
    _decode_CMSVersion,
    _encode_CMSVersion,
} from "../CryptographicMessageSyntax/CMSVersion.ta.mjs";
import {
    EncryptedKey,
    _decode_EncryptedKey,
    _encode_EncryptedKey,
} from "../CryptographicMessageSyntax/EncryptedKey.ta.mjs";
import {
    KeyEncryptionAlgorithmIdentifier,
    _decode_KeyEncryptionAlgorithmIdentifier,
    _encode_KeyEncryptionAlgorithmIdentifier,
} from "../CryptographicMessageSyntax/KeyEncryptionAlgorithmIdentifier.ta.mjs";
import {
    RecipientIdentifier,
    _decode_RecipientIdentifier,
    _encode_RecipientIdentifier,
} from "../CryptographicMessageSyntax/RecipientIdentifier.ta.mjs";

/**
 * @summary KeyTransRecipientInfo
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * KeyTransRecipientInfo ::= SEQUENCE {
 *   version                 CMSVersion, -- always set to 0 or 2
 *   rid                     RecipientIdentifier,
 *   keyEncryptionAlgorithm  KeyEncryptionAlgorithmIdentifier,
 *   encryptedKey            EncryptedKey
 * }
 * ```
 *
 * @class
 */
export class KeyTransRecipientInfo {
    constructor(
        /**
         * @summary `version`.
         * @public
         * @readonly
         */
        readonly version: CMSVersion,
        /**
         * @summary `rid`.
         * @public
         * @readonly
         */
        readonly rid: RecipientIdentifier,
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
     * @summary Restructures an object into a KeyTransRecipientInfo
     * @description
     *
     * This takes an `object` and converts it to a `KeyTransRecipientInfo`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `KeyTransRecipientInfo`.
     * @returns {KeyTransRecipientInfo}
     */
    public static _from_object(
        _o: { [_K in keyof KeyTransRecipientInfo]: KeyTransRecipientInfo[_K] }
    ): KeyTransRecipientInfo {
        return new KeyTransRecipientInfo(
            _o.version,
            _o.rid,
            _o.keyEncryptionAlgorithm,
            _o.encryptedKey
        );
    }
}


/**
 * @summary The Leading Root Component Types of KeyTransRecipientInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_KeyTransRecipientInfo: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "version",
        false,
        $.hasTag(_TagClass.universal, 2)
    ),
    new $.ComponentSpec("rid", false, $.hasAnyTag),
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
 * @summary The Trailing Root Component Types of KeyTransRecipientInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_KeyTransRecipientInfo: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of KeyTransRecipientInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_KeyTransRecipientInfo: $.ComponentSpec[] = [];


let _cached_decoder_for_KeyTransRecipientInfo: $.ASN1Decoder<KeyTransRecipientInfo> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) KeyTransRecipientInfo
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {KeyTransRecipientInfo} The decoded data structure.
 */
export function _decode_KeyTransRecipientInfo(el: _Element) {
    if (!_cached_decoder_for_KeyTransRecipientInfo) {
        _cached_decoder_for_KeyTransRecipientInfo = function (
            el: _Element
        ): KeyTransRecipientInfo {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 4) {
                throw new _ConstructionError(
                    "KeyTransRecipientInfo contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "version";
            sequence[1].name = "rid";
            sequence[2].name = "keyEncryptionAlgorithm";
            sequence[3].name = "encryptedKey";
            let version!: CMSVersion;
            let rid!: RecipientIdentifier;
            let keyEncryptionAlgorithm!: KeyEncryptionAlgorithmIdentifier;
            let encryptedKey!: EncryptedKey;
            version = _decode_CMSVersion(sequence[0]);
            rid = _decode_RecipientIdentifier(sequence[1]);
            keyEncryptionAlgorithm = _decode_KeyEncryptionAlgorithmIdentifier(
                sequence[2]
            );
            encryptedKey = _decode_EncryptedKey(sequence[3]);
            return new KeyTransRecipientInfo(
                version,
                rid,
                keyEncryptionAlgorithm,
                encryptedKey
            );
        };
    }
    return _cached_decoder_for_KeyTransRecipientInfo(el);
}


let _cached_encoder_for_KeyTransRecipientInfo: $.ASN1Encoder<KeyTransRecipientInfo> | null = null;


/**
 * @summary Encodes a(n) KeyTransRecipientInfo into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The KeyTransRecipientInfo, encoded as an ASN.1 Element.
 */
export function _encode_KeyTransRecipientInfo(
    value: KeyTransRecipientInfo,
    elGetter: $.ASN1Encoder<KeyTransRecipientInfo>
) {
    if (!_cached_encoder_for_KeyTransRecipientInfo) {
        _cached_encoder_for_KeyTransRecipientInfo = function (
            value: KeyTransRecipientInfo        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_CMSVersion(
                            value.version,
                            $.BER
                        ),
                        /* REQUIRED   */ _encode_RecipientIdentifier(
                            value.rid,
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
    return _cached_encoder_for_KeyTransRecipientInfo(value, elGetter);
}


/* eslint-enable */
