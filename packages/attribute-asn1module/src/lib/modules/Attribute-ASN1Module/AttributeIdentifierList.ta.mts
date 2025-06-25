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
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { AttributeId, _decode_AttributeId, _encode_AttributeId } from "@wildboar/cmip/src/lib/modules/CMIP-1/AttributeId.ta.mjs";
/**
 * @summary AttributeIdentifierList
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AttributeIdentifierList  ::=  SET OF AttributeId
 * ```
 */
export
type AttributeIdentifierList = AttributeId[]; // SetOfType

let _cached_decoder_for_AttributeIdentifierList: $.ASN1Decoder<AttributeIdentifierList> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AttributeIdentifierList
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AttributeIdentifierList} The decoded data structure.
 */
export
function _decode_AttributeIdentifierList (el: _Element): AttributeIdentifierList {
    if (!_cached_decoder_for_AttributeIdentifierList) { _cached_decoder_for_AttributeIdentifierList = $._decodeSetOf<AttributeId>(() => _decode_AttributeId); }
    return _cached_decoder_for_AttributeIdentifierList(el);
}

let _cached_encoder_for_AttributeIdentifierList: $.ASN1Encoder<AttributeIdentifierList> | null = null;

/**
 * @summary Encodes a(n) AttributeIdentifierList into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AttributeIdentifierList, encoded as an ASN.1 Element.
 */
export
function _encode_AttributeIdentifierList (value: AttributeIdentifierList, elGetter: $.ASN1Encoder<AttributeIdentifierList>): _Element {
    if (!_cached_encoder_for_AttributeIdentifierList) { _cached_encoder_for_AttributeIdentifierList = $._encodeSetOf<AttributeId>(() => _encode_AttributeId, $.BER); }
    return _cached_encoder_for_AttributeIdentifierList(value, elGetter);
}


/* eslint-enable */
