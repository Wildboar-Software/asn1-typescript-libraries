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
import { id_asE } from "../CAP-object-identifiers/id-asE.va.mjs";
// export { id_asE } from "../CAP-object-identifiers/id-asE.va.mjs";


/**
 * @summary id_as_gsmSSF_scfGenericAS
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-as-gsmSSF-scfGenericAS            OBJECT IDENTIFIER ::= {id-asE 4}
 * ```
 * 
 * @constant
 */
export
const id_as_gsmSSF_scfGenericAS: OBJECT_IDENTIFIER = _OID.fromParts([
    4,
], id_asE);

/* eslint-enable */
