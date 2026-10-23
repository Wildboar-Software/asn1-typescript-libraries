/* eslint-disable */
import { shadowSupplierContract } from "../IN-CS2-SDF-SDF-Protocol/shadowSupplierContract.oa.mjs";
import { type ROS_OBJECT_CLASS } from "../Remote-Operations-Information-Objects/ROS-OBJECT-CLASS.oca.mjs";
// export { shadowSupplierContract } from "../IN-CS2-SDF-SDF-Protocol/shadowSupplierContract.oa.mjs";
import { id_rosObject_respondingConsumerDSA } from "../IN-CS2-object-identifiers/id-rosObject-respondingConsumerDSA.va.mjs";
// export { id_rosObject_respondingConsumerDSA } from "../IN-CS2-object-identifiers/id-rosObject-respondingConsumerDSA.va.mjs";


/**
 * @summary responding_consumer_dsa
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * responding-consumer-dsa ROS-OBJECT-CLASS ::= {
 *   RESPONDS  {shadowSupplierContract}
 *   ID        id-rosObject-respondingConsumerDSA
 * }
 * ```
 * 
 * @constant
 * @type {ROS_OBJECT_CLASS}
 * @implements {ROS_OBJECT_CLASS}
 */
export
const responding_consumer_dsa: ROS_OBJECT_CLASS = {
    class: "ROS-OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Responds": [ shadowSupplierContract, ] /* OBJECT_FIELD_SETTING */,
    "&id": id_rosObject_respondingConsumerDSA /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
