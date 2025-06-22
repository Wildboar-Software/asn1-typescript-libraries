/* eslint-disable */
import {
    BIT_STRING,
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
 * @summary EDIApplicationSecurityElement
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * EDIApplicationSecurityElement  ::=
 *   BIT STRING(SIZE (0..ub-edi-application-security-elements))
 * ```
 */
export type EDIApplicationSecurityElement = BIT_STRING;


export const _decode_EDIApplicationSecurityElement = $._decodeBitString;


export const _encode_EDIApplicationSecurityElement = $._encodeBitString;


/* eslint-enable */
