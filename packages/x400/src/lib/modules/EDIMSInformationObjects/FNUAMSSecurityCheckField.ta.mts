/* eslint-disable */
import {
    BOOLEAN,
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

/* START_OF_SYMBOL_DEFINITION FNUAMSSecurityCheckField */
/**
 * @summary FNUAMSSecurityCheckField
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * FNUAMSSecurityCheckField  ::=  BOOLEAN
 * ```
 */
export type FNUAMSSecurityCheckField = BOOLEAN; // BooleanType
/* END_OF_SYMBOL_DEFINITION FNUAMSSecurityCheckField */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_FNUAMSSecurityCheckField */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_FNUAMSSecurityCheckField */

/* START_OF_SYMBOL_DEFINITION _decode_FNUAMSSecurityCheckField */
export const _decode_FNUAMSSecurityCheckField = $._decodeBoolean;
/* END_OF_SYMBOL_DEFINITION _decode_FNUAMSSecurityCheckField */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_FNUAMSSecurityCheckField */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_FNUAMSSecurityCheckField */

/* START_OF_SYMBOL_DEFINITION _encode_FNUAMSSecurityCheckField */
export const _encode_FNUAMSSecurityCheckField = $._encodeBoolean;

/* END_OF_SYMBOL_DEFINITION _encode_FNUAMSSecurityCheckField */

/* eslint-enable */
