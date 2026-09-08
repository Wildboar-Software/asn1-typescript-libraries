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
 * @summary EscapeRegisterAbort
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EscapeRegisterAbort  ::=  BIT STRING
 * {     privateData                 ( 0),     -- optional parameters
 *     privateDataInAck             ( 1) }
 * ```
 */
export
type EscapeRegisterAbort = BIT_STRING;

/**
 * @summary EscapeRegisterAbort_privateData
 * @constant
 */
export
const EscapeRegisterAbort_privateData: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary privateData
 * @constant
 */
export
const privateData: number = EscapeRegisterAbort_privateData; /* SHORT_NAMED_BIT */

/**
 * @summary EscapeRegisterAbort_privateDataInAck
 * @constant
 */
export
const EscapeRegisterAbort_privateDataInAck: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary privateDataInAck
 * @constant
 */
export
const privateDataInAck: number = EscapeRegisterAbort_privateDataInAck; /* SHORT_NAMED_BIT */

let _cached_decoder_for_EscapeRegisterAbort: $.ASN1Decoder<EscapeRegisterAbort> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EscapeRegisterAbort
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EscapeRegisterAbort (el: _Element): EscapeRegisterAbort {
    if (!_cached_decoder_for_EscapeRegisterAbort) { _cached_decoder_for_EscapeRegisterAbort = $._decodeBitString; }
    return _cached_decoder_for_EscapeRegisterAbort(el);
}

let _cached_encoder_for_EscapeRegisterAbort: $.ASN1Encoder<EscapeRegisterAbort> | null = null;

/**
 * @summary Encodes a(n) EscapeRegisterAbort into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EscapeRegisterAbort, encoded as an ASN.1 Element.
 */
export
function _encode_EscapeRegisterAbort (value: EscapeRegisterAbort, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EscapeRegisterAbort) { _cached_encoder_for_EscapeRegisterAbort = $._encodeBitString; }
    return _cached_encoder_for_EscapeRegisterAbort(value, elGetter);
}


/* eslint-enable */
