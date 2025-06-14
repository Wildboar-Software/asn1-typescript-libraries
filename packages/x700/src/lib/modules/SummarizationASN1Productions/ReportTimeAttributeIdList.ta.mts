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
    AttributeId,
    _decode_AttributeId,
    _encode_AttributeId,
} from '@wildboar/cmip/src/lib/modules/CMIP-1/AttributeId.ta.mjs';
/* START_OF_SYMBOL_DEFINITION ReportTimeAttributeIdList */
/**
 * @summary ReportTimeAttributeIdList
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ReportTimeAttributeIdList  ::=  SET OF AttributeId
 * ```
 */
export type ReportTimeAttributeIdList = AttributeId[]; // SetOfType
/* END_OF_SYMBOL_DEFINITION ReportTimeAttributeIdList */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ReportTimeAttributeIdList */
let _cached_decoder_for_ReportTimeAttributeIdList: $.ASN1Decoder<ReportTimeAttributeIdList> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ReportTimeAttributeIdList */

/* START_OF_SYMBOL_DEFINITION _decode_ReportTimeAttributeIdList */
/**
 * @summary Decodes an ASN.1 element into a(n) ReportTimeAttributeIdList
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ReportTimeAttributeIdList} The decoded data structure.
 */
export function _decode_ReportTimeAttributeIdList(el: _Element) {
    if (!_cached_decoder_for_ReportTimeAttributeIdList) {
        _cached_decoder_for_ReportTimeAttributeIdList = $._decodeSetOf<AttributeId>(
            () => _decode_AttributeId
        );
    }
    return _cached_decoder_for_ReportTimeAttributeIdList(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ReportTimeAttributeIdList */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ReportTimeAttributeIdList */
let _cached_encoder_for_ReportTimeAttributeIdList: $.ASN1Encoder<ReportTimeAttributeIdList> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ReportTimeAttributeIdList */

/* START_OF_SYMBOL_DEFINITION _encode_ReportTimeAttributeIdList */
/**
 * @summary Encodes a(n) ReportTimeAttributeIdList into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ReportTimeAttributeIdList, encoded as an ASN.1 Element.
 */
export function _encode_ReportTimeAttributeIdList(
    value: ReportTimeAttributeIdList,
    elGetter: $.ASN1Encoder<ReportTimeAttributeIdList>
) {
    if (!_cached_encoder_for_ReportTimeAttributeIdList) {
        _cached_encoder_for_ReportTimeAttributeIdList = $._encodeSetOf<AttributeId>(
            () => _encode_AttributeId,
            $.BER
        );
    }
    return _cached_encoder_for_ReportTimeAttributeIdList(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ReportTimeAttributeIdList */

/* eslint-enable */
