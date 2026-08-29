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
    AccessControlList_Item,
    _decode_AccessControlList_Item,
    _encode_AccessControlList_Item,
} from '../AccessControl-ASN1Module/AccessControlList-Item.ta.mjs';
/**
 * @summary AccessControlList
 * @description
 *
 * Syntax of the `accessControlList` attribute on ACL
 * initiators. Each member is either a named initiator or a
 * proxy (anonymous / non-DN identity). Used in ACL schemes
 * to grant or deny access. Matches EQUALITY,
 * SET-COMPARISON, SET-INTERSECTION. ITU-T Rec. X.741
 * (04/95)
 * [§A.5.1](https://www.itu.int/rec/T-REC-X.741-199504-I),
 * §8.1.8.1.1.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AccessControlList  ::=
 *   SET OF CHOICE {proxy          [0]  Proxy,
 *                  initiatorName  [1]  InitiatorName}
 * ```
 */
export type AccessControlList = AccessControlList_Item[]; // SetOfType

let _cached_decoder_for_AccessControlList: $.ASN1Decoder<AccessControlList> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AccessControlList
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AccessControlList} The decoded data structure.
 */
export function _decode_AccessControlList(el: _Element): AccessControlList {
    if (!_cached_decoder_for_AccessControlList) {
        _cached_decoder_for_AccessControlList = $._decodeSetOf<AccessControlList_Item>(
            () => _decode_AccessControlList_Item
        );
    }
    return _cached_decoder_for_AccessControlList(el);
}

let _cached_encoder_for_AccessControlList: $.ASN1Encoder<AccessControlList> | null = null;

/**
 * @summary Encodes a(n) AccessControlList into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AccessControlList, encoded as an ASN.1 Element.
 */
export function _encode_AccessControlList(
    value: AccessControlList,
    elGetter: $.ASN1Encoder<AccessControlList>
): _Element {
    if (!_cached_encoder_for_AccessControlList) {
        _cached_encoder_for_AccessControlList = $._encodeSetOf<AccessControlList_Item>(
            () => _encode_AccessControlList_Item,
            $.BER
        );
    }
    return _cached_encoder_for_AccessControlList(value, elGetter);
}


/* eslint-enable */
