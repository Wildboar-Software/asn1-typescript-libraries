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
import { type SIG_POLICY_QUALIFIER } from "../ETS-ElectronicSignatureFormats-ExplicitSyntax97/SIG-POLICY-QUALIFIER.oca.mjs";
import { noticeToUser } from "../ETS-ElectronicSignatureFormats-ExplicitSyntax97/noticeToUser.oa.mjs";
import { pointerToSigPolSpec } from "../ETS-ElectronicSignatureFormats-ExplicitSyntax97/pointerToSigPolSpec.oa.mjs";
/**
 * @summary SupportedSigPolicyQualifiers
 * @description
 *
 * Information object set of signature-policy qualifiers
 * defined by this specification: `noticeToUser` and
 * `pointerToSigPolSpec`. ETSI TS 101 733 V2.2.1 (2013-04)
 * §5.8.1, Annex A.2.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SupportedSigPolicyQualifiers SIG-POLICY-QUALIFIER ::= {
 *     noticeToUser
 *     | pointerToSigPolSpec }
 * ```
 * 
 * @constant
 * @type {SIG_POLICY_QUALIFIER[]}
 * 
 */
export
const SupportedSigPolicyQualifiers: (SIG_POLICY_QUALIFIER)[] = [ noticeToUser, pointerToSigPolSpec, ];

/* eslint-enable */
