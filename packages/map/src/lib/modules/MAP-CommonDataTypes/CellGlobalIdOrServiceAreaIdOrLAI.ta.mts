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
import { CellGlobalIdOrServiceAreaIdFixedLength, _decode_CellGlobalIdOrServiceAreaIdFixedLength, _encode_CellGlobalIdOrServiceAreaIdFixedLength } from "../MAP-CommonDataTypes/CellGlobalIdOrServiceAreaIdFixedLength.ta.mjs";
// export { CellGlobalIdOrServiceAreaIdFixedLength, _decode_CellGlobalIdOrServiceAreaIdFixedLength, _encode_CellGlobalIdOrServiceAreaIdFixedLength } from "../MAP-CommonDataTypes/CellGlobalIdOrServiceAreaIdFixedLength.ta.mjs";
import { LAIFixedLength, _decode_LAIFixedLength, _encode_LAIFixedLength } from "../MAP-CommonDataTypes/LAIFixedLength.ta.mjs";
// export { LAIFixedLength, _decode_LAIFixedLength, _encode_LAIFixedLength } from "../MAP-CommonDataTypes/LAIFixedLength.ta.mjs";


/**
 * @summary CellGlobalIdOrServiceAreaIdOrLAI
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CellGlobalIdOrServiceAreaIdOrLAI  ::=  CHOICE {
 *     cellGlobalIdOrServiceAreaIdFixedLength    [0] CellGlobalIdOrServiceAreaIdFixedLength,
 *     laiFixedLength    [1] LAIFixedLength}
 * ```
 */
export
type CellGlobalIdOrServiceAreaIdOrLAI =
    { cellGlobalIdOrServiceAreaIdFixedLength: CellGlobalIdOrServiceAreaIdFixedLength } /* CHOICE_ALT_ROOT */
    | { laiFixedLength: LAIFixedLength } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_CellGlobalIdOrServiceAreaIdOrLAI: $.ASN1Decoder<CellGlobalIdOrServiceAreaIdOrLAI> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CellGlobalIdOrServiceAreaIdOrLAI
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CellGlobalIdOrServiceAreaIdOrLAI (el: _Element): CellGlobalIdOrServiceAreaIdOrLAI {
    if (!_cached_decoder_for_CellGlobalIdOrServiceAreaIdOrLAI) { _cached_decoder_for_CellGlobalIdOrServiceAreaIdOrLAI = $._decode_inextensible_choice<CellGlobalIdOrServiceAreaIdOrLAI>({
    "CONTEXT 0": [ "cellGlobalIdOrServiceAreaIdFixedLength", $._decode_implicit<CellGlobalIdOrServiceAreaIdFixedLength>(() => _decode_CellGlobalIdOrServiceAreaIdFixedLength) ],
    "CONTEXT 1": [ "laiFixedLength", $._decode_implicit<LAIFixedLength>(() => _decode_LAIFixedLength) ]
}); }
    return _cached_decoder_for_CellGlobalIdOrServiceAreaIdOrLAI(el);
}

let _cached_encoder_for_CellGlobalIdOrServiceAreaIdOrLAI: $.ASN1Encoder<CellGlobalIdOrServiceAreaIdOrLAI> | null = null;

/**
 * @summary Encodes a(n) CellGlobalIdOrServiceAreaIdOrLAI into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CellGlobalIdOrServiceAreaIdOrLAI, encoded as an ASN.1 Element.
 */
export
function _encode_CellGlobalIdOrServiceAreaIdOrLAI (value: CellGlobalIdOrServiceAreaIdOrLAI, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CellGlobalIdOrServiceAreaIdOrLAI) { _cached_encoder_for_CellGlobalIdOrServiceAreaIdOrLAI = $._encode_choice<CellGlobalIdOrServiceAreaIdOrLAI>({
    "cellGlobalIdOrServiceAreaIdFixedLength": $._encode_implicit(_TagClass.context, 0, () => _encode_CellGlobalIdOrServiceAreaIdFixedLength, $.BER),
    "laiFixedLength": $._encode_implicit(_TagClass.context, 1, () => _encode_LAIFixedLength, $.BER),
}, $.BER); }
    return _cached_encoder_for_CellGlobalIdOrServiceAreaIdOrLAI(value, elGetter);
}


/* eslint-enable */
