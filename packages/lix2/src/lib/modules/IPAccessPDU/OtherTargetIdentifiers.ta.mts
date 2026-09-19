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
 * @summary OtherTargetIdentifiers
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * OtherTargetIdentifiers  ::=  CHOICE
 * {
 *         -- Additional target identifiers associated with the target service
 *         -- This list is extensible to accommodate other target identifiers which
 *         -- may be required in future.
 *     iPAddress       [0] IPAddress,
 *         -- IPAddress imported from TS 102 232 [2].
 *         -- This can be an IPv4 address (with or without a subnet range defined) or
 *         -- an IPv6 address (with or without a prefix range defined).
 *     ...
 * }
 * ```
 */
export
type OtherTargetIdentifiers =
    { iPAddress: IPAddress } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;

let _cached_decoder_for_OtherTargetIdentifiers: $.ASN1Decoder<OtherTargetIdentifiers> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) OtherTargetIdentifiers
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_OtherTargetIdentifiers (el: _Element): OtherTargetIdentifiers {
    if (!_cached_decoder_for_OtherTargetIdentifiers) { _cached_decoder_for_OtherTargetIdentifiers = $._decode_extensible_choice<OtherTargetIdentifiers>({
    "CONTEXT 0": [ "iPAddress", $._decode_implicit<IPAddress>(() => _decode_IPAddress) ]
}); }
    return _cached_decoder_for_OtherTargetIdentifiers(el);
}

let _cached_encoder_for_OtherTargetIdentifiers: $.ASN1Encoder<OtherTargetIdentifiers> | null = null;

/**
 * @summary Encodes a(n) OtherTargetIdentifiers into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The OtherTargetIdentifiers, encoded as an ASN.1 Element.
 */
export
function _encode_OtherTargetIdentifiers (value: OtherTargetIdentifiers, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_OtherTargetIdentifiers) { _cached_encoder_for_OtherTargetIdentifiers = $._encode_choice<OtherTargetIdentifiers>({
    "iPAddress": $._encode_implicit(_TagClass.context, 0, () => _encode_IPAddress, $.BER),
}, $.BER); }
    return _cached_encoder_for_OtherTargetIdentifiers(value, elGetter);
}


/* eslint-enable */
