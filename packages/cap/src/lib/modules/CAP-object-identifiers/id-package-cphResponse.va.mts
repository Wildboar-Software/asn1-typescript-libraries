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
 * @summary id_package_cphResponse
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-package-cphResponse                OBJECT IDENTIFIER ::= {id-package 37}
 * ```
 * 
 * @constant
 */
export
const id_package_cphResponse: OBJECT_IDENTIFIER = _OID.fromParts([
    37,
], id_package);

/* eslint-enable */
