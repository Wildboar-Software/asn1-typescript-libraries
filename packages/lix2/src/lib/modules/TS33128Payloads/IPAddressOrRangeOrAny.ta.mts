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
import { IPAddress, _decode_IPAddress, _encode_IPAddress } from "../TS33128Payloads/IPAddress.ta.mjs";
// export { IPAddress, _decode_IPAddress, _encode_IPAddress } from "../TS33128Payloads/IPAddress.ta.mjs";
import { IPMask, _decode_IPMask, _encode_IPMask } from "../TS33128Payloads/IPMask.ta.mjs";
// export { IPMask, _decode_IPMask, _encode_IPMask } from "../TS33128Payloads/IPMask.ta.mjs";
import { AnyIPAddress, _enum_for_AnyIPAddress, AnyIPAddress_any /* IMPORTED_LONG_ENUMERATION_ITEM */, any_ /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_AnyIPAddress, _encode_AnyIPAddress } from "../TS33128Payloads/AnyIPAddress.ta.mjs";
// export { AnyIPAddress, _enum_for_AnyIPAddress, AnyIPAddress_any /* IMPORTED_LONG_ENUMERATION_ITEM */, any_ /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_AnyIPAddress, _encode_AnyIPAddress } from "../TS33128Payloads/AnyIPAddress.ta.mjs";


/**
 * @summary IPAddressOrRangeOrAny
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IPAddressOrRangeOrAny  ::=  CHOICE
 * {
 *     iPAddress      [1] IPAddress,
 *     ipAddressRange [2] IPMask,
 *     anyIPAddress   [3] AnyIPAddress
 * }
 * ```
 */
export
type IPAddressOrRangeOrAny =
    { iPAddress: IPAddress } /* CHOICE_ALT_ROOT */
    | { ipAddressRange: IPMask } /* CHOICE_ALT_ROOT */
    | { anyIPAddress: AnyIPAddress } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_IPAddressOrRangeOrAny: $.ASN1Decoder<IPAddressOrRangeOrAny> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) IPAddressOrRangeOrAny
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_IPAddressOrRangeOrAny (el: _Element): IPAddressOrRangeOrAny {
    if (!_cached_decoder_for_IPAddressOrRangeOrAny) { _cached_decoder_for_IPAddressOrRangeOrAny = $._decode_inextensible_choice<IPAddressOrRangeOrAny>({
    "CONTEXT 1": [ "iPAddress", $._decode_explicit<IPAddress>(() => _decode_IPAddress) ],
    "CONTEXT 2": [ "ipAddressRange", $._decode_implicit<IPMask>(() => _decode_IPMask) ],
    "CONTEXT 3": [ "anyIPAddress", $._decode_implicit<AnyIPAddress>(() => _decode_AnyIPAddress) ]
}); }
    return _cached_decoder_for_IPAddressOrRangeOrAny(el);
}

let _cached_encoder_for_IPAddressOrRangeOrAny: $.ASN1Encoder<IPAddressOrRangeOrAny> | null = null;

/**
 * @summary Encodes a(n) IPAddressOrRangeOrAny into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IPAddressOrRangeOrAny, encoded as an ASN.1 Element.
 */
export
function _encode_IPAddressOrRangeOrAny (value: IPAddressOrRangeOrAny, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_IPAddressOrRangeOrAny) { _cached_encoder_for_IPAddressOrRangeOrAny = $._encode_choice<IPAddressOrRangeOrAny>({
    "iPAddress": $._encode_explicit(_TagClass.context, 1, () => _encode_IPAddress, $.BER),
    "ipAddressRange": $._encode_implicit(_TagClass.context, 2, () => _encode_IPMask, $.BER),
    "anyIPAddress": $._encode_implicit(_TagClass.context, 3, () => _encode_AnyIPAddress, $.BER),
}, $.BER); }
    return _cached_encoder_for_IPAddressOrRangeOrAny(value, elGetter);
}


/* eslint-enable */
