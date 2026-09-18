/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { BiometricType, _decode_BiometricType, _encode_BiometricType } from "../CBEFF-DATA-ELEMENTS/BiometricType.ta.mjs";
// export { BiometricType, BiometricType_no_value_available /* IMPORTED_LONG_NAMED_BIT */, no_value_available /* IMPORTED_SHORT_NAMED_BIT */, BiometricType_multiple_biometric_types /* IMPORTED_LONG_NAMED_BIT */, multiple_biometric_types /* IMPORTED_SHORT_NAMED_BIT */, BiometricType_scent /* IMPORTED_LONG_NAMED_BIT */, scent /* IMPORTED_SHORT_NAMED_BIT */, BiometricType_dna /* IMPORTED_LONG_NAMED_BIT */, dna /* IMPORTED_SHORT_NAMED_BIT */, BiometricType_ear /* IMPORTED_LONG_NAMED_BIT */, ear /* IMPORTED_SHORT_NAMED_BIT */, BiometricType_face /* IMPORTED_LONG_NAMED_BIT */, face /* IMPORTED_SHORT_NAMED_BIT */, BiometricType_finger /* IMPORTED_LONG_NAMED_BIT */, finger /* IMPORTED_SHORT_NAMED_BIT */, BiometricType_foot /* IMPORTED_LONG_NAMED_BIT */, foot /* IMPORTED_SHORT_NAMED_BIT */, BiometricType_hand_geometry /* IMPORTED_LONG_NAMED_BIT */, hand_geometry /* IMPORTED_SHORT_NAMED_BIT */, BiometricType_vein /* IMPORTED_LONG_NAMED_BIT */, vein /* IMPORTED_SHORT_NAMED_BIT */, BiometricType_iris /* IMPORTED_LONG_NAMED_BIT */, iris /* IMPORTED_SHORT_NAMED_BIT */, BiometricType_retina /* IMPORTED_LONG_NAMED_BIT */, retina /* IMPORTED_SHORT_NAMED_BIT */, BiometricType_voice /* IMPORTED_LONG_NAMED_BIT */, voice /* IMPORTED_SHORT_NAMED_BIT */, BiometricType_gait /* IMPORTED_LONG_NAMED_BIT */, gait /* IMPORTED_SHORT_NAMED_BIT */, BiometricType_keystroke /* IMPORTED_LONG_NAMED_BIT */, keystroke /* IMPORTED_SHORT_NAMED_BIT */, BiometricType_lip_movement /* IMPORTED_LONG_NAMED_BIT */, lip_movement /* IMPORTED_SHORT_NAMED_BIT */, BiometricType_signature_sign /* IMPORTED_LONG_NAMED_BIT */, signature_sign /* IMPORTED_SHORT_NAMED_BIT */, _decode_BiometricType, _encode_BiometricType } from "../CBEFF-DATA-ELEMENTS/BiometricType.ta.mjs";
import { BiometricSubtype, _decode_BiometricSubtype, _encode_BiometricSubtype } from "../CBEFF-DATA-ELEMENTS/BiometricSubtype.ta.mjs";
// export { BiometricSubtype, _decode_BiometricSubtype, _encode_BiometricSubtype } from "../CBEFF-DATA-ELEMENTS/BiometricSubtype.ta.mjs";


/**
 * @summary Modality
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Modality ::= SEQUENCE {
 *     type    BiometricType,
 *     subtype BiometricSubtype OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class Modality {
    constructor (
        /**
         * @summary `type_`.
         * @public
         * @readonly
         */
        readonly type_: BiometricType,
        /**
         * @summary `subtype`.
         * @public
         * @readonly
         */
        readonly subtype: OPTIONAL<BiometricSubtype>
    ) {}

    /**
     * @summary Restructures an object into a Modality
     * @description
     * 
     * This takes an `object` and converts it to a `Modality`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Modality`.
     * @returns {Modality}
     */
    public static _from_object (_o: { [_K in keyof (Modality)]: (Modality)[_K] }): Modality {
        return new Modality(_o.type_, _o.subtype);
    }


}

/**
 * @summary The Leading Root Component Types of Modality
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_Modality: $.ComponentSpec[] = [
    new $.ComponentSpec("type", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("subtype", true, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of Modality
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_Modality: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of Modality
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_Modality: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_Modality: $.ASN1Decoder<Modality> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Modality
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Modality (el: _Element): Modality {
    if (!_cached_decoder_for_Modality) { _cached_decoder_for_Modality = function (el: _Element): Modality {
    let type_!: BiometricType;
    let subtype: OPTIONAL<BiometricSubtype>;
    const callbacks: $.DecodingMap = {
        "type": (_el: _Element): void => { type_ = _decode_BiometricType(_el); },
        "subtype": (_el: _Element): void => { subtype = $._decode_explicit<BiometricSubtype>(() => _decode_BiometricSubtype)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_Modality,
        _extension_additions_list_spec_for_Modality,
        _root_component_type_list_2_spec_for_Modality,
        undefined,
    );
    return new Modality(
        type_,
        subtype
    );
}; }
    return _cached_decoder_for_Modality(el);
}

let _cached_encoder_for_Modality: $.ASN1Encoder<Modality> | null = null;

/**
 * @summary Encodes a(n) Modality into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Modality, encoded as an ASN.1 Element.
 */
export
function _encode_Modality (value: Modality, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Modality) { _cached_encoder_for_Modality = function (value: Modality): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED  */ $._encode_implicit(_TagClass.context, 0, () => _encode_BiometricType, $.BER)(value.type_, $.BER),
            /* IF_ABSENT */ ((value.subtype === undefined) ? undefined : $._encode_explicit(_TagClass.context, 1, () => _encode_BiometricSubtype, $.BER)(value.subtype, $.BER)),
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_Modality(value, elGetter);
}


/* eslint-enable */
