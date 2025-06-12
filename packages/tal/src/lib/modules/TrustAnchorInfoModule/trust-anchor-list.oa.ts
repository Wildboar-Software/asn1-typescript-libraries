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
} from "asn1-ts";
import { TrustAnchorList, _decode_TrustAnchorList, _encode_TrustAnchorList } from "../TrustAnchorInfoModule/TrustAnchorList.ta.js";
import { id_ct_trustAnchorList } from "../TrustAnchorInfoModule/id-ct-trustAnchorList.va.js";
import { PKCS7_CONTENT_TYPE } from "../TrustAnchorInfoModule/PKCS7-CONTENT-TYPE.oca.js";


/* START_OF_SYMBOL_DEFINITION trust_anchor_list */
/**
 * @summary trust_anchor_list
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * trust-anchor-list PKCS7-CONTENT-TYPE ::= { TrustAnchorList IDENTIFIED BY id-ct-trustAnchorList }
 * ```
 *
 * @constant
 * @type {PKCS7_CONTENT_TYPE<TrustAnchorList>}
 * @implements {PKCS7_CONTENT_TYPE<TrustAnchorList>}
 */
export
const trust_anchor_list: PKCS7_CONTENT_TYPE<TrustAnchorList> = {
    class: "TYPE-IDENTIFIER",
    decoderFor: {
        "&Type": _decode_TrustAnchorList,
    },
    encoderFor: {
        "&Type": _encode_TrustAnchorList,
    },
    "&id": id_ct_trustAnchorList /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION trust_anchor_list */

/* eslint-enable */
