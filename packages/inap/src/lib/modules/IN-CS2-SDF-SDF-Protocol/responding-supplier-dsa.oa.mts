/* eslint-disable */
import { shadowConsumerContract } from "../IN-CS2-SDF-SDF-Protocol/shadowConsumerContract.oa.mjs";
import { type ROS_OBJECT_CLASS } from "../Remote-Operations-Information-Objects/ROS-OBJECT-CLASS.oca.mjs";
// export { shadowConsumerContract } from "../IN-CS2-SDF-SDF-Protocol/shadowConsumerContract.oa.mjs";
import { id_rosObject_respondingSupplierDSA } from "../IN-CS2-object-identifiers/id-rosObject-respondingSupplierDSA.va.mjs";
// export { id_rosObject_respondingSupplierDSA } from "../IN-CS2-object-identifiers/id-rosObject-respondingSupplierDSA.va.mjs";


/**
 * @summary responding_supplier_dsa
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * responding-supplier-dsa ROS-OBJECT-CLASS ::= {
 *   RESPONDS  {shadowConsumerContract}
 *   ID        id-rosObject-respondingSupplierDSA
 * }
 * ```
 * 
 * @constant
 * @type {ROS_OBJECT_CLASS}
 * @implements {ROS_OBJECT_CLASS}
 */
export
const responding_supplier_dsa: ROS_OBJECT_CLASS = {
    class: "ROS-OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Responds": [ shadowConsumerContract, ] /* OBJECT_FIELD_SETTING */,
    "&id": id_rosObject_respondingSupplierDSA /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
