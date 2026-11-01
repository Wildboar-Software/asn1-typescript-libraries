/* eslint-disable */
import {
    type REAL
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/AttributeUsage.ta.mjs";
import { id_at_meanMemberAge } from "../OrganizationAndGroupSchema/id-at-meanMemberAge.va.mjs";

/**
 * @summary meanMemberAge
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * meanMemberAge ATTRIBUTE ::= {
 *     WITH SYNTAX                 REAL (0.0..1.0)
 *     EQUALITY MATCHING RULE      realMatch
 *     ORDERING MATCHING RULE      realOrderingMatch
 *     LDAP-SYNTAX                    real.&id
 *     LDAP-NAME                    {"meanMemberAge"}
 *     LDAP-DESC                    "Mean Member Age"
 *     ID                            id-at-meanMemberAge
 * }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE<REAL>}
 * @implements {ATTRIBUTE<REAL>}
 */
export
const meanMemberAge: ATTRIBUTE<REAL> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": $._decodeReal,
    },
    encoderFor: {
        "&Type": $._encodeReal,
    },
    "&equality-match": realMatch /* OBJECT_FIELD_SETTING */,
    "&ordering-match": realOrderingMatch /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": real["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "meanMemberAge" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "Mean Member Age" /* OBJECT_FIELD_SETTING */,
    "&id": id_at_meanMemberAge /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
