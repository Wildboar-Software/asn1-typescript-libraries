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
    ORAddressAndOptionalDirectoryName,
    _decode_ORAddressAndOptionalDirectoryName,
    _encode_ORAddressAndOptionalDirectoryName,
} from '../MTSAbstractService/ORAddressAndOptionalDirectoryName.ta.mjs';
/**
 * @summary DeliveredOriginatorName
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DeliveredOriginatorName  ::=  ORAddressAndOptionalDirectoryName
 * ```
 */
export type DeliveredOriginatorName = ORAddressAndOptionalDirectoryName; // DefinedType

let _cached_decoder_for_DeliveredOriginatorName: $.ASN1Decoder<DeliveredOriginatorName> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DeliveredOriginatorName
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DeliveredOriginatorName} The decoded data structure.
 */
export function _decode_DeliveredOriginatorName(el: _Element) {
    if (!_cached_decoder_for_DeliveredOriginatorName) {
        _cached_decoder_for_DeliveredOriginatorName = _decode_ORAddressAndOptionalDirectoryName;
    }
    return _cached_decoder_for_DeliveredOriginatorName(el);
}

let _cached_encoder_for_DeliveredOriginatorName: $.ASN1Encoder<DeliveredOriginatorName> | null = null;

/**
 * @summary Encodes a(n) DeliveredOriginatorName into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DeliveredOriginatorName, encoded as an ASN.1 Element.
 */
export function _encode_DeliveredOriginatorName(
    value: DeliveredOriginatorName,
    elGetter: $.ASN1Encoder<DeliveredOriginatorName>
) {
    if (!_cached_encoder_for_DeliveredOriginatorName) {
        _cached_encoder_for_DeliveredOriginatorName = _encode_ORAddressAndOptionalDirectoryName;
    }
    return _cached_encoder_for_DeliveredOriginatorName(value, elGetter);
}


/* eslint-enable */
