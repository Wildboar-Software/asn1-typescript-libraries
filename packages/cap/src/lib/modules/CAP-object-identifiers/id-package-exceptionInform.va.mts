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
 * @summary id_package_exceptionInform
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-package-exceptionInform            OBJECT IDENTIFIER ::= {id-package 38}
 * ```
 * 
 * @constant
 */
export
const id_package_exceptionInform: OBJECT_IDENTIFIER = _OID.fromParts([
    38,
], id_package);

/* eslint-enable */
