/* eslint-disable */
import {
    TypeAndContextAssertion,
    _decode_TypeAndContextAssertion,
    _encode_TypeAndContextAssertion,
} from "../DirectoryAbstractService/TypeAndContextAssertion.ta.mjs";
import { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import {
    directoryOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */,
} from "../InformationFramework/AttributeUsage.ta.mjs";
import { id_oa_contextAssertionDefault } from "../InformationFramework/id-oa-contextAssertionDefault.va.mjs";
import { objectIdentifierFirstComponentMatch } from "../SelectedAttributeTypes/objectIdentifierFirstComponentMatch.oa.mjs";
/**
 * @summary contextAssertionDefaults
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * contextAssertionDefaults ATTRIBUTE ::= {
 *   WITH SYNTAX             TypeAndContextAssertion
 *   EQUALITY MATCHING RULE  objectIdentifierFirstComponentMatch
 *   USAGE                   directoryOperation
 *   ID                      id-oa-contextAssertionDefault }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE<TypeAndContextAssertion>}
 * @implements {ATTRIBUTE<TypeAndContextAssertion>}
 */
export const contextAssertionDefaults: ATTRIBUTE<TypeAndContextAssertion> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_TypeAndContextAssertion,
    },
    encoderFor: {
        "&Type": _encode_TypeAndContextAssertion,
    },
    "&equality-match": objectIdentifierFirstComponentMatch /* OBJECT_FIELD_SETTING */,
    "&usage": directoryOperation /* OBJECT_FIELD_SETTING */,
    "&id": id_oa_contextAssertionDefault /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
