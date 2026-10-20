/* eslint-disable */
import { indspContract } from "../IN-SDF-SDF-Protocol/indspContract.oa.mjs";
import { type ROS_OBJECT_CLASS } from "../Remote-Operations-Information-Objects/ROS-OBJECT-CLASS.oca.mjs";
// export { indspContract } from "../IN-SDF-SDF-Protocol/indspContract.oa.mjs";
import { shadowConsumerContract } from "../IN-SDF-SDF-Protocol/shadowConsumerContract.oa.mjs";
// export { shadowConsumerContract } from "../IN-SDF-SDF-Protocol/shadowConsumerContract.oa.mjs";
import { shadowSupplierContract } from "../IN-SDF-SDF-Protocol/shadowSupplierContract.oa.mjs";
// export { shadowSupplierContract } from "../IN-SDF-SDF-Protocol/shadowSupplierContract.oa.mjs";
import { tfcContract } from "../IN-SCF-SDF-Protocol/tfcContract.oa.mjs";
// export { tfcContract } from "../IN-SCF-SDF-Protocol/tfcContract.oa.mjs";
import { dapContract } from "../IN-SCF-SDF-Protocol/dapContract.oa.mjs";
// export { dapContract } from "../IN-SCF-SDF-Protocol/dapContract.oa.mjs";
import { dapExecuteContract } from "../IN-SCF-SDF-Protocol/dapExecuteContract.oa.mjs";
// export { dapExecuteContract } from "../IN-SCF-SDF-Protocol/dapExecuteContract.oa.mjs";
import { id_rosObject_sdf } from "../IN-object-identifiers/id-rosObject-sdf.va.mjs";
// export { id_rosObject_sdf } from "../IN-object-identifiers/id-rosObject-sdf.va.mjs";


/**
 * @summary sdf
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * sdf ROS-OBJECT-CLASS ::= {
 *   INITIATES
 *     {indspContract | shadowConsumerContract | shadowSupplierContract |
 *       tfcContract}
 *   RESPONDS
 *     {dapContract | dapExecuteContract | indspContract | shadowConsumerContract
 *       | shadowSupplierContract | tfcContract}
 *   ID         id-rosObject-sdf
 * }
 * ```
 * 
 * @constant
 * @type {ROS_OBJECT_CLASS}
 * @implements {ROS_OBJECT_CLASS}
 */
export
const sdf: ROS_OBJECT_CLASS = {
    class: "ROS-OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Initiates": [ indspContract, shadowConsumerContract, shadowSupplierContract, tfcContract, ] /* OBJECT_FIELD_SETTING */,
    "&Responds": [ dapContract, dapExecuteContract, indspContract, shadowConsumerContract, shadowSupplierContract, tfcContract, ] /* OBJECT_FIELD_SETTING */,
    "&id": id_rosObject_sdf /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
