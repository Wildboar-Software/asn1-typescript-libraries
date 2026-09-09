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
import { GenericSSF_gsmSCF_PDUs, _decode_GenericSSF_gsmSCF_PDUs, _encode_GenericSSF_gsmSCF_PDUs } from "../CAP-gsmSSF-gsmSCF-pkgs-contracts-acs/GenericSSF-gsmSCF-PDUs.ta.mjs";
// export { GenericSSF_gsmSCF_PDUs, _decode_GenericSSF_gsmSCF_PDUs, _encode_GenericSSF_gsmSCF_PDUs } from "../CAP-gsmSSF-gsmSCF-pkgs-contracts-acs/GenericSSF-gsmSCF-PDUs.ta.mjs";
import { id_as_gsmSSF_scfGenericAS } from "../CAP-object-identifiers/id-as-gsmSSF-scfGenericAS.va.mjs";
// export { id_as_gsmSSF_scfGenericAS } from "../CAP-object-identifiers/id-as-gsmSSF-scfGenericAS.va.mjs";


/**
 * @summary gsmSSF_scfGenericAbstractSyntax
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * gsmSSF-scfGenericAbstractSyntax ABSTRACT-SYNTAX ::= {
 *     GenericSSF-gsmSCF-PDUs
 *     IDENTIFIED BY    id-as-gsmSSF-scfGenericAS}
 * ```
 * 
 * @constant
 * @type {ABSTRACT_SYNTAX<GenericSSF_gsmSCF_PDUs>}
 * @implements {ABSTRACT_SYNTAX<GenericSSF_gsmSCF_PDUs>}
 */
export
const gsmSSF_scfGenericAbstractSyntax: ABSTRACT_SYNTAX<GenericSSF_gsmSCF_PDUs> = {
    class: "ABSTRACT-SYNTAX",
    decoderFor: {
        "&Type": _decode_GenericSSF_gsmSCF_PDUs,
    },
    encoderFor: {
        "&Type": _encode_GenericSSF_gsmSCF_PDUs,
    },
    "&id": id_as_gsmSSF_scfGenericAS /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&property": undefined,
};

/* eslint-enable */
