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
 * @summary Forwarding
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Forwarding  ::=  BIT STRING
 * {     forwardingTypeBusy             ( 0),
 *     forwardingTypeBusyInt             ( 1),
 *     forwardingTypeBusyExt             ( 2),
 *     forwardingTypeDND             ( 3),
 *     forwardingTypeDNDInt             ( 4),
 *     forwardingTypeDNDExt             ( 5),
 *     forwardingTypeNoAns             ( 6),
 *     forwardingTypeNoAnsInt             ( 7),
 *     forwardingTypeNoAnsExt             ( 8),
 *     forwardingTypeImmediate         ( 9),
 *     forwardingTypeImmInt             (10),
 *     forwardingTypeImmExt             (11),
 *     forwardTo                 (12),
 *     forwardDefaultTypeAndDN         (13),
 *     forwardDefaultType             (14),
 *     forwardDefaultDN             (15),
 *     ringCount                 (16),
 *     privateData                 (17),
 *     ringDuration                (18) }
 * ```
 */
export
type Forwarding = BIT_STRING;

/**
 * @summary Forwarding_forwardingTypeBusy
 * @constant
 */
export
const Forwarding_forwardingTypeBusy: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary forwardingTypeBusy
 * @constant
 */
export
const forwardingTypeBusy: number = Forwarding_forwardingTypeBusy; /* SHORT_NAMED_BIT */

/**
 * @summary Forwarding_forwardingTypeBusyInt
 * @constant
 */
export
const Forwarding_forwardingTypeBusyInt: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary forwardingTypeBusyInt
 * @constant
 */
export
const forwardingTypeBusyInt: number = Forwarding_forwardingTypeBusyInt; /* SHORT_NAMED_BIT */

/**
 * @summary Forwarding_forwardingTypeBusyExt
 * @constant
 */
export
const Forwarding_forwardingTypeBusyExt: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary forwardingTypeBusyExt
 * @constant
 */
export
const forwardingTypeBusyExt: number = Forwarding_forwardingTypeBusyExt; /* SHORT_NAMED_BIT */

/**
 * @summary Forwarding_forwardingTypeDND
 * @constant
 */
export
const Forwarding_forwardingTypeDND: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary forwardingTypeDND
 * @constant
 */
export
const forwardingTypeDND: number = Forwarding_forwardingTypeDND; /* SHORT_NAMED_BIT */

/**
 * @summary Forwarding_forwardingTypeDNDInt
 * @constant
 */
export
const Forwarding_forwardingTypeDNDInt: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary forwardingTypeDNDInt
 * @constant
 */
export
const forwardingTypeDNDInt: number = Forwarding_forwardingTypeDNDInt; /* SHORT_NAMED_BIT */

/**
 * @summary Forwarding_forwardingTypeDNDExt
 * @constant
 */
export
const Forwarding_forwardingTypeDNDExt: number = 5; /* LONG_NAMED_BIT */

/**
 * @summary forwardingTypeDNDExt
 * @constant
 */
export
const forwardingTypeDNDExt: number = Forwarding_forwardingTypeDNDExt; /* SHORT_NAMED_BIT */

/**
 * @summary Forwarding_forwardingTypeNoAns
 * @constant
 */
export
const Forwarding_forwardingTypeNoAns: number = 6; /* LONG_NAMED_BIT */

/**
 * @summary forwardingTypeNoAns
 * @constant
 */
export
const forwardingTypeNoAns: number = Forwarding_forwardingTypeNoAns; /* SHORT_NAMED_BIT */

/**
 * @summary Forwarding_forwardingTypeNoAnsInt
 * @constant
 */
export
const Forwarding_forwardingTypeNoAnsInt: number = 7; /* LONG_NAMED_BIT */

/**
 * @summary forwardingTypeNoAnsInt
 * @constant
 */
export
const forwardingTypeNoAnsInt: number = Forwarding_forwardingTypeNoAnsInt; /* SHORT_NAMED_BIT */

/**
 * @summary Forwarding_forwardingTypeNoAnsExt
 * @constant
 */
export
const Forwarding_forwardingTypeNoAnsExt: number = 8; /* LONG_NAMED_BIT */

/**
 * @summary forwardingTypeNoAnsExt
 * @constant
 */
export
const forwardingTypeNoAnsExt: number = Forwarding_forwardingTypeNoAnsExt; /* SHORT_NAMED_BIT */

/**
 * @summary Forwarding_forwardingTypeImmediate
 * @constant
 */
export
const Forwarding_forwardingTypeImmediate: number = 9; /* LONG_NAMED_BIT */

/**
 * @summary forwardingTypeImmediate
 * @constant
 */
export
const forwardingTypeImmediate: number = Forwarding_forwardingTypeImmediate; /* SHORT_NAMED_BIT */

/**
 * @summary Forwarding_forwardingTypeImmInt
 * @constant
 */
export
const Forwarding_forwardingTypeImmInt: number = 10; /* LONG_NAMED_BIT */

/**
 * @summary forwardingTypeImmInt
 * @constant
 */
export
const forwardingTypeImmInt: number = Forwarding_forwardingTypeImmInt; /* SHORT_NAMED_BIT */

/**
 * @summary Forwarding_forwardingTypeImmExt
 * @constant
 */
export
const Forwarding_forwardingTypeImmExt: number = 11; /* LONG_NAMED_BIT */

/**
 * @summary forwardingTypeImmExt
 * @constant
 */
export
const forwardingTypeImmExt: number = Forwarding_forwardingTypeImmExt; /* SHORT_NAMED_BIT */

/**
 * @summary Forwarding_forwardTo
 * @constant
 */
export
const Forwarding_forwardTo: number = 12; /* LONG_NAMED_BIT */

/**
 * @summary forwardTo
 * @constant
 */
export
const forwardTo: number = Forwarding_forwardTo; /* SHORT_NAMED_BIT */

/**
 * @summary Forwarding_forwardDefaultTypeAndDN
 * @constant
 */
export
const Forwarding_forwardDefaultTypeAndDN: number = 13; /* LONG_NAMED_BIT */

/**
 * @summary forwardDefaultTypeAndDN
 * @constant
 */
export
const forwardDefaultTypeAndDN: number = Forwarding_forwardDefaultTypeAndDN; /* SHORT_NAMED_BIT */

/**
 * @summary Forwarding_forwardDefaultType
 * @constant
 */
export
const Forwarding_forwardDefaultType: number = 14; /* LONG_NAMED_BIT */

/**
 * @summary forwardDefaultType
 * @constant
 */
export
const forwardDefaultType: number = Forwarding_forwardDefaultType; /* SHORT_NAMED_BIT */

/**
 * @summary Forwarding_forwardDefaultDN
 * @constant
 */
export
const Forwarding_forwardDefaultDN: number = 15; /* LONG_NAMED_BIT */

/**
 * @summary forwardDefaultDN
 * @constant
 */
export
const forwardDefaultDN: number = Forwarding_forwardDefaultDN; /* SHORT_NAMED_BIT */

/**
 * @summary Forwarding_ringCount
 * @constant
 */
export
const Forwarding_ringCount: number = 16; /* LONG_NAMED_BIT */

/**
 * @summary ringCount
 * @constant
 */
export
const ringCount: number = Forwarding_ringCount; /* SHORT_NAMED_BIT */

/**
 * @summary Forwarding_privateData
 * @constant
 */
export
const Forwarding_privateData: number = 17; /* LONG_NAMED_BIT */

/**
 * @summary privateData
 * @constant
 */
export
const privateData: number = Forwarding_privateData; /* SHORT_NAMED_BIT */

/**
 * @summary Forwarding_ringDuration
 * @constant
 */
export
const Forwarding_ringDuration: number = 18; /* LONG_NAMED_BIT */

/**
 * @summary ringDuration
 * @constant
 */
export
const ringDuration: number = Forwarding_ringDuration; /* SHORT_NAMED_BIT */

let _cached_decoder_for_Forwarding: $.ASN1Decoder<Forwarding> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Forwarding
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Forwarding (el: _Element): Forwarding {
    if (!_cached_decoder_for_Forwarding) { _cached_decoder_for_Forwarding = $._decodeBitString; }
    return _cached_decoder_for_Forwarding(el);
}

let _cached_encoder_for_Forwarding: $.ASN1Encoder<Forwarding> | null = null;

/**
 * @summary Encodes a(n) Forwarding into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Forwarding, encoded as an ASN.1 Element.
 */
export
function _encode_Forwarding (value: Forwarding, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Forwarding) { _cached_encoder_for_Forwarding = $._encodeBitString; }
    return _cached_encoder_for_Forwarding(value, elGetter);
}


/* eslint-enable */
