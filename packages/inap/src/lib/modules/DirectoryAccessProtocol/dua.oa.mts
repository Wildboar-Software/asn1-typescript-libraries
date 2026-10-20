/* eslint-disable */
import { dapContract } from "../DirectoryAccessProtocol/dapContract.oa.mjs";
import { type ROS_OBJECT_CLASS } from "../Remote-Operations-Information-Objects/ROS-OBJECT-CLASS.oca.mjs";
// export { dapContract } from "../DirectoryAccessProtocol/dapContract.oa.mjs";
import { id_rosObject_dua } from "../ProtocolObjectIdentifiers/id-rosObject-dua.va.mjs";
// export { id_rosObject_dua } from "../ProtocolObjectIdentifiers/id-rosObject-dua.va.mjs";


/**
 * @summary dua
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * dua ROS-OBJECT-CLASS ::= {INITIATES  {dapContract}
 *                           ID         id-rosObject-dua
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
    "&Initiates": [ dapContract, ] /* OBJECT_FIELD_SETTING */,
    "&id": id_rosObject_dua /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
