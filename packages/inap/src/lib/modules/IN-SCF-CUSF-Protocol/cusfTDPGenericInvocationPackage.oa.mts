/* eslint-disable */
import { initialAssociationDP } from "../IN-SCF-CUSF-Operations/initialAssociationDP.oa.mjs";
// export { initialAssociationDP } from "../IN-SCF-CUSF-Operations/initialAssociationDP.oa.mjs";
import { id_package_cusfTDPGenericInvocation } from "../IN-object-identifiers/id-package-cusfTDPGenericInvocation.va.mjs";
// export { id_package_cusfTDPGenericInvocation } from "../IN-object-identifiers/id-package-cusfTDPGenericInvocation.va.mjs";
import { type OPERATION_PACKAGE } from "../Remote-Operations-Information-Objects/OPERATION-PACKAGE.oca.mjs";


/**
 * @summary cusfTDPGenericInvocationPackage
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * cusfTDPGenericInvocationPackage OPERATION-PACKAGE ::= {
 *   CONSUMER INVOKES  {initialAssociationDP}
 *   ID                id-package-cusfTDPGenericInvocation
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION_PACKAGE}
 * @implements {OPERATION_PACKAGE}
 */
export
const cusfTDPGenericInvocationPackage: OPERATION_PACKAGE = {
    class: "OPERATION-PACKAGE",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Supplier": [ initialAssociationDP, ] /* OBJECT_FIELD_SETTING */,
    "&id": id_package_cusfTDPGenericInvocation /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
