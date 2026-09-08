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
} from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";
import { ContentType, _decode_ContentType, _encode_ContentType } from "../X9-84-CMS/ContentType.ta.mjs";
// export { ContentType, _decode_ContentType, _encode_ContentType } from "../X9-84-CMS/ContentType.ta.mjs";
import { ContentEncryptAlgorithmIdentifier, _decode_ContentEncryptAlgorithmIdentifier, _encode_ContentEncryptAlgorithmIdentifier } from "../X9-84-CMS/ContentEncryptAlgorithmIdentifier.ta.mjs";
// export { ContentEncryptAlgorithmIdentifier, _decode_ContentEncryptAlgorithmIdentifier, _encode_ContentEncryptAlgorithmIdentifier } from "../X9-84-CMS/ContentEncryptAlgorithmIdentifier.ta.mjs";
import { EncryptedContent, _decode_EncryptedContent, _encode_EncryptedContent } from "../X9-84-CMS/EncryptedContent.ta.mjs";
// export { EncryptedContent, _decode_EncryptedContent, _encode_EncryptedContent } from "../X9-84-CMS/EncryptedContent.ta.mjs";


/**
 * @summary EncryptedContentInfo
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EncryptedContentInfo ::= SEQUENCE {
 *    contentType                 ContentType,
 *    contentEncryptionAlgorithm  ContentEncryptAlgorithmIdentifier,
 *    encryptedContent            [0] EncryptedContent
 * }
 * ```
 * 
 * @class
 */
export
class EncryptedContentInfo {
    constructor (
        /**
         * @summary `contentType`.
         * @public
         * @readonly
         */
        readonly contentType: ContentType,
        /**
         * @summary `contentEncryptionAlgorithm`.
         * @public
         * @readonly
         */
        readonly contentEncryptionAlgorithm: ContentEncryptAlgorithmIdentifier,
        /**
         * @summary `encryptedContent`.
         * @public
         * @readonly
         */
        readonly encryptedContent: EncryptedContent
    ) {}

    /**
     * @summary Restructures an object into a EncryptedContentInfo
     * @description
     * 
     * This takes an `object` and converts it to a `EncryptedContentInfo`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `EncryptedContentInfo`.
     * @returns {EncryptedContentInfo}
     */
    public static _from_object (_o: { [_K in keyof (EncryptedContentInfo)]: (EncryptedContentInfo)[_K] }): EncryptedContentInfo {
        return new EncryptedContentInfo(_o.contentType, _o.contentEncryptionAlgorithm, _o.encryptedContent);
    }


}

/**
 * @summary The Leading Root Component Types of EncryptedContentInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_EncryptedContentInfo: $.ComponentSpec[] = [
    new $.ComponentSpec("contentType", false, $.hasTag(_TagClass.universal, 6), undefined, undefined),
    new $.ComponentSpec("contentEncryptionAlgorithm", false, $.hasTag(_TagClass.universal, 16), undefined, undefined),
    new $.ComponentSpec("encryptedContent", false, $.hasTag(_TagClass.context, 0), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of EncryptedContentInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_EncryptedContentInfo: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of EncryptedContentInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_EncryptedContentInfo: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_EncryptedContentInfo: $.ASN1Decoder<EncryptedContentInfo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EncryptedContentInfo
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EncryptedContentInfo (el: _Element): EncryptedContentInfo {
    if (!_cached_decoder_for_EncryptedContentInfo) { _cached_decoder_for_EncryptedContentInfo = function (el: _Element): EncryptedContentInfo {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 3) {
        throw new _ConstructionError("EncryptedContentInfo contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "contentType";
    sequence[1].name = "contentEncryptionAlgorithm";
    sequence[2].name = "encryptedContent";
    let contentType!: ContentType;
    let contentEncryptionAlgorithm!: ContentEncryptAlgorithmIdentifier;
    let encryptedContent!: EncryptedContent;
    contentType = _decode_ContentType(sequence[0]);
    contentEncryptionAlgorithm = _decode_ContentEncryptAlgorithmIdentifier(sequence[1]);
    encryptedContent = $._decode_implicit<EncryptedContent>(() => _decode_EncryptedContent)(sequence[2]);
    return new EncryptedContentInfo(
        contentType,
        contentEncryptionAlgorithm,
        encryptedContent,

    );
}; }
    return _cached_decoder_for_EncryptedContentInfo(el);
}

let _cached_encoder_for_EncryptedContentInfo: $.ASN1Encoder<EncryptedContentInfo> | null = null;

/**
 * @summary Encodes a(n) EncryptedContentInfo into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EncryptedContentInfo, encoded as an ASN.1 Element.
 */
export
function _encode_EncryptedContentInfo (value: EncryptedContentInfo, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EncryptedContentInfo) { _cached_encoder_for_EncryptedContentInfo = function (value: EncryptedContentInfo, elGetter: $.ASN1Encoder<EncryptedContentInfo>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_ContentType(value.contentType, $.BER),
            /* REQUIRED   */ _encode_ContentEncryptAlgorithmIdentifier(value.contentEncryptionAlgorithm, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_EncryptedContent, $.BER)(value.encryptedContent, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_EncryptedContentInfo(value, elGetter);
}


/* eslint-enable */
