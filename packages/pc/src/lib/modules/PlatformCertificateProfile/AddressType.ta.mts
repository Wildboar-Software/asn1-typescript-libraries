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



/* START_OF_SYMBOL_DEFINITION AddressType */
/**
 * @summary AddressType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AddressType  ::=  OBJECT IDENTIFIER (
 *     tcg-address-ethernetmac
 *     | tcg-address-wlanmac
 *     | tcg-address-bluetoothmac )
 * ```
 */
export
type AddressType = OBJECT_IDENTIFIER; // ObjectIdentifierType
/* END_OF_SYMBOL_DEFINITION AddressType */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_AddressType */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_AddressType */

/* START_OF_SYMBOL_DEFINITION _decode_AddressType */
export const _decode_AddressType = $._decodeObjectIdentifier;
/* END_OF_SYMBOL_DEFINITION _decode_AddressType */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_AddressType */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_AddressType */

/* START_OF_SYMBOL_DEFINITION _encode_AddressType */
export const _encode_AddressType = $._encodeObjectIdentifier;

/* END_OF_SYMBOL_DEFINITION _encode_AddressType */

/* eslint-enable */
