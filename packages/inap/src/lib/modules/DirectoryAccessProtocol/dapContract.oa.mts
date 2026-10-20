/* eslint-disable */
import { dapConnectionPackage } from "../DirectoryAccessProtocol/dapConnectionPackage.oa.mjs";
// export { dapConnectionPackage } from "../DirectoryAccessProtocol/dapConnectionPackage.oa.mjs";
import { readPackage } from "../DirectoryAccessProtocol/readPackage.oa.mjs";
// export { readPackage } from "../DirectoryAccessProtocol/readPackage.oa.mjs";
import { searchPackage } from "../DirectoryAccessProtocol/searchPackage.oa.mjs";
// export { searchPackage } from "../DirectoryAccessProtocol/searchPackage.oa.mjs";
import { modifyPackage } from "../DirectoryAccessProtocol/modifyPackage.oa.mjs";
// export { modifyPackage } from "../DirectoryAccessProtocol/modifyPackage.oa.mjs";
import { id_contract_dap } from "../ProtocolObjectIdentifiers/id-contract-dap.va.mjs";
// export { id_contract_dap } from "../ProtocolObjectIdentifiers/id-contract-dap.va.mjs";
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
 *   INITIATOR CONSUMER OF  {readPackage | searchPackage | modifyPackage}
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
    "&InitiatorConsumerOf": [ readPackage, searchPackage, modifyPackage, ] /* OBJECT_FIELD_SETTING */,
    "&id": id_contract_dap /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
