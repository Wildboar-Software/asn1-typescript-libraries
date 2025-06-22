/* eslint-disable */
import {
    INTEGER,
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
 * @summary Trinomial
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Trinomial  ::=  INTEGER
 * ```
 */
export
type Trinomial = INTEGER;


export const _decode_Trinomial = $._decodeInteger;


export const _encode_Trinomial = $._encodeInteger;


/* eslint-enable */
