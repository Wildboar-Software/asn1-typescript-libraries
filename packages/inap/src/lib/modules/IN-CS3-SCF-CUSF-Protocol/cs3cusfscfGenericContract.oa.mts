/* eslint-disable */
import { cusfTDPGenericInvocationPackage } from "../IN-CS3-SCF-CUSF-Protocol/cusfTDPGenericInvocationPackage.oa.mjs";
// export { cusfTDPGenericInvocationPackage } from "../IN-CS3-SCF-CUSF-Protocol/cusfTDPGenericInvocationPackage.oa.mjs";
import { activityTestPackage } from "../IN-CS3-SSF-SCF-pkgs-contracts-acs/activityTestPackage.oa.mjs";
// export { activityTestPackage } from "../IN-CS3-SSF-SCF-pkgs-contracts-acs/activityTestPackage.oa.mjs";
import { cusfGenericEventHandlingPackage } from "../IN-CS3-SCF-CUSF-Protocol/cusfGenericEventHandlingPackage.oa.mjs";
// export { cusfGenericEventHandlingPackage } from "../IN-CS3-SCF-CUSF-Protocol/cusfGenericEventHandlingPackage.oa.mjs";
import { cusfComponentHandlingPackage } from "../IN-CS3-SCF-CUSF-Protocol/cusfComponentHandlingPackage.oa.mjs";
// export { cusfComponentHandlingPackage } from "../IN-CS3-SCF-CUSF-Protocol/cusfComponentHandlingPackage.oa.mjs";
import { cusfContinuePackage } from "../IN-CS3-SCF-CUSF-Protocol/cusfContinuePackage.oa.mjs";
// export { cusfContinuePackage } from "../IN-CS3-SCF-CUSF-Protocol/cusfContinuePackage.oa.mjs";
import { cusfConnectPackage } from "../IN-CS3-SCF-CUSF-Protocol/cusfConnectPackage.oa.mjs";
// export { cusfConnectPackage } from "../IN-CS3-SCF-CUSF-Protocol/cusfConnectPackage.oa.mjs";
import { cusfReleasePackage } from "../IN-CS3-SCF-CUSF-Protocol/cusfReleasePackage.oa.mjs";
// export { cusfReleasePackage } from "../IN-CS3-SCF-CUSF-Protocol/cusfReleasePackage.oa.mjs";
import { uSIHandlingPackage } from "../IN-CS3-SSF-SCF-pkgs-contracts-acs/uSIHandlingPackage.oa.mjs";
// export { uSIHandlingPackage } from "../IN-CS3-SSF-SCF-pkgs-contracts-acs/uSIHandlingPackage.oa.mjs";
import { id_contract_cs3cusfscfGeneric } from "../IN-CS3-object-identifiers/id-contract-cs3cusfscfGeneric.va.mjs";
// export { id_contract_cs3cusfscfGeneric } from "../IN-CS3-object-identifiers/id-contract-cs3cusfscfGeneric.va.mjs";
import { type CONTRACT } from "../Remote-Operations-Information-Objects/CONTRACT.oca.mjs";


/**
 * @summary cs3cusfscfGenericContract
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * cs3cusfscfGenericContract CONTRACT ::= {
 *   INITIATOR CONSUMER OF
 *     {cusfTDPGenericInvocationPackage}
 *   RESPONDER CONSUMER OF
 *     {activityTestPackage |
 *       cusfGenericEventHandlingPackage |
 *       cusfComponentHandlingPackage |
 *       cusfContinuePackage |
 *       cusfConnectPackage |
 *       cusfReleasePackage |
 *       uSIHandlingPackage}
 *   ID                     id-contract-cs3cusfscfGeneric
 * }
 * ```
 * 
 * @constant
 * @type {CONTRACT}
 * @implements {CONTRACT}
 */
export
const cs3cusfscfGenericContract: CONTRACT = {
    class: "CONTRACT",
    decoderFor: {
    },
    encoderFor: {
    },
    "&InitiatorConsumerOf": [ cusfTDPGenericInvocationPackage, ] /* OBJECT_FIELD_SETTING */,
    "&InitiatorSupplierOf": [ activityTestPackage, cusfGenericEventHandlingPackage, cusfComponentHandlingPackage, cusfContinuePackage, cusfConnectPackage, cusfReleasePackage, uSIHandlingPackage, ] /* OBJECT_FIELD_SETTING */,
    "&id": id_contract_cs3cusfscfGeneric /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
