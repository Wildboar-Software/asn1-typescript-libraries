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
 * @summary tcg_at_platformManufacturerStr
 * @description
 *
 * Platform manufacturer string attribute (`{ tcg-common 1 }`).
 * MUST appear as a SAN RDN. TCG Platform Certificate Profile
 * v1.1 r19 §3.1.2, §4.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * tcg-at-platformManufacturerStr OBJECT IDENTIFIER ::= {tcg-common 1}
 * ```
 * 
 * @constant
 */
export
const tcg_at_platformManufacturerStr: OBJECT_IDENTIFIER = _OID.fromParts([
    1,
], tcg_common);

/* eslint-enable */
