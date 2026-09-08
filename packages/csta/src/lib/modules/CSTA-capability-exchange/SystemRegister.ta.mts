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
 * @summary SystemRegister
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SystemRegister  ::=  BIT STRING
 * {     requestTypesSystemStatus             ( 0),     -- optional parameters
 *     requestTypesRequestSystemStatus         ( 1),     -- optional parameters
 *     requestTypesSwitchingFunctionCapsChanged     ( 2),     -- optional parameters
 *     requestTypesSwitchingFuncionDevicesChanged     ( 3),     -- optional parameters
 *     statusFilterInitializing             ( 4),     -- optional parameters
 *     statusFilterEnabled                 ( 5),     -- optional parameters
 *     statusFilterNormal                 ( 6),     -- optional parameters
 *     statusFilterMessageLost             ( 7),     -- optional parameters
 *     statusFilterDisabled                 ( 8),     -- optional parameters
 *     statusFilterPartiallyDisabled             ( 9),     -- optional parameters
 *     statusFilterOverloadImminent             (10),     -- optional parameters
 *     statusFilterOverloadReached             (11),     -- optional parameters
 *     statusFilterOverloadRelieved             (12),     -- optional parameters
 *     privateDataOctetString                 (13),     -- optional parameters
 *     privateData                     (14),     -- optional parameters
 *     privateDataOctetStringInAck             (15),     -- optional parameters
 *     privateDataInAck                 (16) }
 * ```
 */
export
type SystemRegister = BIT_STRING;

/**
 * @summary SystemRegister_requestTypesSystemStatus
 * @constant
 */
export
const SystemRegister_requestTypesSystemStatus: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary requestTypesSystemStatus
 * @constant
 */
export
const requestTypesSystemStatus: number = SystemRegister_requestTypesSystemStatus; /* SHORT_NAMED_BIT */

/**
 * @summary SystemRegister_requestTypesRequestSystemStatus
 * @constant
 */
export
const SystemRegister_requestTypesRequestSystemStatus: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary requestTypesRequestSystemStatus
 * @constant
 */
export
const requestTypesRequestSystemStatus: number = SystemRegister_requestTypesRequestSystemStatus; /* SHORT_NAMED_BIT */

/**
 * @summary SystemRegister_requestTypesSwitchingFunctionCapsChanged
 * @constant
 */
export
const SystemRegister_requestTypesSwitchingFunctionCapsChanged: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary requestTypesSwitchingFunctionCapsChanged
 * @constant
 */
export
const requestTypesSwitchingFunctionCapsChanged: number = SystemRegister_requestTypesSwitchingFunctionCapsChanged; /* SHORT_NAMED_BIT */

/**
 * @summary SystemRegister_requestTypesSwitchingFuncionDevicesChanged
 * @constant
 */
export
const SystemRegister_requestTypesSwitchingFuncionDevicesChanged: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary requestTypesSwitchingFuncionDevicesChanged
 * @constant
 */
export
const requestTypesSwitchingFuncionDevicesChanged: number = SystemRegister_requestTypesSwitchingFuncionDevicesChanged; /* SHORT_NAMED_BIT */

/**
 * @summary SystemRegister_statusFilterInitializing
 * @constant
 */
export
const SystemRegister_statusFilterInitializing: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary statusFilterInitializing
 * @constant
 */
export
const statusFilterInitializing: number = SystemRegister_statusFilterInitializing; /* SHORT_NAMED_BIT */

/**
 * @summary SystemRegister_statusFilterEnabled
 * @constant
 */
export
const SystemRegister_statusFilterEnabled: number = 5; /* LONG_NAMED_BIT */

/**
 * @summary statusFilterEnabled
 * @constant
 */
export
const statusFilterEnabled: number = SystemRegister_statusFilterEnabled; /* SHORT_NAMED_BIT */

/**
 * @summary SystemRegister_statusFilterNormal
 * @constant
 */
export
const SystemRegister_statusFilterNormal: number = 6; /* LONG_NAMED_BIT */

/**
 * @summary statusFilterNormal
 * @constant
 */
export
const statusFilterNormal: number = SystemRegister_statusFilterNormal; /* SHORT_NAMED_BIT */

/**
 * @summary SystemRegister_statusFilterMessageLost
 * @constant
 */
export
const SystemRegister_statusFilterMessageLost: number = 7; /* LONG_NAMED_BIT */

/**
 * @summary statusFilterMessageLost
 * @constant
 */
export
const statusFilterMessageLost: number = SystemRegister_statusFilterMessageLost; /* SHORT_NAMED_BIT */

/**
 * @summary SystemRegister_statusFilterDisabled
 * @constant
 */
export
const SystemRegister_statusFilterDisabled: number = 8; /* LONG_NAMED_BIT */

/**
 * @summary statusFilterDisabled
 * @constant
 */
export
const statusFilterDisabled: number = SystemRegister_statusFilterDisabled; /* SHORT_NAMED_BIT */

/**
 * @summary SystemRegister_statusFilterPartiallyDisabled
 * @constant
 */
export
const SystemRegister_statusFilterPartiallyDisabled: number = 9; /* LONG_NAMED_BIT */

/**
 * @summary statusFilterPartiallyDisabled
 * @constant
 */
export
const statusFilterPartiallyDisabled: number = SystemRegister_statusFilterPartiallyDisabled; /* SHORT_NAMED_BIT */

/**
 * @summary SystemRegister_statusFilterOverloadImminent
 * @constant
 */
export
const SystemRegister_statusFilterOverloadImminent: number = 10; /* LONG_NAMED_BIT */

/**
 * @summary statusFilterOverloadImminent
 * @constant
 */
export
const statusFilterOverloadImminent: number = SystemRegister_statusFilterOverloadImminent; /* SHORT_NAMED_BIT */

/**
 * @summary SystemRegister_statusFilterOverloadReached
 * @constant
 */
export
const SystemRegister_statusFilterOverloadReached: number = 11; /* LONG_NAMED_BIT */

/**
 * @summary statusFilterOverloadReached
 * @constant
 */
export
const statusFilterOverloadReached: number = SystemRegister_statusFilterOverloadReached; /* SHORT_NAMED_BIT */

/**
 * @summary SystemRegister_statusFilterOverloadRelieved
 * @constant
 */
export
const SystemRegister_statusFilterOverloadRelieved: number = 12; /* LONG_NAMED_BIT */

/**
 * @summary statusFilterOverloadRelieved
 * @constant
 */
export
const statusFilterOverloadRelieved: number = SystemRegister_statusFilterOverloadRelieved; /* SHORT_NAMED_BIT */

/**
 * @summary SystemRegister_privateDataOctetString
 * @constant
 */
export
const SystemRegister_privateDataOctetString: number = 13; /* LONG_NAMED_BIT */

/**
 * @summary privateDataOctetString
 * @constant
 */
export
const privateDataOctetString: number = SystemRegister_privateDataOctetString; /* SHORT_NAMED_BIT */

/**
 * @summary SystemRegister_privateData
 * @constant
 */
export
const SystemRegister_privateData: number = 14; /* LONG_NAMED_BIT */

/**
 * @summary privateData
 * @constant
 */
export
const privateData: number = SystemRegister_privateData; /* SHORT_NAMED_BIT */

/**
 * @summary SystemRegister_privateDataOctetStringInAck
 * @constant
 */
export
const SystemRegister_privateDataOctetStringInAck: number = 15; /* LONG_NAMED_BIT */

/**
 * @summary privateDataOctetStringInAck
 * @constant
 */
export
const privateDataOctetStringInAck: number = SystemRegister_privateDataOctetStringInAck; /* SHORT_NAMED_BIT */

/**
 * @summary SystemRegister_privateDataInAck
 * @constant
 */
export
const SystemRegister_privateDataInAck: number = 16; /* LONG_NAMED_BIT */

/**
 * @summary privateDataInAck
 * @constant
 */
export
const privateDataInAck: number = SystemRegister_privateDataInAck; /* SHORT_NAMED_BIT */

let _cached_decoder_for_SystemRegister: $.ASN1Decoder<SystemRegister> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SystemRegister
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SystemRegister (el: _Element): SystemRegister {
    if (!_cached_decoder_for_SystemRegister) { _cached_decoder_for_SystemRegister = $._decodeBitString; }
    return _cached_decoder_for_SystemRegister(el);
}

let _cached_encoder_for_SystemRegister: $.ASN1Encoder<SystemRegister> | null = null;

/**
 * @summary Encodes a(n) SystemRegister into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SystemRegister, encoded as an ASN.1 Element.
 */
export
function _encode_SystemRegister (value: SystemRegister, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SystemRegister) { _cached_encoder_for_SystemRegister = $._encodeBitString; }
    return _cached_encoder_for_SystemRegister(value, elGetter);
}


/* eslint-enable */
