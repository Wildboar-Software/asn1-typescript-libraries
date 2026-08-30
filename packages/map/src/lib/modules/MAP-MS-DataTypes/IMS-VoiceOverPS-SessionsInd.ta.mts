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
 * @summary IMS_VoiceOverPS_SessionsInd
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IMS-VoiceOverPS-SessionsInd  ::=  ENUMERATED {
 *     imsVoiceOverPS-SessionsNotSupported    (0),
 *     imsVoiceOverPS-SessionsSupported    (1),
 *     unknown    (2)
 *     }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_IMS_VoiceOverPS_SessionsInd {
    imsVoiceOverPS_SessionsNotSupported = 0,
    imsVoiceOverPS_SessionsSupported = 1,
    unknown = 2,
}

/**
 * @summary IMS_VoiceOverPS_SessionsInd
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IMS-VoiceOverPS-SessionsInd  ::=  ENUMERATED {
 *     imsVoiceOverPS-SessionsNotSupported    (0),
 *     imsVoiceOverPS-SessionsSupported    (1),
 *     unknown    (2)
 *     }
 * ```
 * 
 * @enum {number}
 */
export
type IMS_VoiceOverPS_SessionsInd = _enum_for_IMS_VoiceOverPS_SessionsInd;

/**
 * @summary IMS_VoiceOverPS_SessionsInd
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IMS-VoiceOverPS-SessionsInd  ::=  ENUMERATED {
 *     imsVoiceOverPS-SessionsNotSupported    (0),
 *     imsVoiceOverPS-SessionsSupported    (1),
 *     unknown    (2)
 *     }
 * ```
 * 
 * @enum {number}
 */
export
const IMS_VoiceOverPS_SessionsInd = _enum_for_IMS_VoiceOverPS_SessionsInd;

/**
 * @summary IMS_VoiceOverPS_SessionsInd_imsVoiceOverPS_SessionsNotSupported
 * @constant
 * @type {number}
 */
export
const IMS_VoiceOverPS_SessionsInd_imsVoiceOverPS_SessionsNotSupported: IMS_VoiceOverPS_SessionsInd = IMS_VoiceOverPS_SessionsInd.imsVoiceOverPS_SessionsNotSupported; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary imsVoiceOverPS_SessionsNotSupported
 * @constant
 * @type {number}
 */
export
const imsVoiceOverPS_SessionsNotSupported: IMS_VoiceOverPS_SessionsInd = IMS_VoiceOverPS_SessionsInd.imsVoiceOverPS_SessionsNotSupported; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary IMS_VoiceOverPS_SessionsInd_imsVoiceOverPS_SessionsSupported
 * @constant
 * @type {number}
 */
export
const IMS_VoiceOverPS_SessionsInd_imsVoiceOverPS_SessionsSupported: IMS_VoiceOverPS_SessionsInd = IMS_VoiceOverPS_SessionsInd.imsVoiceOverPS_SessionsSupported; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary imsVoiceOverPS_SessionsSupported
 * @constant
 * @type {number}
 */
export
const imsVoiceOverPS_SessionsSupported: IMS_VoiceOverPS_SessionsInd = IMS_VoiceOverPS_SessionsInd.imsVoiceOverPS_SessionsSupported; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary IMS_VoiceOverPS_SessionsInd_unknown
 * @constant
 * @type {number}
 */
export
const IMS_VoiceOverPS_SessionsInd_unknown: IMS_VoiceOverPS_SessionsInd = IMS_VoiceOverPS_SessionsInd.unknown; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unknown
 * @constant
 * @type {number}
 */
export
const unknown: IMS_VoiceOverPS_SessionsInd = IMS_VoiceOverPS_SessionsInd.unknown; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Decodes an ASN.1 element into a(n) IMS_VoiceOverPS_SessionsInd
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_IMS_VoiceOverPS_SessionsInd = $._decodeEnumerated;

/**
 * @summary Encodes a(n) IMS_VoiceOverPS_SessionsInd into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IMS_VoiceOverPS_SessionsInd, encoded as an ASN.1 Element.
 */
export const _encode_IMS_VoiceOverPS_SessionsInd = $._encodeEnumerated;


/* eslint-enable */
