/* eslint-disable */
import { dispConnectionPackage } from "../IN-SDF-SDF-Protocol/dispConnectionPackage.oa.mjs";
// export { dispConnectionPackage } from "../IN-SDF-SDF-Protocol/dispConnectionPackage.oa.mjs";
import { shadowSupplierPackage } from "../IN-SDF-SDF-Protocol/shadowSupplierPackage.oa.mjs";
// export { shadowSupplierPackage } from "../IN-SDF-SDF-Protocol/shadowSupplierPackage.oa.mjs";
import { id_contract_shadowSupplier } from "../IN-object-identifiers/id-contract-shadowSupplier.va.mjs";
// export { id_contract_shadowSupplier } from "../IN-object-identifiers/id-contract-shadowSupplier.va.mjs";
import { type CONTRACT } from "../Remote-Operations-Information-Objects/CONTRACT.oca.mjs";


/**
 * @summary shadowSupplierContract
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * shadowSupplierContract CONTRACT ::= {
 *   CONNECTION             dispConnectionPackage
 *   RESPONDER CONSUMER OF  {shadowSupplierPackage}
 *   ID                     id-contract-shadowSupplier
 * }
 * ```
 * 
 * @constant
 * @type {CONTRACT}
 * @implements {CONTRACT}
 */
export
const shadowSupplierContract: CONTRACT = {
    class: "CONTRACT",
    decoderFor: {
    },
    encoderFor: {
    },
    "&connection": dispConnectionPackage /* OBJECT_FIELD_SETTING */,
    "&InitiatorSupplierOf": [ shadowSupplierPackage, ] /* OBJECT_FIELD_SETTING */,
    "&id": id_contract_shadowSupplier /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
