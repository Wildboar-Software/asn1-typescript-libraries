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
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/functional.mjs';
import {
    OperationResult,
    _decode_OperationResult,
    _encode_OperationResult,
} from '../Schedulerev1-ASN1Module/OperationResult.ta.mjs';
/* START_OF_SYMBOL_DEFINITION ApplyOperationToMembershipReply */
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
/* END_OF_SYMBOL_DEFINITION ApplyOperationToMembershipReply */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ApplyOperationToMembershipReply */
let _cached_decoder_for_ApplyOperationToMembershipReply: $.ASN1Decoder<ApplyOperationToMembershipReply> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ApplyOperationToMembershipReply */

/* START_OF_SYMBOL_DEFINITION _decode_ApplyOperationToMembershipReply */
/**
 * @summary Decodes an ASN.1 element into a(n) ApplyOperationToMembershipReply
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ApplyOperationToMembershipReply} The decoded data structure.
 */
export function _decode_ApplyOperationToMembershipReply(el: _Element) {
    if (!_cached_decoder_for_ApplyOperationToMembershipReply) {
        _cached_decoder_for_ApplyOperationToMembershipReply = $._decodeSequenceOf<OperationResult>(
            () => _decode_OperationResult
        );
    }
    return _cached_decoder_for_ApplyOperationToMembershipReply(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ApplyOperationToMembershipReply */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ApplyOperationToMembershipReply */
let _cached_encoder_for_ApplyOperationToMembershipReply: $.ASN1Encoder<ApplyOperationToMembershipReply> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ApplyOperationToMembershipReply */

/* START_OF_SYMBOL_DEFINITION _encode_ApplyOperationToMembershipReply */
/**
 * @summary Encodes a(n) ApplyOperationToMembershipReply into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ApplyOperationToMembershipReply, encoded as an ASN.1 Element.
 */
export function _encode_ApplyOperationToMembershipReply(
    value: ApplyOperationToMembershipReply,
    elGetter: $.ASN1Encoder<ApplyOperationToMembershipReply>
) {
    if (!_cached_encoder_for_ApplyOperationToMembershipReply) {
        _cached_encoder_for_ApplyOperationToMembershipReply = $._encodeSequenceOf<OperationResult>(
            () => _encode_OperationResult,
            $.BER
        );
    }
    return _cached_encoder_for_ApplyOperationToMembershipReply(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ApplyOperationToMembershipReply */

/* eslint-enable */
