/* eslint-disable */
import { tfcConnectionPackage } from "../IN-SCF-SDF-Protocol/tfcConnectionPackage.oa.mjs";
// export { tfcConnectionPackage } from "../IN-SCF-SDF-Protocol/tfcConnectionPackage.oa.mjs";
import { tfcPackage } from "../IN-SCF-SDF-Protocol/tfcPackage.oa.mjs";
// export { tfcPackage } from "../IN-SCF-SDF-Protocol/tfcPackage.oa.mjs";
import { id_contract_tfc } from "../IN-object-identifiers/id-contract-tfc.va.mjs";
// export { id_contract_tfc } from "../IN-object-identifiers/id-contract-tfc.va.mjs";
import { type CONTRACT } from "../Remote-Operations-Information-Objects/CONTRACT.oca.mjs";


/**
 * @summary tfcContract
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * tfcContract CONTRACT ::= {
 *   CONNECTION             tfcConnectionPackage
 *   INITIATOR CONSUMER OF  {tfcPackage}
 *   ID                     id-contract-tfc
 * }
 * ```
 * 
 * @constant
 * @type {CONTRACT}
 * @implements {CONTRACT}
 */
export
const tfcContract: CONTRACT = {
    class: "CONTRACT",
    decoderFor: {
    },
    encoderFor: {
    },
    "&connection": tfcConnectionPackage /* OBJECT_FIELD_SETTING */,
    "&InitiatorConsumerOf": [ tfcPackage, ] /* OBJECT_FIELD_SETTING */,
    "&id": id_contract_tfc /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
