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
    OperationResult,
    _decode_OperationResult,
    _encode_OperationResult,
} from '../Schedulerev1-ASN1Module/OperationResult.ta.mjs';
/**
 * @summary ApplyOperationToMembershipReply
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ApplyOperationToMembershipReply  ::=  SEQUENCE OF OperationResult
 * ```
 */
export type ApplyOperationToMembershipReply = OperationResult[]; // SequenceOfType

let _cached_decoder_for_ApplyOperationToMembershipReply: $.ASN1Decoder<ApplyOperationToMembershipReply> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ApplyOperationToMembershipReply
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ApplyOperationToMembershipReply} The decoded data structure.
 */
export function _decode_ApplyOperationToMembershipReply(el: _Element): ApplyOperationToMembershipReply {
    if (!_cached_decoder_for_ApplyOperationToMembershipReply) {
        _cached_decoder_for_ApplyOperationToMembershipReply = $._decodeSequenceOf<OperationResult>(
            () => _decode_OperationResult
        );
    }
    return _cached_decoder_for_ApplyOperationToMembershipReply(el);
}

let _cached_encoder_for_ApplyOperationToMembershipReply: $.ASN1Encoder<ApplyOperationToMembershipReply> | null = null;

/**
 * @summary Encodes a(n) ApplyOperationToMembershipReply into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ApplyOperationToMembershipReply, encoded as an ASN.1 Element.
 */
export function _encode_ApplyOperationToMembershipReply(
    value: ApplyOperationToMembershipReply,
    elGetter: $.ASN1Encoder<ApplyOperationToMembershipReply>
): _Element {
    if (!_cached_encoder_for_ApplyOperationToMembershipReply) {
        _cached_encoder_for_ApplyOperationToMembershipReply = $._encodeSequenceOf<OperationResult>(
            () => _encode_OperationResult,
            $.BER
        );
    }
    return _cached_encoder_for_ApplyOperationToMembershipReply(value, elGetter);
}


/* eslint-enable */
