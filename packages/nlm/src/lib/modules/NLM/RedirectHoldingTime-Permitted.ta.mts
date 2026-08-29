/* eslint-disable */
import {
    INTEGER,
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
 * @summary RedirectHoldingTime_Permitted
 * @description
 *
 * PERMITTED VALUES of `redirectHoldingTime` (1..65535 seconds).
 * ITU-T Rec. X.283 (12/97)
 * [§5.7](https://www.itu.int/rec/T-REC-X.283-199712-I).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RedirectHoldingTime-Permitted  ::=  INTEGER(1..65535)
 * ```
 */
export type RedirectHoldingTime_Permitted = INTEGER;




export const _decode_RedirectHoldingTime_Permitted = $._decodeInteger;




export const _encode_RedirectHoldingTime_Permitted = $._encodeInteger;


/* eslint-enable */
