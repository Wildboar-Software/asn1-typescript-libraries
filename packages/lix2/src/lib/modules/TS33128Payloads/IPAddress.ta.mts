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
import { IPv4Address, _decode_IPv4Address, _encode_IPv4Address } from "../TS33128Payloads/IPv4Address.ta.mjs";
// export { IPv4Address, _decode_IPv4Address, _encode_IPv4Address } from "../TS33128Payloads/IPv4Address.ta.mjs";
import { IPv6Address, _decode_IPv6Address, _encode_IPv6Address } from "../TS33128Payloads/IPv6Address.ta.mjs";
// export { IPv6Address, _decode_IPv6Address, _encode_IPv6Address } from "../TS33128Payloads/IPv6Address.ta.mjs";


/**
 * @summary IPAddress
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IPAddress  ::=  CHOICE
 * {
 *     iPv4Address [1] IPv4Address,
 *     iPv6Address [2] IPv6Address
 * }
 * ```
 */
export
type IPAddress =
    { iPv4Address: IPv4Address } /* CHOICE_ALT_ROOT */
    | { iPv6Address: IPv6Address } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_IPAddress: $.ASN1Decoder<IPAddress> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) IPAddress
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_IPAddress (el: _Element): IPAddress {
    if (!_cached_decoder_for_IPAddress) { _cached_decoder_for_IPAddress = $._decode_inextensible_choice<IPAddress>({
    "CONTEXT 1": [ "iPv4Address", $._decode_implicit<IPv4Address>(() => _decode_IPv4Address) ],
    "CONTEXT 2": [ "iPv6Address", $._decode_implicit<IPv6Address>(() => _decode_IPv6Address) ]
}); }
    return _cached_decoder_for_IPAddress(el);
}

let _cached_encoder_for_IPAddress: $.ASN1Encoder<IPAddress> | null = null;

/**
 * @summary Encodes a(n) IPAddress into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IPAddress, encoded as an ASN.1 Element.
 */
export
function _encode_IPAddress (value: IPAddress, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_IPAddress) { _cached_encoder_for_IPAddress = $._encode_choice<IPAddress>({
    "iPv4Address": $._encode_implicit(_TagClass.context, 1, () => _encode_IPv4Address, $.BER),
    "iPv6Address": $._encode_implicit(_TagClass.context, 2, () => _encode_IPv6Address, $.BER),
}, $.BER); }
    return _cached_encoder_for_IPAddress(value, elGetter);
}


/* eslint-enable */
