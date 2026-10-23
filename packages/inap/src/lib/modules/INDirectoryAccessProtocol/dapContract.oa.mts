/* eslint-disable */
import { dapConnectionPackage } from "../INDirectoryAccessProtocol/dapConnectionPackage.oa.mjs";
// export { dapConnectionPackage } from "../INDirectoryAccessProtocol/dapConnectionPackage.oa.mjs";
import { searchPackage } from "../INDirectoryAccessProtocol/searchPackage.oa.mjs";
// export { searchPackage } from "../INDirectoryAccessProtocol/searchPackage.oa.mjs";
import { modifyPackage } from "../INDirectoryAccessProtocol/modifyPackage.oa.mjs";
// export { modifyPackage } from "../INDirectoryAccessProtocol/modifyPackage.oa.mjs";
import { id_contract_dap } from "../SDFProtocolObjectIdentifiers/id-contract-dap.va.mjs";
// export { id_contract_dap } from "../SDFProtocolObjectIdentifiers/id-contract-dap.va.mjs";
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
