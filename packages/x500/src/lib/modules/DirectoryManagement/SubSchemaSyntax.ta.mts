/* eslint-disable */
import { ASN1Element as _Element } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    SubSchemaSyntax_Item,
    _decode_SubSchemaSyntax_Item,
    _encode_SubSchemaSyntax_Item,
} from "../DirectoryManagement/SubSchemaSyntax-Item.ta.mjs";
/**
 * @summary SubSchemaSyntax
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SubSchemaSyntax  ::=
 *   SEQUENCE OF
 *     SEQUENCE {name       [1]  Name, --  Name of the subschema subentry for the subschema
 *               subSchema
 *                 [2]  SEQUENCE {structureRules
 *                                  [1]  SEQUENCE OF DITStructureRuleDescription
 *                                    OPTIONAL,
 *                                contentRules
 *                                  [2]  SEQUENCE OF DITContentRuleDescription
 *                                    OPTIONAL,
 *                                matchingRules
 *                                  [3]  SEQUENCE OF MatchingRuleDescription
 *                                    OPTIONAL,
 *                                attributeTypes
 *                                  [4]  SEQUENCE OF AttributeTypeDescription
 *                                    OPTIONAL,
 *                                objectClasses
 *                                  [5]  SEQUENCE OF ObjectClassDescription
 *                                    OPTIONAL,
 *                                nameForms
 *                                  [6]  SEQUENCE OF NameFormDescription OPTIONAL,
 *                                matchRuleUses
 *                                  [7]  SEQUENCE OF MatchingRuleUseDescription
 *                                    OPTIONAL}}
 * ```
 */
export type SubSchemaSyntax = SubSchemaSyntax_Item[]; // SequenceOfType

let _cached_decoder_for_SubSchemaSyntax: $.ASN1Decoder<SubSchemaSyntax> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SubSchemaSyntax
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SubSchemaSyntax} The decoded data structure.
 */
export function _decode_SubSchemaSyntax(el: _Element): SubSchemaSyntax {
    if (!_cached_decoder_for_SubSchemaSyntax) {
        _cached_decoder_for_SubSchemaSyntax = $._decodeSequenceOf<SubSchemaSyntax_Item>(
            () => _decode_SubSchemaSyntax_Item
        );
    }
    return _cached_decoder_for_SubSchemaSyntax(el);
}

let _cached_encoder_for_SubSchemaSyntax: $.ASN1Encoder<SubSchemaSyntax> | null = null;

/**
 * @summary Encodes a(n) SubSchemaSyntax into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SubSchemaSyntax, encoded as an ASN.1 Element.
 */
export function _encode_SubSchemaSyntax(
    value: SubSchemaSyntax,
    elGetter: $.ASN1Encoder<SubSchemaSyntax>
): _Element {
    if (!_cached_encoder_for_SubSchemaSyntax) {
        _cached_encoder_for_SubSchemaSyntax = $._encodeSequenceOf<SubSchemaSyntax_Item>(
            () => _encode_SubSchemaSyntax_Item,
            $.DER
        );
    }
    return _cached_encoder_for_SubSchemaSyntax(value, elGetter);
}


/* eslint-enable */
