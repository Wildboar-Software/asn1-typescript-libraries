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
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/functional.mjs';

/**
 * @summary ExtendedContentType
 * @description
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
