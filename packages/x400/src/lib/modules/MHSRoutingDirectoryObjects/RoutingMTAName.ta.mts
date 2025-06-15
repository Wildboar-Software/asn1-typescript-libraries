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
    RoutingCollectiveName,
    _decode_RoutingCollectiveName,
    _encode_RoutingCollectiveName,
} from '../MHSRoutingDirectoryObjects/RoutingCollectiveName.ta.mjs';
/**
 * @summary RoutingMTAName
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RoutingMTAName  ::=  RoutingCollectiveName
 * ```
 */
export type RoutingMTAName = RoutingCollectiveName; // DefinedType

let _cached_decoder_for_RoutingMTAName: $.ASN1Decoder<RoutingMTAName> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RoutingMTAName
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {RoutingMTAName} The decoded data structure.
 */
export function _decode_RoutingMTAName(el: _Element) {
    if (!_cached_decoder_for_RoutingMTAName) {
        _cached_decoder_for_RoutingMTAName = _decode_RoutingCollectiveName;
    }
    return _cached_decoder_for_RoutingMTAName(el);
}

let _cached_encoder_for_RoutingMTAName: $.ASN1Encoder<RoutingMTAName> | null = null;

/**
 * @summary Encodes a(n) RoutingMTAName into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RoutingMTAName, encoded as an ASN.1 Element.
 */
export function _encode_RoutingMTAName(
    value: RoutingMTAName,
    elGetter: $.ASN1Encoder<RoutingMTAName>
) {
    if (!_cached_encoder_for_RoutingMTAName) {
        _cached_encoder_for_RoutingMTAName = _encode_RoutingCollectiveName;
    }
    return _cached_encoder_for_RoutingMTAName(value, elGetter);
}


/* eslint-enable */
