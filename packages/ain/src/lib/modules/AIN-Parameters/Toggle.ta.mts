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
 * @summary Toggle
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Toggle  ::=  ENUMERATED{
 *         presentationStatusValue(0)
 *     }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_Toggle {
    presentationStatusValue = 0,
}

/**
 * @summary Toggle
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Toggle  ::=  ENUMERATED{
 *         presentationStatusValue(0)
 *     }
 * ```
 * 
 * @enum {number}
 */
export
type Toggle = _enum_for_Toggle;

/**
 * @summary Toggle
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Toggle  ::=  ENUMERATED{
 *         presentationStatusValue(0)
 *     }
 * ```
 * 
 * @enum {number}
 */
export
const Toggle = _enum_for_Toggle;

/**
 * @summary Toggle_presentationStatusValue
 * @constant
 * @type {number}
 */
export
const Toggle_presentationStatusValue: Toggle = Toggle.presentationStatusValue; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary presentationStatusValue
 * @constant
 * @type {number}
 */
export
const presentationStatusValue: Toggle = Toggle.presentationStatusValue; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_Toggle: $.ASN1Decoder<Toggle> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Toggle
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Toggle (el: _Element): Toggle {
    if (!_cached_decoder_for_Toggle) { _cached_decoder_for_Toggle = $._decodeEnumerated; }
    return _cached_decoder_for_Toggle(el);
}

let _cached_encoder_for_Toggle: $.ASN1Encoder<Toggle> | null = null;

/**
 * @summary Encodes a(n) Toggle into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Toggle, encoded as an ASN.1 Element.
 */
export
function _encode_Toggle (value: Toggle, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Toggle) { _cached_encoder_for_Toggle = $._encodeEnumerated; }
    return _cached_encoder_for_Toggle(value, elGetter);
}


/* eslint-enable */
