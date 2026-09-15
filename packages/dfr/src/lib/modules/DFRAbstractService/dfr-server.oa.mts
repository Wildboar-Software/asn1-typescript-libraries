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
// export { dfr_contract } from "../DFRAbstractService/dfr-contract.oa.mjs";
import { id_dfr_server } from "../DFRObjectIdentifiers/id-dfr-server.va.mjs";
// export { id_dfr_server } from "../DFRObjectIdentifiers/id-dfr-server.va.mjs";


/**
 * @summary dfr_server
 * @description
 *
 * ROS-OBJECT-CLASS of the DFR-Server (supplier). ISO/IEC 10166-1:1991 §3.2.31.
 * Annex B: `id-dfr-server`.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * dfr-server ROS-OBJECT-CLASS ::= {
 *     RESPONDS    {dfr-contract}
 *     ID          id-dfr-server
 * }
 * ```
 * 
 * @constant
 * @type {ROS_OBJECT_CLASS}
 * @implements {ROS_OBJECT_CLASS}
 */
export
const dfr_server: ROS_OBJECT_CLASS = {
    class: "ROS-OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Responds": [ dfr_contract, ] /* OBJECT_FIELD_SETTING */,
    "&id": id_dfr_server /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
