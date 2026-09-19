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
enum _enum_for_StreamMode {
    sendOnly = 0,
    recvOnly = 1,
    sendRecv = 2,
    inactive = 3,
    loopBack = 4,
}

/**
 * @summary StreamMode
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * StreamMode  ::=  ENUMERATED
 *     {
 *         sendOnly(0),
 *         recvOnly(1),
 *         sendRecv(2),
 *         inactive(3),
 *         loopBack(4),
 *         ...
 *     }
 * ```
 * 
 * @enum {number}
 */
export
type StreamMode = _enum_for_StreamMode | ENUMERATED;

/**
 * @summary StreamMode_sendOnly
 * @constant
 * @type {number}
 */
export
const StreamMode_sendOnly: StreamMode = 0; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary sendOnly
 * @constant
 * @type {number}
 */
export
const sendOnly: StreamMode = StreamMode_sendOnly; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary StreamMode_recvOnly
 * @constant
 * @type {number}
 */
export
const StreamMode_recvOnly: StreamMode = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary recvOnly
 * @constant
 * @type {number}
 */
export
const recvOnly: StreamMode = StreamMode_recvOnly; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary StreamMode_sendRecv
 * @constant
 * @type {number}
 */
export
const StreamMode_sendRecv: StreamMode = 2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary sendRecv
 * @constant
 * @type {number}
 */
export
const sendRecv: StreamMode = StreamMode_sendRecv; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary StreamMode_inactive
 * @constant
 * @type {number}
 */
export
const StreamMode_inactive: StreamMode = 3; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary inactive
 * @constant
 * @type {number}
 */
export
const inactive: StreamMode = StreamMode_inactive; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary StreamMode_loopBack
 * @constant
 * @type {number}
 */
export
const StreamMode_loopBack: StreamMode = 4; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary loopBack
 * @constant
 * @type {number}
 */
export
const loopBack: StreamMode = StreamMode_loopBack; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_StreamMode: $.ASN1Decoder<StreamMode> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) StreamMode
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_StreamMode (el: _Element): StreamMode {
    if (!_cached_decoder_for_StreamMode) { _cached_decoder_for_StreamMode = $._decodeEnumerated; }
    return _cached_decoder_for_StreamMode(el);
}

let _cached_encoder_for_StreamMode: $.ASN1Encoder<StreamMode> | null = null;

/**
 * @summary Encodes a(n) StreamMode into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The StreamMode, encoded as an ASN.1 Element.
 */
export
function _encode_StreamMode (value: StreamMode, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_StreamMode) { _cached_encoder_for_StreamMode = $._encodeEnumerated; }
    return _cached_encoder_for_StreamMode(value, elGetter);
}


/* eslint-enable */
