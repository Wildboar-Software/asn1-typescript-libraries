/* eslint-disable */
import {
    type REAL,
    type ASN1Element as _Element,
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
 * @summary DeliveryComponentRateToUa
 * @description
 *
 * Defined in ITU-T X.411 (1999) (accounting objects).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DeliveryComponentRateToUa  ::=  REAL
 * ```
 */
export type DeliveryComponentRateToUa = REAL; // RealType


export const _decode_DeliveryComponentRateToUa: $.ASN1Decoder<number> = $._decodeReal;


export const _encode_DeliveryComponentRateToUa: $.ASN1Encoder<number> = $._encodeReal;


/* eslint-enable */
