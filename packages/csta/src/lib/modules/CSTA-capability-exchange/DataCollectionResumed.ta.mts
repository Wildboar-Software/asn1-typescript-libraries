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
 * @summary DataCollectionResumed
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DataCollectionResumed  ::=  BIT STRING
 * {     privateData                 ( 0),     -- optional parameters
 *     privateDataInAck             ( 1) }
 * ```
 */
export
type DataCollectionResumed = BIT_STRING;

/**
 * @summary DataCollectionResumed_privateData
 * @constant
 */
export
const DataCollectionResumed_privateData: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary privateData
 * @constant
 */
export
const privateData: number = DataCollectionResumed_privateData; /* SHORT_NAMED_BIT */

/**
 * @summary DataCollectionResumed_privateDataInAck
 * @constant
 */
export
const DataCollectionResumed_privateDataInAck: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary privateDataInAck
 * @constant
 */
export
const privateDataInAck: number = DataCollectionResumed_privateDataInAck; /* SHORT_NAMED_BIT */

let _cached_decoder_for_DataCollectionResumed: $.ASN1Decoder<DataCollectionResumed> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DataCollectionResumed
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DataCollectionResumed (el: _Element): DataCollectionResumed {
    if (!_cached_decoder_for_DataCollectionResumed) { _cached_decoder_for_DataCollectionResumed = $._decodeBitString; }
    return _cached_decoder_for_DataCollectionResumed(el);
}

let _cached_encoder_for_DataCollectionResumed: $.ASN1Encoder<DataCollectionResumed> | null = null;

/**
 * @summary Encodes a(n) DataCollectionResumed into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DataCollectionResumed, encoded as an ASN.1 Element.
 */
export
function _encode_DataCollectionResumed (value: DataCollectionResumed, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DataCollectionResumed) { _cached_encoder_for_DataCollectionResumed = $._encodeBitString; }
    return _cached_encoder_for_DataCollectionResumed(value, elGetter);
}


/* eslint-enable */
