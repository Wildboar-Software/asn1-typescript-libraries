/* eslint-disable */
import type { ATTRIBUTE } from "@wildboar/x500/InformationFramework";
import {
    userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */,
} from "@wildboar/x500/InformationFramework";
import {
    EncryptedPrivateKeyInfo,
    _decode_EncryptedPrivateKeyInfo,
    _encode_EncryptedPrivateKeyInfo,
} from "../AsymmetricKeyPackageModuleV1/EncryptedPrivateKeyInfo.ta.mjs";
import { pkcs_9_at_encryptedPrivateKeyInfo } from "../PKCS-9/pkcs-9-at-encryptedPrivateKeyInfo.va.mjs";


/**
 * @summary encryptedPrivateKeyInfo
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * encryptedPrivateKeyInfo ATTRIBUTE ::= {
 *         WITH SYNTAX EncryptedPrivateKeyInfo
 *         ID pkcs-9-at-encryptedPrivateKeyInfo
 * }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE<EncryptedPrivateKeyInfo>}
 * @implements {ATTRIBUTE<EncryptedPrivateKeyInfo>}
 */
export const encryptedPrivateKeyInfo: ATTRIBUTE<EncryptedPrivateKeyInfo> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_EncryptedPrivateKeyInfo,
    },
    encoderFor: {
        "&Type": _encode_EncryptedPrivateKeyInfo,
    },
    "&id": pkcs_9_at_encryptedPrivateKeyInfo /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
