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
import { id_as_dfr_ext_attr } from "../DFRProtocolObjectIdentifiers/id-as-dfr-ext-attr.va.mjs";


/**
 * @summary dfrse_ext_abstract_syntax
 * @description
 *
 * Optional abstract syntax for the DFR-Extension-Attribute-Set. Negotiated at
 * association establishment. ISO/IEC 10166-2:1991 §6; ISO/IEC 10166-1:1991
 * §9.1 note 2.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * dfrse-ext-abstract-syntax ABSTRACT-SYNTAX ::= {
 *     DFR-PDUs
 *     IDENTIFIED BY id-as-dfr-ext-attr
 * }
 * ```
 * 
 * @constant
 * @type {ABSTRACT_SYNTAX<DFR_PDUs>}
 * @implements {ABSTRACT_SYNTAX<DFR_PDUs>}
 */
export
const dfrse_ext_abstract_syntax: ABSTRACT_SYNTAX<DFR_PDUs> = {
    class: "ABSTRACT-SYNTAX",
    decoderFor: {
        "&Type": _decode_DFR_PDUs,
    },
    encoderFor: {
        "&Type": _encode_DFR_PDUs,
    },
    "&id": id_as_dfr_ext_attr /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&property": new Uint8ClampedArray(),
};

/* eslint-enable */
