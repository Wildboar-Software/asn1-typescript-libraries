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
 * @summary BiometricFlags
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * BiometricFlags  ::=  BIT STRING {
 *     local                       (1),
 *     change-disabled             (2),
 *     unblock-disabled            (3),
 *     initialized                 (4),
 *     disable-allowed             (8),
 *     integrity-protected         (9),
 *     confidentiality-protected   (10)
 * }
 * ```
 */
export
type BiometricFlags = BIT_STRING;

/**
 * @summary BiometricFlags_local
 * @constant
 */
export
const BiometricFlags_local: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary local
 * @constant
 */
export
const local: number = BiometricFlags_local; /* SHORT_NAMED_BIT */

/**
 * @summary BiometricFlags_change_disabled
 * @constant
 */
export
const BiometricFlags_change_disabled: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary change_disabled
 * @constant
 */
export
const change_disabled: number = BiometricFlags_change_disabled; /* SHORT_NAMED_BIT */

/**
 * @summary BiometricFlags_unblock_disabled
 * @constant
 */
export
const BiometricFlags_unblock_disabled: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary unblock_disabled
 * @constant
 */
export
const unblock_disabled: number = BiometricFlags_unblock_disabled; /* SHORT_NAMED_BIT */

/**
 * @summary BiometricFlags_initialized
 * @constant
 */
export
const BiometricFlags_initialized: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary initialized
 * @constant
 */
export
const initialized: number = BiometricFlags_initialized; /* SHORT_NAMED_BIT */

/**
 * @summary BiometricFlags_disable_allowed
 * @constant
 */
export
const BiometricFlags_disable_allowed: number = 8; /* LONG_NAMED_BIT */

/**
 * @summary disable_allowed
 * @constant
 */
export
const disable_allowed: number = BiometricFlags_disable_allowed; /* SHORT_NAMED_BIT */

/**
 * @summary BiometricFlags_integrity_protected
 * @constant
 */
export
const BiometricFlags_integrity_protected: number = 9; /* LONG_NAMED_BIT */

/**
 * @summary integrity_protected
 * @constant
 */
export
const integrity_protected: number = BiometricFlags_integrity_protected; /* SHORT_NAMED_BIT */

/**
 * @summary BiometricFlags_confidentiality_protected
 * @constant
 */
export
const BiometricFlags_confidentiality_protected: number = 10; /* LONG_NAMED_BIT */

/**
 * @summary confidentiality_protected
 * @constant
 */
export
const confidentiality_protected: number = BiometricFlags_confidentiality_protected; /* SHORT_NAMED_BIT */

let _cached_decoder_for_BiometricFlags: $.ASN1Decoder<BiometricFlags> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) BiometricFlags
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_BiometricFlags (el: _Element): BiometricFlags {
    if (!_cached_decoder_for_BiometricFlags) { _cached_decoder_for_BiometricFlags = $._decodeBitString; }
    return _cached_decoder_for_BiometricFlags(el);
}

let _cached_encoder_for_BiometricFlags: $.ASN1Encoder<BiometricFlags> | null = null;

/**
 * @summary Encodes a(n) BiometricFlags into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BiometricFlags, encoded as an ASN.1 Element.
 */
export
function _encode_BiometricFlags (value: BiometricFlags, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_BiometricFlags) { _cached_encoder_for_BiometricFlags = $._encodeBitString; }
    return _cached_encoder_for_BiometricFlags(value, elGetter);
}


/* eslint-enable */
