/* eslint-disable */
import { type EXTENSION_ATTRIBUTE } from "../PkiPmiExternalDataTypes/EXTENSION-ATTRIBUTE.oca.mjs";
import {
    TeletexDomainDefinedAttributes,
    _decode_TeletexDomainDefinedAttributes,
    _encode_TeletexDomainDefinedAttributes,
} from "../PkiPmiExternalDataTypes/TeletexDomainDefinedAttributes.ta.mjs";
/**
 * @summary teletex_domain_defined_attributes
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * teletex-domain-defined-attributes EXTENSION-ATTRIBUTE ::= {
 *                  TeletexDomainDefinedAttributes
 *   IDENTIFIED BY  6 }
 * ```
 *
 * @constant
 * @type {EXTENSION_ATTRIBUTE<TeletexDomainDefinedAttributes>}
 * @implements {EXTENSION_ATTRIBUTE<TeletexDomainDefinedAttributes>}
 */
export const teletex_domain_defined_attributes: EXTENSION_ATTRIBUTE<TeletexDomainDefinedAttributes> = {
    class: "EXTENSION-ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_TeletexDomainDefinedAttributes,
    },
    encoderFor: {
        "&Type": _encode_TeletexDomainDefinedAttributes,
    },
    "&id": 6 /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
