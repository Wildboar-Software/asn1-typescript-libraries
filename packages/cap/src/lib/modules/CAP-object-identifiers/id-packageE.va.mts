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
import { id_CAPOE } from "../CAP-object-identifiers/id-CAPOE.va.mjs";
// export { id_CAPOE } from "../CAP-object-identifiers/id-CAPOE.va.mjs";


/**
 * @summary id_packageE
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-packageE                    OBJECT IDENTIFIER ::= {id-CAPOE    package(27)}
 * ```
 * 
 * @constant
 */
export
const id_packageE: OBJECT_IDENTIFIER = _OID.fromParts([
    /* package */ 27,
], id_CAPOE);

/* eslint-enable */
