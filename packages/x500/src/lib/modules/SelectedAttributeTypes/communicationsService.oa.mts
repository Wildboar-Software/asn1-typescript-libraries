/* eslint-disable */
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import {
    userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */,
} from "../InformationFramework/AttributeUsage.ta.mjs";
import { objectIdentifierMatch } from "../InformationFramework/objectIdentifierMatch.oa.mjs";
import {
    CommunicationsService,
    _decode_CommunicationsService,
    _encode_CommunicationsService,
} from "../SelectedAttributeTypes/CommunicationsService.ta.mjs";
import { id_at_communicationsService } from "../SelectedAttributeTypes/id-at-communicationsService.va.mjs";
import { oid } from "../SelectedAttributeTypes/oid.oa.mjs";
/**
 * @summary communicationsService
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * communicationsService ATTRIBUTE ::= {
 *   WITH SYNTAX              CommunicationsService
 *   EQUALITY MATCHING RULE   objectIdentifierMatch
 *   LDAP-SYNTAX              oid.&id
 *   LDAP-NAME                {"communicationsService"}
 *   ID                       id-at-communicationsService }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE<CommunicationsService>}
 * @implements {ATTRIBUTE<CommunicationsService>}
 */
export const communicationsService: ATTRIBUTE<CommunicationsService> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_CommunicationsService,
    },
    encoderFor: {
        "&Type": _encode_CommunicationsService,
    },
    "&equality-match": objectIdentifierMatch /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": oid["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["communicationsService"],
    "&id": id_at_communicationsService /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
