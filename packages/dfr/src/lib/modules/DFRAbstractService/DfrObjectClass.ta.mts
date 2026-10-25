/* eslint-disable */
import {
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary DfrObjectClass
 * @description
 *
 * Class of a DFR-Object in a document store: document, root group, proper
 * group, reference, or search-result-list. Stored as the mandatory
 * `dfr-object-class` attribute of every object. ISO/IEC 10166-1:1991 §3.2.21,
 * §6.3, §9.2.2.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DfrObjectClass  ::=  ENUMERATED {
 *     dfr-document            (0),
 *     dfr-root-group          (1),
 *     dfr-proper-group        (2),
 *     dfr-reference           (3),
 *     dfr-search-result-list  (4)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_DfrObjectClass {
    dfr_document = 0,
    dfr_root_group = 1,
    dfr_proper_group = 2,
    dfr_reference = 3,
    dfr_search_result_list = 4,
}

/**
 * @summary DfrObjectClass
 * @description
 *
 * Class of a DFR-Object in a document store: document, root group, proper
 * group, reference, or search-result-list. Stored as the mandatory
 * `dfr-object-class` attribute of every object. ISO/IEC 10166-1:1991 §3.2.21,
 * §6.3, §9.2.2.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DfrObjectClass  ::=  ENUMERATED {
 *     dfr-document            (0),
 *     dfr-root-group          (1),
 *     dfr-proper-group        (2),
 *     dfr-reference           (3),
 *     dfr-search-result-list  (4)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type DfrObjectClass = _enum_for_DfrObjectClass;

/**
 * @summary DfrObjectClass
 * @description
 *
 * Class of a DFR-Object in a document store: document, root group, proper
 * group, reference, or search-result-list. Stored as the mandatory
 * `dfr-object-class` attribute of every object. ISO/IEC 10166-1:1991 §3.2.21,
 * §6.3, §9.2.2.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DfrObjectClass  ::=  ENUMERATED {
 *     dfr-document            (0),
 *     dfr-root-group          (1),
 *     dfr-proper-group        (2),
 *     dfr-reference           (3),
 *     dfr-search-result-list  (4)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const DfrObjectClass = _enum_for_DfrObjectClass;

/**
 * @summary DfrObjectClass_dfr_document
 * @description
 *
 * Structured filed content plus attributes. The server does not interpret the
 * content. ISO/IEC 10166-1:1991 §3.2.11, §6.3.2.
 * @constant
 * @type {number}
 */
export
const DfrObjectClass_dfr_document = DfrObjectClass.dfr_document satisfies DfrObjectClass; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary dfr_document
 * @description
 *
 * Structured filed content plus attributes. The server does not interpret the
 * content. ISO/IEC 10166-1:1991 §3.2.11, §6.3.2.
 * @constant
 * @type {number}
 */
export
const dfr_document = DfrObjectClass.dfr_document satisfies DfrObjectClass; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary DfrObjectClass_dfr_root_group
 * @description
 *
 * Distinguished group with no ancestor; its object-tree is the whole store.
 * Cannot be moved. ISO/IEC 10166-1:1991 §3.2.27, §8.2.4.
 * @constant
 * @type {number}
 */
export
const DfrObjectClass_dfr_root_group = DfrObjectClass.dfr_root_group satisfies DfrObjectClass; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary dfr_root_group
 * @description
 *
 * Distinguished group with no ancestor; its object-tree is the whole store.
 * Cannot be moved. ISO/IEC 10166-1:1991 §3.2.27, §8.2.4.
 * @constant
 * @type {number}
 */
export
const dfr_root_group = DfrObjectClass.dfr_root_group satisfies DfrObjectClass; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary DfrObjectClass_dfr_proper_group
 * @description
 *
 * Any group other than the root group. ISO/IEC 10166-1:1991 §3.2.24.
 * @constant
 * @type {number}
 */
export
const DfrObjectClass_dfr_proper_group = DfrObjectClass.dfr_proper_group satisfies DfrObjectClass; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary dfr_proper_group
 * @description
 *
 * Any group other than the root group. ISO/IEC 10166-1:1991 §3.2.24.
 * @constant
 * @type {number}
 */
export
const dfr_proper_group = DfrObjectClass.dfr_proper_group satisfies DfrObjectClass; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary DfrObjectClass_dfr_reference
 * @description
 *
 * Link to a referent (document, group, or search-result-list; never another
 * reference). ISO/IEC 10166-1:1991 §3.2.25, §6.3.3.
 * @constant
 * @type {number}
 */
export
const DfrObjectClass_dfr_reference = DfrObjectClass.dfr_reference satisfies DfrObjectClass; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary dfr_reference
 * @description
 *
 * Link to a referent (document, group, or search-result-list; never another
 * reference). ISO/IEC 10166-1:1991 §3.2.25, §6.3.3.
 * @constant
 * @type {number}
 */
export
const dfr_reference = DfrObjectClass.dfr_reference satisfies DfrObjectClass; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary DfrObjectClass_dfr_search_result_list
 * @description
 *
 * Stored result of Search: matching UPIs plus the criteria and domain used.
 * ISO/IEC 10166-1:1991 §3.2.29, §6.3.5.
 * @constant
 * @type {number}
 */
export
const DfrObjectClass_dfr_search_result_list = DfrObjectClass.dfr_search_result_list satisfies DfrObjectClass; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary dfr_search_result_list
 * @description
 *
 * Stored result of Search: matching UPIs plus the criteria and domain used.
 * ISO/IEC 10166-1:1991 §3.2.29, §6.3.5.
 * @constant
 * @type {number}
 */
export
const dfr_search_result_list = DfrObjectClass.dfr_search_result_list satisfies DfrObjectClass; /* SHORT_NAMED_ENUMERATED_VALUE */
export function _decode_DfrObjectClass(el: _Element): DfrObjectClass {
    const enumerated = $._decodeEnumerated(el);
    switch (enumerated) {
        case DfrObjectClass.dfr_document: return DfrObjectClass.dfr_document;
        case DfrObjectClass.dfr_root_group: return DfrObjectClass.dfr_root_group;
        case DfrObjectClass.dfr_proper_group: return DfrObjectClass.dfr_proper_group;
        case DfrObjectClass.dfr_reference: return DfrObjectClass.dfr_reference;
        case DfrObjectClass.dfr_search_result_list: return DfrObjectClass.dfr_search_result_list;
        default:
            throw new _ConstructionError(
                "Invalid ENUMERATED value " + enumerated + " for DfrObjectClass.",
                el,
            );
    }
}
export const _encode_DfrObjectClass: $.ASN1Encoder<DfrObjectClass> = $._encodeEnumerated as $.ASN1Encoder<DfrObjectClass>;


/* eslint-enable */
