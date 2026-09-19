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
import { AddressScreened, _decode_AddressScreened, _encode_AddressScreened } from "../Addressing-Data-Elements/AddressScreened.ta.mjs";
// export { AddressScreened, _decode_AddressScreened, _encode_AddressScreened } from "../Addressing-Data-Elements/AddressScreened.ta.mjs";


/**
 * @summary PresentedAddressScreened
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PresentedAddressScreened  ::=  CHOICE {
 *   presentationAlIowedAddress           [0] IMPLICIT AddressScreened,
 *   presentationRestricted               [1] IMPLICIT NULL,
 *   numberNotAvailableDueTolnterworking  [2] IMPLICIT NULL,
 *   presentationRestrictedAddress        [3] IMPLICIT AddressScreened
 * }
 * ```
 */
export
type PresentedAddressScreened =
    { presentationAlIowedAddress: AddressScreened } /* CHOICE_ALT_ROOT */
    | { presentationRestricted: NULL } /* CHOICE_ALT_ROOT */
    | { numberNotAvailableDueTolnterworking: NULL } /* CHOICE_ALT_ROOT */
    | { presentationRestrictedAddress: AddressScreened } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_PresentedAddressScreened: $.ASN1Decoder<PresentedAddressScreened> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PresentedAddressScreened
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PresentedAddressScreened (el: _Element): PresentedAddressScreened {
    if (!_cached_decoder_for_PresentedAddressScreened) { _cached_decoder_for_PresentedAddressScreened = $._decode_inextensible_choice<PresentedAddressScreened>({
    "CONTEXT 0": [ "presentationAlIowedAddress", $._decode_implicit<AddressScreened>(() => _decode_AddressScreened) ],
    "CONTEXT 1": [ "presentationRestricted", $._decode_implicit<NULL>(() => $._decodeNull) ],
    "CONTEXT 2": [ "numberNotAvailableDueTolnterworking", $._decode_implicit<NULL>(() => $._decodeNull) ],
    "CONTEXT 3": [ "presentationRestrictedAddress", $._decode_implicit<AddressScreened>(() => _decode_AddressScreened) ]
}); }
    return _cached_decoder_for_PresentedAddressScreened(el);
}

let _cached_encoder_for_PresentedAddressScreened: $.ASN1Encoder<PresentedAddressScreened> | null = null;

/**
 * @summary Encodes a(n) PresentedAddressScreened into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PresentedAddressScreened, encoded as an ASN.1 Element.
 */
export
function _encode_PresentedAddressScreened (value: PresentedAddressScreened, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PresentedAddressScreened) { _cached_encoder_for_PresentedAddressScreened = $._encode_choice<PresentedAddressScreened>({
    "presentationAlIowedAddress": $._encode_implicit(_TagClass.context, 0, () => _encode_AddressScreened, $.BER),
    "presentationRestricted": $._encode_implicit(_TagClass.context, 1, () => $._encodeNull, $.BER),
    "numberNotAvailableDueTolnterworking": $._encode_implicit(_TagClass.context, 2, () => $._encodeNull, $.BER),
    "presentationRestrictedAddress": $._encode_implicit(_TagClass.context, 3, () => _encode_AddressScreened, $.BER),
}, $.BER); }
    return _cached_encoder_for_PresentedAddressScreened(value, elGetter);
}


/* eslint-enable */
