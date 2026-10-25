/* eslint-disable */
import {
    type UTCTime,
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
 * @summary DateAndTimeOfPreparationField
 * @description
 *
 * Defined in ITU-T X.435 (1999) (§8).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DateAndTimeOfPreparationField  ::=  UTCTime
 * ```
 */
export type DateAndTimeOfPreparationField = UTCTime; // UTCTime


export const _decode_DateAndTimeOfPreparationField: $.ASN1Decoder<Date> = $._decodeUTCTime;


export const _encode_DateAndTimeOfPreparationField: $.ASN1Encoder<Date> = $._encodeUTCTime;


/* eslint-enable */
