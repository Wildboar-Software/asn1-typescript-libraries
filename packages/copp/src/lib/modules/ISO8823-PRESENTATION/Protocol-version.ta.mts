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
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/functional.mjs';


/**
 * @summary Protocol_version
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Protocol-version  ::=  BIT STRING {version-1(0)}
 * ```
 */
export type Protocol_version = BIT_STRING;


/**
 * @summary Protocol_version_version_1
 * @constant
 */
export const Protocol_version_version_1: number = 0; /* LONG_NAMED_BIT */


/**
 * @summary version_1
 * @constant
 */
export const version_1: number = Protocol_version_version_1; /* SHORT_NAMED_BIT */




export const _decode_Protocol_version = $._decodeBitString;




export const _encode_Protocol_version = $._encodeBitString;


/* eslint-enable */
