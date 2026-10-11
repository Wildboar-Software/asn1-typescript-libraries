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
 * Document types, as written in the MRZ, that a signer may produce. The
 * extension value is `DocumentTypeListSyntax`.
 *
 * Required on a Document Signer certificate, and it must be non-critical. If
 * it is present, an inspection system should check it against the document
 * type in Data Group 1 and in the visual MRZ (Doc 9303-11, section 5.1.1).
 * If it is absent, that section says the inspection system should check that
 * the certificate's key usage is `digitalSignature` and that it has no
 * extended key usage.
 *
 * Prohibited on an LDS2 Signer certificate: those certificates contain only
 * the extensions in Table 7. Optional on a Bar Code Signer certificate
 * (Table 8).
 *
 * Doc 9303-12, sections 7.1.1.6, 7.1.2, and 7.1.3.
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
