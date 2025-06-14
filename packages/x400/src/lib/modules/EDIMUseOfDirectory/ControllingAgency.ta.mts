/* eslint-disable */
import {
    TeletexString,
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

/* START_OF_SYMBOL_DEFINITION ControllingAgency */
/**
 * @summary ControllingAgency
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ControllingAgency  ::=  TeletexString(SIZE (1..ub-edi-controlling-agency))
 * ```
 */
export type ControllingAgency = TeletexString; // TeletexString
/* END_OF_SYMBOL_DEFINITION ControllingAgency */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ControllingAgency */
let _cached_decoder_for_ControllingAgency: $.ASN1Decoder<ControllingAgency> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ControllingAgency */

/* START_OF_SYMBOL_DEFINITION _decode_ControllingAgency */
/**
 * @summary Decodes an ASN.1 element into a(n) ControllingAgency
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ControllingAgency} The decoded data structure.
 */
export function _decode_ControllingAgency(el: _Element) {
    if (!_cached_decoder_for_ControllingAgency) {
        _cached_decoder_for_ControllingAgency = $._decodeTeletexString;
    }
    return _cached_decoder_for_ControllingAgency(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ControllingAgency */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ControllingAgency */
let _cached_encoder_for_ControllingAgency: $.ASN1Encoder<ControllingAgency> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ControllingAgency */

/* START_OF_SYMBOL_DEFINITION _encode_ControllingAgency */
/**
 * @summary Encodes a(n) ControllingAgency into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ControllingAgency, encoded as an ASN.1 Element.
 */
export function _encode_ControllingAgency(
    value: ControllingAgency,
    elGetter: $.ASN1Encoder<ControllingAgency>
) {
    if (!_cached_encoder_for_ControllingAgency) {
        _cached_encoder_for_ControllingAgency = $._encodeTeletexString;
    }
    return _cached_encoder_for_ControllingAgency(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ControllingAgency */

/* eslint-enable */
