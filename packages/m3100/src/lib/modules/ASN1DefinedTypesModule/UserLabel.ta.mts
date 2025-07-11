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
 * @summary UserLabel
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * UserLabel  ::=  GraphicString
 * ```
 */
export type UserLabel = GraphicString; // GraphicString




export const _decode_UserLabel = $._decodeGraphicString;




export const _encode_UserLabel = $._encodeGraphicString;


/* eslint-enable */
