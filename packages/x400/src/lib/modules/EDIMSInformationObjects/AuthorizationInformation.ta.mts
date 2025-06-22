/* eslint-disable */
import {
    TeletexString,
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
 * @summary AuthorizationInformation
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AuthorizationInformation  ::=
 *   TeletexString(SIZE (1..ub-authorization-information))
 * ```
 */
export type AuthorizationInformation = TeletexString; // TeletexString


export const _decode_AuthorizationInformation = $._decodeTeletexString;


export const _encode_AuthorizationInformation = $._encodeTeletexString;


/* eslint-enable */
