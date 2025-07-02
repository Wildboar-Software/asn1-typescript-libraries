/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OPTIONAL,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    KeyConstructionAlgorithmIdentifier,
    _decode_KeyConstructionAlgorithmIdentifier,
    _encode_KeyConstructionAlgorithmIdentifier,
} from "../CMSCKMKeyManagement/KeyConstructionAlgorithmIdentifier.ta.mjs";
import {
    KeyConstructionDomain,
    _decode_KeyConstructionDomain,
    _encode_KeyConstructionDomain,
} from "../CMSCKMKeyManagement/KeyConstructionDomain.ta.mjs";
import {
    KeyConstructionRecipient,
    _decode_KeyConstructionRecipient,
    _encode_KeyConstructionRecipient,
} from "../CMSCKMKeyManagement/KeyConstructionRecipient.ta.mjs";
import {
    Version,
    _decode_Version,
    _encode_Version,
} from "../CMSCKMKeyManagement/Version.ta.mjs";
import {
    EncryptedKey,
    _decode_EncryptedKey,
    _encode_EncryptedKey,
} from "../CryptographicMessageSyntax-2010/EncryptedKey.ta.mjs";
import {
    UserKeyingMaterial,
    _decode_UserKeyingMaterial,
    _encode_UserKeyingMaterial,
} from "../CryptographicMessageSyntax-2010/UserKeyingMaterial.ta.mjs";

/**
 * @summary KeyConstructRecipientInfo
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * KeyConstructRecipientInfo ::= SEQUENCE {
 * version             Version,
 * did                    KeyConstructionDomain OPTIONAL,
 * ckmid                [0] KeyConstructionRecipient,
 * ukm                    UserKeyingMaterial OPTIONAL,
 * keyConstructionAlgorithm KeyConstructionAlgorithmIdentifier,
 * encryptedRandom         EncryptedKey
 * }
 * ```
 *
 */
export class KeyConstructRecipientInfo {
    constructor(
        /**
         * @summary `version`.
         * @public
         * @readonly
         */
        readonly version: Version,
        /**
         * @summary `did`.
         * @public
         * @readonly
         */
        readonly did: OPTIONAL<KeyConstructionDomain>,
        /**
         * @summary `ckmid`.
         * @public
         * @readonly
         */
        readonly ckmid: KeyConstructionRecipient,
        /**
         * @summary `ukm`.
         * @public
         * @readonly
         */
        readonly ukm: OPTIONAL<UserKeyingMaterial>,
        /**
         * @summary `keyConstructionAlgorithm`.
         * @public
         * @readonly
         */
        readonly keyConstructionAlgorithm: KeyConstructionAlgorithmIdentifier,
        /**
         * @summary `encryptedRandom`.
         * @public
         * @readonly
         */
        readonly encryptedRandom: EncryptedKey
    ) {}

    /**
     * @summary Restructures an object into a KeyConstructRecipientInfo
     * @description
     *
     * This takes an `object` and converts it to a `KeyConstructRecipientInfo`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `KeyConstructRecipientInfo`.
     * @returns {KeyConstructRecipientInfo}
     */
    public static _from_object(
        _o: {
            [_K in keyof KeyConstructRecipientInfo]: KeyConstructRecipientInfo[_K];
        }
    ): KeyConstructRecipientInfo {
        return new KeyConstructRecipientInfo(
            _o.version,
            _o.did,
            _o.ckmid,
            _o.ukm,
            _o.keyConstructionAlgorithm,
            _o.encryptedRandom
        );
    }
}


/**
 * @summary The Leading Root Component Types of KeyConstructRecipientInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_KeyConstructRecipientInfo: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "version",
        false,
        $.hasTag(_TagClass.universal, 2)
    ),
    new $.ComponentSpec(
        "did",
        true,
        $.hasTag(_TagClass.universal, 16)
    ),
    new $.ComponentSpec(
        "ckmid",
        false,
        $.hasTag(_TagClass.context, 0)
    ),
    new $.ComponentSpec(
        "ukm",
        true,
        $.hasTag(_TagClass.universal, 4)
    ),
    new $.ComponentSpec(
        "keyConstructionAlgorithm",
        false,
        $.hasTag(_TagClass.universal, 16)
    ),
    new $.ComponentSpec(
        "encryptedRandom",
        false,
        $.hasTag(_TagClass.universal, 4)
    ),
];


/**
 * @summary The Trailing Root Component Types of KeyConstructRecipientInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_KeyConstructRecipientInfo: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of KeyConstructRecipientInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_KeyConstructRecipientInfo: $.ComponentSpec[] = [];


let _cached_decoder_for_KeyConstructRecipientInfo: $.ASN1Decoder<KeyConstructRecipientInfo> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) KeyConstructRecipientInfo
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {KeyConstructRecipientInfo} The decoded data structure.
 */
export function _decode_KeyConstructRecipientInfo(el: _Element): KeyConstructRecipientInfo {
    if (!_cached_decoder_for_KeyConstructRecipientInfo) {
        _cached_decoder_for_KeyConstructRecipientInfo = function (
            el: _Element
        ): KeyConstructRecipientInfo {
            let version!: Version;
            let did: OPTIONAL<KeyConstructionDomain>;
            let ckmid!: KeyConstructionRecipient;
            let ukm: OPTIONAL<UserKeyingMaterial>;
            let keyConstructionAlgorithm!: KeyConstructionAlgorithmIdentifier;
            let encryptedRandom!: EncryptedKey;
            const callbacks: $.DecodingMap = {
                version: (_el: _Element): void => {
                    version = _decode_Version(_el);
                },
                did: (_el: _Element): void => {
                    did = _decode_KeyConstructionDomain(_el);
                },
                ckmid: (_el: _Element): void => {
                    ckmid = $._decode_explicit<KeyConstructionRecipient>(
                        () => _decode_KeyConstructionRecipient
                    )(_el);
                },
                ukm: (_el: _Element): void => {
                    ukm = _decode_UserKeyingMaterial(_el);
                },
                keyConstructionAlgorithm: (_el: _Element): void => {
                    keyConstructionAlgorithm = _decode_KeyConstructionAlgorithmIdentifier(
                        _el
                    );
                },
                encryptedRandom: (_el: _Element): void => {
                    encryptedRandom = _decode_EncryptedKey(_el);
                },
            };
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_KeyConstructRecipientInfo,
                _extension_additions_list_spec_for_KeyConstructRecipientInfo,
                _root_component_type_list_2_spec_for_KeyConstructRecipientInfo,
                undefined
            );
            return new KeyConstructRecipientInfo (
                version,
                did,
                ckmid,
                ukm,
                keyConstructionAlgorithm,
                encryptedRandom
            );
        };
    }
    return _cached_decoder_for_KeyConstructRecipientInfo(el);
}


let _cached_encoder_for_KeyConstructRecipientInfo: $.ASN1Encoder<KeyConstructRecipientInfo> | null = null;


/**
 * @summary Encodes a(n) KeyConstructRecipientInfo into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The KeyConstructRecipientInfo, encoded as an ASN.1 Element.
 */
export function _encode_KeyConstructRecipientInfo(
    value: KeyConstructRecipientInfo,
    elGetter: $.ASN1Encoder<KeyConstructRecipientInfo>
): _Element {
    if (!_cached_encoder_for_KeyConstructRecipientInfo) {
        _cached_encoder_for_KeyConstructRecipientInfo = function (
            value: KeyConstructRecipientInfo        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_Version(value.version, $.DER),
                        /* IF_ABSENT  */ value.did === undefined
                            ? undefined
                            : _encode_KeyConstructionDomain(value.did, $.DER),
                        /* REQUIRED   */ $._encode_explicit(
                            _TagClass.context,
                            0,
                            () => _encode_KeyConstructionRecipient,
                            $.DER
                        )(value.ckmid, $.DER),
                        /* IF_ABSENT  */ value.ukm === undefined
                            ? undefined
                            : _encode_UserKeyingMaterial(value.ukm, $.DER),
                        /* REQUIRED   */ _encode_KeyConstructionAlgorithmIdentifier(
                            value.keyConstructionAlgorithm,
                            $.DER
                        ),
                        /* REQUIRED   */ _encode_EncryptedKey(
                            value.encryptedRandom,
                            $.DER
                        ),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.DER
            );
        };
    }
    return _cached_encoder_for_KeyConstructRecipientInfo(value, elGetter);
}


/* eslint-enable */
