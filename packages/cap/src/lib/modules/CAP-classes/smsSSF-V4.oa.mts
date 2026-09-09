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
import { cap4SMS } from "../CAP-smsSSF-gsmSCF-pkgs-contracts-acs/cap4SMS.oa.mjs";
// export { cap4SMS } from "../CAP-smsSSF-gsmSCF-pkgs-contracts-acs/cap4SMS.oa.mjs";
import { id_rosObject_smsSSF_V4 } from "../CAP-object-identifiers/id-rosObject-smsSSF-V4.va.mjs";
// export { id_rosObject_smsSSF_V4 } from "../CAP-object-identifiers/id-rosObject-smsSSF-V4.va.mjs";


/**
 * @summary smsSSF_V4
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * smsSSF-V4 ROS-OBJECT-CLASS ::= {
 *     INITIATES    {cap4SMS}
 *     ID        id-rosObject-smsSSF-V4}
 * ```
 * 
 * @constant
 * @type {ROS_OBJECT_CLASS}
 * @implements {ROS_OBJECT_CLASS}
 */
export
const smsSSF_V4: ROS_OBJECT_CLASS = {
    class: "ROS-OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Initiates": [ cap4SMS, ] /* OBJECT_FIELD_SETTING */,
    "&id": id_rosObject_smsSSF_V4 /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
