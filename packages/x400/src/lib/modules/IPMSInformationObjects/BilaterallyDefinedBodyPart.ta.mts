/* eslint-disable */
import {
    OCTET_STRING,
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

/* START_OF_SYMBOL_DEFINITION BilaterallyDefinedBodyPart */
/**
 * @summary BilaterallyDefinedBodyPart
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * BilaterallyDefinedBodyPart  ::=  OCTET STRING
 * ```
 */
export type BilaterallyDefinedBodyPart = OCTET_STRING; // OctetStringType
/* END_OF_SYMBOL_DEFINITION BilaterallyDefinedBodyPart */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_BilaterallyDefinedBodyPart */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_BilaterallyDefinedBodyPart */

/* START_OF_SYMBOL_DEFINITION _decode_BilaterallyDefinedBodyPart */
export const _decode_BilaterallyDefinedBodyPart = $._decodeOctetString;
/* END_OF_SYMBOL_DEFINITION _decode_BilaterallyDefinedBodyPart */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_BilaterallyDefinedBodyPart */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_BilaterallyDefinedBodyPart */

/* START_OF_SYMBOL_DEFINITION _encode_BilaterallyDefinedBodyPart */
export const _encode_BilaterallyDefinedBodyPart = $._encodeOctetString;

/* END_OF_SYMBOL_DEFINITION _encode_BilaterallyDefinedBodyPart */

/* eslint-enable */
