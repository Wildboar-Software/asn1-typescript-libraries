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
enum _enum_for_UnknownSubscriberDiagnostic {
    imsiUnknown = 0,
    gprs_eps_SubscriptionUnknown = 1,
    npdbMismatch = 2,
}

/**
 * @summary UnknownSubscriberDiagnostic
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * UnknownSubscriberDiagnostic  ::=  ENUMERATED {
 *     imsiUnknown  (0),
 *     gprs-eps-SubscriptionUnknown  (1),
 *     ...,
 *     npdbMismatch  (2)}
 * ```
 * 
 * @enum {number}
 */
export
type UnknownSubscriberDiagnostic = _enum_for_UnknownSubscriberDiagnostic | ENUMERATED;

/**
 * @summary UnknownSubscriberDiagnostic_imsiUnknown
 * @constant
 * @type {number}
 */
export
const UnknownSubscriberDiagnostic_imsiUnknown: UnknownSubscriberDiagnostic = 0; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary imsiUnknown
 * @constant
 * @type {number}
 */
export
const imsiUnknown: UnknownSubscriberDiagnostic = UnknownSubscriberDiagnostic_imsiUnknown; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary UnknownSubscriberDiagnostic_gprs_eps_SubscriptionUnknown
 * @constant
 * @type {number}
 */
export
const UnknownSubscriberDiagnostic_gprs_eps_SubscriptionUnknown: UnknownSubscriberDiagnostic = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary gprs_eps_SubscriptionUnknown
 * @constant
 * @type {number}
 */
export
const gprs_eps_SubscriptionUnknown: UnknownSubscriberDiagnostic = UnknownSubscriberDiagnostic_gprs_eps_SubscriptionUnknown; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary UnknownSubscriberDiagnostic_npdbMismatch
 * @constant
 * @type {number}
 */
export
const UnknownSubscriberDiagnostic_npdbMismatch: UnknownSubscriberDiagnostic = 2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary npdbMismatch
 * @constant
 * @type {number}
 */
export
const npdbMismatch: UnknownSubscriberDiagnostic = UnknownSubscriberDiagnostic_npdbMismatch; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_UnknownSubscriberDiagnostic: $.ASN1Decoder<UnknownSubscriberDiagnostic> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) UnknownSubscriberDiagnostic
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_UnknownSubscriberDiagnostic (el: _Element): UnknownSubscriberDiagnostic {
    if (!_cached_decoder_for_UnknownSubscriberDiagnostic) { _cached_decoder_for_UnknownSubscriberDiagnostic = $._decodeEnumerated; }
    return _cached_decoder_for_UnknownSubscriberDiagnostic(el);
}

let _cached_encoder_for_UnknownSubscriberDiagnostic: $.ASN1Encoder<UnknownSubscriberDiagnostic> | null = null;

/**
 * @summary Encodes a(n) UnknownSubscriberDiagnostic into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UnknownSubscriberDiagnostic, encoded as an ASN.1 Element.
 */
export
function _encode_UnknownSubscriberDiagnostic (value: UnknownSubscriberDiagnostic, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_UnknownSubscriberDiagnostic) { _cached_encoder_for_UnknownSubscriberDiagnostic = $._encodeEnumerated; }
    return _cached_encoder_for_UnknownSubscriberDiagnostic(value, elGetter);
}


/* eslint-enable */
