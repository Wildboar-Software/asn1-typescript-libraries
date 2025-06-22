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
} from "asn1-ts";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary UnknownStatus
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * UnknownStatus  ::=  BOOLEAN
 * ```
 */
export
type UnknownStatus = BOOLEAN; // BooleanType


export const _decode_UnknownStatus = $._decodeBoolean;


export const _encode_UnknownStatus = $._encodeBoolean;


/* eslint-enable */
