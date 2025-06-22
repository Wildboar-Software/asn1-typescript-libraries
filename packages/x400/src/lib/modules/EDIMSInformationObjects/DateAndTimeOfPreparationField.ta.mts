/* eslint-disable */
import {
    UTCTime,
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
 * @summary DateAndTimeOfPreparationField
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DateAndTimeOfPreparationField  ::=  UTCTime
 * ```
 */
export type DateAndTimeOfPreparationField = UTCTime; // UTCTime


export const _decode_DateAndTimeOfPreparationField = $._decodeUTCTime;


export const _encode_DateAndTimeOfPreparationField = $._encodeUTCTime;


/* eslint-enable */
