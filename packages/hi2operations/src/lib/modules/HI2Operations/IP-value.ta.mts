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
 * @summary IP_value
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IP-value  ::=  CHOICE
 * {
 *     iPBinaryAddress    [1] OCTET STRING (SIZE(4..16)),
 *         -- In case of IPv6, the Prefix Length is provided by the "iPv6PrefixLength"
 *         -- In case of IPv4, the netmask is provided by the "iPv4SubnetMask"
 *     iPTextAddress    [2] IA5String (SIZE(7..45)),
 *         -- In case of IPv6, the delivered iPTextAddress field could include a complete
 *         -- single IPv6-Address or an IPv6-Prefix for a subnetwork on the target side.
 *         -- In case of IPv4, the delivered iPTextAddress field could include a single
 *         -- IPv4 address or an IPv4address/netmask, for example "192.168.1.1" or "192.168.1.1/24"
 *     ...
 * }
 * ```
 */
export
type IP_value =
    { iPBinaryAddress: OCTET_STRING } /* CHOICE_ALT_ROOT */
    | { iPTextAddress: IA5String } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;

let _cached_decoder_for_IP_value: $.ASN1Decoder<IP_value> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) IP_value
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_IP_value (el: _Element): IP_value {
    if (!_cached_decoder_for_IP_value) { _cached_decoder_for_IP_value = $._decode_extensible_choice<IP_value>({
    "CONTEXT 1": [ "iPBinaryAddress", $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString) ],
    "CONTEXT 2": [ "iPTextAddress", $._decode_implicit<IA5String>(() => $._decodeIA5String) ]
}); }
    return _cached_decoder_for_IP_value(el);
}

let _cached_encoder_for_IP_value: $.ASN1Encoder<IP_value> | null = null;

/**
 * @summary Encodes a(n) IP_value into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IP_value, encoded as an ASN.1 Element.
 */
export
function _encode_IP_value (value: IP_value, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_IP_value) { _cached_encoder_for_IP_value = $._encode_choice<IP_value>({
    "iPBinaryAddress": $._encode_implicit(_TagClass.context, 1, () => $._encodeOctetString, $.BER),
    "iPTextAddress": $._encode_implicit(_TagClass.context, 2, () => $._encodeIA5String, $.BER),
}, $.BER); }
    return _cached_encoder_for_IP_value(value, elGetter);
}


/* eslint-enable */
