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
 * @summary ConfirmedMode
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ConfirmedMode  ::=  BOOLEAN
 * ```
 */
export
type ConfirmedMode = BOOLEAN; // BooleanType


export const _decode_ConfirmedMode = $._decodeBoolean;


export const _encode_ConfirmedMode = $._encodeBoolean;


/* eslint-enable */
