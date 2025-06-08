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
import * as $ from "asn1-ts/dist/node/functional";
import { ECDSA_Sig_Value, _decode_ECDSA_Sig_Value, _encode_ECDSA_Sig_Value } from "../SEC1-v1-9/ECDSA-Sig-Value.ta";
export { ECDSA_Sig_Value, _decode_ECDSA_Sig_Value, _encode_ECDSA_Sig_Value } from "../SEC1-v1-9/ECDSA-Sig-Value.ta";
import { ECDSA_Full_R, _decode_ECDSA_Full_R, _encode_ECDSA_Full_R } from "../SEC1-v1-9/ECDSA-Full-R.ta";
export { ECDSA_Full_R, _decode_ECDSA_Full_R, _encode_ECDSA_Full_R } from "../SEC1-v1-9/ECDSA-Full-R.ta";


/* START_OF_SYMBOL_DEFINITION ECDSA_Signature */
/**
 * @summary ECDSA_Signature
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ECDSA-Signature  ::=  CHOICE {
 *     two-ints-plus ECDSA-Sig-Value,
 *     point-int [0] ECDSA-Full-R,
 *     ... -- Future representations may be added
 * }
 * ```
 */
export
type ECDSA_Signature =
    { two_ints_plus: ECDSA_Sig_Value } /* CHOICE_ALT_ROOT */
    | { point_int: ECDSA_Full_R } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;
/* END_OF_SYMBOL_DEFINITION ECDSA_Signature */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ECDSA_Signature */
let _cached_decoder_for_ECDSA_Signature: $.ASN1Decoder<ECDSA_Signature> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ECDSA_Signature */

/* START_OF_SYMBOL_DEFINITION _decode_ECDSA_Signature */
/**
 * @summary Decodes an ASN.1 element into a(n) ECDSA_Signature
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ECDSA_Signature} The decoded data structure.
 */
export
function _decode_ECDSA_Signature (el: _Element) {
    if (!_cached_decoder_for_ECDSA_Signature) { _cached_decoder_for_ECDSA_Signature = $._decode_extensible_choice<ECDSA_Signature>({
    "UNIVERSAL 16": [ "two_ints_plus", _decode_ECDSA_Sig_Value ],
    "CONTEXT 0": [ "point_int", $._decode_implicit<ECDSA_Full_R>(() => _decode_ECDSA_Full_R) ]
}); }
    return _cached_decoder_for_ECDSA_Signature(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ECDSA_Signature */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ECDSA_Signature */
let _cached_encoder_for_ECDSA_Signature: $.ASN1Encoder<ECDSA_Signature> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ECDSA_Signature */

/* START_OF_SYMBOL_DEFINITION _encode_ECDSA_Signature */
/**
 * @summary Encodes a(n) ECDSA_Signature into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ECDSA_Signature, encoded as an ASN.1 Element.
 */
export
function _encode_ECDSA_Signature (value: ECDSA_Signature, elGetter: $.ASN1Encoder<ECDSA_Signature>) {
    if (!_cached_encoder_for_ECDSA_Signature) { _cached_encoder_for_ECDSA_Signature = $._encode_choice<ECDSA_Signature>({
    "two_ints_plus": _encode_ECDSA_Sig_Value,
    "point_int": $._encode_implicit(_TagClass.context, 0, () => _encode_ECDSA_Full_R, $.BER),
}, $.BER); }
    return _cached_encoder_for_ECDSA_Signature(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ECDSA_Signature */

/* eslint-enable */
