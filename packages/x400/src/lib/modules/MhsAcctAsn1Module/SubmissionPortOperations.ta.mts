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
    EventTypeId,
    _decode_EventTypeId,
    _encode_EventTypeId,
} from '@wildboar/cmip/src/lib/modules/CMIP-1/EventTypeId.ta.mjs';
/**
 * @summary SubmissionPortOperations
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SubmissionPortOperations  ::=
 *   EventTypeId
 *     (message-submission | probe-submission | cancel-deferred-delivery |
 *      submission-control)
 * ```
 */
export type SubmissionPortOperations = EventTypeId; // DefinedType

let _cached_decoder_for_SubmissionPortOperations: $.ASN1Decoder<SubmissionPortOperations> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SubmissionPortOperations
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SubmissionPortOperations} The decoded data structure.
 */
export function _decode_SubmissionPortOperations(el: _Element) {
    if (!_cached_decoder_for_SubmissionPortOperations) {
        _cached_decoder_for_SubmissionPortOperations = _decode_EventTypeId;
    }
    return _cached_decoder_for_SubmissionPortOperations(el);
}

let _cached_encoder_for_SubmissionPortOperations: $.ASN1Encoder<SubmissionPortOperations> | null = null;

/**
 * @summary Encodes a(n) SubmissionPortOperations into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SubmissionPortOperations, encoded as an ASN.1 Element.
 */
export function _encode_SubmissionPortOperations(
    value: SubmissionPortOperations,
    elGetter: $.ASN1Encoder<SubmissionPortOperations>
) {
    if (!_cached_encoder_for_SubmissionPortOperations) {
        _cached_encoder_for_SubmissionPortOperations = _encode_EventTypeId;
    }
    return _cached_encoder_for_SubmissionPortOperations(value, elGetter);
}


/* eslint-enable */
