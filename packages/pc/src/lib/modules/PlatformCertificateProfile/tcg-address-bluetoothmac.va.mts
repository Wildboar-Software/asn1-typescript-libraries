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
} from "asn1-ts";
import { tcg_address } from "../PlatformCertificateProfile/tcg-address.va.mjs";
/**
 * @summary tcg_address_bluetoothmac
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * tcg-address-bluetoothmac OBJECT IDENTIFIER ::= {tcg-address 3}
 * ```
 * 
 * @constant
 */
export
const tcg_address_bluetoothmac: OBJECT_IDENTIFIER = _OID.fromParts([
    3,
], tcg_address);

/* eslint-enable */
