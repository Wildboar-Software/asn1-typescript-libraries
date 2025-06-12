/* eslint-disable */
import { ALGORITHM } from "@wildboar/x500/src/lib/modules/AuthenticationFramework/ALGORITHM.oca.mjs";
import { id_ckm_key_agree_hash } from "../CMSObjectIdentifiers/id-ckm-key-agree-hash.va.mjs";
import {
    DigestAlgorithmIdentifier,
    _decode_DigestAlgorithmIdentifier,
    _encode_DigestAlgorithmIdentifier,
} from "../CryptographicMessageSyntax-2010/DigestAlgorithmIdentifier.ta.mjs";
export { ALGORITHM } from "../AlgorithmInformation-2009/ALGORITHM.oca.mjs";
export {
    absent /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    inheritable /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    optional /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    ParamOptions,
    ParamOptions_absent /* IMPORTED_LONG_ENUMERATION_ITEM */,
    ParamOptions_inheritable /* IMPORTED_LONG_ENUMERATION_ITEM */,
    ParamOptions_optional /* IMPORTED_LONG_ENUMERATION_ITEM */,
    ParamOptions_preferredAbsent /* IMPORTED_LONG_ENUMERATION_ITEM */,
    ParamOptions_preferredPresent /* IMPORTED_LONG_ENUMERATION_ITEM */,
    ParamOptions_required /* IMPORTED_LONG_ENUMERATION_ITEM */,
    preferredAbsent /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    preferredPresent /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    required /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    _decode_ParamOptions,
    _encode_ParamOptions,
    _enum_for_ParamOptions,
} from "../AlgorithmInformation-2009/ParamOptions.ta.mjs";
export { SMIME_CAPS } from "../AlgorithmInformation-2009/SMIME-CAPS.oca.mjs";
export { id_ckm_key_agree_hash } from "../CMSObjectIdentifiers/id-ckm-key-agree-hash.va.mjs";
export {
    DigestAlgorithmIdentifier,
    _decode_DigestAlgorithmIdentifier,
    _encode_DigestAlgorithmIdentifier,
} from "../CryptographicMessageSyntax-2010/DigestAlgorithmIdentifier.ta.mjs";

/* START_OF_SYMBOL_DEFINITION keyAgreeHashConstruction */
/**
 * @summary keyAgreeHashConstruction
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * keyAgreeHashConstruction ALGORITHM ::= {
 * IDENTIFIER id-ckm-key-agree-hash
 * PARAMS TYPE DigestAlgorithmIdentifier ARE required
 * }
 * ```
 *
 * @constant
 * @type {ALGORITHM<DigestAlgorithmIdentifier>}
 * @implements {ALGORITHM<DigestAlgorithmIdentifier>}
 */
export const keyAgreeHashConstruction: ALGORITHM<DigestAlgorithmIdentifier> = {
    class: "ALGORITHM",
    decoderFor: {
        "&Type": _decode_DigestAlgorithmIdentifier,
    },
    encoderFor: {
        "&Type": _encode_DigestAlgorithmIdentifier,
    },
    "&id": id_ckm_key_agree_hash /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION keyAgreeHashConstruction */

/* eslint-enable */
