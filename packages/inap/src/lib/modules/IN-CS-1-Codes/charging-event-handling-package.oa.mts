/* eslint-disable */
import { eventNotificationCharging } from "../IN-CS-1-Operations/eventNotificationCharging.oa.mjs";
// export { eventNotificationCharging } from "../IN-CS-1-Operations/eventNotificationCharging.oa.mjs";
import { requestNotificationChargingEvent } from "../IN-CS-1-Operations/requestNotificationChargingEvent.oa.mjs";
// export { requestNotificationChargingEvent } from "../IN-CS-1-Operations/requestNotificationChargingEvent.oa.mjs";
import { type OPERATION_PACKAGE } from "../Remote-Operations-Information-Objects/OPERATION-PACKAGE.oca.mjs";


/**
 * @summary charging_event_handling_package
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * charging-event-handling-package OPERATION-PACKAGE ::= {
 *   -- consumer is SSF
 *   CONSUMER INVOKES  {eventNotificationCharging}
 *   -- supplier is SCF
 *   SUPPLIER INVOKES  {requestNotificationChargingEvent}
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION_PACKAGE}
 * @implements {OPERATION_PACKAGE}
 */
export
const charging_event_handling_package: OPERATION_PACKAGE = {
    class: "OPERATION-PACKAGE",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Supplier": [ eventNotificationCharging, ] /* OBJECT_FIELD_SETTING */,
    "&Consumer": [ requestNotificationChargingEvent, ] /* OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
