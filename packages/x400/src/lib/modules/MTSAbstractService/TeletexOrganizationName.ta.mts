/* eslint-disable */
import {
    TeletexString,
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

/* START_OF_SYMBOL_DEFINITION TeletexOrganizationName */
/**
 * @summary TeletexOrganizationName
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TeletexOrganizationName  ::=
 *   TeletexString(SIZE (1..ub-organization-name-length))
 * ```
 */
export type TeletexOrganizationName = TeletexString; // TeletexString
/* END_OF_SYMBOL_DEFINITION TeletexOrganizationName */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_TeletexOrganizationName */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_TeletexOrganizationName */

/* START_OF_SYMBOL_DEFINITION _decode_TeletexOrganizationName */
export const _decode_TeletexOrganizationName = $._decodeTeletexString;
/* END_OF_SYMBOL_DEFINITION _decode_TeletexOrganizationName */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_TeletexOrganizationName */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_TeletexOrganizationName */

/* START_OF_SYMBOL_DEFINITION _encode_TeletexOrganizationName */
export const _encode_TeletexOrganizationName = $._encodeTeletexString;

/* END_OF_SYMBOL_DEFINITION _encode_TeletexOrganizationName */

/* eslint-enable */
