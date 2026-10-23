/* eslint-disable */
import { networkCapability } from "../IN-SCF-SCF-ops-args/networkCapability.oa.mjs";
// export { networkCapability } from "../IN-SCF-SCF-ops-args/networkCapability.oa.mjs";
import { id_package_networkCapability } from "../IN-object-identifiers/id-package-networkCapability.va.mjs";
// export { id_package_networkCapability } from "../IN-object-identifiers/id-package-networkCapability.va.mjs";
import { type OPERATION_PACKAGE } from "../Remote-Operations-Information-Objects/OPERATION-PACKAGE.oca.mjs";


/**
 * @summary networkCapabilityPackage
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * networkCapabilityPackage OPERATION-PACKAGE ::= {
 *   CONSUMER  INVOKES{networkCapability}
 *   ID        id-package-networkCapability
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION_PACKAGE}
 * @implements {OPERATION_PACKAGE}
 */
export
const networkCapabilityPackage: OPERATION_PACKAGE = {
    class: "OPERATION-PACKAGE",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Supplier": [ networkCapability, ] /* OBJECT_FIELD_SETTING */,
    "&id": id_package_networkCapability /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
