/* eslint-disable */
import { initiateAssociation } from "../IN-CS2-SCF-CUSF-ops-args/initiateAssociation.oa.mjs";
// export { initiateAssociation } from "../IN-CS2-SCF-CUSF-ops-args/initiateAssociation.oa.mjs";
import { sendComponent } from "../IN-CS2-SCF-CUSF-ops-args/sendComponent.oa.mjs";
// export { sendComponent } from "../IN-CS2-SCF-CUSF-ops-args/sendComponent.oa.mjs";
import { releaseAssociation } from "../IN-CS2-SCF-CUSF-ops-args/releaseAssociation.oa.mjs";
// export { releaseAssociation } from "../IN-CS2-SCF-CUSF-ops-args/releaseAssociation.oa.mjs";
import { requestReportBCUSMEvent } from "../IN-CS2-SCF-CUSF-ops-args/requestReportBCUSMEvent.oa.mjs";
// export { requestReportBCUSMEvent } from "../IN-CS2-SCF-CUSF-ops-args/requestReportBCUSMEvent.oa.mjs";
import { componentReceived } from "../IN-CS2-SCF-CUSF-ops-args/componentReceived.oa.mjs";
// export { componentReceived } from "../IN-CS2-SCF-CUSF-ops-args/componentReceived.oa.mjs";
import { associationReleaseRequested } from "../IN-CS2-SCF-CUSF-ops-args/associationReleaseRequested.oa.mjs";
// export { associationReleaseRequested } from "../IN-CS2-SCF-CUSF-ops-args/associationReleaseRequested.oa.mjs";
import { id_package_basic_scf_cusf } from "../IN-CS2-object-identifiers/id-package-basic-scf-cusf.va.mjs";
// export { id_package_basic_scf_cusf } from "../IN-CS2-object-identifiers/id-package-basic-scf-cusf.va.mjs";
import { type OPERATION_PACKAGE } from "../Remote-Operations-Information-Objects/OPERATION-PACKAGE.oca.mjs";


/**
 * @summary basic_scf_cusf_package
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * basic-scf-cusf-package OPERATION-PACKAGE ::= {
 *   CONSUMER INVOKES
 *     {initiateAssociation | sendComponent |
 *       releaseAssociation | requestReportBCUSMEvent}
 *   SUPPLIER INVOKES
 *     {componentReceived | associationReleaseRequested}
 *   ID                id-package-basic-scf-cusf
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION_PACKAGE}
 * @implements {OPERATION_PACKAGE}
 */
export
const basic_scf_cusf_package: OPERATION_PACKAGE = {
    class: "OPERATION-PACKAGE",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Supplier": [ initiateAssociation, sendComponent, releaseAssociation, requestReportBCUSMEvent, ] /* OBJECT_FIELD_SETTING */,
    "&Consumer": [ componentReceived, associationReleaseRequested, ] /* OBJECT_FIELD_SETTING */,
    "&id": id_package_basic_scf_cusf /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
