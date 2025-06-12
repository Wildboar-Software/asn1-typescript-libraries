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



/* START_OF_SYMBOL_DEFINITION _enum_for_SourceIndicator */
/**
 * @summary SourceIndicator
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SourceIndicator  ::=  ENUMERATED {
 *   resourceOperation(0), managementOperation(1), unknown(2)}
 * ```@enum {number}
 */
export
enum _enum_for_SourceIndicator {
    resourceOperation = 0,
    managementOperation = 1,
    unknown = 2,
}
/* END_OF_SYMBOL_DEFINITION _enum_for_SourceIndicator */

/* START_OF_SYMBOL_DEFINITION SourceIndicator */
/**
 * @summary SourceIndicator
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SourceIndicator  ::=  ENUMERATED {
 *   resourceOperation(0), managementOperation(1), unknown(2)}
 * ```@enum {number}
 */
export
type SourceIndicator = _enum_for_SourceIndicator;
/* END_OF_SYMBOL_DEFINITION SourceIndicator */

/* START_OF_SYMBOL_DEFINITION SourceIndicator */
/**
 * @summary SourceIndicator
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SourceIndicator  ::=  ENUMERATED {
 *   resourceOperation(0), managementOperation(1), unknown(2)}
 * ```@enum {number}
 */
export
const SourceIndicator = _enum_for_SourceIndicator;
/* END_OF_SYMBOL_DEFINITION SourceIndicator */

/* START_OF_SYMBOL_DEFINITION SourceIndicator_resourceOperation */
/**
 * @summary SourceIndicator_resourceOperation
 * @constant
 * @type {number}
 */
export
const SourceIndicator_resourceOperation: SourceIndicator = SourceIndicator.resourceOperation; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION SourceIndicator_resourceOperation */

/* START_OF_SYMBOL_DEFINITION resourceOperation */
/**
 * @summary resourceOperation
 * @constant
 * @type {number}
 */
export
const resourceOperation: SourceIndicator = SourceIndicator.resourceOperation; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION resourceOperation */

/* START_OF_SYMBOL_DEFINITION SourceIndicator_managementOperation */
/**
 * @summary SourceIndicator_managementOperation
 * @constant
 * @type {number}
 */
export
const SourceIndicator_managementOperation: SourceIndicator = SourceIndicator.managementOperation; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION SourceIndicator_managementOperation */

/* START_OF_SYMBOL_DEFINITION managementOperation */
/**
 * @summary managementOperation
 * @constant
 * @type {number}
 */
export
const managementOperation: SourceIndicator = SourceIndicator.managementOperation; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION managementOperation */

/* START_OF_SYMBOL_DEFINITION SourceIndicator_unknown */
/**
 * @summary SourceIndicator_unknown
 * @constant
 * @type {number}
 */
export
const SourceIndicator_unknown: SourceIndicator = SourceIndicator.unknown; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION SourceIndicator_unknown */

/* START_OF_SYMBOL_DEFINITION unknown */
/**
 * @summary unknown
 * @constant
 * @type {number}
 */
export
const unknown: SourceIndicator = SourceIndicator.unknown; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION unknown */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_SourceIndicator */
let _cached_decoder_for_SourceIndicator: $.ASN1Decoder<SourceIndicator> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_SourceIndicator */

/* START_OF_SYMBOL_DEFINITION _decode_SourceIndicator */
/**
 * @summary Decodes an ASN.1 element into a(n) SourceIndicator
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SourceIndicator} The decoded data structure.
 */
export
function _decode_SourceIndicator (el: _Element) {
    if (!_cached_decoder_for_SourceIndicator) { _cached_decoder_for_SourceIndicator = $._decodeEnumerated; }
    return _cached_decoder_for_SourceIndicator(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_SourceIndicator */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_SourceIndicator */
let _cached_encoder_for_SourceIndicator: $.ASN1Encoder<SourceIndicator> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_SourceIndicator */

/* START_OF_SYMBOL_DEFINITION _encode_SourceIndicator */
/**
 * @summary Encodes a(n) SourceIndicator into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SourceIndicator, encoded as an ASN.1 Element.
 */
export
function _encode_SourceIndicator (value: SourceIndicator, elGetter: $.ASN1Encoder<SourceIndicator>) {
    if (!_cached_encoder_for_SourceIndicator) { _cached_encoder_for_SourceIndicator = $._encodeEnumerated; }
    return _cached_encoder_for_SourceIndicator(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_SourceIndicator */

/* eslint-enable */
