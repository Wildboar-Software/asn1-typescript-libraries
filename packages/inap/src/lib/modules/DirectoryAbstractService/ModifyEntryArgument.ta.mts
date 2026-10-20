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
import { EntryModification, _decode_EntryModification, _encode_EntryModification } from "../DirectoryAbstractService/EntryModification.ta.mjs";
// export { EntryModification, _decode_EntryModification, _encode_EntryModification } from "../DirectoryAbstractService/EntryModification.ta.mjs";
import { EntryInformationSelection, _decode_EntryInformationSelection, _encode_EntryInformationSelection } from "../DirectoryAbstractService/EntryInformationSelection.ta.mjs";
// export { EntryInformationSelection, _decode_EntryInformationSelection, _encode_EntryInformationSelection } from "../DirectoryAbstractService/EntryInformationSelection.ta.mjs";
import { CommonArguments } from "../DirectoryAbstractService/CommonArguments.ta.mjs";
// export { CommonArguments, _decode_CommonArguments, _encode_CommonArguments } from "../DirectoryAbstractService/CommonArguments.ta.mjs";


/**
 * @summary ModifyEntryArgument
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ModifyEntryArgument  ::= 
 *   OPTIONALLY-PROTECTED
 *     {SET {object     [0]  Name,
 *           changes    [1]  SEQUENCE OF EntryModification,
 *           selection  [2]  EntryInformationSelection OPTIONAL,
 *           COMPONENTS OF CommonArguments}}
 * ```
 */
export
type ModifyEntryArgument = OPTIONALLY_PROTECTED<{ object: OPTIONAL<Name>; changes: OPTIONAL<EntryModification[]>; selection: EntryInformationSelection; _componentsOf: CommonArguments }>; // DefinedType

let _cached_decoder_for_ModifyEntryArgument: $.ASN1Decoder<ModifyEntryArgument> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ModifyEntryArgument
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ModifyEntryArgument (el: _Element): ModifyEntryArgument {
    if (!_cached_decoder_for_ModifyEntryArgument) { _cached_decoder_for_ModifyEntryArgument = _get_decoder_for_OPTIONALLY_PROTECTED<{ object: OPTIONAL<Name>; changes: OPTIONAL<EntryModification[]>; selection: EntryInformationSelection; _componentsOf: CommonArguments }>(function (el: _Element): OPTIONALLY_PROTECTED {
    /* START_OF_SET_COMPONENT_DECLARATIONS */
    let object!: Name;
    let changes!: EntryModification[];
    let selection: OPTIONAL<EntryInformationSelection>;
    let _componentsOf!: CommonArguments;
    /* END_OF_SET_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: $.DecodingMap = {
        "object": (_el: _Element): void => { object = $._decode_explicit<Name>(() => _decode_Name)(_el); },
        "changes": (_el: _Element): void => { changes = $._decode_explicit<EntryModification[]>(() => $._decodeSequenceOf<EntryModification>(() => _decode_EntryModification))(_el); },
        "selection": (_el: _Element): void => { selection = $._decode_explicit<EntryInformationSelection>(() => _decode_EntryInformationSelection)(_el); },
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
        changes,
        selection,
        _componentsOf
    );
}); }
    return _cached_decoder_for_ModifyEntryArgument(el);
}

let _cached_encoder_for_ModifyEntryArgument: $.ASN1Encoder<ModifyEntryArgument> | null = null;

/**
 * @summary Encodes a(n) ModifyEntryArgument into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ModifyEntryArgument, encoded as an ASN.1 Element.
 */
export
function _encode_ModifyEntryArgument (value: ModifyEntryArgument, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ModifyEntryArgument) { _cached_encoder_for_ModifyEntryArgument = _get_encoder_for_OPTIONALLY_PROTECTED<{ object: OPTIONAL<Name>; changes: OPTIONAL<EntryModification[]>; selection: EntryInformationSelection; _componentsOf: CommonArguments }>(function (value: OPTIONALLY_PROTECTED, elGetter: $.ASN1Encoder<OPTIONALLY_PROTECTED>): _Element {
    const _components: _Element[] = [];
    _components.push(/* REQUIRED   */ $._encode_explicit(_TagClass.context, 0, () => _encode_Name, $.BER)(value.object, $.BER));
    _components.push(/* REQUIRED   */ $._encode_explicit(_TagClass.context, 1, () => $._encodeSequenceOf<EntryModification>(() => _encode_EntryModification, $.BER), $.BER)(value.changes, $.BER));
    if (value.selection !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 2, () => _encode_EntryInformationSelection, $.BER)(value.selection, $.BER));
    }
    /* FIXME: COULD_NOT_COMPILE_COMPONENTS_OF DefinedType */
    return $._encodeSet(_components, $.BER);
}); }
    return _cached_encoder_for_ModifyEntryArgument(value, elGetter);
}


/* eslint-enable */
