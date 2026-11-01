/* eslint-disable */
import {
    itu_t,
    itu_r,
    ccitt,
    iso,
    joint_iso_itu_t,
    joint_iso_ccitt,
    type OPTIONAL,
    type BOOLEAN,
    type INTEGER,
    type BIT_STRING,
    type OCTET_STRING,
    type NULL,
    type OBJECT_IDENTIFIER,
    type ObjectDescriptor,
    type EXTERNAL,
    type REAL,
    type INSTANCE_OF,
    type ENUMERATED,
    type EMBEDDED_PDV,
    type UTF8String,
    type RELATIVE_OID,
    type SEQUENCE,
    type SEQUENCE_OF,
    type SET,
    type SET_OF,
    type GraphicString,
    type NumericString,
    type VisibleString,
    type PrintableString,
    type ISO646String,
    type TeletexString,
    type GeneralString,
    type T61String,
    type UniversalString,
    type VideotexString,
    type BMPString,
    type IA5String,
    type CharacterString,
    type UTCTime,
    type GeneralizedTime,
    type TIME,
    type DATE,
    type TIME_OF_DAY,
    type DATE_TIME,
    type DURATION,
    type OID_IRI,
    type RELATIVE_OID_IRI,
    TRUE,
    FALSE,
    TRUE_BIT,
    FALSE_BIT,
    PLUS_INFINITY,
    MINUS_INFINITY,
    NOT_A_NUMBER,
    type TYPE_IDENTIFIER,
    type ABSTRACT_SYNTAX,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { objectClass } from "../InformationFramework/objectClass.oa.mjs";
import { id_oc_oxUmaResource } from "../LdapOx/id-oc-oxUmaResource.va.mjs";

import { displayName } from "../InetOrgPerson/displayName.oa.mjs";
import { inum } from "../LdapOx/inum.oa.mjs";
import { owner } from "../SelectedAttributeTypes/owner.oa.mjs";
import { oxAssociatedClient } from "../LdapOx/oxAssociatedClient.oa.mjs";
import { oxAuthUmaScope } from "../LdapOx/oxAuthUmaScope.oa.mjs";
import { oxFaviconImage } from "../LdapOx/oxFaviconImage.oa.mjs";
import { oxGroup } from "../LdapOx/oxGroup.oa.mjs";
import { oxId } from "../LdapOx/oxId.oa.mjs";
import { oxResource } from "../LdapOx/oxResource.oa.mjs";
import { oxRevision } from "../LdapOx/oxRevision.oa.mjs";
import { oxType } from "../LdapOx/oxType.oa.mjs";
import { oxScopeExpression } from "../LdapOx/oxScopeExpression.oa.mjs";
import { iat } from "../LdapOx/iat.oa.mjs";
import { exp } from "../LdapOx/exp.oa.mjs";
import { del } from "../LdapOx/del.oa.mjs";
import { description } from "../SelectedAttributeTypes/description.oa.mjs";
/**
 * @summary oxUmaResource
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * oxUmaResource OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MUST CONTAIN              { objectClass }
 *   MAY CONTAIN               { displayName
 *                               | inum
 *                               | owner
 *                               | oxAssociatedClient
 *                               | oxAuthUmaScope
 *                               | oxFaviconImage
 *                               | oxGroup
 *                               | oxId
 *                               | oxResource
 *                               | oxRevision
 *                               | oxType
 *                               | oxScopeExpression
 *                               | iat
 *                               | exp
 *                               | del
 *                               | description }
 *   LDAP-NAME                 {"oxUmaResource"}
 *   ID                        id-oc-oxUmaResource }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const oxUmaResource: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ objectClass, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ displayName, inum, owner, oxAssociatedClient, oxAuthUmaScope, oxFaviconImage, oxGroup, oxId, oxResource, oxRevision, oxType, oxScopeExpression, iat, exp, del, description, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "oxUmaResource" ] /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_oxUmaResource /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
