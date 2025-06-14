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



/* START_OF_SYMBOL_DEFINITION CredentialType */
/**
 * @summary CredentialType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CredentialType  ::=  OBJECT IDENTIFIER (
 *     tcg-kp-PlatformAttributeCertificate
 *     | tcg-kp-DeltaPlatformAttributeCertificate )
 * ```
 */
export
type CredentialType = OBJECT_IDENTIFIER; // ObjectIdentifierType
/* END_OF_SYMBOL_DEFINITION CredentialType */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_CredentialType */
let _cached_decoder_for_CredentialType: $.ASN1Decoder<CredentialType> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_CredentialType */

/* START_OF_SYMBOL_DEFINITION _decode_CredentialType */
/**
 * @summary Decodes an ASN.1 element into a(n) CredentialType
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CredentialType} The decoded data structure.
 */
export
function _decode_CredentialType (el: _Element) {
    if (!_cached_decoder_for_CredentialType) { _cached_decoder_for_CredentialType = $._decodeObjectIdentifier; }
    return _cached_decoder_for_CredentialType(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_CredentialType */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_CredentialType */
let _cached_encoder_for_CredentialType: $.ASN1Encoder<CredentialType> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_CredentialType */

/* START_OF_SYMBOL_DEFINITION _encode_CredentialType */
/**
 * @summary Encodes a(n) CredentialType into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CredentialType, encoded as an ASN.1 Element.
 */
export
function _encode_CredentialType (value: CredentialType, elGetter: $.ASN1Encoder<CredentialType>) {
    if (!_cached_encoder_for_CredentialType) { _cached_encoder_for_CredentialType = $._encodeObjectIdentifier; }
    return _cached_encoder_for_CredentialType(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_CredentialType */

/* eslint-enable */
