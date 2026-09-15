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
import { BASIC_gsmSRF_gsmSCF_PDUs, _decode_BASIC_gsmSRF_gsmSCF_PDUs, _encode_BASIC_gsmSRF_gsmSCF_PDUs } from "../CAP-gsmSCF-gsmSRF-pkgs-contracts-acs/BASIC-gsmSRF-gsmSCF-PDUs.ta.mjs";
// export { BASIC_gsmSRF_gsmSCF_PDUs, _decode_BASIC_gsmSRF_gsmSCF_PDUs, _encode_BASIC_gsmSRF_gsmSCF_PDUs } from "../CAP-gsmSCF-gsmSRF-pkgs-contracts-acs/BASIC-gsmSRF-gsmSCF-PDUs.ta.mjs";
import { id_as_basic_gsmSRF_gsmSCF } from "../CAP-object-identifiers/id-as-basic-gsmSRF-gsmSCF.va.mjs";
// export { id_as_basic_gsmSRF_gsmSCF } from "../CAP-object-identifiers/id-as-basic-gsmSRF-gsmSCF.va.mjs";


/**
 * @summary gsmSRF_gsmSCF_abstract_syntax
 * @description
 * 
 * Abstract syntax for `gsmSRF-gsmSCF-ac` (CAP from gsmSRF to gsmSCF). Type is
 * `BASIC-gsmSRF-gsmSCF-PDUs`. Bound set `cAPSpecificBoundSet`. Rel-6 imports
 * operation definitions as version8(7). Abstract-syntax ID same as Rel-5.
 * (3GPP TS 29.078 V19.0.0 clause 6.2.2).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * gsmSRF-gsmSCF-abstract-syntax ABSTRACT-SYNTAX ::= {
 *     BASIC-gsmSRF-gsmSCF-PDUs
 *     IDENTIFIED BY    id-as-basic-gsmSRF-gsmSCF}
 * ```
 * 
 * @constant
 * @type {ABSTRACT_SYNTAX<BASIC_gsmSRF_gsmSCF_PDUs>}
 * @implements {ABSTRACT_SYNTAX<BASIC_gsmSRF_gsmSCF_PDUs>}
 */
export
const gsmSRF_gsmSCF_abstract_syntax: ABSTRACT_SYNTAX<BASIC_gsmSRF_gsmSCF_PDUs> = {
    class: "ABSTRACT-SYNTAX",
    decoderFor: {
        "&Type": _decode_BASIC_gsmSRF_gsmSCF_PDUs,
    },
    encoderFor: {
        "&Type": _encode_BASIC_gsmSRF_gsmSCF_PDUs,
    },
    "&id": id_as_basic_gsmSRF_gsmSCF /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&property": undefined,
};

/* eslint-enable */
