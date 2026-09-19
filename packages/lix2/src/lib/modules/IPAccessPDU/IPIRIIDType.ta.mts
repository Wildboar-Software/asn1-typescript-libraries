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
 * @summary IPIRIIDType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IPIRIIDType  ::=  CHOICE
 * {
 *     printableIDType         [0] UTF8String (SIZE (1..128)),
 *         -- For printable userIDs, such as the Radius username, phonenumbers
 *     macAddressType          [1] OCTET STRING (SIZE (6)),
 *         -- For MAC address types, raw binary format as in RFC 2132 [15]
 *     ipAddressType           [2] IPAddress,
 *         -- For IP address types
 *     ...
 * }
 * ```
 */
export
type IPIRIIDType =
    { printableIDType: UTF8String } /* CHOICE_ALT_ROOT */
    | { macAddressType: OCTET_STRING } /* CHOICE_ALT_ROOT */
    | { ipAddressType: IPAddress } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;

let _cached_decoder_for_IPIRIIDType: $.ASN1Decoder<IPIRIIDType> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) IPIRIIDType
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_IPIRIIDType (el: _Element): IPIRIIDType {
    if (!_cached_decoder_for_IPIRIIDType) { _cached_decoder_for_IPIRIIDType = $._decode_extensible_choice<IPIRIIDType>({
    "CONTEXT 0": [ "printableIDType", $._decode_implicit<UTF8String>(() => $._decodeUTF8String) ],
    "CONTEXT 1": [ "macAddressType", $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString) ],
    "CONTEXT 2": [ "ipAddressType", $._decode_implicit<IPAddress>(() => _decode_IPAddress) ]
}); }
    return _cached_decoder_for_IPIRIIDType(el);
}

let _cached_encoder_for_IPIRIIDType: $.ASN1Encoder<IPIRIIDType> | null = null;

/**
 * @summary Encodes a(n) IPIRIIDType into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IPIRIIDType, encoded as an ASN.1 Element.
 */
export
function _encode_IPIRIIDType (value: IPIRIIDType, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_IPIRIIDType) { _cached_encoder_for_IPIRIIDType = $._encode_choice<IPIRIIDType>({
    "printableIDType": $._encode_implicit(_TagClass.context, 0, () => $._encodeUTF8String, $.BER),
    "macAddressType": $._encode_implicit(_TagClass.context, 1, () => $._encodeOctetString, $.BER),
    "ipAddressType": $._encode_implicit(_TagClass.context, 2, () => _encode_IPAddress, $.BER),
}, $.BER); }
    return _cached_encoder_for_IPIRIIDType(value, elGetter);
}


/* eslint-enable */
