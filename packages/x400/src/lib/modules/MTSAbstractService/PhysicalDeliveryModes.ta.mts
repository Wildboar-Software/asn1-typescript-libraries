/* eslint-disable */
import {
    BIT_STRING,
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

/* START_OF_SYMBOL_DEFINITION PhysicalDeliveryModes */
/**
 * @summary PhysicalDeliveryModes
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PhysicalDeliveryModes  ::=  BIT STRING {
 *   ordinary-mail(0), special-delivery(1), express-mail(2),
 *   counter-collection(3), counter-collection-with-telephone-advice(4),
 *   counter-collection-with-telex-advice(5),
 *   counter-collection-with-teletex-advice(6), bureau-fax-delivery(7)
 *
 * -- bits 0 to 6 are mutually exclusive
 * -- bit 7 can be set independently of any of bits 0 to 6 --}
 * (SIZE (0..ub-bit-options))
 * ```
 */
export type PhysicalDeliveryModes = BIT_STRING;
/* END_OF_SYMBOL_DEFINITION PhysicalDeliveryModes */

/* START_OF_SYMBOL_DEFINITION PhysicalDeliveryModes_ordinary_mail */
/**
 * @summary PhysicalDeliveryModes_ordinary_mail
 * @constant
 */
export const PhysicalDeliveryModes_ordinary_mail: number = 0; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION PhysicalDeliveryModes_ordinary_mail */

/* START_OF_SYMBOL_DEFINITION ordinary_mail */
/**
 * @summary ordinary_mail
 * @constant
 */
export const ordinary_mail: number = PhysicalDeliveryModes_ordinary_mail; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION ordinary_mail */

/* START_OF_SYMBOL_DEFINITION PhysicalDeliveryModes_special_delivery */
/**
 * @summary PhysicalDeliveryModes_special_delivery
 * @constant
 */
export const PhysicalDeliveryModes_special_delivery: number = 1; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION PhysicalDeliveryModes_special_delivery */

/* START_OF_SYMBOL_DEFINITION special_delivery */
/**
 * @summary special_delivery
 * @constant
 */
export const special_delivery: number = PhysicalDeliveryModes_special_delivery; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION special_delivery */

/* START_OF_SYMBOL_DEFINITION PhysicalDeliveryModes_express_mail */
/**
 * @summary PhysicalDeliveryModes_express_mail
 * @constant
 */
export const PhysicalDeliveryModes_express_mail: number = 2; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION PhysicalDeliveryModes_express_mail */

/* START_OF_SYMBOL_DEFINITION express_mail */
/**
 * @summary express_mail
 * @constant
 */
export const express_mail: number = PhysicalDeliveryModes_express_mail; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION express_mail */

/* START_OF_SYMBOL_DEFINITION PhysicalDeliveryModes_counter_collection */
/**
 * @summary PhysicalDeliveryModes_counter_collection
 * @constant
 */
export const PhysicalDeliveryModes_counter_collection: number = 3; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION PhysicalDeliveryModes_counter_collection */

/* START_OF_SYMBOL_DEFINITION counter_collection */
/**
 * @summary counter_collection
 * @constant
 */
export const counter_collection: number = PhysicalDeliveryModes_counter_collection; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION counter_collection */

/* START_OF_SYMBOL_DEFINITION PhysicalDeliveryModes_counter_collection_with_telephone_advice */
/**
 * @summary PhysicalDeliveryModes_counter_collection_with_telephone_advice
 * @constant
 */
export const PhysicalDeliveryModes_counter_collection_with_telephone_advice: number = 4; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION PhysicalDeliveryModes_counter_collection_with_telephone_advice */

/* START_OF_SYMBOL_DEFINITION counter_collection_with_telephone_advice */
/**
 * @summary counter_collection_with_telephone_advice
 * @constant
 */
export const counter_collection_with_telephone_advice: number = PhysicalDeliveryModes_counter_collection_with_telephone_advice; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION counter_collection_with_telephone_advice */

/* START_OF_SYMBOL_DEFINITION PhysicalDeliveryModes_counter_collection_with_telex_advice */
/**
 * @summary PhysicalDeliveryModes_counter_collection_with_telex_advice
 * @constant
 */
export const PhysicalDeliveryModes_counter_collection_with_telex_advice: number = 5; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION PhysicalDeliveryModes_counter_collection_with_telex_advice */

/* START_OF_SYMBOL_DEFINITION counter_collection_with_telex_advice */
/**
 * @summary counter_collection_with_telex_advice
 * @constant
 */
export const counter_collection_with_telex_advice: number = PhysicalDeliveryModes_counter_collection_with_telex_advice; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION counter_collection_with_telex_advice */

/* START_OF_SYMBOL_DEFINITION PhysicalDeliveryModes_counter_collection_with_teletex_advice */
/**
 * @summary PhysicalDeliveryModes_counter_collection_with_teletex_advice
 * @constant
 */
export const PhysicalDeliveryModes_counter_collection_with_teletex_advice: number = 6; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION PhysicalDeliveryModes_counter_collection_with_teletex_advice */

/* START_OF_SYMBOL_DEFINITION counter_collection_with_teletex_advice */
/**
 * @summary counter_collection_with_teletex_advice
 * @constant
 */
export const counter_collection_with_teletex_advice: number = PhysicalDeliveryModes_counter_collection_with_teletex_advice; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION counter_collection_with_teletex_advice */

/* START_OF_SYMBOL_DEFINITION PhysicalDeliveryModes_bureau_fax_delivery */
/**
 * @summary PhysicalDeliveryModes_bureau_fax_delivery
 * @constant
 */
export const PhysicalDeliveryModes_bureau_fax_delivery: number = 7; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION PhysicalDeliveryModes_bureau_fax_delivery */

/* START_OF_SYMBOL_DEFINITION bureau_fax_delivery */
/**
 * @summary bureau_fax_delivery
 * @constant
 */
export const bureau_fax_delivery: number = PhysicalDeliveryModes_bureau_fax_delivery; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION bureau_fax_delivery */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_PhysicalDeliveryModes */
let _cached_decoder_for_PhysicalDeliveryModes: $.ASN1Decoder<PhysicalDeliveryModes> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_PhysicalDeliveryModes */

/* START_OF_SYMBOL_DEFINITION _decode_PhysicalDeliveryModes */
/**
 * @summary Decodes an ASN.1 element into a(n) PhysicalDeliveryModes
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {PhysicalDeliveryModes} The decoded data structure.
 */
export function _decode_PhysicalDeliveryModes(el: _Element) {
    if (!_cached_decoder_for_PhysicalDeliveryModes) {
        _cached_decoder_for_PhysicalDeliveryModes = $._decodeBitString;
    }
    return _cached_decoder_for_PhysicalDeliveryModes(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_PhysicalDeliveryModes */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_PhysicalDeliveryModes */
let _cached_encoder_for_PhysicalDeliveryModes: $.ASN1Encoder<PhysicalDeliveryModes> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_PhysicalDeliveryModes */

/* START_OF_SYMBOL_DEFINITION _encode_PhysicalDeliveryModes */
/**
 * @summary Encodes a(n) PhysicalDeliveryModes into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PhysicalDeliveryModes, encoded as an ASN.1 Element.
 */
export function _encode_PhysicalDeliveryModes(
    value: PhysicalDeliveryModes,
    elGetter: $.ASN1Encoder<PhysicalDeliveryModes>
) {
    if (!_cached_encoder_for_PhysicalDeliveryModes) {
        _cached_encoder_for_PhysicalDeliveryModes = $._encodeBitString;
    }
    return _cached_encoder_for_PhysicalDeliveryModes(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_PhysicalDeliveryModes */

/* eslint-enable */
