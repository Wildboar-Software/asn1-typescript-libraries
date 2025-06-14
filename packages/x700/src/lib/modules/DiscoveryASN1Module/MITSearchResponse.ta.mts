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
    RootedNameTree,
    _decode_RootedNameTree,
    _encode_RootedNameTree,
} from '../DiscoveryASN1Module/RootedNameTree.ta.mjs';
/* START_OF_SYMBOL_DEFINITION MITSearchResponse */
/**
 * @summary MITSearchResponse
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MITSearchResponse  ::=  SET OF RootedNameTree
 * ```
 */
export type MITSearchResponse = RootedNameTree[]; // SetOfType
/* END_OF_SYMBOL_DEFINITION MITSearchResponse */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_MITSearchResponse */
let _cached_decoder_for_MITSearchResponse: $.ASN1Decoder<MITSearchResponse> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_MITSearchResponse */

/* START_OF_SYMBOL_DEFINITION _decode_MITSearchResponse */
/**
 * @summary Decodes an ASN.1 element into a(n) MITSearchResponse
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {MITSearchResponse} The decoded data structure.
 */
export function _decode_MITSearchResponse(el: _Element) {
    if (!_cached_decoder_for_MITSearchResponse) {
        _cached_decoder_for_MITSearchResponse = $._decodeSetOf<RootedNameTree>(
            () => _decode_RootedNameTree
        );
    }
    return _cached_decoder_for_MITSearchResponse(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_MITSearchResponse */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_MITSearchResponse */
let _cached_encoder_for_MITSearchResponse: $.ASN1Encoder<MITSearchResponse> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_MITSearchResponse */

/* START_OF_SYMBOL_DEFINITION _encode_MITSearchResponse */
/**
 * @summary Encodes a(n) MITSearchResponse into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MITSearchResponse, encoded as an ASN.1 Element.
 */
export function _encode_MITSearchResponse(
    value: MITSearchResponse,
    elGetter: $.ASN1Encoder<MITSearchResponse>
) {
    if (!_cached_encoder_for_MITSearchResponse) {
        _cached_encoder_for_MITSearchResponse = $._encodeSetOf<RootedNameTree>(
            () => _encode_RootedNameTree,
            $.BER
        );
    }
    return _cached_encoder_for_MITSearchResponse(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_MITSearchResponse */

/* eslint-enable */
