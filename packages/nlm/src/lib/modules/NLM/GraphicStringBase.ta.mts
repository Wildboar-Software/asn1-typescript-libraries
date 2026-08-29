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
 * @summary GraphicStringBase
 * @description
 *
 * Naming-attribute syntax (`linkageId`, `x25PLEId`, `x25PLEIVMOId`,
 * `virtualCircuitId`, `dSeriesId`, …).
 * ITU-T Rec. X.283 (12/97)
 * [§5.7](https://www.itu.int/rec/T-REC-X.283-199712-I), §5.10, §5.11.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * GraphicStringBase  ::=  GraphicString
 * ```
 */
export type GraphicStringBase = GraphicString; // GraphicString




export const _decode_GraphicStringBase = $._decodeGraphicString;




export const _encode_GraphicStringBase = $._encodeGraphicString;


/* eslint-enable */
