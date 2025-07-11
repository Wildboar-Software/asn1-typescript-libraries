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
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';

/**
 * @summary DeliveryComponentRateToPrmd
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DeliveryComponentRateToPrmd  ::=  REAL
 * ```
 */
export type DeliveryComponentRateToPrmd = REAL; // RealType


export const _decode_DeliveryComponentRateToPrmd = $._decodeReal;


export const _encode_DeliveryComponentRateToPrmd = $._encodeReal;


/* eslint-enable */
