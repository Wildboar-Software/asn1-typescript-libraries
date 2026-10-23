/* eslint-disable */
import { cusfSCFInitiationPackage } from "../IN-SCF-CUSF-Protocol/cusfSCFInitiationPackage.oa.mjs";
// export { cusfSCFInitiationPackage } from "../IN-SCF-CUSF-Protocol/cusfSCFInitiationPackage.oa.mjs";
import { activityTestPackage } from "../IN-SSF-SCF-pkgs-contracts-acs/activityTestPackage.oa.mjs";
// export { activityTestPackage } from "../IN-SSF-SCF-pkgs-contracts-acs/activityTestPackage.oa.mjs";
import { cusfGenericEventHandlingPackage } from "../IN-SCF-CUSF-Protocol/cusfGenericEventHandlingPackage.oa.mjs";
// export { cusfGenericEventHandlingPackage } from "../IN-SCF-CUSF-Protocol/cusfGenericEventHandlingPackage.oa.mjs";
import { cusfComponentHandlingPackage } from "../IN-SCF-CUSF-Protocol/cusfComponentHandlingPackage.oa.mjs";
// export { cusfComponentHandlingPackage } from "../IN-SCF-CUSF-Protocol/cusfComponentHandlingPackage.oa.mjs";
import { cusfContinuePackage } from "../IN-SCF-CUSF-Protocol/cusfContinuePackage.oa.mjs";
// export { cusfContinuePackage } from "../IN-SCF-CUSF-Protocol/cusfContinuePackage.oa.mjs";
import { cusfConnectPackage } from "../IN-SCF-CUSF-Protocol/cusfConnectPackage.oa.mjs";
// export { cusfConnectPackage } from "../IN-SCF-CUSF-Protocol/cusfConnectPackage.oa.mjs";
import { cusfReleasePackage } from "../IN-SCF-CUSF-Protocol/cusfReleasePackage.oa.mjs";
// export { cusfReleasePackage } from "../IN-SCF-CUSF-Protocol/cusfReleasePackage.oa.mjs";
import { uSIHandlingPackage } from "../IN-SSF-SCF-pkgs-contracts-acs/uSIHandlingPackage.oa.mjs";
// export { uSIHandlingPackage } from "../IN-SSF-SCF-pkgs-contracts-acs/uSIHandlingPackage.oa.mjs";
import { id_contract_scfcusfGeneric } from "../IN-object-identifiers/id-contract-scfcusfGeneric.va.mjs";
// export { id_contract_scfcusfGeneric } from "../IN-object-identifiers/id-contract-scfcusfGeneric.va.mjs";
import { type CONTRACT } from "../Remote-Operations-Information-Objects/CONTRACT.oca.mjs";


/**
 * @summary scfcusfGenericContract
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * scfcusfGenericContract CONTRACT ::= {
 *   INITIATOR CONSUMER OF
 *     {cusfSCFInitiationPackage |
 *       activityTestPackage |
 *       cusfGenericEventHandlingPackage |
 *       cusfComponentHandlingPackage |
 *       cusfContinuePackage |
 *       cusfConnectPackage |
 *       cusfReleasePackage |
 *       uSIHandlingPackage}
 *   ID                     id-contract-scfcusfGeneric
 * }
 * ```
 * 
 * @constant
 * @type {CONTRACT}
 * @implements {CONTRACT}
 */
export
const scfcusfGenericContract: CONTRACT = {
    class: "CONTRACT",
    decoderFor: {
    },
    encoderFor: {
    },
    "&InitiatorConsumerOf": [ cusfSCFInitiationPackage, activityTestPackage, cusfGenericEventHandlingPackage, cusfComponentHandlingPackage, cusfContinuePackage, cusfConnectPackage, cusfReleasePackage, uSIHandlingPackage, ] /* OBJECT_FIELD_SETTING */,
    "&id": id_contract_scfcusfGeneric /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
