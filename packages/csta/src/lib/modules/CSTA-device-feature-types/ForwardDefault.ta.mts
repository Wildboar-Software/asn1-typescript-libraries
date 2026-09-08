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
 * @summary ForwardDefault
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ForwardDefault  ::=  ENUMERATED
 * {     forwardingTypeAndForwardDN     ( 0),
 *     forwardingType             ( 1),
 *     forwardDN             ( 2) }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_ForwardDefault {
    forwardingTypeAndForwardDN = 0,
    forwardingType = 1,
    forwardDN = 2,
}

/**
 * @summary ForwardDefault
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ForwardDefault  ::=  ENUMERATED
 * {     forwardingTypeAndForwardDN     ( 0),
 *     forwardingType             ( 1),
 *     forwardDN             ( 2) }
 * ```
 * 
 * @enum {number}
 */
export
type ForwardDefault = _enum_for_ForwardDefault;

/**
 * @summary ForwardDefault
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ForwardDefault  ::=  ENUMERATED
 * {     forwardingTypeAndForwardDN     ( 0),
 *     forwardingType             ( 1),
 *     forwardDN             ( 2) }
 * ```
 * 
 * @enum {number}
 */
export
const ForwardDefault = _enum_for_ForwardDefault;

/**
 * @summary ForwardDefault_forwardingTypeAndForwardDN
 * @constant
 * @type {number}
 */
export
const ForwardDefault_forwardingTypeAndForwardDN: ForwardDefault = ForwardDefault.forwardingTypeAndForwardDN; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary forwardingTypeAndForwardDN
 * @constant
 * @type {number}
 */
export
const forwardingTypeAndForwardDN: ForwardDefault = ForwardDefault.forwardingTypeAndForwardDN; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ForwardDefault_forwardingType
 * @constant
 * @type {number}
 */
export
const ForwardDefault_forwardingType: ForwardDefault = ForwardDefault.forwardingType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary forwardingType
 * @constant
 * @type {number}
 */
export
const forwardingType: ForwardDefault = ForwardDefault.forwardingType; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ForwardDefault_forwardDN
 * @constant
 * @type {number}
 */
export
const ForwardDefault_forwardDN: ForwardDefault = ForwardDefault.forwardDN; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary forwardDN
 * @constant
 * @type {number}
 */
export
const forwardDN: ForwardDefault = ForwardDefault.forwardDN; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_ForwardDefault: $.ASN1Decoder<ForwardDefault> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ForwardDefault
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ForwardDefault (el: _Element): ForwardDefault {
    if (!_cached_decoder_for_ForwardDefault) { _cached_decoder_for_ForwardDefault = $._decodeEnumerated; }
    return _cached_decoder_for_ForwardDefault(el);
}

let _cached_encoder_for_ForwardDefault: $.ASN1Encoder<ForwardDefault> | null = null;

/**
 * @summary Encodes a(n) ForwardDefault into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ForwardDefault, encoded as an ASN.1 Element.
 */
export
function _encode_ForwardDefault (value: ForwardDefault, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ForwardDefault) { _cached_encoder_for_ForwardDefault = $._encodeEnumerated; }
    return _cached_encoder_for_ForwardDefault(value, elGetter);
}


/* eslint-enable */
