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



/* START_OF_SYMBOL_DEFINITION Sap1Address */
/**
 * @summary Sap1Address
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Sap1Address  ::=  INTEGER
 * ```
 */
export
type Sap1Address = INTEGER;
/* END_OF_SYMBOL_DEFINITION Sap1Address */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Sap1Address */
let _cached_decoder_for_Sap1Address: $.ASN1Decoder<Sap1Address> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Sap1Address */

/* START_OF_SYMBOL_DEFINITION _decode_Sap1Address */
/**
 * @summary Decodes an ASN.1 element into a(n) Sap1Address
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Sap1Address} The decoded data structure.
 */
export
function _decode_Sap1Address (el: _Element) {
    if (!_cached_decoder_for_Sap1Address) { _cached_decoder_for_Sap1Address = $._decodeInteger; }
    return _cached_decoder_for_Sap1Address(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Sap1Address */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Sap1Address */
let _cached_encoder_for_Sap1Address: $.ASN1Encoder<Sap1Address> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Sap1Address */

/* START_OF_SYMBOL_DEFINITION _encode_Sap1Address */
/**
 * @summary Encodes a(n) Sap1Address into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Sap1Address, encoded as an ASN.1 Element.
 */
export
function _encode_Sap1Address (value: Sap1Address, elGetter: $.ASN1Encoder<Sap1Address>) {
    if (!_cached_encoder_for_Sap1Address) { _cached_encoder_for_Sap1Address = $._encodeInteger; }
    return _cached_encoder_for_Sap1Address(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Sap1Address */

/* eslint-enable */
