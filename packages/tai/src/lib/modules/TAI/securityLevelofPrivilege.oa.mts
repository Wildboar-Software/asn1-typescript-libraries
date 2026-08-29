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
import type { EXTENSION } from "@wildboar/x500/AuthenticationFramework";

/**
 * @summary securityLevelofPrivilege
 * @description
 *
 * AC extension asserting the security level so a BPC can enable
 * privilege attributes with different strictness for biometric
 * authentication of the AC holder. Added to the basic privilege
 * management certificate extension (X.509 clause 15.1.2).
 * Stores the `bioSecLevel` (e.g. `biometricSecurityLevelId`) of
 * the BPC that has the same holder as the AC. ITU-T Rec. X.1089
 * (05/2008)
 * [§11.5](https://www.itu.int/rec/T-REC-X.1089-200805-I).
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
