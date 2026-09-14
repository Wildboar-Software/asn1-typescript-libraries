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
import { URL_url, _decode_URL_url, _encode_URL_url } from "../CryptographicInformationFramework/URL-url.ta.mjs";
// export { URL_url, _decode_URL_url, _encode_URL_url } from "../CryptographicInformationFramework/URL-url.ta.mjs";
import { URL_urlWithDigest, _decode_URL_urlWithDigest, _encode_URL_urlWithDigest } from "../CryptographicInformationFramework/URL-urlWithDigest.ta.mjs";
// export { URL_urlWithDigest, _decode_URL_urlWithDigest, _encode_URL_urlWithDigest } from "../CryptographicInformationFramework/URL-urlWithDigest.ta.mjs";


/**
 * @summary URL
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * URL  ::=  CHOICE {
 *     url       CHOICE {
 *         printable PrintableString,
 *         ia5 IA5String
 *     },
 *     urlWithDigest [3] SEQUENCE {
 *         url     IA5String,
 *         digest  DigestInfoWithDefault
 *     }
 * }
 * ```
 */
export
type URL =
    { url: URL_url } /* CHOICE_ALT_ROOT */
    | { urlWithDigest: URL_urlWithDigest } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_URL: $.ASN1Decoder<URL> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) URL
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_URL (el: _Element): URL {
    if (!_cached_decoder_for_URL) { _cached_decoder_for_URL = $._decode_inextensible_choice<URL>({
    "UNIVERSAL 19": [ "url", _decode_URL_url ],
    "UNIVERSAL 22": [ "url", _decode_URL_url ],
    "CONTEXT 3": [ "urlWithDigest", $._decode_implicit<URL_urlWithDigest>(() => _decode_URL_urlWithDigest) ]
}); }
    return _cached_decoder_for_URL(el);
}

let _cached_encoder_for_URL: $.ASN1Encoder<URL> | null = null;

/**
 * @summary Encodes a(n) URL into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The URL, encoded as an ASN.1 Element.
 */
export
function _encode_URL (value: URL, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_URL) { _cached_encoder_for_URL = $._encode_choice<URL>({
    "url": _encode_URL_url,
    "urlWithDigest": $._encode_implicit(_TagClass.context, 3, () => _encode_URL_urlWithDigest, $.BER),
}, $.BER); }
    return _cached_encoder_for_URL(value, elGetter);
}


/* eslint-enable */
