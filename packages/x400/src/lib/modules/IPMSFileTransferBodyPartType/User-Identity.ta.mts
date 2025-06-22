/* eslint-disable */
import {
    GraphicString,
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
 * @summary User_Identity
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * User-Identity  ::=  GraphicString
 * ```
 */
export type User_Identity = GraphicString; // GraphicString


export const _decode_User_Identity = $._decodeGraphicString;


export const _encode_User_Identity = $._encodeGraphicString;


/* eslint-enable */
