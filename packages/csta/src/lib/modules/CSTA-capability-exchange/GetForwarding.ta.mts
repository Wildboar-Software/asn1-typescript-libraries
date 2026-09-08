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
 * @summary GetForwarding
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GetForwarding  ::=  BIT STRING
 * {     privateData                 ( 0),     -- optional parameters
 *     forwardListInAck             ( 1),     -- optional parameters
 *     forwardListImmediateInAck         ( 2),     -- optional parameters
 *     forwardListBusyInAck             ( 3),     -- optional parameters
 *     forwardListDNDInAck             ( 4),     -- optional parameters
 *     forwardListNoAnsInAck             ( 5),     -- optional parameters
 *     forwardListBusyIntInAck         ( 6),     -- optional parameters
 *     forwardListBusyExtInAck         ( 7),     -- optional parameters
 *     forwardListDNDIntInAck             ( 8),     -- optional parameters
 *     forwardListDNDExtInAck             ( 9),     -- optional parameters
 *     forwardListNoAnsIntInAck         (10),     -- optional parameters
 *     forwardListNoAnsExtInAck         (11),     -- optional parameters
 *     forwardListImmIntInAck             (12),     -- optional parameters
 *     forwardListImmExtInAck             (13),     -- optional parameters
 *     forwardDNInAck                 (14),     -- optional parameters
 *     forwardDefaultInAck             (15),     -- optional parameters
 *     forwardDefaultTypeAndDNInAck         (16),     -- optional parameters
 *     forwardDefaultTypeInAck         (17),     -- optional parameters
 *     forwardDefaultDNInAck             (18),     -- optional parameters
 *     ringCountInAck                 (19),     -- optional parameters
 *     privateDataInAck             (20) }
 * ```
 */
export
type GetForwarding = BIT_STRING;

/**
 * @summary GetForwarding_privateData
 * @constant
 */
export
const GetForwarding_privateData: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary privateData
 * @constant
 */
export
const privateData: number = GetForwarding_privateData; /* SHORT_NAMED_BIT */

/**
 * @summary GetForwarding_forwardListInAck
 * @constant
 */
export
const GetForwarding_forwardListInAck: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary forwardListInAck
 * @constant
 */
export
const forwardListInAck: number = GetForwarding_forwardListInAck; /* SHORT_NAMED_BIT */

/**
 * @summary GetForwarding_forwardListImmediateInAck
 * @constant
 */
export
const GetForwarding_forwardListImmediateInAck: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary forwardListImmediateInAck
 * @constant
 */
export
const forwardListImmediateInAck: number = GetForwarding_forwardListImmediateInAck; /* SHORT_NAMED_BIT */

/**
 * @summary GetForwarding_forwardListBusyInAck
 * @constant
 */
export
const GetForwarding_forwardListBusyInAck: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary forwardListBusyInAck
 * @constant
 */
export
const forwardListBusyInAck: number = GetForwarding_forwardListBusyInAck; /* SHORT_NAMED_BIT */

/**
 * @summary GetForwarding_forwardListDNDInAck
 * @constant
 */
export
const GetForwarding_forwardListDNDInAck: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary forwardListDNDInAck
 * @constant
 */
export
const forwardListDNDInAck: number = GetForwarding_forwardListDNDInAck; /* SHORT_NAMED_BIT */

/**
 * @summary GetForwarding_forwardListNoAnsInAck
 * @constant
 */
export
const GetForwarding_forwardListNoAnsInAck: number = 5; /* LONG_NAMED_BIT */

/**
 * @summary forwardListNoAnsInAck
 * @constant
 */
export
const forwardListNoAnsInAck: number = GetForwarding_forwardListNoAnsInAck; /* SHORT_NAMED_BIT */

/**
 * @summary GetForwarding_forwardListBusyIntInAck
 * @constant
 */
export
const GetForwarding_forwardListBusyIntInAck: number = 6; /* LONG_NAMED_BIT */

/**
 * @summary forwardListBusyIntInAck
 * @constant
 */
export
const forwardListBusyIntInAck: number = GetForwarding_forwardListBusyIntInAck; /* SHORT_NAMED_BIT */

/**
 * @summary GetForwarding_forwardListBusyExtInAck
 * @constant
 */
export
const GetForwarding_forwardListBusyExtInAck: number = 7; /* LONG_NAMED_BIT */

/**
 * @summary forwardListBusyExtInAck
 * @constant
 */
export
const forwardListBusyExtInAck: number = GetForwarding_forwardListBusyExtInAck; /* SHORT_NAMED_BIT */

/**
 * @summary GetForwarding_forwardListDNDIntInAck
 * @constant
 */
export
const GetForwarding_forwardListDNDIntInAck: number = 8; /* LONG_NAMED_BIT */

/**
 * @summary forwardListDNDIntInAck
 * @constant
 */
export
const forwardListDNDIntInAck: number = GetForwarding_forwardListDNDIntInAck; /* SHORT_NAMED_BIT */

/**
 * @summary GetForwarding_forwardListDNDExtInAck
 * @constant
 */
export
const GetForwarding_forwardListDNDExtInAck: number = 9; /* LONG_NAMED_BIT */

/**
 * @summary forwardListDNDExtInAck
 * @constant
 */
export
const forwardListDNDExtInAck: number = GetForwarding_forwardListDNDExtInAck; /* SHORT_NAMED_BIT */

/**
 * @summary GetForwarding_forwardListNoAnsIntInAck
 * @constant
 */
export
const GetForwarding_forwardListNoAnsIntInAck: number = 10; /* LONG_NAMED_BIT */

/**
 * @summary forwardListNoAnsIntInAck
 * @constant
 */
export
const forwardListNoAnsIntInAck: number = GetForwarding_forwardListNoAnsIntInAck; /* SHORT_NAMED_BIT */

/**
 * @summary GetForwarding_forwardListNoAnsExtInAck
 * @constant
 */
export
const GetForwarding_forwardListNoAnsExtInAck: number = 11; /* LONG_NAMED_BIT */

/**
 * @summary forwardListNoAnsExtInAck
 * @constant
 */
export
const forwardListNoAnsExtInAck: number = GetForwarding_forwardListNoAnsExtInAck; /* SHORT_NAMED_BIT */

/**
 * @summary GetForwarding_forwardListImmIntInAck
 * @constant
 */
export
const GetForwarding_forwardListImmIntInAck: number = 12; /* LONG_NAMED_BIT */

/**
 * @summary forwardListImmIntInAck
 * @constant
 */
export
const forwardListImmIntInAck: number = GetForwarding_forwardListImmIntInAck; /* SHORT_NAMED_BIT */

/**
 * @summary GetForwarding_forwardListImmExtInAck
 * @constant
 */
export
const GetForwarding_forwardListImmExtInAck: number = 13; /* LONG_NAMED_BIT */

/**
 * @summary forwardListImmExtInAck
 * @constant
 */
export
const forwardListImmExtInAck: number = GetForwarding_forwardListImmExtInAck; /* SHORT_NAMED_BIT */

/**
 * @summary GetForwarding_forwardDNInAck
 * @constant
 */
export
const GetForwarding_forwardDNInAck: number = 14; /* LONG_NAMED_BIT */

/**
 * @summary forwardDNInAck
 * @constant
 */
export
const forwardDNInAck: number = GetForwarding_forwardDNInAck; /* SHORT_NAMED_BIT */

/**
 * @summary GetForwarding_forwardDefaultInAck
 * @constant
 */
export
const GetForwarding_forwardDefaultInAck: number = 15; /* LONG_NAMED_BIT */

/**
 * @summary forwardDefaultInAck
 * @constant
 */
export
const forwardDefaultInAck: number = GetForwarding_forwardDefaultInAck; /* SHORT_NAMED_BIT */

/**
 * @summary GetForwarding_forwardDefaultTypeAndDNInAck
 * @constant
 */
export
const GetForwarding_forwardDefaultTypeAndDNInAck: number = 16; /* LONG_NAMED_BIT */

/**
 * @summary forwardDefaultTypeAndDNInAck
 * @constant
 */
export
const forwardDefaultTypeAndDNInAck: number = GetForwarding_forwardDefaultTypeAndDNInAck; /* SHORT_NAMED_BIT */

/**
 * @summary GetForwarding_forwardDefaultTypeInAck
 * @constant
 */
export
const GetForwarding_forwardDefaultTypeInAck: number = 17; /* LONG_NAMED_BIT */

/**
 * @summary forwardDefaultTypeInAck
 * @constant
 */
export
const forwardDefaultTypeInAck: number = GetForwarding_forwardDefaultTypeInAck; /* SHORT_NAMED_BIT */

/**
 * @summary GetForwarding_forwardDefaultDNInAck
 * @constant
 */
export
const GetForwarding_forwardDefaultDNInAck: number = 18; /* LONG_NAMED_BIT */

/**
 * @summary forwardDefaultDNInAck
 * @constant
 */
export
const forwardDefaultDNInAck: number = GetForwarding_forwardDefaultDNInAck; /* SHORT_NAMED_BIT */

/**
 * @summary GetForwarding_ringCountInAck
 * @constant
 */
export
const GetForwarding_ringCountInAck: number = 19; /* LONG_NAMED_BIT */

/**
 * @summary ringCountInAck
 * @constant
 */
export
const ringCountInAck: number = GetForwarding_ringCountInAck; /* SHORT_NAMED_BIT */

/**
 * @summary GetForwarding_privateDataInAck
 * @constant
 */
export
const GetForwarding_privateDataInAck: number = 20; /* LONG_NAMED_BIT */

/**
 * @summary privateDataInAck
 * @constant
 */
export
const privateDataInAck: number = GetForwarding_privateDataInAck; /* SHORT_NAMED_BIT */

let _cached_decoder_for_GetForwarding: $.ASN1Decoder<GetForwarding> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) GetForwarding
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_GetForwarding (el: _Element): GetForwarding {
    if (!_cached_decoder_for_GetForwarding) { _cached_decoder_for_GetForwarding = $._decodeBitString; }
    return _cached_decoder_for_GetForwarding(el);
}

let _cached_encoder_for_GetForwarding: $.ASN1Encoder<GetForwarding> | null = null;

/**
 * @summary Encodes a(n) GetForwarding into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GetForwarding, encoded as an ASN.1 Element.
 */
export
function _encode_GetForwarding (value: GetForwarding, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_GetForwarding) { _cached_encoder_for_GetForwarding = $._encodeBitString; }
    return _cached_encoder_for_GetForwarding(value, elGetter);
}


/* eslint-enable */
