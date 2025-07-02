/* eslint-disable */
import {
    UniqueIdentifier,
    _decode_UniqueIdentifier,
    _encode_UniqueIdentifier,
} from "../CMSDBKeyManagement/UniqueIdentifier.ta.mjs";
import { id_UniqueIdentifier } from "../CMSObjectIdentifiers/id-UniqueIdentifier.va.mjs";
import type { ATTRIBUTE } from "@wildboar/x500/InformationFramework";

/**
 * @summary uniqueIdentifier
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * uniqueIdentifier ATTRIBUTE ::= {
 * TYPE UniqueIdentifier IDENTIFIED BY id-UniqueIdentifier
 * }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE<UniqueIdentifier>}
 * @implements {ATTRIBUTE<UniqueIdentifier>}
 */
export const uniqueIdentifier: ATTRIBUTE<UniqueIdentifier> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_UniqueIdentifier,
    },
    encoderFor: {
        "&Type": _encode_UniqueIdentifier,
    },
    "&id": id_UniqueIdentifier /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
