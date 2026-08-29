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
import { tcg_attribute } from "../PlatformCertificateProfile/tcg-attribute.va.mjs";
/**
 * @summary tcg_at_securityQualities
 * @description
 *
 * Security-qualities attribute (`{ tcg-attribute 10 }`): a text
 * string reflecting platform security qualities. Documented for
 * compatibility; SHOULD NOT be included in Platform Certificates
 * issued under this profile. The dedicated Security Qualities
 * section was removed in v1.1. TCG Platform Certificate Profile
 * v1.1 r19 Change Log, §3.2.10, §4.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * tcg-at-securityQualities OBJECT IDENTIFIER ::= {tcg-attribute 10}
 * ```
 * 
 * @constant
 */
export
const tcg_at_securityQualities: OBJECT_IDENTIFIER = _OID.fromParts([
    10,
], tcg_attribute);

/* eslint-enable */
