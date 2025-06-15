/* eslint-disable */
import {
    ENUMERATED,
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

/* START_OF_SYMBOL_DEFINITION _enum_for_AssignErr */
export enum _enum_for_AssignErr {
    invalidAttributeCertificate = 0,
}
/* END_OF_SYMBOL_DEFINITION _enum_for_AssignErr */

/* START_OF_SYMBOL_DEFINITION AssignErr */
/**
 * @summary AssignErr
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AssignErr  ::=  ENUMERATED {
 *   invalidAttributeCertificate (0),
 *   ... }
 * ```@enum {number}
 */
export type AssignErr = _enum_for_AssignErr | ENUMERATED;
/* END_OF_SYMBOL_DEFINITION AssignErr */

/* START_OF_SYMBOL_DEFINITION AssignErr_invalidAttributeCertificate */
/**
 * @summary AssignErr_invalidAttributeCertificate
 * @constant
 * @type {number}
 */
export const AssignErr_invalidAttributeCertificate: AssignErr = 0; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION AssignErr_invalidAttributeCertificate */

/* START_OF_SYMBOL_DEFINITION invalidAttributeCertificate */
/**
 * @summary invalidAttributeCertificate
 * @constant
 * @type {number}
 */
export const invalidAttributeCertificate: AssignErr = AssignErr_invalidAttributeCertificate; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION invalidAttributeCertificate */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_AssignErr */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_AssignErr */

/* START_OF_SYMBOL_DEFINITION _decode_AssignErr */
export const _decode_AssignErr = $._decodeEnumerated;
/* END_OF_SYMBOL_DEFINITION _decode_AssignErr */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_AssignErr */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_AssignErr */

/* START_OF_SYMBOL_DEFINITION _encode_AssignErr */
export const _encode_AssignErr = $._encodeEnumerated;

/* END_OF_SYMBOL_DEFINITION _encode_AssignErr */

/* eslint-enable */
