/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { OPTIONALLY_PROTECTED, _get_decoder_for_OPTIONALLY_PROTECTED, _get_encoder_for_OPTIONALLY_PROTECTED } from "../EnhancedSecurity/OPTIONALLY-PROTECTED.ta.mjs";
// export { OPTIONALLY_PROTECTED, _get_decoder_for_OPTIONALLY_PROTECTED, _get_encoder_for_OPTIONALLY_PROTECTED } from "../EnhancedSecurity/OPTIONALLY-PROTECTED.ta.mjs";
import { EntryInformation, _decode_EntryInformation, _encode_EntryInformation } from "../DirectoryAbstractService/EntryInformation.ta.mjs";
// export { EntryInformation, _decode_EntryInformation, _encode_EntryInformation } from "../DirectoryAbstractService/EntryInformation.ta.mjs";
import { ModifyRights, _decode_ModifyRights, _encode_ModifyRights } from "../DirectoryAbstractService/ModifyRights.ta.mjs";
// export { ModifyRights, _decode_ModifyRights, _encode_ModifyRights } from "../DirectoryAbstractService/ModifyRights.ta.mjs";
import { CommonResults } from "../DirectoryAbstractService/CommonResults.ta.mjs";
// export { CommonResults, _decode_CommonResults, _encode_CommonResults } from "../DirectoryAbstractService/CommonResults.ta.mjs";


/**
 * @summary ReadResult
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ReadResult  ::= 
 *   OPTIONALLY-PROTECTED
 *     {SET {entry         [0]  EntryInformation,
 *           modifyRights  [1]  ModifyRights OPTIONAL,
 *           COMPONENTS OF CommonResults}}
 * ```
 */
export
type ReadResult = OPTIONALLY_PROTECTED<{ entry: OPTIONAL<EntryInformation>; modifyRights: ModifyRights; _componentsOf: CommonResults }>; // DefinedType

let _cached_decoder_for_ReadResult: $.ASN1Decoder<ReadResult> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ReadResult
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ReadResult (el: _Element): ReadResult {
    if (!_cached_decoder_for_ReadResult) { _cached_decoder_for_ReadResult = _get_decoder_for_OPTIONALLY_PROTECTED<{ entry: OPTIONAL<EntryInformation>; modifyRights: ModifyRights; _componentsOf: CommonResults }>(function (el: _Element): OPTIONALLY_PROTECTED {
    /* START_OF_SET_COMPONENT_DECLARATIONS */
    let entry!: EntryInformation;
    let modifyRights: OPTIONAL<ModifyRights>;
    let _componentsOf!: CommonResults;
    /* END_OF_SET_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: $.DecodingMap = {
        "entry": (_el: _Element): void => { entry = $._decode_explicit<EntryInformation>(() => _decode_EntryInformation)(_el); },
        "modifyRights": (_el: _Element): void => { modifyRights = $._decode_explicit<ModifyRights>(() => _decode_ModifyRights)(_el); },
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
        entry,
        modifyRights,
        _componentsOf
    );
}); }
    return _cached_decoder_for_ReadResult(el);
}

let _cached_encoder_for_ReadResult: $.ASN1Encoder<ReadResult> | null = null;

/**
 * @summary Encodes a(n) ReadResult into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ReadResult, encoded as an ASN.1 Element.
 */
export
function _encode_ReadResult (value: ReadResult, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ReadResult) { _cached_encoder_for_ReadResult = _get_encoder_for_OPTIONALLY_PROTECTED<{ entry: OPTIONAL<EntryInformation>; modifyRights: ModifyRights; _componentsOf: CommonResults }>(function (value: OPTIONALLY_PROTECTED, elGetter: $.ASN1Encoder<OPTIONALLY_PROTECTED>): _Element {
    const _components: _Element[] = [];
    _components.push(/* REQUIRED   */ $._encode_explicit(_TagClass.context, 0, () => _encode_EntryInformation, $.BER)(value.entry, $.BER));
    if (value.modifyRights !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 1, () => _encode_ModifyRights, $.BER)(value.modifyRights, $.BER));
    }
    /* FIXME: COULD_NOT_COMPILE_COMPONENTS_OF DefinedType */
    return $._encodeSet(_components, $.BER);
}); }
    return _cached_encoder_for_ReadResult(value, elGetter);
}


/* eslint-enable */
