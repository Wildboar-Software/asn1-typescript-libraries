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
/* START_OF_SYMBOL_DEFINITION DeassignLinkConnectionFromLogicalLinkInformation */
/**
 * @summary DeassignLinkConnectionFromLogicalLinkInformation
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DeassignLinkConnectionFromLogicalLinkInformation  ::=  LinkConnectionList
 * ```
 */
export type DeassignLinkConnectionFromLogicalLinkInformation = LinkConnectionList; // DefinedType
/* END_OF_SYMBOL_DEFINITION DeassignLinkConnectionFromLogicalLinkInformation */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_DeassignLinkConnectionFromLogicalLinkInformation */
let _cached_decoder_for_DeassignLinkConnectionFromLogicalLinkInformation: $.ASN1Decoder<DeassignLinkConnectionFromLogicalLinkInformation> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_DeassignLinkConnectionFromLogicalLinkInformation */

/* START_OF_SYMBOL_DEFINITION _decode_DeassignLinkConnectionFromLogicalLinkInformation */
/**
 * @summary Decodes an ASN.1 element into a(n) DeassignLinkConnectionFromLogicalLinkInformation
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DeassignLinkConnectionFromLogicalLinkInformation} The decoded data structure.
 */
export function _decode_DeassignLinkConnectionFromLogicalLinkInformation(
    el: _Element
) {
    if (!_cached_decoder_for_DeassignLinkConnectionFromLogicalLinkInformation) {
        _cached_decoder_for_DeassignLinkConnectionFromLogicalLinkInformation = _decode_LinkConnectionList;
    }
    return _cached_decoder_for_DeassignLinkConnectionFromLogicalLinkInformation(
        el
    );
}
/* END_OF_SYMBOL_DEFINITION _decode_DeassignLinkConnectionFromLogicalLinkInformation */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_DeassignLinkConnectionFromLogicalLinkInformation */
let _cached_encoder_for_DeassignLinkConnectionFromLogicalLinkInformation: $.ASN1Encoder<DeassignLinkConnectionFromLogicalLinkInformation> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_DeassignLinkConnectionFromLogicalLinkInformation */

/* START_OF_SYMBOL_DEFINITION _encode_DeassignLinkConnectionFromLogicalLinkInformation */
/**
 * @summary Encodes a(n) DeassignLinkConnectionFromLogicalLinkInformation into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DeassignLinkConnectionFromLogicalLinkInformation, encoded as an ASN.1 Element.
 */
export function _encode_DeassignLinkConnectionFromLogicalLinkInformation(
    value: DeassignLinkConnectionFromLogicalLinkInformation,
    elGetter: $.ASN1Encoder<DeassignLinkConnectionFromLogicalLinkInformation>
) {
    if (!_cached_encoder_for_DeassignLinkConnectionFromLogicalLinkInformation) {
        _cached_encoder_for_DeassignLinkConnectionFromLogicalLinkInformation = _encode_LinkConnectionList;
    }
    return _cached_encoder_for_DeassignLinkConnectionFromLogicalLinkInformation(
        value,
        elGetter
    );
}

/* END_OF_SYMBOL_DEFINITION _encode_DeassignLinkConnectionFromLogicalLinkInformation */

/* eslint-enable */
