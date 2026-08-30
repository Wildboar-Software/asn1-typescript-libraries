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



export
enum _enum_for_GMLC_Restriction {
    gmlc_List = 0,
    home_Country = 1,
}

/**
 * @summary GMLC_Restriction
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GMLC-Restriction  ::=  ENUMERATED {
 *     gmlc-List    (0),
 *     home-Country    (1) ,
 *     ... }
 * ```
 * 
 * @enum {number}
 */
export
type GMLC_Restriction = _enum_for_GMLC_Restriction | ENUMERATED;

/**
 * @summary GMLC_Restriction_gmlc_List
 * @constant
 * @type {number}
 */
export
const GMLC_Restriction_gmlc_List: GMLC_Restriction = 0; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary gmlc_List
 * @constant
 * @type {number}
 */
export
const gmlc_List: GMLC_Restriction = GMLC_Restriction_gmlc_List; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary GMLC_Restriction_home_Country
 * @constant
 * @type {number}
 */
export
const GMLC_Restriction_home_Country: GMLC_Restriction = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary home_Country
 * @constant
 * @type {number}
 */
export
const home_Country: GMLC_Restriction = GMLC_Restriction_home_Country; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_GMLC_Restriction: $.ASN1Decoder<GMLC_Restriction> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) GMLC_Restriction
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_GMLC_Restriction (el: _Element): GMLC_Restriction {
    if (!_cached_decoder_for_GMLC_Restriction) { _cached_decoder_for_GMLC_Restriction = $._decodeEnumerated; }
    return _cached_decoder_for_GMLC_Restriction(el);
}

let _cached_encoder_for_GMLC_Restriction: $.ASN1Encoder<GMLC_Restriction> | null = null;

/**
 * @summary Encodes a(n) GMLC_Restriction into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GMLC_Restriction, encoded as an ASN.1 Element.
 */
export
function _encode_GMLC_Restriction (value: GMLC_Restriction, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_GMLC_Restriction) { _cached_encoder_for_GMLC_Restriction = $._encodeEnumerated; }
    return _cached_encoder_for_GMLC_Restriction(value, elGetter);
}


/* eslint-enable */
