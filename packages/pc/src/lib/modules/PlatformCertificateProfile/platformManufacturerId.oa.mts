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
import type { ATTRIBUTE } from "@wildboar/x500/InformationFramework";
import {
    _enum_for_AttributeUsage,
    userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    _decode_AttributeUsage,
    _encode_AttributeUsage,
} from "@wildboar/x500/InformationFramework";
import { ManufacturerId, _decode_ManufacturerId, _encode_ManufacturerId } from "../PlatformCertificateProfile/ManufacturerId.ta.mjs";
import { tcg_at_platformManufacturerId } from "../PlatformCertificateProfile/tcg-at-platformManufacturerId.va.mjs";
/**
 * @summary platformManufacturerId
 * @description
 *
 * Platform manufacturer IANA Private Enterprise Number. Optional
 * SAN RDN. If included, SHALL be the manufacturer's PEN. In a
 * Delta, MUST equal the base certificate. TCG Platform Certificate
 * Profile v1.1 r19 §2.1.5.4, §3.1.2, §3.2.8.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * platformManufacturerId ATTRIBUTE ::= {
 *     WITH SYNTAX     ManufacturerId
 *     ID              tcg-at-platformManufacturerId }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE<ManufacturerId>}
 * @implements {ATTRIBUTE<ManufacturerId>}
 */
export
const platformManufacturerId: ATTRIBUTE<ManufacturerId> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_ManufacturerId,
    },
    encoderFor: {
        "&Type": _encode_ManufacturerId,
    },
    "&id": tcg_at_platformManufacturerId /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
