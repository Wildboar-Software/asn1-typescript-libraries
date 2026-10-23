/* eslint-disable */
import { dspConnectionPackage } from "../IN-SDF-SDF-Protocol/dspConnectionPackage.oa.mjs";
// export { dspConnectionPackage } from "../IN-SDF-SDF-Protocol/dspConnectionPackage.oa.mjs";
import { inChainedModifyPackage } from "../IN-SDF-SDF-Protocol/inChainedModifyPackage.oa.mjs";
// export { inChainedModifyPackage } from "../IN-SDF-SDF-Protocol/inChainedModifyPackage.oa.mjs";
import { inChainedSearchPackage } from "../IN-SDF-SDF-Protocol/inChainedSearchPackage.oa.mjs";
// export { inChainedSearchPackage } from "../IN-SDF-SDF-Protocol/inChainedSearchPackage.oa.mjs";
import { chainedExecutePackage } from "../IN-SDF-SDF-Protocol/chainedExecutePackage.oa.mjs";
// export { chainedExecutePackage } from "../IN-SDF-SDF-Protocol/chainedExecutePackage.oa.mjs";
import { id_contract_indsp } from "../IN-object-identifiers/id-contract-indsp.va.mjs";
// export { id_contract_indsp } from "../IN-object-identifiers/id-contract-indsp.va.mjs";
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
 *     {inChainedModifyPackage | inChainedSearchPackage | chainedExecutePackage}
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
    "&InitiatorConsumerOf": [ inChainedModifyPackage, inChainedSearchPackage, chainedExecutePackage, ] /* OBJECT_FIELD_SETTING */,
    "&id": id_contract_indsp /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
