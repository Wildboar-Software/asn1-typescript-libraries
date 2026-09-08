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
 * @summary SetForwarding
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SetForwarding  ::=  BIT STRING
 * {     forwardingTypeBusy             ( 0),     -- optional parameters
 *     forwardingTypeBusyInt             ( 1),     -- optional parameters
 *     forwardingTypeBusyExt             ( 2),     -- optional parameters
 *     forwardingTypeDND             ( 3),     -- optional parameters
 *     forwardingTypeDNDInt             ( 4),     -- optional parameters
 *     forwardingTypeDNDExt             ( 5),     -- optional parameters
 *     forwardingTypeNoAns             ( 6),     -- optional parameters
 *     forwardingTypeNoAnsInt             ( 7),     -- optional parameters
 *     forwardingTypeNoAnsExt             ( 8),     -- optional parameters
 *     forwardingTypeImmediate         ( 9),     -- optional parameters
 *     forwardingTypeImmInt             (10),     -- optional parameters
 *     forwardingTypeImmExt             (11),     -- optional parameters
 *     forwardDN                 (12),     -- optional parameters
 *     ringCount                 (13),     -- optional parameters
 *     privateData                 (14),     -- optional parameters
 *     privateDataInAck             (15),     -- optional parameters
 *     ackModelMultiStep             (16),     -- misc characteristics
 *     ringDuration                (17) }
 * ```
 */
export
type SetForwarding = BIT_STRING;

/**
 * @summary SetForwarding_forwardingTypeBusy
 * @constant
 */
export
const SetForwarding_forwardingTypeBusy: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary forwardingTypeBusy
 * @constant
 */
export
const forwardingTypeBusy: number = SetForwarding_forwardingTypeBusy; /* SHORT_NAMED_BIT */

/**
 * @summary SetForwarding_forwardingTypeBusyInt
 * @constant
 */
export
const SetForwarding_forwardingTypeBusyInt: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary forwardingTypeBusyInt
 * @constant
 */
export
const forwardingTypeBusyInt: number = SetForwarding_forwardingTypeBusyInt; /* SHORT_NAMED_BIT */

/**
 * @summary SetForwarding_forwardingTypeBusyExt
 * @constant
 */
export
const SetForwarding_forwardingTypeBusyExt: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary forwardingTypeBusyExt
 * @constant
 */
export
const forwardingTypeBusyExt: number = SetForwarding_forwardingTypeBusyExt; /* SHORT_NAMED_BIT */

/**
 * @summary SetForwarding_forwardingTypeDND
 * @constant
 */
export
const SetForwarding_forwardingTypeDND: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary forwardingTypeDND
 * @constant
 */
export
const forwardingTypeDND: number = SetForwarding_forwardingTypeDND; /* SHORT_NAMED_BIT */

/**
 * @summary SetForwarding_forwardingTypeDNDInt
 * @constant
 */
export
const SetForwarding_forwardingTypeDNDInt: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary forwardingTypeDNDInt
 * @constant
 */
export
const forwardingTypeDNDInt: number = SetForwarding_forwardingTypeDNDInt; /* SHORT_NAMED_BIT */

/**
 * @summary SetForwarding_forwardingTypeDNDExt
 * @constant
 */
export
const SetForwarding_forwardingTypeDNDExt: number = 5; /* LONG_NAMED_BIT */

/**
 * @summary forwardingTypeDNDExt
 * @constant
 */
export
const forwardingTypeDNDExt: number = SetForwarding_forwardingTypeDNDExt; /* SHORT_NAMED_BIT */

/**
 * @summary SetForwarding_forwardingTypeNoAns
 * @constant
 */
export
const SetForwarding_forwardingTypeNoAns: number = 6; /* LONG_NAMED_BIT */

/**
 * @summary forwardingTypeNoAns
 * @constant
 */
export
const forwardingTypeNoAns: number = SetForwarding_forwardingTypeNoAns; /* SHORT_NAMED_BIT */

/**
 * @summary SetForwarding_forwardingTypeNoAnsInt
 * @constant
 */
export
const SetForwarding_forwardingTypeNoAnsInt: number = 7; /* LONG_NAMED_BIT */

/**
 * @summary forwardingTypeNoAnsInt
 * @constant
 */
export
const forwardingTypeNoAnsInt: number = SetForwarding_forwardingTypeNoAnsInt; /* SHORT_NAMED_BIT */

/**
 * @summary SetForwarding_forwardingTypeNoAnsExt
 * @constant
 */
export
const SetForwarding_forwardingTypeNoAnsExt: number = 8; /* LONG_NAMED_BIT */

/**
 * @summary forwardingTypeNoAnsExt
 * @constant
 */
export
const forwardingTypeNoAnsExt: number = SetForwarding_forwardingTypeNoAnsExt; /* SHORT_NAMED_BIT */

/**
 * @summary SetForwarding_forwardingTypeImmediate
 * @constant
 */
export
const SetForwarding_forwardingTypeImmediate: number = 9; /* LONG_NAMED_BIT */

/**
 * @summary forwardingTypeImmediate
 * @constant
 */
export
const forwardingTypeImmediate: number = SetForwarding_forwardingTypeImmediate; /* SHORT_NAMED_BIT */

/**
 * @summary SetForwarding_forwardingTypeImmInt
 * @constant
 */
export
const SetForwarding_forwardingTypeImmInt: number = 10; /* LONG_NAMED_BIT */

/**
 * @summary forwardingTypeImmInt
 * @constant
 */
export
const forwardingTypeImmInt: number = SetForwarding_forwardingTypeImmInt; /* SHORT_NAMED_BIT */

/**
 * @summary SetForwarding_forwardingTypeImmExt
 * @constant
 */
export
const SetForwarding_forwardingTypeImmExt: number = 11; /* LONG_NAMED_BIT */

/**
 * @summary forwardingTypeImmExt
 * @constant
 */
export
const forwardingTypeImmExt: number = SetForwarding_forwardingTypeImmExt; /* SHORT_NAMED_BIT */

/**
 * @summary SetForwarding_forwardDN
 * @constant
 */
export
const SetForwarding_forwardDN: number = 12; /* LONG_NAMED_BIT */

/**
 * @summary forwardDN
 * @constant
 */
export
const forwardDN: number = SetForwarding_forwardDN; /* SHORT_NAMED_BIT */

/**
 * @summary SetForwarding_ringCount
 * @constant
 */
export
const SetForwarding_ringCount: number = 13; /* LONG_NAMED_BIT */

/**
 * @summary ringCount
 * @constant
 */
export
const ringCount: number = SetForwarding_ringCount; /* SHORT_NAMED_BIT */

/**
 * @summary SetForwarding_privateData
 * @constant
 */
export
const SetForwarding_privateData: number = 14; /* LONG_NAMED_BIT */

/**
 * @summary privateData
 * @constant
 */
export
const privateData: number = SetForwarding_privateData; /* SHORT_NAMED_BIT */

/**
 * @summary SetForwarding_privateDataInAck
 * @constant
 */
export
const SetForwarding_privateDataInAck: number = 15; /* LONG_NAMED_BIT */

/**
 * @summary privateDataInAck
 * @constant
 */
export
const privateDataInAck: number = SetForwarding_privateDataInAck; /* SHORT_NAMED_BIT */

/**
 * @summary SetForwarding_ackModelMultiStep
 * @constant
 */
export
const SetForwarding_ackModelMultiStep: number = 16; /* LONG_NAMED_BIT */

/**
 * @summary ackModelMultiStep
 * @constant
 */
export
const ackModelMultiStep: number = SetForwarding_ackModelMultiStep; /* SHORT_NAMED_BIT */

/**
 * @summary SetForwarding_ringDuration
 * @constant
 */
export
const SetForwarding_ringDuration: number = 17; /* LONG_NAMED_BIT */

/**
 * @summary ringDuration
 * @constant
 */
export
const ringDuration: number = SetForwarding_ringDuration; /* SHORT_NAMED_BIT */

let _cached_decoder_for_SetForwarding: $.ASN1Decoder<SetForwarding> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SetForwarding
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SetForwarding (el: _Element): SetForwarding {
    if (!_cached_decoder_for_SetForwarding) { _cached_decoder_for_SetForwarding = $._decodeBitString; }
    return _cached_decoder_for_SetForwarding(el);
}

let _cached_encoder_for_SetForwarding: $.ASN1Encoder<SetForwarding> | null = null;

/**
 * @summary Encodes a(n) SetForwarding into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SetForwarding, encoded as an ASN.1 Element.
 */
export
function _encode_SetForwarding (value: SetForwarding, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SetForwarding) { _cached_encoder_for_SetForwarding = $._encodeBitString; }
    return _cached_encoder_for_SetForwarding(value, elGetter);
}


/* eslint-enable */
