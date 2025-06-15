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
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/functional.mjs';

/* START_OF_SYMBOL_DEFINITION Document_Type_Name */
/**
 * @summary Document_Type_Name
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Document-Type-Name  ::=  OBJECT IDENTIFIER
 * ```
 */
export type Document_Type_Name = OBJECT_IDENTIFIER; // ObjectIdentifierType
/* END_OF_SYMBOL_DEFINITION Document_Type_Name */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Document_Type_Name */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Document_Type_Name */

/* START_OF_SYMBOL_DEFINITION _decode_Document_Type_Name */
export const _decode_Document_Type_Name = $._decodeObjectIdentifier;
/* END_OF_SYMBOL_DEFINITION _decode_Document_Type_Name */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Document_Type_Name */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Document_Type_Name */

/* START_OF_SYMBOL_DEFINITION _encode_Document_Type_Name */
export const _encode_Document_Type_Name = $._encodeObjectIdentifier;

/* END_OF_SYMBOL_DEFINITION _encode_Document_Type_Name */

/* eslint-enable */
