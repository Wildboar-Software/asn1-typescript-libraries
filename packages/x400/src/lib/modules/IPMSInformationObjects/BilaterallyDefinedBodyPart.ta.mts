/* eslint-disable */
import {
    OCTET_STRING,
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
 * @summary BilaterallyDefinedBodyPart
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * BilaterallyDefinedBodyPart  ::=  OCTET STRING
 * ```
 */
export type BilaterallyDefinedBodyPart = OCTET_STRING; // OctetStringType


export const _decode_BilaterallyDefinedBodyPart = $._decodeOctetString;


export const _encode_BilaterallyDefinedBodyPart = $._encodeOctetString;


/* eslint-enable */
