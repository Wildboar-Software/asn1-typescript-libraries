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
 * @summary IgnoreUnsupportedParameters
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IgnoreUnsupportedParameters  ::=  ENUMERATED
 * {     ignoreParameters             ( 0),
 *     rejectMessage                 ( 1) }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_IgnoreUnsupportedParameters {
    ignoreParameters = 0,
    rejectMessage = 1,
}

/**
 * @summary IgnoreUnsupportedParameters
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IgnoreUnsupportedParameters  ::=  ENUMERATED
 * {     ignoreParameters             ( 0),
 *     rejectMessage                 ( 1) }
 * ```
 * 
 * @enum {number}
 */
export
type IgnoreUnsupportedParameters = _enum_for_IgnoreUnsupportedParameters;

/**
 * @summary IgnoreUnsupportedParameters
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IgnoreUnsupportedParameters  ::=  ENUMERATED
 * {     ignoreParameters             ( 0),
 *     rejectMessage                 ( 1) }
 * ```
 * 
 * @enum {number}
 */
export
const IgnoreUnsupportedParameters = _enum_for_IgnoreUnsupportedParameters;

/**
 * @summary IgnoreUnsupportedParameters_ignoreParameters
 * @constant
 * @type {number}
 */
export
const IgnoreUnsupportedParameters_ignoreParameters: IgnoreUnsupportedParameters = IgnoreUnsupportedParameters.ignoreParameters; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary ignoreParameters
 * @constant
 * @type {number}
 */
export
const ignoreParameters: IgnoreUnsupportedParameters = IgnoreUnsupportedParameters.ignoreParameters; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary IgnoreUnsupportedParameters_rejectMessage
 * @constant
 * @type {number}
 */
export
const IgnoreUnsupportedParameters_rejectMessage: IgnoreUnsupportedParameters = IgnoreUnsupportedParameters.rejectMessage; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary rejectMessage
 * @constant
 * @type {number}
 */
export
const rejectMessage: IgnoreUnsupportedParameters = IgnoreUnsupportedParameters.rejectMessage; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_IgnoreUnsupportedParameters: $.ASN1Decoder<IgnoreUnsupportedParameters> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) IgnoreUnsupportedParameters
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_IgnoreUnsupportedParameters (el: _Element): IgnoreUnsupportedParameters {
    if (!_cached_decoder_for_IgnoreUnsupportedParameters) { _cached_decoder_for_IgnoreUnsupportedParameters = $._decodeEnumerated; }
    return _cached_decoder_for_IgnoreUnsupportedParameters(el);
}

let _cached_encoder_for_IgnoreUnsupportedParameters: $.ASN1Encoder<IgnoreUnsupportedParameters> | null = null;

/**
 * @summary Encodes a(n) IgnoreUnsupportedParameters into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IgnoreUnsupportedParameters, encoded as an ASN.1 Element.
 */
export
function _encode_IgnoreUnsupportedParameters (value: IgnoreUnsupportedParameters, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_IgnoreUnsupportedParameters) { _cached_encoder_for_IgnoreUnsupportedParameters = $._encodeEnumerated; }
    return _cached_encoder_for_IgnoreUnsupportedParameters(value, elGetter);
}


/* eslint-enable */
