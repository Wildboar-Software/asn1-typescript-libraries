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
import { MACAddress, _decode_MACAddress, _encode_MACAddress } from "../TS33128Payloads/MACAddress.ta.mjs";
// export { MACAddress, _decode_MACAddress, _encode_MACAddress } from "../TS33128Payloads/MACAddress.ta.mjs";
import { EUI64, _decode_EUI64, _encode_EUI64 } from "../TS33128Payloads/EUI64.ta.mjs";
// export { EUI64, _decode_EUI64, _encode_EUI64 } from "../TS33128Payloads/EUI64.ta.mjs";


/**
 * @summary NonIMEISVPEI
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NonIMEISVPEI  ::=  CHOICE
 * {
 *     mACAddress [1] MACAddress,
 *     eUI64      [2] EUI64
 * }
 * ```
 */
export
type NonIMEISVPEI =
    { mACAddress: MACAddress } /* CHOICE_ALT_ROOT */
    | { eUI64: EUI64 } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_NonIMEISVPEI: $.ASN1Decoder<NonIMEISVPEI> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) NonIMEISVPEI
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_NonIMEISVPEI (el: _Element): NonIMEISVPEI {
    if (!_cached_decoder_for_NonIMEISVPEI) { _cached_decoder_for_NonIMEISVPEI = $._decode_inextensible_choice<NonIMEISVPEI>({
    "CONTEXT 1": [ "mACAddress", $._decode_implicit<MACAddress>(() => _decode_MACAddress) ],
    "CONTEXT 2": [ "eUI64", $._decode_implicit<EUI64>(() => _decode_EUI64) ]
}); }
    return _cached_decoder_for_NonIMEISVPEI(el);
}

let _cached_encoder_for_NonIMEISVPEI: $.ASN1Encoder<NonIMEISVPEI> | null = null;

/**
 * @summary Encodes a(n) NonIMEISVPEI into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NonIMEISVPEI, encoded as an ASN.1 Element.
 */
export
function _encode_NonIMEISVPEI (value: NonIMEISVPEI, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_NonIMEISVPEI) { _cached_encoder_for_NonIMEISVPEI = $._encode_choice<NonIMEISVPEI>({
    "mACAddress": $._encode_implicit(_TagClass.context, 1, () => _encode_MACAddress, $.BER),
    "eUI64": $._encode_implicit(_TagClass.context, 2, () => _encode_EUI64, $.BER),
}, $.BER); }
    return _cached_encoder_for_NonIMEISVPEI(value, elGetter);
}


/* eslint-enable */
