/* eslint-disable */
import {
    itu_t,
    itu_r,
    ccitt,
    iso,
    joint_iso_itu_t,
    joint_iso_ccitt,
    OPTIONAL,
    BOOLEAN,
    INTEGER,
    BIT_STRING,
    OCTET_STRING,
    NULL,
    OBJECT_IDENTIFIER,
    ObjectDescriptor,
    EXTERNAL,
    REAL,
    INSTANCE_OF,
    ENUMERATED,
    EMBEDDED_PDV,
    UTF8String,
    RELATIVE_OID,
    SEQUENCE,
    SEQUENCE_OF,
    SET,
    SET_OF,
    GraphicString,
    NumericString,
    VisibleString,
    PrintableString,
    ISO646String,
    TeletexString,
    GeneralString,
    T61String,
    UniversalString,
    VideotexString,
    BMPString,
    IA5String,
    CharacterString,
    UTCTime,
    GeneralizedTime,
    TIME,
    DATE,
    TIME_OF_DAY,
    DATE_TIME,
    DURATION,
    OID_IRI,
    RELATIVE_OID_IRI,
    TRUE,
    FALSE,
    TRUE_BIT,
    FALSE_BIT,
    PLUS_INFINITY,
    MINUS_INFINITY,
    NOT_A_NUMBER,
    TYPE_IDENTIFIER,
    ABSTRACT_SYNTAX,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { CMSVersion, CMSVersion_v0 /* IMPORTED_LONG_NAMED_INTEGER */, v0 /* IMPORTED_SHORT_NAMED_INTEGER */, CMSVersion_v1 /* IMPORTED_LONG_NAMED_INTEGER */, v1 /* IMPORTED_SHORT_NAMED_INTEGER */, CMSVersion_v2 /* IMPORTED_LONG_NAMED_INTEGER */, v2 /* IMPORTED_SHORT_NAMED_INTEGER */, CMSVersion_v3 /* IMPORTED_LONG_NAMED_INTEGER */, v3 /* IMPORTED_SHORT_NAMED_INTEGER */, CMSVersion_v4 /* IMPORTED_LONG_NAMED_INTEGER */, v4 /* IMPORTED_SHORT_NAMED_INTEGER */, CMSVersion_v5 /* IMPORTED_LONG_NAMED_INTEGER */, v5 /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_CMSVersion, _encode_CMSVersion } from "../CryptographicMessageSyntax-2009/CMSVersion.ta.mjs";
// export { CMSVersion, CMSVersion_v0 /* IMPORTED_LONG_NAMED_INTEGER */, v0 /* IMPORTED_SHORT_NAMED_INTEGER */, CMSVersion_v1 /* IMPORTED_LONG_NAMED_INTEGER */, v1 /* IMPORTED_SHORT_NAMED_INTEGER */, CMSVersion_v2 /* IMPORTED_LONG_NAMED_INTEGER */, v2 /* IMPORTED_SHORT_NAMED_INTEGER */, CMSVersion_v3 /* IMPORTED_LONG_NAMED_INTEGER */, v3 /* IMPORTED_SHORT_NAMED_INTEGER */, CMSVersion_v4 /* IMPORTED_LONG_NAMED_INTEGER */, v4 /* IMPORTED_SHORT_NAMED_INTEGER */, CMSVersion_v5 /* IMPORTED_LONG_NAMED_INTEGER */, v5 /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_CMSVersion, _encode_CMSVersion } from "../CryptographicMessageSyntax-2009/CMSVersion.ta.mjs";
import { OriginatorIdentifierOrKey, _decode_OriginatorIdentifierOrKey, _encode_OriginatorIdentifierOrKey } from "../CryptographicMessageSyntax-2009/OriginatorIdentifierOrKey.ta.mjs";
// export { OriginatorIdentifierOrKey, _decode_OriginatorIdentifierOrKey, _encode_OriginatorIdentifierOrKey } from "../CryptographicMessageSyntax-2009/OriginatorIdentifierOrKey.ta.mjs";
import { UserKeyingMaterial, _decode_UserKeyingMaterial, _encode_UserKeyingMaterial } from "../CryptographicMessageSyntax-2009/UserKeyingMaterial.ta.mjs";
// export { UserKeyingMaterial, _decode_UserKeyingMaterial, _encode_UserKeyingMaterial } from "../CryptographicMessageSyntax-2009/UserKeyingMaterial.ta.mjs";
import { RecipientEncryptedKeys, _decode_RecipientEncryptedKeys, _encode_RecipientEncryptedKeys } from "../CryptographicMessageSyntax-2009/RecipientEncryptedKeys.ta.mjs";
// export { RecipientEncryptedKeys, _decode_RecipientEncryptedKeys, _encode_RecipientEncryptedKeys } from "../CryptographicMessageSyntax-2009/RecipientEncryptedKeys.ta.mjs";


/**
 * @summary KeyAgreeRecipientInfo
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * KeyAgreeRecipientInfo ::= SEQUENCE {
 *     version CMSVersion,  -- always set to 3
 *     originator [0] EXPLICIT OriginatorIdentifierOrKey,
 *     ukm [1] EXPLICIT UserKeyingMaterial OPTIONAL,
 *     keyEncryptionAlgorithm AlgorithmIdentifier
 *         {KEY-AGREE, {KeyAgreementAlgorithmSet}},
 *     recipientEncryptedKeys RecipientEncryptedKeys }
 * ```
 * 
 * @class
 */
export
class KeyAgreeRecipientInfo {
    constructor (
        /**
         * @summary `version`.
         * @public
         * @readonly
         */
        readonly version: CMSVersion,
        /**
         * @summary `originator`.
         * @public
         * @readonly
         */
        readonly originator: OriginatorIdentifierOrKey,
        /**
         * @summary `ukm`.
         * @public
         * @readonly
         */
        readonly ukm: OPTIONAL<UserKeyingMaterial>,
        /**
         * @summary `keyEncryptionAlgorithm`.
         * @public
         * @readonly
         */
        readonly keyEncryptionAlgorithm: AlgorithmIdentifier,
        /**
         * @summary `recipientEncryptedKeys`.
         * @public
         * @readonly
         */
        readonly recipientEncryptedKeys: RecipientEncryptedKeys
    ) {}

    /**
     * @summary Restructures an object into a KeyAgreeRecipientInfo
     * @description
     * 
     * This takes an `object` and converts it to a `KeyAgreeRecipientInfo`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `KeyAgreeRecipientInfo`.
     * @returns {KeyAgreeRecipientInfo}
     */
    public static _from_object (_o: { [_K in keyof (KeyAgreeRecipientInfo)]: (KeyAgreeRecipientInfo)[_K] }): KeyAgreeRecipientInfo {
        return new KeyAgreeRecipientInfo(_o.version, _o.originator, _o.ukm, _o.keyEncryptionAlgorithm, _o.recipientEncryptedKeys);
    }


}

/**
 * @summary The Leading Root Component Types of KeyAgreeRecipientInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_KeyAgreeRecipientInfo: $.ComponentSpec[] = [
    new $.ComponentSpec("version", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("originator", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("ukm", true, $.hasTag(_TagClass.context, 1)),
    /* FIXME: keyEncryptionAlgorithm COULD_NOT_RESOLVE_TYPE_DEF */,
    new $.ComponentSpec("recipientEncryptedKeys", false, $.hasTag(_TagClass.universal, 16))
];

/**
 * @summary The Trailing Root Component Types of KeyAgreeRecipientInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_KeyAgreeRecipientInfo: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of KeyAgreeRecipientInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_KeyAgreeRecipientInfo: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_KeyAgreeRecipientInfo: $.ASN1Decoder<KeyAgreeRecipientInfo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) KeyAgreeRecipientInfo
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_KeyAgreeRecipientInfo (el: _Element): KeyAgreeRecipientInfo {
    if (!_cached_decoder_for_KeyAgreeRecipientInfo) { _cached_decoder_for_KeyAgreeRecipientInfo = function (el: _Element): KeyAgreeRecipientInfo {
    let version!: CMSVersion;
    let originator!: OriginatorIdentifierOrKey;
    let ukm: OPTIONAL<UserKeyingMaterial>;
    let keyEncryptionAlgorithm!: AlgorithmIdentifier;
    let recipientEncryptedKeys!: RecipientEncryptedKeys;
    const callbacks: $.DecodingMap = {
        "version": (_el: _Element): void => { version = _decode_CMSVersion(_el); },
        "originator": (_el: _Element): void => { originator = $._decode_explicit<OriginatorIdentifierOrKey>(() => _decode_OriginatorIdentifierOrKey)(_el); },
        "ukm": (_el: _Element): void => { ukm = $._decode_explicit<UserKeyingMaterial>(() => _decode_UserKeyingMaterial)(_el); },
        "keyEncryptionAlgorithm": (_el: _Element): void => { keyEncryptionAlgorithm = _decode_AlgorithmIdentifier(_el); },
        "recipientEncryptedKeys": (_el: _Element): void => { recipientEncryptedKeys = _decode_RecipientEncryptedKeys(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_KeyAgreeRecipientInfo,
        _extension_additions_list_spec_for_KeyAgreeRecipientInfo,
        _root_component_type_list_2_spec_for_KeyAgreeRecipientInfo,
        undefined,
    );
    return new KeyAgreeRecipientInfo(
        version,
        originator,
        ukm,
        keyEncryptionAlgorithm,
        recipientEncryptedKeys
    );
}; }
    return _cached_decoder_for_KeyAgreeRecipientInfo(el);
}

let _cached_encoder_for_KeyAgreeRecipientInfo: $.ASN1Encoder<KeyAgreeRecipientInfo> | null = null;

/**
 * @summary Encodes a(n) KeyAgreeRecipientInfo into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The KeyAgreeRecipientInfo, encoded as an ASN.1 Element.
 */
export
function _encode_KeyAgreeRecipientInfo (value: KeyAgreeRecipientInfo, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_KeyAgreeRecipientInfo) { _cached_encoder_for_KeyAgreeRecipientInfo = function (value: KeyAgreeRecipientInfo, elGetter: $.ASN1Encoder<KeyAgreeRecipientInfo>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_CMSVersion(value.version, $.BER),
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 0, () => _encode_OriginatorIdentifierOrKey, $.BER)(value.originator, $.BER),
            /* IF_ABSENT  */ ((value.ukm === undefined) ? undefined : $._encode_explicit(_TagClass.context, 1, () => _encode_UserKeyingMaterial, $.BER)(value.ukm, $.BER)),
            /* REQUIRED   */ _encode_AlgorithmIdentifier(value.keyEncryptionAlgorithm, $.BER),
            /* REQUIRED   */ _encode_RecipientEncryptedKeys(value.recipientEncryptedKeys, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_KeyAgreeRecipientInfo(value, elGetter);
}


/* eslint-enable */
