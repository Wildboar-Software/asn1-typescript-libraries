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
 * @summary GGSN_EventList
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GGSN-EventList  ::=  BIT STRING {
 *     pdpContext (0),
 *     mbmsContext (1)} (SIZE (2..8))
 * ```
 */
export
type GGSN_EventList = BIT_STRING;

/**
 * @summary GGSN_EventList_pdpContext
 * @constant
 */
export
const GGSN_EventList_pdpContext: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary pdpContext
 * @constant
 */
export
const pdpContext: number = GGSN_EventList_pdpContext; /* SHORT_NAMED_BIT */

/**
 * @summary GGSN_EventList_mbmsContext
 * @constant
 */
export
const GGSN_EventList_mbmsContext: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary mbmsContext
 * @constant
 */
export
const mbmsContext: number = GGSN_EventList_mbmsContext; /* SHORT_NAMED_BIT */

let _cached_decoder_for_GGSN_EventList: $.ASN1Decoder<GGSN_EventList> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) GGSN_EventList
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_GGSN_EventList (el: _Element): GGSN_EventList {
    if (!_cached_decoder_for_GGSN_EventList) { _cached_decoder_for_GGSN_EventList = $._decodeBitString; }
    return _cached_decoder_for_GGSN_EventList(el);
}

let _cached_encoder_for_GGSN_EventList: $.ASN1Encoder<GGSN_EventList> | null = null;

/**
 * @summary Encodes a(n) GGSN_EventList into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GGSN_EventList, encoded as an ASN.1 Element.
 */
export
function _encode_GGSN_EventList (value: GGSN_EventList, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_GGSN_EventList) { _cached_encoder_for_GGSN_EventList = $._encodeBitString; }
    return _cached_encoder_for_GGSN_EventList(value, elGetter);
}


/* eslint-enable */
