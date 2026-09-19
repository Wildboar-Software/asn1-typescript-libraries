/**
 * CMS `RevocationInfoChoices` (RFC 3852). Optional
 * `SignedTestReport.crls` in ISO/IEC 29120-1:2022 Clause 6.6;
 * intended to support checking `certificates` validity.
 */
export {
    type RevocationInfoChoices,
    _decode_RevocationInfoChoices,
    _encode_RevocationInfoChoices,
} from "@wildboar/cms";
