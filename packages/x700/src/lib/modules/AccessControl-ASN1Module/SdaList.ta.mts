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
    SdaList_Item,
    _decode_SdaList_Item,
    _encode_SdaList_Item,
} from '../AccessControl-ASN1Module/SdaList-Item.ta.mjs';
/* START_OF_SYMBOL_DEFINITION SdaList */
/**
 * @summary SdaList
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SdaList  ::=
 *   SET OF
 *     SEQUENCE {securityDomainAuthorityName  SecurityDomainAuthorityName,
 *               operationType                OperationType}
 * ```
 */
export type SdaList = SdaList_Item[]; // SetOfType
/* END_OF_SYMBOL_DEFINITION SdaList */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_SdaList */
let _cached_decoder_for_SdaList: $.ASN1Decoder<SdaList> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_SdaList */

/* START_OF_SYMBOL_DEFINITION _decode_SdaList */
/**
 * @summary Decodes an ASN.1 element into a(n) SdaList
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SdaList} The decoded data structure.
 */
export function _decode_SdaList(el: _Element) {
    if (!_cached_decoder_for_SdaList) {
        _cached_decoder_for_SdaList = $._decodeSetOf<SdaList_Item>(
            () => _decode_SdaList_Item
        );
    }
    return _cached_decoder_for_SdaList(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_SdaList */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_SdaList */
let _cached_encoder_for_SdaList: $.ASN1Encoder<SdaList> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_SdaList */

/* START_OF_SYMBOL_DEFINITION _encode_SdaList */
/**
 * @summary Encodes a(n) SdaList into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SdaList, encoded as an ASN.1 Element.
 */
export function _encode_SdaList(
    value: SdaList,
    elGetter: $.ASN1Encoder<SdaList>
) {
    if (!_cached_encoder_for_SdaList) {
        _cached_encoder_for_SdaList = $._encodeSetOf<SdaList_Item>(
            () => _encode_SdaList_Item,
            $.BER
        );
    }
    return _cached_encoder_for_SdaList(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_SdaList */

/* eslint-enable */
