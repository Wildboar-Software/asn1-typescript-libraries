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
 * @summary Content
 * @description
 *
 * Opaque OCTET STRING of the UA-to-UA information object (ITU-T X.411 (1999),
 * §8.2.1.1.1.37). Empty content has length 0.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Content  ::=
 *   OCTET
 *     STRING
 * ```
 */
export type Content = OCTET_STRING; // OctetStringType


export const _decode_Content = $._decodeOctetString;


export const _encode_Content = $._encodeOctetString;


/* eslint-enable */
