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

/* START_OF_SYMBOL_DEFINITION ControllingAgency */
/**
 * @summary ControllingAgency
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ControllingAgency  ::=  TeletexString(SIZE (1..ub-edi-controlling-agency))
 * ```
 */
export type ControllingAgency = TeletexString; // TeletexString
/* END_OF_SYMBOL_DEFINITION ControllingAgency */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ControllingAgency */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ControllingAgency */

/* START_OF_SYMBOL_DEFINITION _decode_ControllingAgency */
export const _decode_ControllingAgency = $._decodeTeletexString;
/* END_OF_SYMBOL_DEFINITION _decode_ControllingAgency */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ControllingAgency */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ControllingAgency */

/* START_OF_SYMBOL_DEFINITION _encode_ControllingAgency */
export const _encode_ControllingAgency = $._encodeTeletexString;

/* END_OF_SYMBOL_DEFINITION _encode_ControllingAgency */

/* eslint-enable */
