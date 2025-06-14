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

/* START_OF_SYMBOL_DEFINITION ServiceAccessCharge */
/**
 * @summary ServiceAccessCharge
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ServiceAccessCharge  ::=  INTEGER
 * ```
 */
export type ServiceAccessCharge = INTEGER;
/* END_OF_SYMBOL_DEFINITION ServiceAccessCharge */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ServiceAccessCharge */
let _cached_decoder_for_ServiceAccessCharge: $.ASN1Decoder<ServiceAccessCharge> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ServiceAccessCharge */

/* START_OF_SYMBOL_DEFINITION _decode_ServiceAccessCharge */
/**
 * @summary Decodes an ASN.1 element into a(n) ServiceAccessCharge
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ServiceAccessCharge} The decoded data structure.
 */
export function _decode_ServiceAccessCharge(el: _Element) {
    if (!_cached_decoder_for_ServiceAccessCharge) {
        _cached_decoder_for_ServiceAccessCharge = $._decodeInteger;
    }
    return _cached_decoder_for_ServiceAccessCharge(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ServiceAccessCharge */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ServiceAccessCharge */
let _cached_encoder_for_ServiceAccessCharge: $.ASN1Encoder<ServiceAccessCharge> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ServiceAccessCharge */

/* START_OF_SYMBOL_DEFINITION _encode_ServiceAccessCharge */
/**
 * @summary Encodes a(n) ServiceAccessCharge into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ServiceAccessCharge, encoded as an ASN.1 Element.
 */
export function _encode_ServiceAccessCharge(
    value: ServiceAccessCharge,
    elGetter: $.ASN1Encoder<ServiceAccessCharge>
) {
    if (!_cached_encoder_for_ServiceAccessCharge) {
        _cached_encoder_for_ServiceAccessCharge = $._encodeInteger;
    }
    return _cached_encoder_for_ServiceAccessCharge(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ServiceAccessCharge */

/* eslint-enable */
