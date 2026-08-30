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
enum _enum_for_LCS_FormatIndicator {
    logicalName = 0,
    e_mailAddress = 1,
    msisdn = 2,
    url = 3,
    sipUrl = 4,
}

/**
 * @summary LCS_FormatIndicator
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * LCS-FormatIndicator  ::=  ENUMERATED {
 *     logicalName    (0),
 *     e-mailAddress    (1),
 *     msisdn    (2),
 *     url    (3),
 *     sipUrl    (4),
 *     ... }
 * ```
 * 
 * @enum {number}
 */
export
type LCS_FormatIndicator = _enum_for_LCS_FormatIndicator | ENUMERATED;

/**
 * @summary LCS_FormatIndicator_logicalName
 * @constant
 * @type {number}
 */
export
const LCS_FormatIndicator_logicalName: LCS_FormatIndicator = 0; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary logicalName
 * @constant
 * @type {number}
 */
export
const logicalName: LCS_FormatIndicator = LCS_FormatIndicator_logicalName; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary LCS_FormatIndicator_e_mailAddress
 * @constant
 * @type {number}
 */
export
const LCS_FormatIndicator_e_mailAddress: LCS_FormatIndicator = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary e_mailAddress
 * @constant
 * @type {number}
 */
export
const e_mailAddress: LCS_FormatIndicator = LCS_FormatIndicator_e_mailAddress; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary LCS_FormatIndicator_msisdn
 * @constant
 * @type {number}
 */
export
const LCS_FormatIndicator_msisdn: LCS_FormatIndicator = 2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary msisdn
 * @constant
 * @type {number}
 */
export
const msisdn: LCS_FormatIndicator = LCS_FormatIndicator_msisdn; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary LCS_FormatIndicator_url
 * @constant
 * @type {number}
 */
export
const LCS_FormatIndicator_url: LCS_FormatIndicator = 3; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary url
 * @constant
 * @type {number}
 */
export
const url: LCS_FormatIndicator = LCS_FormatIndicator_url; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary LCS_FormatIndicator_sipUrl
 * @constant
 * @type {number}
 */
export
const LCS_FormatIndicator_sipUrl: LCS_FormatIndicator = 4; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary sipUrl
 * @constant
 * @type {number}
 */
export
const sipUrl: LCS_FormatIndicator = LCS_FormatIndicator_sipUrl; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_LCS_FormatIndicator: $.ASN1Decoder<LCS_FormatIndicator> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) LCS_FormatIndicator
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_LCS_FormatIndicator (el: _Element): LCS_FormatIndicator {
    if (!_cached_decoder_for_LCS_FormatIndicator) { _cached_decoder_for_LCS_FormatIndicator = $._decodeEnumerated; }
    return _cached_decoder_for_LCS_FormatIndicator(el);
}

let _cached_encoder_for_LCS_FormatIndicator: $.ASN1Encoder<LCS_FormatIndicator> | null = null;

/**
 * @summary Encodes a(n) LCS_FormatIndicator into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The LCS_FormatIndicator, encoded as an ASN.1 Element.
 */
export
function _encode_LCS_FormatIndicator (value: LCS_FormatIndicator, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_LCS_FormatIndicator) { _cached_encoder_for_LCS_FormatIndicator = $._encodeEnumerated; }
    return _cached_encoder_for_LCS_FormatIndicator(value, elGetter);
}


/* eslint-enable */
