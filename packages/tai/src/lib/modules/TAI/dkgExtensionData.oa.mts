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
import { DkgExtensionDataSyntax, _decode_DkgExtensionDataSyntax, _encode_DkgExtensionDataSyntax } from "../TAI/DkgExtensionDataSyntax.ta.mjs";
import { id_tai_ce_dgkExtensionData } from "../TAI/id-tai-ce-dgkExtensionData.va.mjs";
import type { EXTENSION } from "@wildboar/x500/AuthenticationFramework";

/**
 * @summary dkgExtensionData
 * @description
 *
 * BC extension used when a BC generates a cryptographic key.
 * Carries alignment help data and biometric key binding data
 * for adjusting biometric input. Neither component is
 * standardized beyond this envelope. ITU-T Rec. X.1089
 * (05/2008)
 * [§11.3](https://www.itu.int/rec/T-REC-X.1089-200805-I).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * dkgExtensionData EXTENSION ::= {
 *   SYNTAX         DkgExtensionDataSyntax
 *   IDENTIFIED BY  id-tai-ce-dgkExtensionData
 * }
 * ```
 * 
 * @constant
 * @type {EXTENSION<DkgExtensionDataSyntax>}
 * @implements {EXTENSION<DkgExtensionDataSyntax>}
 */
export
const dkgExtensionData: EXTENSION<DkgExtensionDataSyntax> = {
    class: "EXTENSION",
    decoderFor: {
        "&ExtnType": _decode_DkgExtensionDataSyntax,
    },
    encoderFor: {
        "&ExtnType": _encode_DkgExtensionDataSyntax,
    },
    "&id": id_tai_ce_dgkExtensionData /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ExtnType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
