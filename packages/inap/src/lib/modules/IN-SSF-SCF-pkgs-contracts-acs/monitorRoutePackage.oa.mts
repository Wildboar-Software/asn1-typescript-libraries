/* eslint-disable */
import { monitorRouteRequest } from "../IN-SSF-SCF-ops-args/monitorRouteRequest.oa.mjs";
// export { monitorRouteRequest } from "../IN-SSF-SCF-ops-args/monitorRouteRequest.oa.mjs";
import { monitorRouteReport } from "../IN-SSF-SCF-ops-args/monitorRouteReport.oa.mjs";
// export { monitorRouteReport } from "../IN-SSF-SCF-ops-args/monitorRouteReport.oa.mjs";
import { id_package_monitorRoute } from "../IN-object-identifiers/id-package-monitorRoute.va.mjs";
// export { id_package_monitorRoute } from "../IN-object-identifiers/id-package-monitorRoute.va.mjs";
import { type OPERATION_PACKAGE } from "../Remote-Operations-Information-Objects/OPERATION-PACKAGE.oca.mjs";


/**
 * @summary monitorRoutePackage
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * monitorRoutePackage OPERATION-PACKAGE ::= {
 *   CONSUMER INVOKES  {monitorRouteRequest}
 *   SUPPLIER INVOKES  {monitorRouteReport}
 *   ID                id-package-monitorRoute
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION_PACKAGE}
 * @implements {OPERATION_PACKAGE}
 */
export
const monitorRoutePackage: OPERATION_PACKAGE = {
    class: "OPERATION-PACKAGE",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Supplier": [ monitorRouteRequest, ] /* OBJECT_FIELD_SETTING */,
    "&Consumer": [ monitorRouteReport, ] /* OBJECT_FIELD_SETTING */,
    "&id": id_package_monitorRoute /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
