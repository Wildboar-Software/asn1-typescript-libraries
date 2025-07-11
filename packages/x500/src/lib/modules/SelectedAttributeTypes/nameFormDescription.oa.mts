/* eslint-disable */
import { type SYNTAX_NAME } from "../InformationFramework/SYNTAX-NAME.oca.mjs";
import {
    NameFormDescription,
    _decode_NameFormDescription,
    _encode_NameFormDescription,
} from "../SchemaAdministration/NameFormDescription.ta.mjs";
import { id_lsx_nameFormDescription } from "../SelectedAttributeTypes/id-lsx-nameFormDescription.va.mjs";
/**
 * @summary nameFormDescription
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * nameFormDescription SYNTAX-NAME ::= {
 *   LDAP-DESC         "Name Form Description"
 *   DIRECTORY SYNTAX  NameFormDescription
 *   ID                id-lsx-nameFormDescription }
 * ```
 *
 * @constant
 * @type {SYNTAX_NAME<NameFormDescription>}
 * @implements {SYNTAX_NAME<NameFormDescription>}
 */
export const nameFormDescription: SYNTAX_NAME<NameFormDescription> = {
    class: "SYNTAX-NAME",
    decoderFor: {
        "&Type": _decode_NameFormDescription,
    },
    encoderFor: {
        "&Type": _encode_NameFormDescription,
    },
    "&ldapDesc": "Name Form Description" /* OBJECT_FIELD_SETTING */,
    "&id": id_lsx_nameFormDescription /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
