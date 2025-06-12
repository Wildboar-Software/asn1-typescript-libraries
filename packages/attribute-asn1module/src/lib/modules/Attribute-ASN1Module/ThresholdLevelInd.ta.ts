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
import { ThresholdLevelInd_up, _decode_ThresholdLevelInd_up, _encode_ThresholdLevelInd_up } from "../Attribute-ASN1Module/ThresholdLevelInd-up.ta.js";
export { ThresholdLevelInd_up, _decode_ThresholdLevelInd_up, _encode_ThresholdLevelInd_up } from "../Attribute-ASN1Module/ThresholdLevelInd-up.ta.js";
import { ThresholdLevelInd_down, _decode_ThresholdLevelInd_down, _encode_ThresholdLevelInd_down } from "../Attribute-ASN1Module/ThresholdLevelInd-down.ta.js";
export { ThresholdLevelInd_down, _decode_ThresholdLevelInd_down, _encode_ThresholdLevelInd_down } from "../Attribute-ASN1Module/ThresholdLevelInd-down.ta.js";


/* START_OF_SYMBOL_DEFINITION ThresholdLevelInd */
/**
 * @summary ThresholdLevelInd
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ThresholdLevelInd  ::=  CHOICE {
 *   up    [1]  SEQUENCE {high  ObservedValue,
 *                        low   ObservedValue OPTIONAL}, -- up is the only permitted choice for counter
 *   down  [2]  SEQUENCE {high  ObservedValue,
 *                        low   ObservedValue}
 * }
 * ```
 */
export
type ThresholdLevelInd =
    { up: ThresholdLevelInd_up } /* CHOICE_ALT_ROOT */
    | { down: ThresholdLevelInd_down } /* CHOICE_ALT_ROOT */;
/* END_OF_SYMBOL_DEFINITION ThresholdLevelInd */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ThresholdLevelInd */
let _cached_decoder_for_ThresholdLevelInd: $.ASN1Decoder<ThresholdLevelInd> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ThresholdLevelInd */

/* START_OF_SYMBOL_DEFINITION _decode_ThresholdLevelInd */
/**
 * @summary Decodes an ASN.1 element into a(n) ThresholdLevelInd
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ThresholdLevelInd} The decoded data structure.
 */
export
function _decode_ThresholdLevelInd (el: _Element) {
    if (!_cached_decoder_for_ThresholdLevelInd) { _cached_decoder_for_ThresholdLevelInd = $._decode_inextensible_choice<ThresholdLevelInd>({
    "CONTEXT 1": [ "up", $._decode_implicit<ThresholdLevelInd_up>(() => _decode_ThresholdLevelInd_up) ],
    "CONTEXT 2": [ "down", $._decode_implicit<ThresholdLevelInd_down>(() => _decode_ThresholdLevelInd_down) ]
}); }
    return _cached_decoder_for_ThresholdLevelInd(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ThresholdLevelInd */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ThresholdLevelInd */
let _cached_encoder_for_ThresholdLevelInd: $.ASN1Encoder<ThresholdLevelInd> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ThresholdLevelInd */

/* START_OF_SYMBOL_DEFINITION _encode_ThresholdLevelInd */
/**
 * @summary Encodes a(n) ThresholdLevelInd into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ThresholdLevelInd, encoded as an ASN.1 Element.
 */
export
function _encode_ThresholdLevelInd (value: ThresholdLevelInd, elGetter: $.ASN1Encoder<ThresholdLevelInd>) {
    if (!_cached_encoder_for_ThresholdLevelInd) { _cached_encoder_for_ThresholdLevelInd = $._encode_choice<ThresholdLevelInd>({
    "up": $._encode_implicit(_TagClass.context, 1, () => _encode_ThresholdLevelInd_up, $.BER),
    "down": $._encode_implicit(_TagClass.context, 2, () => _encode_ThresholdLevelInd_down, $.BER),
}, $.BER); }
    return _cached_encoder_for_ThresholdLevelInd(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ThresholdLevelInd */

/* eslint-enable */
