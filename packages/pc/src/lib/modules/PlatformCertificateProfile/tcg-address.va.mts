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
import { tcg } from "../PlatformCertificateProfile/tcg.va.mjs";
/**
 * @summary tcg_address
 * @description
 *
 * Arc for TCG address-type OIDs (`{ tcg 17 }`). Used as
 * `AddressType` in `ComponentAddress`. TCG Platform Certificate
 * Profile v1.1 r19 §3.1.6, §4.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * tcg-address OBJECT IDENTIFIER ::= {tcg 17}
 * ```
 * 
 * @constant
 */
export
const tcg_address: OBJECT_IDENTIFIER = _OID.fromParts([
    17,
], tcg);

/* eslint-enable */
