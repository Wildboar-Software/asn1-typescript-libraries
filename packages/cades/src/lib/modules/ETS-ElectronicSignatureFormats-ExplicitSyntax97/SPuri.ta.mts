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
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary SPuri
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SPuri  ::=  IA5String
 * ```
 */
export
type SPuri = IA5String; // IA5String


export const _decode_SPuri = $._decodeIA5String;


export const _encode_SPuri = $._encodeIA5String;


/* eslint-enable */
