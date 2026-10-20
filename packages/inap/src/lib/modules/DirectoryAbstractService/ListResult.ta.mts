/* eslint-disable */
import {
    BOOLEAN,
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { OPTIONALLY_PROTECTED, _get_decoder_for_OPTIONALLY_PROTECTED, _get_encoder_for_OPTIONALLY_PROTECTED } from "../EnhancedSecurity/OPTIONALLY-PROTECTED.ta.mjs";
// export { OPTIONALLY_PROTECTED, _get_decoder_for_OPTIONALLY_PROTECTED, _get_encoder_for_OPTIONALLY_PROTECTED } from "../EnhancedSecurity/OPTIONALLY-PROTECTED.ta.mjs";
import { Name, _decode_Name } from "../InformationFramework/Name.ta.mjs";
// export { Name, _decode_Name, _encode_Name } from "../InformationFramework/Name.ta.mjs";
import { RelativeDistinguishedName, _decode_RelativeDistinguishedName } from "../InformationFramework/RelativeDistinguishedName.ta.mjs";
// export { RelativeDistinguishedName, _decode_RelativeDistinguishedName, _encode_RelativeDistinguishedName } from "../InformationFramework/RelativeDistinguishedName.ta.mjs";
import { PartialOutcomeQualifier, _decode_PartialOutcomeQualifier } from "../DirectoryAbstractService/PartialOutcomeQualifier.ta.mjs";
// export { PartialOutcomeQualifier, _decode_PartialOutcomeQualifier, _encode_PartialOutcomeQualifier } from "../DirectoryAbstractService/PartialOutcomeQualifier.ta.mjs";
import { CommonResults } from "../DirectoryAbstractService/CommonResults.ta.mjs";
// export { CommonResults, _decode_CommonResults, _encode_CommonResults } from "../DirectoryAbstractService/CommonResults.ta.mjs";


// TODO: CHECK_RECURSIVE_DEFINITION
/**
 * @summary ListResult
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ListResult  ::= 
 *   OPTIONALLY-PROTECTED
 *     {CHOICE {listInfo
 *                SET {name                     Name OPTIONAL,
 *                     subordinates
 *                       [1]  SET OF
 *                              SEQUENCE {rdn         RelativeDistinguishedName,
 *                                        aliasEntry  [0]  BOOLEAN DEFAULT FALSE,
 *                                        fromEntry   [1]  BOOLEAN DEFAULT TRUE
 *                              },
 *                     partialOutcomeQualifier
 *                       [2]  PartialOutcomeQualifier OPTIONAL,
 *                     COMPONENTS OF CommonResults},
 *              uncorrelatedListInfo  [0]  SET OF ListResult}}
 * ```
 */
export
type ListResult = OPTIONALLY_PROTECTED<({ listInfo: { name: Name; subordinates: OPTIONAL<{ rdn: OPTIONAL<RelativeDistinguishedName>; aliasEntry: BOOLEAN; fromEntry: BOOLEAN }[]>; partialOutcomeQualifier: PartialOutcomeQualifier; _componentsOf: CommonResults } } | { uncorrelatedListInfo: ListResult[] })>; // DefinedType

let _cached_decoder_for_ListResult: $.ASN1Decoder<ListResult> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ListResult
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ListResult (el: _Element): ListResult {
    if (!_cached_decoder_for_ListResult) { _cached_decoder_for_ListResult = _get_decoder_for_OPTIONALLY_PROTECTED<({ listInfo: { name: Name; subordinates: OPTIONAL<{ rdn: OPTIONAL<RelativeDistinguishedName>; aliasEntry: BOOLEAN; fromEntry: BOOLEAN }[]>; partialOutcomeQualifier: PartialOutcomeQualifier; _componentsOf: CommonResults } } | { uncorrelatedListInfo: ListResult[] })>($._decode_inextensible_choice<OPTIONALLY_PROTECTED>({
    "UNIVERSAL 17": [ "listInfo", function (el: _Element): listInfo {
    /* START_OF_SET_COMPONENT_DECLARATIONS */
    let name: OPTIONAL<Name>;
    let subordinates!: { rdn: OPTIONAL<RelativeDistinguishedName>; aliasEntry: BOOLEAN; fromEntry: BOOLEAN }[];
    let partialOutcomeQualifier: OPTIONAL<PartialOutcomeQualifier>;
    let _componentsOf!: CommonResults;
    /* END_OF_SET_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: $.DecodingMap = {
        "name": (_el: _Element): void => { name = _decode_Name(_el); },
        "subordinates": (_el: _Element): void => { subordinates = $._decode_explicit<{ rdn: OPTIONAL<RelativeDistinguishedName>; aliasEntry: BOOLEAN; fromEntry: BOOLEAN }[]>(() => $._decodeSetOf<{ rdn: OPTIONAL<RelativeDistinguishedName>; aliasEntry: BOOLEAN; fromEntry: BOOLEAN }>(() => function (el: _Element): subordinates {
    let rdn!: RelativeDistinguishedName;
    let aliasEntry: OPTIONAL<BOOLEAN> = subordinates._default_value_for_aliasEntry;
    let fromEntry: OPTIONAL<BOOLEAN> = subordinates._default_value_for_fromEntry;
    const callbacks: $.DecodingMap = {
        "rdn": (_el: _Element): void => { rdn = _decode_RelativeDistinguishedName(_el); },
        "aliasEntry": (_el: _Element): void => { aliasEntry = $._decode_explicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "fromEntry": (_el: _Element): void => { fromEntry = $._decode_explicit<BOOLEAN>(() => $._decodeBoolean)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_subordinates,
        _extension_additions_list_spec_for_subordinates,
        _root_component_type_list_2_spec_for_subordinates,
        undefined,
    );
    return new subordinates(
        rdn,
        aliasEntry,
        fromEntry
    );
}))(_el); },
        "partialOutcomeQualifier": (_el: _Element): void => { partialOutcomeQualifier = $._decode_explicit<PartialOutcomeQualifier>(() => _decode_PartialOutcomeQualifier)(_el); },
        /* COULD_NOT_GENERATE_CALLBACK_FOR_COMPONENTS_OF */
    };
    /* END_OF_CALLBACKS_MAP */
    $._parse_set(el, callbacks,
        _root_component_type_list_1_spec_for_listInfo,
        _extension_additions_list_spec_for_listInfo,
        _root_component_type_list_2_spec_for_listInfo,
        undefined,
    );
    return new listInfo( /* SET_CONSTRUCTOR_CALL */
        name,
        subordinates,
        partialOutcomeQualifier,
        _componentsOf
    );
} ],
    "CONTEXT 0": [ "uncorrelatedListInfo", $._decode_explicit<ListResult[]>(() => $._decodeSetOf<ListResult>(() => _decode_ListResult)) ]
})); }
    return _cached_decoder_for_ListResult(el);
}

let _cached_encoder_for_ListResult: $.ASN1Encoder<ListResult> | null = null;

/**
 * @summary Encodes a(n) ListResult into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ListResult, encoded as an ASN.1 Element.
 */
export
function _encode_ListResult (value: ListResult, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ListResult) { _cached_encoder_for_ListResult = _get_encoder_for_OPTIONALLY_PROTECTED<({ listInfo: { name: Name; subordinates: OPTIONAL<{ rdn: OPTIONAL<RelativeDistinguishedName>; aliasEntry: BOOLEAN; fromEntry: BOOLEAN }[]>; partialOutcomeQualifier: PartialOutcomeQualifier; _componentsOf: CommonResults } } | { uncorrelatedListInfo: ListResult[] })>($._encode_choice<OPTIONALLY_PROTECTED>({
    // FIXME: case (listInfo): return /* COULD_NOT_COMPILE_TYPE_ENCODER */;
    "uncorrelatedListInfo": $._encode_explicit(_TagClass.context, 0, () => $._encodeSetOf<ListResult>(() => _encode_ListResult, $.BER), $.BER),
}, $.BER)); }
    return _cached_encoder_for_ListResult(value, elGetter);
}


/* eslint-enable */
