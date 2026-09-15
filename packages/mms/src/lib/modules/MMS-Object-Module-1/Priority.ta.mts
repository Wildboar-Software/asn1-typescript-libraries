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
    ASN1OverflowError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary Priority
 * @description
 * 
 * Integer 0..127. 0 = highest, 64 = normal, 127
 * = lowest. Used on Event Conditions and Semaphore Entries. Server
 * treatment is a local matter. ISO 9506-1:2003 §16.1.3.8, §19.1.1.5.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Priority  ::=  INTEGER (0..127)
 * ```
 */
export
type Priority = INTEGER;
export const _decode_Priority = (el: _Element): Priority => {
    const value = $._decodeInteger(el);
    const n = typeof value === "bigint" ? Number(value) : value;
    if (n < 0 || n > 127) {
        throw new ASN1OverflowError("Priority violates INTEGER range constraint");
    }
    return value;
};
export const _encode_Priority = $._encodeInteger;


/* eslint-enable */
