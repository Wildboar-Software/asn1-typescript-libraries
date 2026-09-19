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
import { ContentInfo, _decode_ContentInfo, _encode_ContentInfo } from "../CryptographicMessageSyntax/ContentInfo.ta.mjs";
// export { ContentInfo, _decode_ContentInfo, _encode_ContentInfo } from "../CryptographicMessageSyntax/ContentInfo.ta.mjs";
import { DHNonce, _decode_DHNonce, _encode_DHNonce } from "../KerberosV5-PK-INIT-SPEC/DHNonce.ta.mjs";
// export { DHNonce, _decode_DHNonce, _encode_DHNonce } from "../KerberosV5-PK-INIT-SPEC/DHNonce.ta.mjs";
import { KDFAlgorithmId, _decode_KDFAlgorithmId, _encode_KDFAlgorithmId } from "../KerberosV5-PK-INIT-SPEC/KDFAlgorithmId.ta.mjs";
// export { KDFAlgorithmId, _decode_KDFAlgorithmId, _encode_KDFAlgorithmId } from "../KerberosV5-PK-INIT-SPEC/KDFAlgorithmId.ta.mjs";


/**
 * @summary DHRepInfo
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DHRepInfo ::= SEQUENCE {
 *     dhSignedData            [0] ContentInfo, --IMPLICIT OCTET STRING,
 *             -- Contains a CMS type ContentInfo encoded according
 *             -- to [RFC3852].
 *             -- The contentType field of the type ContentInfo is
 *             -- id-signedData (1.2.840.113549.1.7.2), and the
 *             -- content field is a SignedData.
 *             -- The eContentType field for the type SignedData is
 *             -- id-pkinit-DHKeyData (1.3.6.1.5.2.3.2), and the
 *             -- eContent field contains the DER encoding of the
 *             -- type KDCDHKeyInfo.
 *             -- KDCDHKeyInfo is defined below.
 *     serverDHNonce           [1] DHNonce OPTIONAL,
 *             -- Present if and only if dhKeyExpiration is
 *             -- present.
 *    kdf                     [2] KDFAlgorithmId OPTIONAL,
 *    -- The KDF picked by the KDC.
 *    -- (added by RFC-8636 "PKINIT Algorithm Agility")
 *    ...
 * }
 * ```
 * 
 * @class
 */
export
class DHRepInfo {
    constructor (
        /**
         * @summary `dhSignedData`.
         * @public
         * @readonly
         */
        readonly dhSignedData: ContentInfo,
        /**
         * @summary `serverDHNonce`.
         * @public
         * @readonly
         */
        readonly serverDHNonce: OPTIONAL<DHNonce>,
        /**
         * @summary `kdf`.
         * @public
         * @readonly
         */
        readonly kdf: OPTIONAL<KDFAlgorithmId>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a DHRepInfo
     * @description
     * 
     * This takes an `object` and converts it to a `DHRepInfo`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `DHRepInfo`.
     * @returns {DHRepInfo}
     */
    public static _from_object (_o: { [_K in keyof (DHRepInfo)]: (DHRepInfo)[_K] }): DHRepInfo {
        return new DHRepInfo(_o.dhSignedData, _o.serverDHNonce, _o.kdf, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of DHRepInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_DHRepInfo: $.ComponentSpec[] = [
    new $.ComponentSpec("dhSignedData", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("serverDHNonce", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("kdf", true, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of DHRepInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_DHRepInfo: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of DHRepInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_DHRepInfo: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_DHRepInfo: $.ASN1Decoder<DHRepInfo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DHRepInfo
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DHRepInfo (el: _Element): DHRepInfo {
    if (!_cached_decoder_for_DHRepInfo) { _cached_decoder_for_DHRepInfo = function (el: _Element): DHRepInfo {
    let dhSignedData!: ContentInfo;
    let serverDHNonce: OPTIONAL<DHNonce>;
    let kdf: OPTIONAL<KDFAlgorithmId>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "dhSignedData": (_el: _Element): void => { dhSignedData = $._decode_explicit<ContentInfo>(() => _decode_ContentInfo)(_el); },
        "serverDHNonce": (_el: _Element): void => { serverDHNonce = $._decode_explicit<DHNonce>(() => _decode_DHNonce)(_el); },
        "kdf": (_el: _Element): void => { kdf = $._decode_explicit<KDFAlgorithmId>(() => _decode_KDFAlgorithmId)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_DHRepInfo,
        _extension_additions_list_spec_for_DHRepInfo,
        _root_component_type_list_2_spec_for_DHRepInfo,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new DHRepInfo(
        dhSignedData,
        serverDHNonce,
        kdf,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_DHRepInfo(el);
}

let _cached_encoder_for_DHRepInfo: $.ASN1Encoder<DHRepInfo> | null = null;

/**
 * @summary Encodes a(n) DHRepInfo into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DHRepInfo, encoded as an ASN.1 Element.
 */
export
function _encode_DHRepInfo (value: DHRepInfo, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DHRepInfo) { _cached_encoder_for_DHRepInfo = function (value: DHRepInfo, elGetter: $.ASN1Encoder<DHRepInfo>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 0, () => _encode_ContentInfo, $.BER)(value.dhSignedData, $.BER),
            /* IF_ABSENT  */ ((value.serverDHNonce === undefined) ? undefined : $._encode_explicit(_TagClass.context, 1, () => _encode_DHNonce, $.BER)(value.serverDHNonce, $.BER)),
            /* IF_ABSENT  */ ((value.kdf === undefined) ? undefined : $._encode_explicit(_TagClass.context, 2, () => _encode_KDFAlgorithmId, $.BER)(value.kdf, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_DHRepInfo(value, elGetter);
}


/* eslint-enable */
