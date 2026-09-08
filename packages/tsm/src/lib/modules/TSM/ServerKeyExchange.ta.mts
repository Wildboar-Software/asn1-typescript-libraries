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
import { ServerKeyExchange_rsa, _decode_ServerKeyExchange_rsa, _encode_ServerKeyExchange_rsa } from "../TSM/ServerKeyExchange-rsa.ta.mjs";
// export { ServerKeyExchange_rsa, _decode_ServerKeyExchange_rsa, _encode_ServerKeyExchange_rsa } from "../TSM/ServerKeyExchange-rsa.ta.mjs";
import { ServerKeyExchange_diffie_hellman, _decode_ServerKeyExchange_diffie_hellman, _encode_ServerKeyExchange_diffie_hellman } from "../TSM/ServerKeyExchange-diffie-hellman.ta.mjs";
// export { ServerKeyExchange_diffie_hellman, _decode_ServerKeyExchange_diffie_hellman, _encode_ServerKeyExchange_diffie_hellman } from "../TSM/ServerKeyExchange-diffie-hellman.ta.mjs";


/**
 * @summary ServerKeyExchange
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ServerKeyExchange     ::=     CHOICE {
 * rsa        SEQUENCE {
 *     params        ServerRSAParams,
 *     signed-params    Signature
 *       },
 * diffie-hellman    SEQUENCE {
 *     params        ServerDHParams,
 *     signed-params   Signature
 *     },
 * ...
 * }
 * ```
 */
export
type ServerKeyExchange =
    { rsa: ServerKeyExchange_rsa } /* CHOICE_ALT_ROOT */
    | { diffie_hellman: ServerKeyExchange_diffie_hellman } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;

let _cached_decoder_for_ServerKeyExchange: $.ASN1Decoder<ServerKeyExchange> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ServerKeyExchange
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ServerKeyExchange (el: _Element): ServerKeyExchange {
    if (!_cached_decoder_for_ServerKeyExchange) { _cached_decoder_for_ServerKeyExchange = $._decode_extensible_choice<ServerKeyExchange>({
    "CONTEXT 0": [ "rsa", _decode_ServerKeyExchange_rsa ],
    "CONTEXT 1": [ "diffie_hellman", _decode_ServerKeyExchange_diffie_hellman ]
}); }
    return _cached_decoder_for_ServerKeyExchange(el);
}

let _cached_encoder_for_ServerKeyExchange: $.ASN1Encoder<ServerKeyExchange> | null = null;

/**
 * @summary Encodes a(n) ServerKeyExchange into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ServerKeyExchange, encoded as an ASN.1 Element.
 */
export
function _encode_ServerKeyExchange (value: ServerKeyExchange, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ServerKeyExchange) { _cached_encoder_for_ServerKeyExchange = $._encode_choice<ServerKeyExchange>({
    "rsa": _encode_ServerKeyExchange_rsa,
    "diffie_hellman": _encode_ServerKeyExchange_diffie_hellman,
}, $.BER); }
    return _cached_encoder_for_ServerKeyExchange(value, elGetter);
}


/* eslint-enable */
