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
    IntermediateResponse,
    _enum_for_IntermediateResponse,
    _decode_IntermediateResponse,
    _encode_IntermediateResponse,
} from '../TestCategories-ASN1Module/IntermediateResponse.ta.mjs';
import {
    ResourceSelfTestResults_nonIntermediate,
    _decode_ResourceSelfTestResults_nonIntermediate,
    _encode_ResourceSelfTestResults_nonIntermediate,
} from '../TestCategories-ASN1Module/ResourceSelfTestResults-nonIntermediate.ta.mjs';
/**
 * @summary ResourceSelfTestResults
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ResourceSelfTestResults  ::=  CHOICE {
 *   intermediateResponse  IntermediateResponse,
 *   nonIntermediate
 *     SEQUENCE {phases         SET OF INTEGER,
 *               iteration      [0]  INTEGER,
 *               timeoutPeriod  [1]  TimeoutPeriod,
 *               finalResponse  PrintableString OPTIONAL}
 * }
 * ```
 */
export type ResourceSelfTestResults =
    | { intermediateResponse: IntermediateResponse } /* CHOICE_ALT_ROOT */
    | {
          nonIntermediate: ResourceSelfTestResults_nonIntermediate;
      } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_ResourceSelfTestResults: $.ASN1Decoder<ResourceSelfTestResults> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ResourceSelfTestResults
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ResourceSelfTestResults} The decoded data structure.
 */
export function _decode_ResourceSelfTestResults(el: _Element) {
    if (!_cached_decoder_for_ResourceSelfTestResults) {
        _cached_decoder_for_ResourceSelfTestResults = $._decode_inextensible_choice<ResourceSelfTestResults>(
            {
                'UNIVERSAL 10': [
                    'intermediateResponse',
                    _decode_IntermediateResponse,
                ],
                'UNIVERSAL 16': [
                    'nonIntermediate',
                    _decode_ResourceSelfTestResults_nonIntermediate,
                ],
            }
        );
    }
    return _cached_decoder_for_ResourceSelfTestResults(el);
}

let _cached_encoder_for_ResourceSelfTestResults: $.ASN1Encoder<ResourceSelfTestResults> | null = null;

/**
 * @summary Encodes a(n) ResourceSelfTestResults into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ResourceSelfTestResults, encoded as an ASN.1 Element.
 */
export function _encode_ResourceSelfTestResults(
    value: ResourceSelfTestResults,
    elGetter: $.ASN1Encoder<ResourceSelfTestResults>
) {
    if (!_cached_encoder_for_ResourceSelfTestResults) {
        _cached_encoder_for_ResourceSelfTestResults = $._encode_choice<ResourceSelfTestResults>(
            {
                intermediateResponse: _encode_IntermediateResponse,
                nonIntermediate: _encode_ResourceSelfTestResults_nonIntermediate,
            },
            $.BER
        );
    }
    return _cached_encoder_for_ResourceSelfTestResults(value, elGetter);
}


/* eslint-enable */
