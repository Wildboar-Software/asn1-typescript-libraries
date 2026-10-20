/* eslint-disable */
import { shadowConsumerContract } from "../DirectoryInformationShadowProtocol/shadowConsumerContract.oa.mjs";
import { type ROS_OBJECT_CLASS } from "../Remote-Operations-Information-Objects/ROS-OBJECT-CLASS.oca.mjs";
// export { shadowConsumerContract } from "../DirectoryInformationShadowProtocol/shadowConsumerContract.oa.mjs";
import { id_rosObject_initiatingConsumerDSA } from "../ProtocolObjectIdentifiers/id-rosObject-initiatingConsumerDSA.va.mjs";
// export { id_rosObject_initiatingConsumerDSA } from "../ProtocolObjectIdentifiers/id-rosObject-initiatingConsumerDSA.va.mjs";


/**
 * @summary initiating_consumer_dsa
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * initiating-consumer-dsa ROS-OBJECT-CLASS ::= {
 *   INITIATES  {shadowConsumerContract}
 *   ID         id-rosObject-initiatingConsumerDSA
 * }
 * ```
 * 
 * @constant
 * @type {ROS_OBJECT_CLASS}
 * @implements {ROS_OBJECT_CLASS}
 */
export
const initiating_consumer_dsa: ROS_OBJECT_CLASS = {
    class: "ROS-OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Initiates": [ shadowConsumerContract, ] /* OBJECT_FIELD_SETTING */,
    "&id": id_rosObject_initiatingConsumerDSA /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
