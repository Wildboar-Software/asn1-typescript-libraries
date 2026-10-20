/* eslint-disable */
import { chainedRead } from "../DistributedOperations/chainedRead.oa.mjs";
// export { chainedRead } from "../DistributedOperations/chainedRead.oa.mjs";
import { chainedCompare } from "../DistributedOperations/chainedCompare.oa.mjs";
// export { chainedCompare } from "../DistributedOperations/chainedCompare.oa.mjs";
import { chainedAbandon } from "../DistributedOperations/chainedAbandon.oa.mjs";
// export { chainedAbandon } from "../DistributedOperations/chainedAbandon.oa.mjs";
import { id_package_chainedRead } from "../ProtocolObjectIdentifiers/id-package-chainedRead.va.mjs";
// export { id_package_chainedRead } from "../ProtocolObjectIdentifiers/id-package-chainedRead.va.mjs";
import { type OPERATION_PACKAGE } from "../Remote-Operations-Information-Objects/OPERATION-PACKAGE.oca.mjs";


/**
 * @summary chainedReadPackage
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * chainedReadPackage OPERATION-PACKAGE ::= {
 *   OPERATIONS  {chainedRead | chainedCompare | chainedAbandon}
 *   ID          id-package-chainedRead
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION_PACKAGE}
 * @implements {OPERATION_PACKAGE}
 */
export
const chainedReadPackage: OPERATION_PACKAGE = {
    class: "OPERATION-PACKAGE",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Both": [ chainedRead, chainedCompare, chainedAbandon, ] /* OBJECT_FIELD_SETTING */,
    "&id": id_package_chainedRead /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
