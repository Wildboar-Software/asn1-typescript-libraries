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
 * @summary NonLocalID
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NonLocalID  ::=  ENUMERATED
 * {
 *     local(1),
 *     nonLocal(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_NonLocalID {
    local = 1,
    nonLocal = 2,
}

/**
 * @summary NonLocalID
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NonLocalID  ::=  ENUMERATED
 * {
 *     local(1),
 *     nonLocal(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type NonLocalID = _enum_for_NonLocalID;

/**
 * @summary NonLocalID
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NonLocalID  ::=  ENUMERATED
 * {
 *     local(1),
 *     nonLocal(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const NonLocalID = _enum_for_NonLocalID;

/**
 * @summary NonLocalID_local
 * @constant
 * @type {number}
 */
export
const NonLocalID_local: NonLocalID = NonLocalID.local; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary local
 * @constant
 * @type {number}
 */
export
const local: NonLocalID = NonLocalID.local; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary NonLocalID_nonLocal
 * @constant
 * @type {number}
 */
export
const NonLocalID_nonLocal: NonLocalID = NonLocalID.nonLocal; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary nonLocal
 * @constant
 * @type {number}
 */
export
const nonLocal: NonLocalID = NonLocalID.nonLocal; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_NonLocalID: $.ASN1Decoder<NonLocalID> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) NonLocalID
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_NonLocalID (el: _Element): NonLocalID {
    if (!_cached_decoder_for_NonLocalID) { _cached_decoder_for_NonLocalID = $._decodeEnumerated; }
    return _cached_decoder_for_NonLocalID(el);
}

let _cached_encoder_for_NonLocalID: $.ASN1Encoder<NonLocalID> | null = null;

/**
 * @summary Encodes a(n) NonLocalID into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NonLocalID, encoded as an ASN.1 Element.
 */
export
function _encode_NonLocalID (value: NonLocalID, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_NonLocalID) { _cached_encoder_for_NonLocalID = $._encodeEnumerated; }
    return _cached_encoder_for_NonLocalID(value, elGetter);
}


/* eslint-enable */
