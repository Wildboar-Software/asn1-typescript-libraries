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
 * @summary DocumentName
 * @description
 *
 * Graphic-string name of a document that contains templates and ASN.1
 * modules, e.g. `"CCITT Rec. X.721 (1992) | ISO/IEC 10165-2:1992"`. For
 * ITU-T Recommendations and International Standards, formed as a GDMO
 * `<standard-name>` (X.722 §8.2(k)). Naming attribute for name binding
 * `document-system2`. ITU-T Rec. X.750 (10/96)
 * [§8.1.2.6](https://www.itu.int/rec/T-REC-X.750-199610-I),
 * [§8.2.2.3](https://www.itu.int/rec/T-REC-X.750-199610-I),
 * [A.3.1](https://www.itu.int/rec/T-REC-X.750-199610-I),
 * [A.3.3](https://www.itu.int/rec/T-REC-X.750-199610-I).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DocumentName  ::=  GraphicString
 * ```
 */
export type DocumentName = GraphicString; // GraphicString


export const _decode_DocumentName = $._decodeGraphicString;


export const _encode_DocumentName = $._encodeGraphicString;


/* eslint-enable */
