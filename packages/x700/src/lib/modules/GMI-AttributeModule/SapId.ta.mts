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
 * @summary SapId
 * @description
 *
 * Naming attribute of `sap1` and `sap2` managed objects.
 * MATCHES FOR EQUALITY. Registered as `{… attribute(7)
 * sapId(10)}`. ITU-T Rec. X.723 (11/93)
 * [§9.16](https://www.itu.int/rec/T-REC-X.723-199311-I), §13.
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
