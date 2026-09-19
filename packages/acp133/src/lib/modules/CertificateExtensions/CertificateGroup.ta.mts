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
import { CertificateSerialNumbers, _decode_CertificateSerialNumbers, _encode_CertificateSerialNumbers } from "../CertificateExtensions/CertificateSerialNumbers.ta.mjs";
// export { CertificateSerialNumbers, _decode_CertificateSerialNumbers, _encode_CertificateSerialNumbers } from "../CertificateExtensions/CertificateSerialNumbers.ta.mjs";
import { CertificateGroupNumberRange, _decode_CertificateGroupNumberRange, _encode_CertificateGroupNumberRange } from "../CertificateExtensions/CertificateGroupNumberRange.ta.mjs";
// export { CertificateGroupNumberRange, _decode_CertificateGroupNumberRange, _encode_CertificateGroupNumberRange } from "../CertificateExtensions/CertificateGroupNumberRange.ta.mjs";
import { GeneralName, _decode_GeneralName, _encode_GeneralName } from "../CertificateExtensions/GeneralName.ta.mjs";
// export { GeneralName, _decode_GeneralName, _encode_GeneralName } from "../CertificateExtensions/GeneralName.ta.mjs";


/**
 * @summary CertificateGroup
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CertificateGroup  ::=  CHOICE {
 *   serialNumbers      [0]  CertificateSerialNumbers,
 *   serialNumberRange  [1]  CertificateGroupNumberRange,
 *   nameSubtree        [2]  GeneralName,
 *   ... }
 * ```
 */
export
type CertificateGroup =
    { serialNumbers: CertificateSerialNumbers } /* CHOICE_ALT_ROOT */
    | { serialNumberRange: CertificateGroupNumberRange } /* CHOICE_ALT_ROOT */
    | { nameSubtree: GeneralName } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;

let _cached_decoder_for_CertificateGroup: $.ASN1Decoder<CertificateGroup> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CertificateGroup
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CertificateGroup (el: _Element): CertificateGroup {
    if (!_cached_decoder_for_CertificateGroup) { _cached_decoder_for_CertificateGroup = $._decode_extensible_choice<CertificateGroup>({
    "CONTEXT 0": [ "serialNumbers", $._decode_implicit<CertificateSerialNumbers>(() => _decode_CertificateSerialNumbers) ],
    "CONTEXT 1": [ "serialNumberRange", $._decode_implicit<CertificateGroupNumberRange>(() => _decode_CertificateGroupNumberRange) ],
    "CONTEXT 2": [ "nameSubtree", $._decode_explicit<GeneralName>(() => _decode_GeneralName) ]
}); }
    return _cached_decoder_for_CertificateGroup(el);
}

let _cached_encoder_for_CertificateGroup: $.ASN1Encoder<CertificateGroup> | null = null;

/**
 * @summary Encodes a(n) CertificateGroup into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CertificateGroup, encoded as an ASN.1 Element.
 */
export
function _encode_CertificateGroup (value: CertificateGroup, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CertificateGroup) { _cached_encoder_for_CertificateGroup = $._encode_choice<CertificateGroup>({
    "serialNumbers": $._encode_implicit(_TagClass.context, 0, () => _encode_CertificateSerialNumbers, $.BER),
    "serialNumberRange": $._encode_implicit(_TagClass.context, 1, () => _encode_CertificateGroupNumberRange, $.BER),
    "nameSubtree": $._encode_explicit(_TagClass.context, 2, () => _encode_GeneralName, $.BER),
}, $.BER); }
    return _cached_encoder_for_CertificateGroup(value, elGetter);
}


/* eslint-enable */
