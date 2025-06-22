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
 * @summary TspPriority
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TspPriority  ::=  GraphicString(SIZE (2))
 * ```
 */
export type TspPriority = GraphicString; // GraphicString




export const _decode_TspPriority = $._decodeGraphicString;




export const _encode_TspPriority = $._encodeGraphicString;


/* eslint-enable */
