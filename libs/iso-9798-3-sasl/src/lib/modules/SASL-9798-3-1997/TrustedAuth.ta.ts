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
import * as $ from "asn1-ts/dist/node/functional";
import {
    Name,
    _decode_Name,
    _encode_Name,
} from "@wildboar/x500/src/lib/modules/InformationFramework/Name.ta";
import {
    Certificate,
    _decode_Certificate,
    _encode_Certificate,
} from "@wildboar/x500/src/lib/modules/AuthenticationFramework/Certificate.ta";

/* START_OF_SYMBOL_DEFINITION TrustedAuth */
/**
 * @summary TrustedAuth
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TrustedAuth  ::=  CHOICE {
 *     authorityName         [0] Name,
 *             -- SubjectName from CA certificate
 *     issuerNameHash        [1] OCTET STRING,
 *             -- SHA-1 hash of Authority's DN
 *     issuerKeyHash         [2] OCTET STRING,
 *             -- SHA-1 hash of Authority's public key
 *     authorityCertificate  [3] Certificate,
 *             -- CA certificate
 *     pkcs15KeyHash         [4] OCTET STRING
 *             -- PKCS #15 key hash
 * }
 * ```
 */
export
type TrustedAuth =
    { authorityName: Name } /* CHOICE_ALT_ROOT */
    | { issuerNameHash: OCTET_STRING } /* CHOICE_ALT_ROOT */
    | { issuerKeyHash: OCTET_STRING } /* CHOICE_ALT_ROOT */
    | { authorityCertificate: Certificate } /* CHOICE_ALT_ROOT */
    | { pkcs15KeyHash: OCTET_STRING } /* CHOICE_ALT_ROOT */;
/* END_OF_SYMBOL_DEFINITION TrustedAuth */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_TrustedAuth */
let _cached_decoder_for_TrustedAuth: $.ASN1Decoder<TrustedAuth> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_TrustedAuth */

/* START_OF_SYMBOL_DEFINITION _decode_TrustedAuth */
/**
 * @summary Decodes an ASN.1 element into a(n) TrustedAuth
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TrustedAuth} The decoded data structure.
 */
export
function _decode_TrustedAuth (el: _Element) {
    if (!_cached_decoder_for_TrustedAuth) { _cached_decoder_for_TrustedAuth = $._decode_inextensible_choice<TrustedAuth>({
    "CONTEXT 0": [ "authorityName", $._decode_implicit<Name>(() => _decode_Name) ],
    "CONTEXT 1": [ "issuerNameHash", $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString) ],
    "CONTEXT 2": [ "issuerKeyHash", $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString) ],
    "CONTEXT 3": [ "authorityCertificate", $._decode_implicit<Certificate>(() => _decode_Certificate) ],
    "CONTEXT 4": [ "pkcs15KeyHash", $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString) ]
}); }
    return _cached_decoder_for_TrustedAuth(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_TrustedAuth */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_TrustedAuth */
let _cached_encoder_for_TrustedAuth: $.ASN1Encoder<TrustedAuth> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_TrustedAuth */

/* START_OF_SYMBOL_DEFINITION _encode_TrustedAuth */
/**
 * @summary Encodes a(n) TrustedAuth into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TrustedAuth, encoded as an ASN.1 Element.
 */
export
function _encode_TrustedAuth (value: TrustedAuth, elGetter: $.ASN1Encoder<TrustedAuth>) {
    if (!_cached_encoder_for_TrustedAuth) { _cached_encoder_for_TrustedAuth = $._encode_choice<TrustedAuth>({
    "authorityName": $._encode_implicit(_TagClass.context, 0, () => _encode_Name, $.BER),
    "issuerNameHash": $._encode_implicit(_TagClass.context, 1, () => $._encodeOctetString, $.BER),
    "issuerKeyHash": $._encode_implicit(_TagClass.context, 2, () => $._encodeOctetString, $.BER),
    "authorityCertificate": $._encode_implicit(_TagClass.context, 3, () => _encode_Certificate, $.BER),
    "pkcs15KeyHash": $._encode_implicit(_TagClass.context, 4, () => $._encodeOctetString, $.BER),
}, $.BER); }
    return _cached_encoder_for_TrustedAuth(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_TrustedAuth */

/* eslint-enable */
