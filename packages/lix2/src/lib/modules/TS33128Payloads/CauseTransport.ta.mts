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
 * @summary CauseTransport
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CauseTransport  ::=  ENUMERATED
 * {
 *     transportResourceUnavailable(1),
 *     unspecified(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_CauseTransport {
    transportResourceUnavailable = 1,
    unspecified = 2,
}

/**
 * @summary CauseTransport
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CauseTransport  ::=  ENUMERATED
 * {
 *     transportResourceUnavailable(1),
 *     unspecified(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type CauseTransport = _enum_for_CauseTransport;

/**
 * @summary CauseTransport
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CauseTransport  ::=  ENUMERATED
 * {
 *     transportResourceUnavailable(1),
 *     unspecified(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const CauseTransport = _enum_for_CauseTransport;

/**
 * @summary CauseTransport_transportResourceUnavailable
 * @constant
 * @type {number}
 */
export
const CauseTransport_transportResourceUnavailable: CauseTransport = CauseTransport.transportResourceUnavailable; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary transportResourceUnavailable
 * @constant
 * @type {number}
 */
export
const transportResourceUnavailable: CauseTransport = CauseTransport.transportResourceUnavailable; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CauseTransport_unspecified
 * @constant
 * @type {number}
 */
export
const CauseTransport_unspecified: CauseTransport = CauseTransport.unspecified; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unspecified
 * @constant
 * @type {number}
 */
export
const unspecified: CauseTransport = CauseTransport.unspecified; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_CauseTransport: $.ASN1Decoder<CauseTransport> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CauseTransport
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CauseTransport (el: _Element): CauseTransport {
    if (!_cached_decoder_for_CauseTransport) { _cached_decoder_for_CauseTransport = $._decodeEnumerated; }
    return _cached_decoder_for_CauseTransport(el);
}

let _cached_encoder_for_CauseTransport: $.ASN1Encoder<CauseTransport> | null = null;

/**
 * @summary Encodes a(n) CauseTransport into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CauseTransport, encoded as an ASN.1 Element.
 */
export
function _encode_CauseTransport (value: CauseTransport, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CauseTransport) { _cached_encoder_for_CauseTransport = $._encodeEnumerated; }
    return _cached_encoder_for_CauseTransport(value, elGetter);
}


/* eslint-enable */
