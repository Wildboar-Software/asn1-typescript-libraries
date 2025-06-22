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
import * as $ from '@wildboar/asn1/functional';
import {
    DownstreamConnectivityPointer,
    _decode_DownstreamConnectivityPointer,
    _encode_DownstreamConnectivityPointer,
} from '../ASN1DefinedTypesModule/DownstreamConnectivityPointer.ta.mjs';

/**
 * @summary CTPDownstreamPointer
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CTPDownstreamPointer  ::=
 *   DownstreamConnectivityPointer
 *     (WITH COMPONENTS {
 *        ...,
 *        concatenated           ABSENT,
 *        broadcastConcatenated  ABSENT
 *
 *      -- other choices are present
 *      })
 * ```
 */
export type CTPDownstreamPointer = DownstreamConnectivityPointer; // DefinedType


let _cached_decoder_for_CTPDownstreamPointer: $.ASN1Decoder<CTPDownstreamPointer> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) CTPDownstreamPointer
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CTPDownstreamPointer} The decoded data structure.
 */
export function _decode_CTPDownstreamPointer(el: _Element) {
    if (!_cached_decoder_for_CTPDownstreamPointer) {
        _cached_decoder_for_CTPDownstreamPointer = _decode_DownstreamConnectivityPointer;
    }
    return _cached_decoder_for_CTPDownstreamPointer(el);
}


let _cached_encoder_for_CTPDownstreamPointer: $.ASN1Encoder<CTPDownstreamPointer> | null = null;


/**
 * @summary Encodes a(n) CTPDownstreamPointer into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CTPDownstreamPointer, encoded as an ASN.1 Element.
 */
export function _encode_CTPDownstreamPointer(
    value: CTPDownstreamPointer,
    elGetter: $.ASN1Encoder<CTPDownstreamPointer>
) {
    if (!_cached_encoder_for_CTPDownstreamPointer) {
        _cached_encoder_for_CTPDownstreamPointer = _encode_DownstreamConnectivityPointer;
    }
    return _cached_encoder_for_CTPDownstreamPointer(value, elGetter);
}


/* eslint-enable */
