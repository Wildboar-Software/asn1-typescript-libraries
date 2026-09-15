/* eslint-disable */
import {
    OCTET_STRING,
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
 * @summary DfrUniquePermanentIdentifier
 * @description
 *
 * Server-assigned octet string that uniquely identifies one DFR-Object for the
 * life of that server, including among deleted objects. Opaque to the user;
 * never reused. Primary access name. ISO/IEC 10166-1:1991 §3.2.32, §6.3,
 * §9.2.1.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DfrUniquePermanentIdentifier  ::=  OCTET STRING
 * ```
 */
export
type DfrUniquePermanentIdentifier = OCTET_STRING; // OctetStringType
export const _decode_DfrUniquePermanentIdentifier = $._decodeOctetString;
export const _encode_DfrUniquePermanentIdentifier = $._encodeOctetString;


/* eslint-enable */
