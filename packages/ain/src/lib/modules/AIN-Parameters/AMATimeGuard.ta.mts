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
 * @summary AMATimeGuard
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AMATimeGuard  ::=  ENUMERATED{
 *         noTimingGuard(0),
 *         timingGuardExists(1)
 *     }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_AMATimeGuard {
    noTimingGuard = 0,
    timingGuardExists = 1,
}

/**
 * @summary AMATimeGuard
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AMATimeGuard  ::=  ENUMERATED{
 *         noTimingGuard(0),
 *         timingGuardExists(1)
 *     }
 * ```
 * 
 * @enum {number}
 */
export
type AMATimeGuard = _enum_for_AMATimeGuard;

/**
 * @summary AMATimeGuard
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AMATimeGuard  ::=  ENUMERATED{
 *         noTimingGuard(0),
 *         timingGuardExists(1)
 *     }
 * ```
 * 
 * @enum {number}
 */
export
const AMATimeGuard = _enum_for_AMATimeGuard;

/**
 * @summary AMATimeGuard_noTimingGuard
 * @constant
 * @type {number}
 */
export
const AMATimeGuard_noTimingGuard: AMATimeGuard = AMATimeGuard.noTimingGuard; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary noTimingGuard
 * @constant
 * @type {number}
 */
export
const noTimingGuard: AMATimeGuard = AMATimeGuard.noTimingGuard; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AMATimeGuard_timingGuardExists
 * @constant
 * @type {number}
 */
export
const AMATimeGuard_timingGuardExists: AMATimeGuard = AMATimeGuard.timingGuardExists; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary timingGuardExists
 * @constant
 * @type {number}
 */
export
const timingGuardExists: AMATimeGuard = AMATimeGuard.timingGuardExists; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_AMATimeGuard: $.ASN1Decoder<AMATimeGuard> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AMATimeGuard
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AMATimeGuard (el: _Element): AMATimeGuard {
    if (!_cached_decoder_for_AMATimeGuard) { _cached_decoder_for_AMATimeGuard = $._decodeEnumerated; }
    return _cached_decoder_for_AMATimeGuard(el);
}

let _cached_encoder_for_AMATimeGuard: $.ASN1Encoder<AMATimeGuard> | null = null;

/**
 * @summary Encodes a(n) AMATimeGuard into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AMATimeGuard, encoded as an ASN.1 Element.
 */
export
function _encode_AMATimeGuard (value: AMATimeGuard, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AMATimeGuard) { _cached_encoder_for_AMATimeGuard = $._encodeEnumerated; }
    return _cached_encoder_for_AMATimeGuard(value, elGetter);
}


/* eslint-enable */
