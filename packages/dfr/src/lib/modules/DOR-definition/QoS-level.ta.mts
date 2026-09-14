/* eslint-disable */
import {
    NULL,
    GeneralizedTime,
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
import { QoS_level_level_3, _decode_QoS_level_level_3, _encode_QoS_level_level_3 } from "../DOR-definition/QoS-level-level-3.ta.mjs";
// export { QoS_level_level_3, _decode_QoS_level_level_3, _encode_QoS_level_level_3 } from "../DOR-definition/QoS-level-level-3.ta.mjs";


/**
 * @summary QoS_level
 * @description
 *
 * QoS level of a DOR (ISO/IEC 10031-2). DFR reports referent-modified relative
 * to produce-time stored here. ISO/IEC 10166-1:1991 §8.3.5.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * QoS-level  ::=  CHOICE {
 *   level-1  [1] IMPLICIT NULL,
 *   level-2  [2] IMPLICIT GeneralizedTime,
 *   -- specifying the produce time
 *   level-3
 *     [3] IMPLICIT SEQUENCE {produce-time   GeneralizedTime,
 *                            fidelity-time  GeneralizedTime}
 * }
 * ```
 */
export
type QoS_level =
    { level_1: NULL } /* CHOICE_ALT_ROOT */
    | { level_2: GeneralizedTime } /* CHOICE_ALT_ROOT */
    | { level_3: QoS_level_level_3 } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_QoS_level: $.ASN1Decoder<QoS_level> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) QoS_level
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_QoS_level (el: _Element): QoS_level {
    if (!_cached_decoder_for_QoS_level) { _cached_decoder_for_QoS_level = $._decode_inextensible_choice<QoS_level>({
    "CONTEXT 1": [ "level_1", $._decode_implicit<NULL>(() => $._decodeNull) ],
    "CONTEXT 2": [ "level_2", $._decode_implicit<GeneralizedTime>(() => $._decodeGeneralizedTime) ],
    "CONTEXT 3": [ "level_3", $._decode_implicit<QoS_level_level_3>(() => _decode_QoS_level_level_3) ]
}); }
    return _cached_decoder_for_QoS_level(el);
}

let _cached_encoder_for_QoS_level: $.ASN1Encoder<QoS_level> | null = null;

/**
 * @summary Encodes a(n) QoS_level into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The QoS_level, encoded as an ASN.1 Element.
 */
export
function _encode_QoS_level (value: QoS_level, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_QoS_level) { _cached_encoder_for_QoS_level = $._encode_choice<QoS_level>({
    "level_1": $._encode_implicit(_TagClass.context, 1, () => $._encodeNull, $.BER),
    "level_2": $._encode_implicit(_TagClass.context, 2, () => $._encodeGeneralizedTime, $.BER),
    "level_3": $._encode_implicit(_TagClass.context, 3, () => _encode_QoS_level_level_3, $.BER),
}, $.BER); }
    return _cached_encoder_for_QoS_level(value, elGetter);
}


/* eslint-enable */
