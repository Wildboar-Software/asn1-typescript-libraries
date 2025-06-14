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
    DistinguishedName,
    _decode_DistinguishedName,
    _encode_DistinguishedName,
} from '@wildboar/x500/src/lib/modules/InformationFramework/DistinguishedName.ta.mjs';
/* START_OF_SYMBOL_DEFINITION RoutingCollectiveName */
/**
 * @summary RoutingCollectiveName
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RoutingCollectiveName  ::=  DistinguishedName
 * ```
 */
export type RoutingCollectiveName = DistinguishedName; // DefinedType
/* END_OF_SYMBOL_DEFINITION RoutingCollectiveName */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_RoutingCollectiveName */
let _cached_decoder_for_RoutingCollectiveName: $.ASN1Decoder<RoutingCollectiveName> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_RoutingCollectiveName */

/* START_OF_SYMBOL_DEFINITION _decode_RoutingCollectiveName */
/**
 * @summary Decodes an ASN.1 element into a(n) RoutingCollectiveName
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {RoutingCollectiveName} The decoded data structure.
 */
export function _decode_RoutingCollectiveName(el: _Element) {
    if (!_cached_decoder_for_RoutingCollectiveName) {
        _cached_decoder_for_RoutingCollectiveName = _decode_DistinguishedName;
    }
    return _cached_decoder_for_RoutingCollectiveName(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_RoutingCollectiveName */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_RoutingCollectiveName */
let _cached_encoder_for_RoutingCollectiveName: $.ASN1Encoder<RoutingCollectiveName> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_RoutingCollectiveName */

/* START_OF_SYMBOL_DEFINITION _encode_RoutingCollectiveName */
/**
 * @summary Encodes a(n) RoutingCollectiveName into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RoutingCollectiveName, encoded as an ASN.1 Element.
 */
export function _encode_RoutingCollectiveName(
    value: RoutingCollectiveName,
    elGetter: $.ASN1Encoder<RoutingCollectiveName>
) {
    if (!_cached_encoder_for_RoutingCollectiveName) {
        _cached_encoder_for_RoutingCollectiveName = _encode_DistinguishedName;
    }
    return _cached_encoder_for_RoutingCollectiveName(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_RoutingCollectiveName */

/* eslint-enable */
