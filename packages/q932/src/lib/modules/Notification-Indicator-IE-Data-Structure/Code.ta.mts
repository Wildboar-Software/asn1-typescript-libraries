/**
 * Operation or notification code: a local integer or a global object
 * identifier. The same CHOICE is used for ROSE operation and error codes and
 * for notification type identifiers. Amendment 1 notes that the ROSE module
 * matches Appendix A of ITU-T Rec. X.880. Bind and unbind are outside the scope
 * of Q.932.
 *
 * For a non-standardized VPN notification, Annex D requires the global
 * alternative (an object identifier).
 *
 * ITU-T Rec. Q.932 (1998) Amd.1 (06/2000) Table 8-14 bis and Table IV.1 bis;
 * ITU-T Rec. Q.932 (05/1998) Annex D, D.5.2.
 *
 * @see https://www.itu.int/rec/T-REC-Q.932
 */
export {
    type Code,
    _decode_Code,
    _encode_Code,
} from "@wildboar/rose";
