/* eslint-disable */
import { srf_scf_contract } from "../IN-SCF-SRF-pkgs-contracts-acs/srf-scf-contract.oa.mjs";
import { type ROS_OBJECT_CLASS } from "../Remote-Operations-Information-Objects/ROS-OBJECT-CLASS.oca.mjs";
// export { srf_scf_contract } from "../IN-SCF-SRF-pkgs-contracts-acs/srf-scf-contract.oa.mjs";
import { id_rosObject_srf } from "../IN-object-identifiers/id-rosObject-srf.va.mjs";
// export { id_rosObject_srf } from "../IN-object-identifiers/id-rosObject-srf.va.mjs";


/**
 * @summary srf
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * srf ROS-OBJECT-CLASS ::= {
 *   INITIATES  {srf-scf-contract}
 *   ID         id-rosObject-srf
 * }
 * ```
 * 
 * @constant
 * @type {ROS_OBJECT_CLASS}
 * @implements {ROS_OBJECT_CLASS}
 */
export
const srf: ROS_OBJECT_CLASS = {
    class: "ROS-OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Initiates": [ srf_scf_contract, ] /* OBJECT_FIELD_SETTING */,
    "&id": id_rosObject_srf /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
