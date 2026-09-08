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
 * @summary GetPhysicalDeviceInformation
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GetPhysicalDeviceInformation  ::=  BIT STRING
 * {     privateDataInReq             ( 0),
 *     namedDeviceTypesInAck             ( 1),
 *     otherLogicalDeviceListInAck         ( 2),
 *     deviceModelNameInAck             ( 3),
 *     maxDisplaysInAck             ( 4),
 *     maxButtonsInAck             ( 5),
 *     maxLampsInAck                 ( 6),
 *     maxRingPatternsInAck             ( 7),
 *     privateDataInAck             ( 8) }
 * ```
 */
export
type GetPhysicalDeviceInformation = BIT_STRING;

/**
 * @summary GetPhysicalDeviceInformation_privateDataInReq
 * @constant
 */
export
const GetPhysicalDeviceInformation_privateDataInReq: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary privateDataInReq
 * @constant
 */
export
const privateDataInReq: number = GetPhysicalDeviceInformation_privateDataInReq; /* SHORT_NAMED_BIT */

/**
 * @summary GetPhysicalDeviceInformation_namedDeviceTypesInAck
 * @constant
 */
export
const GetPhysicalDeviceInformation_namedDeviceTypesInAck: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary namedDeviceTypesInAck
 * @constant
 */
export
const namedDeviceTypesInAck: number = GetPhysicalDeviceInformation_namedDeviceTypesInAck; /* SHORT_NAMED_BIT */

/**
 * @summary GetPhysicalDeviceInformation_otherLogicalDeviceListInAck
 * @constant
 */
export
const GetPhysicalDeviceInformation_otherLogicalDeviceListInAck: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary otherLogicalDeviceListInAck
 * @constant
 */
export
const otherLogicalDeviceListInAck: number = GetPhysicalDeviceInformation_otherLogicalDeviceListInAck; /* SHORT_NAMED_BIT */

/**
 * @summary GetPhysicalDeviceInformation_deviceModelNameInAck
 * @constant
 */
export
const GetPhysicalDeviceInformation_deviceModelNameInAck: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary deviceModelNameInAck
 * @constant
 */
export
const deviceModelNameInAck: number = GetPhysicalDeviceInformation_deviceModelNameInAck; /* SHORT_NAMED_BIT */

/**
 * @summary GetPhysicalDeviceInformation_maxDisplaysInAck
 * @constant
 */
export
const GetPhysicalDeviceInformation_maxDisplaysInAck: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary maxDisplaysInAck
 * @constant
 */
export
const maxDisplaysInAck: number = GetPhysicalDeviceInformation_maxDisplaysInAck; /* SHORT_NAMED_BIT */

/**
 * @summary GetPhysicalDeviceInformation_maxButtonsInAck
 * @constant
 */
export
const GetPhysicalDeviceInformation_maxButtonsInAck: number = 5; /* LONG_NAMED_BIT */

/**
 * @summary maxButtonsInAck
 * @constant
 */
export
const maxButtonsInAck: number = GetPhysicalDeviceInformation_maxButtonsInAck; /* SHORT_NAMED_BIT */

/**
 * @summary GetPhysicalDeviceInformation_maxLampsInAck
 * @constant
 */
export
const GetPhysicalDeviceInformation_maxLampsInAck: number = 6; /* LONG_NAMED_BIT */

/**
 * @summary maxLampsInAck
 * @constant
 */
export
const maxLampsInAck: number = GetPhysicalDeviceInformation_maxLampsInAck; /* SHORT_NAMED_BIT */

/**
 * @summary GetPhysicalDeviceInformation_maxRingPatternsInAck
 * @constant
 */
export
const GetPhysicalDeviceInformation_maxRingPatternsInAck: number = 7; /* LONG_NAMED_BIT */

/**
 * @summary maxRingPatternsInAck
 * @constant
 */
export
const maxRingPatternsInAck: number = GetPhysicalDeviceInformation_maxRingPatternsInAck; /* SHORT_NAMED_BIT */

/**
 * @summary GetPhysicalDeviceInformation_privateDataInAck
 * @constant
 */
export
const GetPhysicalDeviceInformation_privateDataInAck: number = 8; /* LONG_NAMED_BIT */

/**
 * @summary privateDataInAck
 * @constant
 */
export
const privateDataInAck: number = GetPhysicalDeviceInformation_privateDataInAck; /* SHORT_NAMED_BIT */

let _cached_decoder_for_GetPhysicalDeviceInformation: $.ASN1Decoder<GetPhysicalDeviceInformation> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) GetPhysicalDeviceInformation
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_GetPhysicalDeviceInformation (el: _Element): GetPhysicalDeviceInformation {
    if (!_cached_decoder_for_GetPhysicalDeviceInformation) { _cached_decoder_for_GetPhysicalDeviceInformation = $._decodeBitString; }
    return _cached_decoder_for_GetPhysicalDeviceInformation(el);
}

let _cached_encoder_for_GetPhysicalDeviceInformation: $.ASN1Encoder<GetPhysicalDeviceInformation> | null = null;

/**
 * @summary Encodes a(n) GetPhysicalDeviceInformation into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GetPhysicalDeviceInformation, encoded as an ASN.1 Element.
 */
export
function _encode_GetPhysicalDeviceInformation (value: GetPhysicalDeviceInformation, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_GetPhysicalDeviceInformation) { _cached_encoder_for_GetPhysicalDeviceInformation = $._encodeBitString; }
    return _cached_encoder_for_GetPhysicalDeviceInformation(value, elGetter);
}


/* eslint-enable */
