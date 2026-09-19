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
import { IssuerAndSerialNumber, _decode_IssuerAndSerialNumber, _encode_IssuerAndSerialNumber } from "../CryptographicMessageSyntax/IssuerAndSerialNumber.ta.mjs";
// export { IssuerAndSerialNumber, _decode_IssuerAndSerialNumber, _encode_IssuerAndSerialNumber } from "../CryptographicMessageSyntax/IssuerAndSerialNumber.ta.mjs";
import { RecipientKeyIdentifier, _decode_RecipientKeyIdentifier, _encode_RecipientKeyIdentifier } from "../CryptographicMessageSyntax/RecipientKeyIdentifier.ta.mjs";
// export { RecipientKeyIdentifier, _decode_RecipientKeyIdentifier, _encode_RecipientKeyIdentifier } from "../CryptographicMessageSyntax/RecipientKeyIdentifier.ta.mjs";


/**
 * @summary KeyAgreeRecipientIdentifier
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * KeyAgreeRecipientIdentifier  ::=  CHOICE {
 *   issuerAndSerialNumber  IssuerAndSerialNumber,
 *   rKeyId                 [0] IMPLICIT RecipientKeyIdentifier
 * }
 * ```
 */
export
type KeyAgreeRecipientIdentifier =
    { issuerAndSerialNumber: IssuerAndSerialNumber } /* CHOICE_ALT_ROOT */
    | { rKeyId: RecipientKeyIdentifier } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_KeyAgreeRecipientIdentifier: $.ASN1Decoder<KeyAgreeRecipientIdentifier> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) KeyAgreeRecipientIdentifier
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_KeyAgreeRecipientIdentifier (el: _Element): KeyAgreeRecipientIdentifier {
    if (!_cached_decoder_for_KeyAgreeRecipientIdentifier) { _cached_decoder_for_KeyAgreeRecipientIdentifier = $._decode_inextensible_choice<KeyAgreeRecipientIdentifier>({
    "UNIVERSAL 16": [ "issuerAndSerialNumber", _decode_IssuerAndSerialNumber ],
    "CONTEXT 0": [ "rKeyId", $._decode_implicit<RecipientKeyIdentifier>(() => _decode_RecipientKeyIdentifier) ]
}); }
    return _cached_decoder_for_KeyAgreeRecipientIdentifier(el);
}

let _cached_encoder_for_KeyAgreeRecipientIdentifier: $.ASN1Encoder<KeyAgreeRecipientIdentifier> | null = null;

/**
 * @summary Encodes a(n) KeyAgreeRecipientIdentifier into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The KeyAgreeRecipientIdentifier, encoded as an ASN.1 Element.
 */
export
function _encode_KeyAgreeRecipientIdentifier (value: KeyAgreeRecipientIdentifier, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_KeyAgreeRecipientIdentifier) { _cached_encoder_for_KeyAgreeRecipientIdentifier = $._encode_choice<KeyAgreeRecipientIdentifier>({
    "issuerAndSerialNumber": _encode_IssuerAndSerialNumber,
    "rKeyId": $._encode_implicit(_TagClass.context, 0, () => _encode_RecipientKeyIdentifier, $.BER),
}, $.BER); }
    return _cached_encoder_for_KeyAgreeRecipientIdentifier(value, elGetter);
}


/* eslint-enable */
