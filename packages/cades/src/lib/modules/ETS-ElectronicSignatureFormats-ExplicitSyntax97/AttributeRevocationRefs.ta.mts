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
import { CrlOcspRef, _decode_CrlOcspRef, _encode_CrlOcspRef } from "../ETS-ElectronicSignatureFormats-ExplicitSyntax97/CrlOcspRef.ta.mjs";
/**
 * @summary AttributeRevocationRefs
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AttributeRevocationRefs  ::=  SEQUENCE OF CrlOcspRef
 * ```
 */
export
type AttributeRevocationRefs = CrlOcspRef[]; // SequenceOfType

let _cached_decoder_for_AttributeRevocationRefs: $.ASN1Decoder<AttributeRevocationRefs> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AttributeRevocationRefs
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AttributeRevocationRefs} The decoded data structure.
 */
export
function _decode_AttributeRevocationRefs (el: _Element) {
    if (!_cached_decoder_for_AttributeRevocationRefs) { _cached_decoder_for_AttributeRevocationRefs = $._decodeSequenceOf<CrlOcspRef>(() => _decode_CrlOcspRef); }
    return _cached_decoder_for_AttributeRevocationRefs(el);
}

let _cached_encoder_for_AttributeRevocationRefs: $.ASN1Encoder<AttributeRevocationRefs> | null = null;

/**
 * @summary Encodes a(n) AttributeRevocationRefs into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AttributeRevocationRefs, encoded as an ASN.1 Element.
 */
export
function _encode_AttributeRevocationRefs (value: AttributeRevocationRefs, elGetter: $.ASN1Encoder<AttributeRevocationRefs>) {
    if (!_cached_encoder_for_AttributeRevocationRefs) { _cached_encoder_for_AttributeRevocationRefs = $._encodeSequenceOf<CrlOcspRef>(() => _encode_CrlOcspRef, $.BER); }
    return _cached_encoder_for_AttributeRevocationRefs(value, elGetter);
}


/* eslint-enable */
