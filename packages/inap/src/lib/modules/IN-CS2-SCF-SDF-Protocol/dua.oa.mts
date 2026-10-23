/* eslint-disable */
import { dapContract } from "../IN-CS2-SCF-SDF-Protocol/dapContract.oa.mjs";
import { type ROS_OBJECT_CLASS } from "../Remote-Operations-Information-Objects/ROS-OBJECT-CLASS.oca.mjs";
// export { dapContract } from "../IN-CS2-SCF-SDF-Protocol/dapContract.oa.mjs";
import { dapExecuteContract } from "../IN-CS2-SCF-SDF-Protocol/dapExecuteContract.oa.mjs";
// export { dapExecuteContract } from "../IN-CS2-SCF-SDF-Protocol/dapExecuteContract.oa.mjs";
import { id_rosObject_dua } from "../IN-CS2-object-identifiers/id-rosObject-dua.va.mjs";
// export { id_rosObject_dua } from "../IN-CS2-object-identifiers/id-rosObject-dua.va.mjs";


/**
 * @summary dua
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * dua ROS-OBJECT-CLASS ::= {
 *   INITIATES  {dapContract | dapExecuteContract}
 *   ID         id-rosObject-dua
 * }
 * ```
 * 
 * @constant
 * @type {ROS_OBJECT_CLASS}
 * @implements {ROS_OBJECT_CLASS}
 */
export
const dua: ROS_OBJECT_CLASS = {
    class: "ROS-OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Initiates": [ dapContract, dapExecuteContract, ] /* OBJECT_FIELD_SETTING */,
    "&id": id_rosObject_dua /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
