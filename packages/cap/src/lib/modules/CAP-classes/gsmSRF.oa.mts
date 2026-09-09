/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "@wildboar/asn1";
import { type ROS_OBJECT_CLASS } from "../Remote-Operations-Information-Objects/ROS-OBJECT-CLASS.oca.mjs";
import { gsmSRF_gsmSCF_contract } from "../CAP-gsmSCF-gsmSRF-pkgs-contracts-acs/gsmSRF-gsmSCF-contract.oa.mjs";
// export { gsmSRF_gsmSCF_contract } from "../CAP-gsmSCF-gsmSRF-pkgs-contracts-acs/gsmSRF-gsmSCF-contract.oa.mjs";
import { id_rosObject_gsmSRF } from "../CAP-object-identifiers/id-rosObject-gsmSRF.va.mjs";
// export { id_rosObject_gsmSRF } from "../CAP-object-identifiers/id-rosObject-gsmSRF.va.mjs";


/**
 * @summary gsmSRF
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * gsmSRF ROS-OBJECT-CLASS ::= {
 *     INITIATES    {gsmSRF-gsmSCF-contract}
 *     ID        id-rosObject-gsmSRF}
 * ```
 * 
 * @constant
 * @type {ROS_OBJECT_CLASS}
 * @implements {ROS_OBJECT_CLASS}
 */
export
const gsmSRF: ROS_OBJECT_CLASS = {
    class: "ROS-OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Initiates": [ gsmSRF_gsmSCF_contract, ] /* OBJECT_FIELD_SETTING */,
    "&id": id_rosObject_gsmSRF /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
