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
 * @summary id_package_cancel
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-package-cancel                OBJECT IDENTIFIER ::= {id-packageE 36}
 * ```
 * 
 * @constant
 */
export
const id_package_cancel: OBJECT_IDENTIFIER = _OID.fromParts([
    36,
], id_packageE);

/* eslint-enable */
