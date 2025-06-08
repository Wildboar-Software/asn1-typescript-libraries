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
import * as $ from "asn1-ts/dist/node/functional";



/* START_OF_SYMBOL_DEFINITION _enum_for_TrendIndication */
/**
 * @summary TrendIndication
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TrendIndication  ::=  ENUMERATED {lessSevere(0), noChange(1), moreSevere(2)}
 * ```@enum {number}
 */
export
enum _enum_for_TrendIndication {
    lessSevere = 0,
    noChange = 1,
    moreSevere = 2,
}
/* END_OF_SYMBOL_DEFINITION _enum_for_TrendIndication */

/* START_OF_SYMBOL_DEFINITION TrendIndication */
/**
 * @summary TrendIndication
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TrendIndication  ::=  ENUMERATED {lessSevere(0), noChange(1), moreSevere(2)}
 * ```@enum {number}
 */
export
type TrendIndication = _enum_for_TrendIndication;
/* END_OF_SYMBOL_DEFINITION TrendIndication */

/* START_OF_SYMBOL_DEFINITION TrendIndication */
/**
 * @summary TrendIndication
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TrendIndication  ::=  ENUMERATED {lessSevere(0), noChange(1), moreSevere(2)}
 * ```@enum {number}
 */
export
const TrendIndication = _enum_for_TrendIndication;
/* END_OF_SYMBOL_DEFINITION TrendIndication */

/* START_OF_SYMBOL_DEFINITION TrendIndication_lessSevere */
/**
 * @summary TrendIndication_lessSevere
 * @constant
 * @type {number}
 */
export
const TrendIndication_lessSevere: TrendIndication = TrendIndication.lessSevere; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION TrendIndication_lessSevere */

/* START_OF_SYMBOL_DEFINITION lessSevere */
/**
 * @summary lessSevere
 * @constant
 * @type {number}
 */
export
const lessSevere: TrendIndication = TrendIndication.lessSevere; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION lessSevere */

/* START_OF_SYMBOL_DEFINITION TrendIndication_noChange */
/**
 * @summary TrendIndication_noChange
 * @constant
 * @type {number}
 */
export
const TrendIndication_noChange: TrendIndication = TrendIndication.noChange; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION TrendIndication_noChange */

/* START_OF_SYMBOL_DEFINITION noChange */
/**
 * @summary noChange
 * @constant
 * @type {number}
 */
export
const noChange: TrendIndication = TrendIndication.noChange; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION noChange */

/* START_OF_SYMBOL_DEFINITION TrendIndication_moreSevere */
/**
 * @summary TrendIndication_moreSevere
 * @constant
 * @type {number}
 */
export
const TrendIndication_moreSevere: TrendIndication = TrendIndication.moreSevere; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION TrendIndication_moreSevere */

/* START_OF_SYMBOL_DEFINITION moreSevere */
/**
 * @summary moreSevere
 * @constant
 * @type {number}
 */
export
const moreSevere: TrendIndication = TrendIndication.moreSevere; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION moreSevere */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_TrendIndication */
let _cached_decoder_for_TrendIndication: $.ASN1Decoder<TrendIndication> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_TrendIndication */

/* START_OF_SYMBOL_DEFINITION _decode_TrendIndication */
/**
 * @summary Decodes an ASN.1 element into a(n) TrendIndication
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TrendIndication} The decoded data structure.
 */
export
function _decode_TrendIndication (el: _Element) {
    if (!_cached_decoder_for_TrendIndication) { _cached_decoder_for_TrendIndication = $._decodeEnumerated; }
    return _cached_decoder_for_TrendIndication(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_TrendIndication */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_TrendIndication */
let _cached_encoder_for_TrendIndication: $.ASN1Encoder<TrendIndication> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_TrendIndication */

/* START_OF_SYMBOL_DEFINITION _encode_TrendIndication */
/**
 * @summary Encodes a(n) TrendIndication into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TrendIndication, encoded as an ASN.1 Element.
 */
export
function _encode_TrendIndication (value: TrendIndication, elGetter: $.ASN1Encoder<TrendIndication>) {
    if (!_cached_encoder_for_TrendIndication) { _cached_encoder_for_TrendIndication = $._encodeEnumerated; }
    return _cached_encoder_for_TrendIndication(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_TrendIndication */

/* eslint-enable */
