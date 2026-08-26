/* eslint-disable */
import {
    OBJECT_IDENTIFIER,
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
 * @summary ObjectName
 * @description
 *
 * OBJECT IDENTIFIER naming a managed object / variable binding
 * ([RFC 3416 §3](https://datatracker.ietf.org/doc/html/rfc3416#section-3)).
 * SNMP limits OIDs to at most 128 sub-identifiers, each ≤ 2**32-1
 * ([RFC 3416 §4.1](https://datatracker.ietf.org/doc/html/rfc3416#section-4.1)).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ObjectName  ::=  OBJECT IDENTIFIER
 * ```
 */
export
type ObjectName = OBJECT_IDENTIFIER; // ObjectIdentifierType


export const _decode_ObjectName = $._decodeObjectIdentifier;


export const _encode_ObjectName = $._encodeObjectIdentifier;


/* eslint-enable */
