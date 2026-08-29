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
 * @summary RawData
 * @description
 *
 * Octet string of uninterpreted test data. Used as
 * `TestPattern.rawData` and `ConnectivityThreshold.rawData`.
 * Added as a named type by Cor.1. ITU-T Rec. X.737 Cor.1 (06/98)
 * [https://www.itu.int/rec/T-REC-X.737-199806-I]; X.737 (11/95) A.7.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RawData  ::=  OCTET STRING
 * ```
 */
export type RawData = OCTET_STRING; // OctetStringType


export const _decode_RawData = $._decodeOctetString;


export const _encode_RawData = $._encodeOctetString;


/* eslint-enable */
