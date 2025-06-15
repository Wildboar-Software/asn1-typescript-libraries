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
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_CredentialType */

/* START_OF_SYMBOL_DEFINITION _decode_CredentialType */
export const _decode_CredentialType = $._decodeObjectIdentifier;
/* END_OF_SYMBOL_DEFINITION _decode_CredentialType */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_CredentialType */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_CredentialType */

/* START_OF_SYMBOL_DEFINITION _encode_CredentialType */
export const _encode_CredentialType = $._encodeObjectIdentifier;

/* END_OF_SYMBOL_DEFINITION _encode_CredentialType */

/* eslint-enable */
