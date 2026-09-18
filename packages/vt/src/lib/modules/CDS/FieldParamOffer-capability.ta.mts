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
 * @summary FieldParamOffer_capability
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FieldParamOffer-capability ::= BIT STRING { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type FieldParamOffer_capability = BIT_STRING;

/**
 * @summary FieldParamOffer_capability_yes
 * @constant
 */
export
const FieldParamOffer_capability_yes: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary yes
 * @constant
 */
export
const yes: number = FieldParamOffer_capability_yes; /* SHORT_NAMED_BIT */

/**
 * @summary FieldParamOffer_capability_no
 * @constant
 */
export
const FieldParamOffer_capability_no: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary no
 * @constant
 */
export
const no: number = FieldParamOffer_capability_no; /* SHORT_NAMED_BIT */

let _cached_decoder_for_FieldParamOffer_capability: $.ASN1Decoder<FieldParamOffer_capability> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) FieldParamOffer_capability
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_FieldParamOffer_capability (el: _Element): FieldParamOffer_capability {
    if (!_cached_decoder_for_FieldParamOffer_capability) { _cached_decoder_for_FieldParamOffer_capability = $._decodeBitString; }
    return _cached_decoder_for_FieldParamOffer_capability(el);
}

let _cached_encoder_for_FieldParamOffer_capability: $.ASN1Encoder<FieldParamOffer_capability> | null = null;

/**
 * @summary Encodes a(n) FieldParamOffer_capability into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The FieldParamOffer_capability, encoded as an ASN.1 Element.
 */
export
function _encode_FieldParamOffer_capability (value: FieldParamOffer_capability, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_FieldParamOffer_capability) { _cached_encoder_for_FieldParamOffer_capability = $._encodeBitString; }
    return _cached_encoder_for_FieldParamOffer_capability(value, elGetter);
}


/* eslint-enable */
