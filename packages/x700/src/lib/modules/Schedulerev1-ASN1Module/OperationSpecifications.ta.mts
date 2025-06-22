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
    OperationSpecifications_Item,
    _decode_OperationSpecifications_Item,
    _encode_OperationSpecifications_Item,
} from '../Schedulerev1-ASN1Module/OperationSpecifications-Item.ta.mjs';

/**
 * @summary OperationSpecifications
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * OperationSpecifications  ::=
 *   SET OF
 *     SEQUENCE {scheduledObjects     SET OF ObjectInstance,
 *               scheduledOperations
 *                 CHOICE {set     [0] IMPLICIT ModificationList,
 *                         action  [1] IMPLICIT ActionInfo,
 *                         get     [2] IMPLICIT GetArgument}}
 * ```
 */
export type OperationSpecifications = OperationSpecifications_Item[]; // SetOfType


let _cached_decoder_for_OperationSpecifications: $.ASN1Decoder<OperationSpecifications> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) OperationSpecifications
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {OperationSpecifications} The decoded data structure.
 */
export function _decode_OperationSpecifications(el: _Element) {
    if (!_cached_decoder_for_OperationSpecifications) {
        _cached_decoder_for_OperationSpecifications = $._decodeSetOf<OperationSpecifications_Item>(
            () => _decode_OperationSpecifications_Item
        );
    }
    return _cached_decoder_for_OperationSpecifications(el);
}


let _cached_encoder_for_OperationSpecifications: $.ASN1Encoder<OperationSpecifications> | null = null;


/**
 * @summary Encodes a(n) OperationSpecifications into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The OperationSpecifications, encoded as an ASN.1 Element.
 */
export function _encode_OperationSpecifications(
    value: OperationSpecifications,
    elGetter: $.ASN1Encoder<OperationSpecifications>
) {
    if (!_cached_encoder_for_OperationSpecifications) {
        _cached_encoder_for_OperationSpecifications = $._encodeSetOf<OperationSpecifications_Item>(
            () => _encode_OperationSpecifications_Item,
            $.BER
        );
    }
    return _cached_encoder_for_OperationSpecifications(value, elGetter);
}


/* eslint-enable */
