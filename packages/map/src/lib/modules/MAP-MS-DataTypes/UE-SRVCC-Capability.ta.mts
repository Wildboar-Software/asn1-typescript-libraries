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



export
enum _enum_for_UE_SRVCC_Capability {
    ue_srvcc_not_supported = 0,
    ue_srvcc_supported = 1,
}

/**
 * @summary UE_SRVCC_Capability
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * UE-SRVCC-Capability ::=  ENUMERATED {
 *     ue-srvcc-not-supported  (0),
 *     ue-srvcc-supported  (1),
 *     ...}
 * ```
 * 
 * @enum {number}
 */
export
type UE_SRVCC_Capability = _enum_for_UE_SRVCC_Capability | ENUMERATED;

/**
 * @summary UE_SRVCC_Capability_ue_srvcc_not_supported
 * @constant
 * @type {number}
 */
export
const UE_SRVCC_Capability_ue_srvcc_not_supported: UE_SRVCC_Capability = 0; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary ue_srvcc_not_supported
 * @constant
 * @type {number}
 */
export
const ue_srvcc_not_supported: UE_SRVCC_Capability = UE_SRVCC_Capability_ue_srvcc_not_supported; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary UE_SRVCC_Capability_ue_srvcc_supported
 * @constant
 * @type {number}
 */
export
const UE_SRVCC_Capability_ue_srvcc_supported: UE_SRVCC_Capability = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary ue_srvcc_supported
 * @constant
 * @type {number}
 */
export
const ue_srvcc_supported: UE_SRVCC_Capability = UE_SRVCC_Capability_ue_srvcc_supported; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_UE_SRVCC_Capability: $.ASN1Decoder<UE_SRVCC_Capability> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) UE_SRVCC_Capability
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_UE_SRVCC_Capability (el: _Element): UE_SRVCC_Capability {
    if (!_cached_decoder_for_UE_SRVCC_Capability) { _cached_decoder_for_UE_SRVCC_Capability = $._decodeEnumerated; }
    return _cached_decoder_for_UE_SRVCC_Capability(el);
}

let _cached_encoder_for_UE_SRVCC_Capability: $.ASN1Encoder<UE_SRVCC_Capability> | null = null;

/**
 * @summary Encodes a(n) UE_SRVCC_Capability into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UE_SRVCC_Capability, encoded as an ASN.1 Element.
 */
export
function _encode_UE_SRVCC_Capability (value: UE_SRVCC_Capability, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_UE_SRVCC_Capability) { _cached_encoder_for_UE_SRVCC_Capability = $._encodeEnumerated; }
    return _cached_encoder_for_UE_SRVCC_Capability(value, elGetter);
}


/* eslint-enable */
