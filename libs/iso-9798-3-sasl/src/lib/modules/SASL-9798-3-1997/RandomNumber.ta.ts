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



/* START_OF_SYMBOL_DEFINITION RandomNumber */
/**
 * @summary RandomNumber
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RandomNumber  ::=  OCTET STRING (SIZE(8..MAX))
 * ```
 */
export
type RandomNumber = OCTET_STRING; // OctetStringType
/* END_OF_SYMBOL_DEFINITION RandomNumber */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_RandomNumber */
let _cached_decoder_for_RandomNumber: $.ASN1Decoder<RandomNumber> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_RandomNumber */

/* START_OF_SYMBOL_DEFINITION _decode_RandomNumber */
/**
 * @summary Decodes an ASN.1 element into a(n) RandomNumber
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {RandomNumber} The decoded data structure.
 */
export
function _decode_RandomNumber (el: _Element) {
    if (!_cached_decoder_for_RandomNumber) { _cached_decoder_for_RandomNumber = $._decodeOctetString; }
    return _cached_decoder_for_RandomNumber(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_RandomNumber */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_RandomNumber */
let _cached_encoder_for_RandomNumber: $.ASN1Encoder<RandomNumber> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_RandomNumber */

/* START_OF_SYMBOL_DEFINITION _encode_RandomNumber */
/**
 * @summary Encodes a(n) RandomNumber into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RandomNumber, encoded as an ASN.1 Element.
 */
export
function _encode_RandomNumber (value: RandomNumber, elGetter: $.ASN1Encoder<RandomNumber>) {
    if (!_cached_encoder_for_RandomNumber) { _cached_encoder_for_RandomNumber = $._encodeOctetString; }
    return _cached_encoder_for_RandomNumber(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_RandomNumber */

/* eslint-enable */
