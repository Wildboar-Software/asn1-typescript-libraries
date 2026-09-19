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
enum _enum_for_ReportReason {
    timerExpired = 0,
    countThresholdHit = 1,
    pDPComtextDeactivated = 2,
    pDPContextModification = 3,
    otherOrUnknown = 4,
}

/**
 * @summary ReportReason
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ReportReason  ::=  ENUMERATED
 * {
 *  timerExpired (0),
 *  countThresholdHit (1),
 *  pDPComtextDeactivated (2),
 *  pDPContextModification (3),
 *  otherOrUnknown (4),
 *  ...
 * }
 * ```
 * 
 * @enum {number}
 */
export
type ReportReason = _enum_for_ReportReason | ENUMERATED;

/**
 * @summary ReportReason_timerExpired
 * @constant
 * @type {number}
 */
export
const ReportReason_timerExpired: ReportReason = 0; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary timerExpired
 * @constant
 * @type {number}
 */
export
const timerExpired: ReportReason = ReportReason_timerExpired; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ReportReason_countThresholdHit
 * @constant
 * @type {number}
 */
export
const ReportReason_countThresholdHit: ReportReason = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary countThresholdHit
 * @constant
 * @type {number}
 */
export
const countThresholdHit: ReportReason = ReportReason_countThresholdHit; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ReportReason_pDPComtextDeactivated
 * @constant
 * @type {number}
 */
export
const ReportReason_pDPComtextDeactivated: ReportReason = 2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary pDPComtextDeactivated
 * @constant
 * @type {number}
 */
export
const pDPComtextDeactivated: ReportReason = ReportReason_pDPComtextDeactivated; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ReportReason_pDPContextModification
 * @constant
 * @type {number}
 */
export
const ReportReason_pDPContextModification: ReportReason = 3; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary pDPContextModification
 * @constant
 * @type {number}
 */
export
const pDPContextModification: ReportReason = ReportReason_pDPContextModification; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ReportReason_otherOrUnknown
 * @constant
 * @type {number}
 */
export
const ReportReason_otherOrUnknown: ReportReason = 4; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary otherOrUnknown
 * @constant
 * @type {number}
 */
export
const otherOrUnknown: ReportReason = ReportReason_otherOrUnknown; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_ReportReason: $.ASN1Decoder<ReportReason> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ReportReason
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ReportReason (el: _Element): ReportReason {
    if (!_cached_decoder_for_ReportReason) { _cached_decoder_for_ReportReason = $._decodeEnumerated; }
    return _cached_decoder_for_ReportReason(el);
}

let _cached_encoder_for_ReportReason: $.ASN1Encoder<ReportReason> | null = null;

/**
 * @summary Encodes a(n) ReportReason into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ReportReason, encoded as an ASN.1 Element.
 */
export
function _encode_ReportReason (value: ReportReason, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ReportReason) { _cached_encoder_for_ReportReason = $._encodeEnumerated; }
    return _cached_encoder_for_ReportReason(value, elGetter);
}


/* eslint-enable */
