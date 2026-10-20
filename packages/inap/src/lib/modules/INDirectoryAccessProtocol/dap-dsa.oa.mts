/* eslint-disable */
import { dapContract } from "../INDirectoryAccessProtocol/dapContract.oa.mjs";
import { type ROS_OBJECT_CLASS } from "../Remote-Operations-Information-Objects/ROS-OBJECT-CLASS.oca.mjs";
// export { dapContract } from "../INDirectoryAccessProtocol/dapContract.oa.mjs";
import { id_rosObject_dapDSA } from "../SDFProtocolObjectIdentifiers/id-rosObject-dapDSA.va.mjs";
// export { id_rosObject_dapDSA } from "../SDFProtocolObjectIdentifiers/id-rosObject-dapDSA.va.mjs";


/**
 * @summary dap_dsa
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * dap-dsa ROS-OBJECT-CLASS ::= {
 *   RESPONDS  {dapContract}
 *   ID        id-rosObject-dapDSA
 * }
 * ```
 * 
 * @constant
 * @type {ROS_OBJECT_CLASS}
 * @implements {ROS_OBJECT_CLASS}
 */
export
const dap_dsa: ROS_OBJECT_CLASS = {
    class: "ROS-OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Responds": [ dapContract, ] /* OBJECT_FIELD_SETTING */,
    "&id": id_rosObject_dapDSA /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
