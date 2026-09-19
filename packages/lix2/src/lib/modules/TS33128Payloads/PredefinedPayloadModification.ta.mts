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
 * @summary PredefinedPayloadModification
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PredefinedPayloadModification  ::=  ENUMERATED
 * {
 *     pANILocationRemoval(1),
 *     cNILocationRemoval(2),
 *     sIPGeolocationInfoRemoval(3),
 *     presenceInformationLocationRemoval(4),
 *     tS33128SMSTPDURedaction(5),
 *     tS33128TruncatedSMSTPDU(6),
 *     iMSTextContentRemoval(7),
 *     iMSSubjectContentRemoval(8),
 *     rCSPresenceLocationRemoval(9),
 *     rCSCPIMLocationRemoval(10),
 *     rCSTextContentRemoval(11),
 *     rCSSubjectContentRemoval(12),
 *     rCSGeolocationPUSHContentRemoval(13),
 *     rCSFileURLContentRemoval(14),
 *     threeGPP2SMSUserDataRedaction(15)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_PredefinedPayloadModification {
    pANILocationRemoval = 1,
    cNILocationRemoval = 2,
    sIPGeolocationInfoRemoval = 3,
    presenceInformationLocationRemoval = 4,
    tS33128SMSTPDURedaction = 5,
    tS33128TruncatedSMSTPDU = 6,
    iMSTextContentRemoval = 7,
    iMSSubjectContentRemoval = 8,
    rCSPresenceLocationRemoval = 9,
    rCSCPIMLocationRemoval = 10,
    rCSTextContentRemoval = 11,
    rCSSubjectContentRemoval = 12,
    rCSGeolocationPUSHContentRemoval = 13,
    rCSFileURLContentRemoval = 14,
    threeGPP2SMSUserDataRedaction = 15,
}

/**
 * @summary PredefinedPayloadModification
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PredefinedPayloadModification  ::=  ENUMERATED
 * {
 *     pANILocationRemoval(1),
 *     cNILocationRemoval(2),
 *     sIPGeolocationInfoRemoval(3),
 *     presenceInformationLocationRemoval(4),
 *     tS33128SMSTPDURedaction(5),
 *     tS33128TruncatedSMSTPDU(6),
 *     iMSTextContentRemoval(7),
 *     iMSSubjectContentRemoval(8),
 *     rCSPresenceLocationRemoval(9),
 *     rCSCPIMLocationRemoval(10),
 *     rCSTextContentRemoval(11),
 *     rCSSubjectContentRemoval(12),
 *     rCSGeolocationPUSHContentRemoval(13),
 *     rCSFileURLContentRemoval(14),
 *     threeGPP2SMSUserDataRedaction(15)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type PredefinedPayloadModification = _enum_for_PredefinedPayloadModification;

/**
 * @summary PredefinedPayloadModification
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PredefinedPayloadModification  ::=  ENUMERATED
 * {
 *     pANILocationRemoval(1),
 *     cNILocationRemoval(2),
 *     sIPGeolocationInfoRemoval(3),
 *     presenceInformationLocationRemoval(4),
 *     tS33128SMSTPDURedaction(5),
 *     tS33128TruncatedSMSTPDU(6),
 *     iMSTextContentRemoval(7),
 *     iMSSubjectContentRemoval(8),
 *     rCSPresenceLocationRemoval(9),
 *     rCSCPIMLocationRemoval(10),
 *     rCSTextContentRemoval(11),
 *     rCSSubjectContentRemoval(12),
 *     rCSGeolocationPUSHContentRemoval(13),
 *     rCSFileURLContentRemoval(14),
 *     threeGPP2SMSUserDataRedaction(15)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const PredefinedPayloadModification = _enum_for_PredefinedPayloadModification;

/**
 * @summary PredefinedPayloadModification_pANILocationRemoval
 * @constant
 * @type {number}
 */
export
const PredefinedPayloadModification_pANILocationRemoval: PredefinedPayloadModification = PredefinedPayloadModification.pANILocationRemoval; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary pANILocationRemoval
 * @constant
 * @type {number}
 */
export
const pANILocationRemoval: PredefinedPayloadModification = PredefinedPayloadModification.pANILocationRemoval; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PredefinedPayloadModification_cNILocationRemoval
 * @constant
 * @type {number}
 */
export
const PredefinedPayloadModification_cNILocationRemoval: PredefinedPayloadModification = PredefinedPayloadModification.cNILocationRemoval; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary cNILocationRemoval
 * @constant
 * @type {number}
 */
export
const cNILocationRemoval: PredefinedPayloadModification = PredefinedPayloadModification.cNILocationRemoval; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PredefinedPayloadModification_sIPGeolocationInfoRemoval
 * @constant
 * @type {number}
 */
export
const PredefinedPayloadModification_sIPGeolocationInfoRemoval: PredefinedPayloadModification = PredefinedPayloadModification.sIPGeolocationInfoRemoval; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary sIPGeolocationInfoRemoval
 * @constant
 * @type {number}
 */
export
const sIPGeolocationInfoRemoval: PredefinedPayloadModification = PredefinedPayloadModification.sIPGeolocationInfoRemoval; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PredefinedPayloadModification_presenceInformationLocationRemoval
 * @constant
 * @type {number}
 */
export
const PredefinedPayloadModification_presenceInformationLocationRemoval: PredefinedPayloadModification = PredefinedPayloadModification.presenceInformationLocationRemoval; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary presenceInformationLocationRemoval
 * @constant
 * @type {number}
 */
export
const presenceInformationLocationRemoval: PredefinedPayloadModification = PredefinedPayloadModification.presenceInformationLocationRemoval; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PredefinedPayloadModification_tS33128SMSTPDURedaction
 * @constant
 * @type {number}
 */
export
const PredefinedPayloadModification_tS33128SMSTPDURedaction: PredefinedPayloadModification = PredefinedPayloadModification.tS33128SMSTPDURedaction; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary tS33128SMSTPDURedaction
 * @constant
 * @type {number}
 */
export
const tS33128SMSTPDURedaction: PredefinedPayloadModification = PredefinedPayloadModification.tS33128SMSTPDURedaction; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PredefinedPayloadModification_tS33128TruncatedSMSTPDU
 * @constant
 * @type {number}
 */
export
const PredefinedPayloadModification_tS33128TruncatedSMSTPDU: PredefinedPayloadModification = PredefinedPayloadModification.tS33128TruncatedSMSTPDU; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary tS33128TruncatedSMSTPDU
 * @constant
 * @type {number}
 */
export
const tS33128TruncatedSMSTPDU: PredefinedPayloadModification = PredefinedPayloadModification.tS33128TruncatedSMSTPDU; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PredefinedPayloadModification_iMSTextContentRemoval
 * @constant
 * @type {number}
 */
export
const PredefinedPayloadModification_iMSTextContentRemoval: PredefinedPayloadModification = PredefinedPayloadModification.iMSTextContentRemoval; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary iMSTextContentRemoval
 * @constant
 * @type {number}
 */
export
const iMSTextContentRemoval: PredefinedPayloadModification = PredefinedPayloadModification.iMSTextContentRemoval; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PredefinedPayloadModification_iMSSubjectContentRemoval
 * @constant
 * @type {number}
 */
export
const PredefinedPayloadModification_iMSSubjectContentRemoval: PredefinedPayloadModification = PredefinedPayloadModification.iMSSubjectContentRemoval; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary iMSSubjectContentRemoval
 * @constant
 * @type {number}
 */
export
const iMSSubjectContentRemoval: PredefinedPayloadModification = PredefinedPayloadModification.iMSSubjectContentRemoval; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PredefinedPayloadModification_rCSPresenceLocationRemoval
 * @constant
 * @type {number}
 */
export
const PredefinedPayloadModification_rCSPresenceLocationRemoval: PredefinedPayloadModification = PredefinedPayloadModification.rCSPresenceLocationRemoval; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary rCSPresenceLocationRemoval
 * @constant
 * @type {number}
 */
export
const rCSPresenceLocationRemoval: PredefinedPayloadModification = PredefinedPayloadModification.rCSPresenceLocationRemoval; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PredefinedPayloadModification_rCSCPIMLocationRemoval
 * @constant
 * @type {number}
 */
export
const PredefinedPayloadModification_rCSCPIMLocationRemoval: PredefinedPayloadModification = PredefinedPayloadModification.rCSCPIMLocationRemoval; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary rCSCPIMLocationRemoval
 * @constant
 * @type {number}
 */
export
const rCSCPIMLocationRemoval: PredefinedPayloadModification = PredefinedPayloadModification.rCSCPIMLocationRemoval; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PredefinedPayloadModification_rCSTextContentRemoval
 * @constant
 * @type {number}
 */
export
const PredefinedPayloadModification_rCSTextContentRemoval: PredefinedPayloadModification = PredefinedPayloadModification.rCSTextContentRemoval; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary rCSTextContentRemoval
 * @constant
 * @type {number}
 */
export
const rCSTextContentRemoval: PredefinedPayloadModification = PredefinedPayloadModification.rCSTextContentRemoval; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PredefinedPayloadModification_rCSSubjectContentRemoval
 * @constant
 * @type {number}
 */
export
const PredefinedPayloadModification_rCSSubjectContentRemoval: PredefinedPayloadModification = PredefinedPayloadModification.rCSSubjectContentRemoval; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary rCSSubjectContentRemoval
 * @constant
 * @type {number}
 */
export
const rCSSubjectContentRemoval: PredefinedPayloadModification = PredefinedPayloadModification.rCSSubjectContentRemoval; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PredefinedPayloadModification_rCSGeolocationPUSHContentRemoval
 * @constant
 * @type {number}
 */
export
const PredefinedPayloadModification_rCSGeolocationPUSHContentRemoval: PredefinedPayloadModification = PredefinedPayloadModification.rCSGeolocationPUSHContentRemoval; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary rCSGeolocationPUSHContentRemoval
 * @constant
 * @type {number}
 */
export
const rCSGeolocationPUSHContentRemoval: PredefinedPayloadModification = PredefinedPayloadModification.rCSGeolocationPUSHContentRemoval; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PredefinedPayloadModification_rCSFileURLContentRemoval
 * @constant
 * @type {number}
 */
export
const PredefinedPayloadModification_rCSFileURLContentRemoval: PredefinedPayloadModification = PredefinedPayloadModification.rCSFileURLContentRemoval; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary rCSFileURLContentRemoval
 * @constant
 * @type {number}
 */
export
const rCSFileURLContentRemoval: PredefinedPayloadModification = PredefinedPayloadModification.rCSFileURLContentRemoval; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PredefinedPayloadModification_threeGPP2SMSUserDataRedaction
 * @constant
 * @type {number}
 */
export
const PredefinedPayloadModification_threeGPP2SMSUserDataRedaction: PredefinedPayloadModification = PredefinedPayloadModification.threeGPP2SMSUserDataRedaction; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary threeGPP2SMSUserDataRedaction
 * @constant
 * @type {number}
 */
export
const threeGPP2SMSUserDataRedaction: PredefinedPayloadModification = PredefinedPayloadModification.threeGPP2SMSUserDataRedaction; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_PredefinedPayloadModification: $.ASN1Decoder<PredefinedPayloadModification> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PredefinedPayloadModification
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PredefinedPayloadModification (el: _Element): PredefinedPayloadModification {
    if (!_cached_decoder_for_PredefinedPayloadModification) { _cached_decoder_for_PredefinedPayloadModification = $._decodeEnumerated; }
    return _cached_decoder_for_PredefinedPayloadModification(el);
}

let _cached_encoder_for_PredefinedPayloadModification: $.ASN1Encoder<PredefinedPayloadModification> | null = null;

/**
 * @summary Encodes a(n) PredefinedPayloadModification into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PredefinedPayloadModification, encoded as an ASN.1 Element.
 */
export
function _encode_PredefinedPayloadModification (value: PredefinedPayloadModification, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PredefinedPayloadModification) { _cached_encoder_for_PredefinedPayloadModification = $._encodeEnumerated; }
    return _cached_encoder_for_PredefinedPayloadModification(value, elGetter);
}


/* eslint-enable */
