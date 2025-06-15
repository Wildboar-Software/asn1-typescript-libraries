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

/* START_OF_SYMBOL_DEFINITION SessionType */
/**
 * @summary SessionType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SessionType  ::=  OBJECT IDENTIFIER
 * ```
 */
export type SessionType = OBJECT_IDENTIFIER; // ObjectIdentifierType
/* END_OF_SYMBOL_DEFINITION SessionType */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_SessionType */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_SessionType */

/* START_OF_SYMBOL_DEFINITION _decode_SessionType */
export const _decode_SessionType = $._decodeObjectIdentifier;
/* END_OF_SYMBOL_DEFINITION _decode_SessionType */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_SessionType */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_SessionType */

/* START_OF_SYMBOL_DEFINITION _encode_SessionType */
export const _encode_SessionType = $._encodeObjectIdentifier;

/* END_OF_SYMBOL_DEFINITION _encode_SessionType */

/* eslint-enable */
