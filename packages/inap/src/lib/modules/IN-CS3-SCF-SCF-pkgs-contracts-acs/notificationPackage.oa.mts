/* eslint-disable */
import { requestNotification } from "../IN-CS3-SCF-SCF-ops-args/requestNotification.oa.mjs";
// export { requestNotification } from "../IN-CS3-SCF-SCF-ops-args/requestNotification.oa.mjs";
import { notificationProvided } from "../IN-CS3-SCF-SCF-ops-args/notificationProvided.oa.mjs";
// export { notificationProvided } from "../IN-CS3-SCF-SCF-ops-args/notificationProvided.oa.mjs";
import { confirmedNotificationProvided } from "../IN-CS3-SCF-SCF-ops-args/confirmedNotificationProvided.oa.mjs";
// export { confirmedNotificationProvided } from "../IN-CS3-SCF-SCF-ops-args/confirmedNotificationProvided.oa.mjs";
import { id_package_notification } from "../IN-CS3-object-identifiers/id-package-notification.va.mjs";
// export { id_package_notification } from "../IN-CS3-object-identifiers/id-package-notification.va.mjs";
import { type OPERATION_PACKAGE } from "../Remote-Operations-Information-Objects/OPERATION-PACKAGE.oca.mjs";


/**
 * @summary notificationPackage
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * notificationPackage OPERATION-PACKAGE ::= {
 *   CONSUMER INVOKES  {requestNotification}
 *   SUPPLIER INVOKES
 *     {notificationProvided | confirmedNotificationProvided}
 *   ID                id-package-notification
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION_PACKAGE}
 * @implements {OPERATION_PACKAGE}
 */
export
const notificationPackage: OPERATION_PACKAGE = {
    class: "OPERATION-PACKAGE",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Supplier": [ requestNotification, ] /* OBJECT_FIELD_SETTING */,
    "&Consumer": [ notificationProvided, confirmedNotificationProvided, ] /* OBJECT_FIELD_SETTING */,
    "&id": id_package_notification /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
