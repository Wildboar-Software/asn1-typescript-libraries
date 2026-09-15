/* eslint-disable */
import {
    NULL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type ALGORITHM_IDENTIFIER } from "../CryptographicInformationFramework/ALGORITHM-IDENTIFIER.oca.mjs";
import { id_sha1 } from "../CryptographicInformationFramework/id-sha1.va.mjs";


/**
 * @summary DigestAlgorithms_Union0_Intersection0_Element
 * @description
 * 
 * SHA-1 member of `DigestAlgorithms`: NULL parameters identified by `id-sha1`.
 * ISO/IEC 7816-15:2016 Annex A.2.5.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DigestAlgorithms-Union0-Intersection0-Element ::= {
 *     NULL IDENTIFIED BY sha-1
 * }
 * ```
 * 
 * @constant
 * @type {ALGORITHM_IDENTIFIER<NULL>}
 * @implements {ALGORITHM_IDENTIFIER<NULL>}
 */
export
const DigestAlgorithms_Union0_Intersection0_Element: ALGORITHM_IDENTIFIER<NULL> = {
    class: "TYPE-IDENTIFIER",
    decoderFor: {
        "&Type": $._decodeNull,
    },
    encoderFor: {
        "&Type": $._encodeNull,
    },
    "&id": id_sha1 /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
