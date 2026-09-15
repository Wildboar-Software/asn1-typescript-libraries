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
import { GenericGprsSSF_gsmSCF_PDUs, _decode_GenericGprsSSF_gsmSCF_PDUs, _encode_GenericGprsSSF_gsmSCF_PDUs } from "../CAP-gprsSSF-gsmSCF-pkgs-contracts-acs/GenericGprsSSF-gsmSCF-PDUs.ta.mjs";
// export { GenericGprsSSF_gsmSCF_PDUs, _decode_GenericGprsSSF_gsmSCF_PDUs, _encode_GenericGprsSSF_gsmSCF_PDUs } from "../CAP-gprsSSF-gsmSCF-pkgs-contracts-acs/GenericGprsSSF-gsmSCF-PDUs.ta.mjs";
import { id_as_gprsSSF_gsmSCF_AS } from "../CAP-object-identifiers/id-as-gprsSSF-gsmSCF-AS.va.mjs";
// export { id_as_gprsSSF_gsmSCF_AS } from "../CAP-object-identifiers/id-as-gprsSSF-gsmSCF-AS.va.mjs";


/**
 * @summary gprsSSF_gsmSCFAbstractSyntax
 * @description
 * 
 * Abstract syntax for `cap-gprssf-scfAC` (CAP from gprsSSF to gsmSCF). Type is
 * `GenericGprsSSF-gsmSCF-PDUs`. Bound set `cAPSpecificBoundSet`.
 * Abstract-syntax OID updated in Rel-6. (3GPP TS 29.078 V19.0.0 clause 8.2).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * gprsSSF-gsmSCFAbstractSyntax ABSTRACT-SYNTAX ::= {
 *     GenericGprsSSF-gsmSCF-PDUs
 *     IDENTIFIED BY    id-as-gprsSSF-gsmSCF-AS}
 * ```
 * 
 * @constant
 * @type {ABSTRACT_SYNTAX<GenericGprsSSF_gsmSCF_PDUs>}
 * @implements {ABSTRACT_SYNTAX<GenericGprsSSF_gsmSCF_PDUs>}
 */
export
const gprsSSF_gsmSCFAbstractSyntax: ABSTRACT_SYNTAX<GenericGprsSSF_gsmSCF_PDUs> = {
    class: "ABSTRACT-SYNTAX",
    decoderFor: {
        "&Type": _decode_GenericGprsSSF_gsmSCF_PDUs,
    },
    encoderFor: {
        "&Type": _encode_GenericGprsSSF_gsmSCF_PDUs,
    },
    "&id": id_as_gprsSSF_gsmSCF_AS /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&property": undefined,
};

/* eslint-enable */
