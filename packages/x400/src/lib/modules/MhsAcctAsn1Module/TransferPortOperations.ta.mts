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
import * as $ from '@wildboar/asn1/functional';
import {
    EventTypeId,
    _decode_EventTypeId,
    _encode_EventTypeId,
} from '@wildboar/cmip/src/lib/modules/CMIP-1/EventTypeId.ta.mjs';
/**
 * @summary TransferPortOperations
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TransferPortOperations  ::=
 *   EventTypeId
 *     (message-transfer-in | message-transfer-out | probe-transfer-in |
 *      probe-transfer-out | report-transfer-in | report-transfer-out)
 * ```
 */
export type TransferPortOperations = EventTypeId; // DefinedType

let _cached_decoder_for_TransferPortOperations: $.ASN1Decoder<TransferPortOperations> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TransferPortOperations
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TransferPortOperations} The decoded data structure.
 */
export function _decode_TransferPortOperations(el: _Element) {
    if (!_cached_decoder_for_TransferPortOperations) {
        _cached_decoder_for_TransferPortOperations = _decode_EventTypeId;
    }
    return _cached_decoder_for_TransferPortOperations(el);
}

let _cached_encoder_for_TransferPortOperations: $.ASN1Encoder<TransferPortOperations> | null = null;

/**
 * @summary Encodes a(n) TransferPortOperations into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TransferPortOperations, encoded as an ASN.1 Element.
 */
export function _encode_TransferPortOperations(
    value: TransferPortOperations,
    elGetter: $.ASN1Encoder<TransferPortOperations>
) {
    if (!_cached_encoder_for_TransferPortOperations) {
        _cached_encoder_for_TransferPortOperations = _encode_EventTypeId;
    }
    return _cached_encoder_for_TransferPortOperations(value, elGetter);
}


/* eslint-enable */
