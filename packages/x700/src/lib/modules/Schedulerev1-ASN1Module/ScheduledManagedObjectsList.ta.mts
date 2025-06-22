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
    ScheduledManagedObjectsList_Item,
    _decode_ScheduledManagedObjectsList_Item,
    _encode_ScheduledManagedObjectsList_Item,
} from '../Schedulerev1-ASN1Module/ScheduledManagedObjectsList-Item.ta.mjs';
/**
 * @summary ScheduledManagedObjectsList
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ScheduledManagedObjectsList  ::=
 *   SET OF
 *     SEQUENCE {objectInstance  ObjectInstance,
 *               activity        AttributeId OPTIONAL}
 * ```
 */
export type ScheduledManagedObjectsList = ScheduledManagedObjectsList_Item[]; // SetOfType

let _cached_decoder_for_ScheduledManagedObjectsList: $.ASN1Decoder<ScheduledManagedObjectsList> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ScheduledManagedObjectsList
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ScheduledManagedObjectsList} The decoded data structure.
 */
export function _decode_ScheduledManagedObjectsList(el: _Element) {
    if (!_cached_decoder_for_ScheduledManagedObjectsList) {
        _cached_decoder_for_ScheduledManagedObjectsList = $._decodeSetOf<ScheduledManagedObjectsList_Item>(
            () => _decode_ScheduledManagedObjectsList_Item
        );
    }
    return _cached_decoder_for_ScheduledManagedObjectsList(el);
}

let _cached_encoder_for_ScheduledManagedObjectsList: $.ASN1Encoder<ScheduledManagedObjectsList> | null = null;

/**
 * @summary Encodes a(n) ScheduledManagedObjectsList into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ScheduledManagedObjectsList, encoded as an ASN.1 Element.
 */
export function _encode_ScheduledManagedObjectsList(
    value: ScheduledManagedObjectsList,
    elGetter: $.ASN1Encoder<ScheduledManagedObjectsList>
) {
    if (!_cached_encoder_for_ScheduledManagedObjectsList) {
        _cached_encoder_for_ScheduledManagedObjectsList = $._encodeSetOf<ScheduledManagedObjectsList_Item>(
            () => _encode_ScheduledManagedObjectsList_Item,
            $.BER
        );
    }
    return _cached_encoder_for_ScheduledManagedObjectsList(value, elGetter);
}


/* eslint-enable */
