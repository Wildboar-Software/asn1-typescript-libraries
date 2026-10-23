/* eslint-disable */
import { cusfscfDPSpecificContract } from "../IN-SCF-CUSF-Protocol/cusfscfDPSpecificContract.oa.mjs";
import { type ROS_OBJECT_CLASS } from "../Remote-Operations-Information-Objects/ROS-OBJECT-CLASS.oca.mjs";
// export { cusfscfDPSpecificContract } from "../IN-SCF-CUSF-Protocol/cusfscfDPSpecificContract.oa.mjs";
import { cusfscfGenericContract } from "../IN-SCF-CUSF-Protocol/cusfscfGenericContract.oa.mjs";
// export { cusfscfGenericContract } from "../IN-SCF-CUSF-Protocol/cusfscfGenericContract.oa.mjs";
import { scfcusfDPSpecificContract } from "../IN-SCF-CUSF-Protocol/scfcusfDPSpecificContract.oa.mjs";
// export { scfcusfDPSpecificContract } from "../IN-SCF-CUSF-Protocol/scfcusfDPSpecificContract.oa.mjs";
import { scfcusfGenericContract } from "../IN-SCF-CUSF-Protocol/scfcusfGenericContract.oa.mjs";
// export { scfcusfGenericContract } from "../IN-SCF-CUSF-Protocol/scfcusfGenericContract.oa.mjs";
import { id_rosObject_cusf } from "../IN-object-identifiers/id-rosObject-cusf.va.mjs";
// export { id_rosObject_cusf } from "../IN-object-identifiers/id-rosObject-cusf.va.mjs";


/**
 * @summary cusf
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * cusf ROS-OBJECT-CLASS ::= {
 *   INITIATES  {cusfscfDPSpecificContract | cusfscfGenericContract}
 *   RESPONDS   {scfcusfDPSpecificContract | scfcusfGenericContract}
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
    "&Initiates": [ cusfscfDPSpecificContract, cusfscfGenericContract, ] /* OBJECT_FIELD_SETTING */,
    "&Responds": [ scfcusfDPSpecificContract, scfcusfGenericContract, ] /* OBJECT_FIELD_SETTING */,
    "&id": id_rosObject_cusf /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
