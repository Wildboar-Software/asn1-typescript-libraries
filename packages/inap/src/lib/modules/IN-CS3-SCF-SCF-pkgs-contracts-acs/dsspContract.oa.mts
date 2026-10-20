/* eslint-disable */
import { dsspConnectionPackage } from "../IN-CS3-SCF-SCF-pkgs-contracts-acs/dsspConnectionPackage.oa.mjs";
// export { dsspConnectionPackage } from "../IN-CS3-SCF-SCF-pkgs-contracts-acs/dsspConnectionPackage.oa.mjs";
import { chainedSCFOperationPackage } from "../IN-CS3-SCF-SCF-pkgs-contracts-acs/chainedSCFOperationPackage.oa.mjs";
// export { chainedSCFOperationPackage } from "../IN-CS3-SCF-SCF-pkgs-contracts-acs/chainedSCFOperationPackage.oa.mjs";
import { id_contract_dssp } from "../IN-CS3-object-identifiers/id-contract-dssp.va.mjs";
// export { id_contract_dssp } from "../IN-CS3-object-identifiers/id-contract-dssp.va.mjs";
import { type CONTRACT } from "../Remote-Operations-Information-Objects/CONTRACT.oca.mjs";


/**
 * @summary dsspContract
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * dsspContract CONTRACT ::= {
 *   CONNECTION             dsspConnectionPackage
 *   INITIATOR CONSUMER OF  {chainedSCFOperationPackage}
 *   ID                     id-contract-dssp
 * }
 * ```
 * 
 * @constant
 * @type {CONTRACT}
 * @implements {CONTRACT}
 */
export
const dsspContract: CONTRACT = {
    class: "CONTRACT",
    decoderFor: {
    },
    encoderFor: {
    },
    "&connection": dsspConnectionPackage /* OBJECT_FIELD_SETTING */,
    "&InitiatorConsumerOf": [ chainedSCFOperationPackage, ] /* OBJECT_FIELD_SETTING */,
    "&id": id_contract_dssp /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
