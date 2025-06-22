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
} from 'asn1-ts';
import * as $ from '@wildboar/asn1/functional';


/**
 * @summary ManagerSearchString
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ManagerSearchString  ::=  GraphicString(SIZE (0..64))
 * ```
 */
export type ManagerSearchString = GraphicString; // GraphicString




export const _decode_ManagerSearchString = $._decodeGraphicString;




export const _encode_ManagerSearchString = $._encodeGraphicString;


/* eslint-enable */
