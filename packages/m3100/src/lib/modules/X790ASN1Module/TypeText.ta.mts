/* eslint-disable */
import {
    IA5String,
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
 * @summary TypeText
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TypeText  ::=  IA5String(SIZE (0..32))
 * ```
 */
export type TypeText = IA5String; // IA5String




export const _decode_TypeText = $._decodeIA5String;




export const _encode_TypeText = $._encodeIA5String;


/* eslint-enable */
