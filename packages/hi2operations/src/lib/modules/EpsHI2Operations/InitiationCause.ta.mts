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
enum _enum_for_InitiationCause {
    requests = 1,
    received = 2,
    pTCOriginatingId = 3,
}

/**
 * @summary InitiationCause
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * InitiationCause  ::=  ENUMERATED
 * {
 *  requests (1),
 *  received (2),
 *  pTCOriginatingId (3),
 *  -- requests or receives a session initiation from the network or another
 *  -- party to initiate a PTC session. Identify the originating PTC party, if known.
 * ...
 * }
 * ```
 * 
 * @enum {number}
 */
export
type InitiationCause = _enum_for_InitiationCause | ENUMERATED;

/**
 * @summary InitiationCause_requests
 * @constant
 * @type {number}
 */
export
const InitiationCause_requests: InitiationCause = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary requests
 * @constant
 * @type {number}
 */
export
const requests: InitiationCause = InitiationCause_requests; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary InitiationCause_received
 * @constant
 * @type {number}
 */
export
const InitiationCause_received: InitiationCause = 2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary received
 * @constant
 * @type {number}
 */
export
const received: InitiationCause = InitiationCause_received; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary InitiationCause_pTCOriginatingId
 * @constant
 * @type {number}
 */
export
const InitiationCause_pTCOriginatingId: InitiationCause = 3; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary pTCOriginatingId
 * @constant
 * @type {number}
 */
export
const pTCOriginatingId: InitiationCause = InitiationCause_pTCOriginatingId; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_InitiationCause: $.ASN1Decoder<InitiationCause> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) InitiationCause
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_InitiationCause (el: _Element): InitiationCause {
    if (!_cached_decoder_for_InitiationCause) { _cached_decoder_for_InitiationCause = $._decodeEnumerated; }
    return _cached_decoder_for_InitiationCause(el);
}

let _cached_encoder_for_InitiationCause: $.ASN1Encoder<InitiationCause> | null = null;

/**
 * @summary Encodes a(n) InitiationCause into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The InitiationCause, encoded as an ASN.1 Element.
 */
export
function _encode_InitiationCause (value: InitiationCause, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_InitiationCause) { _cached_encoder_for_InitiationCause = $._encodeEnumerated; }
    return _cached_encoder_for_InitiationCause(value, elGetter);
}


/* eslint-enable */
