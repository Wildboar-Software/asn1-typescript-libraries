/* eslint-disable */
import {
    GeneralizedTime,
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
 * @summary CirculationTime
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CirculationTime  ::=  GeneralizedTime
 * ```
 */
export type CirculationTime = GeneralizedTime; // GeneralizedTime


export const _decode_CirculationTime = $._decodeGeneralizedTime;


export const _encode_CirculationTime = $._encodeGeneralizedTime;


/* eslint-enable */
