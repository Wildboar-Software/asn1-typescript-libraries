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
 * @summary NEFReleaseCause
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NEFReleaseCause  ::=  ENUMERATED
 * {
 *     sMFRelease(1),
 *     dNRelease(2),
 *     uDMRelease(3),
 *     cHFRelease(4),
 *     localConfigurationPolicy(5),
 *     unknownCause(6)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_NEFReleaseCause {
    sMFRelease = 1,
    dNRelease = 2,
    uDMRelease = 3,
    cHFRelease = 4,
    localConfigurationPolicy = 5,
    unknownCause = 6,
}

/**
 * @summary NEFReleaseCause
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NEFReleaseCause  ::=  ENUMERATED
 * {
 *     sMFRelease(1),
 *     dNRelease(2),
 *     uDMRelease(3),
 *     cHFRelease(4),
 *     localConfigurationPolicy(5),
 *     unknownCause(6)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type NEFReleaseCause = _enum_for_NEFReleaseCause;

/**
 * @summary NEFReleaseCause
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NEFReleaseCause  ::=  ENUMERATED
 * {
 *     sMFRelease(1),
 *     dNRelease(2),
 *     uDMRelease(3),
 *     cHFRelease(4),
 *     localConfigurationPolicy(5),
 *     unknownCause(6)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const NEFReleaseCause = _enum_for_NEFReleaseCause;

/**
 * @summary NEFReleaseCause_sMFRelease
 * @constant
 * @type {number}
 */
export
const NEFReleaseCause_sMFRelease: NEFReleaseCause = NEFReleaseCause.sMFRelease; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary sMFRelease
 * @constant
 * @type {number}
 */
export
const sMFRelease: NEFReleaseCause = NEFReleaseCause.sMFRelease; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary NEFReleaseCause_dNRelease
 * @constant
 * @type {number}
 */
export
const NEFReleaseCause_dNRelease: NEFReleaseCause = NEFReleaseCause.dNRelease; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary dNRelease
 * @constant
 * @type {number}
 */
export
const dNRelease: NEFReleaseCause = NEFReleaseCause.dNRelease; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary NEFReleaseCause_uDMRelease
 * @constant
 * @type {number}
 */
export
const NEFReleaseCause_uDMRelease: NEFReleaseCause = NEFReleaseCause.uDMRelease; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary uDMRelease
 * @constant
 * @type {number}
 */
export
const uDMRelease: NEFReleaseCause = NEFReleaseCause.uDMRelease; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary NEFReleaseCause_cHFRelease
 * @constant
 * @type {number}
 */
export
const NEFReleaseCause_cHFRelease: NEFReleaseCause = NEFReleaseCause.cHFRelease; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary cHFRelease
 * @constant
 * @type {number}
 */
export
const cHFRelease: NEFReleaseCause = NEFReleaseCause.cHFRelease; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary NEFReleaseCause_localConfigurationPolicy
 * @constant
 * @type {number}
 */
export
const NEFReleaseCause_localConfigurationPolicy: NEFReleaseCause = NEFReleaseCause.localConfigurationPolicy; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary localConfigurationPolicy
 * @constant
 * @type {number}
 */
export
const localConfigurationPolicy: NEFReleaseCause = NEFReleaseCause.localConfigurationPolicy; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary NEFReleaseCause_unknownCause
 * @constant
 * @type {number}
 */
export
const NEFReleaseCause_unknownCause: NEFReleaseCause = NEFReleaseCause.unknownCause; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unknownCause
 * @constant
 * @type {number}
 */
export
const unknownCause: NEFReleaseCause = NEFReleaseCause.unknownCause; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_NEFReleaseCause: $.ASN1Decoder<NEFReleaseCause> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) NEFReleaseCause
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_NEFReleaseCause (el: _Element): NEFReleaseCause {
    if (!_cached_decoder_for_NEFReleaseCause) { _cached_decoder_for_NEFReleaseCause = $._decodeEnumerated; }
    return _cached_decoder_for_NEFReleaseCause(el);
}

let _cached_encoder_for_NEFReleaseCause: $.ASN1Encoder<NEFReleaseCause> | null = null;

/**
 * @summary Encodes a(n) NEFReleaseCause into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NEFReleaseCause, encoded as an ASN.1 Element.
 */
export
function _encode_NEFReleaseCause (value: NEFReleaseCause, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_NEFReleaseCause) { _cached_encoder_for_NEFReleaseCause = $._encodeEnumerated; }
    return _cached_encoder_for_NEFReleaseCause(value, elGetter);
}


/* eslint-enable */
