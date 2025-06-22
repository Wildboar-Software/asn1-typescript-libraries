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
 * @summary CmipPduSendingSupport
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CmipPduSendingSupport  ::=  CmipPduType
 * ```
 */
export type CmipPduSendingSupport = CmipPduType; // DefinedType

let _cached_decoder_for_CmipPduSendingSupport: $.ASN1Decoder<CmipPduSendingSupport> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CmipPduSendingSupport
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CmipPduSendingSupport} The decoded data structure.
 */
export function _decode_CmipPduSendingSupport(el: _Element) {
    if (!_cached_decoder_for_CmipPduSendingSupport) {
        _cached_decoder_for_CmipPduSendingSupport = _decode_CmipPduType;
    }
    return _cached_decoder_for_CmipPduSendingSupport(el);
}

let _cached_encoder_for_CmipPduSendingSupport: $.ASN1Encoder<CmipPduSendingSupport> | null = null;

/**
 * @summary Encodes a(n) CmipPduSendingSupport into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CmipPduSendingSupport, encoded as an ASN.1 Element.
 */
export function _encode_CmipPduSendingSupport(
    value: CmipPduSendingSupport,
    elGetter: $.ASN1Encoder<CmipPduSendingSupport>
) {
    if (!_cached_encoder_for_CmipPduSendingSupport) {
        _cached_encoder_for_CmipPduSendingSupport = _encode_CmipPduType;
    }
    return _cached_encoder_for_CmipPduSendingSupport(value, elGetter);
}


/* eslint-enable */
