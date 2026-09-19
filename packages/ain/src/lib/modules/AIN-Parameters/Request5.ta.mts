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
 * @summary Request5
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Request5  ::=  BIT STRING{
 *         activationStatus(0),
 *         forwardingDn(1),
 *         entireList(2),
 *         listSize(3)
 *     }
 * ```
 */
export
type Request5 = BIT_STRING;

/**
 * @summary Request5_activationStatus
 * @constant
 */
export
const Request5_activationStatus: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary activationStatus
 * @constant
 */
export
const activationStatus: number = Request5_activationStatus; /* SHORT_NAMED_BIT */

/**
 * @summary Request5_forwardingDn
 * @constant
 */
export
const Request5_forwardingDn: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary forwardingDn
 * @constant
 */
export
const forwardingDn: number = Request5_forwardingDn; /* SHORT_NAMED_BIT */

/**
 * @summary Request5_entireList
 * @constant
 */
export
const Request5_entireList: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary entireList
 * @constant
 */
export
const entireList: number = Request5_entireList; /* SHORT_NAMED_BIT */

/**
 * @summary Request5_listSize
 * @constant
 */
export
const Request5_listSize: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary listSize
 * @constant
 */
export
const listSize: number = Request5_listSize; /* SHORT_NAMED_BIT */

let _cached_decoder_for_Request5: $.ASN1Decoder<Request5> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Request5
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Request5 (el: _Element): Request5 {
    if (!_cached_decoder_for_Request5) { _cached_decoder_for_Request5 = $._decodeBitString; }
    return _cached_decoder_for_Request5(el);
}

let _cached_encoder_for_Request5: $.ASN1Encoder<Request5> | null = null;

/**
 * @summary Encodes a(n) Request5 into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Request5, encoded as an ASN.1 Element.
 */
export
function _encode_Request5 (value: Request5, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Request5) { _cached_encoder_for_Request5 = $._encodeBitString; }
    return _cached_encoder_for_Request5(value, elGetter);
}


/* eslint-enable */
