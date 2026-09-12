/* eslint-disable */
import {
    INTEGER,
    NULL,
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



/**
 * @summary AlterEventConditionListMonitoring_Request_priorityChange
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AlterEventConditionListMonitoring-Request-priorityChange ::= CHOICE {
 *     priorityValue [0] IMPLICIT INTEGER,
 *     priorityReset [1] IMPLICIT NULL
 * }
 * ```
 */
export
type AlterEventConditionListMonitoring_Request_priorityChange =
    { priorityValue: INTEGER } /* CHOICE_ALT_ROOT */
    | { priorityReset: NULL } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_AlterEventConditionListMonitoring_Request_priorityChange: $.ASN1Decoder<AlterEventConditionListMonitoring_Request_priorityChange> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AlterEventConditionListMonitoring_Request_priorityChange
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AlterEventConditionListMonitoring_Request_priorityChange (el: _Element): AlterEventConditionListMonitoring_Request_priorityChange {
    if (!_cached_decoder_for_AlterEventConditionListMonitoring_Request_priorityChange) { _cached_decoder_for_AlterEventConditionListMonitoring_Request_priorityChange = $._decode_inextensible_choice<AlterEventConditionListMonitoring_Request_priorityChange>({
    "CONTEXT 0": [ "priorityValue", $._decode_implicit<INTEGER>(() => $._decodeInteger) ],
    "CONTEXT 1": [ "priorityReset", $._decode_implicit<NULL>(() => $._decodeNull) ]
}); }
    return _cached_decoder_for_AlterEventConditionListMonitoring_Request_priorityChange(el);
}

let _cached_encoder_for_AlterEventConditionListMonitoring_Request_priorityChange: $.ASN1Encoder<AlterEventConditionListMonitoring_Request_priorityChange> | null = null;

/**
 * @summary Encodes a(n) AlterEventConditionListMonitoring_Request_priorityChange into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AlterEventConditionListMonitoring_Request_priorityChange, encoded as an ASN.1 Element.
 */
export
function _encode_AlterEventConditionListMonitoring_Request_priorityChange (value: AlterEventConditionListMonitoring_Request_priorityChange, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AlterEventConditionListMonitoring_Request_priorityChange) { _cached_encoder_for_AlterEventConditionListMonitoring_Request_priorityChange = $._encode_choice<AlterEventConditionListMonitoring_Request_priorityChange>({
    "priorityValue": $._encode_implicit(_TagClass.context, 0, () => $._encodeInteger, $.BER),
    "priorityReset": $._encode_implicit(_TagClass.context, 1, () => $._encodeNull, $.BER),
}, $.BER); }
    return _cached_encoder_for_AlterEventConditionListMonitoring_Request_priorityChange(value, elGetter);
}


/* eslint-enable */
