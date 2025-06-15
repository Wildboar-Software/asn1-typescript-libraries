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

/* START_OF_SYMBOL_DEFINITION RecipientNumberForAdvice */
/**
 * @summary RecipientNumberForAdvice
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RecipientNumberForAdvice  ::=
 *   TeletexString(SIZE (1..ub-recipient-number-for-advice-length))
 * ```
 */
export type RecipientNumberForAdvice = TeletexString; // TeletexString
/* END_OF_SYMBOL_DEFINITION RecipientNumberForAdvice */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_RecipientNumberForAdvice */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_RecipientNumberForAdvice */

/* START_OF_SYMBOL_DEFINITION _decode_RecipientNumberForAdvice */
export const _decode_RecipientNumberForAdvice = $._decodeTeletexString;
/* END_OF_SYMBOL_DEFINITION _decode_RecipientNumberForAdvice */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_RecipientNumberForAdvice */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_RecipientNumberForAdvice */

/* START_OF_SYMBOL_DEFINITION _encode_RecipientNumberForAdvice */
export const _encode_RecipientNumberForAdvice = $._encodeTeletexString;

/* END_OF_SYMBOL_DEFINITION _encode_RecipientNumberForAdvice */

/* eslint-enable */
