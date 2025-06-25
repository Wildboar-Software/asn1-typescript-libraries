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
import { Attribute, _decode_Attribute, _encode_Attribute } from "@wildboar/cmip/src/lib/modules/CMIP-1/Attribute.ta.mjs";
/**
 * @summary AttributeList
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AttributeList  ::=  SET OF Attribute
 * ```
 */
export
type AttributeList = Attribute[]; // SetOfType

let _cached_decoder_for_AttributeList: $.ASN1Decoder<AttributeList> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AttributeList
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AttributeList} The decoded data structure.
 */
export
function _decode_AttributeList (el: _Element): AttributeList {
    if (!_cached_decoder_for_AttributeList) { _cached_decoder_for_AttributeList = $._decodeSetOf<Attribute>(() => _decode_Attribute); }
    return _cached_decoder_for_AttributeList(el);
}

let _cached_encoder_for_AttributeList: $.ASN1Encoder<AttributeList> | null = null;

/**
 * @summary Encodes a(n) AttributeList into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AttributeList, encoded as an ASN.1 Element.
 */
export
function _encode_AttributeList (value: AttributeList, elGetter: $.ASN1Encoder<AttributeList>): _Element {
    if (!_cached_encoder_for_AttributeList) { _cached_encoder_for_AttributeList = $._encodeSetOf<Attribute>(() => _encode_Attribute, $.BER); }
    return _cached_encoder_for_AttributeList(value, elGetter);
}


/* eslint-enable */
