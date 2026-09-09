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
enum _enum_for_UnavailabilityCause {
    bearerServiceNotProvisioned = 1,
    teleserviceNotProvisioned = 2,
    absentSubscriber = 3,
    busySubscriber = 4,
    callBarred = 5,
    cug_Reject = 6,
}

/**
 * @summary UnavailabilityCause
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * UnavailabilityCause  ::=  ENUMERATED {
 *     bearerServiceNotProvisioned    (1),
 *     teleserviceNotProvisioned    (2),
 *     absentSubscriber    (3),
 *     busySubscriber    (4),
 *     callBarred    (5),
 *     cug-Reject    (6),
 *     ...}
 * ```
 * 
 * @enum {number}
 */
export
type UnavailabilityCause = _enum_for_UnavailabilityCause | ENUMERATED;

/**
 * @summary UnavailabilityCause_bearerServiceNotProvisioned
 * @constant
 * @type {number}
 */
export
const UnavailabilityCause_bearerServiceNotProvisioned: UnavailabilityCause = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary bearerServiceNotProvisioned
 * @constant
 * @type {number}
 */
export
const bearerServiceNotProvisioned: UnavailabilityCause = UnavailabilityCause_bearerServiceNotProvisioned; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary UnavailabilityCause_teleserviceNotProvisioned
 * @constant
 * @type {number}
 */
export
const UnavailabilityCause_teleserviceNotProvisioned: UnavailabilityCause = 2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary teleserviceNotProvisioned
 * @constant
 * @type {number}
 */
export
const teleserviceNotProvisioned: UnavailabilityCause = UnavailabilityCause_teleserviceNotProvisioned; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary UnavailabilityCause_absentSubscriber
 * @constant
 * @type {number}
 */
export
const UnavailabilityCause_absentSubscriber: UnavailabilityCause = 3; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary absentSubscriber
 * @constant
 * @type {number}
 */
export
const absentSubscriber: UnavailabilityCause = UnavailabilityCause_absentSubscriber; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary UnavailabilityCause_busySubscriber
 * @constant
 * @type {number}
 */
export
const UnavailabilityCause_busySubscriber: UnavailabilityCause = 4; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary busySubscriber
 * @constant
 * @type {number}
 */
export
const busySubscriber: UnavailabilityCause = UnavailabilityCause_busySubscriber; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary UnavailabilityCause_callBarred
 * @constant
 * @type {number}
 */
export
const UnavailabilityCause_callBarred: UnavailabilityCause = 5; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary callBarred
 * @constant
 * @type {number}
 */
export
const callBarred: UnavailabilityCause = UnavailabilityCause_callBarred; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary UnavailabilityCause_cug_Reject
 * @constant
 * @type {number}
 */
export
const UnavailabilityCause_cug_Reject: UnavailabilityCause = 6; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary cug_Reject
 * @constant
 * @type {number}
 */
export
const cug_Reject: UnavailabilityCause = UnavailabilityCause_cug_Reject; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_UnavailabilityCause: $.ASN1Decoder<UnavailabilityCause> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) UnavailabilityCause
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_UnavailabilityCause (el: _Element): UnavailabilityCause {
    if (!_cached_decoder_for_UnavailabilityCause) { _cached_decoder_for_UnavailabilityCause = $._decodeEnumerated; }
    return _cached_decoder_for_UnavailabilityCause(el);
}

let _cached_encoder_for_UnavailabilityCause: $.ASN1Encoder<UnavailabilityCause> | null = null;

/**
 * @summary Encodes a(n) UnavailabilityCause into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UnavailabilityCause, encoded as an ASN.1 Element.
 */
export
function _encode_UnavailabilityCause (value: UnavailabilityCause, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_UnavailabilityCause) { _cached_encoder_for_UnavailabilityCause = $._encodeEnumerated; }
    return _cached_encoder_for_UnavailabilityCause(value, elGetter);
}


/* eslint-enable */
