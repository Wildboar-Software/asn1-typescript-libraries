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
    CTPList,
    _decode_CTPList,
    _encode_CTPList,
} from '../M3100ASN1TypeModule2/CTPList.ta.mjs';

/**
 * @summary DeassignNetworkCTPFromLogicalLinkEndInformation
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DeassignNetworkCTPFromLogicalLinkEndInformation  ::=  CTPList
 * ```
 */
export type DeassignNetworkCTPFromLogicalLinkEndInformation = CTPList; // DefinedType


let _cached_decoder_for_DeassignNetworkCTPFromLogicalLinkEndInformation: $.ASN1Decoder<DeassignNetworkCTPFromLogicalLinkEndInformation> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) DeassignNetworkCTPFromLogicalLinkEndInformation
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DeassignNetworkCTPFromLogicalLinkEndInformation} The decoded data structure.
 */
export function _decode_DeassignNetworkCTPFromLogicalLinkEndInformation(
    el: _Element
) {
    if (!_cached_decoder_for_DeassignNetworkCTPFromLogicalLinkEndInformation) {
        _cached_decoder_for_DeassignNetworkCTPFromLogicalLinkEndInformation = _decode_CTPList;
    }
    return _cached_decoder_for_DeassignNetworkCTPFromLogicalLinkEndInformation(
        el
    );
}


let _cached_encoder_for_DeassignNetworkCTPFromLogicalLinkEndInformation: $.ASN1Encoder<DeassignNetworkCTPFromLogicalLinkEndInformation> | null = null;


/**
 * @summary Encodes a(n) DeassignNetworkCTPFromLogicalLinkEndInformation into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DeassignNetworkCTPFromLogicalLinkEndInformation, encoded as an ASN.1 Element.
 */
export function _encode_DeassignNetworkCTPFromLogicalLinkEndInformation(
    value: DeassignNetworkCTPFromLogicalLinkEndInformation,
    elGetter: $.ASN1Encoder<DeassignNetworkCTPFromLogicalLinkEndInformation>
) {
    if (!_cached_encoder_for_DeassignNetworkCTPFromLogicalLinkEndInformation) {
        _cached_encoder_for_DeassignNetworkCTPFromLogicalLinkEndInformation = _encode_CTPList;
    }
    return _cached_encoder_for_DeassignNetworkCTPFromLogicalLinkEndInformation(
        value,
        elGetter
    );
}


/* eslint-enable */
