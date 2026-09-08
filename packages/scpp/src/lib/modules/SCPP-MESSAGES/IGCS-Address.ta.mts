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
import { IGCS_Address_ipAddress, _decode_IGCS_Address_ipAddress, _encode_IGCS_Address_ipAddress } from "../SCPP-MESSAGES/IGCS-Address-ipAddress.ta.mjs";
// export { IGCS_Address_ipAddress, _decode_IGCS_Address_ipAddress, _encode_IGCS_Address_ipAddress } from "../SCPP-MESSAGES/IGCS-Address-ipAddress.ta.mjs";
import { IGCS_Address_ip6Address, _decode_IGCS_Address_ip6Address, _encode_IGCS_Address_ip6Address } from "../SCPP-MESSAGES/IGCS-Address-ip6Address.ta.mjs";
// export { IGCS_Address_ip6Address, _decode_IGCS_Address_ip6Address, _encode_IGCS_Address_ip6Address } from "../SCPP-MESSAGES/IGCS-Address-ip6Address.ta.mjs";


/**
 * @summary IGCS_Address
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IGCS-Address  ::=  CHOICE {
 *   ipAddress
 *     SEQUENCE {ip    OCTET STRING(SIZE (4)),
 *               port  INTEGER(0..65535)},
 *   ip6Address
 *     SEQUENCE {ip    OCTET STRING(SIZE (16)),
 *               port  INTEGER(0..65535)},
 *   emailAddress        IA5String(SIZE (1..512)),
 *   nonStandardAddress  OCTET STRING,
 *   ...
 * }
 * ```
 */
export
type IGCS_Address =
    { ipAddress: IGCS_Address_ipAddress } /* CHOICE_ALT_ROOT */
    | { ip6Address: IGCS_Address_ip6Address } /* CHOICE_ALT_ROOT */
    | { emailAddress: IA5String } /* CHOICE_ALT_ROOT */
    | { nonStandardAddress: OCTET_STRING } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;

let _cached_decoder_for_IGCS_Address: $.ASN1Decoder<IGCS_Address> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) IGCS_Address
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_IGCS_Address (el: _Element): IGCS_Address {
    if (!_cached_decoder_for_IGCS_Address) { _cached_decoder_for_IGCS_Address = $._decode_extensible_choice<IGCS_Address>({
    "CONTEXT 0": [ "ipAddress", _decode_IGCS_Address_ipAddress ],
    "CONTEXT 1": [ "ip6Address", _decode_IGCS_Address_ip6Address ],
    "CONTEXT 2": [ "emailAddress", $._decodeIA5String ],
    "CONTEXT 3": [ "nonStandardAddress", $._decodeOctetString ]
}); }
    return _cached_decoder_for_IGCS_Address(el);
}

let _cached_encoder_for_IGCS_Address: $.ASN1Encoder<IGCS_Address> | null = null;

/**
 * @summary Encodes a(n) IGCS_Address into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IGCS_Address, encoded as an ASN.1 Element.
 */
export
function _encode_IGCS_Address (value: IGCS_Address, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_IGCS_Address) { _cached_encoder_for_IGCS_Address = $._encode_choice<IGCS_Address>({
    "ipAddress": _encode_IGCS_Address_ipAddress,
    "ip6Address": _encode_IGCS_Address_ip6Address,
    "emailAddress": $._encodeIA5String,
    "nonStandardAddress": $._encodeOctetString,
}, $.BER); }
    return _cached_encoder_for_IGCS_Address(value, elGetter);
}


/* eslint-enable */
