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
import { EuiccSigned1, _decode_EuiccSigned1, _encode_EuiccSigned1 } from "../SGP32Definitions/EuiccSigned1.ta.mjs";
// export { EuiccSigned1, _decode_EuiccSigned1, _encode_EuiccSigned1 } from "../SGP32Definitions/EuiccSigned1.ta.mjs";
import { CompactEuiccSigned1, _decode_CompactEuiccSigned1, _encode_CompactEuiccSigned1 } from "../SGP32Definitions/CompactEuiccSigned1.ta.mjs";
// export { CompactEuiccSigned1, _decode_CompactEuiccSigned1, _encode_CompactEuiccSigned1 } from "../SGP32Definitions/CompactEuiccSigned1.ta.mjs";


/**
 * @summary CompactAuthenticateResponseOk_signedData
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CompactAuthenticateResponseOk-signedData ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type CompactAuthenticateResponseOk_signedData =
    { euiccSigned1: EuiccSigned1 } /* CHOICE_ALT_ROOT */
    | { compactEuiccSigned1: CompactEuiccSigned1 } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_CompactAuthenticateResponseOk_signedData: $.ASN1Decoder<CompactAuthenticateResponseOk_signedData> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CompactAuthenticateResponseOk_signedData
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CompactAuthenticateResponseOk_signedData (el: _Element): CompactAuthenticateResponseOk_signedData {
    if (!_cached_decoder_for_CompactAuthenticateResponseOk_signedData) { _cached_decoder_for_CompactAuthenticateResponseOk_signedData = $._decode_inextensible_choice<CompactAuthenticateResponseOk_signedData>({
    "UNIVERSAL 16": [ "euiccSigned1", _decode_EuiccSigned1 ],
    "CONTEXT 0": [ "compactEuiccSigned1", $._decode_implicit<CompactEuiccSigned1>(() => _decode_CompactEuiccSigned1) ]
}); }
    return _cached_decoder_for_CompactAuthenticateResponseOk_signedData(el);
}

let _cached_encoder_for_CompactAuthenticateResponseOk_signedData: $.ASN1Encoder<CompactAuthenticateResponseOk_signedData> | null = null;

/**
 * @summary Encodes a(n) CompactAuthenticateResponseOk_signedData into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CompactAuthenticateResponseOk_signedData, encoded as an ASN.1 Element.
 */
export
function _encode_CompactAuthenticateResponseOk_signedData (value: CompactAuthenticateResponseOk_signedData, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CompactAuthenticateResponseOk_signedData) { _cached_encoder_for_CompactAuthenticateResponseOk_signedData = $._encode_choice<CompactAuthenticateResponseOk_signedData>({
    "euiccSigned1": _encode_EuiccSigned1,
    "compactEuiccSigned1": $._encode_implicit(_TagClass.context, 0, () => _encode_CompactEuiccSigned1, $.BER),
}, $.BER); }
    return _cached_encoder_for_CompactAuthenticateResponseOk_signedData(value, elGetter);
}


/* eslint-enable */
