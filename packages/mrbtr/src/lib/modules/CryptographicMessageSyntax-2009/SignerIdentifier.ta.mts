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
import { IssuerAndSerialNumber, _decode_IssuerAndSerialNumber, _encode_IssuerAndSerialNumber } from "../CryptographicMessageSyntax-2009/IssuerAndSerialNumber.ta.mjs";
// export { IssuerAndSerialNumber, _decode_IssuerAndSerialNumber, _encode_IssuerAndSerialNumber } from "../CryptographicMessageSyntax-2009/IssuerAndSerialNumber.ta.mjs";
import { SubjectKeyIdentifier, _decode_SubjectKeyIdentifier, _encode_SubjectKeyIdentifier } from "../CryptographicMessageSyntax-2009/SubjectKeyIdentifier.ta.mjs";
// export { SubjectKeyIdentifier, _decode_SubjectKeyIdentifier, _encode_SubjectKeyIdentifier } from "../CryptographicMessageSyntax-2009/SubjectKeyIdentifier.ta.mjs";


/**
 * @summary SignerIdentifier
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SignerIdentifier  ::=  CHOICE {
 *     issuerAndSerialNumber IssuerAndSerialNumber,
 *     ...,
 *     [[3: subjectKeyIdentifier [0] SubjectKeyIdentifier ]] }
 * ```
 */
export
type SignerIdentifier =
    { issuerAndSerialNumber: IssuerAndSerialNumber } /* CHOICE_ALT_ROOT */
    | { subjectKeyIdentifier: SubjectKeyIdentifier } /* CHOICE_ALT_EXT CHOICE_ALT_VERSION 3 */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;

let _cached_decoder_for_SignerIdentifier: $.ASN1Decoder<SignerIdentifier> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SignerIdentifier
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SignerIdentifier (el: _Element): SignerIdentifier {
    if (!_cached_decoder_for_SignerIdentifier) { _cached_decoder_for_SignerIdentifier = $._decode_extensible_choice<SignerIdentifier>({
    "UNIVERSAL 16": [ "issuerAndSerialNumber", _decode_IssuerAndSerialNumber ],
    "CONTEXT 0": [ "subjectKeyIdentifier", $._decode_implicit<SubjectKeyIdentifier>(() => _decode_SubjectKeyIdentifier) ]
}); }
    return _cached_decoder_for_SignerIdentifier(el);
}

let _cached_encoder_for_SignerIdentifier: $.ASN1Encoder<SignerIdentifier> | null = null;

/**
 * @summary Encodes a(n) SignerIdentifier into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SignerIdentifier, encoded as an ASN.1 Element.
 */
export
function _encode_SignerIdentifier (value: SignerIdentifier, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SignerIdentifier) { _cached_encoder_for_SignerIdentifier = $._encode_choice<SignerIdentifier>({
    "issuerAndSerialNumber": _encode_IssuerAndSerialNumber,
    "subjectKeyIdentifier": $._encode_implicit(_TagClass.context, 0, () => _encode_SubjectKeyIdentifier, $.BER),
}, $.BER); }
    return _cached_encoder_for_SignerIdentifier(value, elGetter);
}


/* eslint-enable */
