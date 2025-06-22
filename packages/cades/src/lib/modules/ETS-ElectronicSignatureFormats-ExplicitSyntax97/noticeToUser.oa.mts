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
import { id_spq_ets_unotice } from "../ETS-ElectronicSignatureFormats-ExplicitSyntax97/id-spq-ets-unotice.va.mjs";
import { SPUserNotice, _decode_SPUserNotice, _encode_SPUserNotice } from "../ETS-ElectronicSignatureFormats-ExplicitSyntax97/SPUserNotice.ta.mjs";
import { SIG_POLICY_QUALIFIER } from "../ETS-ElectronicSignatureFormats-ExplicitSyntax97/SIG-POLICY-QUALIFIER.oca.mjs";
/**
 * @summary noticeToUser
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * noticeToUser SIG-POLICY-QUALIFIER ::= {
 *     SIG-POLICY-QUALIFIER-ID     id-spq-ets-unotice
 *     SIG-QUALIFIER-TYPE          SPUserNotice }
 * ```
 * 
 * @constant
 * @type {SIG_POLICY_QUALIFIER<SPUserNotice>}
 * @implements {SIG_POLICY_QUALIFIER<SPUserNotice>}
 */
export
const noticeToUser: SIG_POLICY_QUALIFIER<SPUserNotice> = {
    class: "SIG-POLICY-QUALIFIER",
    decoderFor: {
        "&Qualifier": _decode_SPUserNotice,
    },
    encoderFor: {
        "&Qualifier": _encode_SPUserNotice,
    },
    "&id": id_spq_ets_unotice /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Qualifier": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
