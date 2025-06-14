/* eslint-disable */
import {
    OBJECT_IDENTIFIER,
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



/* START_OF_SYMBOL_DEFINITION SigPolicyId */
/**
 * @summary SigPolicyId
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SigPolicyId  ::=  OBJECT IDENTIFIER
 * ```
 */
export
type SigPolicyId = OBJECT_IDENTIFIER; // ObjectIdentifierType
/* END_OF_SYMBOL_DEFINITION SigPolicyId */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_SigPolicyId */
let _cached_decoder_for_SigPolicyId: $.ASN1Decoder<SigPolicyId> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_SigPolicyId */

/* START_OF_SYMBOL_DEFINITION _decode_SigPolicyId */
/**
 * @summary Decodes an ASN.1 element into a(n) SigPolicyId
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SigPolicyId} The decoded data structure.
 */
export
function _decode_SigPolicyId (el: _Element) {
    if (!_cached_decoder_for_SigPolicyId) { _cached_decoder_for_SigPolicyId = $._decodeObjectIdentifier; }
    return _cached_decoder_for_SigPolicyId(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_SigPolicyId */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_SigPolicyId */
let _cached_encoder_for_SigPolicyId: $.ASN1Encoder<SigPolicyId> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_SigPolicyId */

/* START_OF_SYMBOL_DEFINITION _encode_SigPolicyId */
/**
 * @summary Encodes a(n) SigPolicyId into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SigPolicyId, encoded as an ASN.1 Element.
 */
export
function _encode_SigPolicyId (value: SigPolicyId, elGetter: $.ASN1Encoder<SigPolicyId>) {
    if (!_cached_encoder_for_SigPolicyId) { _cached_encoder_for_SigPolicyId = $._encodeObjectIdentifier; }
    return _cached_encoder_for_SigPolicyId(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_SigPolicyId */

/* eslint-enable */
