/* eslint-disable */
import { dsspContract } from "../IN-CS2-SCF-SCF-pkgs-contracts-acs/dsspContract.oa.mjs";
import { type ROS_OBJECT_CLASS } from "../Remote-Operations-Information-Objects/ROS-OBJECT-CLASS.oca.mjs";
// export { dsspContract } from "../IN-CS2-SCF-SCF-pkgs-contracts-acs/dsspContract.oa.mjs";
import { id_rosObject_dssp } from "../IN-CS2-object-identifiers/id-rosObject-dssp.va.mjs";
// export { id_rosObject_dssp } from "../IN-CS2-object-identifiers/id-rosObject-dssp.va.mjs";


/**
 * @summary dssp
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * dssp ROS-OBJECT-CLASS ::= {BOTH  {dsspContract}
 *                            ID    id-rosObject-dssp
 * }
 * ```
 * 
 * @constant
 * @type {ROS_OBJECT_CLASS}
 * @implements {ROS_OBJECT_CLASS}
 */
export
const dssp: ROS_OBJECT_CLASS = {
    class: "ROS-OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&InitiatesAndResponds": [ dsspContract, ] /* OBJECT_FIELD_SETTING */,
    "&id": id_rosObject_dssp /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
