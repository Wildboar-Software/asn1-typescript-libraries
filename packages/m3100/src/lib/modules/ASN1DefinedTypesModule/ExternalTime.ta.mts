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
import * as $ from 'asn1-ts/dist/functional.mjs';


/**
 * @summary ExternalTime
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ExternalTime  ::=  GeneralizedTime
 * ```
 */
export type ExternalTime = GeneralizedTime; // GeneralizedTime




export const _decode_ExternalTime = $._decodeGeneralizedTime;




export const _encode_ExternalTime = $._encodeGeneralizedTime;


/* eslint-enable */
