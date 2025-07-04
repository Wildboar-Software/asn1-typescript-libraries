/* eslint-disable */
import {
    AttCertPath,
    _decode_AttCertPath,
    _encode_AttCertPath,
} from "../AttributeCertificateDefinitions/AttCertPath.ta.mjs";
import { id_at_delegationPath } from "../AttributeCertificateDefinitions/id-at-delegationPath.va.mjs";
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import {
    userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */,
} from "../InformationFramework/AttributeUsage.ta.mjs";
/**
 * @summary delegationPath
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * delegationPath ATTRIBUTE ::= {
 *   WITH SYNTAX  AttCertPath
 *   ID           id-at-delegationPath }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE<AttCertPath>}
 * @implements {ATTRIBUTE<AttCertPath>}
 */
export const delegationPath: ATTRIBUTE<AttCertPath> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_AttCertPath,
    },
    encoderFor: {
        "&Type": _encode_AttCertPath,
    },
    "&id": id_at_delegationPath /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
