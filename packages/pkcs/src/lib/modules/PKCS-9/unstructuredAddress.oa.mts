/* eslint-disable */
import type { ATTRIBUTE } from "@wildboar/x500/InformationFramework";
import {
    userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */,
} from "@wildboar/x500/InformationFramework";
import { caseIgnoreMatch } from "@wildboar/x500/SelectedAttributeTypes";
import {
    DirectoryString,
    _decode_DirectoryString,
    _encode_DirectoryString,
} from "@wildboar/x500/SelectedAttributeTypes";
import { pkcs_9_at_unstructuredAddress } from "../PKCS-9/pkcs-9-at-unstructuredAddress.va.mjs";


/**
 * @summary unstructuredAddress
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * unstructuredAddress ATTRIBUTE ::= {
 *         WITH SYNTAX DirectoryString {pkcs-9-ub-unstructuredAddress}
 *         EQUALITY MATCHING RULE caseIgnoreMatch
 *         ID pkcs-9-at-unstructuredAddress
 * }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE<DirectoryString>}
 * @implements {ATTRIBUTE<DirectoryString>}
 */
export const unstructuredAddress: ATTRIBUTE<DirectoryString> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_DirectoryString,
    },
    encoderFor: {
        "&Type": _encode_DirectoryString,
    },
    "&equality-match": caseIgnoreMatch /* OBJECT_FIELD_SETTING */,
    "&id": pkcs_9_at_unstructuredAddress /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
