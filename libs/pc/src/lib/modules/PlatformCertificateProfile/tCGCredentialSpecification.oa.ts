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
} from "asn1-ts";
import type { ATTRIBUTE } from "@wildboar/x500/src/lib/modules/InformationFramework/ATTRIBUTE.oca";
import { _enum_for_AttributeUsage, userApplications, _decode_AttributeUsage, _encode_AttributeUsage } from "@wildboar/x500/src/lib/modules/InformationFramework/AttributeUsage.ta";
import { TCGSpecificationVersion, _decode_TCGSpecificationVersion, _encode_TCGSpecificationVersion } from "../PlatformCertificateProfile/TCGSpecificationVersion.ta";
import { tcg_at_tcgCredentialSpecification } from "../PlatformCertificateProfile/tcg-at-tcgCredentialSpecification.va";


/* START_OF_SYMBOL_DEFINITION tCGCredentialSpecification */
/**
 * @summary tCGCredentialSpecification
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * tCGCredentialSpecification ATTRIBUTE ::= {
 *     WITH SYNTAX     TCGSpecificationVersion
 *     ID              tcg-at-tcgCredentialSpecification }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE<TCGSpecificationVersion>}
 * @implements {ATTRIBUTE<TCGSpecificationVersion>}
 */
export
const tCGCredentialSpecification: ATTRIBUTE<TCGSpecificationVersion> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_TCGSpecificationVersion,
    },
    encoderFor: {
        "&Type": _encode_TCGSpecificationVersion,
    },
    "&id": tcg_at_tcgCredentialSpecification /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION tCGCredentialSpecification */

/* eslint-enable */
