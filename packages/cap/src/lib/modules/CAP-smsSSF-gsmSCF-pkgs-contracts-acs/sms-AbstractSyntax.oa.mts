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
import { Generic_sms_PDUs, _decode_Generic_sms_PDUs, _encode_Generic_sms_PDUs } from "../CAP-smsSSF-gsmSCF-pkgs-contracts-acs/Generic-sms-PDUs.ta.mjs";
// export { Generic_sms_PDUs, _decode_Generic_sms_PDUs, _encode_Generic_sms_PDUs } from "../CAP-smsSSF-gsmSCF-pkgs-contracts-acs/Generic-sms-PDUs.ta.mjs";
import { id_as_smsSSF_gsmSCF_AS } from "../CAP-object-identifiers/id-as-smsSSF-gsmSCF-AS.va.mjs";
// export { id_as_smsSSF_gsmSCF_AS } from "../CAP-object-identifiers/id-as-smsSSF-gsmSCF-AS.va.mjs";


/**
 * @summary sms_AbstractSyntax
 * @description
 * 
 * Abstract syntax for `cap3-sms-AC` and `cap4-sms-AC` (CAP from smsSSF to
 * gsmSCF). Type is `Generic-sms-PDUs`. Bound set `cAPSpecificBoundSet`. Rel-6
 * imports operation definitions as version8(7). Abstract-syntax ID same as
 * Rel-5. (3GPP TS 29.078 V19.0.0 clause 7.2).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * sms-AbstractSyntax ABSTRACT-SYNTAX ::= {
 *     Generic-sms-PDUs
 *     IDENTIFIED BY    id-as-smsSSF-gsmSCF-AS }
 * ```
 * 
 * @constant
 * @type {ABSTRACT_SYNTAX<Generic_sms_PDUs>}
 * @implements {ABSTRACT_SYNTAX<Generic_sms_PDUs>}
 */
export
const sms_AbstractSyntax: ABSTRACT_SYNTAX<Generic_sms_PDUs> = {
    class: "ABSTRACT-SYNTAX",
    decoderFor: {
        "&Type": _decode_Generic_sms_PDUs,
    },
    encoderFor: {
        "&Type": _encode_Generic_sms_PDUs,
    },
    "&id": id_as_smsSSF_gsmSCF_AS /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&property": undefined,
};

/* eslint-enable */
