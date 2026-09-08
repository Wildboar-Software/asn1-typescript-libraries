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
 * @summary BackInService
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * BackInService  ::=  BIT STRING
 * {     cause                     ( 0),     -- optional parameters
 *     privateData                 ( 1) }
 * ```
 */
export
type BackInService = BIT_STRING;

/**
 * @summary BackInService_cause
 * @constant
 */
export
const BackInService_cause: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary cause
 * @constant
 */
export
const cause: number = BackInService_cause; /* SHORT_NAMED_BIT */

/**
 * @summary BackInService_privateData
 * @constant
 */
export
const BackInService_privateData: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary privateData
 * @constant
 */
export
const privateData: number = BackInService_privateData; /* SHORT_NAMED_BIT */

let _cached_decoder_for_BackInService: $.ASN1Decoder<BackInService> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) BackInService
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_BackInService (el: _Element): BackInService {
    if (!_cached_decoder_for_BackInService) { _cached_decoder_for_BackInService = $._decodeBitString; }
    return _cached_decoder_for_BackInService(el);
}

let _cached_encoder_for_BackInService: $.ASN1Encoder<BackInService> | null = null;

/**
 * @summary Encodes a(n) BackInService into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BackInService, encoded as an ASN.1 Element.
 */
export
function _encode_BackInService (value: BackInService, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_BackInService) { _cached_encoder_for_BackInService = $._encodeBitString; }
    return _cached_encoder_for_BackInService(value, elGetter);
}


/* eslint-enable */
