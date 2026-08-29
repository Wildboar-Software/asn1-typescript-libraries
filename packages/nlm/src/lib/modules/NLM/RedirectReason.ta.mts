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
 * @summary RedirectReason
 * @description
 *
 * Why a call was offered or connected to an address other than the originally
 * called address: first octet of the CRCDN or CLAMN facility parameter field. 0
 * means the call was not redirected. Syntax of `redirectReason`.
 * ITU-T Rec. X.283 (12/97)
 * [§5.11](https://www.itu.int/rec/T-REC-X.283-199712-I).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RedirectReason  ::=  INTEGER(0..127)
 * ```
 */
export type RedirectReason = INTEGER;




export const _decode_RedirectReason = $._decodeInteger;




export const _encode_RedirectReason = $._encodeInteger;


/* eslint-enable */
