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

/* START_OF_SYMBOL_DEFINITION PDUType */
/**
 * @summary PDUType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PDUType  ::=  OBJECT IDENTIFIER
 * ```
 */
export type PDUType = OBJECT_IDENTIFIER; // ObjectIdentifierType
/* END_OF_SYMBOL_DEFINITION PDUType */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_PDUType */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_PDUType */

/* START_OF_SYMBOL_DEFINITION _decode_PDUType */
export const _decode_PDUType = $._decodeObjectIdentifier;
/* END_OF_SYMBOL_DEFINITION _decode_PDUType */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_PDUType */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_PDUType */

/* START_OF_SYMBOL_DEFINITION _encode_PDUType */
export const _encode_PDUType = $._encodeObjectIdentifier;

/* END_OF_SYMBOL_DEFINITION _encode_PDUType */

/* eslint-enable */
