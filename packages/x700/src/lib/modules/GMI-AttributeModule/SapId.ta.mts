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
 * @summary SapId
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SapId  ::=  GraphicString
 * ```
 */
export type SapId = GraphicString; // GraphicString




export const _decode_SapId = $._decodeGraphicString;




export const _encode_SapId = $._encodeGraphicString;


/* eslint-enable */
