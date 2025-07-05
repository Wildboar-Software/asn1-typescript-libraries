/* eslint-disable */
import { GeneralizedTime } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type SYNTAX_NAME } from "../InformationFramework/SYNTAX-NAME.oca.mjs";
import { id_lsx_generalizedTime } from "../SelectedAttributeTypes/id-lsx-generalizedTime.va.mjs";
/**
 * @summary generalizedTime
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * generalizedTime SYNTAX-NAME ::= {
 *   LDAP-DESC         "Generalized Time"
 *   DIRECTORY SYNTAX  GeneralizedTime
 *   ID                id-lsx-generalizedTime }
 * ```
 *
 * @constant
 * @type {SYNTAX_NAME<GeneralizedTime>}
 * @implements {SYNTAX_NAME<GeneralizedTime>}
 */
export const generalizedTime: SYNTAX_NAME<GeneralizedTime> = {
    class: "SYNTAX-NAME",
    decoderFor: {
        "&Type": $._decodeGeneralizedTime,
    },
    encoderFor: {
        "&Type": $._encodeGeneralizedTime,
    },
    "&ldapDesc": "Generalized Time" /* OBJECT_FIELD_SETTING */,
    "&id": id_lsx_generalizedTime /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
