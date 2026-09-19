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
 * @summary Community
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Community  ::=  ENUMERATED { genser(0), si(1), both(2) }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_Community {
    genser = 0,
    si = 1,
    both = 2,
}

/**
 * @summary Community
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Community  ::=  ENUMERATED { genser(0), si(1), both(2) }
 * ```
 * 
 * @enum {number}
 */
export
type Community = _enum_for_Community;

/**
 * @summary Community
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Community  ::=  ENUMERATED { genser(0), si(1), both(2) }
 * ```
 * 
 * @enum {number}
 */
export
const Community = _enum_for_Community;

/**
 * @summary Community_genser
 * @constant
 * @type {number}
 */
export
const Community_genser: Community = Community.genser; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary genser
 * @constant
 * @type {number}
 */
export
const genser: Community = Community.genser; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Community_si
 * @constant
 * @type {number}
 */
export
const Community_si: Community = Community.si; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary si
 * @constant
 * @type {number}
 */
export
const si: Community = Community.si; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Community_both
 * @constant
 * @type {number}
 */
export
const Community_both: Community = Community.both; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary both
 * @constant
 * @type {number}
 */
export
const both: Community = Community.both; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_Community: $.ASN1Decoder<Community> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Community
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Community (el: _Element): Community {
    if (!_cached_decoder_for_Community) { _cached_decoder_for_Community = $._decodeEnumerated; }
    return _cached_decoder_for_Community(el);
}

let _cached_encoder_for_Community: $.ASN1Encoder<Community> | null = null;

/**
 * @summary Encodes a(n) Community into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Community, encoded as an ASN.1 Element.
 */
export
function _encode_Community (value: Community, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Community) { _cached_encoder_for_Community = $._encodeEnumerated; }
    return _cached_encoder_for_Community(value, elGetter);
}


/* eslint-enable */
