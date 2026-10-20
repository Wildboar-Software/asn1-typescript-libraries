/* eslint-disable */
import { shadowSupplierContract } from "../DirectoryInformationShadowProtocol/shadowSupplierContract.oa.mjs";
import { type ROS_OBJECT_CLASS } from "../Remote-Operations-Information-Objects/ROS-OBJECT-CLASS.oca.mjs";
// export { shadowSupplierContract } from "../DirectoryInformationShadowProtocol/shadowSupplierContract.oa.mjs";
import { id_rosObject_initiatingSupplierDSA } from "../ProtocolObjectIdentifiers/id-rosObject-initiatingSupplierDSA.va.mjs";
// export { id_rosObject_initiatingSupplierDSA } from "../ProtocolObjectIdentifiers/id-rosObject-initiatingSupplierDSA.va.mjs";


/**
 * @summary initiating_supplier_dsa
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * initiating-supplier-dsa ROS-OBJECT-CLASS ::= {
 *   INITIATES  {shadowSupplierContract}
 *   ID         id-rosObject-initiatingSupplierDSA
 * }
 * ```
 * 
 * @constant
 * @type {ROS_OBJECT_CLASS}
 * @implements {ROS_OBJECT_CLASS}
 */
export
const initiating_supplier_dsa: ROS_OBJECT_CLASS = {
    class: "ROS-OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Initiates": [ shadowSupplierContract, ] /* OBJECT_FIELD_SETTING */,
    "&id": id_rosObject_initiatingSupplierDSA /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
