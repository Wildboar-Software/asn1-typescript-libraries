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
} from '@wildboar/asn1';
import {
    SIGNATURE,
    _root_component_type_list_1_spec_for_SIGNATURE,
    _extension_additions_list_spec_for_SIGNATURE,
    _root_component_type_list_2_spec_for_SIGNATURE,
    _decode_SIGNATURE,
    _encode_SIGNATURE,
} from '@wildboar/x500/src/lib/modules/AuthenticationFramework/SIGNATURE.ta.mjs';
export {
    SIGNATURE,
    _decode_SIGNATURE as _decode_ReportOriginAuthenticationCheck,
    _encode_SIGNATURE as _encode_ReportOriginAuthenticationCheck,
} from '@wildboar/x500/src/lib/modules/AuthenticationFramework/SIGNATURE.ta.mjs';

/**
 * @summary ReportOriginAuthenticationCheck
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ReportOriginAuthenticationCheck  ::=
 *   SIGNATURE
 *     {SEQUENCE {algorithm-identifier
 *                  ReportOriginAuthenticationAlgorithmIdentifier,
 *                content-identifier      ContentIdentifier OPTIONAL,
 *                message-security-label  MessageSecurityLabel OPTIONAL,
 *                per-recipient
 *                  SEQUENCE SIZE (1..ub-recipients) OF PerRecipientReportFields
 *     }}
 * ```
 */
export type ReportOriginAuthenticationCheck = SIGNATURE; // DefinedType

/* eslint-enable */
