/* eslint-disable */
import {
    REAL,
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
 * @summary ProcessingComponentRate
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ProcessingComponentRate  ::=  REAL
 * ```
 */
export type ProcessingComponentRate = REAL; // RealType


export const _decode_ProcessingComponentRate = $._decodeReal;


export const _encode_ProcessingComponentRate = $._encodeReal;


/* eslint-enable */
