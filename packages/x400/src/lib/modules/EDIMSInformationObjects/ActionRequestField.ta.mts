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

/* START_OF_SYMBOL_DEFINITION ActionRequestField */
/**
 * @summary ActionRequestField
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ActionRequestField  ::=  OBJECT IDENTIFIER
 * ```
 */
export type ActionRequestField = OBJECT_IDENTIFIER; // ObjectIdentifierType
/* END_OF_SYMBOL_DEFINITION ActionRequestField */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ActionRequestField */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ActionRequestField */

/* START_OF_SYMBOL_DEFINITION _decode_ActionRequestField */
export const _decode_ActionRequestField = $._decodeObjectIdentifier;
/* END_OF_SYMBOL_DEFINITION _decode_ActionRequestField */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ActionRequestField */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ActionRequestField */

/* START_OF_SYMBOL_DEFINITION _encode_ActionRequestField */
export const _encode_ActionRequestField = $._encodeObjectIdentifier;

/* END_OF_SYMBOL_DEFINITION _encode_ActionRequestField */

/* eslint-enable */
