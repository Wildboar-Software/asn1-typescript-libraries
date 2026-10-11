/* eslint-disable */
import { DocumentTypeListSyntax, _decode_DocumentTypeListSyntax, _encode_DocumentTypeListSyntax } from "../Doc-9303-Part-12-Module/DocumentTypeListSyntax.ta.mjs";
// export { DocumentTypeListSyntax, _decode_DocumentTypeListSyntax, _encode_DocumentTypeListSyntax } from "../Doc-9303-Part-12-Module/DocumentTypeListSyntax.ta.mjs";
import { id_icao_mrtd_security_extensions_documentTypeList } from "../Doc-9303-Part-12-Module/id-icao-mrtd-security-extensions-documentTypeList.va.mjs";
// export { id_icao_mrtd_security_extensions_documentTypeList } from "../Doc-9303-Part-12-Module/id-icao-mrtd-security-extensions-documentTypeList.va.mjs";
import { type EXTENSION } from "../AuthenticationFramework/EXTENSION.oca.mjs";


/**
 * @summary documentTypeList
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * documentTypeList EXTENSION ::= {
 *     SYNTAX DocumentTypeListSyntax
 *     IDENTIFIED BY id-icao-mrtd-security-extensions-documentTypeList
 * }
 * ```
 * 
 * @constant
 * @type {EXTENSION<DocumentTypeListSyntax>}
 * @implements {EXTENSION<DocumentTypeListSyntax>}
 */
export
const documentTypeList: EXTENSION<DocumentTypeListSyntax> = {
    class: "EXTENSION",
    decoderFor: {
        "&ExtnType": _decode_DocumentTypeListSyntax,
    },
    encoderFor: {
        "&ExtnType": _encode_DocumentTypeListSyntax,
    },
    "&id": id_icao_mrtd_security_extensions_documentTypeList /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ExtnType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
