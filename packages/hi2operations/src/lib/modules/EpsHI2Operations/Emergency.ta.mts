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
enum _enum_for_Emergency {
    imminent = 1,
    peril = 2,
    cancel = 3,
}

/**
 * @summary Emergency
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Emergency  ::=  ENUMERATED
 * {
 *  -- MCPTT services indication of peril condition.
 *  imminent (1),
 *  peril (2),
 *  cancel (3),
 *  ...
 * }
 * ```
 * 
 * @enum {number}
 */
export
type Emergency = _enum_for_Emergency | ENUMERATED;

/**
 * @summary Emergency_imminent
 * @constant
 * @type {number}
 */
export
const Emergency_imminent: Emergency = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary imminent
 * @constant
 * @type {number}
 */
export
const imminent: Emergency = Emergency_imminent; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Emergency_peril
 * @constant
 * @type {number}
 */
export
const Emergency_peril: Emergency = 2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary peril
 * @constant
 * @type {number}
 */
export
const peril: Emergency = Emergency_peril; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Emergency_cancel
 * @constant
 * @type {number}
 */
export
const Emergency_cancel: Emergency = 3; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary cancel
 * @constant
 * @type {number}
 */
export
const cancel: Emergency = Emergency_cancel; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_Emergency: $.ASN1Decoder<Emergency> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Emergency
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Emergency (el: _Element): Emergency {
    if (!_cached_decoder_for_Emergency) { _cached_decoder_for_Emergency = $._decodeEnumerated; }
    return _cached_decoder_for_Emergency(el);
}

let _cached_encoder_for_Emergency: $.ASN1Encoder<Emergency> | null = null;

/**
 * @summary Encodes a(n) Emergency into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Emergency, encoded as an ASN.1 Element.
 */
export
function _encode_Emergency (value: Emergency, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Emergency) { _cached_encoder_for_Emergency = $._encodeEnumerated; }
    return _cached_encoder_for_Emergency(value, elGetter);
}


/* eslint-enable */
