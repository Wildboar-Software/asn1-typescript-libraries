/* eslint-disable */
import {
    AlgorithmIdentifier,
    _decode_AlgorithmIdentifier,
    _encode_AlgorithmIdentifier,
} from "../AuthenticationFramework/AlgorithmIdentifier.ta.mjs";
import { id_ldx_algorithmIdentifier } from "../CertificateExtensions/id-ldx-algorithmIdentifier.va.mjs";
import { type SYNTAX_NAME } from "../InformationFramework/SYNTAX-NAME.oca.mjs";
/**
 * @summary algorithmIdentifier
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * algorithmIdentifier SYNTAX-NAME ::= {
 *   LDAP-DESC         "X.509 Algorithm Identifier"
 *   DIRECTORY SYNTAX  AlgorithmIdentifier{{SupportedAlgorithms}}
 *   ID                id-ldx-algorithmIdentifier }
 * ```
 *
 * @constant
 * @type {SYNTAX_NAME<AlgorithmIdentifier>}
 * @implements {SYNTAX_NAME<AlgorithmIdentifier>}
 */
export const algorithmIdentifier: SYNTAX_NAME<AlgorithmIdentifier> = {
    class: "SYNTAX-NAME",
    decoderFor: {
        "&Type": _decode_AlgorithmIdentifier,
    },
    encoderFor: {
        "&Type": _encode_AlgorithmIdentifier,
    },
    "&ldapDesc": "X.509 Algorithm Identifier" /* OBJECT_FIELD_SETTING */,
    "&id": id_ldx_algorithmIdentifier /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
