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
import { DetailedCivicAddress, _decode_DetailedCivicAddress, _encode_DetailedCivicAddress } from "../UmtsHI2Operations/DetailedCivicAddress.ta.mjs";
// export { DetailedCivicAddress, _decode_DetailedCivicAddress, _encode_DetailedCivicAddress } from "../UmtsHI2Operations/DetailedCivicAddress.ta.mjs";
import { XmlCivicAddress, _decode_XmlCivicAddress, _encode_XmlCivicAddress } from "../UmtsHI2Operations/XmlCivicAddress.ta.mjs";
// export { XmlCivicAddress, _decode_XmlCivicAddress, _encode_XmlCivicAddress } from "../UmtsHI2Operations/XmlCivicAddress.ta.mjs";


/**
 * @summary CivicAddress
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CivicAddress  ::=  CHOICE {
 *  detailedCivicAddress SET OF DetailedCivicAddress,
 *  xmlCivicAddress XmlCivicAddress,
 *  ...
 * }
 * ```
 */
export
type CivicAddress =
    { detailedCivicAddress: DetailedCivicAddress[] } /* CHOICE_ALT_ROOT */
    | { xmlCivicAddress: XmlCivicAddress } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;

let _cached_decoder_for_CivicAddress: $.ASN1Decoder<CivicAddress> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CivicAddress
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CivicAddress (el: _Element): CivicAddress {
    if (!_cached_decoder_for_CivicAddress) { _cached_decoder_for_CivicAddress = $._decode_extensible_choice<CivicAddress>({
    "UNIVERSAL 17": [ "detailedCivicAddress", $._decodeSetOf<DetailedCivicAddress>(() => _decode_DetailedCivicAddress) ],
    "UNIVERSAL 12": [ "xmlCivicAddress", _decode_XmlCivicAddress ]
}); }
    return _cached_decoder_for_CivicAddress(el);
}

let _cached_encoder_for_CivicAddress: $.ASN1Encoder<CivicAddress> | null = null;

/**
 * @summary Encodes a(n) CivicAddress into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CivicAddress, encoded as an ASN.1 Element.
 */
export
function _encode_CivicAddress (value: CivicAddress, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CivicAddress) { _cached_encoder_for_CivicAddress = $._encode_choice<CivicAddress>({
    "detailedCivicAddress": $._encodeSetOf<DetailedCivicAddress>(() => _encode_DetailedCivicAddress, $.BER),
    "xmlCivicAddress": _encode_XmlCivicAddress,
}, $.BER); }
    return _cached_encoder_for_CivicAddress(value, elGetter);
}


/* eslint-enable */
