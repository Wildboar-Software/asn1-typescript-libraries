/**
 * @summary SIGNED
 * @description
 *
 * Signed wrapper (`toBeSigned`, algorithm, BIT STRING signature).
 * A SPIF is `SIGNED{EncodedSPIF}` so the signature covers the
 * opaque encoding of `SPIF`. Re-exported from `@wildboar/x500`.
 * ITU-T Rec. X.841 (10/2000)
 * [§6.2.2](https://www.itu.int/rec/T-REC-X.841-200010-I).
 */
export {
    SIGNED,
    _get_decoder_for_SIGNED,
    _get_encoder_for_SIGNED,
} from "@wildboar/x500/AuthenticationFramework";
