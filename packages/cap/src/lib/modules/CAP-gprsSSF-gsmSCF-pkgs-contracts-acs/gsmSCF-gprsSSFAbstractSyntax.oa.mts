/* eslint-disable */
import {
    ABSTRACT_SYNTAX,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "@wildboar/asn1";
import { GenericGsmSCF_gprsSSF_PDUs, _decode_GenericGsmSCF_gprsSSF_PDUs, _encode_GenericGsmSCF_gprsSSF_PDUs } from "../CAP-gprsSSF-gsmSCF-pkgs-contracts-acs/GenericGsmSCF-gprsSSF-PDUs.ta.mjs";
// export { GenericGsmSCF_gprsSSF_PDUs, _decode_GenericGsmSCF_gprsSSF_PDUs, _encode_GenericGsmSCF_gprsSSF_PDUs } from "../CAP-gprsSSF-gsmSCF-pkgs-contracts-acs/GenericGsmSCF-gprsSSF-PDUs.ta.mjs";
import { id_as_gsmSCF_gprsSSF_AS } from "../CAP-object-identifiers/id-as-gsmSCF-gprsSSF-AS.va.mjs";
// export { id_as_gsmSCF_gprsSSF_AS } from "../CAP-object-identifiers/id-as-gsmSCF-gprsSSF-AS.va.mjs";


/**
 * @summary gsmSCF_gprsSSFAbstractSyntax
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * gsmSCF-gprsSSFAbstractSyntax ABSTRACT-SYNTAX ::= {
 *     GenericGsmSCF-gprsSSF-PDUs
 *     IDENTIFIED BY    id-as-gsmSCF-gprsSSF-AS}
 * ```
 * 
 * @constant
 * @type {ABSTRACT_SYNTAX<GenericGsmSCF_gprsSSF_PDUs>}
 * @implements {ABSTRACT_SYNTAX<GenericGsmSCF_gprsSSF_PDUs>}
 */
export
const gsmSCF_gprsSSFAbstractSyntax: ABSTRACT_SYNTAX<GenericGsmSCF_gprsSSF_PDUs> = {
    class: "ABSTRACT-SYNTAX",
    decoderFor: {
        "&Type": _decode_GenericGsmSCF_gprsSSF_PDUs,
    },
    encoderFor: {
        "&Type": _encode_GenericGsmSCF_gprsSSF_PDUs,
    },
    "&id": id_as_gsmSCF_gprsSSF_AS /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&property": undefined,
};

/* eslint-enable */
