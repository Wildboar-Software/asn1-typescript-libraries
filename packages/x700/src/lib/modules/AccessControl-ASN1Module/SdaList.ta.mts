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
    SdaList_Item,
    _decode_SdaList_Item,
    _encode_SdaList_Item,
} from '../AccessControl-ASN1Module/SdaList-Item.ta.mjs';
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

let _cached_decoder_for_SdaList: $.ASN1Decoder<SdaList> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SdaList
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SdaList} The decoded data structure.
 */
export function _decode_SdaList(el: _Element): SdaList {
    if (!_cached_decoder_for_SdaList) {
        _cached_decoder_for_SdaList = $._decodeSetOf<SdaList_Item>(
            () => _decode_SdaList_Item
        );
    }
    return _cached_decoder_for_SdaList(el);
}

let _cached_encoder_for_SdaList: $.ASN1Encoder<SdaList> | null = null;

/**
 * @summary Encodes a(n) SdaList into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SdaList, encoded as an ASN.1 Element.
 */
export function _encode_SdaList(
    value: SdaList,
    elGetter: $.ASN1Encoder<SdaList>
): _Element {
    if (!_cached_encoder_for_SdaList) {
        _cached_encoder_for_SdaList = $._encodeSetOf<SdaList_Item>(
            () => _encode_SdaList_Item,
            $.BER
        );
    }
    return _cached_encoder_for_SdaList(value, elGetter);
}


/* eslint-enable */
