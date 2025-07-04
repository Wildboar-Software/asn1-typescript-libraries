/* eslint-disable */
import {
    OBJECT_IDENTIFIER,
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
import { ObjectInstance, _decode_ObjectInstance, _encode_ObjectInstance } from "@wildboar/cmip";
import { AE_title, _decode_AE_title, _encode_AE_title } from "@wildboar/acse";
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

let _cached_decoder_for_SecurityAlarmDetector: $.ASN1Decoder<SecurityAlarmDetector> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SecurityAlarmDetector
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SecurityAlarmDetector} The decoded data structure.
 */
export
function _decode_SecurityAlarmDetector (el: _Element): SecurityAlarmDetector {
    if (!_cached_decoder_for_SecurityAlarmDetector) { _cached_decoder_for_SecurityAlarmDetector = $._decode_inextensible_choice<SecurityAlarmDetector>({
    "CONTEXT 0": [ "mechanism", $._decode_implicit<OBJECT_IDENTIFIER>(() => $._decodeObjectIdentifier) ],
    "CONTEXT 1": [ "object", $._decode_explicit<ObjectInstance>(() => _decode_ObjectInstance) ],
    "CONTEXT 2": [ "application", $._decode_explicit<AE_title>(() => _decode_AE_title) ]
}); }
    return _cached_decoder_for_SecurityAlarmDetector(el);
}

let _cached_encoder_for_SecurityAlarmDetector: $.ASN1Encoder<SecurityAlarmDetector> | null = null;

/**
 * @summary Encodes a(n) SecurityAlarmDetector into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SecurityAlarmDetector, encoded as an ASN.1 Element.
 */
export
function _encode_SecurityAlarmDetector (value: SecurityAlarmDetector, elGetter: $.ASN1Encoder<SecurityAlarmDetector>): _Element {
    if (!_cached_encoder_for_SecurityAlarmDetector) { _cached_encoder_for_SecurityAlarmDetector = $._encode_choice<SecurityAlarmDetector>({
    "mechanism": $._encode_implicit(_TagClass.context, 0, () => $._encodeObjectIdentifier, $.BER),
    "object": $._encode_explicit(_TagClass.context, 1, () => _encode_ObjectInstance, $.BER),
    "application": $._encode_explicit(_TagClass.context, 2, () => _encode_AE_title, $.BER),
}, $.BER); }
    return _cached_encoder_for_SecurityAlarmDetector(value, elGetter);
}


/* eslint-enable */
