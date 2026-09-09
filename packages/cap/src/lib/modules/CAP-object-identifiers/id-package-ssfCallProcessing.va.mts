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
 * @summary id_package_ssfCallProcessing
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-package-ssfCallProcessing            OBJECT IDENTIFIER ::= {id-packageE 24}
 * ```
 * 
 * @constant
 */
export
const id_package_ssfCallProcessing: OBJECT_IDENTIFIER = _OID.fromParts([
    24,
], id_packageE);

/* eslint-enable */
