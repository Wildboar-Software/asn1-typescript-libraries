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
} from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";
import { AttributeId, _decode_AttributeId, _encode_AttributeId } from "@wildboar/cmip/src/lib/modules/CMIP-1/AttributeId.ta.mjs";
/* START_OF_SYMBOL_DEFINITION AttributeIdentifierList */
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
/* END_OF_SYMBOL_DEFINITION AttributeIdentifierList */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_AttributeIdentifierList */
let _cached_decoder_for_AttributeIdentifierList: $.ASN1Decoder<AttributeIdentifierList> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_AttributeIdentifierList */

/* START_OF_SYMBOL_DEFINITION _decode_AttributeIdentifierList */
/**
 * @summary Decodes an ASN.1 element into a(n) AttributeIdentifierList
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AttributeIdentifierList} The decoded data structure.
 */
export
function _decode_AttributeIdentifierList (el: _Element) {
    if (!_cached_decoder_for_AttributeIdentifierList) { _cached_decoder_for_AttributeIdentifierList = $._decodeSetOf<AttributeId>(() => _decode_AttributeId); }
    return _cached_decoder_for_AttributeIdentifierList(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_AttributeIdentifierList */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_AttributeIdentifierList */
let _cached_encoder_for_AttributeIdentifierList: $.ASN1Encoder<AttributeIdentifierList> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_AttributeIdentifierList */

/* START_OF_SYMBOL_DEFINITION _encode_AttributeIdentifierList */
/**
 * @summary Encodes a(n) AttributeIdentifierList into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AttributeIdentifierList, encoded as an ASN.1 Element.
 */
export
function _encode_AttributeIdentifierList (value: AttributeIdentifierList, elGetter: $.ASN1Encoder<AttributeIdentifierList>) {
    if (!_cached_encoder_for_AttributeIdentifierList) { _cached_encoder_for_AttributeIdentifierList = $._encodeSetOf<AttributeId>(() => _encode_AttributeId, $.BER); }
    return _cached_encoder_for_AttributeIdentifierList(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_AttributeIdentifierList */

/* eslint-enable */
