/* eslint-disable */
import { dapConnectionPackage } from "../IN-CS2-SCF-SDF-Protocol/dapConnectionPackage.oa.mjs";
// export { dapConnectionPackage } from "../IN-CS2-SCF-SDF-Protocol/dapConnectionPackage.oa.mjs";
import { searchPackage } from "../IN-CS2-SCF-SDF-Protocol/searchPackage.oa.mjs";
// export { searchPackage } from "../IN-CS2-SCF-SDF-Protocol/searchPackage.oa.mjs";
import { modifyPackage } from "../IN-CS2-SCF-SDF-Protocol/modifyPackage.oa.mjs";
// export { modifyPackage } from "../IN-CS2-SCF-SDF-Protocol/modifyPackage.oa.mjs";
import { id_contract_dap } from "../IN-CS2-object-identifiers/id-contract-dap.va.mjs";
// export { id_contract_dap } from "../IN-CS2-object-identifiers/id-contract-dap.va.mjs";
import { type CONTRACT } from "../Remote-Operations-Information-Objects/CONTRACT.oca.mjs";


/**
 * @summary dapContract
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * dapContract CONTRACT ::= {
 *   CONNECTION             dapConnectionPackage
 *   INITIATOR CONSUMER OF  {searchPackage | modifyPackage}
 *   ID                     id-contract-dap
 * }
 * ```
 * 
 * @constant
 * @type {CONTRACT}
 * @implements {CONTRACT}
 */
export
const dapContract: CONTRACT = {
    class: "CONTRACT",
    decoderFor: {
    },
    encoderFor: {
    },
    "&connection": dapConnectionPackage /* OBJECT_FIELD_SETTING */,
    "&InitiatorConsumerOf": [ searchPackage, modifyPackage, ] /* OBJECT_FIELD_SETTING */,
    "&id": id_contract_dap /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
