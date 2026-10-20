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
import { Attribute, _decode_Attribute, _encode_Attribute } from "../InformationFramework/Attribute.ta.mjs";
// export { Attribute, _decode_Attribute, _encode_Attribute } from "../InformationFramework/Attribute.ta.mjs";
import { AccessPoint, _decode_AccessPoint, _encode_AccessPoint } from "../DistributedOperations/AccessPoint.ta.mjs";
// export { AccessPoint, _decode_AccessPoint, _encode_AccessPoint } from "../DistributedOperations/AccessPoint.ta.mjs";
import { CommonArguments } from "../DirectoryAbstractService/CommonArguments.ta.mjs";
// export { CommonArguments, _decode_CommonArguments, _encode_CommonArguments } from "../DirectoryAbstractService/CommonArguments.ta.mjs";


/**
 * @summary AddEntryArgument
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AddEntryArgument  ::= 
 *   OPTIONALLY-PROTECTED
 *     {SET {object        [0]  Name,
 *           entry         [1]  SET OF Attribute,
 *           targetSystem  [2]  AccessPoint OPTIONAL,
 *           COMPONENTS OF CommonArguments}}
 * ```
 */
export
type AddEntryArgument = OPTIONALLY_PROTECTED<{ object: OPTIONAL<Name>; entry: OPTIONAL<Attribute[]>; targetSystem: AccessPoint; _componentsOf: CommonArguments }>; // DefinedType

let _cached_decoder_for_AddEntryArgument: $.ASN1Decoder<AddEntryArgument> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AddEntryArgument
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AddEntryArgument (el: _Element): AddEntryArgument {
    if (!_cached_decoder_for_AddEntryArgument) { _cached_decoder_for_AddEntryArgument = _get_decoder_for_OPTIONALLY_PROTECTED<{ object: OPTIONAL<Name>; entry: OPTIONAL<Attribute[]>; targetSystem: AccessPoint; _componentsOf: CommonArguments }>(function (el: _Element): OPTIONALLY_PROTECTED {
    /* START_OF_SET_COMPONENT_DECLARATIONS */
    let object!: Name;
    let entry!: Attribute[];
    let targetSystem: OPTIONAL<AccessPoint>;
    let _componentsOf!: CommonArguments;
    /* END_OF_SET_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: $.DecodingMap = {
        "object": (_el: _Element): void => { object = $._decode_explicit<Name>(() => _decode_Name)(_el); },
        "entry": (_el: _Element): void => { entry = $._decode_explicit<Attribute[]>(() => $._decodeSetOf<Attribute>(() => _decode_Attribute))(_el); },
        "targetSystem": (_el: _Element): void => { targetSystem = $._decode_explicit<AccessPoint>(() => _decode_AccessPoint)(_el); },
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
        entry,
        targetSystem,
        _componentsOf
    );
}); }
    return _cached_decoder_for_AddEntryArgument(el);
}

let _cached_encoder_for_AddEntryArgument: $.ASN1Encoder<AddEntryArgument> | null = null;

/**
 * @summary Encodes a(n) AddEntryArgument into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AddEntryArgument, encoded as an ASN.1 Element.
 */
export
function _encode_AddEntryArgument (value: AddEntryArgument, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AddEntryArgument) { _cached_encoder_for_AddEntryArgument = _get_encoder_for_OPTIONALLY_PROTECTED<{ object: OPTIONAL<Name>; entry: OPTIONAL<Attribute[]>; targetSystem: AccessPoint; _componentsOf: CommonArguments }>(function (value: OPTIONALLY_PROTECTED, elGetter: $.ASN1Encoder<OPTIONALLY_PROTECTED>): _Element {
    const _components: _Element[] = [];
    _components.push(/* REQUIRED   */ $._encode_explicit(_TagClass.context, 0, () => _encode_Name, $.BER)(value.object, $.BER));
    _components.push(/* REQUIRED   */ $._encode_explicit(_TagClass.context, 1, () => $._encodeSetOf<Attribute>(() => _encode_Attribute, $.BER), $.BER)(value.entry, $.BER));
    if (value.targetSystem !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 2, () => _encode_AccessPoint, $.BER)(value.targetSystem, $.BER));
    }
    /* FIXME: COULD_NOT_COMPILE_COMPONENTS_OF DefinedType */
    return $._encodeSet(_components, $.BER);
}); }
    return _cached_encoder_for_AddEntryArgument(value, elGetter);
}


/* eslint-enable */
