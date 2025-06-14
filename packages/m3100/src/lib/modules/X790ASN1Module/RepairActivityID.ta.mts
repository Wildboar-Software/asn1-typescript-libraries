/* eslint-disable */
import {
    INTEGER,
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

/* START_OF_SYMBOL_DEFINITION RepairActivityID */
/**
 * @summary RepairActivityID
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RepairActivityID  ::=  INTEGER
 * ```
 */
export type RepairActivityID = INTEGER;
/* END_OF_SYMBOL_DEFINITION RepairActivityID */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_RepairActivityID */
let _cached_decoder_for_RepairActivityID: $.ASN1Decoder<RepairActivityID> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_RepairActivityID */

/* START_OF_SYMBOL_DEFINITION _decode_RepairActivityID */
/**
 * @summary Decodes an ASN.1 element into a(n) RepairActivityID
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {RepairActivityID} The decoded data structure.
 */
export function _decode_RepairActivityID(el: _Element) {
    if (!_cached_decoder_for_RepairActivityID) {
        _cached_decoder_for_RepairActivityID = $._decodeInteger;
    }
    return _cached_decoder_for_RepairActivityID(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_RepairActivityID */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_RepairActivityID */
let _cached_encoder_for_RepairActivityID: $.ASN1Encoder<RepairActivityID> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_RepairActivityID */

/* START_OF_SYMBOL_DEFINITION _encode_RepairActivityID */
/**
 * @summary Encodes a(n) RepairActivityID into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RepairActivityID, encoded as an ASN.1 Element.
 */
export function _encode_RepairActivityID(
    value: RepairActivityID,
    elGetter: $.ASN1Encoder<RepairActivityID>
) {
    if (!_cached_encoder_for_RepairActivityID) {
        _cached_encoder_for_RepairActivityID = $._encodeInteger;
    }
    return _cached_encoder_for_RepairActivityID(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_RepairActivityID */

/* eslint-enable */
