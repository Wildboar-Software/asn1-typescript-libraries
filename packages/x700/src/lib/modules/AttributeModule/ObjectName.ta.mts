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
 * @summary ObjectName
 * @description
 *
 * GDMO example (X.722 Annex A, not a production SM function).
 * Syntax of the example `objectName` naming attribute
 * (equality matching). Used in `exampleNameBinding` to name
 * `exampleObjectClass` under `system`. ITU-T Rec. X.722
 * (01/92) [A.2](https://www.itu.int/rec/T-REC-X.722-199201-I),
 * A.5, A.10.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ObjectName  ::=  GraphicString
 * ```
 */
export type ObjectName = GraphicString; // GraphicString


export const _decode_ObjectName = $._decodeGraphicString;


export const _encode_ObjectName = $._encodeGraphicString;


/* eslint-enable */
