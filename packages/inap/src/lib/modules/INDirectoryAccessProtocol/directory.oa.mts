/* eslint-disable */
import { dapContract } from "../INDirectoryAccessProtocol/dapContract.oa.mjs";
import { type ROS_OBJECT_CLASS } from "../Remote-Operations-Information-Objects/ROS-OBJECT-CLASS.oca.mjs";
// export { dapContract } from "../INDirectoryAccessProtocol/dapContract.oa.mjs";
import { id_rosObject_directory } from "../SDFProtocolObjectIdentifiers/id-rosObject-directory.va.mjs";
// export { id_rosObject_directory } from "../SDFProtocolObjectIdentifiers/id-rosObject-directory.va.mjs";


/**
 * @summary directory
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * directory ROS-OBJECT-CLASS ::= {
 *   RESPONDS  {dapContract}
 *   ID        id-rosObject-directory
 * }
 * ```
 * 
 * @constant
 * @type {ROS_OBJECT_CLASS}
 * @implements {ROS_OBJECT_CLASS}
 */
export
const directory: ROS_OBJECT_CLASS = {
    class: "ROS-OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Responds": [ dapContract, ] /* OBJECT_FIELD_SETTING */,
    "&id": id_rosObject_directory /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
