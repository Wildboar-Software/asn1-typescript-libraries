/* eslint-disable */
import { requestNotificationChargingEvent } from "../IN-CS3-SSF-SCF-ops-args/requestNotificationChargingEvent.oa.mjs";
// export { requestNotificationChargingEvent } from "../IN-CS3-SSF-SCF-ops-args/requestNotificationChargingEvent.oa.mjs";
import { eventNotificationCharging } from "../IN-CS3-SSF-SCF-ops-args/eventNotificationCharging.oa.mjs";
// export { eventNotificationCharging } from "../IN-CS3-SSF-SCF-ops-args/eventNotificationCharging.oa.mjs";
import { id_package_chargingEventHandling } from "../IN-CS3-object-identifiers/id-package-chargingEventHandling.va.mjs";
// export { id_package_chargingEventHandling } from "../IN-CS3-object-identifiers/id-package-chargingEventHandling.va.mjs";
import { type OPERATION_PACKAGE } from "../Remote-Operations-Information-Objects/OPERATION-PACKAGE.oca.mjs";


/**
 * @summary chargingEventHandlingPackage
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * chargingEventHandlingPackage OPERATION-PACKAGE ::= {
 *   CONSUMER INVOKES  {requestNotificationChargingEvent}
 *   SUPPLIER INVOKES  {eventNotificationCharging}
 *   ID                id-package-chargingEventHandling
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION_PACKAGE}
 * @implements {OPERATION_PACKAGE}
 */
export
const chargingEventHandlingPackage: OPERATION_PACKAGE = {
    class: "OPERATION-PACKAGE",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Supplier": [ requestNotificationChargingEvent, ] /* OBJECT_FIELD_SETTING */,
    "&Consumer": [ eventNotificationCharging, ] /* OBJECT_FIELD_SETTING */,
    "&id": id_package_chargingEventHandling /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
