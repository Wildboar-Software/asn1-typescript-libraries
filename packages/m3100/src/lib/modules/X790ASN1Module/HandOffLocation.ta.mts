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
 * @summary HandOffLocation
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * HandOffLocation  ::=  GraphicString(SIZE (0..64))
 * ```
 */
export type HandOffLocation = GraphicString; // GraphicString




export const _decode_HandOffLocation = $._decodeGraphicString;




export const _encode_HandOffLocation = $._encodeGraphicString;


/* eslint-enable */
