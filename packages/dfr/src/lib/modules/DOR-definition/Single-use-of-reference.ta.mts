/* eslint-disable */
import {
    BOOLEAN,
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
 * @summary Single_use_of_reference
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Single-use-of-reference  ::=  BOOLEAN
 * ```
 */
export
type Single_use_of_reference = BOOLEAN; // BooleanType
export const _decode_Single_use_of_reference = $._decodeBoolean;
export const _encode_Single_use_of_reference = $._encodeBoolean;


/* eslint-enable */
