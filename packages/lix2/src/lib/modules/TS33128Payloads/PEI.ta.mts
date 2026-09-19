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
import { IMEI, _decode_IMEI, _encode_IMEI } from "../TS33128Payloads/IMEI.ta.mjs";
// export { IMEI, _decode_IMEI, _encode_IMEI } from "../TS33128Payloads/IMEI.ta.mjs";
import { IMEISV, _decode_IMEISV, _encode_IMEISV } from "../TS33128Payloads/IMEISV.ta.mjs";
// export { IMEISV, _decode_IMEISV, _encode_IMEISV } from "../TS33128Payloads/IMEISV.ta.mjs";
import { MACAddress, _decode_MACAddress, _encode_MACAddress } from "../TS33128Payloads/MACAddress.ta.mjs";
// export { MACAddress, _decode_MACAddress, _encode_MACAddress } from "../TS33128Payloads/MACAddress.ta.mjs";
import { EUI64, _decode_EUI64, _encode_EUI64 } from "../TS33128Payloads/EUI64.ta.mjs";
// export { EUI64, _decode_EUI64, _encode_EUI64 } from "../TS33128Payloads/EUI64.ta.mjs";


/**
 * @summary PEI
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PEI  ::=  CHOICE
 * {
 *     iMEI        [1] IMEI,
 *     iMEISV      [2] IMEISV,
 *     mACAddress  [3] MACAddress,
 *     eUI64       [4] EUI64
 * }
 * ```
 */
export
type PEI =
    { iMEI: IMEI } /* CHOICE_ALT_ROOT */
    | { iMEISV: IMEISV } /* CHOICE_ALT_ROOT */
    | { mACAddress: MACAddress } /* CHOICE_ALT_ROOT */
    | { eUI64: EUI64 } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_PEI: $.ASN1Decoder<PEI> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PEI
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PEI (el: _Element): PEI {
    if (!_cached_decoder_for_PEI) { _cached_decoder_for_PEI = $._decode_inextensible_choice<PEI>({
    "CONTEXT 1": [ "iMEI", $._decode_implicit<IMEI>(() => _decode_IMEI) ],
    "CONTEXT 2": [ "iMEISV", $._decode_implicit<IMEISV>(() => _decode_IMEISV) ],
    "CONTEXT 3": [ "mACAddress", $._decode_implicit<MACAddress>(() => _decode_MACAddress) ],
    "CONTEXT 4": [ "eUI64", $._decode_implicit<EUI64>(() => _decode_EUI64) ]
}); }
    return _cached_decoder_for_PEI(el);
}

let _cached_encoder_for_PEI: $.ASN1Encoder<PEI> | null = null;

/**
 * @summary Encodes a(n) PEI into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PEI, encoded as an ASN.1 Element.
 */
export
function _encode_PEI (value: PEI, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PEI) { _cached_encoder_for_PEI = $._encode_choice<PEI>({
    "iMEI": $._encode_implicit(_TagClass.context, 1, () => _encode_IMEI, $.BER),
    "iMEISV": $._encode_implicit(_TagClass.context, 2, () => _encode_IMEISV, $.BER),
    "mACAddress": $._encode_implicit(_TagClass.context, 3, () => _encode_MACAddress, $.BER),
    "eUI64": $._encode_implicit(_TagClass.context, 4, () => _encode_EUI64, $.BER),
}, $.BER); }
    return _cached_encoder_for_PEI(value, elGetter);
}


/* eslint-enable */
