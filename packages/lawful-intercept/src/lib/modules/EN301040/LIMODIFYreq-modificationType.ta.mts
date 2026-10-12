/* eslint-disable */
import {
    BOOLEAN,
    UTCTime,
    VisibleString,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { ActivityType, _decode_ActivityType, _encode_ActivityType } from "../EN301040/ActivityType.ta.mjs";
// export { ActivityType, _decode_ActivityType, _encode_ActivityType } from "../EN301040/ActivityType.ta.mjs";


/**
 * @summary LIMODIFYreq_modificationType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * LIMODIFYreq-modificationType ::= CHOICE {
 *     -- The duplicate tags here are not problematic because this module uses AUTOMATIC TAGS
 *     halt                    BOOLEAN,
 *     reset                    BOOLEAN,
 *     expiryDateTime           UTCTime,
 *     targetname               VisibleString,
 *     additionaltargetdata       VisibleString,
 *     monitorServiceList       SEQUENCE OF ActivityType
 * }
 * ```
 */
export
type LIMODIFYreq_modificationType =
    { halt: BOOLEAN } /* CHOICE_ALT_ROOT */
    | { reset: BOOLEAN } /* CHOICE_ALT_ROOT */
    | { expiryDateTime: UTCTime } /* CHOICE_ALT_ROOT */
    | { targetname: VisibleString } /* CHOICE_ALT_ROOT */
    | { additionaltargetdata: VisibleString } /* CHOICE_ALT_ROOT */
    | { monitorServiceList: ActivityType[] } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_LIMODIFYreq_modificationType: $.ASN1Decoder<LIMODIFYreq_modificationType> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) LIMODIFYreq_modificationType
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_LIMODIFYreq_modificationType (el: _Element): LIMODIFYreq_modificationType {
    if (!_cached_decoder_for_LIMODIFYreq_modificationType) { _cached_decoder_for_LIMODIFYreq_modificationType = $._decode_inextensible_choice<LIMODIFYreq_modificationType>({
    "CONTEXT 0": [ "halt", $._decodeBoolean ],
    "CONTEXT 1": [ "reset", $._decodeBoolean ],
    "CONTEXT 2": [ "expiryDateTime", $._decodeUTCTime ],
    "CONTEXT 3": [ "targetname", $._decodeVisibleString ],
    "CONTEXT 4": [ "additionaltargetdata", $._decodeVisibleString ],
    "CONTEXT 5": [ "monitorServiceList", $._decodeSequenceOf<ActivityType>(() => _decode_ActivityType) ]
}); }
    return _cached_decoder_for_LIMODIFYreq_modificationType(el);
}

let _cached_encoder_for_LIMODIFYreq_modificationType: $.ASN1Encoder<LIMODIFYreq_modificationType> | null = null;

/**
 * @summary Encodes a(n) LIMODIFYreq_modificationType into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The LIMODIFYreq_modificationType, encoded as an ASN.1 Element.
 */
export
function _encode_LIMODIFYreq_modificationType (value: LIMODIFYreq_modificationType, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_LIMODIFYreq_modificationType) { _cached_encoder_for_LIMODIFYreq_modificationType = $._encode_choice<LIMODIFYreq_modificationType>({
    "halt": $._encode_implicit(_TagClass.context, 0, () => $._encodeBoolean, $.BER),
    "reset": $._encode_implicit(_TagClass.context, 1, () => $._encodeBoolean, $.BER),
    "expiryDateTime": $._encode_implicit(_TagClass.context, 2, () => $._encodeUTCTime, $.BER),
    "targetname": $._encode_implicit(_TagClass.context, 3, () => $._encodeVisibleString, $.BER),
    "additionaltargetdata": $._encode_implicit(_TagClass.context, 4, () => $._encodeVisibleString, $.BER),
    "monitorServiceList": $._encode_implicit(_TagClass.context, 5, () => $._encodeSequenceOf<ActivityType>(() => _encode_ActivityType, $.BER), $.BER),
}, $.BER); }
    return _cached_encoder_for_LIMODIFYreq_modificationType(value, elGetter);
}


/* eslint-enable */
