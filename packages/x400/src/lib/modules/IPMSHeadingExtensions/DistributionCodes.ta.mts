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
    DistributionCode,
    _decode_DistributionCode,
    _encode_DistributionCode,
} from '../IPMSHeadingExtensions/DistributionCode.ta.mjs';
/**
 * @summary DistributionCodes
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DistributionCodes  ::=
 *   SEQUENCE (SIZE (1..ub-distribution-codes)) OF DistributionCode
 * ```
 */
export type DistributionCodes = DistributionCode[]; // SequenceOfType

let _cached_decoder_for_DistributionCodes: $.ASN1Decoder<DistributionCodes> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DistributionCodes
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DistributionCodes} The decoded data structure.
 */
export function _decode_DistributionCodes(el: _Element) {
    if (!_cached_decoder_for_DistributionCodes) {
        _cached_decoder_for_DistributionCodes = $._decodeSequenceOf<DistributionCode>(
            () => _decode_DistributionCode
        );
    }
    return _cached_decoder_for_DistributionCodes(el);
}

let _cached_encoder_for_DistributionCodes: $.ASN1Encoder<DistributionCodes> | null = null;

/**
 * @summary Encodes a(n) DistributionCodes into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DistributionCodes, encoded as an ASN.1 Element.
 */
export function _encode_DistributionCodes(
    value: DistributionCodes,
    elGetter: $.ASN1Encoder<DistributionCodes>
) {
    if (!_cached_encoder_for_DistributionCodes) {
        _cached_encoder_for_DistributionCodes = $._encodeSequenceOf<DistributionCode>(
            () => _encode_DistributionCode,
            $.BER
        );
    }
    return _cached_encoder_for_DistributionCodes(value, elGetter);
}


/* eslint-enable */
