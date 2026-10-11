/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { PartyIndication, _decode_PartyIndication, _encode_PartyIndication, _enum_for_PartyIndication } from "../TS33128Payloads/PartyIndication.ta.mjs";
// export { PartyIndication, _enum_for_PartyIndication, PartyIndication_callingParty /* IMPORTED_LONG_ENUMERATION_ITEM */, callingParty /* IMPORTED_SHORT_ENUMERATION_ITEM */, PartyIndication_calledParty /* IMPORTED_LONG_ENUMERATION_ITEM */, calledParty /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_PartyIndication, _encode_PartyIndication } from "../TS33128Payloads/PartyIndication.ta.mjs";
import { TranslationInput, _decode_TranslationInput, _encode_TranslationInput } from "../TS33128Payloads/TranslationInput.ta.mjs";
// export { TranslationInput, _decode_TranslationInput, _encode_TranslationInput } from "../TS33128Payloads/TranslationInput.ta.mjs";


/**
 * @summary NumberTranslation
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NumberTranslation ::= SEQUENCE
 * {
 *     partyIndication  [1] PartyIndication,
 *     translationInput [2] TranslationInput
 * }
 * ```
 * 
 * @class
 */
export
class NumberTranslation {
    /**
     * @summary `partyIndication`.
     * @public
     * @readonly
     */
    readonly partyIndication: PartyIndication;
    /**
     * @summary `translationInput`.
     * @public
     * @readonly
     */
    readonly translationInput: TranslationInput;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        partyIndication: PartyIndication,
        translationInput: TranslationInput,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.partyIndication = partyIndication;
        this.translationInput = translationInput;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a NumberTranslation
     * @description
     * 
     * This takes an `object` and converts it to a `NumberTranslation`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `NumberTranslation`.
     * @returns {NumberTranslation}
     */
    public static _from_object (_o: { [_K in keyof (NumberTranslation)]: (NumberTranslation)[_K] }): NumberTranslation {
        return new NumberTranslation(_o.partyIndication, _o.translationInput, _o._unrecognizedExtensionsList);
    }

        /**
         * @summary The enum used as the type of the component `partyIndication`
         * @public
         * @static
         */

    public static _enum_for_partyIndication = _enum_for_PartyIndication;
}

/**
 * @summary The Leading Root Component Types of NumberTranslation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_NumberTranslation: $.ComponentSpec[] = [
    new $.ComponentSpec("partyIndication", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("translationInput", false, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of NumberTranslation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_NumberTranslation: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of NumberTranslation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_NumberTranslation: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_NumberTranslation: $.ASN1Decoder<NumberTranslation> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) NumberTranslation
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_NumberTranslation (el: _Element): NumberTranslation {
    if (!_cached_decoder_for_NumberTranslation) { _cached_decoder_for_NumberTranslation = function (el: _Element): NumberTranslation {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("NumberTranslation contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "partyIndication";
    sequence[1].name = "translationInput";
    let partyIndication!: PartyIndication;
    let translationInput!: TranslationInput;
    partyIndication = $._decode_implicit<PartyIndication>(() => _decode_PartyIndication)(sequence[0]);
    translationInput = $._decode_explicit<TranslationInput>(() => _decode_TranslationInput)(sequence[1]);
    return new NumberTranslation(
        partyIndication,
        translationInput,
        sequence.slice(2),
    );
}; }
    return _cached_decoder_for_NumberTranslation(el);
}

let _cached_encoder_for_NumberTranslation: $.ASN1Encoder<NumberTranslation> | null = null;

/**
 * @summary Encodes a(n) NumberTranslation into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NumberTranslation, encoded as an ASN.1 Element.
 */
export
function _encode_NumberTranslation (value: NumberTranslation, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_NumberTranslation) { _cached_encoder_for_NumberTranslation = function (value: NumberTranslation, _elGetter: $.ASN1Encoder<NumberTranslation>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(2 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_PartyIndication, $.BER)(value.partyIndication, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_explicit(_TagClass.context, 2, () => _encode_TranslationInput, $.BER)(value.translationInput, $.BER);
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_NumberTranslation(value, elGetter);
}


/* eslint-enable */
