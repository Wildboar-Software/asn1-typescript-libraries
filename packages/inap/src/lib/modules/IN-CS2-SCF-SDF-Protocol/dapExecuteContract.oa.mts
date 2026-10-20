/* eslint-disable */
import { dapConnectionPackage } from "../IN-CS2-SCF-SDF-Protocol/dapConnectionPackage.oa.mjs";
// export { dapConnectionPackage } from "../IN-CS2-SCF-SDF-Protocol/dapConnectionPackage.oa.mjs";
import { searchPackage } from "../IN-CS2-SCF-SDF-Protocol/searchPackage.oa.mjs";
// export { searchPackage } from "../IN-CS2-SCF-SDF-Protocol/searchPackage.oa.mjs";
import { modifyPackage } from "../IN-CS2-SCF-SDF-Protocol/modifyPackage.oa.mjs";
// export { modifyPackage } from "../IN-CS2-SCF-SDF-Protocol/modifyPackage.oa.mjs";
import { executePackage } from "../IN-CS2-SCF-SDF-Protocol/executePackage.oa.mjs";
// export { executePackage } from "../IN-CS2-SCF-SDF-Protocol/executePackage.oa.mjs";
import { id_contract_dapExecute } from "../IN-CS2-object-identifiers/id-contract-dapExecute.va.mjs";
// export { id_contract_dapExecute } from "../IN-CS2-object-identifiers/id-contract-dapExecute.va.mjs";
import { type CONTRACT } from "../Remote-Operations-Information-Objects/CONTRACT.oca.mjs";


/**
 * @summary dapExecuteContract
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * dapExecuteContract CONTRACT ::= {
 *   CONNECTION             dapConnectionPackage
 *   INITIATOR CONSUMER OF  {searchPackage | modifyPackage | executePackage}
 *   ID                     id-contract-dapExecute
 * }
 * ```
 * 
 * @constant
 * @type {CONTRACT}
 * @implements {CONTRACT}
 */
export
const dapExecuteContract: CONTRACT = {
    class: "CONTRACT",
    decoderFor: {
    },
    encoderFor: {
    },
    "&connection": dapConnectionPackage /* OBJECT_FIELD_SETTING */,
    "&InitiatorConsumerOf": [ searchPackage, modifyPackage, executePackage, ] /* OBJECT_FIELD_SETTING */,
    "&id": id_contract_dapExecute /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
