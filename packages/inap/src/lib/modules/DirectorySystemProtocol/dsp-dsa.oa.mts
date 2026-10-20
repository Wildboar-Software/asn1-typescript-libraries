/* eslint-disable */
import { dspContract } from "../DirectorySystemProtocol/dspContract.oa.mjs";
import { type ROS_OBJECT_CLASS } from "../Remote-Operations-Information-Objects/ROS-OBJECT-CLASS.oca.mjs";
// export { dspContract } from "../DirectorySystemProtocol/dspContract.oa.mjs";
import { id_rosObject_dspDSA } from "../ProtocolObjectIdentifiers/id-rosObject-dspDSA.va.mjs";
// export { id_rosObject_dspDSA } from "../ProtocolObjectIdentifiers/id-rosObject-dspDSA.va.mjs";


/**
 * @summary dsp_dsa
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * dsp-dsa ROS-OBJECT-CLASS ::= {BOTH  {dspContract}
 *                               ID    id-rosObject-dspDSA
 * }
 * ```
 * 
 * @constant
 * @type {ROS_OBJECT_CLASS}
 * @implements {ROS_OBJECT_CLASS}
 */
export
const dsp_dsa: ROS_OBJECT_CLASS = {
    class: "ROS-OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&InitiatesAndResponds": [ dspContract, ] /* OBJECT_FIELD_SETTING */,
    "&id": id_rosObject_dspDSA /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
