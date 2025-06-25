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
    CmipPduType,
    _decode_CmipPduType,
    _encode_CmipPduType,
} from '../CMISE-ROSE-SMASE-ASN1Module/CmipPduType.ta.mjs';
/**
 * @summary CmipPduReceivingSupport
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CmipPduReceivingSupport  ::=  CmipPduType
 * ```
 */
export type CmipPduReceivingSupport = CmipPduType; // DefinedType

let _cached_decoder_for_CmipPduReceivingSupport: $.ASN1Decoder<CmipPduReceivingSupport> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CmipPduReceivingSupport
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CmipPduReceivingSupport} The decoded data structure.
 */
export function _decode_CmipPduReceivingSupport(el: _Element): CmipPduReceivingSupport {
    if (!_cached_decoder_for_CmipPduReceivingSupport) {
        _cached_decoder_for_CmipPduReceivingSupport = _decode_CmipPduType;
    }
    return _cached_decoder_for_CmipPduReceivingSupport(el);
}

let _cached_encoder_for_CmipPduReceivingSupport: $.ASN1Encoder<CmipPduReceivingSupport> | null = null;

/**
 * @summary Encodes a(n) CmipPduReceivingSupport into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CmipPduReceivingSupport, encoded as an ASN.1 Element.
 */
export function _encode_CmipPduReceivingSupport(
    value: CmipPduReceivingSupport,
    elGetter: $.ASN1Encoder<CmipPduReceivingSupport>
): _Element {
    if (!_cached_encoder_for_CmipPduReceivingSupport) {
        _cached_encoder_for_CmipPduReceivingSupport = _encode_CmipPduType;
    }
    return _cached_encoder_for_CmipPduReceivingSupport(value, elGetter);
}


/* eslint-enable */
