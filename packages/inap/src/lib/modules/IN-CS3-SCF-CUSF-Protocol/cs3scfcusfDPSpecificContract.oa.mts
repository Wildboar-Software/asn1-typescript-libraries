/* eslint-disable */
import { cusfSCFInitiationPackage } from "../IN-CS3-SCF-CUSF-Protocol/cusfSCFInitiationPackage.oa.mjs";
// export { cusfSCFInitiationPackage } from "../IN-CS3-SCF-CUSF-Protocol/cusfSCFInitiationPackage.oa.mjs";
import { activityTestPackage } from "../IN-CS3-SSF-SCF-pkgs-contracts-acs/activityTestPackage.oa.mjs";
// export { activityTestPackage } from "../IN-CS3-SSF-SCF-pkgs-contracts-acs/activityTestPackage.oa.mjs";
import { cusfDPSpecificEventHandlingPackage } from "../IN-CS3-SCF-CUSF-Protocol/cusfDPSpecificEventHandlingPackage.oa.mjs";
// export { cusfDPSpecificEventHandlingPackage } from "../IN-CS3-SCF-CUSF-Protocol/cusfDPSpecificEventHandlingPackage.oa.mjs";
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
import { id_contract_cs3scfcusfDPSpecific } from "../IN-CS3-object-identifiers/id-contract-cs3scfcusfDPSpecific.va.mjs";
// export { id_contract_cs3scfcusfDPSpecific } from "../IN-CS3-object-identifiers/id-contract-cs3scfcusfDPSpecific.va.mjs";
import { type CONTRACT } from "../Remote-Operations-Information-Objects/CONTRACT.oca.mjs";


/**
 * @summary cs3scfcusfDPSpecificContract
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * cs3scfcusfDPSpecificContract CONTRACT ::= {
 *   INITIATOR CONSUMER OF
 *     {cusfSCFInitiationPackage |
 *       activityTestPackage |
 *       cusfDPSpecificEventHandlingPackage
 *       | cusfComponentHandlingPackage |
 *       cusfContinuePackage |
 *       cusfConnectPackage |
 *       cusfReleasePackage |
 *       uSIHandlingPackage}
 *   ID                     id-contract-cs3scfcusfDPSpecific
 * }
 * ```
 * 
 * @constant
 * @type {CONTRACT}
 * @implements {CONTRACT}
 */
export
const cs3scfcusfDPSpecificContract: CONTRACT = {
    class: "CONTRACT",
    decoderFor: {
    },
    encoderFor: {
    },
    "&InitiatorConsumerOf": [ cusfSCFInitiationPackage, activityTestPackage, cusfDPSpecificEventHandlingPackage, cusfComponentHandlingPackage, cusfContinuePackage, cusfConnectPackage, cusfReleasePackage, uSIHandlingPackage, ] /* OBJECT_FIELD_SETTING */,
    "&id": id_contract_cs3scfcusfDPSpecific /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
