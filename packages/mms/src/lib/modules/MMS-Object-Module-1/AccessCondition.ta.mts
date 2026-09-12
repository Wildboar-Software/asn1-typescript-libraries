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
import { Identifier, _decode_Identifier, _encode_Identifier } from "../ISO-9506-MMS-1/Identifier.ta.mjs";
// export { Identifier, _decode_Identifier, _encode_Identifier } from "../ISO-9506-MMS-1/Identifier.ta.mjs";
import { AccessCondition_user, _decode_AccessCondition_user, _encode_AccessCondition_user } from "../MMS-Object-Module-1/AccessCondition-user.ta.mjs";
// export { AccessCondition_user, _decode_AccessCondition_user, _encode_AccessCondition_user } from "../MMS-Object-Module-1/AccessCondition-user.ta.mjs";


// TODO: CHECK_RECURSIVE_DEFINITION
/**
 * @summary AccessCondition
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AccessCondition  ::=  CHOICE {
 *     never               [0] IMPLICIT NULL,
 *     semaphore           [1] Identifier,
 *     user                [2] CHOICE {
 *         association         ApplicationReference,
 *         none                NULL },
 *     password            [3] Authentication-value,
 *     joint               [4] IMPLICIT SEQUENCE OF AccessCondition,
 *     alternate           [5] IMPLICIT SEQUENCE OF AccessCondition
 * }
 * ```
 */
export
type AccessCondition =
    { never: NULL } /* CHOICE_ALT_ROOT */
    | { semaphore: Identifier } /* CHOICE_ALT_ROOT */
    | { user: AccessCondition_user } /* CHOICE_ALT_ROOT */
    | { password: Authentication_value } /* CHOICE_ALT_ROOT */
    | { joint: AccessCondition[] } /* CHOICE_ALT_ROOT */
    | { alternate: AccessCondition[] } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_AccessCondition: $.ASN1Decoder<AccessCondition> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AccessCondition
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AccessCondition (el: _Element): AccessCondition {
    if (!_cached_decoder_for_AccessCondition) { _cached_decoder_for_AccessCondition = $._decode_inextensible_choice<AccessCondition>({
    "CONTEXT 0": [ "never", $._decode_implicit<NULL>(() => $._decodeNull) ],
    "CONTEXT 1": [ "semaphore", $._decode_explicit<Identifier>(() => _decode_Identifier) ],
    "CONTEXT 2": [ "user", $._decode_explicit<AccessCondition_user>(() => _decode_AccessCondition_user) ],
    "CONTEXT 3": [ "password", $._decode_implicit<Authentication_value>(() => _decode_Authentication_value) ],
    "CONTEXT 4": [ "joint", $._decode_implicit<AccessCondition[]>(() => $._decodeSequenceOf<AccessCondition>(() => _decode_AccessCondition)) ],
    "CONTEXT 5": [ "alternate", $._decode_implicit<AccessCondition[]>(() => $._decodeSequenceOf<AccessCondition>(() => _decode_AccessCondition)) ]
}); }
    return _cached_decoder_for_AccessCondition(el);
}

let _cached_encoder_for_AccessCondition: $.ASN1Encoder<AccessCondition> | null = null;

/**
 * @summary Encodes a(n) AccessCondition into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AccessCondition, encoded as an ASN.1 Element.
 */
export
function _encode_AccessCondition (value: AccessCondition, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AccessCondition) { _cached_encoder_for_AccessCondition = $._encode_choice<AccessCondition>({
    "never": $._encode_implicit(_TagClass.context, 0, () => $._encodeNull, $.BER),
    "semaphore": $._encode_explicit(_TagClass.context, 1, () => _encode_Identifier, $.BER),
    "user": $._encode_explicit(_TagClass.context, 2, () => _encode_AccessCondition_user, $.BER),
    "password": $._encode_implicit(_TagClass.context, 3, () => _encode_Authentication_value, $.BER),
    "joint": $._encode_implicit(_TagClass.context, 4, () => $._encodeSequenceOf<AccessCondition>(() => _encode_AccessCondition, $.BER), $.BER),
    "alternate": $._encode_implicit(_TagClass.context, 5, () => $._encodeSequenceOf<AccessCondition>(() => _encode_AccessCondition, $.BER), $.BER),
}, $.BER); }
    return _cached_encoder_for_AccessCondition(value, elGetter);
}


/* eslint-enable */
