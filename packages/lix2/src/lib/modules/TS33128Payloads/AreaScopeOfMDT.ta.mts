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
import { CellID, _decode_CellID, _encode_CellID } from "../TS33128Payloads/CellID.ta.mjs";
// export { CellID, _decode_CellID, _encode_CellID } from "../TS33128Payloads/CellID.ta.mjs";
import { TAC, _decode_TAC, _encode_TAC } from "../TS33128Payloads/TAC.ta.mjs";
// export { TAC, _decode_TAC, _encode_TAC } from "../TS33128Payloads/TAC.ta.mjs";
import { PLMNID, _decode_PLMNID, _encode_PLMNID } from "../TS33128Payloads/PLMNID.ta.mjs";
// export { PLMNID, _decode_PLMNID, _encode_PLMNID } from "../TS33128Payloads/PLMNID.ta.mjs";
import { TAI, _decode_TAI, _encode_TAI } from "../TS33128Payloads/TAI.ta.mjs";
// export { TAI, _decode_TAI, _encode_TAI } from "../TS33128Payloads/TAI.ta.mjs";


/**
 * @summary AreaScopeOfMDT
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AreaScopeOfMDT  ::=  CHOICE
 * {
 *     cellBased         [1] SEQUENCE (SIZE(1..MAX)) OF CellID,
 *     tABased           [2] SEQUENCE (SIZE(1..MAX)) OF TAC,
 *     pLMNWide          [3] PLMNID,
 *     tAIBased          [4] SEQUENCE (SIZE(1..MAX)) OF TAI
 * }
 * ```
 */
export
type AreaScopeOfMDT =
    { cellBased: CellID[] } /* CHOICE_ALT_ROOT */
    | { tABased: TAC[] } /* CHOICE_ALT_ROOT */
    | { pLMNWide: PLMNID } /* CHOICE_ALT_ROOT */
    | { tAIBased: TAI[] } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_AreaScopeOfMDT: $.ASN1Decoder<AreaScopeOfMDT> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AreaScopeOfMDT
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AreaScopeOfMDT (el: _Element): AreaScopeOfMDT {
    if (!_cached_decoder_for_AreaScopeOfMDT) { _cached_decoder_for_AreaScopeOfMDT = $._decode_inextensible_choice<AreaScopeOfMDT>({
    "CONTEXT 1": [ "cellBased", $._decode_implicit<CellID[]>(() => $._decodeSequenceOf<CellID>(() => _decode_CellID)) ],
    "CONTEXT 2": [ "tABased", $._decode_implicit<TAC[]>(() => $._decodeSequenceOf<TAC>(() => _decode_TAC)) ],
    "CONTEXT 3": [ "pLMNWide", $._decode_implicit<PLMNID>(() => _decode_PLMNID) ],
    "CONTEXT 4": [ "tAIBased", $._decode_implicit<TAI[]>(() => $._decodeSequenceOf<TAI>(() => _decode_TAI)) ]
}); }
    return _cached_decoder_for_AreaScopeOfMDT(el);
}

let _cached_encoder_for_AreaScopeOfMDT: $.ASN1Encoder<AreaScopeOfMDT> | null = null;

/**
 * @summary Encodes a(n) AreaScopeOfMDT into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AreaScopeOfMDT, encoded as an ASN.1 Element.
 */
export
function _encode_AreaScopeOfMDT (value: AreaScopeOfMDT, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AreaScopeOfMDT) { _cached_encoder_for_AreaScopeOfMDT = $._encode_choice<AreaScopeOfMDT>({
    "cellBased": $._encode_implicit(_TagClass.context, 1, () => $._encodeSequenceOf<CellID>(() => _encode_CellID, $.BER), $.BER),
    "tABased": $._encode_implicit(_TagClass.context, 2, () => $._encodeSequenceOf<TAC>(() => _encode_TAC, $.BER), $.BER),
    "pLMNWide": $._encode_implicit(_TagClass.context, 3, () => _encode_PLMNID, $.BER),
    "tAIBased": $._encode_implicit(_TagClass.context, 4, () => $._encodeSequenceOf<TAI>(() => _encode_TAI, $.BER), $.BER),
}, $.BER); }
    return _cached_encoder_for_AreaScopeOfMDT(value, elGetter);
}


/* eslint-enable */
