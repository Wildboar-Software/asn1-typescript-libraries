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
    LinkConnectionList,
    _decode_LinkConnectionList,
    _encode_LinkConnectionList,
} from '../M3100ASN1TypeModule2/LinkConnectionList.ta.mjs';

/**
 * @summary AssignLinkConnectionOnLogicalLinkResult
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AssignLinkConnectionOnLogicalLinkResult  ::=  LinkConnectionList
 * ```
 */
export type AssignLinkConnectionOnLogicalLinkResult = LinkConnectionList; // DefinedType


let _cached_decoder_for_AssignLinkConnectionOnLogicalLinkResult: $.ASN1Decoder<AssignLinkConnectionOnLogicalLinkResult> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) AssignLinkConnectionOnLogicalLinkResult
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AssignLinkConnectionOnLogicalLinkResult} The decoded data structure.
 */
export function _decode_AssignLinkConnectionOnLogicalLinkResult(el: _Element) {
    if (!_cached_decoder_for_AssignLinkConnectionOnLogicalLinkResult) {
        _cached_decoder_for_AssignLinkConnectionOnLogicalLinkResult = _decode_LinkConnectionList;
    }
    return _cached_decoder_for_AssignLinkConnectionOnLogicalLinkResult(el);
}


let _cached_encoder_for_AssignLinkConnectionOnLogicalLinkResult: $.ASN1Encoder<AssignLinkConnectionOnLogicalLinkResult> | null = null;


/**
 * @summary Encodes a(n) AssignLinkConnectionOnLogicalLinkResult into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AssignLinkConnectionOnLogicalLinkResult, encoded as an ASN.1 Element.
 */
export function _encode_AssignLinkConnectionOnLogicalLinkResult(
    value: AssignLinkConnectionOnLogicalLinkResult,
    elGetter: $.ASN1Encoder<AssignLinkConnectionOnLogicalLinkResult>
) {
    if (!_cached_encoder_for_AssignLinkConnectionOnLogicalLinkResult) {
        _cached_encoder_for_AssignLinkConnectionOnLogicalLinkResult = _encode_LinkConnectionList;
    }
    return _cached_encoder_for_AssignLinkConnectionOnLogicalLinkResult(
        value,
        elGetter
    );
}


/* eslint-enable */
