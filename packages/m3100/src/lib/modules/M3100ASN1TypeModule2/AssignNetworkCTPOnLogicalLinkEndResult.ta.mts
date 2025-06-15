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
    CTPList,
    _decode_CTPList,
    _encode_CTPList,
} from '../M3100ASN1TypeModule2/CTPList.ta.mjs';

/**
 * @summary AssignNetworkCTPOnLogicalLinkEndResult
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AssignNetworkCTPOnLogicalLinkEndResult  ::=  CTPList
 * ```
 */
export type AssignNetworkCTPOnLogicalLinkEndResult = CTPList; // DefinedType


let _cached_decoder_for_AssignNetworkCTPOnLogicalLinkEndResult: $.ASN1Decoder<AssignNetworkCTPOnLogicalLinkEndResult> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) AssignNetworkCTPOnLogicalLinkEndResult
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AssignNetworkCTPOnLogicalLinkEndResult} The decoded data structure.
 */
export function _decode_AssignNetworkCTPOnLogicalLinkEndResult(el: _Element) {
    if (!_cached_decoder_for_AssignNetworkCTPOnLogicalLinkEndResult) {
        _cached_decoder_for_AssignNetworkCTPOnLogicalLinkEndResult = _decode_CTPList;
    }
    return _cached_decoder_for_AssignNetworkCTPOnLogicalLinkEndResult(el);
}


let _cached_encoder_for_AssignNetworkCTPOnLogicalLinkEndResult: $.ASN1Encoder<AssignNetworkCTPOnLogicalLinkEndResult> | null = null;


/**
 * @summary Encodes a(n) AssignNetworkCTPOnLogicalLinkEndResult into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AssignNetworkCTPOnLogicalLinkEndResult, encoded as an ASN.1 Element.
 */
export function _encode_AssignNetworkCTPOnLogicalLinkEndResult(
    value: AssignNetworkCTPOnLogicalLinkEndResult,
    elGetter: $.ASN1Encoder<AssignNetworkCTPOnLogicalLinkEndResult>
) {
    if (!_cached_encoder_for_AssignNetworkCTPOnLogicalLinkEndResult) {
        _cached_encoder_for_AssignNetworkCTPOnLogicalLinkEndResult = _encode_CTPList;
    }
    return _cached_encoder_for_AssignNetworkCTPOnLogicalLinkEndResult(
        value,
        elGetter
    );
}


/* eslint-enable */
