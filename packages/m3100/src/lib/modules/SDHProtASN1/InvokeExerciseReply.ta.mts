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
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';
import {
    InvokeExerciseReply_Item,
    _decode_InvokeExerciseReply_Item,
    _encode_InvokeExerciseReply_Item,
} from '../SDHProtASN1/InvokeExerciseReply-Item.ta.mjs';

/**
 * @summary InvokeExerciseReply
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * InvokeExerciseReply  ::=
 *   SET OF
 *     SEQUENCE {protectionUnit  RelativeDistinguishedName,
 *               result          LastAttemptResult}
 * ```
 */
export type InvokeExerciseReply = InvokeExerciseReply_Item[]; // SetOfType


let _cached_decoder_for_InvokeExerciseReply: $.ASN1Decoder<InvokeExerciseReply> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) InvokeExerciseReply
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {InvokeExerciseReply} The decoded data structure.
 */
export function _decode_InvokeExerciseReply(el: _Element): InvokeExerciseReply {
    if (!_cached_decoder_for_InvokeExerciseReply) {
        _cached_decoder_for_InvokeExerciseReply = $._decodeSetOf<InvokeExerciseReply_Item>(
            () => _decode_InvokeExerciseReply_Item
        );
    }
    return _cached_decoder_for_InvokeExerciseReply(el);
}


let _cached_encoder_for_InvokeExerciseReply: $.ASN1Encoder<InvokeExerciseReply> | null = null;


/**
 * @summary Encodes a(n) InvokeExerciseReply into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The InvokeExerciseReply, encoded as an ASN.1 Element.
 */
export function _encode_InvokeExerciseReply(
    value: InvokeExerciseReply,
    elGetter: $.ASN1Encoder<InvokeExerciseReply>
): _Element {
    if (!_cached_encoder_for_InvokeExerciseReply) {
        _cached_encoder_for_InvokeExerciseReply = $._encodeSetOf<InvokeExerciseReply_Item>(
            () => _encode_InvokeExerciseReply_Item,
            $.BER
        );
    }
    return _cached_encoder_for_InvokeExerciseReply(value, elGetter);
}


/* eslint-enable */
