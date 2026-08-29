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
 * @summary RepertoireId
 * @description
 *
 * Distinguishing name of a repertoire managed object. The
 * repertoire–system name binding uses a fixed RDN of `"REP1"` when
 * the object is the system's common repertoire. ITU-T Rec. X.750
 * (10/96)
 * [§8.2.1.2](https://www.itu.int/rec/T-REC-X.750-199610-I),
 * A.2.2–A.2.3.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RepertoireId  ::=  GraphicString
 * ```
 */
export type RepertoireId = GraphicString; // GraphicString


export const _decode_RepertoireId = $._decodeGraphicString;


export const _encode_RepertoireId = $._encodeGraphicString;


/* eslint-enable */
