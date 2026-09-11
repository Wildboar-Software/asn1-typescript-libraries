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
import { id_contract3 } from "../CAP-object-identifiers/id-contract3.va.mjs";
// export { id_contract3 } from "../CAP-object-identifiers/id-contract3.va.mjs";


/**
 * @summary id_cap3SmsSsfTogsmScf
 * @description
 *
 * OID of the CAP3 SMS ssf→scf contract `cap3SmsSsfTogsmScf`
 * (`{id-contract3 16}`). Used for gprsSSF/gsmSCF or gsmSSF/gsmSCF.
 * (3GPP TS 29.078 V19.0.0 clause 5.6).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-cap3SmsSsfTogsmScf                OBJECT IDENTIFIER ::= {id-contract3 16}
 * ```
 * 
 * @constant
 */
export
const id_cap3SmsSsfTogsmScf: OBJECT_IDENTIFIER = _OID.fromParts([
    16,
], id_contract3);

/* eslint-enable */
