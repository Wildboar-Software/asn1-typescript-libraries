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
import { dfr_contract } from "../DFRAbstractService/dfr-contract.oa.mjs";
import { id_dfr_user } from "../DFRObjectIdentifiers/id-dfr-user.va.mjs";


/**
 * @summary dfr_user
 * @description
 *
 * ROS-OBJECT-CLASS of the DFR-User (consumer). ISO/IEC 10166-1:1991 §3.2.33.
 * Annex B: `id-dfr-user`.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * dfr-user ROS-OBJECT-CLASS ::= {
 *     INITIATES   {dfr-contract}
 *     ID          id-dfr-user
 * }
 * ```
 * 
 * @constant
 * @type {ROS_OBJECT_CLASS}
 * @implements {ROS_OBJECT_CLASS}
 */
export
const dfr_user: ROS_OBJECT_CLASS = {
    class: "ROS-OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Initiates": [ dfr_contract, ] /* OBJECT_FIELD_SETTING */,
    "&id": id_dfr_user /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
