/* eslint-disable */
import {
    ABSTRACT_SYNTAX
} from "@wildboar/asn1";
import { RouteMonitoringSSF_SCF_PDUs, _decode_RouteMonitoringSSF_SCF_PDUs, _encode_RouteMonitoringSSF_SCF_PDUs } from "../IN-SSF-SCF-pkgs-contracts-acs/RouteMonitoringSSF-SCF-PDUs.ta.mjs";
// export { RouteMonitoringSSF_SCF_PDUs, _decode_RouteMonitoringSSF_SCF_PDUs, _encode_RouteMonitoringSSF_SCF_PDUs } from "../IN-SSF-SCF-pkgs-contracts-acs/RouteMonitoringSSF-SCF-PDUs.ta.mjs";
import { id_as_ssf_scfRouteMonitoringAS } from "../IN-object-identifiers/id-as-ssf-scfRouteMonitoringAS.va.mjs";
// export { id_as_ssf_scfRouteMonitoringAS } from "../IN-object-identifiers/id-as-ssf-scfRouteMonitoringAS.va.mjs";


/**
 * @summary ssf_scfRouteMonitoringAbstractSyntax
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ssf-scfRouteMonitoringAbstractSyntax ABSTRACT-SYNTAX ::= {
 *   RouteMonitoringSSF-SCF-PDUs
 *   IDENTIFIED BY  id-as-ssf-scfRouteMonitoringAS
 * }
 * ```
 * 
 * @constant
 * @type {ABSTRACT_SYNTAX<RouteMonitoringSSF_SCF_PDUs>}
 * @implements {ABSTRACT_SYNTAX<RouteMonitoringSSF_SCF_PDUs>}
 */
export
const ssf_scfRouteMonitoringAbstractSyntax: ABSTRACT_SYNTAX<RouteMonitoringSSF_SCF_PDUs> = {
    class: "ABSTRACT-SYNTAX",
    decoderFor: {
        "&Type": _decode_RouteMonitoringSSF_SCF_PDUs,
    },
    encoderFor: {
        "&Type": _encode_RouteMonitoringSSF_SCF_PDUs,
    },
    "&id": id_as_ssf_scfRouteMonitoringAS /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&property": undefined,
};

/* eslint-enable */
