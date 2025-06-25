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
    ProbeTransferEnvelope,
    _decode_ProbeTransferEnvelope,
    _encode_ProbeTransferEnvelope,
} from '../MTAAbstractService/ProbeTransferEnvelope.ta.mjs';
/**
 * @summary Probe
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Probe  ::=  ProbeTransferEnvelope
 * ```
 */
export type Probe = ProbeTransferEnvelope; // DefinedType

let _cached_decoder_for_Probe: $.ASN1Decoder<Probe> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Probe
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Probe} The decoded data structure.
 */
export function _decode_Probe(el: _Element): Probe {
    if (!_cached_decoder_for_Probe) {
        _cached_decoder_for_Probe = _decode_ProbeTransferEnvelope;
    }
    return _cached_decoder_for_Probe(el);
}

let _cached_encoder_for_Probe: $.ASN1Encoder<Probe> | null = null;

/**
 * @summary Encodes a(n) Probe into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Probe, encoded as an ASN.1 Element.
 */
export function _encode_Probe(value: Probe, elGetter: $.ASN1Encoder<Probe>): _Element {
    if (!_cached_encoder_for_Probe) {
        _cached_encoder_for_Probe = _encode_ProbeTransferEnvelope;
    }
    return _cached_encoder_for_Probe(value, elGetter);
}


/* eslint-enable */
