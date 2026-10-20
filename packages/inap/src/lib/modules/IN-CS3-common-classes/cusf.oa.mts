/* eslint-disable */
import { cs3cusfscfDPSpecificContract } from "../IN-CS3-SCF-CUSF-Protocol/cs3cusfscfDPSpecificContract.oa.mjs";
import { type ROS_OBJECT_CLASS } from "../Remote-Operations-Information-Objects/ROS-OBJECT-CLASS.oca.mjs";
// export { cs3cusfscfDPSpecificContract } from "../IN-CS3-SCF-CUSF-Protocol/cs3cusfscfDPSpecificContract.oa.mjs";
import { cs3cusfscfGenericContract } from "../IN-CS3-SCF-CUSF-Protocol/cs3cusfscfGenericContract.oa.mjs";
// export { cs3cusfscfGenericContract } from "../IN-CS3-SCF-CUSF-Protocol/cs3cusfscfGenericContract.oa.mjs";
import { cs3scfcusfDPSpecificContract } from "../IN-CS3-SCF-CUSF-Protocol/cs3scfcusfDPSpecificContract.oa.mjs";
// export { cs3scfcusfDPSpecificContract } from "../IN-CS3-SCF-CUSF-Protocol/cs3scfcusfDPSpecificContract.oa.mjs";
import { cs3scfcusfGenericContract } from "../IN-CS3-SCF-CUSF-Protocol/cs3scfcusfGenericContract.oa.mjs";
// export { cs3scfcusfGenericContract } from "../IN-CS3-SCF-CUSF-Protocol/cs3scfcusfGenericContract.oa.mjs";
import { id_rosObject_cusf } from "../IN-CS3-object-identifiers/id-rosObject-cusf.va.mjs";
// export { id_rosObject_cusf } from "../IN-CS3-object-identifiers/id-rosObject-cusf.va.mjs";


/**
 * @summary cusf
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * cusf ROS-OBJECT-CLASS ::= {
 *   INITIATES  {cs3cusfscfDPSpecificContract | cs3cusfscfGenericContract}
 *   RESPONDS   {cs3scfcusfDPSpecificContract | cs3scfcusfGenericContract}
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
    "&Initiates": [ cs3cusfscfDPSpecificContract, cs3cusfscfGenericContract, ] /* OBJECT_FIELD_SETTING */,
    "&Responds": [ cs3scfcusfDPSpecificContract, cs3scfcusfGenericContract, ] /* OBJECT_FIELD_SETTING */,
    "&id": id_rosObject_cusf /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
