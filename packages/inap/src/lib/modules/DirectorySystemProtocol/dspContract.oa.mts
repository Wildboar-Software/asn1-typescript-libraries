/* eslint-disable */
import { dspConnectionPackage } from "../DirectorySystemProtocol/dspConnectionPackage.oa.mjs";
// export { dspConnectionPackage } from "../DirectorySystemProtocol/dspConnectionPackage.oa.mjs";
import { chainedReadPackage } from "../DirectorySystemProtocol/chainedReadPackage.oa.mjs";
// export { chainedReadPackage } from "../DirectorySystemProtocol/chainedReadPackage.oa.mjs";
import { chainedSearchPackage } from "../DirectorySystemProtocol/chainedSearchPackage.oa.mjs";
// export { chainedSearchPackage } from "../DirectorySystemProtocol/chainedSearchPackage.oa.mjs";
import { chainedModifyPackage } from "../DirectorySystemProtocol/chainedModifyPackage.oa.mjs";
// export { chainedModifyPackage } from "../DirectorySystemProtocol/chainedModifyPackage.oa.mjs";
import { id_contract_dsp } from "../ProtocolObjectIdentifiers/id-contract-dsp.va.mjs";
// export { id_contract_dsp } from "../ProtocolObjectIdentifiers/id-contract-dsp.va.mjs";
import { type CONTRACT } from "../Remote-Operations-Information-Objects/CONTRACT.oca.mjs";


/**
 * @summary dspContract
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * dspContract CONTRACT ::= {
 *   CONNECTION     dspConnectionPackage
 *   OPERATIONS OF
 *     {chainedReadPackage | chainedSearchPackage | chainedModifyPackage}
 *   ID             id-contract-dsp
 * }
 * ```
 * 
 * @constant
 * @type {CONTRACT}
 * @implements {CONTRACT}
 */
export
const dspContract: CONTRACT = {
    class: "CONTRACT",
    decoderFor: {
    },
    encoderFor: {
    },
    "&connection": dspConnectionPackage /* OBJECT_FIELD_SETTING */,
    "&OperationsOf": [ chainedReadPackage, chainedSearchPackage, chainedModifyPackage, ] /* OBJECT_FIELD_SETTING */,
    "&id": id_contract_dsp /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
