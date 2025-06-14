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
    Notifications_Item,
    _decode_Notifications_Item,
    _encode_Notifications_Item,
} from '../DefinitionASN1Module/Notifications-Item.ta.mjs';
/* START_OF_SYMBOL_DEFINITION Notifications */
/**
 * @summary Notifications
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Notifications  ::=
 *   SET OF
 *     SEQUENCE {notification  [0]  TemplateLabel,
 *               parameter     [1]  TemplateList OPTIONAL}
 * ```
 */
export type Notifications = Notifications_Item[]; // SetOfType
/* END_OF_SYMBOL_DEFINITION Notifications */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Notifications */
let _cached_decoder_for_Notifications: $.ASN1Decoder<Notifications> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Notifications */

/* START_OF_SYMBOL_DEFINITION _decode_Notifications */
/**
 * @summary Decodes an ASN.1 element into a(n) Notifications
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Notifications} The decoded data structure.
 */
export function _decode_Notifications(el: _Element) {
    if (!_cached_decoder_for_Notifications) {
        _cached_decoder_for_Notifications = $._decodeSetOf<Notifications_Item>(
            () => _decode_Notifications_Item
        );
    }
    return _cached_decoder_for_Notifications(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Notifications */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Notifications */
let _cached_encoder_for_Notifications: $.ASN1Encoder<Notifications> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Notifications */

/* START_OF_SYMBOL_DEFINITION _encode_Notifications */
/**
 * @summary Encodes a(n) Notifications into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Notifications, encoded as an ASN.1 Element.
 */
export function _encode_Notifications(
    value: Notifications,
    elGetter: $.ASN1Encoder<Notifications>
) {
    if (!_cached_encoder_for_Notifications) {
        _cached_encoder_for_Notifications = $._encodeSetOf<Notifications_Item>(
            () => _encode_Notifications_Item,
            $.BER
        );
    }
    return _cached_encoder_for_Notifications(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Notifications */

/* eslint-enable */
