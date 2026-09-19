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
import { CompressedContentInfo_contentType, _decode_CompressedContentInfo_contentType, _encode_CompressedContentInfo_contentType } from "../CompressedDataType/CompressedContentInfo-contentType.ta.mjs";
// export { CompressedContentInfo_contentType, _decode_CompressedContentInfo_contentType, _encode_CompressedContentInfo_contentType } from "../CompressedDataType/CompressedContentInfo-contentType.ta.mjs";
import { CompressedContent, _decode_CompressedContent, _encode_CompressedContent } from "../CompressedDataType/CompressedContent.ta.mjs";
// export { CompressedContent, _decode_CompressedContent, _encode_CompressedContent } from "../CompressedDataType/CompressedContent.ta.mjs";


/**
 * @summary CompressedContentInfo
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CompressedContentInfo ::= SEQUENCE {
 *     contentType CHOICE { 
 *         contentType-ShortForm  [0] IMPLICIT ContentType-ShortForm,
 *         contentType-OID        [1] IMPLICIT OBJECT IDENTIFIER
 *     },
 *     compressedContent [0] EXPLICIT CompressedContent }
 * ```
 * 
 * @class
 */
export
class CompressedContentInfo {
    constructor (
        /**
         * @summary `contentType`.
         * @public
         * @readonly
         */
        readonly contentType: CompressedContentInfo_contentType,
        /**
         * @summary `compressedContent`.
         * @public
         * @readonly
         */
        readonly compressedContent: CompressedContent
    ) {}

    /**
     * @summary Restructures an object into a CompressedContentInfo
     * @description
     * 
     * This takes an `object` and converts it to a `CompressedContentInfo`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CompressedContentInfo`.
     * @returns {CompressedContentInfo}
     */
    public static _from_object (_o: { [_K in keyof (CompressedContentInfo)]: (CompressedContentInfo)[_K] }): CompressedContentInfo {
        return new CompressedContentInfo(_o.contentType, _o.compressedContent);
    }


}

/**
 * @summary The Leading Root Component Types of CompressedContentInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_CompressedContentInfo: $.ComponentSpec[] = [
    new $.ComponentSpec("contentType", false, $.hasAnyTag),
    new $.ComponentSpec("compressedContent", false, $.hasTag(_TagClass.context, 0))
];

/**
 * @summary The Trailing Root Component Types of CompressedContentInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_CompressedContentInfo: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of CompressedContentInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_CompressedContentInfo: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_CompressedContentInfo: $.ASN1Decoder<CompressedContentInfo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CompressedContentInfo
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CompressedContentInfo (el: _Element): CompressedContentInfo {
    if (!_cached_decoder_for_CompressedContentInfo) { _cached_decoder_for_CompressedContentInfo = function (el: _Element): CompressedContentInfo {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("CompressedContentInfo contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "contentType";
    sequence[1].name = "compressedContent";
    let contentType!: CompressedContentInfo_contentType;
    let compressedContent!: CompressedContent;
    contentType = _decode_CompressedContentInfo_contentType(sequence[0]);
    compressedContent = $._decode_explicit<CompressedContent>(() => _decode_CompressedContent)(sequence[1]);
    return new CompressedContentInfo(
        contentType,
        compressedContent,

    );
}; }
    return _cached_decoder_for_CompressedContentInfo(el);
}

let _cached_encoder_for_CompressedContentInfo: $.ASN1Encoder<CompressedContentInfo> | null = null;

/**
 * @summary Encodes a(n) CompressedContentInfo into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CompressedContentInfo, encoded as an ASN.1 Element.
 */
export
function _encode_CompressedContentInfo (value: CompressedContentInfo, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CompressedContentInfo) { _cached_encoder_for_CompressedContentInfo = function (value: CompressedContentInfo, elGetter: $.ASN1Encoder<CompressedContentInfo>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_CompressedContentInfo_contentType(value.contentType, $.BER),
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 0, () => _encode_CompressedContent, $.BER)(value.compressedContent, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_CompressedContentInfo(value, elGetter);
}


/* eslint-enable */
