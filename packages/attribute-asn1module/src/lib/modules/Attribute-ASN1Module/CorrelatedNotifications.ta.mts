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
} from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";
import { CorrelatedNotifications_Item, _decode_CorrelatedNotifications_Item, _encode_CorrelatedNotifications_Item } from "../Attribute-ASN1Module/CorrelatedNotifications-Item.ta.mjs";
/* START_OF_SYMBOL_DEFINITION CorrelatedNotifications */
/**
 * @summary CorrelatedNotifications
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CorrelatedNotifications  ::= 
 *   SET OF
 *     SEQUENCE {correlatedNotifications  SET OF NotificationIdentifier,
 *               sourceObjectInst         ObjectInstance OPTIONAL}
 * ```
 */
export
type CorrelatedNotifications = CorrelatedNotifications_Item[]; // SetOfType
/* END_OF_SYMBOL_DEFINITION CorrelatedNotifications */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_CorrelatedNotifications */
let _cached_decoder_for_CorrelatedNotifications: $.ASN1Decoder<CorrelatedNotifications> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_CorrelatedNotifications */

/* START_OF_SYMBOL_DEFINITION _decode_CorrelatedNotifications */
/**
 * @summary Decodes an ASN.1 element into a(n) CorrelatedNotifications
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CorrelatedNotifications} The decoded data structure.
 */
export
function _decode_CorrelatedNotifications (el: _Element) {
    if (!_cached_decoder_for_CorrelatedNotifications) { _cached_decoder_for_CorrelatedNotifications = $._decodeSetOf<CorrelatedNotifications_Item>(() => _decode_CorrelatedNotifications_Item); }
    return _cached_decoder_for_CorrelatedNotifications(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_CorrelatedNotifications */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_CorrelatedNotifications */
let _cached_encoder_for_CorrelatedNotifications: $.ASN1Encoder<CorrelatedNotifications> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_CorrelatedNotifications */

/* START_OF_SYMBOL_DEFINITION _encode_CorrelatedNotifications */
/**
 * @summary Encodes a(n) CorrelatedNotifications into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CorrelatedNotifications, encoded as an ASN.1 Element.
 */
export
function _encode_CorrelatedNotifications (value: CorrelatedNotifications, elGetter: $.ASN1Encoder<CorrelatedNotifications>) {
    if (!_cached_encoder_for_CorrelatedNotifications) { _cached_encoder_for_CorrelatedNotifications = $._encodeSetOf<CorrelatedNotifications_Item>(() => _encode_CorrelatedNotifications_Item, $.BER); }
    return _cached_encoder_for_CorrelatedNotifications(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_CorrelatedNotifications */

/* eslint-enable */
