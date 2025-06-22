/* eslint-disable */
import {
    VideotexString,
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
 * @summary VideotexData
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * VideotexData  ::=  VideotexString
 * ```
 */
export type VideotexData = VideotexString; // VideotexString


export const _decode_VideotexData = $._decodeVideotexString;


export const _encode_VideotexData = $._encodeVideotexString;


/* eslint-enable */
