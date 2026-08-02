
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

/**
 * X.400 Message Handling System (MHS) O/R Address Personal Name as JSON
 */
export type PersonalNameJSON = {
    /**
     * The surname of the personal name
     */
    surname: string;
    /**
     * The given name of the personal name
     */
    "given-name"?: string;
    /**
     * The initials of the personal name
     */
    "initials"?: string;
    /**
     * The generation qualifier of the personal name
     */
    "generation-qualifier"?: string;
};

/**
 * X.400 Message Handling System (MHS) O/R Address Built In Standard Attributes as JSON
 */
export type BuiltInStandardAttributesJSON = {
    /**
     * The country name of the built in standard attributes.
     * 
     * This can be either an ISO 3166-1 alpha-2 code or an X.121 DCC code.
     * 
     * You can tell one from the other: the X.121 DCC is all numeric.
     * The ISO 3166-1 alpha-2 code is two letters.
     */
    "country-name"?: string;
    /**
     * The administration domain name of the built in standard attributes
     */
    "administration-domain-name"?: string;
    /**
     * The network address of the built in standard attributes
     */
    "network-address"?: string;
    /**
     * The terminal identifier of the built in standard attributes
     */
    "terminal-identifier"?: string;
    /**
     * The private domain name of the built in standard attributes
     */
    "private-domain-name"?: string;
    /**
     * The organization name of the built in standard attributes
     */
    "organization-name"?: string;
    /**
     * The numeric user identifier of the built in standard attributes
     */
    "numeric-user-identifier"?: string;
    /**
     * The personal name of the built in standard attributes
     */
    "personal-name"?: PersonalNameJSON;
    /**
     * The organizational unit names of the built in standard attributes
     */
    "organizational-unit-names"?: string[];
};

/**
 * X.400 Message Handling System (MHS) O/R Address Extension Attribute as JSON
 */
export type ExtensionAttributeJSON = {
    /**
     * The type of the extension attribute
     */
    "extension-attribute-type": string;
    /**
     * The value of the extension attribute
     */
    "extension-attribute-value": unknown;
};

/**
 * X.400 Message Handling System (MHS) O/R Address Domain Defined Attribute as JSON
 */
export type DomainDefinedAttributeJSON = {
    /**
     * The type of the domain defined attribute
     */
    type: string;
    /**
     * The value of the domain defined attribute
     */
    value: string;
};

/**
 * X.400 Message Handling System (MHS) O/R Address as JSON
 */
export type ORAddressJSON = {
    /**
     * The built in standard attributes of the O/R address
     */
    "built-in-standard-attributes": BuiltInStandardAttributesJSON;
    /**
     * The built in domain defined attributes of the O/R address
     */
    "built-in-domain-defined-attributes"?: DomainDefinedAttributeJSON[];
    /**
     * The extension attributes of the O/R address
     */
    "extension-attributes"?: ExtensionAttributeJSON[];
};
