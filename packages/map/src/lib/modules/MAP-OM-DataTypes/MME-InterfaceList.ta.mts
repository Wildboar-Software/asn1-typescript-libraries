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



/**
 * @summary MME_InterfaceList
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MME-InterfaceList  ::=  BIT STRING {
 *     s1-mme (0),
 *     s3 (1),
 *     s6a (2),
 *     s10 (3),
 *     s11 (4)} (SIZE (5..8))
 * ```
 */
export
type MME_InterfaceList = BIT_STRING;

/**
 * @summary MME_InterfaceList_s1_mme
 * @constant
 */
export
const MME_InterfaceList_s1_mme: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary s1_mme
 * @constant
 */
export
const s1_mme: number = MME_InterfaceList_s1_mme; /* SHORT_NAMED_BIT */

/**
 * @summary MME_InterfaceList_s3
 * @constant
 */
export
const MME_InterfaceList_s3: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary s3
 * @constant
 */
export
const s3: number = MME_InterfaceList_s3; /* SHORT_NAMED_BIT */

/**
 * @summary MME_InterfaceList_s6a
 * @constant
 */
export
const MME_InterfaceList_s6a: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary s6a
 * @constant
 */
export
const s6a: number = MME_InterfaceList_s6a; /* SHORT_NAMED_BIT */

/**
 * @summary MME_InterfaceList_s10
 * @constant
 */
export
const MME_InterfaceList_s10: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary s10
 * @constant
 */
export
const s10: number = MME_InterfaceList_s10; /* SHORT_NAMED_BIT */

/**
 * @summary MME_InterfaceList_s11
 * @constant
 */
export
const MME_InterfaceList_s11: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary s11
 * @constant
 */
export
const s11: number = MME_InterfaceList_s11; /* SHORT_NAMED_BIT */

let _cached_decoder_for_MME_InterfaceList: $.ASN1Decoder<MME_InterfaceList> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MME_InterfaceList
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MME_InterfaceList (el: _Element): MME_InterfaceList {
    if (!_cached_decoder_for_MME_InterfaceList) { _cached_decoder_for_MME_InterfaceList = $._decodeBitString; }
    return _cached_decoder_for_MME_InterfaceList(el);
}

let _cached_encoder_for_MME_InterfaceList: $.ASN1Encoder<MME_InterfaceList> | null = null;

/**
 * @summary Encodes a(n) MME_InterfaceList into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MME_InterfaceList, encoded as an ASN.1 Element.
 */
export
function _encode_MME_InterfaceList (value: MME_InterfaceList, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MME_InterfaceList) { _cached_encoder_for_MME_InterfaceList = $._encodeBitString; }
    return _cached_encoder_for_MME_InterfaceList(value, elGetter);
}


/* eslint-enable */
