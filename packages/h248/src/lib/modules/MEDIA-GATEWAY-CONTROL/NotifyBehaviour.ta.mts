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
import { RegulatedEmbeddedDescriptor, _decode_RegulatedEmbeddedDescriptor, _encode_RegulatedEmbeddedDescriptor } from "../MEDIA-GATEWAY-CONTROL/RegulatedEmbeddedDescriptor.ta.mjs";
// export { RegulatedEmbeddedDescriptor, _decode_RegulatedEmbeddedDescriptor, _encode_RegulatedEmbeddedDescriptor } from "../MEDIA-GATEWAY-CONTROL/RegulatedEmbeddedDescriptor.ta.mjs";


/**
 * @summary NotifyBehaviour
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NotifyBehaviour  ::=  CHOICE
 *     {
 *         notifyImmediate            [0] NULL,
 *         notifyRegulated            [1] RegulatedEmbeddedDescriptor,
 *         neverNotify                [2] NULL,
 *         ...
 *     }
 * ```
 */
export
type NotifyBehaviour =
    { notifyImmediate: NULL } /* CHOICE_ALT_ROOT */
    | { notifyRegulated: RegulatedEmbeddedDescriptor } /* CHOICE_ALT_ROOT */
    | { neverNotify: NULL } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;

let _cached_decoder_for_NotifyBehaviour: $.ASN1Decoder<NotifyBehaviour> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) NotifyBehaviour
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_NotifyBehaviour (el: _Element): NotifyBehaviour {
    if (!_cached_decoder_for_NotifyBehaviour) { _cached_decoder_for_NotifyBehaviour = $._decode_extensible_choice<NotifyBehaviour>({
    "CONTEXT 0": [ "notifyImmediate", $._decode_implicit<NULL>(() => $._decodeNull) ],
    "CONTEXT 1": [ "notifyRegulated", $._decode_implicit<RegulatedEmbeddedDescriptor>(() => _decode_RegulatedEmbeddedDescriptor) ],
    "CONTEXT 2": [ "neverNotify", $._decode_implicit<NULL>(() => $._decodeNull) ]
}); }
    return _cached_decoder_for_NotifyBehaviour(el);
}

let _cached_encoder_for_NotifyBehaviour: $.ASN1Encoder<NotifyBehaviour> | null = null;

/**
 * @summary Encodes a(n) NotifyBehaviour into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NotifyBehaviour, encoded as an ASN.1 Element.
 */
export
function _encode_NotifyBehaviour (value: NotifyBehaviour, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_NotifyBehaviour) { _cached_encoder_for_NotifyBehaviour = $._encode_choice<NotifyBehaviour>({
    "notifyImmediate": $._encode_implicit(_TagClass.context, 0, () => $._encodeNull, $.BER),
    "notifyRegulated": $._encode_implicit(_TagClass.context, 1, () => _encode_RegulatedEmbeddedDescriptor, $.BER),
    "neverNotify": $._encode_implicit(_TagClass.context, 2, () => $._encodeNull, $.BER),
}, $.BER); }
    return _cached_encoder_for_NotifyBehaviour(value, elGetter);
}


/* eslint-enable */
