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
import { cap3SMS } from "../CAP-smsSSF-gsmSCF-pkgs-contracts-acs/cap3SMS.oa.mjs";
// export { cap3SMS } from "../CAP-smsSSF-gsmSCF-pkgs-contracts-acs/cap3SMS.oa.mjs";
import { id_rosObject_smsSSF_V3 } from "../CAP-object-identifiers/id-rosObject-smsSSF-V3.va.mjs";
// export { id_rosObject_smsSSF_V3 } from "../CAP-object-identifiers/id-rosObject-smsSSF-V3.va.mjs";


/**
 * @summary smsSSF_V3
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * smsSSF-V3 ROS-OBJECT-CLASS ::= {
 *     INITIATES    {cap3SMS}
 *     ID        id-rosObject-smsSSF-V3}
 * ```
 * 
 * @constant
 * @type {ROS_OBJECT_CLASS}
 * @implements {ROS_OBJECT_CLASS}
 */
export
const smsSSF_V3: ROS_OBJECT_CLASS = {
    class: "ROS-OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Initiates": [ cap3SMS, ] /* OBJECT_FIELD_SETTING */,
    "&id": id_rosObject_smsSSF_V3 /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
