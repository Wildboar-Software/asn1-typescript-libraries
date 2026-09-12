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
 * @summary Status_Request
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Status-Request  ::=  BOOLEAN
 * ```
 */
export
type Status_Request = BOOLEAN; // BooleanType
export const _decode_Status_Request = $._decodeBoolean;
export const _encode_Status_Request = $._encodeBoolean;


/* eslint-enable */
