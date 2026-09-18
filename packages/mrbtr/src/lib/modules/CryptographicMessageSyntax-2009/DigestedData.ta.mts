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
import { DigestAlgorithmIdentifier, _decode_DigestAlgorithmIdentifier, _encode_DigestAlgorithmIdentifier } from "../CryptographicMessageSyntax-2009/DigestAlgorithmIdentifier.ta.mjs";
// export { DigestAlgorithmIdentifier, _decode_DigestAlgorithmIdentifier, _encode_DigestAlgorithmIdentifier } from "../CryptographicMessageSyntax-2009/DigestAlgorithmIdentifier.ta.mjs";
import { EncapsulatedContentInfo, _decode_EncapsulatedContentInfo, _encode_EncapsulatedContentInfo } from "../CryptographicMessageSyntax-2009/EncapsulatedContentInfo.ta.mjs";
// export { EncapsulatedContentInfo, _decode_EncapsulatedContentInfo, _encode_EncapsulatedContentInfo } from "../CryptographicMessageSyntax-2009/EncapsulatedContentInfo.ta.mjs";
import { Digest, _decode_Digest, _encode_Digest } from "../CryptographicMessageSyntax-2009/Digest.ta.mjs";
// export { Digest, _decode_Digest, _encode_Digest } from "../CryptographicMessageSyntax-2009/Digest.ta.mjs";


/**
 * @summary DigestedData
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DigestedData ::= SEQUENCE {
 *     version CMSVersion,
 *     digestAlgorithm DigestAlgorithmIdentifier,
 *     encapContentInfo EncapsulatedContentInfo,
 *     digest Digest, ... }
 * ```
 * 
 * @class
 */
export
class DigestedData {
    constructor (
        /**
         * @summary `version`.
         * @public
         * @readonly
         */
        readonly version: CMSVersion,
        /**
         * @summary `digestAlgorithm`.
         * @public
         * @readonly
         */
        readonly digestAlgorithm: DigestAlgorithmIdentifier,
        /**
         * @summary `encapContentInfo`.
         * @public
         * @readonly
         */
        readonly encapContentInfo: EncapsulatedContentInfo,
        /**
         * @summary `digest`.
         * @public
         * @readonly
         */
        readonly digest: Digest,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a DigestedData
     * @description
     * 
     * This takes an `object` and converts it to a `DigestedData`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `DigestedData`.
     * @returns {DigestedData}
     */
    public static _from_object (_o: { [_K in keyof (DigestedData)]: (DigestedData)[_K] }): DigestedData {
        return new DigestedData(_o.version, _o.digestAlgorithm, _o.encapContentInfo, _o.digest, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of DigestedData
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_DigestedData: $.ComponentSpec[] = [
    new $.ComponentSpec("version", false, $.hasTag(_TagClass.universal, 2)),
    /* FIXME: digestAlgorithm COULD_NOT_RESOLVE_TYPE_DEF */,
    new $.ComponentSpec("encapContentInfo", false, $.hasTag(_TagClass.universal, 16)),
    new $.ComponentSpec("digest", false, $.hasTag(_TagClass.universal, 4))
];

/**
 * @summary The Trailing Root Component Types of DigestedData
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_DigestedData: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of DigestedData
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_DigestedData: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_DigestedData: $.ASN1Decoder<DigestedData> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DigestedData
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DigestedData (el: _Element): DigestedData {
    if (!_cached_decoder_for_DigestedData) { _cached_decoder_for_DigestedData = function (el: _Element): DigestedData {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 4) {
        throw new _ConstructionError("DigestedData contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "version";
    sequence[1].name = "digestAlgorithm";
    sequence[2].name = "encapContentInfo";
    sequence[3].name = "digest";
    let version!: CMSVersion;
    let digestAlgorithm!: DigestAlgorithmIdentifier;
    let encapContentInfo!: EncapsulatedContentInfo;
    let digest!: Digest;
    version = _decode_CMSVersion(sequence[0]);
    digestAlgorithm = _decode_DigestAlgorithmIdentifier(sequence[1]);
    encapContentInfo = _decode_EncapsulatedContentInfo(sequence[2]);
    digest = _decode_Digest(sequence[3]);
    return new DigestedData(
        version,
        digestAlgorithm,
        encapContentInfo,
        digest,
        sequence.slice(4),
    );
}; }
    return _cached_decoder_for_DigestedData(el);
}

let _cached_encoder_for_DigestedData: $.ASN1Encoder<DigestedData> | null = null;

/**
 * @summary Encodes a(n) DigestedData into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DigestedData, encoded as an ASN.1 Element.
 */
export
function _encode_DigestedData (value: DigestedData, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DigestedData) { _cached_encoder_for_DigestedData = function (value: DigestedData, elGetter: $.ASN1Encoder<DigestedData>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_CMSVersion(value.version, $.BER),
            /* REQUIRED   */ _encode_DigestAlgorithmIdentifier(value.digestAlgorithm, $.BER),
            /* REQUIRED   */ _encode_EncapsulatedContentInfo(value.encapContentInfo, $.BER),
            /* REQUIRED   */ _encode_Digest(value.digest, $.BER)
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_DigestedData(value, elGetter);
}


/* eslint-enable */
