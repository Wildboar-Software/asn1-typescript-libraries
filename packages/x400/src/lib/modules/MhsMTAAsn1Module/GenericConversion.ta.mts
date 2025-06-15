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

/* START_OF_SYMBOL_DEFINITION GenericConversion */
/**
 * @summary GenericConversion
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * GenericConversion  ::=  OBJECT IDENTIFIER
 * ```
 */
export type GenericConversion = OBJECT_IDENTIFIER; // ObjectIdentifierType
/* END_OF_SYMBOL_DEFINITION GenericConversion */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_GenericConversion */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_GenericConversion */

/* START_OF_SYMBOL_DEFINITION _decode_GenericConversion */
export const _decode_GenericConversion = $._decodeObjectIdentifier;
/* END_OF_SYMBOL_DEFINITION _decode_GenericConversion */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_GenericConversion */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_GenericConversion */

/* START_OF_SYMBOL_DEFINITION _encode_GenericConversion */
export const _encode_GenericConversion = $._encodeObjectIdentifier;

/* END_OF_SYMBOL_DEFINITION _encode_GenericConversion */

/* eslint-enable */
