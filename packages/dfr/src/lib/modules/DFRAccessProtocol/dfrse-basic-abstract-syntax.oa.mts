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
import { DFR_PDUs, _decode_DFR_PDUs, _encode_DFR_PDUs } from "../DFRAccessProtocol/DFR-PDUs.ta.mjs";
// export { DFR_PDUs, _decode_DFR_PDUs, _encode_DFR_PDUs } from "../DFRAccessProtocol/DFR-PDUs.ta.mjs";
import { id_as_dfrse } from "../DFRProtocolObjectIdentifiers/id-as-dfrse.va.mjs";
// export { id_as_dfrse } from "../DFRProtocolObjectIdentifiers/id-as-dfrse.va.mjs";


/**
 * @summary dfrse_basic_abstract_syntax
 * @description
 *
 * Abstract syntax of DFR-PDUs (ROSE + DFRSE + basic attributes). ISO/IEC
 * 10166-2:1991 §6 (`id-as-dfrse`).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * dfrse-basic-abstract-syntax ABSTRACT-SYNTAX ::= {
 *     DFR-PDUs
 *     IDENTIFIED BY id-as-dfrse
 * }
 * ```
 * 
 * @constant
 * @type {ABSTRACT_SYNTAX<DFR_PDUs>}
 * @implements {ABSTRACT_SYNTAX<DFR_PDUs>}
 */
export
const dfrse_basic_abstract_syntax: ABSTRACT_SYNTAX<DFR_PDUs> = {
    class: "ABSTRACT-SYNTAX",
    decoderFor: {
        "&Type": _decode_DFR_PDUs,
    },
    encoderFor: {
        "&Type": _encode_DFR_PDUs,
    },
    "&id": id_as_dfrse /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&property": undefined,
};

/* eslint-enable */
