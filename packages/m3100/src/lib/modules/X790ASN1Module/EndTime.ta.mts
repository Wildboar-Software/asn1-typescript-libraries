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
} from 'asn1-ts';
import * as $ from '@wildboar/asn1/functional';


/**
 * @summary EndTime
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * EndTime  ::=  GeneralizedTime
 * ```
 */
export type EndTime = GeneralizedTime; // GeneralizedTime




export const _decode_EndTime = $._decodeGeneralizedTime;




export const _encode_EndTime = $._encodeGeneralizedTime;


/* eslint-enable */
