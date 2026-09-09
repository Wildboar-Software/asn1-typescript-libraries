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
} from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";
import { GSM_SecurityContextData, _decode_GSM_SecurityContextData, _encode_GSM_SecurityContextData } from "../MAP-MS-DataTypes/GSM-SecurityContextData.ta.mjs";
// export { GSM_SecurityContextData, _decode_GSM_SecurityContextData, _encode_GSM_SecurityContextData } from "../MAP-MS-DataTypes/GSM-SecurityContextData.ta.mjs";
import { UMTS_SecurityContextData, _decode_UMTS_SecurityContextData, _encode_UMTS_SecurityContextData } from "../MAP-MS-DataTypes/UMTS-SecurityContextData.ta.mjs";
// export { UMTS_SecurityContextData, _decode_UMTS_SecurityContextData, _encode_UMTS_SecurityContextData } from "../MAP-MS-DataTypes/UMTS-SecurityContextData.ta.mjs";


/**
 * @summary CurrentSecurityContext
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CurrentSecurityContext  ::=  CHOICE {
 *     gsm-SecurityContextData    [0] GSM-SecurityContextData,
 *     umts-SecurityContextData    [1] UMTS-SecurityContextData }
 * ```
 */
export
type CurrentSecurityContext =
    { gsm_SecurityContextData: GSM_SecurityContextData } /* CHOICE_ALT_ROOT */
    | { umts_SecurityContextData: UMTS_SecurityContextData } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_CurrentSecurityContext: $.ASN1Decoder<CurrentSecurityContext> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CurrentSecurityContext
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CurrentSecurityContext (el: _Element): CurrentSecurityContext {
    if (!_cached_decoder_for_CurrentSecurityContext) { _cached_decoder_for_CurrentSecurityContext = $._decode_inextensible_choice<CurrentSecurityContext>({
    "CONTEXT 0": [ "gsm_SecurityContextData", $._decode_implicit<GSM_SecurityContextData>(() => _decode_GSM_SecurityContextData) ],
    "CONTEXT 1": [ "umts_SecurityContextData", $._decode_implicit<UMTS_SecurityContextData>(() => _decode_UMTS_SecurityContextData) ]
}); }
    return _cached_decoder_for_CurrentSecurityContext(el);
}

let _cached_encoder_for_CurrentSecurityContext: $.ASN1Encoder<CurrentSecurityContext> | null = null;

/**
 * @summary Encodes a(n) CurrentSecurityContext into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CurrentSecurityContext, encoded as an ASN.1 Element.
 */
export
function _encode_CurrentSecurityContext (value: CurrentSecurityContext, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CurrentSecurityContext) { _cached_encoder_for_CurrentSecurityContext = $._encode_choice<CurrentSecurityContext>({
    "gsm_SecurityContextData": $._encode_implicit(_TagClass.context, 0, () => _encode_GSM_SecurityContextData, $.BER),
    "umts_SecurityContextData": $._encode_implicit(_TagClass.context, 1, () => _encode_UMTS_SecurityContextData, $.BER),
}, $.BER); }
    return _cached_encoder_for_CurrentSecurityContext(value, elGetter);
}


/* eslint-enable */
