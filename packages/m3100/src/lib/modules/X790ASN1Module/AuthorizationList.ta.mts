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
    AuthorizationList_Item,
    _decode_AuthorizationList_Item,
    _encode_AuthorizationList_Item,
} from '../X790ASN1Module/AuthorizationList-Item.ta.mjs';

/**
 * @summary AuthorizationList
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AuthorizationList  ::=
 *   SET OF
 *     SEQUENCE {state       RequestState,
 *               type        ActivityType,
 *               authTime    AuthorizationTime OPTIONAL,
 *               authPerson  PersonReach OPTIONAL,
 *               ...}
 * ```
 */
export type AuthorizationList = AuthorizationList_Item[]; // SetOfType


let _cached_decoder_for_AuthorizationList: $.ASN1Decoder<AuthorizationList> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) AuthorizationList
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AuthorizationList} The decoded data structure.
 */
export function _decode_AuthorizationList(el: _Element) {
    if (!_cached_decoder_for_AuthorizationList) {
        _cached_decoder_for_AuthorizationList = $._decodeSetOf<AuthorizationList_Item>(
            () => _decode_AuthorizationList_Item
        );
    }
    return _cached_decoder_for_AuthorizationList(el);
}


let _cached_encoder_for_AuthorizationList: $.ASN1Encoder<AuthorizationList> | null = null;


/**
 * @summary Encodes a(n) AuthorizationList into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AuthorizationList, encoded as an ASN.1 Element.
 */
export function _encode_AuthorizationList(
    value: AuthorizationList,
    elGetter: $.ASN1Encoder<AuthorizationList>
) {
    if (!_cached_encoder_for_AuthorizationList) {
        _cached_encoder_for_AuthorizationList = $._encodeSetOf<AuthorizationList_Item>(
            () => _encode_AuthorizationList_Item,
            $.BER
        );
    }
    return _cached_encoder_for_AuthorizationList(value, elGetter);
}


/* eslint-enable */
