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



/**
 * @summary TraceNE_TypeList
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TraceNE-TypeList  ::=  BIT STRING {
 *     msc-s (0),
 *     mgw (1),
 *     sgsn (2),
 *     ggsn (3),
 *     rnc (4),
 *     bm-sc (5) ,
 *     mme (6),
 *     sgw (7),
 *     pgw (8),
 *     eNB (9)} (SIZE (6..16))
 * ```
 */
export
type TraceNE_TypeList = BIT_STRING;

/**
 * @summary TraceNE_TypeList_msc_s
 * @constant
 */
export
const TraceNE_TypeList_msc_s: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary msc_s
 * @constant
 */
export
const msc_s: number = TraceNE_TypeList_msc_s; /* SHORT_NAMED_BIT */

/**
 * @summary TraceNE_TypeList_mgw
 * @constant
 */
export
const TraceNE_TypeList_mgw: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary mgw
 * @constant
 */
export
const mgw: number = TraceNE_TypeList_mgw; /* SHORT_NAMED_BIT */

/**
 * @summary TraceNE_TypeList_sgsn
 * @constant
 */
export
const TraceNE_TypeList_sgsn: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary sgsn
 * @constant
 */
export
const sgsn: number = TraceNE_TypeList_sgsn; /* SHORT_NAMED_BIT */

/**
 * @summary TraceNE_TypeList_ggsn
 * @constant
 */
export
const TraceNE_TypeList_ggsn: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary ggsn
 * @constant
 */
export
const ggsn: number = TraceNE_TypeList_ggsn; /* SHORT_NAMED_BIT */

/**
 * @summary TraceNE_TypeList_rnc
 * @constant
 */
export
const TraceNE_TypeList_rnc: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary rnc
 * @constant
 */
export
const rnc: number = TraceNE_TypeList_rnc; /* SHORT_NAMED_BIT */

/**
 * @summary TraceNE_TypeList_bm_sc
 * @constant
 */
export
const TraceNE_TypeList_bm_sc: number = 5; /* LONG_NAMED_BIT */

/**
 * @summary bm_sc
 * @constant
 */
export
const bm_sc: number = TraceNE_TypeList_bm_sc; /* SHORT_NAMED_BIT */

/**
 * @summary TraceNE_TypeList_mme
 * @constant
 */
export
const TraceNE_TypeList_mme: number = 6; /* LONG_NAMED_BIT */

/**
 * @summary mme
 * @constant
 */
export
const mme: number = TraceNE_TypeList_mme; /* SHORT_NAMED_BIT */

/**
 * @summary TraceNE_TypeList_sgw
 * @constant
 */
export
const TraceNE_TypeList_sgw: number = 7; /* LONG_NAMED_BIT */

/**
 * @summary sgw
 * @constant
 */
export
const sgw: number = TraceNE_TypeList_sgw; /* SHORT_NAMED_BIT */

/**
 * @summary TraceNE_TypeList_pgw
 * @constant
 */
export
const TraceNE_TypeList_pgw: number = 8; /* LONG_NAMED_BIT */

/**
 * @summary pgw
 * @constant
 */
export
const pgw: number = TraceNE_TypeList_pgw; /* SHORT_NAMED_BIT */

/**
 * @summary TraceNE_TypeList_eNB
 * @constant
 */
export
const TraceNE_TypeList_eNB: number = 9; /* LONG_NAMED_BIT */

/**
 * @summary eNB
 * @constant
 */
export
const eNB: number = TraceNE_TypeList_eNB; /* SHORT_NAMED_BIT */

let _cached_decoder_for_TraceNE_TypeList: $.ASN1Decoder<TraceNE_TypeList> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TraceNE_TypeList
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_TraceNE_TypeList (el: _Element): TraceNE_TypeList {
    if (!_cached_decoder_for_TraceNE_TypeList) { _cached_decoder_for_TraceNE_TypeList = $._decodeBitString; }
    return _cached_decoder_for_TraceNE_TypeList(el);
}

let _cached_encoder_for_TraceNE_TypeList: $.ASN1Encoder<TraceNE_TypeList> | null = null;

/**
 * @summary Encodes a(n) TraceNE_TypeList into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TraceNE_TypeList, encoded as an ASN.1 Element.
 */
export
function _encode_TraceNE_TypeList (value: TraceNE_TypeList, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_TraceNE_TypeList) { _cached_encoder_for_TraceNE_TypeList = $._encodeBitString; }
    return _cached_encoder_for_TraceNE_TypeList(value, elGetter);
}


/* eslint-enable */
