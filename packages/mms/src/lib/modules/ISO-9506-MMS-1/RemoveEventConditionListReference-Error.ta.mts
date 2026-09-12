/* eslint-disable */
import {
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
import { ObjectName, _decode_ObjectName, _encode_ObjectName } from "../ISO-9506-MMS-1/ObjectName.ta.mjs";
// export { ObjectName, _decode_ObjectName, _encode_ObjectName } from "../ISO-9506-MMS-1/ObjectName.ta.mjs";


/**
 * @summary RemoveEventConditionListReference_Error
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RemoveEventConditionListReference-Error  ::=  CHOICE {
 *    eventCondition                [0] ObjectName,
 *    eventConditionList            [1] ObjectName   }
 * ```
 */
export
type RemoveEventConditionListReference_Error =
    { eventCondition: ObjectName } /* CHOICE_ALT_ROOT */
    | { eventConditionList: ObjectName } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_RemoveEventConditionListReference_Error: $.ASN1Decoder<RemoveEventConditionListReference_Error> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RemoveEventConditionListReference_Error
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RemoveEventConditionListReference_Error (el: _Element): RemoveEventConditionListReference_Error {
    if (!_cached_decoder_for_RemoveEventConditionListReference_Error) { _cached_decoder_for_RemoveEventConditionListReference_Error = $._decode_inextensible_choice<RemoveEventConditionListReference_Error>({
    "CONTEXT 0": [ "eventCondition", $._decode_explicit<ObjectName>(() => _decode_ObjectName) ],
    "CONTEXT 1": [ "eventConditionList", $._decode_explicit<ObjectName>(() => _decode_ObjectName) ]
}); }
    return _cached_decoder_for_RemoveEventConditionListReference_Error(el);
}

let _cached_encoder_for_RemoveEventConditionListReference_Error: $.ASN1Encoder<RemoveEventConditionListReference_Error> | null = null;

/**
 * @summary Encodes a(n) RemoveEventConditionListReference_Error into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RemoveEventConditionListReference_Error, encoded as an ASN.1 Element.
 */
export
function _encode_RemoveEventConditionListReference_Error (value: RemoveEventConditionListReference_Error, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RemoveEventConditionListReference_Error) { _cached_encoder_for_RemoveEventConditionListReference_Error = $._encode_choice<RemoveEventConditionListReference_Error>({
    "eventCondition": $._encode_explicit(_TagClass.context, 0, () => _encode_ObjectName, $.BER),
    "eventConditionList": $._encode_explicit(_TagClass.context, 1, () => _encode_ObjectName, $.BER),
}, $.BER); }
    return _cached_encoder_for_RemoveEventConditionListReference_Error(value, elGetter);
}


/* eslint-enable */
