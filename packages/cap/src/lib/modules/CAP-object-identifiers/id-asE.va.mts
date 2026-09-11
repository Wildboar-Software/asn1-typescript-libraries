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
 * @summary id_asE
 * @description
 *
 * OID arc for CAP abstract syntaxes under `id-CAPOE` (`as(5)`).
 * (3GPP TS 29.078 V19.0.0 clause 5.6).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-asE                        OBJECT IDENTIFIER ::= {id-CAPOE    as(5)}
 * ```
 * 
 * @constant
 */
export
const id_asE: OBJECT_IDENTIFIER = _OID.fromParts([
    /* as */ 5,
], id_CAPOE);

/* eslint-enable */
