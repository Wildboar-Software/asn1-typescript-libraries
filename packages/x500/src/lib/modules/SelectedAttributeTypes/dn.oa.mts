/* eslint-disable */
import {
    DistinguishedName,
    _decode_DistinguishedName,
    _encode_DistinguishedName,
} from "../InformationFramework/DistinguishedName.ta.mjs";
import { SYNTAX_NAME } from "../InformationFramework/SYNTAX-NAME.oca.mjs";
import { id_lsx_dn } from "../SelectedAttributeTypes/id-lsx-dn.va.mjs";
export {
    DistinguishedName,
    _decode_DistinguishedName,
    _encode_DistinguishedName,
} from "../InformationFramework/DistinguishedName.ta.mjs";
export { SYNTAX_NAME } from "../InformationFramework/SYNTAX-NAME.oca.mjs";
export { id_lsx_dn } from "../SelectedAttributeTypes/id-lsx-dn.va.mjs";

/* START_OF_SYMBOL_DEFINITION dn */
/**
 * @summary dn
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * dn SYNTAX-NAME ::= {
 *   LDAP-DESC         "DN"
 *   DIRECTORY SYNTAX  DistinguishedName
 *   ID                id-lsx-dn }
 * ```
 *
 * @constant
 * @type {SYNTAX_NAME<DistinguishedName>}
 * @implements {SYNTAX_NAME<DistinguishedName>}
 */
export const dn: SYNTAX_NAME<DistinguishedName> = {
    class: "SYNTAX-NAME",
    decoderFor: {
        "&Type": _decode_DistinguishedName,
    },
    encoderFor: {
        "&Type": _encode_DistinguishedName,
    },
    "&ldapDesc": "DN" /* OBJECT_FIELD_SETTING */,
    "&id": id_lsx_dn /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION dn */

/* eslint-enable */
