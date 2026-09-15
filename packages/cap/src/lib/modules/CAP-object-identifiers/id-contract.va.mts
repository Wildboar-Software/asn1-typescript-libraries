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
import { id_CAP } from "../CAP-object-identifiers/id-CAP.va.mjs";
// export { id_CAP } from "../CAP-object-identifiers/id-CAP.va.mjs";


/**
 * @summary id_contract
 * @description
 *
 * OID arc for CAP contracts under `id-CAP` (`contract(26)`). Values are
 * identical to ITU-T Recommendation Q.1218.
 * (3GPP TS 29.078 V19.0.0 clause 5.6).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-contract                    OBJECT IDENTIFIER ::= {id-CAP    contract(26)}
 * ```
 * 
 * @constant
 */
export
const id_contract: OBJECT_IDENTIFIER = _OID.fromParts([
    /* contract */ 26,
], id_CAP);

/* eslint-enable */
