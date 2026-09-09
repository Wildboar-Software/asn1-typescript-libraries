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
import { AssistHandoffsSF_gsmSCF_PDUs, _decode_AssistHandoffsSF_gsmSCF_PDUs, _encode_AssistHandoffsSF_gsmSCF_PDUs } from "../CAP-gsmSSF-gsmSCF-pkgs-contracts-acs/AssistHandoffsSF-gsmSCF-PDUs.ta.mjs";
// export { AssistHandoffsSF_gsmSCF_PDUs, _decode_AssistHandoffsSF_gsmSCF_PDUs, _encode_AssistHandoffsSF_gsmSCF_PDUs } from "../CAP-gsmSSF-gsmSCF-pkgs-contracts-acs/AssistHandoffsSF-gsmSCF-PDUs.ta.mjs";
import { id_as_assistHandoff_gsmSSF_scfAS } from "../CAP-object-identifiers/id-as-assistHandoff-gsmSSF-scfAS.va.mjs";
// export { id_as_assistHandoff_gsmSSF_scfAS } from "../CAP-object-identifiers/id-as-assistHandoff-gsmSSF-scfAS.va.mjs";


/**
 * @summary assistHandoff_gsmSSF_scfAbstractSyntax
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * assistHandoff-gsmSSF-scfAbstractSyntax ABSTRACT-SYNTAX ::= {
 *     AssistHandoffsSF-gsmSCF-PDUs
 *     IDENTIFIED BY    id-as-assistHandoff-gsmSSF-scfAS}
 * ```
 * 
 * @constant
 * @type {ABSTRACT_SYNTAX<AssistHandoffsSF_gsmSCF_PDUs>}
 * @implements {ABSTRACT_SYNTAX<AssistHandoffsSF_gsmSCF_PDUs>}
 */
export
const assistHandoff_gsmSSF_scfAbstractSyntax: ABSTRACT_SYNTAX<AssistHandoffsSF_gsmSCF_PDUs> = {
    class: "ABSTRACT-SYNTAX",
    decoderFor: {
        "&Type": _decode_AssistHandoffsSF_gsmSCF_PDUs,
    },
    encoderFor: {
        "&Type": _encode_AssistHandoffsSF_gsmSCF_PDUs,
    },
    "&id": id_as_assistHandoff_gsmSSF_scfAS /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&property": undefined,
};

/* eslint-enable */
