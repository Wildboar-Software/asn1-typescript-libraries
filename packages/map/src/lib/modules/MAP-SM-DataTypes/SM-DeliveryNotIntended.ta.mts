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
enum _enum_for_SM_DeliveryNotIntended {
    onlyIMSI_requested = 0,
    onlyMCC_MNC_requested = 1,
}

/**
 * @summary SM_DeliveryNotIntended
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SM-DeliveryNotIntended  ::=  ENUMERATED {
 *     onlyIMSI-requested  (0),
 *     onlyMCC-MNC-requested  (1),
 *     ...}
 * ```
 * 
 * @enum {number}
 */
export
type SM_DeliveryNotIntended = _enum_for_SM_DeliveryNotIntended | ENUMERATED;

/**
 * @summary SM_DeliveryNotIntended_onlyIMSI_requested
 * @constant
 * @type {number}
 */
export
const SM_DeliveryNotIntended_onlyIMSI_requested: SM_DeliveryNotIntended = 0; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary onlyIMSI_requested
 * @constant
 * @type {number}
 */
export
const onlyIMSI_requested: SM_DeliveryNotIntended = SM_DeliveryNotIntended_onlyIMSI_requested; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SM_DeliveryNotIntended_onlyMCC_MNC_requested
 * @constant
 * @type {number}
 */
export
const SM_DeliveryNotIntended_onlyMCC_MNC_requested: SM_DeliveryNotIntended = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary onlyMCC_MNC_requested
 * @constant
 * @type {number}
 */
export
const onlyMCC_MNC_requested: SM_DeliveryNotIntended = SM_DeliveryNotIntended_onlyMCC_MNC_requested; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_SM_DeliveryNotIntended: $.ASN1Decoder<SM_DeliveryNotIntended> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SM_DeliveryNotIntended
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SM_DeliveryNotIntended (el: _Element): SM_DeliveryNotIntended {
    if (!_cached_decoder_for_SM_DeliveryNotIntended) { _cached_decoder_for_SM_DeliveryNotIntended = $._decodeEnumerated; }
    return _cached_decoder_for_SM_DeliveryNotIntended(el);
}

let _cached_encoder_for_SM_DeliveryNotIntended: $.ASN1Encoder<SM_DeliveryNotIntended> | null = null;

/**
 * @summary Encodes a(n) SM_DeliveryNotIntended into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SM_DeliveryNotIntended, encoded as an ASN.1 Element.
 */
export
function _encode_SM_DeliveryNotIntended (value: SM_DeliveryNotIntended, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SM_DeliveryNotIntended) { _cached_encoder_for_SM_DeliveryNotIntended = $._encodeEnumerated; }
    return _cached_encoder_for_SM_DeliveryNotIntended(value, elGetter);
}


/* eslint-enable */
