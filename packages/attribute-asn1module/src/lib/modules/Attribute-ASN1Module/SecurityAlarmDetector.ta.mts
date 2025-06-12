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
import { ObjectInstance, _decode_ObjectInstance, _encode_ObjectInstance } from "@wildboar/cmip/src/lib/modules/CMIP-1/ObjectInstance.ta.mjs";
export { ObjectInstance, _decode_ObjectInstance, _encode_ObjectInstance } from "@wildboar/cmip/src/lib/modules/CMIP-1/ObjectInstance.ta.mjs";
import { AE_title, _decode_AE_title, _encode_AE_title } from "@wildboar/acse/src/lib/modules/ACSE-1/AE-title.ta.mjs";
export { AE_title, _decode_AE_title, _encode_AE_title } from "@wildboar/acse/src/lib/modules/ACSE-1/AE-title.ta.mjs";


/* START_OF_SYMBOL_DEFINITION SecurityAlarmDetector */
/**
 * @summary SecurityAlarmDetector
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SecurityAlarmDetector  ::=  CHOICE {
 *   mechanism    [0]  OBJECT IDENTIFIER,
 *   object       [1]  ObjectInstance,
 *   application  [2]  AE-title
 * }
 * ```
 */
export
type SecurityAlarmDetector =
    { mechanism: OBJECT_IDENTIFIER } /* CHOICE_ALT_ROOT */
    | { object: ObjectInstance } /* CHOICE_ALT_ROOT */
    | { application: AE_title } /* CHOICE_ALT_ROOT */;
/* END_OF_SYMBOL_DEFINITION SecurityAlarmDetector */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_SecurityAlarmDetector */
let _cached_decoder_for_SecurityAlarmDetector: $.ASN1Decoder<SecurityAlarmDetector> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_SecurityAlarmDetector */

/* START_OF_SYMBOL_DEFINITION _decode_SecurityAlarmDetector */
/**
 * @summary Decodes an ASN.1 element into a(n) SecurityAlarmDetector
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SecurityAlarmDetector} The decoded data structure.
 */
export
function _decode_SecurityAlarmDetector (el: _Element) {
    if (!_cached_decoder_for_SecurityAlarmDetector) { _cached_decoder_for_SecurityAlarmDetector = $._decode_inextensible_choice<SecurityAlarmDetector>({
    "CONTEXT 0": [ "mechanism", $._decode_implicit<OBJECT_IDENTIFIER>(() => $._decodeObjectIdentifier) ],
    "CONTEXT 1": [ "object", $._decode_explicit<ObjectInstance>(() => _decode_ObjectInstance) ],
    "CONTEXT 2": [ "application", $._decode_explicit<AE_title>(() => _decode_AE_title) ]
}); }
    return _cached_decoder_for_SecurityAlarmDetector(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_SecurityAlarmDetector */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_SecurityAlarmDetector */
let _cached_encoder_for_SecurityAlarmDetector: $.ASN1Encoder<SecurityAlarmDetector> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_SecurityAlarmDetector */

/* START_OF_SYMBOL_DEFINITION _encode_SecurityAlarmDetector */
/**
 * @summary Encodes a(n) SecurityAlarmDetector into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SecurityAlarmDetector, encoded as an ASN.1 Element.
 */
export
function _encode_SecurityAlarmDetector (value: SecurityAlarmDetector, elGetter: $.ASN1Encoder<SecurityAlarmDetector>) {
    if (!_cached_encoder_for_SecurityAlarmDetector) { _cached_encoder_for_SecurityAlarmDetector = $._encode_choice<SecurityAlarmDetector>({
    "mechanism": $._encode_implicit(_TagClass.context, 0, () => $._encodeObjectIdentifier, $.BER),
    "object": $._encode_explicit(_TagClass.context, 1, () => _encode_ObjectInstance, $.BER),
    "application": $._encode_explicit(_TagClass.context, 2, () => _encode_AE_title, $.BER),
}, $.BER); }
    return _cached_encoder_for_SecurityAlarmDetector(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_SecurityAlarmDetector */

/* eslint-enable */
