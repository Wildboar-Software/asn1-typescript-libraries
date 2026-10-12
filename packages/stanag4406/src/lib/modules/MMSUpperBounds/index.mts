/**
 * ASN.1 module `MMSUpperBounds`.
 *
 * Length bounds for military strings, subject indicator codes, and ACP 127
 * data, from STANAG 4406 (Ed. 2), Annex A, Annex K.
 */
export {
    lb_military_sic,
} from "./lb-military-sic.va.mjs";
export {
    ub_data_size,
} from "./ub-data-size.va.mjs";
export {
    ub_military_bigstring,
} from "./ub-military-bigstring.va.mjs";
export {
    ub_military_number_of_sics,
} from "./ub-military-number-of-sics.va.mjs";
export {
    ub_military_sic,
} from "./ub-military-sic.va.mjs";
export {
    ub_military_string,
} from "./ub-military-string.va.mjs";
