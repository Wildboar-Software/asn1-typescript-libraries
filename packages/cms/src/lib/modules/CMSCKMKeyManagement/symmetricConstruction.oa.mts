/* eslint-disable */
import type { ALGORITHM } from "@wildboar/x500/AuthenticationFramework";
import {
    ConstructionAlgorithms,
    _decode_ConstructionAlgorithms,
    _encode_ConstructionAlgorithms,
} from "../CMSCKMKeyManagement/ConstructionAlgorithms.ta.mjs";
import { id_ckm_symmetric } from "../CMSObjectIdentifiers/id-ckm-symmetric.va.mjs";

/**
 * @summary symmetricConstruction
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * symmetricConstruction    ALGORITHM ::= {
 * IDENTIFIER id-ckm-symmetric
 * PARAMS TYPE ConstructionAlgorithms ARE required}
 * ```
 *
 * @constant
 * @type {ALGORITHM<ConstructionAlgorithms>}
 * @implements {ALGORITHM<ConstructionAlgorithms>}
 */
export const symmetricConstruction: ALGORITHM<ConstructionAlgorithms> = {
    class: "ALGORITHM",
    decoderFor: {
        "&Type": _decode_ConstructionAlgorithms,
    },
    encoderFor: {
        "&Type": _encode_ConstructionAlgorithms,
    },
    "&id": id_ckm_symmetric /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
