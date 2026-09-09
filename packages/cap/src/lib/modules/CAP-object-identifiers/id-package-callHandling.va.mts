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
import { id_packageE } from "../CAP-object-identifiers/id-packageE.va.mjs";
// export { id_packageE } from "../CAP-object-identifiers/id-packageE.va.mjs";


/**
 * @summary id_package_callHandling
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-package-callHandling                OBJECT IDENTIFIER ::= {id-packageE 20}
 * ```
 * 
 * @constant
 */
export
const id_package_callHandling: OBJECT_IDENTIFIER = _OID.fromParts([
    20,
], id_packageE);

/* eslint-enable */
