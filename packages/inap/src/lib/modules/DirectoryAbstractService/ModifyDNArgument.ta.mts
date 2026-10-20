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
import { DistinguishedName, _decode_DistinguishedName, _encode_DistinguishedName } from "../InformationFramework/DistinguishedName.ta.mjs";
// export { DistinguishedName, _decode_DistinguishedName, _encode_DistinguishedName } from "../InformationFramework/DistinguishedName.ta.mjs";
import { RelativeDistinguishedName, _decode_RelativeDistinguishedName, _encode_RelativeDistinguishedName } from "../InformationFramework/RelativeDistinguishedName.ta.mjs";
// export { RelativeDistinguishedName, _decode_RelativeDistinguishedName, _encode_RelativeDistinguishedName } from "../InformationFramework/RelativeDistinguishedName.ta.mjs";
import { CommonArguments } from "../DirectoryAbstractService/CommonArguments.ta.mjs";
// export { CommonArguments, _decode_CommonArguments, _encode_CommonArguments } from "../DirectoryAbstractService/CommonArguments.ta.mjs";


/**
 * @summary ModifyDNArgument
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ModifyDNArgument  ::= 
 *   OPTIONALLY-PROTECTED
 *     {SET {object        [0]  DistinguishedName,
 *           newRDN        [1]  RelativeDistinguishedName,
 *           deleteOldRDN  [2]  BOOLEAN DEFAULT FALSE,
 *           newSuperior   [3]  DistinguishedName OPTIONAL,
 *           COMPONENTS OF CommonArguments}}
 * ```
 */
export
type ModifyDNArgument = OPTIONALLY_PROTECTED<{ object: OPTIONAL<DistinguishedName>; newRDN: OPTIONAL<RelativeDistinguishedName>; deleteOldRDN: BOOLEAN; newSuperior: DistinguishedName; _componentsOf: CommonArguments }>; // DefinedType

let _cached_decoder_for_ModifyDNArgument: $.ASN1Decoder<ModifyDNArgument> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ModifyDNArgument
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ModifyDNArgument (el: _Element): ModifyDNArgument {
    if (!_cached_decoder_for_ModifyDNArgument) { _cached_decoder_for_ModifyDNArgument = _get_decoder_for_OPTIONALLY_PROTECTED<{ object: OPTIONAL<DistinguishedName>; newRDN: OPTIONAL<RelativeDistinguishedName>; deleteOldRDN: BOOLEAN; newSuperior: DistinguishedName; _componentsOf: CommonArguments }>(function (el: _Element): OPTIONALLY_PROTECTED {
    /* START_OF_SET_COMPONENT_DECLARATIONS */
    let object!: DistinguishedName;
    let newRDN!: RelativeDistinguishedName;
    let deleteOldRDN: OPTIONAL<BOOLEAN> = OPTIONALLY_PROTECTED._default_value_for_deleteOldRDN;
    let newSuperior: OPTIONAL<DistinguishedName>;
    let _componentsOf!: CommonArguments;
    /* END_OF_SET_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: $.DecodingMap = {
        "object": (_el: _Element): void => { object = $._decode_explicit<DistinguishedName>(() => _decode_DistinguishedName)(_el); },
        "newRDN": (_el: _Element): void => { newRDN = $._decode_explicit<RelativeDistinguishedName>(() => _decode_RelativeDistinguishedName)(_el); },
        "deleteOldRDN": (_el: _Element): void => { deleteOldRDN = $._decode_explicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "newSuperior": (_el: _Element): void => { newSuperior = $._decode_explicit<DistinguishedName>(() => _decode_DistinguishedName)(_el); },
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
        newRDN,
        deleteOldRDN,
        newSuperior,
        _componentsOf
    );
}); }
    return _cached_decoder_for_ModifyDNArgument(el);
}

let _cached_encoder_for_ModifyDNArgument: $.ASN1Encoder<ModifyDNArgument> | null = null;

/**
 * @summary Encodes a(n) ModifyDNArgument into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ModifyDNArgument, encoded as an ASN.1 Element.
 */
export
function _encode_ModifyDNArgument (value: ModifyDNArgument, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ModifyDNArgument) { _cached_encoder_for_ModifyDNArgument = _get_encoder_for_OPTIONALLY_PROTECTED<{ object: OPTIONAL<DistinguishedName>; newRDN: OPTIONAL<RelativeDistinguishedName>; deleteOldRDN: BOOLEAN; newSuperior: DistinguishedName; _componentsOf: CommonArguments }>(function (value: OPTIONALLY_PROTECTED, elGetter: $.ASN1Encoder<OPTIONALLY_PROTECTED>): _Element {
    const _components: _Element[] = [];
    _components.push(/* REQUIRED   */ $._encode_explicit(_TagClass.context, 0, () => _encode_DistinguishedName, $.BER)(value.object, $.BER));
    _components.push(/* REQUIRED   */ $._encode_explicit(_TagClass.context, 1, () => _encode_RelativeDistinguishedName, $.BER)(value.newRDN, $.BER));
    if (value.deleteOldRDN !== undefined && !$.deepEq(value.deleteOldRDN, OPTIONALLY_PROTECTED._default_value_for_deleteOldRDN)) {
        _components.push(/* IF_DEFAULT */ $._encode_explicit(_TagClass.context, 2, () => $._encodeBoolean, $.BER)(value.deleteOldRDN, $.BER));
    }
    if (value.newSuperior !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 3, () => _encode_DistinguishedName, $.BER)(value.newSuperior, $.BER));
    }
    /* FIXME: COULD_NOT_COMPILE_COMPONENTS_OF DefinedType */
    return $._encodeSet(_components, $.BER);
}); }
    return _cached_encoder_for_ModifyDNArgument(value, elGetter);
}


/* eslint-enable */
