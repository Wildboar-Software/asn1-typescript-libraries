/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { OPTIONALLY_PROTECTED, _get_decoder_for_OPTIONALLY_PROTECTED, _get_encoder_for_OPTIONALLY_PROTECTED } from "../EnhancedSecurity/OPTIONALLY-PROTECTED.ta.mjs";
// export { OPTIONALLY_PROTECTED, _get_decoder_for_OPTIONALLY_PROTECTED, _get_encoder_for_OPTIONALLY_PROTECTED } from "../EnhancedSecurity/OPTIONALLY-PROTECTED.ta.mjs";
import { Name, _decode_Name, _encode_Name } from "../InformationFramework/Name.ta.mjs";
// export { Name, _decode_Name, _encode_Name } from "../InformationFramework/Name.ta.mjs";
import { AttributeValueAssertion, _decode_AttributeValueAssertion, _encode_AttributeValueAssertion } from "../InformationFramework/AttributeValueAssertion.ta.mjs";
// export { AttributeValueAssertion, _decode_AttributeValueAssertion, _encode_AttributeValueAssertion } from "../InformationFramework/AttributeValueAssertion.ta.mjs";
import { CommonArguments } from "../DirectoryAbstractService/CommonArguments.ta.mjs";
// export { CommonArguments, _decode_CommonArguments, _encode_CommonArguments } from "../DirectoryAbstractService/CommonArguments.ta.mjs";


/**
 * @summary CompareArgument
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CompareArgument  ::= 
 *   OPTIONALLY-PROTECTED
 *     {SET {object     [0]  Name,
 *           purported  [1]  AttributeValueAssertion,
 *           COMPONENTS OF CommonArguments}}
 * ```
 */
export
type CompareArgument = OPTIONALLY_PROTECTED<{ object: OPTIONAL<Name>; purported: OPTIONAL<AttributeValueAssertion>; _componentsOf: CommonArguments }>; // DefinedType

let _cached_decoder_for_CompareArgument: $.ASN1Decoder<CompareArgument> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CompareArgument
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CompareArgument (el: _Element): CompareArgument {
    if (!_cached_decoder_for_CompareArgument) { _cached_decoder_for_CompareArgument = _get_decoder_for_OPTIONALLY_PROTECTED<{ object: OPTIONAL<Name>; purported: OPTIONAL<AttributeValueAssertion>; _componentsOf: CommonArguments }>(function (el: _Element): OPTIONALLY_PROTECTED {
    /* START_OF_SET_COMPONENT_DECLARATIONS */
    let object!: Name;
    let purported!: AttributeValueAssertion;
    let _componentsOf!: CommonArguments;
    /* END_OF_SET_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: $.DecodingMap = {
        "object": (_el: _Element): void => { object = $._decode_explicit<Name>(() => _decode_Name)(_el); },
        "purported": (_el: _Element): void => { purported = $._decode_explicit<AttributeValueAssertion>(() => _decode_AttributeValueAssertion)(_el); },
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
        object,
        purported,
        _componentsOf
    );
}); }
    return _cached_decoder_for_CompareArgument(el);
}

let _cached_encoder_for_CompareArgument: $.ASN1Encoder<CompareArgument> | null = null;

/**
 * @summary Encodes a(n) CompareArgument into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CompareArgument, encoded as an ASN.1 Element.
 */
export
function _encode_CompareArgument (value: CompareArgument, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CompareArgument) { _cached_encoder_for_CompareArgument = _get_encoder_for_OPTIONALLY_PROTECTED<{ object: OPTIONAL<Name>; purported: OPTIONAL<AttributeValueAssertion>; _componentsOf: CommonArguments }>(function (value: OPTIONALLY_PROTECTED, elGetter: $.ASN1Encoder<OPTIONALLY_PROTECTED>): _Element {
    return $._encodeSet([
        /* REQUIRED   */ $._encode_explicit(_TagClass.context, 0, () => _encode_Name, $.BER)(value.object, $.BER),
        /* REQUIRED   */ $._encode_explicit(_TagClass.context, 1, () => _encode_AttributeValueAssertion, $.BER)(value.purported, $.BER),
        /* FIXME: COULD_NOT_COMPILE_COMPONENTS_OF DefinedType */
    ], $.BER);
}); }
    return _cached_encoder_for_CompareArgument(value, elGetter);
}


/* eslint-enable */
