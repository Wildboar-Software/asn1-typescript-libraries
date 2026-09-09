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
 * @summary SuspendTimer
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SuspendTimer  ::=  INTEGER(0..120)
 * ```
 */
export
type SuspendTimer = INTEGER;
export const _decode_SuspendTimer = $._decodeInteger;
export const _encode_SuspendTimer = $._encodeInteger;


/* eslint-enable */
