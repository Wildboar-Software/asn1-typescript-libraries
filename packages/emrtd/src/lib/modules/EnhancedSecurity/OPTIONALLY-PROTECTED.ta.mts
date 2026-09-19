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
import { SIGNED, _get_decoder_for_SIGNED, _get_encoder_for_SIGNED } from "../AuthenticationFramework/SIGNED.ta.mjs";
// export { SIGNED, _get_decoder_for_SIGNED, _get_encoder_for_SIGNED } from "../AuthenticationFramework/SIGNED.ta.mjs";


/**
 * @summary OPTIONALLY_PROTECTED
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * OPTIONALLY-PROTECTED{Type}  ::=  CHOICE {
 *   unsigned       Type,
 *   signed         SIGNED{Type} }
 * ```
 */
export
type OPTIONALLY_PROTECTED<Type> =
    { unsigned: Type } /* CHOICE_ALT_ROOT */
    | { signed: SIGNED<Type> } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_OPTIONALLY_PROTECTED: $.ASN1Decoder<OPTIONALLY_PROTECTED<Type>> | null = null;

/**
 * @summary Returns a function that will decode an ASN.1 element into a(n) OPTIONALLY_PROTECTED
 * @function
 * @returns A function that will decode an ASN.1 element.
 */
export
function _get_decoder_for_OPTIONALLY_PROTECTED<Type>(_decode_Type: $.ASN1Decoder<Type>): $.ASN1Decoder<OPTIONALLY_PROTECTED<Type>> {
    return $._decode_inextensible_choice<OPTIONALLY_PROTECTED<Type>>({
    "*": [ "unsigned", _decode_Type ],
    "UNIVERSAL 16": [ "signed", _get_decoder_for_SIGNED<Type>(_decode_Type) ]
});
}

let _cached_encoder_for_OPTIONALLY_PROTECTED: $.ASN1Encoder<OPTIONALLY_PROTECTED<Type>> | null = null;

/**
 * @summary Returns a function that will encode a(n) OPTIONALLY_PROTECTED into an ASN.1 Element.
 * @function
 * @returns A function that will encode a(n) OPTIONALLY_PROTECTED as an ASN.1 element.
 */
export
function _get_encoder_for_OPTIONALLY_PROTECTED<Type>(_encode_Type: $.ASN1Encoder<Type>): $.ASN1Encoder<OPTIONALLY_PROTECTED<Type>> {
    return $._encode_choice<OPTIONALLY_PROTECTED<Type>>({
    "unsigned": _encode_Type,
    "signed": _get_encoder_for_SIGNED<Type>(_encode_Type),
}, $.BER);
}

/* eslint-enable */
