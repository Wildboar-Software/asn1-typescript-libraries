/**
 * @summary Type of a substrings match
 * @description
 * 
 * Used for substrings matching rules.
 * 
 * @enum
 */
export
const SubstringSelection = {
    any_: 0,
    initial: 1,
    final: 2,
} as const;

export type SubstringSelection = (typeof SubstringSelection)[keyof typeof SubstringSelection];

export default SubstringSelection;
