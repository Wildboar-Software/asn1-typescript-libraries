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
 * @summary GlbErrors
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GlbErrors  ::=  INTEGER {
 *     other(0),
 *     unknownControlBlock(1),
 *     responseTooLarge(2),
 *     controlBlockConfigurationError(3) --,
 * --    ...
 * }
 * ```
 */
export
type GlbErrors = INTEGER;

/**
 * @summary GlbErrors_other
 * @constant
 * @type {number}
 */
export
const GlbErrors_other: GlbErrors = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary GlbErrors_other
 * @constant
 * @type {number}
 */
export
const other: GlbErrors = GlbErrors_other; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary GlbErrors_unknownControlBlock
 * @constant
 * @type {number}
 */
export
const GlbErrors_unknownControlBlock: GlbErrors = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary GlbErrors_unknownControlBlock
 * @constant
 * @type {number}
 */
export
const unknownControlBlock: GlbErrors = GlbErrors_unknownControlBlock; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary GlbErrors_responseTooLarge
 * @constant
 * @type {number}
 */
export
const GlbErrors_responseTooLarge: GlbErrors = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary GlbErrors_responseTooLarge
 * @constant
 * @type {number}
 */
export
const responseTooLarge: GlbErrors = GlbErrors_responseTooLarge; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary GlbErrors_controlBlockConfigurationError
 * @constant
 * @type {number}
 */
export
const GlbErrors_controlBlockConfigurationError: GlbErrors = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary GlbErrors_controlBlockConfigurationError
 * @constant
 * @type {number}
 */
export
const controlBlockConfigurationError: GlbErrors = GlbErrors_controlBlockConfigurationError; /* SHORT_NAMED_INTEGER_VALUE */

let _cached_decoder_for_GlbErrors: $.ASN1Decoder<GlbErrors> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) GlbErrors
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_GlbErrors (el: _Element): GlbErrors {
    if (!_cached_decoder_for_GlbErrors) { _cached_decoder_for_GlbErrors = $._decodeInteger; }
    return _cached_decoder_for_GlbErrors(el);
}

let _cached_encoder_for_GlbErrors: $.ASN1Encoder<GlbErrors> | null = null;

/**
 * @summary Encodes a(n) GlbErrors into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GlbErrors, encoded as an ASN.1 Element.
 */
export
function _encode_GlbErrors (value: GlbErrors, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_GlbErrors) { _cached_encoder_for_GlbErrors = $._encodeInteger; }
    return _cached_encoder_for_GlbErrors(value, elGetter);
}


/* eslint-enable */
