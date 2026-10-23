/* eslint-disable */
import { activationReceivedAndAuthorized } from "../IN-SCF-CUSF-Operations/activationReceivedAndAuthorized.oa.mjs";
// export { activationReceivedAndAuthorized } from "../IN-SCF-CUSF-Operations/activationReceivedAndAuthorized.oa.mjs";
import { componentReceived } from "../IN-SCF-CUSF-Operations/componentReceived.oa.mjs";
// export { componentReceived } from "../IN-SCF-CUSF-Operations/componentReceived.oa.mjs";
import { associationReleaseRequested } from "../IN-SCF-CUSF-Operations/associationReleaseRequested.oa.mjs";
// export { associationReleaseRequested } from "../IN-SCF-CUSF-Operations/associationReleaseRequested.oa.mjs";
import { id_package_cusfTDPSpecificInvocation } from "../IN-object-identifiers/id-package-cusfTDPSpecificInvocation.va.mjs";
// export { id_package_cusfTDPSpecificInvocation } from "../IN-object-identifiers/id-package-cusfTDPSpecificInvocation.va.mjs";
import { type OPERATION_PACKAGE } from "../Remote-Operations-Information-Objects/OPERATION-PACKAGE.oca.mjs";


/**
 * @summary cusfTDPSpecificInvocationPackage
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * cusfTDPSpecificInvocationPackage OPERATION-PACKAGE ::= {
 *   CONSUMER INVOKES
 *     {activationReceivedAndAuthorized | componentReceived |
 *       associationReleaseRequested}
 *   ID                id-package-cusfTDPSpecificInvocation
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION_PACKAGE}
 * @implements {OPERATION_PACKAGE}
 */
export
const cusfTDPSpecificInvocationPackage: OPERATION_PACKAGE = {
    class: "OPERATION-PACKAGE",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Supplier": [ activationReceivedAndAuthorized, componentReceived, associationReleaseRequested, ] /* OBJECT_FIELD_SETTING */,
    "&id": id_package_cusfTDPSpecificInvocation /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
