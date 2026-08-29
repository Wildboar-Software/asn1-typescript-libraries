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
 * @summary CheckSum
 * @description
 *
 * Syntax of `checkSum`: checksum of the software represented by
 * the softwareUnit. ITU-T Rec. X.744 (10/96)
 * [§8.2.2](https://www.itu.int/rec/T-REC-X.744-199610-I),
 * A.3.2.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CheckSum  ::=  BIT STRING
 * ```
 */
export type CheckSum = BIT_STRING;


export const _decode_CheckSum = $._decodeBitString;


export const _encode_CheckSum = $._encodeBitString;


/* eslint-enable */
