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
 * @summary BeginTime
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * BeginTime  ::=  GeneralizedTime
 * ```
 */
export type BeginTime = GeneralizedTime; // GeneralizedTime




export const _decode_BeginTime = $._decodeGeneralizedTime;




export const _encode_BeginTime = $._encodeGeneralizedTime;


/* eslint-enable */
