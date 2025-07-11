/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OCTET_STRING,
    OPTIONAL,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    KeyEncryptionAlgorithmIdentifier,
    _decode_KeyEncryptionAlgorithmIdentifier,
    _encode_KeyEncryptionAlgorithmIdentifier,
} from "../PKCS7/KeyEncryptionAlgorithmIdentifier.ta.mjs";
import {
    OriginatorIdentifierOrKey,
    _decode_OriginatorIdentifierOrKey,
    _encode_OriginatorIdentifierOrKey,
} from "../PKCS7/OriginatorIdentifierOrKey.ta.mjs";
import {
    RecipientEncryptedKeys,
    _decode_RecipientEncryptedKeys,
    _encode_RecipientEncryptedKeys,
} from "../PKCS7/RecipientEncryptedKeys.ta.mjs";
import { Version, _decode_Version, _encode_Version } from "../PKCS7/Version.ta.mjs";

/**
 * @summary KeyAgreementRecipientInfo
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * KeyAgreementRecipientInfo ::= SEQUENCE {
 *     version                 Version,
 *     originator              [0]  OriginatorIdentifierOrKey,
 *     userKeyingMaterial      [1] EXPLICIT OCTET STRING OPTIONAL,
 *     keyEncryptionAlgorithm  KeyEncryptionAlgorithmIdentifier,
 *     recipientEncryptedKeys  RecipientEncryptedKeys
 * }
 * ```
 *
 */
export class KeyAgreementRecipientInfo {
    constructor(
        /**
         * @summary `version`.
         * @public
         * @readonly
         */
        readonly version: Version,
        /**
         * @summary `originator`.
         * @public
         * @readonly
         */
        readonly originator: OriginatorIdentifierOrKey,
        /**
         * @summary `userKeyingMaterial`.
         * @public
         * @readonly
         */
        readonly userKeyingMaterial: OPTIONAL<OCTET_STRING>,
        /**
         * @summary `keyEncryptionAlgorithm`.
         * @public
         * @readonly
         */
        readonly keyEncryptionAlgorithm: KeyEncryptionAlgorithmIdentifier,
        /**
         * @summary `recipientEncryptedKeys`.
         * @public
         * @readonly
         */
        readonly recipientEncryptedKeys: RecipientEncryptedKeys
    ) {}

    /**
     * @summary Restructures an object into a KeyAgreementRecipientInfo
     * @description
     *
     * This takes an `object` and converts it to a `KeyAgreementRecipientInfo`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `KeyAgreementRecipientInfo`.
     * @returns {KeyAgreementRecipientInfo}
     */
    public static _from_object(
        _o: {
            [_K in keyof KeyAgreementRecipientInfo]: KeyAgreementRecipientInfo[_K];
        }
    ): KeyAgreementRecipientInfo {
        return new KeyAgreementRecipientInfo(
            _o.version,
            _o.originator,
            _o.userKeyingMaterial,
            _o.keyEncryptionAlgorithm,
            _o.recipientEncryptedKeys
        );
    }
}


/**
 * @summary The Leading Root Component Types of KeyAgreementRecipientInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_KeyAgreementRecipientInfo: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "version",
        false,
        $.hasTag(_TagClass.universal, 2)
    ),
    new $.ComponentSpec(
        "originator",
        false,
        $.hasTag(_TagClass.context, 0)
    ),
    new $.ComponentSpec(
        "userKeyingMaterial",
        true,
        $.hasTag(_TagClass.context, 1)
    ),
    new $.ComponentSpec(
        "keyEncryptionAlgorithm",
        false,
        $.hasTag(_TagClass.universal, 16)
    ),
    new $.ComponentSpec(
        "recipientEncryptedKeys",
        false,
        $.hasTag(_TagClass.universal, 16)
    ),
];


/**
 * @summary The Trailing Root Component Types of KeyAgreementRecipientInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_KeyAgreementRecipientInfo: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of KeyAgreementRecipientInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_KeyAgreementRecipientInfo: $.ComponentSpec[] = [];


let _cached_decoder_for_KeyAgreementRecipientInfo: $.ASN1Decoder<KeyAgreementRecipientInfo> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) KeyAgreementRecipientInfo
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {KeyAgreementRecipientInfo} The decoded data structure.
 */
export function _decode_KeyAgreementRecipientInfo(el: _Element): KeyAgreementRecipientInfo {
    if (!_cached_decoder_for_KeyAgreementRecipientInfo) {
        _cached_decoder_for_KeyAgreementRecipientInfo = function (
            el: _Element
        ): KeyAgreementRecipientInfo {
            let version!: Version;
            let originator!: OriginatorIdentifierOrKey;
            let userKeyingMaterial: OPTIONAL<OCTET_STRING>;
            let keyEncryptionAlgorithm!: KeyEncryptionAlgorithmIdentifier;
            let recipientEncryptedKeys!: RecipientEncryptedKeys;
            const callbacks: $.DecodingMap = {
                version: (_el: _Element): void => {
                    version = _decode_Version(_el);
                },
                originator: (_el: _Element): void => {
                    originator = $._decode_explicit<OriginatorIdentifierOrKey>(
                        () => _decode_OriginatorIdentifierOrKey
                    )(_el);
                },
                userKeyingMaterial: (_el: _Element): void => {
                    userKeyingMaterial = $._decode_explicit<OCTET_STRING>(
                        () => $._decodeOctetString
                    )(_el);
                },
                keyEncryptionAlgorithm: (_el: _Element): void => {
                    keyEncryptionAlgorithm = _decode_KeyEncryptionAlgorithmIdentifier(
                        _el
                    );
                },
                recipientEncryptedKeys: (_el: _Element): void => {
                    recipientEncryptedKeys = _decode_RecipientEncryptedKeys(
                        _el
                    );
                },
            };
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_KeyAgreementRecipientInfo,
                _extension_additions_list_spec_for_KeyAgreementRecipientInfo,
                _root_component_type_list_2_spec_for_KeyAgreementRecipientInfo,
                undefined
            );
            return new KeyAgreementRecipientInfo(
                version,
                originator,
                userKeyingMaterial,
                keyEncryptionAlgorithm,
                recipientEncryptedKeys
            );
        };
    }
    return _cached_decoder_for_KeyAgreementRecipientInfo(el);
}


let _cached_encoder_for_KeyAgreementRecipientInfo: $.ASN1Encoder<KeyAgreementRecipientInfo> | null = null;


/**
 * @summary Encodes a(n) KeyAgreementRecipientInfo into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The KeyAgreementRecipientInfo, encoded as an ASN.1 Element.
 */
export function _encode_KeyAgreementRecipientInfo(
    value: KeyAgreementRecipientInfo,
    elGetter: $.ASN1Encoder<KeyAgreementRecipientInfo>
): _Element {
    if (!_cached_encoder_for_KeyAgreementRecipientInfo) {
        _cached_encoder_for_KeyAgreementRecipientInfo = function (
            value: KeyAgreementRecipientInfo        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_Version(value.version, $.BER),
                        /* REQUIRED   */ $._encode_explicit(
                            _TagClass.context,
                            0,
                            () => _encode_OriginatorIdentifierOrKey,
                            $.BER
                        )(value.originator, $.BER),
                        /* IF_ABSENT  */ value.userKeyingMaterial === undefined
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  1,
                                  () => $._encodeOctetString,
                                  $.BER
                              )(value.userKeyingMaterial, $.BER),
                        /* REQUIRED   */ _encode_KeyEncryptionAlgorithmIdentifier(
                            value.keyEncryptionAlgorithm,
                            $.BER
                        ),
                        /* REQUIRED   */ _encode_RecipientEncryptedKeys(
                            value.recipientEncryptedKeys,
                            $.BER
                        ),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_KeyAgreementRecipientInfo(value, elGetter);
}


/* eslint-enable */
