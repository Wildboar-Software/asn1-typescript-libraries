/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OPTIONAL,
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
    KeyDerivationAlgorithmIdentifier,
    _decode_KeyDerivationAlgorithmIdentifier,
    _encode_KeyDerivationAlgorithmIdentifier,
} from "../CryptographicMessageSyntax-2010/KeyDerivationAlgorithmIdentifier.ta.mjs";
import {
    KeyEncryptionAlgorithmIdentifier,
    _decode_KeyEncryptionAlgorithmIdentifier,
    _encode_KeyEncryptionAlgorithmIdentifier,
} from "../CryptographicMessageSyntax-2010/KeyEncryptionAlgorithmIdentifier.ta.mjs";

/**
 * @summary PasswordRecipientInfo
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PasswordRecipientInfo ::= SEQUENCE {
 * version             CMSVersion,   -- always set to 0
 * keyDerivationAlgorithm     [0] KeyDerivationAlgorithmIdentifier
 *         OPTIONAL,
 * keyEncryptionAlgorithm     KeyEncryptionAlgorithmIdentifier,
 * encryptedKey         EncryptedKey }
 * ```
 *
 * @class
 */
export class PasswordRecipientInfo {
    constructor(
        /**
         * @summary `version`.
         * @public
         * @readonly
         */
        readonly version: CMSVersion,
        /**
         * @summary `keyDerivationAlgorithm`.
         * @public
         * @readonly
         */
        readonly keyDerivationAlgorithm: OPTIONAL<KeyDerivationAlgorithmIdentifier>,
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
     * @summary Restructures an object into a PasswordRecipientInfo
     * @description
     *
     * This takes an `object` and converts it to a `PasswordRecipientInfo`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `PasswordRecipientInfo`.
     * @returns {PasswordRecipientInfo}
     */
    public static _from_object(
        _o: { [_K in keyof PasswordRecipientInfo]: PasswordRecipientInfo[_K] }
    ): PasswordRecipientInfo {
        return new PasswordRecipientInfo(
            _o.version,
            _o.keyDerivationAlgorithm,
            _o.keyEncryptionAlgorithm,
            _o.encryptedKey
        );
    }
}


/**
 * @summary The Leading Root Component Types of PasswordRecipientInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_PasswordRecipientInfo: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "version",
        false,
        $.hasTag(_TagClass.universal, 2)
    ),
    new $.ComponentSpec(
        "keyDerivationAlgorithm",
        true,
        $.hasTag(_TagClass.context, 0)
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
 * @summary The Trailing Root Component Types of PasswordRecipientInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_PasswordRecipientInfo: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of PasswordRecipientInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_PasswordRecipientInfo: $.ComponentSpec[] = [];


let _cached_decoder_for_PasswordRecipientInfo: $.ASN1Decoder<PasswordRecipientInfo> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) PasswordRecipientInfo
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {PasswordRecipientInfo} The decoded data structure.
 */
export function _decode_PasswordRecipientInfo(el: _Element): PasswordRecipientInfo {
    if (!_cached_decoder_for_PasswordRecipientInfo) {
        _cached_decoder_for_PasswordRecipientInfo = function (
            el: _Element
        ): PasswordRecipientInfo {
            let version!: CMSVersion;
            let keyDerivationAlgorithm: OPTIONAL<KeyDerivationAlgorithmIdentifier>;
            let keyEncryptionAlgorithm!: KeyEncryptionAlgorithmIdentifier;
            let encryptedKey!: EncryptedKey;
            const callbacks: $.DecodingMap = {
                version: (_el: _Element): void => {
                    version = _decode_CMSVersion(_el);
                },
                keyDerivationAlgorithm: (_el: _Element): void => {
                    keyDerivationAlgorithm = $._decode_implicit<KeyDerivationAlgorithmIdentifier>(
                        () => _decode_KeyDerivationAlgorithmIdentifier
                    )(_el);
                },
                keyEncryptionAlgorithm: (_el: _Element): void => {
                    keyEncryptionAlgorithm = _decode_KeyEncryptionAlgorithmIdentifier(
                        _el
                    );
                },
                encryptedKey: (_el: _Element): void => {
                    encryptedKey = _decode_EncryptedKey(_el);
                },
            };
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_PasswordRecipientInfo,
                _extension_additions_list_spec_for_PasswordRecipientInfo,
                _root_component_type_list_2_spec_for_PasswordRecipientInfo,
                undefined
            );
            return new PasswordRecipientInfo (
                version,
                keyDerivationAlgorithm,
                keyEncryptionAlgorithm,
                encryptedKey
            );
        };
    }
    return _cached_decoder_for_PasswordRecipientInfo(el);
}


let _cached_encoder_for_PasswordRecipientInfo: $.ASN1Encoder<PasswordRecipientInfo> | null = null;


/**
 * @summary Encodes a(n) PasswordRecipientInfo into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PasswordRecipientInfo, encoded as an ASN.1 Element.
 */
export function _encode_PasswordRecipientInfo(
    value: PasswordRecipientInfo,
    elGetter: $.ASN1Encoder<PasswordRecipientInfo>
): _Element {
    if (!_cached_encoder_for_PasswordRecipientInfo) {
        _cached_encoder_for_PasswordRecipientInfo = function (
            value: PasswordRecipientInfo        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_CMSVersion(
                            value.version,
                            $.DER
                        ),
                        /* IF_ABSENT  */ value.keyDerivationAlgorithm ===
                        undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  0,
                                  () =>
                                      _encode_KeyDerivationAlgorithmIdentifier,
                                  $.DER
                              )(value.keyDerivationAlgorithm, $.DER),
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
    return _cached_encoder_for_PasswordRecipientInfo(value, elGetter);
}


/* eslint-enable */
