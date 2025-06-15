/* eslint-disable */
import {
    INTEGER,
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

/* START_OF_SYMBOL_DEFINITION RTTPapdu */
/**
 * @summary RTTPapdu
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RTTPapdu  ::=  -- priority-- INTEGER
 * ```
 */
export type RTTPapdu = INTEGER;
/* END_OF_SYMBOL_DEFINITION RTTPapdu */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_RTTPapdu */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_RTTPapdu */

/* START_OF_SYMBOL_DEFINITION _decode_RTTPapdu */
export const _decode_RTTPapdu = $._decodeInteger;
/* END_OF_SYMBOL_DEFINITION _decode_RTTPapdu */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_RTTPapdu */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_RTTPapdu */

/* START_OF_SYMBOL_DEFINITION _encode_RTTPapdu */
export const _encode_RTTPapdu = $._encodeInteger;

/* END_OF_SYMBOL_DEFINITION _encode_RTTPapdu */

/* eslint-enable */
