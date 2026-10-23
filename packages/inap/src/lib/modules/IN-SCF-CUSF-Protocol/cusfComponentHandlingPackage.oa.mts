/* eslint-disable */
import { sendComponent } from "../IN-SCF-CUSF-Operations/sendComponent.oa.mjs";
// export { sendComponent } from "../IN-SCF-CUSF-Operations/sendComponent.oa.mjs";
import { id_package_cusfComponentHandling } from "../IN-object-identifiers/id-package-cusfComponentHandling.va.mjs";
// export { id_package_cusfComponentHandling } from "../IN-object-identifiers/id-package-cusfComponentHandling.va.mjs";
import { type OPERATION_PACKAGE } from "../Remote-Operations-Information-Objects/OPERATION-PACKAGE.oca.mjs";


/**
 * @summary cusfComponentHandlingPackage
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * cusfComponentHandlingPackage OPERATION-PACKAGE ::= {
 *   CONSUMER INVOKES  {sendComponent}
 *   ID                id-package-cusfComponentHandling
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION_PACKAGE}
 * @implements {OPERATION_PACKAGE}
 */
export
const cusfComponentHandlingPackage: OPERATION_PACKAGE = {
    class: "OPERATION-PACKAGE",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Supplier": [ sendComponent, ] /* OBJECT_FIELD_SETTING */,
    "&id": id_package_cusfComponentHandling /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
