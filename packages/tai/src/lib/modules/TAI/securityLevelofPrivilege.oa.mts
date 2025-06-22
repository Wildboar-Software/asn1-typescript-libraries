/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "@wildboar/asn1";
import { SecurityLevelofPrivilege, _decode_SecurityLevelofPrivilege, _encode_SecurityLevelofPrivilege } from "../TAI/SecurityLevelofPrivilege.ta.mjs";
import { id_tai_ce_biometricSecurityLevelOfPrivilege } from "../TAI/id-tai-ce-biometricSecurityLevelOfPrivilege.va.mjs";
import { EXTENSION } from "@wildboar/x500/src/lib/modules/AuthenticationFramework/EXTENSION.oca.mjs";
/**
 * @summary securityLevelofPrivilege
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * securityLevelofPrivilege EXTENSION ::= {
 *   SYNTAX         SecurityLevelofPrivilege
 *   IDENTIFIED BY  id-tai-ce-biometricSecurityLevelOfPrivilege
 * }
 * ```
 * 
 * @constant
 * @type {EXTENSION<SecurityLevelofPrivilege>}
 * @implements {EXTENSION<SecurityLevelofPrivilege>}
 */
export
const securityLevelofPrivilege: EXTENSION<SecurityLevelofPrivilege> = {
    class: "EXTENSION",
    decoderFor: {
        "&ExtnType": _decode_SecurityLevelofPrivilege,
    },
    encoderFor: {
        "&ExtnType": _encode_SecurityLevelofPrivilege,
    },
    "&id": id_tai_ce_biometricSecurityLevelOfPrivilege /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ExtnType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
