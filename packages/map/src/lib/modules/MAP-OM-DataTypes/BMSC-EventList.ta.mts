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
 * @summary BMSC_EventList
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * BMSC-EventList  ::=  BIT STRING {
 *     mbmsMulticastServiceActivation (0)} (SIZE (1..8))
 * ```
 */
export
type BMSC_EventList = BIT_STRING;

/**
 * @summary BMSC_EventList_mbmsMulticastServiceActivation
 * @constant
 */
export
const BMSC_EventList_mbmsMulticastServiceActivation: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary mbmsMulticastServiceActivation
 * @constant
 */
export
const mbmsMulticastServiceActivation: number = BMSC_EventList_mbmsMulticastServiceActivation; /* SHORT_NAMED_BIT */

let _cached_decoder_for_BMSC_EventList: $.ASN1Decoder<BMSC_EventList> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) BMSC_EventList
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_BMSC_EventList (el: _Element): BMSC_EventList {
    if (!_cached_decoder_for_BMSC_EventList) { _cached_decoder_for_BMSC_EventList = $._decodeBitString; }
    return _cached_decoder_for_BMSC_EventList(el);
}

let _cached_encoder_for_BMSC_EventList: $.ASN1Encoder<BMSC_EventList> | null = null;

/**
 * @summary Encodes a(n) BMSC_EventList into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BMSC_EventList, encoded as an ASN.1 Element.
 */
export
function _encode_BMSC_EventList (value: BMSC_EventList, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_BMSC_EventList) { _cached_encoder_for_BMSC_EventList = $._encodeBitString; }
    return _cached_encoder_for_BMSC_EventList(value, elGetter);
}


/* eslint-enable */
