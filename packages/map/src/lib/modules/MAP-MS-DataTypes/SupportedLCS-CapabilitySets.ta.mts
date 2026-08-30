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
 * @summary SupportedLCS_CapabilitySets
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SupportedLCS-CapabilitySets  ::=  BIT STRING {
 *     lcsCapabilitySet1 (0),
 *     lcsCapabilitySet2 (1),
 *     lcsCapabilitySet3 (2),
 *     lcsCapabilitySet4 (3) ,
 *     lcsCapabilitySet5 (4) } (SIZE (2..16))
 * ```
 */
export
type SupportedLCS_CapabilitySets = BIT_STRING;

/**
 * @summary SupportedLCS_CapabilitySets_lcsCapabilitySet1
 * @constant
 */
export
const SupportedLCS_CapabilitySets_lcsCapabilitySet1: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary lcsCapabilitySet1
 * @constant
 */
export
const lcsCapabilitySet1: number = SupportedLCS_CapabilitySets_lcsCapabilitySet1; /* SHORT_NAMED_BIT */

/**
 * @summary SupportedLCS_CapabilitySets_lcsCapabilitySet2
 * @constant
 */
export
const SupportedLCS_CapabilitySets_lcsCapabilitySet2: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary lcsCapabilitySet2
 * @constant
 */
export
const lcsCapabilitySet2: number = SupportedLCS_CapabilitySets_lcsCapabilitySet2; /* SHORT_NAMED_BIT */

/**
 * @summary SupportedLCS_CapabilitySets_lcsCapabilitySet3
 * @constant
 */
export
const SupportedLCS_CapabilitySets_lcsCapabilitySet3: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary lcsCapabilitySet3
 * @constant
 */
export
const lcsCapabilitySet3: number = SupportedLCS_CapabilitySets_lcsCapabilitySet3; /* SHORT_NAMED_BIT */

/**
 * @summary SupportedLCS_CapabilitySets_lcsCapabilitySet4
 * @constant
 */
export
const SupportedLCS_CapabilitySets_lcsCapabilitySet4: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary lcsCapabilitySet4
 * @constant
 */
export
const lcsCapabilitySet4: number = SupportedLCS_CapabilitySets_lcsCapabilitySet4; /* SHORT_NAMED_BIT */

/**
 * @summary SupportedLCS_CapabilitySets_lcsCapabilitySet5
 * @constant
 */
export
const SupportedLCS_CapabilitySets_lcsCapabilitySet5: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary lcsCapabilitySet5
 * @constant
 */
export
const lcsCapabilitySet5: number = SupportedLCS_CapabilitySets_lcsCapabilitySet5; /* SHORT_NAMED_BIT */

let _cached_decoder_for_SupportedLCS_CapabilitySets: $.ASN1Decoder<SupportedLCS_CapabilitySets> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SupportedLCS_CapabilitySets
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SupportedLCS_CapabilitySets (el: _Element): SupportedLCS_CapabilitySets {
    if (!_cached_decoder_for_SupportedLCS_CapabilitySets) { _cached_decoder_for_SupportedLCS_CapabilitySets = $._decodeBitString; }
    return _cached_decoder_for_SupportedLCS_CapabilitySets(el);
}

let _cached_encoder_for_SupportedLCS_CapabilitySets: $.ASN1Encoder<SupportedLCS_CapabilitySets> | null = null;

/**
 * @summary Encodes a(n) SupportedLCS_CapabilitySets into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SupportedLCS_CapabilitySets, encoded as an ASN.1 Element.
 */
export
function _encode_SupportedLCS_CapabilitySets (value: SupportedLCS_CapabilitySets, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SupportedLCS_CapabilitySets) { _cached_encoder_for_SupportedLCS_CapabilitySets = $._encodeBitString; }
    return _cached_encoder_for_SupportedLCS_CapabilitySets(value, elGetter);
}


/* eslint-enable */
