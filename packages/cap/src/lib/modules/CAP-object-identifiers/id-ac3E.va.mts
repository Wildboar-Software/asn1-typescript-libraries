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
import { id_CAP3OE } from "../CAP-object-identifiers/id-CAP3OE.va.mjs";
// export { id_CAP3OE } from "../CAP-object-identifiers/id-CAP3OE.va.mjs";


/**
 * @summary id_ac3E
 * @description
 *
 * OID arc for CAP3 application contexts under `id-CAP3OE` (`ac(3)`).
 * (3GPP TS 29.078 V19.0.0 clause 5.6).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-ac3E                        OBJECT IDENTIFIER ::= {id-CAP3OE    ac(3)}
 * ```
 * 
 * @constant
 */
export
const id_ac3E: OBJECT_IDENTIFIER = _OID.fromParts([
    /* ac */ 3,
], id_CAP3OE);

/* eslint-enable */
