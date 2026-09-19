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



export
enum _enum_for_ImminentPerilInd {
    request = 1,
    response = 2,
    cancel = 3,
}

/**
 * @summary ImminentPerilInd
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ImminentPerilInd  ::=  ENUMERATED
 * {
 *  request (1),
 *  response (2),
 *  cancel (3),
 *  -- when the MCPTT Imminent Peril Group Call Request, Response or Cancel is detected
 * ...
 * }
 * ```
 * 
 * @enum {number}
 */
export
type ImminentPerilInd = _enum_for_ImminentPerilInd | ENUMERATED;

/**
 * @summary ImminentPerilInd_request
 * @constant
 * @type {number}
 */
export
const ImminentPerilInd_request: ImminentPerilInd = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary request
 * @constant
 * @type {number}
 */
export
const request: ImminentPerilInd = ImminentPerilInd_request; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ImminentPerilInd_response
 * @constant
 * @type {number}
 */
export
const ImminentPerilInd_response: ImminentPerilInd = 2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary response
 * @constant
 * @type {number}
 */
export
const response: ImminentPerilInd = ImminentPerilInd_response; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ImminentPerilInd_cancel
 * @constant
 * @type {number}
 */
export
const ImminentPerilInd_cancel: ImminentPerilInd = 3; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary cancel
 * @constant
 * @type {number}
 */
export
const cancel: ImminentPerilInd = ImminentPerilInd_cancel; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_ImminentPerilInd: $.ASN1Decoder<ImminentPerilInd> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ImminentPerilInd
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ImminentPerilInd (el: _Element): ImminentPerilInd {
    if (!_cached_decoder_for_ImminentPerilInd) { _cached_decoder_for_ImminentPerilInd = $._decodeEnumerated; }
    return _cached_decoder_for_ImminentPerilInd(el);
}

let _cached_encoder_for_ImminentPerilInd: $.ASN1Encoder<ImminentPerilInd> | null = null;

/**
 * @summary Encodes a(n) ImminentPerilInd into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ImminentPerilInd, encoded as an ASN.1 Element.
 */
export
function _encode_ImminentPerilInd (value: ImminentPerilInd, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ImminentPerilInd) { _cached_encoder_for_ImminentPerilInd = $._encodeEnumerated; }
    return _cached_encoder_for_ImminentPerilInd(value, elGetter);
}


/* eslint-enable */
