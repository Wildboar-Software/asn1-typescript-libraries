/* eslint-disable */
import { activationReceivedAndAuthorized } from "../IN-CS2-SCF-CUSF-ops-args/activationReceivedAndAuthorized.oa.mjs";
// export { activationReceivedAndAuthorized } from "../IN-CS2-SCF-CUSF-ops-args/activationReceivedAndAuthorized.oa.mjs";
import { componentReceived } from "../IN-CS2-SCF-CUSF-ops-args/componentReceived.oa.mjs";
// export { componentReceived } from "../IN-CS2-SCF-CUSF-ops-args/componentReceived.oa.mjs";
import { associationReleaseRequested } from "../IN-CS2-SCF-CUSF-ops-args/associationReleaseRequested.oa.mjs";
// export { associationReleaseRequested } from "../IN-CS2-SCF-CUSF-ops-args/associationReleaseRequested.oa.mjs";
import { sendComponent } from "../IN-CS2-SCF-CUSF-ops-args/sendComponent.oa.mjs";
// export { sendComponent } from "../IN-CS2-SCF-CUSF-ops-args/sendComponent.oa.mjs";
import { releaseAssociation } from "../IN-CS2-SCF-CUSF-ops-args/releaseAssociation.oa.mjs";
// export { releaseAssociation } from "../IN-CS2-SCF-CUSF-ops-args/releaseAssociation.oa.mjs";
import { requestReportBCUSMEvent } from "../IN-CS2-SCF-CUSF-ops-args/requestReportBCUSMEvent.oa.mjs";
// export { requestReportBCUSMEvent } from "../IN-CS2-SCF-CUSF-ops-args/requestReportBCUSMEvent.oa.mjs";
import { id_package_basic_cusf_scf } from "../IN-CS2-object-identifiers/id-package-basic-cusf-scf.va.mjs";
// export { id_package_basic_cusf_scf } from "../IN-CS2-object-identifiers/id-package-basic-cusf-scf.va.mjs";
import { type OPERATION_PACKAGE } from "../Remote-Operations-Information-Objects/OPERATION-PACKAGE.oca.mjs";


/**
 * @summary basic_cusf_scf_package
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * basic-cusf-scf-package OPERATION-PACKAGE ::= {
 *   CONSUMER INVOKES
 *     {activationReceivedAndAuthorized | componentReceived |
 *       associationReleaseRequested}
 *   SUPPLIER INVOKES
 *     {sendComponent | releaseAssociation |
 *       requestReportBCUSMEvent}
 *   ID                id-package-basic-cusf-scf
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION_PACKAGE}
 * @implements {OPERATION_PACKAGE}
 */
export
const basic_cusf_scf_package: OPERATION_PACKAGE = {
    class: "OPERATION-PACKAGE",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Supplier": [ activationReceivedAndAuthorized, componentReceived, associationReleaseRequested, ] /* OBJECT_FIELD_SETTING */,
    "&Consumer": [ sendComponent, releaseAssociation, requestReportBCUSMEvent, ] /* OBJECT_FIELD_SETTING */,
    "&id": id_package_basic_cusf_scf /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
