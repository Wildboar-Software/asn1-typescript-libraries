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
    ProtocolVersion,
    _decode_ProtocolVersion,
    _encode_ProtocolVersion,
} from '@wildboar/cmip/src/lib/modules/CMIP-A-ASSOCIATE-Information/ProtocolVersion.ta.mjs';
/**
 * @summary ProtocolVersionSupported
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ProtocolVersionSupported  ::=  ProtocolVersion
 * ```
 */
export type ProtocolVersionSupported = ProtocolVersion; // DefinedType

let _cached_decoder_for_ProtocolVersionSupported: $.ASN1Decoder<ProtocolVersionSupported> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ProtocolVersionSupported
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ProtocolVersionSupported} The decoded data structure.
 */
export function _decode_ProtocolVersionSupported(el: _Element): ProtocolVersionSupported {
    if (!_cached_decoder_for_ProtocolVersionSupported) {
        _cached_decoder_for_ProtocolVersionSupported = _decode_ProtocolVersion;
    }
    return _cached_decoder_for_ProtocolVersionSupported(el);
}

let _cached_encoder_for_ProtocolVersionSupported: $.ASN1Encoder<ProtocolVersionSupported> | null = null;

/**
 * @summary Encodes a(n) ProtocolVersionSupported into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ProtocolVersionSupported, encoded as an ASN.1 Element.
 */
export function _encode_ProtocolVersionSupported(
    value: ProtocolVersionSupported,
    elGetter: $.ASN1Encoder<ProtocolVersionSupported>
): _Element {
    if (!_cached_encoder_for_ProtocolVersionSupported) {
        _cached_encoder_for_ProtocolVersionSupported = _encode_ProtocolVersion;
    }
    return _cached_encoder_for_ProtocolVersionSupported(value, elGetter);
}


/* eslint-enable */
