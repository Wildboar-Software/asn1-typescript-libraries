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
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';


export enum _enum_for_ReturnMode {
    continuous = 0,
    batch = 1,
}


/**
 * @summary ReturnMode
 * @description
 *
 * How the patient-local facility returns sensing results.
 * ITU-T Rec. X.1080.1 (05/2018)
 * [§11.1.1](https://www.itu.int/rec/T-REC-X.1080.1-201805-I).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ReturnMode  ::=  ENUMERATED {
 *   continuous,
 *   batch,
 *   ... }
 * ```
 *
 * @enum {number}
 */
export type ReturnMode = _enum_for_ReturnMode | ENUMERATED;


/**
 * @summary ReturnMode_continuous
 * @description
 *
 * Return results as they are generated. ITU-T Rec. X.1080.1
 * (05/2018) §11.1.1 c).
 *
 * @constant
 * @type {number}
 */
export const ReturnMode_continuous: ReturnMode = 0; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary continuous
 * @description
 *
 * Return results as they are generated. ITU-T Rec. X.1080.1
 * (05/2018) §11.1.1 c).
 *
 * @constant
 * @type {number}
 */
export const continuous: ReturnMode = ReturnMode_continuous; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary ReturnMode_batch
 * @description
 *
 * Collect results and return them at the end of sensing or when
 * requested. ITU-T Rec. X.1080.1 (05/2018) §11.1.1 c).
 *
 * @constant
 * @type {number}
 */
export const ReturnMode_batch: ReturnMode = 1; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary batch
 * @description
 *
 * Collect results and return them at the end of sensing or when
 * requested. ITU-T Rec. X.1080.1 (05/2018) §11.1.1 c).
 *
 * @constant
 * @type {number}
 */
export const batch: ReturnMode = ReturnMode_batch; /* SHORT_NAMED_ENUMERATED_VALUE */




export const _decode_ReturnMode = $._decodeEnumerated;




export const _encode_ReturnMode = $._encodeEnumerated;


/* eslint-enable */
