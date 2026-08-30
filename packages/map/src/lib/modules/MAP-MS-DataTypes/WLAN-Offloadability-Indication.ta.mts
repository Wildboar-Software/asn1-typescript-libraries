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
 * @summary WLAN_Offloadability_Indication
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * WLAN-Offloadability-Indication  ::=  ENUMERATED {
 *     notAllowed   (0),
 *     allowed      (1)}
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_WLAN_Offloadability_Indication {
    notAllowed = 0,
    allowed = 1,
}

/**
 * @summary WLAN_Offloadability_Indication
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * WLAN-Offloadability-Indication  ::=  ENUMERATED {
 *     notAllowed   (0),
 *     allowed      (1)}
 * ```
 * 
 * @enum {number}
 */
export
type WLAN_Offloadability_Indication = _enum_for_WLAN_Offloadability_Indication;

/**
 * @summary WLAN_Offloadability_Indication
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * WLAN-Offloadability-Indication  ::=  ENUMERATED {
 *     notAllowed   (0),
 *     allowed      (1)}
 * ```
 * 
 * @enum {number}
 */
export
const WLAN_Offloadability_Indication = _enum_for_WLAN_Offloadability_Indication;

/**
 * @summary WLAN_Offloadability_Indication_notAllowed
 * @constant
 * @type {number}
 */
export
const WLAN_Offloadability_Indication_notAllowed: WLAN_Offloadability_Indication = WLAN_Offloadability_Indication.notAllowed; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary notAllowed
 * @constant
 * @type {number}
 */
export
const notAllowed: WLAN_Offloadability_Indication = WLAN_Offloadability_Indication.notAllowed; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary WLAN_Offloadability_Indication_allowed
 * @constant
 * @type {number}
 */
export
const WLAN_Offloadability_Indication_allowed: WLAN_Offloadability_Indication = WLAN_Offloadability_Indication.allowed; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary allowed
 * @constant
 * @type {number}
 */
export
const allowed: WLAN_Offloadability_Indication = WLAN_Offloadability_Indication.allowed; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_WLAN_Offloadability_Indication: $.ASN1Decoder<WLAN_Offloadability_Indication> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) WLAN_Offloadability_Indication
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_WLAN_Offloadability_Indication (el: _Element): WLAN_Offloadability_Indication {
    if (!_cached_decoder_for_WLAN_Offloadability_Indication) { _cached_decoder_for_WLAN_Offloadability_Indication = $._decodeEnumerated; }
    return _cached_decoder_for_WLAN_Offloadability_Indication(el);
}

let _cached_encoder_for_WLAN_Offloadability_Indication: $.ASN1Encoder<WLAN_Offloadability_Indication> | null = null;

/**
 * @summary Encodes a(n) WLAN_Offloadability_Indication into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The WLAN_Offloadability_Indication, encoded as an ASN.1 Element.
 */
export
function _encode_WLAN_Offloadability_Indication (value: WLAN_Offloadability_Indication, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_WLAN_Offloadability_Indication) { _cached_encoder_for_WLAN_Offloadability_Indication = $._encodeEnumerated; }
    return _cached_encoder_for_WLAN_Offloadability_Indication(value, elGetter);
}


/* eslint-enable */
