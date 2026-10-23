/* eslint-disable */
import { emptyConnectionPackage } from "../IN-CS2-classes/emptyConnectionPackage.oa.mjs";
// export { emptyConnectionPackage } from "../IN-CS2-classes/emptyConnectionPackage.oa.mjs";
import { basic_scf_cusf_package } from "../IN-CS2-SCF-CUSF-pkgs-contracts-acs/basic-scf-cusf-package.oa.mjs";
// export { basic_scf_cusf_package } from "../IN-CS2-SCF-CUSF-pkgs-contracts-acs/basic-scf-cusf-package.oa.mjs";
import { activityTestPackage } from "../IN-CS2-SSF-SCF-pkgs-contracts-acs/activityTestPackage.oa.mjs";
// export { activityTestPackage } from "../IN-CS2-SSF-SCF-pkgs-contracts-acs/activityTestPackage.oa.mjs";
import { id_contract_cusf_scf } from "../IN-CS2-object-identifiers/id-contract-cusf-scf.va.mjs";
// export { id_contract_cusf_scf } from "../IN-CS2-object-identifiers/id-contract-cusf-scf.va.mjs";
import { type CONTRACT } from "../Remote-Operations-Information-Objects/CONTRACT.oca.mjs";


/**
 * @summary scf_cusf_contract
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * scf-cusf-contract CONTRACT ::= {
 *   CONNECTION             emptyConnectionPackage
 *   INITIATOR CONSUMER OF
 *     {basic-scf-cusf-package | activityTestPackage}
 *   ID                     id-contract-cusf-scf
 * }
 * ```
 * 
 * @constant
 * @type {CONTRACT}
 * @implements {CONTRACT}
 */
export
const scf_cusf_contract: CONTRACT = {
    class: "CONTRACT",
    decoderFor: {
    },
    encoderFor: {
    },
    "&connection": emptyConnectionPackage /* OBJECT_FIELD_SETTING */,
    "&InitiatorConsumerOf": [ basic_scf_cusf_package, activityTestPackage, ] /* OBJECT_FIELD_SETTING */,
    "&id": id_contract_cusf_scf /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
