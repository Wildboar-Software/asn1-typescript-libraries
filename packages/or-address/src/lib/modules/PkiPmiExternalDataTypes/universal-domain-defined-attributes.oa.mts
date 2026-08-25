/* eslint-disable */
import { type EXTENSION_ATTRIBUTE } from "../PkiPmiExternalDataTypes/EXTENSION-ATTRIBUTE.oca.mjs";
import {
    UniversalDomainDefinedAttributes,
    _decode_UniversalDomainDefinedAttributes,
    _encode_UniversalDomainDefinedAttributes,
} from "../PkiPmiExternalDataTypes/UniversalDomainDefinedAttributes.ta.mjs";
/**
 * @summary universal_domain_defined_attributes
 * @description
 *
 * OR-address extension attribute for the Universal encoding of `domain-defined-attributes`
 * (ITU-T X.402 (1999), §18.1; X.411 (1999), Annex A). Printable, Teletex and Universal
 * encodings of the same value are equivalent for comparison (X.402 §18.4). Universal
 * language codes are ignored.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * universal-domain-defined-attributes EXTENSION-ATTRIBUTE ::= {
 *                  UniversalDomainDefinedAttributes
 *   IDENTIFIED BY  28 }
 * ```
 *
 * @constant
 * @type {EXTENSION_ATTRIBUTE<UniversalDomainDefinedAttributes>}
 * @implements {EXTENSION_ATTRIBUTE<UniversalDomainDefinedAttributes>}
 */
export const universal_domain_defined_attributes: EXTENSION_ATTRIBUTE<UniversalDomainDefinedAttributes> = {
    class: "EXTENSION-ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_UniversalDomainDefinedAttributes,
    },
    encoderFor: {
        "&Type": _encode_UniversalDomainDefinedAttributes,
    },
    "&id": 28 /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
