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



export
enum _enum_for_ErrorControl_Item_protocolNegotiation {
    disabled = 0,
    lapm = 1,
    v42annexA = 2,
}

/**
 * @summary ErrorControl_Item_protocolNegotiation
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ErrorControl-Item-protocolNegotiation ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @enum {number}
 */
export
type ErrorControl_Item_protocolNegotiation = _enum_for_ErrorControl_Item_protocolNegotiation | ENUMERATED;

/**
 * @summary ErrorControl_Item_protocolNegotiation_disabled
 * @constant
 * @type {number}
 */
export
const ErrorControl_Item_protocolNegotiation_disabled: ErrorControl_Item_protocolNegotiation = 0; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary disabled
 * @constant
 * @type {number}
 */
export
const disabled: ErrorControl_Item_protocolNegotiation = ErrorControl_Item_protocolNegotiation_disabled; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ErrorControl_Item_protocolNegotiation_lapm
 * @constant
 * @type {number}
 */
export
const ErrorControl_Item_protocolNegotiation_lapm: ErrorControl_Item_protocolNegotiation = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary lapm
 * @constant
 * @type {number}
 */
export
const lapm: ErrorControl_Item_protocolNegotiation = ErrorControl_Item_protocolNegotiation_lapm; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ErrorControl_Item_protocolNegotiation_v42annexA
 * @constant
 * @type {number}
 */
export
const ErrorControl_Item_protocolNegotiation_v42annexA: ErrorControl_Item_protocolNegotiation = 2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary v42annexA
 * @constant
 * @type {number}
 */
export
const v42annexA: ErrorControl_Item_protocolNegotiation = ErrorControl_Item_protocolNegotiation_v42annexA; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_ErrorControl_Item_protocolNegotiation: $.ASN1Decoder<ErrorControl_Item_protocolNegotiation> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ErrorControl_Item_protocolNegotiation
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ErrorControl_Item_protocolNegotiation (el: _Element): ErrorControl_Item_protocolNegotiation {
    if (!_cached_decoder_for_ErrorControl_Item_protocolNegotiation) { _cached_decoder_for_ErrorControl_Item_protocolNegotiation = $._decodeEnumerated; }
    return _cached_decoder_for_ErrorControl_Item_protocolNegotiation(el);
}

let _cached_encoder_for_ErrorControl_Item_protocolNegotiation: $.ASN1Encoder<ErrorControl_Item_protocolNegotiation> | null = null;

/**
 * @summary Encodes a(n) ErrorControl_Item_protocolNegotiation into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ErrorControl_Item_protocolNegotiation, encoded as an ASN.1 Element.
 */
export
function _encode_ErrorControl_Item_protocolNegotiation (value: ErrorControl_Item_protocolNegotiation, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ErrorControl_Item_protocolNegotiation) { _cached_encoder_for_ErrorControl_Item_protocolNegotiation = $._encodeEnumerated; }
    return _cached_encoder_for_ErrorControl_Item_protocolNegotiation(value, elGetter);
}


/* eslint-enable */
