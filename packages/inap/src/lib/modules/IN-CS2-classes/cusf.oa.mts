/* eslint-disable */
import { cusf_scf_contract } from "../IN-CS2-SCF-CUSF-pkgs-contracts-acs/cusf-scf-contract.oa.mjs";
import { type ROS_OBJECT_CLASS } from "../Remote-Operations-Information-Objects/ROS-OBJECT-CLASS.oca.mjs";
// export { cusf_scf_contract } from "../IN-CS2-SCF-CUSF-pkgs-contracts-acs/cusf-scf-contract.oa.mjs";
import { scf_cusf_contract } from "../IN-CS2-SCF-CUSF-pkgs-contracts-acs/scf-cusf-contract.oa.mjs";
// export { scf_cusf_contract } from "../IN-CS2-SCF-CUSF-pkgs-contracts-acs/scf-cusf-contract.oa.mjs";
import { id_rosObject_cusf } from "../IN-CS2-object-identifiers/id-rosObject-cusf.va.mjs";
// export { id_rosObject_cusf } from "../IN-CS2-object-identifiers/id-rosObject-cusf.va.mjs";


/**
 * @summary cusf
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * cusf ROS-OBJECT-CLASS ::= {
 *   INITIATES  {cusf-scf-contract}
 *   RESPONDS   {scf-cusf-contract}
 *   ID         id-rosObject-cusf
 * }
 * ```
 * 
 * @constant
 * @type {ROS_OBJECT_CLASS}
 * @implements {ROS_OBJECT_CLASS}
 */
export
const cusf: ROS_OBJECT_CLASS = {
    class: "ROS-OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Initiates": [ cusf_scf_contract, ] /* OBJECT_FIELD_SETTING */,
    "&Responds": [ scf_cusf_contract, ] /* OBJECT_FIELD_SETTING */,
    "&id": id_rosObject_cusf /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
