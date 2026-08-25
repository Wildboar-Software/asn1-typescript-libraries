/* eslint-disable */
import {
    RELATIVE_OID,
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
 * @summary ExtendedContentType
 * @description
 *
 * This argument identifies the type of the content of the message. It identifies the
 * abstract syntax and the encoding rules used. See ITU-T X.411 (1999), §8.2.1.1.1.34.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ExtendedContentType  ::=  RELATIVE-OID
 * ```
 */
export type ExtendedContentType = RELATIVE_OID; // RelativeOIDType


export const _decode_ExtendedContentType = $._decodeRelativeOID;


export const _encode_ExtendedContentType = $._encodeRelativeOID;


/* eslint-enable */
