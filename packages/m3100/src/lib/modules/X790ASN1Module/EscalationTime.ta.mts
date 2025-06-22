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
 * @summary EscalationTime
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * EscalationTime  ::=  GeneralizedTime
 * ```
 */
export type EscalationTime = GeneralizedTime; // GeneralizedTime




export const _decode_EscalationTime = $._decodeGeneralizedTime;




export const _encode_EscalationTime = $._encodeGeneralizedTime;


/* eslint-enable */
