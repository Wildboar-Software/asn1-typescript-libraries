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
import { ECPrivateKey, _decode_ECPrivateKey, _encode_ECPrivateKey } from "../SEC1-v1-9/ECPrivateKey.ta.js";
export { ECPrivateKey, _decode_ECPrivateKey, _encode_ECPrivateKey } from "../SEC1-v1-9/ECPrivateKey.ta.js";
import { SubjectPublicKeyInfo, _decode_SubjectPublicKeyInfo, _encode_SubjectPublicKeyInfo } from "../SEC1-v1-9/SubjectPublicKeyInfo.ta.js";
export { SubjectPublicKeyInfo, _decode_SubjectPublicKeyInfo, _encode_SubjectPublicKeyInfo } from "../SEC1-v1-9/SubjectPublicKeyInfo.ta.js";
import { ECDSA_Signature, _decode_ECDSA_Signature, _encode_ECDSA_Signature } from "../SEC1-v1-9/ECDSA-Signature.ta.js";
export { ECDSA_Signature, _decode_ECDSA_Signature, _encode_ECDSA_Signature } from "../SEC1-v1-9/ECDSA-Signature.ta.js";
import { ECIES_Ciphertext_Value, _decode_ECIES_Ciphertext_Value, _encode_ECIES_Ciphertext_Value } from "../SEC1-v1-9/ECIES-Ciphertext-Value.ta.js";
export { ECIES_Ciphertext_Value, _decode_ECIES_Ciphertext_Value, _encode_ECIES_Ciphertext_Value } from "../SEC1-v1-9/ECIES-Ciphertext-Value.ta.js";
import { ASN1SharedInfo, _decode_ASN1SharedInfo, _encode_ASN1SharedInfo } from "../SEC1-v1-9/ASN1SharedInfo.ta.js";
export { ASN1SharedInfo, _decode_ASN1SharedInfo, _encode_ASN1SharedInfo } from "../SEC1-v1-9/ASN1SharedInfo.ta.js";


/* START_OF_SYMBOL_DEFINITION SEC1_PDU */
/**
 * @summary SEC1_PDU
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SEC1-PDU  ::=  CHOICE {
 *     privateKey [0] ECPrivateKey,
 *     spki [1] SubjectPublicKeyInfo,
 *     ecdsa [2] ECDSA-Signature,
 *     ecies [3] ECIES-Ciphertext-Value,
 *     sharedinfo [4] ASN1SharedInfo,
 *     ...
 * }
 * ```
 */
export
type SEC1_PDU =
    { privateKey: ECPrivateKey } /* CHOICE_ALT_ROOT */
    | { spki: SubjectPublicKeyInfo } /* CHOICE_ALT_ROOT */
    | { ecdsa: ECDSA_Signature } /* CHOICE_ALT_ROOT */
    | { ecies: ECIES_Ciphertext_Value } /* CHOICE_ALT_ROOT */
    | { sharedinfo: ASN1SharedInfo } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;
/* END_OF_SYMBOL_DEFINITION SEC1_PDU */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_SEC1_PDU */
let _cached_decoder_for_SEC1_PDU: $.ASN1Decoder<SEC1_PDU> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_SEC1_PDU */

/* START_OF_SYMBOL_DEFINITION _decode_SEC1_PDU */
/**
 * @summary Decodes an ASN.1 element into a(n) SEC1_PDU
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SEC1_PDU} The decoded data structure.
 */
export
function _decode_SEC1_PDU (el: _Element) {
    if (!_cached_decoder_for_SEC1_PDU) { _cached_decoder_for_SEC1_PDU = $._decode_extensible_choice<SEC1_PDU>({
    "CONTEXT 0": [ "privateKey", $._decode_implicit<ECPrivateKey>(() => _decode_ECPrivateKey) ],
    "CONTEXT 1": [ "spki", $._decode_implicit<SubjectPublicKeyInfo>(() => _decode_SubjectPublicKeyInfo) ],
    "CONTEXT 2": [ "ecdsa", $._decode_explicit<ECDSA_Signature>(() => _decode_ECDSA_Signature) ],
    "CONTEXT 3": [ "ecies", $._decode_implicit<ECIES_Ciphertext_Value>(() => _decode_ECIES_Ciphertext_Value) ],
    "CONTEXT 4": [ "sharedinfo", $._decode_implicit<ASN1SharedInfo>(() => _decode_ASN1SharedInfo) ]
}); }
    return _cached_decoder_for_SEC1_PDU(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_SEC1_PDU */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_SEC1_PDU */
let _cached_encoder_for_SEC1_PDU: $.ASN1Encoder<SEC1_PDU> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_SEC1_PDU */

/* START_OF_SYMBOL_DEFINITION _encode_SEC1_PDU */
/**
 * @summary Encodes a(n) SEC1_PDU into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SEC1_PDU, encoded as an ASN.1 Element.
 */
export
function _encode_SEC1_PDU (value: SEC1_PDU, elGetter: $.ASN1Encoder<SEC1_PDU>) {
    if (!_cached_encoder_for_SEC1_PDU) { _cached_encoder_for_SEC1_PDU = $._encode_choice<SEC1_PDU>({
    "privateKey": $._encode_implicit(_TagClass.context, 0, () => _encode_ECPrivateKey, $.BER),
    "spki": $._encode_implicit(_TagClass.context, 1, () => _encode_SubjectPublicKeyInfo, $.BER),
    "ecdsa": $._encode_explicit(_TagClass.context, 2, () => _encode_ECDSA_Signature, $.BER),
    "ecies": $._encode_implicit(_TagClass.context, 3, () => _encode_ECIES_Ciphertext_Value, $.BER),
    "sharedinfo": $._encode_implicit(_TagClass.context, 4, () => _encode_ASN1SharedInfo, $.BER),
}, $.BER); }
    return _cached_encoder_for_SEC1_PDU(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_SEC1_PDU */

/* eslint-enable */
