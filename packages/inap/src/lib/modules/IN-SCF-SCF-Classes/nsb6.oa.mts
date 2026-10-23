/* eslint-disable */
import { type SCF_SCF_BOUNDS } from "../IN-SCF-SCF-Classes/SCF-SCF-BOUNDS.oca.mjs";


/**
 * @summary nsb6
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * nsb6 SCF-SCF-BOUNDS ::= -- All values have been assigned for the purpose of ASN.1 checking only
 *   -- They should be replaced by appropriate values depending on
 *   -- network operators requirements and agreements
 *   {
 *   MAX-AMOUNT                   1 -- example value
 *   MAX-UNITS-PER-INTERVAL       1 -- example value
 *   MAX-TIME-PER-INTERVAL        1 -- example value
 *   MAX-SCALING-FACTOR           1 -- example value
 *   MAX-INITIAL-UNIT-INCREMENT   1 -- example value
 *   MAX-UNITS-PER-DATA-INTERVAL  1 -- example value
 *   MAX-SEGMENTS-PER-INTERVAL    1 -- example value
 *   MAX-INITIAL-TIME-INTERVAL    1 -- example value
 *   UB-NB-CALL                   1 -- example value
 *   MIN-RECEIVED-INFO            1 -- example value
 *   MAX-RECEIVED-INFO            1 -- example value
 *   MIN-SCF-ADDRESS              1 -- example value
 *   MAX-SCF-ADDRESS              1 -- example value
 *   MIN-FOR-SSI-INFORMATION      1 -- example value
 *   MAX-FOR-SSI-INFORMATION      5 -- example value
 *   MAX-FREE-CONTAINER           5
 *  -- example value--}
 * ```
 * 
 * @constant
 * @type {SCF_SCF_BOUNDS}
 * @implements {SCF_SCF_BOUNDS}
 */
export
const nsb6: SCF_SCF_BOUNDS = {
    class: "SCF-SCF-BOUNDS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&maxAmount": 1 /* OBJECT_FIELD_SETTING */,
    "&maxUnitsPerInterval": 1 /* OBJECT_FIELD_SETTING */,
    "&maxTimePerInterval": 1 /* OBJECT_FIELD_SETTING */,
    "&maxScalingFactor": 1 /* OBJECT_FIELD_SETTING */,
    "&maxInitialUnitIncrement": 1 /* OBJECT_FIELD_SETTING */,
    "&maxUnitsPerDataInterval": 1 /* OBJECT_FIELD_SETTING */,
    "&maxSegmentsPerDataInterval": 1 /* OBJECT_FIELD_SETTING */,
    "&maxInitialTimeInterval": 1 /* OBJECT_FIELD_SETTING */,
    "&ub-nbCall": 1 /* OBJECT_FIELD_SETTING */,
    "&minReceivedInfo": 1 /* OBJECT_FIELD_SETTING */,
    "&maxReceivedInfo": 1 /* OBJECT_FIELD_SETTING */,
    "&minScfAddress": 1 /* OBJECT_FIELD_SETTING */,
    "&maxScfAddress": 1 /* OBJECT_FIELD_SETTING */,
    "&minSSIInfoLength": 1 /* OBJECT_FIELD_SETTING */,
    "&maxSSIInfoLength": 5 /* OBJECT_FIELD_SETTING */,
    "&maxFreeContainer": 5 /* OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
