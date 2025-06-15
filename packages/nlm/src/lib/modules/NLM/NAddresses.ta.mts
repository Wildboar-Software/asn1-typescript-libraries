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
    NAddress,
    _decode_NAddress,
    _encode_NAddress,
} from '../NLM/NAddress.ta.mjs';

/**
 * @summary NAddresses
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * NAddresses  ::=  SET OF NAddress
 * ```
 */
export type NAddresses = NAddress[]; // SetOfType


let _cached_decoder_for_NAddresses: $.ASN1Decoder<NAddresses> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) NAddresses
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {NAddresses} The decoded data structure.
 */
export function _decode_NAddresses(el: _Element) {
    if (!_cached_decoder_for_NAddresses) {
        _cached_decoder_for_NAddresses = $._decodeSetOf<NAddress>(
            () => _decode_NAddress
        );
    }
    return _cached_decoder_for_NAddresses(el);
}


let _cached_encoder_for_NAddresses: $.ASN1Encoder<NAddresses> | null = null;


/**
 * @summary Encodes a(n) NAddresses into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NAddresses, encoded as an ASN.1 Element.
 */
export function _encode_NAddresses(
    value: NAddresses,
    elGetter: $.ASN1Encoder<NAddresses>
) {
    if (!_cached_encoder_for_NAddresses) {
        _cached_encoder_for_NAddresses = $._encodeSetOf<NAddress>(
            () => _encode_NAddress,
            $.BER
        );
    }
    return _cached_encoder_for_NAddresses(value, elGetter);
}


/* eslint-enable */
