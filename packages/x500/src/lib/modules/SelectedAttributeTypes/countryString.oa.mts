/* eslint-disable */
import { type SYNTAX_NAME } from "../InformationFramework/SYNTAX-NAME.oca.mjs";
import {
    CountryName,
    _decode_CountryName,
    _encode_CountryName,
} from "../SelectedAttributeTypes/CountryName.ta.mjs";
import { id_lsx_countryString } from "../SelectedAttributeTypes/id-lsx-countryString.va.mjs";
/**
 * @summary countryString
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * countryString SYNTAX-NAME ::= {
 *   LDAP-DESC         "Country String"
 *   DIRECTORY SYNTAX  CountryName
 *   ID                id-lsx-countryString }
 * ```
 *
 * @constant
 * @type {SYNTAX_NAME<CountryName>}
 * @implements {SYNTAX_NAME<CountryName>}
 */
export const countryString: SYNTAX_NAME<CountryName> = {
    class: "SYNTAX-NAME",
    decoderFor: {
        "&Type": _decode_CountryName,
    },
    encoderFor: {
        "&Type": _encode_CountryName,
    },
    "&ldapDesc": "Country String" /* OBJECT_FIELD_SETTING */,
    "&id": id_lsx_countryString /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
