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



/**
 * @summary ConsultOptions
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ConsultOptions  ::=  ENUMERATED
 * {     unrestricted                     ( 0),
 *     consultOnly                     ( 1),
 *     transferOnly                     ( 2),
 *     conferenceOnly                     ( 3) }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_ConsultOptions {
    unrestricted = 0,
    consultOnly = 1,
    transferOnly = 2,
    conferenceOnly = 3,
}

/**
 * @summary ConsultOptions
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ConsultOptions  ::=  ENUMERATED
 * {     unrestricted                     ( 0),
 *     consultOnly                     ( 1),
 *     transferOnly                     ( 2),
 *     conferenceOnly                     ( 3) }
 * ```
 * 
 * @enum {number}
 */
export
type ConsultOptions = _enum_for_ConsultOptions;

/**
 * @summary ConsultOptions
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ConsultOptions  ::=  ENUMERATED
 * {     unrestricted                     ( 0),
 *     consultOnly                     ( 1),
 *     transferOnly                     ( 2),
 *     conferenceOnly                     ( 3) }
 * ```
 * 
 * @enum {number}
 */
export
const ConsultOptions = _enum_for_ConsultOptions;

/**
 * @summary ConsultOptions_unrestricted
 * @constant
 * @type {number}
 */
export
const ConsultOptions_unrestricted: ConsultOptions = ConsultOptions.unrestricted; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unrestricted
 * @constant
 * @type {number}
 */
export
const unrestricted: ConsultOptions = ConsultOptions.unrestricted; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ConsultOptions_consultOnly
 * @constant
 * @type {number}
 */
export
const ConsultOptions_consultOnly: ConsultOptions = ConsultOptions.consultOnly; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary consultOnly
 * @constant
 * @type {number}
 */
export
const consultOnly: ConsultOptions = ConsultOptions.consultOnly; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ConsultOptions_transferOnly
 * @constant
 * @type {number}
 */
export
const ConsultOptions_transferOnly: ConsultOptions = ConsultOptions.transferOnly; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary transferOnly
 * @constant
 * @type {number}
 */
export
const transferOnly: ConsultOptions = ConsultOptions.transferOnly; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ConsultOptions_conferenceOnly
 * @constant
 * @type {number}
 */
export
const ConsultOptions_conferenceOnly: ConsultOptions = ConsultOptions.conferenceOnly; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary conferenceOnly
 * @constant
 * @type {number}
 */
export
const conferenceOnly: ConsultOptions = ConsultOptions.conferenceOnly; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_ConsultOptions: $.ASN1Decoder<ConsultOptions> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ConsultOptions
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ConsultOptions (el: _Element): ConsultOptions {
    if (!_cached_decoder_for_ConsultOptions) { _cached_decoder_for_ConsultOptions = $._decodeEnumerated; }
    return _cached_decoder_for_ConsultOptions(el);
}

let _cached_encoder_for_ConsultOptions: $.ASN1Encoder<ConsultOptions> | null = null;

/**
 * @summary Encodes a(n) ConsultOptions into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ConsultOptions, encoded as an ASN.1 Element.
 */
export
function _encode_ConsultOptions (value: ConsultOptions, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ConsultOptions) { _cached_encoder_for_ConsultOptions = $._encodeEnumerated; }
    return _cached_encoder_for_ConsultOptions(value, elGetter);
}


/* eslint-enable */
