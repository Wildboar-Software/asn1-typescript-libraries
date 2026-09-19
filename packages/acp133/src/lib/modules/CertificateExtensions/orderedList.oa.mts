/* eslint-disable */
import { OrderedListSyntax, _decode_OrderedListSyntax, _encode_OrderedListSyntax } from "../CertificateExtensions/OrderedListSyntax.ta.mjs";
// export { OrderedListSyntax, _enum_for_OrderedListSyntax, OrderedListSyntax_ascSerialNum /* IMPORTED_LONG_ENUMERATION_ITEM */, ascSerialNum /* IMPORTED_SHORT_ENUMERATION_ITEM */, OrderedListSyntax_ascRevDate /* IMPORTED_LONG_ENUMERATION_ITEM */, ascRevDate /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_OrderedListSyntax, _encode_OrderedListSyntax } from "../CertificateExtensions/OrderedListSyntax.ta.mjs";
import { id_ce_orderedList } from "../CertificateExtensions/id-ce-orderedList.va.mjs";
// export { id_ce_orderedList } from "../CertificateExtensions/id-ce-orderedList.va.mjs";
import { type EXTENSION } from "../AuthenticationFramework/EXTENSION.oca.mjs";


/**
 * @summary orderedList
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * orderedList EXTENSION ::= {
 *   SYNTAX         OrderedListSyntax
 *   IDENTIFIED BY  id-ce-orderedList }
 * ```
 * 
 * @constant
 * @type {EXTENSION<OrderedListSyntax>}
 * @implements {EXTENSION<OrderedListSyntax>}
 */
export
const orderedList: EXTENSION<OrderedListSyntax> = {
    class: "EXTENSION",
    decoderFor: {
        "&ExtnType": _decode_OrderedListSyntax,
    },
    encoderFor: {
        "&ExtnType": _encode_OrderedListSyntax,
    },
    "&id": id_ce_orderedList /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ExtnType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
