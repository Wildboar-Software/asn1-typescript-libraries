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
import { NetworkAddress_internetAddress, _decode_NetworkAddress_internetAddress, _encode_NetworkAddress_internetAddress } from "../RecordSyntax-explain/NetworkAddress-internetAddress.ta.mjs";
// export { NetworkAddress_internetAddress, _decode_NetworkAddress_internetAddress, _encode_NetworkAddress_internetAddress } from "../RecordSyntax-explain/NetworkAddress-internetAddress.ta.mjs";
import { NetworkAddress_osiPresentationAddress, _decode_NetworkAddress_osiPresentationAddress, _encode_NetworkAddress_osiPresentationAddress } from "../RecordSyntax-explain/NetworkAddress-osiPresentationAddress.ta.mjs";
// export { NetworkAddress_osiPresentationAddress, _decode_NetworkAddress_osiPresentationAddress, _encode_NetworkAddress_osiPresentationAddress } from "../RecordSyntax-explain/NetworkAddress-osiPresentationAddress.ta.mjs";
import { NetworkAddress_other, _decode_NetworkAddress_other, _encode_NetworkAddress_other } from "../RecordSyntax-explain/NetworkAddress-other.ta.mjs";
// export { NetworkAddress_other, _decode_NetworkAddress_other, _encode_NetworkAddress_other } from "../RecordSyntax-explain/NetworkAddress-other.ta.mjs";


/**
 * @summary NetworkAddress
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NetworkAddress  ::=  CHOICE {
 *   internetAddress            [0] IMPLICIT SEQUENCE {
 *                                    hostAddress  [0] IMPLICIT
 *                                                     InternationalString,
 *                                    port         [1] IMPLICIT INTEGER},
 *   osiPresentationAddress     [1] IMPLICIT SEQUENCE { 
 *                                    pSel      [0] IMPLICIT InternationalString, 
 *                                    sSel      [1] IMPLICIT InternationalString
 *                                                         OPTIONAL,  
 *                                    tSel      [2] IMPLICIT InternationalString
 *                                                         OPTIONAL,  
 *                                    nSap      [3] IMPLICIT InternationalString},
 *   other                      [2] IMPLICIT SEQUENCE {  
 *                                    type      [0] IMPLICIT InternationalString,
 *                                    address   [1] IMPLICIT InternationalString}}
 * ```
 */
export
type NetworkAddress =
    { internetAddress: NetworkAddress_internetAddress } /* CHOICE_ALT_ROOT */
    | { osiPresentationAddress: NetworkAddress_osiPresentationAddress } /* CHOICE_ALT_ROOT */
    | { other: NetworkAddress_other } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_NetworkAddress: $.ASN1Decoder<NetworkAddress> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) NetworkAddress
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_NetworkAddress (el: _Element): NetworkAddress {
    if (!_cached_decoder_for_NetworkAddress) { _cached_decoder_for_NetworkAddress = $._decode_inextensible_choice<NetworkAddress>({
    "CONTEXT 0": [ "internetAddress", $._decode_implicit<NetworkAddress_internetAddress>(() => _decode_NetworkAddress_internetAddress) ],
    "CONTEXT 1": [ "osiPresentationAddress", $._decode_implicit<NetworkAddress_osiPresentationAddress>(() => _decode_NetworkAddress_osiPresentationAddress) ],
    "CONTEXT 2": [ "other", $._decode_implicit<NetworkAddress_other>(() => _decode_NetworkAddress_other) ]
}); }
    return _cached_decoder_for_NetworkAddress(el);
}

let _cached_encoder_for_NetworkAddress: $.ASN1Encoder<NetworkAddress> | null = null;

/**
 * @summary Encodes a(n) NetworkAddress into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NetworkAddress, encoded as an ASN.1 Element.
 */
export
function _encode_NetworkAddress (value: NetworkAddress, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_NetworkAddress) { _cached_encoder_for_NetworkAddress = $._encode_choice<NetworkAddress>({
    "internetAddress": $._encode_implicit(_TagClass.context, 0, () => _encode_NetworkAddress_internetAddress, $.BER),
    "osiPresentationAddress": $._encode_implicit(_TagClass.context, 1, () => _encode_NetworkAddress_osiPresentationAddress, $.BER),
    "other": $._encode_implicit(_TagClass.context, 2, () => _encode_NetworkAddress_other, $.BER),
}, $.BER); }
    return _cached_encoder_for_NetworkAddress(value, elGetter);
}


/* eslint-enable */
