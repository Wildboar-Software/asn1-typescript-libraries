/* eslint-disable */
import {
    ABSTRACT_SYNTAX
} from "@wildboar/asn1";
import { RouteMonitoringSCF_SSF_PDUs, _decode_RouteMonitoringSCF_SSF_PDUs, _encode_RouteMonitoringSCF_SSF_PDUs } from "../IN-SSF-SCF-pkgs-contracts-acs/RouteMonitoringSCF-SSF-PDUs.ta.mjs";
// export { RouteMonitoringSCF_SSF_PDUs, _decode_RouteMonitoringSCF_SSF_PDUs, _encode_RouteMonitoringSCF_SSF_PDUs } from "../IN-SSF-SCF-pkgs-contracts-acs/RouteMonitoringSCF-SSF-PDUs.ta.mjs";
import { id_as_scf_ssfRouteMonitoringAS } from "../IN-object-identifiers/id-as-scf-ssfRouteMonitoringAS.va.mjs";
// export { id_as_scf_ssfRouteMonitoringAS } from "../IN-object-identifiers/id-as-scf-ssfRouteMonitoringAS.va.mjs";


/**
 * @summary scf_ssfRouteMonitoringAbstractSyntax
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * scf-ssfRouteMonitoringAbstractSyntax ABSTRACT-SYNTAX ::= {
 *   RouteMonitoringSCF-SSF-PDUs
 *   IDENTIFIED BY  id-as-scf-ssfRouteMonitoringAS
 * }
 * ```
 * 
 * @constant
 * @type {ABSTRACT_SYNTAX<RouteMonitoringSCF_SSF_PDUs>}
 * @implements {ABSTRACT_SYNTAX<RouteMonitoringSCF_SSF_PDUs>}
 */
export
const scf_ssfRouteMonitoringAbstractSyntax: ABSTRACT_SYNTAX<RouteMonitoringSCF_SSF_PDUs> = {
    class: "ABSTRACT-SYNTAX",
    decoderFor: {
        "&Type": _decode_RouteMonitoringSCF_SSF_PDUs,
    },
    encoderFor: {
        "&Type": _encode_RouteMonitoringSCF_SSF_PDUs,
    },
    "&id": id_as_scf_ssfRouteMonitoringAS /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&property": undefined,
};

/* eslint-enable */
