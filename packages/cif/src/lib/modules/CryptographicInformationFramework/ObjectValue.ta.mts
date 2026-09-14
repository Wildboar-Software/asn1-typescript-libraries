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
import { ReferencedValue, _decode_ReferencedValue, _encode_ReferencedValue } from "../CryptographicInformationFramework/ReferencedValue.ta.mjs";
// export { ReferencedValue, _decode_ReferencedValue, _encode_ReferencedValue } from "../CryptographicInformationFramework/ReferencedValue.ta.mjs";


/**
 * @summary ObjectValue
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ObjectValue {Type}  ::=  CHOICE {
 *     indirect    ReferencedValue,
 *     direct      [0] Type
 * }
 * ```
 */
export
type ObjectValue<Type> =
    { indirect: ReferencedValue } /* CHOICE_ALT_ROOT */
    | { direct: Type } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_ObjectValue: $.ASN1Decoder<ObjectValue<Type>> | null = null;

/**
 * @summary Returns a function that will decode an ASN.1 element into a(n) ObjectValue
 * @function
 * @returns A function that will decode an ASN.1 element.
 */
export
function _get_decoder_for_ObjectValue<Type>(_decode_Type: $.ASN1Decoder<Type>): $.ASN1Decoder<ObjectValue<Type>> {
    return $._decode_inextensible_choice<ObjectValue<Type>>({
    "UNIVERSAL 16": [ "indirect", _decode_ReferencedValue ],
    "UNIVERSAL 19": [ "indirect", _decode_ReferencedValue ],
    "UNIVERSAL 22": [ "indirect", _decode_ReferencedValue ],
    "CONTEXT 3": [ "indirect", _decode_ReferencedValue ],
    "CONTEXT 0": [ "direct", $._decode_implicit<Type>(() => _decode_Type) ]
});
}

let _cached_encoder_for_ObjectValue: $.ASN1Encoder<ObjectValue<Type>> | null = null;

/**
 * @summary Returns a function that will encode a(n) ObjectValue into an ASN.1 Element.
 * @function
 * @returns A function that will encode a(n) ObjectValue as an ASN.1 element.
 */
export
function _get_encoder_for_ObjectValue<Type>(_encode_Type: $.ASN1Encoder<Type>): $.ASN1Encoder<ObjectValue<Type>> {
    return $._encode_choice<ObjectValue<Type>>({
    "indirect": _encode_ReferencedValue,
    "direct": $._encode_implicit(_TagClass.context, 0, () => _encode_Type, $.BER),
}, $.BER);
}

/* eslint-enable */
