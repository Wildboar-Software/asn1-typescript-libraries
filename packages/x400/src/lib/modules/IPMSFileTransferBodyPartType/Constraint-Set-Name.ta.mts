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

/* START_OF_SYMBOL_DEFINITION Constraint_Set_Name */
/**
 * @summary Constraint_Set_Name
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Constraint-Set-Name  ::=  OBJECT IDENTIFIER
 * ```
 */
export type Constraint_Set_Name = OBJECT_IDENTIFIER; // ObjectIdentifierType
/* END_OF_SYMBOL_DEFINITION Constraint_Set_Name */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Constraint_Set_Name */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Constraint_Set_Name */

/* START_OF_SYMBOL_DEFINITION _decode_Constraint_Set_Name */
export const _decode_Constraint_Set_Name = $._decodeObjectIdentifier;
/* END_OF_SYMBOL_DEFINITION _decode_Constraint_Set_Name */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Constraint_Set_Name */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Constraint_Set_Name */

/* START_OF_SYMBOL_DEFINITION _encode_Constraint_Set_Name */
export const _encode_Constraint_Set_Name = $._encodeObjectIdentifier;

/* END_OF_SYMBOL_DEFINITION _encode_Constraint_Set_Name */

/* eslint-enable */
