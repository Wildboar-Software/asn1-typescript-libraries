import { OBJECT_IDENTIFIER, ObjectIdentifier } from "@wildboar/asn1";

export const EXT_BIT_SUBENTRIES: number = 1;
export const EXT_BIT_COPY_SHALL_DO: number = 2;
export const EXT_BIT_ATTRIBUTE_SIZE_LIMIT: number = 3;
export const EXT_BIT_EXTRA_ATTRIBUTES: number = 4;
export const EXT_BIT_MODIFY_RIGHTS_REQUEST: number = 5;
export const EXT_BIT_PAGED_RESULTS_REQUEST: number = 6;
export const EXT_BIT_MATCHED_VALUES_ONLY: number = 7;
export const EXT_BIT_EXTENDED_FILTER: number = 8;
export const EXT_BIT_TARGET_SYSTEM: number = 9;
export const EXT_BIT_USE_ALIAS_ON_UPDATE: number = 10;
export const EXT_BIT_NEW_SUPERIOR: number = 11;
export const EXT_BIT_MANAGE_DSA_IT: number = 12;
export const EXT_BIT_USE_OF_CONTEXTS: number = 13;
export const EXT_BIT_PARTIAL_NAME_RESOLUTION: number = 14;
export const EXT_BIT_OVERSPEC_FILTER: number = 15;
export const EXT_BIT_SELECTION_ON_MODIFY: number = 16;
export const EXT_BIT_SECURITY_OPERATION_CODE: number = 18;
export const EXT_BIT_SECURITY_ATTRIBUTE_CERTIFICATION_PATH: number = 19;
export const EXT_BIT_SECURITY_ERROR_PROTECTION: number = 20;
export const EXT_BIT_SERVICE_ADMINISTRATION: number = 25;
export const EXT_BIT_ENTRY_COUNT: number = 26;
export const EXT_BIT_HIERARCHY_SELECTIONS: number = 27;
export const EXT_BIT_RELAXATION: number = 28;
export const EXT_BIT_FAMILY_GROUPING: number = 29;
export const EXT_BIT_FAMILY_RETURN: number = 30;
export const EXT_BIT_DN_ATTRIBUTES: number = 31;
export const EXT_BIT_FRIEND_ATTRIBUTES: number = 32;
export const EXT_BIT_ABANDON_OF_PAGED_RESULTS: number = 33;
export const EXT_BIT_PAGED_RESULTS_ON_THE_DSP: number = 34;
export const EXT_BIT_REPLACE_VALUES: number = 35;

/**
 * X.500 directory operations to which critical extensions can apply
 */
type Operations = {
    read: boolean;
    compare: boolean;
    list: boolean;
    search: boolean;
    addEntry: boolean;
    removeEntry: boolean;
    modifyEntry: boolean;
    modifyDN: boolean;
    abandon: boolean;
};

/**
 * Information about a Directory Access Protocol (DAP) Critical Extension
 */
type ExtensionInfo = {

    /**
     * The 1-based index of the bit in the `criticalExtensions` `BIT STRING`
     * that corresponds to this critical extension.
     */
    identifier: number;

    /**
     * The operations to which this critical extension applies. `undefined` if
     * it applies to all of them.
     */
    operations?: Partial<Operations>; // Undefined means "all"

    /**
     * Whether this extension is critical (which makes you wonder why they are
     * called critical extensions if this can be `false`)
     */
    critical: boolean;

    /**
     * The corresponding LDAP control `OBJECT IDENTIFIER`, if one is defined.
     */
    ldapControl?: OBJECT_IDENTIFIER;
};

const CRITICAL: boolean = true;
const NON_CRITICAL: boolean = false;
const ALL_OPERATIONS: Partial<Operations> = undefined;
const SEARCH = {
    search: true,
};

/**
 * @summary Data on all Directory Access Protocol (DAP) Critical Extensions
 * @descriptions
 *
 * This is a mapping of Directory Access Protocol (DAP) Critical Extensions by
 * their names. This information was taken from ITU-T Recommendation X.511
 * (2019), Section 7.3.1.
 *
 * @constant {Object}
 */
export
const extensions: Record<string, ExtensionInfo> = {
    subentries: {
        identifier: EXT_BIT_SUBENTRIES,
        operations: ALL_OPERATIONS,
        critical: NON_CRITICAL,
        ldapControl: ObjectIdentifier.fromParts([ 1, 3, 6, 1, 4, 1, 4203, 1, 10, 1 ]),
    },
    copyShallDo: {
        identifier: EXT_BIT_COPY_SHALL_DO,
        operations: {
            read: true,
            compare: true,
            list: true,
            search: true,
        },
        critical: NON_CRITICAL,
    },
    "attribute size limit": {
        identifier: EXT_BIT_ATTRIBUTE_SIZE_LIMIT,
        operations: {
            read: true,
            search: true,
        },
        critical: NON_CRITICAL,
    },
    extraAttributes: {
        identifier: EXT_BIT_EXTRA_ATTRIBUTES,
        operations: {
            read: true,
            search: true,
        },
        critical: NON_CRITICAL,
    },
    modifyRightsRequest: {
        identifier: EXT_BIT_MODIFY_RIGHTS_REQUEST,
        operations: {
            read: true,
        },
        critical: NON_CRITICAL,
    },
    pagedResultsRequest: {
        identifier: EXT_BIT_PAGED_RESULTS_REQUEST,
        operations: {
            list: true,
            search: true,
        },
        critical: NON_CRITICAL,
        ldapControl: ObjectIdentifier.fromParts([ 1, 2, 840, 113556, 1, 4, 319 ]),
    },
    matchedValuesOnly: {
        identifier: EXT_BIT_MATCHED_VALUES_ONLY,
        operations: {
            read: true,
        },
        critical: NON_CRITICAL,
        ldapControl: ObjectIdentifier.fromParts([ 1, 2, 826, 0, 1, 3344810, 2, 3 ]),
    },
    extendedFilter: {
        identifier: EXT_BIT_EXTENDED_FILTER,
        operations: SEARCH,
        critical: NON_CRITICAL,
    },
    targetSystem: {
        identifier: EXT_BIT_TARGET_SYSTEM,
        operations: {
            addEntry: true,
        },
        critical: CRITICAL,
    },
    useAliasOnUpdate: {
        identifier: EXT_BIT_USE_ALIAS_ON_UPDATE,
        operations: {
            addEntry: true,
            removeEntry: true,
            modifyEntry: true,
        },
        critical: CRITICAL,
    },
    newSuperior: {
        identifier: EXT_BIT_NEW_SUPERIOR,
        operations: {
            modifyDN: true,
        },
        critical: CRITICAL,
    },
    manageDSAIT: {
        identifier: EXT_BIT_MANAGE_DSA_IT,
        operations: ALL_OPERATIONS,
        critical: CRITICAL,
        ldapControl: ObjectIdentifier.fromParts([ 2, 16, 840, 1, 113730, 3, 4, 2 ]),
    },
    "Use of contexts": {
        identifier: EXT_BIT_USE_OF_CONTEXTS,
        operations: {
            read: true,
            compare: true,
            list: true,
            search: true,
            addEntry: true,
            modifyEntry: true,
            modifyDN: true,
        },
        critical: NON_CRITICAL,
    },
    partialNameResolution: {
        identifier: EXT_BIT_PARTIAL_NAME_RESOLUTION,
        operations: {
            read: true,
            search: true,
        },
        critical: NON_CRITICAL,
    },
    overspecFilter: {
        identifier: EXT_BIT_OVERSPEC_FILTER,
        operations: SEARCH,
        critical: NON_CRITICAL,
    },
    selectionOnModify: {
        identifier: EXT_BIT_SELECTION_ON_MODIFY,
        operations: {
            modifyEntry: true,
        },
        critical: NON_CRITICAL,
    },
    "Security parameters - Operation code": {
        identifier: EXT_BIT_SECURITY_OPERATION_CODE,
        operations: ALL_OPERATIONS,
        critical: NON_CRITICAL,
    },
    "Security parameters - Attribute certification path": {
        identifier: EXT_BIT_SECURITY_ATTRIBUTE_CERTIFICATION_PATH,
        operations: ALL_OPERATIONS,
        critical: NON_CRITICAL,
    },
    "Security parameters - Error Protection": {
        identifier: EXT_BIT_SECURITY_ERROR_PROTECTION,
        operations: ALL_OPERATIONS,
        critical: NON_CRITICAL,
    },
    "Service administration": {
        identifier: EXT_BIT_SERVICE_ADMINISTRATION,
        operations: {
            read: true,
            search: true,
            modifyEntry: true,
        },
        critical: CRITICAL,
    },
    entryCount: {
        identifier: EXT_BIT_ENTRY_COUNT,
        operations: SEARCH,
        critical: NON_CRITICAL,
    },
    hierarchySelections: {
        identifier: EXT_BIT_HIERARCHY_SELECTIONS,
        operations: SEARCH,
        critical: NON_CRITICAL,
    },
    relaxation: {
        identifier: EXT_BIT_RELAXATION,
        operations: SEARCH,
        critical: NON_CRITICAL,
    },
    familyGrouping: {
        identifier: EXT_BIT_FAMILY_GROUPING,
        operations: {
            compare: true,
            search: true,
            removeEntry: true,
        },
        critical: CRITICAL, // TODO: Varies per operation
    },
    familyReturn: {
        identifier: EXT_BIT_FAMILY_RETURN,
        operations: {
            read: true,
            search: true,
            modifyEntry: true,
        },
        critical: NON_CRITICAL,
    },
    dnAttributes: {
        identifier: EXT_BIT_DN_ATTRIBUTES,
        operations: SEARCH,
        critical: NON_CRITICAL,
    },
    "friend attributes": {
        identifier: EXT_BIT_FRIEND_ATTRIBUTES,
        operations: {
            read: true,
            search: true,
        },
        critical: NON_CRITICAL,
    },
    "Abandon of paged results": {
        identifier: EXT_BIT_ABANDON_OF_PAGED_RESULTS,
        operations: {
            list: true,
            search: true,
        },
        critical: CRITICAL,
    },
    "Paged results on the DSP": {
        identifier: EXT_BIT_PAGED_RESULTS_ON_THE_DSP,
        operations: {
            list: true,
            search: true,
        },
        critical: NON_CRITICAL,
    },
    replaceValues: {
        identifier: EXT_BIT_REPLACE_VALUES,
        operations: {
            modifyEntry: true,
        },
        critical: CRITICAL,
        ldapControl: ObjectIdentifier.fromParts([ 1, 3, 6, 1, 1, 14 ]),
    },
};

export default extensions;
