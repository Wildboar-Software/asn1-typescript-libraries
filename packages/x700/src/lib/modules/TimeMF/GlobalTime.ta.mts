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
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';

/**
 * @summary GlobalTime
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * GlobalTime  ::=  OCTET STRING(SIZE (8))
 * ```
 */
export type GlobalTime = OCTET_STRING; // OctetStringType


export const _decode_GlobalTime = $._decodeOctetString;


export const _encode_GlobalTime = $._encodeOctetString;


/* eslint-enable */
