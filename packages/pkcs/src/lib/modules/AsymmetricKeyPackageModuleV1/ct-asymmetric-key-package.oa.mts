/* eslint-disable */
import {
    AsymmetricKeyPackage,
    _decode_AsymmetricKeyPackage,
    _encode_AsymmetricKeyPackage,
} from "../AsymmetricKeyPackageModuleV1/AsymmetricKeyPackage.ta.mjs";
import { id_ct_KP_aKeyPackage } from "../AsymmetricKeyPackageModuleV1/id-ct-KP-aKeyPackage.va.mjs";
import { type CONTENT_TYPE } from "../CryptographicMessageSyntax-2009/CONTENT-TYPE.oca.mjs";

/**
 * @summary ct_asymmetric_key_package
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ct-asymmetric-key-package CONTENT-TYPE ::= { AsymmetricKeyPackage IDENTIFIED BY id-ct-KP-aKeyPackage }
 * ```
 *
 * @constant
 * @type {CONTENT_TYPE<AsymmetricKeyPackage>}
 * @implements {CONTENT_TYPE<AsymmetricKeyPackage>}
 */
export const ct_asymmetric_key_package: CONTENT_TYPE<AsymmetricKeyPackage> = {
    class: "TYPE-IDENTIFIER",
    decoderFor: {
        "&Type": _decode_AsymmetricKeyPackage,
    },
    encoderFor: {
        "&Type": _encode_AsymmetricKeyPackage,
    },
    "&id": id_ct_KP_aKeyPackage /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
