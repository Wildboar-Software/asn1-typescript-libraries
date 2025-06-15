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

/* START_OF_SYMBOL_DEFINITION SubjectField */
/**
 * @summary SubjectField
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SubjectField  ::=  TeletexString(SIZE (0..ub-subject-field))
 * ```
 */
export type SubjectField = TeletexString; // TeletexString
/* END_OF_SYMBOL_DEFINITION SubjectField */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_SubjectField */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_SubjectField */

/* START_OF_SYMBOL_DEFINITION _decode_SubjectField */
export const _decode_SubjectField = $._decodeTeletexString;
/* END_OF_SYMBOL_DEFINITION _decode_SubjectField */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_SubjectField */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_SubjectField */

/* START_OF_SYMBOL_DEFINITION _encode_SubjectField */
export const _encode_SubjectField = $._encodeTeletexString;

/* END_OF_SYMBOL_DEFINITION _encode_SubjectField */

/* eslint-enable */
