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
enum _enum_for_GPRS_TriggerDetectionPoint {
    attach = 1,
    attachChangeOfPosition = 2,
    pdp_ContextEstablishment = 11,
    pdp_ContextEstablishmentAcknowledgement = 12,
    pdp_ContextChangeOfPosition = 14,
}

/**
 * @summary GPRS_TriggerDetectionPoint
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GPRS-TriggerDetectionPoint  ::=  ENUMERATED {
 *     attach    (1),
 *     attachChangeOfPosition    (2),
 *     pdp-ContextEstablishment    (11),
 *     pdp-ContextEstablishmentAcknowledgement    (12),
 *     pdp-ContextChangeOfPosition    (14),
 *     ... }
 * ```
 * 
 * @enum {number}
 */
export
type GPRS_TriggerDetectionPoint = _enum_for_GPRS_TriggerDetectionPoint | ENUMERATED;

/**
 * @summary GPRS_TriggerDetectionPoint_attach
 * @constant
 * @type {number}
 */
export
const GPRS_TriggerDetectionPoint_attach: GPRS_TriggerDetectionPoint = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary attach
 * @constant
 * @type {number}
 */
export
const attach: GPRS_TriggerDetectionPoint = GPRS_TriggerDetectionPoint_attach; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary GPRS_TriggerDetectionPoint_attachChangeOfPosition
 * @constant
 * @type {number}
 */
export
const GPRS_TriggerDetectionPoint_attachChangeOfPosition: GPRS_TriggerDetectionPoint = 2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary attachChangeOfPosition
 * @constant
 * @type {number}
 */
export
const attachChangeOfPosition: GPRS_TriggerDetectionPoint = GPRS_TriggerDetectionPoint_attachChangeOfPosition; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary GPRS_TriggerDetectionPoint_pdp_ContextEstablishment
 * @constant
 * @type {number}
 */
export
const GPRS_TriggerDetectionPoint_pdp_ContextEstablishment: GPRS_TriggerDetectionPoint = 11; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary pdp_ContextEstablishment
 * @constant
 * @type {number}
 */
export
const pdp_ContextEstablishment: GPRS_TriggerDetectionPoint = GPRS_TriggerDetectionPoint_pdp_ContextEstablishment; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary GPRS_TriggerDetectionPoint_pdp_ContextEstablishmentAcknowledgement
 * @constant
 * @type {number}
 */
export
const GPRS_TriggerDetectionPoint_pdp_ContextEstablishmentAcknowledgement: GPRS_TriggerDetectionPoint = 12; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary pdp_ContextEstablishmentAcknowledgement
 * @constant
 * @type {number}
 */
export
const pdp_ContextEstablishmentAcknowledgement: GPRS_TriggerDetectionPoint = GPRS_TriggerDetectionPoint_pdp_ContextEstablishmentAcknowledgement; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary GPRS_TriggerDetectionPoint_pdp_ContextChangeOfPosition
 * @constant
 * @type {number}
 */
export
const GPRS_TriggerDetectionPoint_pdp_ContextChangeOfPosition: GPRS_TriggerDetectionPoint = 14; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary pdp_ContextChangeOfPosition
 * @constant
 * @type {number}
 */
export
const pdp_ContextChangeOfPosition: GPRS_TriggerDetectionPoint = GPRS_TriggerDetectionPoint_pdp_ContextChangeOfPosition; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_GPRS_TriggerDetectionPoint: $.ASN1Decoder<GPRS_TriggerDetectionPoint> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) GPRS_TriggerDetectionPoint
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_GPRS_TriggerDetectionPoint (el: _Element): GPRS_TriggerDetectionPoint {
    if (!_cached_decoder_for_GPRS_TriggerDetectionPoint) { _cached_decoder_for_GPRS_TriggerDetectionPoint = $._decodeEnumerated; }
    return _cached_decoder_for_GPRS_TriggerDetectionPoint(el);
}

let _cached_encoder_for_GPRS_TriggerDetectionPoint: $.ASN1Encoder<GPRS_TriggerDetectionPoint> | null = null;

/**
 * @summary Encodes a(n) GPRS_TriggerDetectionPoint into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GPRS_TriggerDetectionPoint, encoded as an ASN.1 Element.
 */
export
function _encode_GPRS_TriggerDetectionPoint (value: GPRS_TriggerDetectionPoint, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_GPRS_TriggerDetectionPoint) { _cached_encoder_for_GPRS_TriggerDetectionPoint = $._encodeEnumerated; }
    return _cached_encoder_for_GPRS_TriggerDetectionPoint(value, elGetter);
}


/* eslint-enable */
