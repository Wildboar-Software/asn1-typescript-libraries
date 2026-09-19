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
import { SavPdu, _decode_SavPdu, _encode_SavPdu } from "../IEC61850/SavPdu.ta.mjs";
// export { SavPdu, _decode_SavPdu, _encode_SavPdu } from "../IEC61850/SavPdu.ta.mjs";


/**
 * @summary SampledValues
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SampledValues  ::=  CHOICE {
 *     savPdu    [APPLICATION 0]    IMPLICIT SavPdu,
 *     ...
 * }
 * ```
 */
export
type SampledValues =
    { savPdu: SavPdu } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;

let _cached_decoder_for_SampledValues: $.ASN1Decoder<SampledValues> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SampledValues
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SampledValues (el: _Element): SampledValues {
    if (!_cached_decoder_for_SampledValues) { _cached_decoder_for_SampledValues = $._decode_extensible_choice<SampledValues>({
    "APPLICATION 0": [ "savPdu", $._decode_implicit<SavPdu>(() => _decode_SavPdu) ]
}); }
    return _cached_decoder_for_SampledValues(el);
}

let _cached_encoder_for_SampledValues: $.ASN1Encoder<SampledValues> | null = null;

/**
 * @summary Encodes a(n) SampledValues into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SampledValues, encoded as an ASN.1 Element.
 */
export
function _encode_SampledValues (value: SampledValues, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SampledValues) { _cached_encoder_for_SampledValues = $._encode_choice<SampledValues>({
    "savPdu": $._encode_implicit(_TagClass.application, 0, () => _encode_SavPdu, $.BER),
}, $.BER); }
    return _cached_encoder_for_SampledValues(value, elGetter);
}


/* eslint-enable */
