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
import { id_spq_ets_uri } from "../ETS-ElectronicSignatureFormats-ExplicitSyntax97/id-spq-ets-uri.va.mjs";
import { SPuri, _decode_SPuri, _encode_SPuri } from "../ETS-ElectronicSignatureFormats-ExplicitSyntax97/SPuri.ta.mjs";
import { SIG_POLICY_QUALIFIER } from "../ETS-ElectronicSignatureFormats-ExplicitSyntax97/SIG-POLICY-QUALIFIER.oca.mjs";
/**
 * @summary pointerToSigPolSpec
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * pointerToSigPolSpec SIG-POLICY-QUALIFIER ::= {
 *     SIG-POLICY-QUALIFIER-ID     id-spq-ets-uri
 *     SIG-QUALIFIER-TYPE          SPuri }
 * ```
 * 
 * @constant
 * @type {SIG_POLICY_QUALIFIER<SPuri>}
 * @implements {SIG_POLICY_QUALIFIER<SPuri>}
 */
export
const pointerToSigPolSpec: SIG_POLICY_QUALIFIER<SPuri> = {
    class: "SIG-POLICY-QUALIFIER",
    decoderFor: {
        "&Qualifier": _decode_SPuri,
    },
    encoderFor: {
        "&Qualifier": _encode_SPuri,
    },
    "&id": id_spq_ets_uri /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Qualifier": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
