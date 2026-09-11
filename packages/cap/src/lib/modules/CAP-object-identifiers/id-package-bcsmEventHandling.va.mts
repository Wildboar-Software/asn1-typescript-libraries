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
 * @summary id_package_bcsmEventHandling
 * @description
 *
 * OID of the gsmSSF/gsmSCF `bcsmEventHandling` operation package
 * (`{id-package 21}`).
 * (3GPP TS 29.078 V19.0.0 clause 5.6).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-package-bcsmEventHandling            OBJECT IDENTIFIER ::= {id-package 21}
 * ```
 * 
 * @constant
 */
export
const id_package_bcsmEventHandling: OBJECT_IDENTIFIER = _OID.fromParts([
    21,
], id_package);

/* eslint-enable */
