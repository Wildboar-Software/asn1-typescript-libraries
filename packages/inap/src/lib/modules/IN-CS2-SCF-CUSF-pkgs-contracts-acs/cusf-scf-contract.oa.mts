/* eslint-disable */
import { emptyConnectionPackage } from "../IN-CS2-classes/emptyConnectionPackage.oa.mjs";
// export { emptyConnectionPackage } from "../IN-CS2-classes/emptyConnectionPackage.oa.mjs";
import { basic_cusf_scf_package } from "../IN-CS2-SCF-CUSF-pkgs-contracts-acs/basic-cusf-scf-package.oa.mjs";
// export { basic_cusf_scf_package } from "../IN-CS2-SCF-CUSF-pkgs-contracts-acs/basic-cusf-scf-package.oa.mjs";
import { activityTestPackage } from "../IN-CS2-SSF-SCF-pkgs-contracts-acs/activityTestPackage.oa.mjs";
// export { activityTestPackage } from "../IN-CS2-SSF-SCF-pkgs-contracts-acs/activityTestPackage.oa.mjs";
import { id_contract_scf_cusf } from "../IN-CS2-object-identifiers/id-contract-scf-cusf.va.mjs";
// export { id_contract_scf_cusf } from "../IN-CS2-object-identifiers/id-contract-scf-cusf.va.mjs";
import { type CONTRACT } from "../Remote-Operations-Information-Objects/CONTRACT.oca.mjs";


/**
 * @summary cusf_scf_contract
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * cusf-scf-contract CONTRACT ::= {
 *   CONNECTION             emptyConnectionPackage
 *   INITIATOR CONSUMER OF  {basic-cusf-scf-package}
 *   RESPONDER CONSUMER OF  {activityTestPackage}
 *   ID                     id-contract-scf-cusf
 * }
 * ```
 * 
 * @constant
 * @type {CONTRACT}
 * @implements {CONTRACT}
 */
export
const cusf_scf_contract: CONTRACT = {
    class: "CONTRACT",
    decoderFor: {
    },
    encoderFor: {
    },
    "&connection": emptyConnectionPackage /* OBJECT_FIELD_SETTING */,
    "&InitiatorConsumerOf": [ basic_cusf_scf_package, ] /* OBJECT_FIELD_SETTING */,
    "&InitiatorSupplierOf": [ activityTestPackage, ] /* OBJECT_FIELD_SETTING */,
    "&id": id_contract_scf_cusf /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
