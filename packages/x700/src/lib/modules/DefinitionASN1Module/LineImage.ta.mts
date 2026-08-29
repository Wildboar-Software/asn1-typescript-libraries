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
 * @summary LineImage
 * @description
 *
 * One complete line of text in a textual representation. Linked replies
 * of `getTextualRepresentation` concatenate sequences of line images.
 * ITU-T Rec. X.750 (10/96)
 * [§8.3.1.2](https://www.itu.int/rec/T-REC-X.750-199610-I),
 * [A.3.4](https://www.itu.int/rec/T-REC-X.750-199610-I),
 * [A.3.5](https://www.itu.int/rec/T-REC-X.750-199610-I).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * LineImage  ::=
 *   GraphicString
 * ```
 */
export type LineImage = GraphicString; // GraphicString




export const _decode_LineImage = $._decodeGraphicString;




export const _encode_LineImage = $._encodeGraphicString;


/* eslint-enable */
