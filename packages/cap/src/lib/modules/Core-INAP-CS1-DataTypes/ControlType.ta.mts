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
 * @summary ControlType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ControlType      ::=  ENUMERATED {
 *      sCPOverloaded(0),
 *      manuallyInitiated(1)
 *      -- other values FFS
 *      }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_ControlType {
    sCPOverloaded = 0,
    manuallyInitiated = 1,
}

/**
 * @summary ControlType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ControlType      ::=  ENUMERATED {
 *      sCPOverloaded(0),
 *      manuallyInitiated(1)
 *      -- other values FFS
 *      }
 * ```
 * 
 * @enum {number}
 */
export
type ControlType = _enum_for_ControlType;

/**
 * @summary ControlType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ControlType      ::=  ENUMERATED {
 *      sCPOverloaded(0),
 *      manuallyInitiated(1)
 *      -- other values FFS
 *      }
 * ```
 * 
 * @enum {number}
 */
export
const ControlType = _enum_for_ControlType;

/**
 * @summary ControlType_sCPOverloaded
 * @constant
 * @type {number}
 */
export
const ControlType_sCPOverloaded: ControlType = ControlType.sCPOverloaded; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary sCPOverloaded
 * @constant
 * @type {number}
 */
export
const sCPOverloaded: ControlType = ControlType.sCPOverloaded; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ControlType_manuallyInitiated
 * @constant
 * @type {number}
 */
export
const ControlType_manuallyInitiated: ControlType = ControlType.manuallyInitiated; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary manuallyInitiated
 * @constant
 * @type {number}
 */
export
const manuallyInitiated: ControlType = ControlType.manuallyInitiated; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_ControlType: $.ASN1Decoder<ControlType> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ControlType
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ControlType (el: _Element): ControlType {
    if (!_cached_decoder_for_ControlType) { _cached_decoder_for_ControlType = $._decodeEnumerated; }
    return _cached_decoder_for_ControlType(el);
}

let _cached_encoder_for_ControlType: $.ASN1Encoder<ControlType> | null = null;

/**
 * @summary Encodes a(n) ControlType into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ControlType, encoded as an ASN.1 Element.
 */
export
function _encode_ControlType (value: ControlType, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ControlType) { _cached_encoder_for_ControlType = $._encodeEnumerated; }
    return _cached_encoder_for_ControlType(value, elGetter);
}


/* eslint-enable */
