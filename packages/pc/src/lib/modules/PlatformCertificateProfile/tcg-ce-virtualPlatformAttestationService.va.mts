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
import { tcg_ce } from "../PlatformCertificateProfile/tcg-ce.va.mjs";
/**
 * @summary tcg_ce_virtualPlatformAttestationService
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * tcg-ce-virtualPlatformAttestationService OBJECT IDENTIFIER ::= {tcg-ce 4}
 * ```
 * 
 * @constant
 */
export
const tcg_ce_virtualPlatformAttestationService: OBJECT_IDENTIFIER = _OID.fromParts([
    4,
], tcg_ce);

/* eslint-enable */
