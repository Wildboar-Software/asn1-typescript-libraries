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
 * @summary id_as
 * @description
 *
 * OID arc for CAP abstract syntaxes under `id-CAP` (`as(5)`). Values are
 * identical to ITU-T Recommendation Q.1218.
 * (3GPP TS 29.078 V19.0.0 clause 5.6).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-as                        OBJECT IDENTIFIER ::= {id-CAP    as(5)}
 * ```
 * 
 * @constant
 */
export
const id_as: OBJECT_IDENTIFIER = _OID.fromParts([
    /* as */ 5,
], id_CAP);

/* eslint-enable */
