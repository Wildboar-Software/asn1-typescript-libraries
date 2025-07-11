/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    CMSVersion,
    _decode_CMSVersion,
    _encode_CMSVersion,
} from "../CryptographicMessageSyntax-2010/CMSVersion.ta.mjs";
import {
    EncryptedKey,
    _decode_EncryptedKey,
    _encode_EncryptedKey,
} from "../CryptographicMessageSyntax-2010/EncryptedKey.ta.mjs";
import {
    KEKIdentifier,
    _decode_KEKIdentifier,
    _encode_KEKIdentifier,
} from "../CryptographicMessageSyntax-2010/KEKIdentifier.ta.mjs";
import {
    KeyEncryptionAlgorithmIdentifier,
    _decode_KeyEncryptionAlgorithmIdentifier,
    _encode_KeyEncryptionAlgorithmIdentifier,
} from "../CryptographicMessageSyntax-2010/KeyEncryptionAlgorithmIdentifier.ta.mjs";

/**
 * @summary KEKRecipientInfo
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * KEKRecipientInfo ::= SEQUENCE {
 * version             CMSVersion,  -- always set to 4
 * kekid             KEKIdentifier,
 * keyEncryptionAlgorithm     KeyEncryptionAlgorithmIdentifier,
 * encryptedKey         EncryptedKey }
 * ```
 *
 */
export class KEKRecipientInfo {
    constructor(
        /**
         * @summary `version`.
         * @public
         * @readonly
         */
        readonly version: CMSVersion,
        /**
         * @summary `kekid`.
         * @public
         * @readonly
         */
        readonly kekid: KEKIdentifier,
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
     * @summary Restructures an object into a KEKRecipientInfo
     * @description
     *
     * This takes an `object` and converts it to a `KEKRecipientInfo`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `KEKRecipientInfo`.
     * @returns {KEKRecipientInfo}
     */
    public static _from_object(
        _o: { [_K in keyof KEKRecipientInfo]: KEKRecipientInfo[_K] }
    ): KEKRecipientInfo {
        return new KEKRecipientInfo(
            _o.version,
            _o.kekid,
            _o.keyEncryptionAlgorithm,
            _o.encryptedKey
        );
    }
}


/**
 * @summary The Leading Root Component Types of KEKRecipientInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_KEKRecipientInfo: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "version",
        false,
        $.hasTag(_TagClass.universal, 2)
    ),
    new $.ComponentSpec(
        "kekid",
        false,
        $.hasTag(_TagClass.universal, 16)
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
 * @summary The Trailing Root Component Types of KEKRecipientInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_KEKRecipientInfo: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of KEKRecipientInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_KEKRecipientInfo: $.ComponentSpec[] = [];


let _cached_decoder_for_KEKRecipientInfo: $.ASN1Decoder<KEKRecipientInfo> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) KEKRecipientInfo
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {KEKRecipientInfo} The decoded data structure.
 */
export function _decode_KEKRecipientInfo(el: _Element): KEKRecipientInfo {
    if (!_cached_decoder_for_KEKRecipientInfo) {
        _cached_decoder_for_KEKRecipientInfo = function (
            el: _Element
        ): KEKRecipientInfo {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 4) {
                throw new _ConstructionError(
                    "KEKRecipientInfo contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "version";
            sequence[1].name = "kekid";
            sequence[2].name = "keyEncryptionAlgorithm";
            sequence[3].name = "encryptedKey";
            let version!: CMSVersion;
            let kekid!: KEKIdentifier;
            let keyEncryptionAlgorithm!: KeyEncryptionAlgorithmIdentifier;
            let encryptedKey!: EncryptedKey;
            version = _decode_CMSVersion(sequence[0]);
            kekid = _decode_KEKIdentifier(sequence[1]);
            keyEncryptionAlgorithm = _decode_KeyEncryptionAlgorithmIdentifier(
                sequence[2]
            );
            encryptedKey = _decode_EncryptedKey(sequence[3]);
            return new KEKRecipientInfo(
                version,
                kekid,
                keyEncryptionAlgorithm,
                encryptedKey
            );
        };
    }
    return _cached_decoder_for_KEKRecipientInfo(el);
}


let _cached_encoder_for_KEKRecipientInfo: $.ASN1Encoder<KEKRecipientInfo> | null = null;


/**
 * @summary Encodes a(n) KEKRecipientInfo into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The KEKRecipientInfo, encoded as an ASN.1 Element.
 */
export function _encode_KEKRecipientInfo(
    value: KEKRecipientInfo,
    elGetter: $.ASN1Encoder<KEKRecipientInfo>
): _Element {
    if (!_cached_encoder_for_KEKRecipientInfo) {
        _cached_encoder_for_KEKRecipientInfo = function (
            value: KEKRecipientInfo        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_CMSVersion(
                            value.version,
                            $.DER
                        ),
                        /* REQUIRED   */ _encode_KEKIdentifier(
                            value.kekid,
                            $.DER
                        ),
                        /* REQUIRED   */ _encode_KeyEncryptionAlgorithmIdentifier(
                            value.keyEncryptionAlgorithm,
                            $.DER
                        ),
                        /* REQUIRED   */ _encode_EncryptedKey(
                            value.encryptedKey,
                            $.DER
                        ),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.DER
            );
        };
    }
    return _cached_encoder_for_KEKRecipientInfo(value, elGetter);
}


/* eslint-enable */
