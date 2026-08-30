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
enum _enum_for_LCSClientInternalID {
    broadcastService = 0,
    o_andM_HPLMN = 1,
    o_andM_VPLMN = 2,
    anonymousLocation = 3,
    targetMSsubscribedService = 4,
}

/**
 * @summary LCSClientInternalID
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * LCSClientInternalID  ::=  ENUMERATED {
 *     broadcastService    (0),
 *     o-andM-HPLMN    (1),
 *     o-andM-VPLMN    (2),
 *     anonymousLocation    (3),
 *     targetMSsubscribedService    (4),
 *     ... }
 * ```
 * 
 * @enum {number}
 */
export
type LCSClientInternalID = _enum_for_LCSClientInternalID | ENUMERATED;

/**
 * @summary LCSClientInternalID_broadcastService
 * @constant
 * @type {number}
 */
export
const LCSClientInternalID_broadcastService: LCSClientInternalID = 0; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary broadcastService
 * @constant
 * @type {number}
 */
export
const broadcastService: LCSClientInternalID = LCSClientInternalID_broadcastService; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary LCSClientInternalID_o_andM_HPLMN
 * @constant
 * @type {number}
 */
export
const LCSClientInternalID_o_andM_HPLMN: LCSClientInternalID = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary o_andM_HPLMN
 * @constant
 * @type {number}
 */
export
const o_andM_HPLMN: LCSClientInternalID = LCSClientInternalID_o_andM_HPLMN; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary LCSClientInternalID_o_andM_VPLMN
 * @constant
 * @type {number}
 */
export
const LCSClientInternalID_o_andM_VPLMN: LCSClientInternalID = 2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary o_andM_VPLMN
 * @constant
 * @type {number}
 */
export
const o_andM_VPLMN: LCSClientInternalID = LCSClientInternalID_o_andM_VPLMN; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary LCSClientInternalID_anonymousLocation
 * @constant
 * @type {number}
 */
export
const LCSClientInternalID_anonymousLocation: LCSClientInternalID = 3; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary anonymousLocation
 * @constant
 * @type {number}
 */
export
const anonymousLocation: LCSClientInternalID = LCSClientInternalID_anonymousLocation; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary LCSClientInternalID_targetMSsubscribedService
 * @constant
 * @type {number}
 */
export
const LCSClientInternalID_targetMSsubscribedService: LCSClientInternalID = 4; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary targetMSsubscribedService
 * @constant
 * @type {number}
 */
export
const targetMSsubscribedService: LCSClientInternalID = LCSClientInternalID_targetMSsubscribedService; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_LCSClientInternalID: $.ASN1Decoder<LCSClientInternalID> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) LCSClientInternalID
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_LCSClientInternalID (el: _Element): LCSClientInternalID {
    if (!_cached_decoder_for_LCSClientInternalID) { _cached_decoder_for_LCSClientInternalID = $._decodeEnumerated; }
    return _cached_decoder_for_LCSClientInternalID(el);
}

let _cached_encoder_for_LCSClientInternalID: $.ASN1Encoder<LCSClientInternalID> | null = null;

/**
 * @summary Encodes a(n) LCSClientInternalID into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The LCSClientInternalID, encoded as an ASN.1 Element.
 */
export
function _encode_LCSClientInternalID (value: LCSClientInternalID, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_LCSClientInternalID) { _cached_encoder_for_LCSClientInternalID = $._encodeEnumerated; }
    return _cached_encoder_for_LCSClientInternalID(value, elGetter);
}


/* eslint-enable */
