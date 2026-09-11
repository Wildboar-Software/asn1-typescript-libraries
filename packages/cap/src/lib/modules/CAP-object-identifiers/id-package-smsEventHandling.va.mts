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
 * @summary id_package_smsEventHandling
 * @description
 *
 * OID of the SMS `smsEventHandling` operation package (`{id-package 65}`). Used
 * for gprsSSF/gsmSCF or gsmSSF/gsmSCF.
 * (3GPP TS 29.078 V19.0.0 clause 5.6).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-package-smsEventHandling            OBJECT IDENTIFIER ::= {id-package 65}
 * ```
 * 
 * @constant
 */
export
const id_package_smsEventHandling: OBJECT_IDENTIFIER = _OID.fromParts([
    65,
], id_package);

/* eslint-enable */
