/* eslint-disable */
import {
    VisibleString,
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
 * @summary Date
 * @description
 *
 * Calendar date as eight-character `YYYYMMDD`, following the
 * example in ITU-T Rec. X.680 | ISO/IEC 8824-1. Used as the
 * key in `dateTranslationList`. ITU-T Rec. X.746 (02/00)
 * [A.6](https://www.itu.int/rec/T-REC-X.746-200002-I).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Date  ::=  VisibleString(SIZE (8))
 * ```
 */
export type Date = VisibleString; // VisibleString




export const _decode_Date = $._decodeVisibleString;




export const _encode_Date = $._encodeVisibleString;


/* eslint-enable */
