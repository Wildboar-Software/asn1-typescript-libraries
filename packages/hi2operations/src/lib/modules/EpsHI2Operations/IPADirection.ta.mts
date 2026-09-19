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



export
enum _enum_for_IPADirection {
    toTarget = 0,
    fromTarget = 1,
}

/**
 * @summary IPADirection
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IPADirection  ::=  ENUMERATED
 * {
 *  toTarget (0),
 *  fromTarget (1),
 * ...
 * }
 * ```
 * 
 * @enum {number}
 */
export
type IPADirection = _enum_for_IPADirection | ENUMERATED;

/**
 * @summary IPADirection_toTarget
 * @constant
 * @type {number}
 */
export
const IPADirection_toTarget: IPADirection = 0; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary toTarget
 * @constant
 * @type {number}
 */
export
const toTarget: IPADirection = IPADirection_toTarget; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary IPADirection_fromTarget
 * @constant
 * @type {number}
 */
export
const IPADirection_fromTarget: IPADirection = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary fromTarget
 * @constant
 * @type {number}
 */
export
const fromTarget: IPADirection = IPADirection_fromTarget; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_IPADirection: $.ASN1Decoder<IPADirection> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) IPADirection
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_IPADirection (el: _Element): IPADirection {
    if (!_cached_decoder_for_IPADirection) { _cached_decoder_for_IPADirection = $._decodeEnumerated; }
    return _cached_decoder_for_IPADirection(el);
}

let _cached_encoder_for_IPADirection: $.ASN1Encoder<IPADirection> | null = null;

/**
 * @summary Encodes a(n) IPADirection into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IPADirection, encoded as an ASN.1 Element.
 */
export
function _encode_IPADirection (value: IPADirection, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_IPADirection) { _cached_encoder_for_IPADirection = $._encodeEnumerated; }
    return _cached_encoder_for_IPADirection(value, elGetter);
}


/* eslint-enable */
