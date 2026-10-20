/* eslint-disable */
import {
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary EntryInformationSelection_infoTypes
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EntryInformationSelection-infoTypes ::= INTEGER { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type EntryInformationSelection_infoTypes = INTEGER;

/**
 * @summary EntryInformationSelection_infoTypes_attributeTypesOnly
 * @constant
 * @type {number}
 */
export
const EntryInformationSelection_infoTypes_attributeTypesOnly: EntryInformationSelection_infoTypes = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary EntryInformationSelection_infoTypes_attributeTypesOnly
 * @constant
 * @type {number}
 */
export
const attributeTypesOnly: EntryInformationSelection_infoTypes = EntryInformationSelection_infoTypes_attributeTypesOnly; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary EntryInformationSelection_infoTypes_attributeTypesAndValues
 * @constant
 * @type {number}
 */
export
const EntryInformationSelection_infoTypes_attributeTypesAndValues: EntryInformationSelection_infoTypes = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary EntryInformationSelection_infoTypes_attributeTypesAndValues
 * @constant
 * @type {number}
 */
export
const attributeTypesAndValues: EntryInformationSelection_infoTypes = EntryInformationSelection_infoTypes_attributeTypesAndValues; /* SHORT_NAMED_INTEGER_VALUE */

export
const _decode_EntryInformationSelection_infoTypes: $.ASN1Decoder<EntryInformationSelection_infoTypes> = $._decodeInteger;

export
const _encode_EntryInformationSelection_infoTypes: $.ASN1Encoder<EntryInformationSelection_infoTypes> = $._encodeInteger;

/* eslint-enable */
