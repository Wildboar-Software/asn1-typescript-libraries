/**
 * ACSE authentication value carried on M-ASSOCIATE / A-ASSOCIATE and
 * stored on the Application Association object when present
 * (ISO 9506-1:2003 §8.2; ISO 9506-2:2003 Annex A). Re-exported from
 * `@wildboar/acse`; this module does not define ACSE field semantics.
 */
export {
    type Authentication_value,
    _decode_Authentication_value,
    _encode_Authentication_value,
} from "@wildboar/acse";
