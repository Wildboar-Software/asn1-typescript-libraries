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
 * @summary DeferredLocationEventType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DeferredLocationEventType  ::=  BIT STRING {
 *     msAvailable    (0) ,
 *     enteringIntoArea    (1),
 *     leavingFromArea    (2),
 *     beingInsideArea    (3) ,
 *     periodicLDR    (4)  } (SIZE (1..16))
 * ```
 */
export
type DeferredLocationEventType = BIT_STRING;

/**
 * @summary DeferredLocationEventType_msAvailable
 * @constant
 */
export
const DeferredLocationEventType_msAvailable: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary msAvailable
 * @constant
 */
export
const msAvailable: number = DeferredLocationEventType_msAvailable; /* SHORT_NAMED_BIT */

/**
 * @summary DeferredLocationEventType_enteringIntoArea
 * @constant
 */
export
const DeferredLocationEventType_enteringIntoArea: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary enteringIntoArea
 * @constant
 */
export
const enteringIntoArea: number = DeferredLocationEventType_enteringIntoArea; /* SHORT_NAMED_BIT */

/**
 * @summary DeferredLocationEventType_leavingFromArea
 * @constant
 */
export
const DeferredLocationEventType_leavingFromArea: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary leavingFromArea
 * @constant
 */
export
const leavingFromArea: number = DeferredLocationEventType_leavingFromArea; /* SHORT_NAMED_BIT */

/**
 * @summary DeferredLocationEventType_beingInsideArea
 * @constant
 */
export
const DeferredLocationEventType_beingInsideArea: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary beingInsideArea
 * @constant
 */
export
const beingInsideArea: number = DeferredLocationEventType_beingInsideArea; /* SHORT_NAMED_BIT */

/**
 * @summary DeferredLocationEventType_periodicLDR
 * @constant
 */
export
const DeferredLocationEventType_periodicLDR: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary periodicLDR
 * @constant
 */
export
const periodicLDR: number = DeferredLocationEventType_periodicLDR; /* SHORT_NAMED_BIT */

let _cached_decoder_for_DeferredLocationEventType: $.ASN1Decoder<DeferredLocationEventType> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DeferredLocationEventType
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DeferredLocationEventType (el: _Element): DeferredLocationEventType {
    if (!_cached_decoder_for_DeferredLocationEventType) { _cached_decoder_for_DeferredLocationEventType = $._decodeBitString; }
    return _cached_decoder_for_DeferredLocationEventType(el);
}

let _cached_encoder_for_DeferredLocationEventType: $.ASN1Encoder<DeferredLocationEventType> | null = null;

/**
 * @summary Encodes a(n) DeferredLocationEventType into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DeferredLocationEventType, encoded as an ASN.1 Element.
 */
export
function _encode_DeferredLocationEventType (value: DeferredLocationEventType, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DeferredLocationEventType) { _cached_encoder_for_DeferredLocationEventType = $._encodeBitString; }
    return _cached_encoder_for_DeferredLocationEventType(value, elGetter);
}


/* eslint-enable */
