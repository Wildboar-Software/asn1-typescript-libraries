/* eslint-disable */
import { dspConnectionPackage } from "../IN-CS2-SDF-SDF-Protocol/dspConnectionPackage.oa.mjs";
// export { dspConnectionPackage } from "../IN-CS2-SDF-SDF-Protocol/dspConnectionPackage.oa.mjs";
import { inchainedModifyPackage } from "../IN-CS2-SDF-SDF-Protocol/inchainedModifyPackage.oa.mjs";
// export { inchainedModifyPackage } from "../IN-CS2-SDF-SDF-Protocol/inchainedModifyPackage.oa.mjs";
import { inchainedSearchPackage } from "../IN-CS2-SDF-SDF-Protocol/inchainedSearchPackage.oa.mjs";
// export { inchainedSearchPackage } from "../IN-CS2-SDF-SDF-Protocol/inchainedSearchPackage.oa.mjs";
import { chainedExecutePackage } from "../IN-CS2-SDF-SDF-Protocol/chainedExecutePackage.oa.mjs";
// export { chainedExecutePackage } from "../IN-CS2-SDF-SDF-Protocol/chainedExecutePackage.oa.mjs";
import { id_contract_indsp } from "../IN-CS2-object-identifiers/id-contract-indsp.va.mjs";
// export { id_contract_indsp } from "../IN-CS2-object-identifiers/id-contract-indsp.va.mjs";
import { type CONTRACT } from "../Remote-Operations-Information-Objects/CONTRACT.oca.mjs";


/**
 * @summary indspContract
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * indspContract CONTRACT ::= {
 *   CONNECTION             dspConnectionPackage
 *   INITIATOR CONSUMER OF
 *     {inchainedModifyPackage | inchainedSearchPackage | chainedExecutePackage}
 *   ID                     id-contract-indsp
 * }
 * ```
 * 
 * @constant
 * @type {CONTRACT}
 * @implements {CONTRACT}
 */
export
const indspContract: CONTRACT = {
    class: "CONTRACT",
    decoderFor: {
    },
    encoderFor: {
    },
    "&connection": dspConnectionPackage /* OBJECT_FIELD_SETTING */,
    "&InitiatorConsumerOf": [ inchainedModifyPackage, inchainedSearchPackage, chainedExecutePackage, ] /* OBJECT_FIELD_SETTING */,
    "&id": id_contract_indsp /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
