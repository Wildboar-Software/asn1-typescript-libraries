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
 * @summary ISR_Information
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ISR-Information ::=  BIT STRING {
 *     updateLocation  (0),
 *     cancelSGSN  (1),
 *     initialAttachIndicator  (2)} (SIZE (3..8))
 * ```
 */
export
type ISR_Information = BIT_STRING;

/**
 * @summary ISR_Information_updateLocation
 * @constant
 */
export
const ISR_Information_updateLocation: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary updateLocation
 * @constant
 */
export
const updateLocation: number = ISR_Information_updateLocation; /* SHORT_NAMED_BIT */

/**
 * @summary ISR_Information_cancelSGSN
 * @constant
 */
export
const ISR_Information_cancelSGSN: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary cancelSGSN
 * @constant
 */
export
const cancelSGSN: number = ISR_Information_cancelSGSN; /* SHORT_NAMED_BIT */

/**
 * @summary ISR_Information_initialAttachIndicator
 * @constant
 */
export
const ISR_Information_initialAttachIndicator: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary initialAttachIndicator
 * @constant
 */
export
const initialAttachIndicator: number = ISR_Information_initialAttachIndicator; /* SHORT_NAMED_BIT */

let _cached_decoder_for_ISR_Information: $.ASN1Decoder<ISR_Information> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ISR_Information
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ISR_Information (el: _Element): ISR_Information {
    if (!_cached_decoder_for_ISR_Information) { _cached_decoder_for_ISR_Information = $._decodeBitString; }
    return _cached_decoder_for_ISR_Information(el);
}

let _cached_encoder_for_ISR_Information: $.ASN1Encoder<ISR_Information> | null = null;

/**
 * @summary Encodes a(n) ISR_Information into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ISR_Information, encoded as an ASN.1 Element.
 */
export
function _encode_ISR_Information (value: ISR_Information, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ISR_Information) { _cached_encoder_for_ISR_Information = $._encodeBitString; }
    return _cached_encoder_for_ISR_Information(value, elGetter);
}


/* eslint-enable */
