/* eslint-disable */
import { cusfTDPSpecificInvocationPackage } from "../IN-SCF-CUSF-Protocol/cusfTDPSpecificInvocationPackage.oa.mjs";
// export { cusfTDPSpecificInvocationPackage } from "../IN-SCF-CUSF-Protocol/cusfTDPSpecificInvocationPackage.oa.mjs";
import { activityTestPackage } from "../IN-SSF-SCF-pkgs-contracts-acs/activityTestPackage.oa.mjs";
// export { activityTestPackage } from "../IN-SSF-SCF-pkgs-contracts-acs/activityTestPackage.oa.mjs";
import { cusfDPSpecificEventHandlingPackage } from "../IN-SCF-CUSF-Protocol/cusfDPSpecificEventHandlingPackage.oa.mjs";
// export { cusfDPSpecificEventHandlingPackage } from "../IN-SCF-CUSF-Protocol/cusfDPSpecificEventHandlingPackage.oa.mjs";
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
import { id_contract_cusfscfDPSpecific } from "../IN-object-identifiers/id-contract-cusfscfDPSpecific.va.mjs";
// export { id_contract_cusfscfDPSpecific } from "../IN-object-identifiers/id-contract-cusfscfDPSpecific.va.mjs";
import { type CONTRACT } from "../Remote-Operations-Information-Objects/CONTRACT.oca.mjs";


/**
 * @summary cusfscfDPSpecificContract
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * cusfscfDPSpecificContract CONTRACT ::= {
 *   INITIATOR CONSUMER OF
 *     {cusfTDPSpecificInvocationPackage}
 *   RESPONDER CONSUMER OF
 *     {activityTestPackage |
 *       cusfDPSpecificEventHandlingPackage
 *       | cusfComponentHandlingPackage |
 *       cusfContinuePackage |
 *       cusfConnectPackage |
 *       cusfReleasePackage |
 *       uSIHandlingPackage}
 *   ID                     id-contract-cusfscfDPSpecific
 * }
 * ```
 * 
 * @constant
 * @type {CONTRACT}
 * @implements {CONTRACT}
 */
export
const cusfscfDPSpecificContract: CONTRACT = {
    class: "CONTRACT",
    decoderFor: {
    },
    encoderFor: {
    },
    "&InitiatorConsumerOf": [ cusfTDPSpecificInvocationPackage, ] /* OBJECT_FIELD_SETTING */,
    "&InitiatorSupplierOf": [ activityTestPackage, cusfDPSpecificEventHandlingPackage, cusfComponentHandlingPackage, cusfContinuePackage, cusfConnectPackage, cusfReleasePackage, uSIHandlingPackage, ] /* OBJECT_FIELD_SETTING */,
    "&id": id_contract_cusfscfDPSpecific /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
