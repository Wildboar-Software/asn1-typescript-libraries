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
 * @summary ReasonFlags
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ReasonFlags  ::=  BIT STRING {
 *   unused                (0),
 *   keyCompromise         (1),
 *   cACompromise          (2),
 *   affiliationChanged    (3),
 *   superseded            (4),
 *   cessationOfOperation  (5),
 *   certificateHold       (6),
 *   privilegeWithdrawn    (7),
 *   aACompromise          (8),
 *   weakAlgorithmOrKey    (9) }
 * ```
 */
export
type ReasonFlags = BIT_STRING;

/**
 * @summary ReasonFlags_unused
 * @constant
 */
export
const ReasonFlags_unused: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary unused
 * @constant
 */
export
const unused: number = ReasonFlags_unused; /* SHORT_NAMED_BIT */

/**
 * @summary ReasonFlags_keyCompromise
 * @constant
 */
export
const ReasonFlags_keyCompromise: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary keyCompromise
 * @constant
 */
export
const keyCompromise: number = ReasonFlags_keyCompromise; /* SHORT_NAMED_BIT */

/**
 * @summary ReasonFlags_cACompromise
 * @constant
 */
export
const ReasonFlags_cACompromise: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary cACompromise
 * @constant
 */
export
const cACompromise: number = ReasonFlags_cACompromise; /* SHORT_NAMED_BIT */

/**
 * @summary ReasonFlags_affiliationChanged
 * @constant
 */
export
const ReasonFlags_affiliationChanged: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary affiliationChanged
 * @constant
 */
export
const affiliationChanged: number = ReasonFlags_affiliationChanged; /* SHORT_NAMED_BIT */

/**
 * @summary ReasonFlags_superseded
 * @constant
 */
export
const ReasonFlags_superseded: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary superseded
 * @constant
 */
export
const superseded: number = ReasonFlags_superseded; /* SHORT_NAMED_BIT */

/**
 * @summary ReasonFlags_cessationOfOperation
 * @constant
 */
export
const ReasonFlags_cessationOfOperation: number = 5; /* LONG_NAMED_BIT */

/**
 * @summary cessationOfOperation
 * @constant
 */
export
const cessationOfOperation: number = ReasonFlags_cessationOfOperation; /* SHORT_NAMED_BIT */

/**
 * @summary ReasonFlags_certificateHold
 * @constant
 */
export
const ReasonFlags_certificateHold: number = 6; /* LONG_NAMED_BIT */

/**
 * @summary certificateHold
 * @constant
 */
export
const certificateHold: number = ReasonFlags_certificateHold; /* SHORT_NAMED_BIT */

/**
 * @summary ReasonFlags_privilegeWithdrawn
 * @constant
 */
export
const ReasonFlags_privilegeWithdrawn: number = 7; /* LONG_NAMED_BIT */

/**
 * @summary privilegeWithdrawn
 * @constant
 */
export
const privilegeWithdrawn: number = ReasonFlags_privilegeWithdrawn; /* SHORT_NAMED_BIT */

/**
 * @summary ReasonFlags_aACompromise
 * @constant
 */
export
const ReasonFlags_aACompromise: number = 8; /* LONG_NAMED_BIT */

/**
 * @summary aACompromise
 * @constant
 */
export
const aACompromise: number = ReasonFlags_aACompromise; /* SHORT_NAMED_BIT */

/**
 * @summary ReasonFlags_weakAlgorithmOrKey
 * @constant
 */
export
const ReasonFlags_weakAlgorithmOrKey: number = 9; /* LONG_NAMED_BIT */

/**
 * @summary weakAlgorithmOrKey
 * @constant
 */
export
const weakAlgorithmOrKey: number = ReasonFlags_weakAlgorithmOrKey; /* SHORT_NAMED_BIT */

let _cached_decoder_for_ReasonFlags: $.ASN1Decoder<ReasonFlags> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ReasonFlags
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ReasonFlags (el: _Element): ReasonFlags {
    if (!_cached_decoder_for_ReasonFlags) { _cached_decoder_for_ReasonFlags = $._decodeBitString; }
    return _cached_decoder_for_ReasonFlags(el);
}

let _cached_encoder_for_ReasonFlags: $.ASN1Encoder<ReasonFlags> | null = null;

/**
 * @summary Encodes a(n) ReasonFlags into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ReasonFlags, encoded as an ASN.1 Element.
 */
export
function _encode_ReasonFlags (value: ReasonFlags, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ReasonFlags) { _cached_encoder_for_ReasonFlags = $._encodeBitString; }
    return _cached_encoder_for_ReasonFlags(value, elGetter);
}


/* eslint-enable */
