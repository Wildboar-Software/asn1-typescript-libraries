/* eslint-disable */
import {
    BIT_STRING,
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
 * @summary ProtocolVersion
 * @description
 *
 * Protocol version bits. Bit 0 is `version1`. Later editions of
 * ISO/IEC 9041-1 may define further bits. In ASQ each 1-bit is a
 * supported version (multiple allowed); a successful ASR sets only
 * one bit. ISO/IEC 9041-1:1997 §6.2.2 i, §6.3.2 f, §12.2.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ProtocolVersion  ::=  BIT STRING { version1 (0) }
 * ```
 */
export
type ProtocolVersion = BIT_STRING;

/**
 * @summary ProtocolVersion_version1
 * @description
 *
 * Version 1 of ISO/IEC 9041-1. ISO/IEC 9041-1:1997 §12.2.
 * @constant
 */
export
const ProtocolVersion_version1: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary version1
 * @description
 *
 * Version 1 of ISO/IEC 9041-1. ISO/IEC 9041-1:1997 §12.2.
 * @constant
 */
export
const version1: number = ProtocolVersion_version1; /* SHORT_NAMED_BIT */
export const _decode_ProtocolVersion = $._decodeBitString;
export const _encode_ProtocolVersion = $._encodeBitString;


/* eslint-enable */
