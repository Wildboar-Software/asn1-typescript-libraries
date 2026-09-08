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
import { Opaque, _decode_Opaque, _encode_Opaque } from "../TSM/Opaque.ta.mjs";
// export { Opaque, _decode_Opaque, _encode_Opaque } from "../TSM/Opaque.ta.mjs";


/**
 * @summary HASH
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * HASH{ToBeHashed}     ::=     Opaque(SIZE(0..255))
 *             (CONSTRAINED BY {ToBeHashed})
 * ```
 */
export
type HASH <ToBeHashed> = Opaque; // DefinedType

let _cached_decoder_for_HASH: $.ASN1Decoder<HASH<ToBeHashed>> | null = null;

/**
 * @summary Returns a function that will decode an ASN.1 element into a(n) HASH
 * @function
 * @returns A function that will decode an ASN.1 element.
 */
export
function _get_decoder_for_HASH<ToBeHashed>(_decode_ToBeHashed: $.ASN1Decoder<ToBeHashed>): $.ASN1Decoder<HASH<ToBeHashed>> {
    return _decode_Opaque;
}

let _cached_encoder_for_HASH: $.ASN1Encoder<HASH<ToBeHashed>> | null = null;

/**
 * @summary Returns a function that will encode a(n) HASH into an ASN.1 Element.
 * @function
 * @returns A function that will encode a(n) HASH as an ASN.1 element.
 */
export
function _get_encoder_for_HASH<ToBeHashed>(_encode_ToBeHashed: $.ASN1Encoder<ToBeHashed>): $.ASN1Encoder<HASH<ToBeHashed>> {
    return _encode_Opaque;
}

/* eslint-enable */
