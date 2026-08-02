
/**
 * X.400 Message Handling System (MHS) O/R Address Name Forms
 * 
 * The values this can take on are defined in
 * [ITU-T Recommendation X.402](https://www.itu.int/rec/T-REC-X.402/en), Section 18.5.
 * 
 * These are:
 * 
 * - `mnem`: Mnemonic, meaning use of person names, organization names, etc.
 * - `numr`: Numeric, meaning use of `numeric-user-identifier`
 * - `post_f`: Postal (Formatted), meaning use of postal addressing-related attributes
 * - `post_u`: Postal (Unformatted), meaning use of `unformatted-postal-address`, or
 *   its universal equivalent.
 * - `term`: Terminal, meaning usage of terminal-related attributes
 * 
 * See Section 18.5 for the attributes required and permitted for each name form.
 */
export type NameForm =
    | "mnem"
    | "numr"
    | "post_f"
    | "post_u"
    | "term"
    ;
