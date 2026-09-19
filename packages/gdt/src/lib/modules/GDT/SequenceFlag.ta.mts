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
 * @summary SequenceFlag
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SequenceFlag  ::=  INTEGER {
 *     sf-start                (0),
 *     sf-continue             (1),
 *     sf-end                  (2),
 *     sf-stateless-no-reply   (3),
 *     sf-stateless            (4),
 *     sf-stream-complete      (5),
 *     sf-continue-wait        (6),
 *     sf-heartbeat            (7)
 * }
 * ```
 */
export
type SequenceFlag = INTEGER;

/**
 * @summary SequenceFlag_sf_start
 * @constant
 * @type {number}
 */
export
const SequenceFlag_sf_start: SequenceFlag = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SequenceFlag_sf_start
 * @constant
 * @type {number}
 */
export
const sf_start: SequenceFlag = SequenceFlag_sf_start; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SequenceFlag_sf_continue
 * @constant
 * @type {number}
 */
export
const SequenceFlag_sf_continue: SequenceFlag = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SequenceFlag_sf_continue
 * @constant
 * @type {number}
 */
export
const sf_continue: SequenceFlag = SequenceFlag_sf_continue; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SequenceFlag_sf_end
 * @constant
 * @type {number}
 */
export
const SequenceFlag_sf_end: SequenceFlag = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SequenceFlag_sf_end
 * @constant
 * @type {number}
 */
export
const sf_end: SequenceFlag = SequenceFlag_sf_end; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SequenceFlag_sf_stateless_no_reply
 * @constant
 * @type {number}
 */
export
const SequenceFlag_sf_stateless_no_reply: SequenceFlag = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SequenceFlag_sf_stateless_no_reply
 * @constant
 * @type {number}
 */
export
const sf_stateless_no_reply: SequenceFlag = SequenceFlag_sf_stateless_no_reply; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SequenceFlag_sf_stateless
 * @constant
 * @type {number}
 */
export
const SequenceFlag_sf_stateless: SequenceFlag = 4; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SequenceFlag_sf_stateless
 * @constant
 * @type {number}
 */
export
const sf_stateless: SequenceFlag = SequenceFlag_sf_stateless; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SequenceFlag_sf_stream_complete
 * @constant
 * @type {number}
 */
export
const SequenceFlag_sf_stream_complete: SequenceFlag = 5; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SequenceFlag_sf_stream_complete
 * @constant
 * @type {number}
 */
export
const sf_stream_complete: SequenceFlag = SequenceFlag_sf_stream_complete; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SequenceFlag_sf_continue_wait
 * @constant
 * @type {number}
 */
export
const SequenceFlag_sf_continue_wait: SequenceFlag = 6; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SequenceFlag_sf_continue_wait
 * @constant
 * @type {number}
 */
export
const sf_continue_wait: SequenceFlag = SequenceFlag_sf_continue_wait; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SequenceFlag_sf_heartbeat
 * @constant
 * @type {number}
 */
export
const SequenceFlag_sf_heartbeat: SequenceFlag = 7; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SequenceFlag_sf_heartbeat
 * @constant
 * @type {number}
 */
export
const sf_heartbeat: SequenceFlag = SequenceFlag_sf_heartbeat; /* SHORT_NAMED_INTEGER_VALUE */

let _cached_decoder_for_SequenceFlag: $.ASN1Decoder<SequenceFlag> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SequenceFlag
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SequenceFlag (el: _Element): SequenceFlag {
    if (!_cached_decoder_for_SequenceFlag) { _cached_decoder_for_SequenceFlag = $._decodeInteger; }
    return _cached_decoder_for_SequenceFlag(el);
}

let _cached_encoder_for_SequenceFlag: $.ASN1Encoder<SequenceFlag> | null = null;

/**
 * @summary Encodes a(n) SequenceFlag into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SequenceFlag, encoded as an ASN.1 Element.
 */
export
function _encode_SequenceFlag (value: SequenceFlag, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SequenceFlag) { _cached_encoder_for_SequenceFlag = $._encodeInteger; }
    return _cached_encoder_for_SequenceFlag(value, elGetter);
}


/* eslint-enable */
