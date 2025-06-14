/* eslint-disable */
import {
    BOOLEAN,
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

/* START_OF_SYMBOL_DEFINITION ServiceFlag */
/**
 * @summary ServiceFlag
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ServiceFlag  ::=  BOOLEAN
 * ```
 */
export type ServiceFlag = BOOLEAN; // BooleanType
/* END_OF_SYMBOL_DEFINITION ServiceFlag */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ServiceFlag */
let _cached_decoder_for_ServiceFlag: $.ASN1Decoder<ServiceFlag> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ServiceFlag */

/* START_OF_SYMBOL_DEFINITION _decode_ServiceFlag */
/**
 * @summary Decodes an ASN.1 element into a(n) ServiceFlag
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ServiceFlag} The decoded data structure.
 */
export function _decode_ServiceFlag(el: _Element) {
    if (!_cached_decoder_for_ServiceFlag) {
        _cached_decoder_for_ServiceFlag = $._decodeBoolean;
    }
    return _cached_decoder_for_ServiceFlag(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ServiceFlag */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ServiceFlag */
let _cached_encoder_for_ServiceFlag: $.ASN1Encoder<ServiceFlag> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ServiceFlag */

/* START_OF_SYMBOL_DEFINITION _encode_ServiceFlag */
/**
 * @summary Encodes a(n) ServiceFlag into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ServiceFlag, encoded as an ASN.1 Element.
 */
export function _encode_ServiceFlag(
    value: ServiceFlag,
    elGetter: $.ASN1Encoder<ServiceFlag>
) {
    if (!_cached_encoder_for_ServiceFlag) {
        _cached_encoder_for_ServiceFlag = $._encodeBoolean;
    }
    return _cached_encoder_for_ServiceFlag(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ServiceFlag */

/* eslint-enable */
