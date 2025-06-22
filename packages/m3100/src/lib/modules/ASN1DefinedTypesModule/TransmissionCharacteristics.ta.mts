/* eslint-disable */
import {
    BIT_STRING,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from 'asn1-ts';
import * as $ from '@wildboar/asn1/functional';


/**
 * @summary TransmissionCharacteristics
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TransmissionCharacteristics  ::=  BIT STRING {
 *   satellite(0), dCME(1), echoControl(2)}
 * ```
 */
export type TransmissionCharacteristics = BIT_STRING;


/**
 * @summary TransmissionCharacteristics_satellite
 * @constant
 */
export const TransmissionCharacteristics_satellite: number = 0; /* LONG_NAMED_BIT */


/**
 * @summary satellite
 * @constant
 */
export const satellite: number = TransmissionCharacteristics_satellite; /* SHORT_NAMED_BIT */


/**
 * @summary TransmissionCharacteristics_dCME
 * @constant
 */
export const TransmissionCharacteristics_dCME: number = 1; /* LONG_NAMED_BIT */


/**
 * @summary dCME
 * @constant
 */
export const dCME: number = TransmissionCharacteristics_dCME; /* SHORT_NAMED_BIT */


/**
 * @summary TransmissionCharacteristics_echoControl
 * @constant
 */
export const TransmissionCharacteristics_echoControl: number = 2; /* LONG_NAMED_BIT */


/**
 * @summary echoControl
 * @constant
 */
export const echoControl: number = TransmissionCharacteristics_echoControl; /* SHORT_NAMED_BIT */




export const _decode_TransmissionCharacteristics = $._decodeBitString;




export const _encode_TransmissionCharacteristics = $._encodeBitString;


/* eslint-enable */
