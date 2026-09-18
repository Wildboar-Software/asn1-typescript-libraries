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
import { OriginatorPublicKey, _decode_OriginatorPublicKey, _encode_OriginatorPublicKey } from "../CryptographicMessageSyntax-2009/OriginatorPublicKey.ta.mjs";
// export { OriginatorPublicKey, _decode_OriginatorPublicKey, _encode_OriginatorPublicKey } from "../CryptographicMessageSyntax-2009/OriginatorPublicKey.ta.mjs";


/**
 * @summary OriginatorIdentifierOrKey
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * OriginatorIdentifierOrKey  ::=  CHOICE {
 *     issuerAndSerialNumber IssuerAndSerialNumber,
 *     subjectKeyIdentifier [0] SubjectKeyIdentifier,
 *     originatorKey [1] OriginatorPublicKey }
 * ```
 */
export
type OriginatorIdentifierOrKey =
    { issuerAndSerialNumber: IssuerAndSerialNumber } /* CHOICE_ALT_ROOT */
    | { subjectKeyIdentifier: SubjectKeyIdentifier } /* CHOICE_ALT_ROOT */
    | { originatorKey: OriginatorPublicKey } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_OriginatorIdentifierOrKey: $.ASN1Decoder<OriginatorIdentifierOrKey> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) OriginatorIdentifierOrKey
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_OriginatorIdentifierOrKey (el: _Element): OriginatorIdentifierOrKey {
    if (!_cached_decoder_for_OriginatorIdentifierOrKey) { _cached_decoder_for_OriginatorIdentifierOrKey = $._decode_inextensible_choice<OriginatorIdentifierOrKey>({
    "UNIVERSAL 16": [ "issuerAndSerialNumber", _decode_IssuerAndSerialNumber ],
    "CONTEXT 0": [ "subjectKeyIdentifier", $._decode_implicit<SubjectKeyIdentifier>(() => _decode_SubjectKeyIdentifier) ],
    "CONTEXT 1": [ "originatorKey", $._decode_implicit<OriginatorPublicKey>(() => _decode_OriginatorPublicKey) ]
}); }
    return _cached_decoder_for_OriginatorIdentifierOrKey(el);
}

let _cached_encoder_for_OriginatorIdentifierOrKey: $.ASN1Encoder<OriginatorIdentifierOrKey> | null = null;

/**
 * @summary Encodes a(n) OriginatorIdentifierOrKey into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The OriginatorIdentifierOrKey, encoded as an ASN.1 Element.
 */
export
function _encode_OriginatorIdentifierOrKey (value: OriginatorIdentifierOrKey, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_OriginatorIdentifierOrKey) { _cached_encoder_for_OriginatorIdentifierOrKey = $._encode_choice<OriginatorIdentifierOrKey>({
    "issuerAndSerialNumber": _encode_IssuerAndSerialNumber,
    "subjectKeyIdentifier": $._encode_implicit(_TagClass.context, 0, () => _encode_SubjectKeyIdentifier, $.BER),
    "originatorKey": $._encode_implicit(_TagClass.context, 1, () => _encode_OriginatorPublicKey, $.BER),
}, $.BER); }
    return _cached_encoder_for_OriginatorIdentifierOrKey(value, elGetter);
}


/* eslint-enable */
