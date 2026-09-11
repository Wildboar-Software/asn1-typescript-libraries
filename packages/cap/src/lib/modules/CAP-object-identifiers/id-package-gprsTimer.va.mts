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
 * @summary id_package_gprsTimer
 * @description
 *
 * OID of the gprsSSF/gsmSCF `gprsTimer` operation package (`{id-package 55}`).
 * (3GPP TS 29.078 V19.0.0 clause 5.6).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-package-gprsTimer                OBJECT IDENTIFIER ::= {id-package 55}
 * ```
 * 
 * @constant
 */
export
const id_package_gprsTimer: OBJECT_IDENTIFIER = _OID.fromParts([
    55,
], id_package);

/* eslint-enable */
