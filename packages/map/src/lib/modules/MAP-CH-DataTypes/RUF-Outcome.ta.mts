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
enum _enum_for_RUF_Outcome {
    accepted = 0,
    rejected = 1,
    noResponseFromFreeMS = 2,
    noResponseFromBusyMS = 3,
    udubFromFreeMS = 4,
    udubFromBusyMS = 5,
}

/**
 * @summary RUF_Outcome
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RUF-Outcome  ::=  ENUMERATED{
 *     accepted (0),
 *     rejected (1),
 *     noResponseFromFreeMS (2), -- T4 Expiry
 *     noResponseFromBusyMS (3), -- T10 Expiry
 *     udubFromFreeMS (4),
 *     udubFromBusyMS (5),
 *     ...}
 * ```
 * 
 * @enum {number}
 */
export
type RUF_Outcome = _enum_for_RUF_Outcome | ENUMERATED;

/**
 * @summary RUF_Outcome_accepted
 * @constant
 * @type {number}
 */
export
const RUF_Outcome_accepted: RUF_Outcome = 0; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary accepted
 * @constant
 * @type {number}
 */
export
const accepted: RUF_Outcome = RUF_Outcome_accepted; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary RUF_Outcome_rejected
 * @constant
 * @type {number}
 */
export
const RUF_Outcome_rejected: RUF_Outcome = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary rejected
 * @constant
 * @type {number}
 */
export
const rejected: RUF_Outcome = RUF_Outcome_rejected; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary RUF_Outcome_noResponseFromFreeMS
 * @constant
 * @type {number}
 */
export
const RUF_Outcome_noResponseFromFreeMS: RUF_Outcome = 2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary noResponseFromFreeMS
 * @constant
 * @type {number}
 */
export
const noResponseFromFreeMS: RUF_Outcome = RUF_Outcome_noResponseFromFreeMS; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary RUF_Outcome_noResponseFromBusyMS
 * @constant
 * @type {number}
 */
export
const RUF_Outcome_noResponseFromBusyMS: RUF_Outcome = 3; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary noResponseFromBusyMS
 * @constant
 * @type {number}
 */
export
const noResponseFromBusyMS: RUF_Outcome = RUF_Outcome_noResponseFromBusyMS; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary RUF_Outcome_udubFromFreeMS
 * @constant
 * @type {number}
 */
export
const RUF_Outcome_udubFromFreeMS: RUF_Outcome = 4; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary udubFromFreeMS
 * @constant
 * @type {number}
 */
export
const udubFromFreeMS: RUF_Outcome = RUF_Outcome_udubFromFreeMS; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary RUF_Outcome_udubFromBusyMS
 * @constant
 * @type {number}
 */
export
const RUF_Outcome_udubFromBusyMS: RUF_Outcome = 5; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary udubFromBusyMS
 * @constant
 * @type {number}
 */
export
const udubFromBusyMS: RUF_Outcome = RUF_Outcome_udubFromBusyMS; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_RUF_Outcome: $.ASN1Decoder<RUF_Outcome> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RUF_Outcome
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RUF_Outcome (el: _Element): RUF_Outcome {
    if (!_cached_decoder_for_RUF_Outcome) { _cached_decoder_for_RUF_Outcome = $._decodeEnumerated; }
    return _cached_decoder_for_RUF_Outcome(el);
}

let _cached_encoder_for_RUF_Outcome: $.ASN1Encoder<RUF_Outcome> | null = null;

/**
 * @summary Encodes a(n) RUF_Outcome into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RUF_Outcome, encoded as an ASN.1 Element.
 */
export
function _encode_RUF_Outcome (value: RUF_Outcome, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RUF_Outcome) { _cached_encoder_for_RUF_Outcome = $._encodeEnumerated; }
    return _cached_encoder_for_RUF_Outcome(value, elGetter);
}


/* eslint-enable */
