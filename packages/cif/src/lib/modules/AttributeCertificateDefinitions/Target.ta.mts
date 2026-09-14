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
import { GeneralName, _decode_GeneralName, _encode_GeneralName } from "../CertificateExtensions/GeneralName.ta.mjs";
// export { GeneralName, _decode_GeneralName, _encode_GeneralName } from "../CertificateExtensions/GeneralName.ta.mjs";
import { TargetCert, _decode_TargetCert, _encode_TargetCert } from "../AttributeCertificateDefinitions/TargetCert.ta.mjs";
// export { TargetCert, _decode_TargetCert, _encode_TargetCert } from "../AttributeCertificateDefinitions/TargetCert.ta.mjs";


/**
 * @summary Target
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Target  ::=  CHOICE {
 *   targetName   [0]  GeneralName,
 *   targetGroup  [1]  GeneralName,
 *   targetCert   [2]  TargetCert,
 *   ... }
 * ```
 */
export
type Target =
    { targetName: GeneralName } /* CHOICE_ALT_ROOT */
    | { targetGroup: GeneralName } /* CHOICE_ALT_ROOT */
    | { targetCert: TargetCert } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;

let _cached_decoder_for_Target: $.ASN1Decoder<Target> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Target
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Target (el: _Element): Target {
    if (!_cached_decoder_for_Target) { _cached_decoder_for_Target = $._decode_extensible_choice<Target>({
    "CONTEXT 0": [ "targetName", $._decode_explicit<GeneralName>(() => _decode_GeneralName) ],
    "CONTEXT 1": [ "targetGroup", $._decode_explicit<GeneralName>(() => _decode_GeneralName) ],
    "CONTEXT 2": [ "targetCert", $._decode_implicit<TargetCert>(() => _decode_TargetCert) ]
}); }
    return _cached_decoder_for_Target(el);
}

let _cached_encoder_for_Target: $.ASN1Encoder<Target> | null = null;

/**
 * @summary Encodes a(n) Target into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Target, encoded as an ASN.1 Element.
 */
export
function _encode_Target (value: Target, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Target) { _cached_encoder_for_Target = $._encode_choice<Target>({
    "targetName": $._encode_explicit(_TagClass.context, 0, () => _encode_GeneralName, $.BER),
    "targetGroup": $._encode_explicit(_TagClass.context, 1, () => _encode_GeneralName, $.BER),
    "targetCert": $._encode_implicit(_TagClass.context, 2, () => _encode_TargetCert, $.BER),
}, $.BER); }
    return _cached_encoder_for_Target(value, elGetter);
}


/* eslint-enable */
