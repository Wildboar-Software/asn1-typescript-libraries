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
import { id_package } from "../CAP-object-identifiers/id-package.va.mjs";
// export { id_package } from "../CAP-object-identifiers/id-package.va.mjs";


/**
 * @summary id_package_smsRelease
 * @description
 *
 * OID of the SMS `smsRelease` operation package (`{id-package 64}`). Used for
 * gprsSSF/gsmSCF or gsmSSF/gsmSCF.
 * (3GPP TS 29.078 V19.0.0 clause 5.6).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-package-smsRelease                OBJECT IDENTIFIER ::= {id-package 64}
 * ```
 * 
 * @constant
 */
export
const id_package_smsRelease: OBJECT_IDENTIFIER = _OID.fromParts([
    64,
], id_package);

/* eslint-enable */
