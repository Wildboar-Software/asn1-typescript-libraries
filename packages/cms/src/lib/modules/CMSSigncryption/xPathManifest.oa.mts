/* eslint-disable */
import { xPath } from "../CMSObjectIdentifiers/xPath.va.mjs";
import { type SIGNCRYPTED } from "../CMSSigncryption/SIGNCRYPTED.oca.mjs";
import {
    XPathSet,
    _decode_XPathSet,
    _encode_XPathSet,
} from "../CMSSigncryption/XPathSet.ta.mjs";

/**
 * @summary xPathManifest
 * @description
 *
 * SIGNCRYPTED object using XPath 2.0 location paths to identify signcrypted
 * XML components (ITU-T X.894 | ISO/IEC 24824-4 clause 7.2.3).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * xPathManifest SIGNCRYPTED ::= {
 * OID xPath PARMS XPathSet
 * }
 * ```
 *
 * @constant
 * @type {SIGNCRYPTED<XPathSet>}
 * @implements {SIGNCRYPTED<XPathSet>}
 */
export const xPathManifest: SIGNCRYPTED<XPathSet> = {
    class: "SIGNCRYPTED",
    decoderFor: {
        "&Type": _decode_XPathSet,
    },
    encoderFor: {
        "&Type": _encode_XPathSet,
    },
    "&id": xPath /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
