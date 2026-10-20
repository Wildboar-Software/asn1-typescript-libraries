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
import { Name, _decode_Name, _encode_Name } from "../InformationFramework/Name.ta.mjs";
// export { Name, _decode_Name, _encode_Name } from "../InformationFramework/Name.ta.mjs";
import { AttributeType, _decode_AttributeType, _encode_AttributeType } from "../InformationFramework/AttributeType.ta.mjs";
// export { AttributeType, _decode_AttributeType, _encode_AttributeType } from "../InformationFramework/AttributeType.ta.mjs";
import { CommonResults } from "../DirectoryAbstractService/CommonResults.ta.mjs";
// export { CommonResults, _decode_CommonResults, _encode_CommonResults } from "../DirectoryAbstractService/CommonResults.ta.mjs";


/**
 * @summary CompareResult
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CompareResult  ::= 
 *   OPTIONALLY-PROTECTED
 *     {SET {name            Name OPTIONAL,
 *           matched         [0]  BOOLEAN,
 *           fromEntry       [1]  BOOLEAN DEFAULT TRUE,
 *           matchedSubtype  [2]  AttributeType OPTIONAL,
 *           COMPONENTS OF CommonResults}}
 * ```
 */
export
type CompareResult = OPTIONALLY_PROTECTED<{ name: Name; matched: OPTIONAL<BOOLEAN>; fromEntry: BOOLEAN; matchedSubtype: AttributeType; _componentsOf: CommonResults }>; // DefinedType

let _cached_decoder_for_CompareResult: $.ASN1Decoder<CompareResult> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CompareResult
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CompareResult (el: _Element): CompareResult {
    if (!_cached_decoder_for_CompareResult) { _cached_decoder_for_CompareResult = _get_decoder_for_OPTIONALLY_PROTECTED<{ name: Name; matched: OPTIONAL<BOOLEAN>; fromEntry: BOOLEAN; matchedSubtype: AttributeType; _componentsOf: CommonResults }>(function (el: _Element): OPTIONALLY_PROTECTED {
    /* START_OF_SET_COMPONENT_DECLARATIONS */
    let name: OPTIONAL<Name>;
    let matched!: BOOLEAN;
    let fromEntry: OPTIONAL<BOOLEAN> = OPTIONALLY_PROTECTED._default_value_for_fromEntry;
    let matchedSubtype: OPTIONAL<AttributeType>;
    let _componentsOf!: CommonResults;
    /* END_OF_SET_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: $.DecodingMap = {
        "name": (_el: _Element): void => { name = _decode_Name(_el); },
        "matched": (_el: _Element): void => { matched = $._decode_explicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "fromEntry": (_el: _Element): void => { fromEntry = $._decode_explicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "matchedSubtype": (_el: _Element): void => { matchedSubtype = $._decode_explicit<AttributeType>(() => _decode_AttributeType)(_el); },
        /* COULD_NOT_GENERATE_CALLBACK_FOR_COMPONENTS_OF */
    };
    /* END_OF_CALLBACKS_MAP */
    $._parse_set(el, callbacks,
        _root_component_type_list_1_spec_for_OPTIONALLY_PROTECTED,
        _extension_additions_list_spec_for_OPTIONALLY_PROTECTED,
        _root_component_type_list_2_spec_for_OPTIONALLY_PROTECTED,
        undefined,
    );
    return new OPTIONALLY_PROTECTED( /* SET_CONSTRUCTOR_CALL */
        name,
        matched,
        fromEntry,
        matchedSubtype,
        _componentsOf
    );
}); }
    return _cached_decoder_for_CompareResult(el);
}

let _cached_encoder_for_CompareResult: $.ASN1Encoder<CompareResult> | null = null;

/**
 * @summary Encodes a(n) CompareResult into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CompareResult, encoded as an ASN.1 Element.
 */
export
function _encode_CompareResult (value: CompareResult, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CompareResult) { _cached_encoder_for_CompareResult = _get_encoder_for_OPTIONALLY_PROTECTED<{ name: Name; matched: OPTIONAL<BOOLEAN>; fromEntry: BOOLEAN; matchedSubtype: AttributeType; _componentsOf: CommonResults }>(function (value: OPTIONALLY_PROTECTED, elGetter: $.ASN1Encoder<OPTIONALLY_PROTECTED>): _Element {
    const _components: _Element[] = [];
    if (value.name !== undefined) {
        _components.push(/* IF_ABSENT  */ _encode_Name(value.name, $.BER));
    }
    _components.push(/* REQUIRED   */ $._encode_explicit(_TagClass.context, 0, () => $._encodeBoolean, $.BER)(value.matched, $.BER));
    if (value.fromEntry !== undefined && !$.deepEq(value.fromEntry, OPTIONALLY_PROTECTED._default_value_for_fromEntry)) {
        _components.push(/* IF_DEFAULT */ $._encode_explicit(_TagClass.context, 1, () => $._encodeBoolean, $.BER)(value.fromEntry, $.BER));
    }
    if (value.matchedSubtype !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 2, () => _encode_AttributeType, $.BER)(value.matchedSubtype, $.BER));
    }
    /* FIXME: COULD_NOT_COMPILE_COMPONENTS_OF DefinedType */
    return $._encodeSet(_components, $.BER);
}); }
    return _cached_encoder_for_CompareResult(value, elGetter);
}


/* eslint-enable */
