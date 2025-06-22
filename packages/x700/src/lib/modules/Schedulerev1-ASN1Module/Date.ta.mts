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
} from 'asn1-ts';
import * as $ from '@wildboar/asn1/functional';


/**
 * @summary Date
 * @description
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
