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
import { tcg_common } from "../PlatformCertificateProfile/tcg-common.va.mjs";
/**
 * @summary tcg_at_platformConfiguration
 * @description
 *
 * Platform configuration attribute arc (`{ tcg-common 7 }`).
 * Parent of v1 and v2 OIDs. Current certificates use
 * `tcg-at-platformConfiguration-v2`. TCG Platform Certificate
 * Profile v1.1 r19 §3.1.6, §4.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * tcg-at-platformConfiguration OBJECT IDENTIFIER ::= {tcg-common 7}
 * ```
 * 
 * @constant
 */
export
const tcg_at_platformConfiguration: OBJECT_IDENTIFIER = _OID.fromParts([
    7,
], tcg_common);

/* eslint-enable */
