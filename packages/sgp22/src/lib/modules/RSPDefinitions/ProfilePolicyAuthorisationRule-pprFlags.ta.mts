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
 * @summary ProfilePolicyAuthorisationRule_pprFlags
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ProfilePolicyAuthorisationRule-pprFlags ::= BIT STRING { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type ProfilePolicyAuthorisationRule_pprFlags = BIT_STRING;

/**
 * @summary ProfilePolicyAuthorisationRule_pprFlags_consentRequired
 * @constant
 */
export
const ProfilePolicyAuthorisationRule_pprFlags_consentRequired: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary consentRequired
 * @constant
 */
export
const consentRequired: number = ProfilePolicyAuthorisationRule_pprFlags_consentRequired; /* SHORT_NAMED_BIT */

let _cached_decoder_for_ProfilePolicyAuthorisationRule_pprFlags: $.ASN1Decoder<ProfilePolicyAuthorisationRule_pprFlags> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ProfilePolicyAuthorisationRule_pprFlags
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ProfilePolicyAuthorisationRule_pprFlags (el: _Element): ProfilePolicyAuthorisationRule_pprFlags {
    if (!_cached_decoder_for_ProfilePolicyAuthorisationRule_pprFlags) { _cached_decoder_for_ProfilePolicyAuthorisationRule_pprFlags = $._decodeBitString; }
    return _cached_decoder_for_ProfilePolicyAuthorisationRule_pprFlags(el);
}

let _cached_encoder_for_ProfilePolicyAuthorisationRule_pprFlags: $.ASN1Encoder<ProfilePolicyAuthorisationRule_pprFlags> | null = null;

/**
 * @summary Encodes a(n) ProfilePolicyAuthorisationRule_pprFlags into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ProfilePolicyAuthorisationRule_pprFlags, encoded as an ASN.1 Element.
 */
export
function _encode_ProfilePolicyAuthorisationRule_pprFlags (value: ProfilePolicyAuthorisationRule_pprFlags, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ProfilePolicyAuthorisationRule_pprFlags) { _cached_encoder_for_ProfilePolicyAuthorisationRule_pprFlags = $._encodeBitString; }
    return _cached_encoder_for_ProfilePolicyAuthorisationRule_pprFlags(value, elGetter);
}


/* eslint-enable */
