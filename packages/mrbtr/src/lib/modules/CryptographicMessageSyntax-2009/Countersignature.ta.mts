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
import { SignerInfo, _decode_SignerInfo, _encode_SignerInfo } from "../CryptographicMessageSyntax-2009/SignerInfo.ta.mjs";
// export { SignerInfo, _decode_SignerInfo, _encode_SignerInfo } from "../CryptographicMessageSyntax-2009/SignerInfo.ta.mjs";


/**
 * @summary Countersignature
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Countersignature  ::=  SignerInfo
 * ```
 */
export
type Countersignature = SignerInfo; // DefinedType

let _cached_decoder_for_Countersignature: $.ASN1Decoder<Countersignature> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Countersignature
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Countersignature (el: _Element): Countersignature {
    if (!_cached_decoder_for_Countersignature) { _cached_decoder_for_Countersignature = _decode_SignerInfo; }
    return _cached_decoder_for_Countersignature(el);
}

let _cached_encoder_for_Countersignature: $.ASN1Encoder<Countersignature> | null = null;

/**
 * @summary Encodes a(n) Countersignature into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Countersignature, encoded as an ASN.1 Element.
 */
export
function _encode_Countersignature (value: Countersignature, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Countersignature) { _cached_encoder_for_Countersignature = _encode_SignerInfo; }
    return _cached_encoder_for_Countersignature(value, elGetter);
}


/* eslint-enable */
