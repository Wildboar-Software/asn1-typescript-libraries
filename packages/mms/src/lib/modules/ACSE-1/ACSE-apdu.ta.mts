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
import { AARQ_apdu, _decode_AARQ_apdu, _encode_AARQ_apdu } from "../ACSE-1/AARQ-apdu.ta.mjs";
// export { AARQ_apdu, _decode_AARQ_apdu, _encode_AARQ_apdu } from "../ACSE-1/AARQ-apdu.ta.mjs";
import { AARE_apdu, _decode_AARE_apdu, _encode_AARE_apdu } from "../ACSE-1/AARE-apdu.ta.mjs";
// export { AARE_apdu, _decode_AARE_apdu, _encode_AARE_apdu } from "../ACSE-1/AARE-apdu.ta.mjs";
import { RLRQ_apdu, _decode_RLRQ_apdu, _encode_RLRQ_apdu } from "../ACSE-1/RLRQ-apdu.ta.mjs";
// export { RLRQ_apdu, _decode_RLRQ_apdu, _encode_RLRQ_apdu } from "../ACSE-1/RLRQ-apdu.ta.mjs";
import { RLRE_apdu, _decode_RLRE_apdu, _encode_RLRE_apdu } from "../ACSE-1/RLRE-apdu.ta.mjs";
// export { RLRE_apdu, _decode_RLRE_apdu, _encode_RLRE_apdu } from "../ACSE-1/RLRE-apdu.ta.mjs";
import { ABRT_apdu, _decode_ABRT_apdu, _encode_ABRT_apdu } from "../ACSE-1/ABRT-apdu.ta.mjs";
// export { ABRT_apdu, _decode_ABRT_apdu, _encode_ABRT_apdu } from "../ACSE-1/ABRT-apdu.ta.mjs";


/**
 * @summary ACSE_apdu
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ACSE-apdu  ::=  CHOICE {
 *   aarq  AARQ-apdu,
 *   aare  AARE-apdu,
 *   rlrq  RLRQ-apdu,
 *   rlre  RLRE-apdu,
 *   abrt  ABRT-apdu,
 *   ...
 * }
 * ```
 */
export
type ACSE_apdu =
    { aarq: AARQ_apdu } /* CHOICE_ALT_ROOT */
    | { aare: AARE_apdu } /* CHOICE_ALT_ROOT */
    | { rlrq: RLRQ_apdu } /* CHOICE_ALT_ROOT */
    | { rlre: RLRE_apdu } /* CHOICE_ALT_ROOT */
    | { abrt: ABRT_apdu } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;

let _cached_decoder_for_ACSE_apdu: $.ASN1Decoder<ACSE_apdu> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ACSE_apdu
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ACSE_apdu (el: _Element): ACSE_apdu {
    if (!_cached_decoder_for_ACSE_apdu) { _cached_decoder_for_ACSE_apdu = $._decode_extensible_choice<ACSE_apdu>({
    "APPLICATION 0": [ "aarq", _decode_AARQ_apdu ],
    "APPLICATION 1": [ "aare", _decode_AARE_apdu ],
    "APPLICATION 2": [ "rlrq", _decode_RLRQ_apdu ],
    "APPLICATION 3": [ "rlre", _decode_RLRE_apdu ],
    "APPLICATION 4": [ "abrt", _decode_ABRT_apdu ]
}); }
    return _cached_decoder_for_ACSE_apdu(el);
}

let _cached_encoder_for_ACSE_apdu: $.ASN1Encoder<ACSE_apdu> | null = null;

/**
 * @summary Encodes a(n) ACSE_apdu into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ACSE_apdu, encoded as an ASN.1 Element.
 */
export
function _encode_ACSE_apdu (value: ACSE_apdu, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ACSE_apdu) { _cached_encoder_for_ACSE_apdu = $._encode_choice<ACSE_apdu>({
    "aarq": _encode_AARQ_apdu,
    "aare": _encode_AARE_apdu,
    "rlrq": _encode_RLRQ_apdu,
    "rlre": _encode_RLRE_apdu,
    "abrt": _encode_ABRT_apdu,
}, $.BER); }
    return _cached_encoder_for_ACSE_apdu(value, elGetter);
}


/* eslint-enable */
