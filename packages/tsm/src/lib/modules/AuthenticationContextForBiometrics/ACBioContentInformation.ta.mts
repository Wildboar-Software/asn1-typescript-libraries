/**
 * @description
 *
 * ISO/IEC 24761 ACBio content. Optional TSM field `aCforBioOnClient` /
 * `aCforBioOnTTP` for process integrity. ITU-T Rec. X.1084 (05/2008) §6,
 * §11, Annex A.
 */
export {
    type ACBioContentInformation,
    _decode_ACBioContentInformation,
    _encode_ACBioContentInformation,
} from "@wildboar/acbio";
