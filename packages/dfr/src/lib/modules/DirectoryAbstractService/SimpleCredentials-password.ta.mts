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



/**
 * @summary SimpleCredentials_password
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SimpleCredentials-password ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type SimpleCredentials_password =
    { unprotected: OCTET_STRING } /* CHOICE_ALT_ROOT */
    | { protected_: HASH<OCTET_STRING> } /* CHOICE_ALT_ROOT */
    | { userPwd: UserPwd } /* CHOICE_ALT_EXT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;

let _cached_decoder_for_SimpleCredentials_password: $.ASN1Decoder<SimpleCredentials_password> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SimpleCredentials_password
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SimpleCredentials_password (el: _Element): SimpleCredentials_password {
    if (!_cached_decoder_for_SimpleCredentials_password) { _cached_decoder_for_SimpleCredentials_password = $._decode_extensible_choice<SimpleCredentials_password>({
    "UNIVERSAL 4": [ "unprotected", $._decodeOctetString ],
    "// FIXME: COULD_NOT_COMPILE_TAG_KEY": [ "protected", _get_decoder_for_HASH<OCTET_STRING>($._decodeOctetString) ],
    "CONTEXT 0": [ "userPwd", $._decode_implicit<UserPwd>(() => _decode_UserPwd) ]
}); }
    return _cached_decoder_for_SimpleCredentials_password(el);
}

let _cached_encoder_for_SimpleCredentials_password: $.ASN1Encoder<SimpleCredentials_password> | null = null;

/**
 * @summary Encodes a(n) SimpleCredentials_password into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SimpleCredentials_password, encoded as an ASN.1 Element.
 */
export
function _encode_SimpleCredentials_password (value: SimpleCredentials_password, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SimpleCredentials_password) { _cached_encoder_for_SimpleCredentials_password = $._encode_choice<SimpleCredentials_password>({
    "unprotected": $._encodeOctetString,
    "protected_": _get_encoder_for_HASH<OCTET_STRING>($._encodeOctetString),
    "userPwd": $._encode_implicit(_TagClass.context, 0, () => _encode_UserPwd, $.BER),
}, $.BER); }
    return _cached_encoder_for_SimpleCredentials_password(value, elGetter);
}


/* eslint-enable */
