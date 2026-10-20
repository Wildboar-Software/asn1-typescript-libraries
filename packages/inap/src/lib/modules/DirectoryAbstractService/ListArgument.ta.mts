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
import { PagedResultsRequest, _decode_PagedResultsRequest, _encode_PagedResultsRequest } from "../DirectoryAbstractService/PagedResultsRequest.ta.mjs";
// export { PagedResultsRequest, _decode_PagedResultsRequest, _encode_PagedResultsRequest } from "../DirectoryAbstractService/PagedResultsRequest.ta.mjs";
import { CommonArguments } from "../DirectoryAbstractService/CommonArguments.ta.mjs";
// export { CommonArguments, _decode_CommonArguments, _encode_CommonArguments } from "../DirectoryAbstractService/CommonArguments.ta.mjs";


/**
 * @summary ListArgument
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ListArgument  ::= 
 *   OPTIONALLY-PROTECTED
 *     {SET {object        [0]  Name,
 *           pagedResults  [1]  PagedResultsRequest OPTIONAL,
 *           listFamily    [2]  BOOLEAN DEFAULT FALSE,
 *           COMPONENTS OF CommonArguments}}
 * ```
 */
export
type ListArgument = OPTIONALLY_PROTECTED<{ object: OPTIONAL<Name>; pagedResults: PagedResultsRequest; listFamily: BOOLEAN; _componentsOf: CommonArguments }>; // DefinedType

let _cached_decoder_for_ListArgument: $.ASN1Decoder<ListArgument> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ListArgument
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ListArgument (el: _Element): ListArgument {
    if (!_cached_decoder_for_ListArgument) { _cached_decoder_for_ListArgument = _get_decoder_for_OPTIONALLY_PROTECTED<{ object: OPTIONAL<Name>; pagedResults: PagedResultsRequest; listFamily: BOOLEAN; _componentsOf: CommonArguments }>(function (el: _Element): OPTIONALLY_PROTECTED {
    /* START_OF_SET_COMPONENT_DECLARATIONS */
    let object!: Name;
    let pagedResults: OPTIONAL<PagedResultsRequest>;
    let listFamily: OPTIONAL<BOOLEAN> = OPTIONALLY_PROTECTED._default_value_for_listFamily;
    let _componentsOf!: CommonArguments;
    /* END_OF_SET_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: $.DecodingMap = {
        "object": (_el: _Element): void => { object = $._decode_explicit<Name>(() => _decode_Name)(_el); },
        "pagedResults": (_el: _Element): void => { pagedResults = $._decode_explicit<PagedResultsRequest>(() => _decode_PagedResultsRequest)(_el); },
        "listFamily": (_el: _Element): void => { listFamily = $._decode_explicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
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
        pagedResults,
        listFamily,
        _componentsOf
    );
}); }
    return _cached_decoder_for_ListArgument(el);
}

let _cached_encoder_for_ListArgument: $.ASN1Encoder<ListArgument> | null = null;

/**
 * @summary Encodes a(n) ListArgument into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ListArgument, encoded as an ASN.1 Element.
 */
export
function _encode_ListArgument (value: ListArgument, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ListArgument) { _cached_encoder_for_ListArgument = _get_encoder_for_OPTIONALLY_PROTECTED<{ object: OPTIONAL<Name>; pagedResults: PagedResultsRequest; listFamily: BOOLEAN; _componentsOf: CommonArguments }>(function (value: OPTIONALLY_PROTECTED, elGetter: $.ASN1Encoder<OPTIONALLY_PROTECTED>): _Element {
    const _components: _Element[] = [];
    _components.push(/* REQUIRED   */ $._encode_explicit(_TagClass.context, 0, () => _encode_Name, $.BER)(value.object, $.BER));
    if (value.pagedResults !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 1, () => _encode_PagedResultsRequest, $.BER)(value.pagedResults, $.BER));
    }
    if (value.listFamily !== undefined && !$.deepEq(value.listFamily, OPTIONALLY_PROTECTED._default_value_for_listFamily)) {
        _components.push(/* IF_DEFAULT */ $._encode_explicit(_TagClass.context, 2, () => $._encodeBoolean, $.BER)(value.listFamily, $.BER));
    }
    /* FIXME: COULD_NOT_COMPILE_COMPONENTS_OF DefinedType */
    return $._encodeSet(_components, $.BER);
}); }
    return _cached_encoder_for_ListArgument(value, elGetter);
}


/* eslint-enable */
