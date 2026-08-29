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
 * @summary SecurityAlarmCause
 * @description
 * 
 * Cause of a security alarm (OID). Registered values are under
 * `securityAlarmCause`. MATCHES FOR EQUALITY. `{smi2AttributeID 21}`. ITU-T
 * Rec. X.721 (02/92) §10.7.1.16; ITU-T Rec. X.736 | ISO/IEC 10164-7.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SecurityAlarmCause  ::=  OBJECT IDENTIFIER
 * ```
 */
export
type SecurityAlarmCause = OBJECT_IDENTIFIER; // ObjectIdentifierType


export const _decode_SecurityAlarmCause = $._decodeObjectIdentifier;


export const _encode_SecurityAlarmCause = $._encodeObjectIdentifier;


/* eslint-enable */
