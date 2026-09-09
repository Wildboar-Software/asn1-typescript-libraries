import { type OPERATION_PACKAGE } from "../Remote-Operations-Information-Objects/OPERATION-PACKAGE.oca.mjs";
import { connectSMS } from "../CAP-SMS-ops-args/connectSMS.oa.mjs";
import { id_package_smsConnect } from "../CAP-object-identifiers/id-package-smsConnect.va.mjs";

/**
 * @summary smsConnectPackage
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * smsConnectPackage OPERATION-PACKAGE ::= {
 * 	CONSUMER INVOKES	{connectSMS {bound}}
 * 	ID			id-package-smsConnect}
 * ```
 *
 * @constant
 * @type {OPERATION_PACKAGE}
 * @implements {OPERATION_PACKAGE}
 */
export
const smsConnectPackage: OPERATION_PACKAGE = {
    class: "OPERATION-PACKAGE",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Supplier": [ connectSMS, ] /* OBJECT_FIELD_SETTING */,
    "&id": id_package_smsConnect /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};
