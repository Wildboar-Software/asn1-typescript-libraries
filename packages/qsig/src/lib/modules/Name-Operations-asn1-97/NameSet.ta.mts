/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { NameData, _decode_NameData, _encode_NameData } from "../Name-Operations-asn1-97/NameData.ta.mjs";
import { CharacterSet, _decode_CharacterSet, _encode_CharacterSet } from "../Name-Operations-asn1-97/CharacterSet.ta.mjs";

/**
 * @summary NameSet
 * @description
 *
 * A name and an optional character set, used by the extended presentation
 * alternatives (ECMA-164 §6.1). If `characterSet` is absent, ISO 8859-1 is
 * implied.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-164/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NameSet ::= SEQUENCE {
 *     nameData NameData,
 *     characterSet CharacterSet OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class NameSet {
    /**
     * @summary `nameData`.
     * @description
     *
     * Octets of the name, 1 to 50 octets (ECMA-164 §6.1).
     * @public
     * @readonly
     */
    readonly nameData: NameData;
    /**
     * @summary `characterSet`.
     * @description
     *
     * Character set of `nameData`. If absent, ISO 8859-1 is implied (ECMA-164
     * §6.1).
     * @public
     * @readonly
     */
    readonly characterSet: OPTIONAL<CharacterSet>;

    constructor (
        nameData: NameData,
        characterSet: OPTIONAL<CharacterSet>
    ) {
        this.nameData = nameData;
        this.characterSet = characterSet;
    }

    /**
     * @summary Restructures an object into a NameSet
     * @description
     * 
     * This takes an `object` and converts it to a `NameSet`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `NameSet`.
     * @returns {NameSet}
     */
    public static _from_object (_o: { [_K in keyof (NameSet)]: (NameSet)[_K] }): NameSet {
        return new NameSet(_o.nameData, _o.characterSet);
    }

}

/**
 * @summary The Leading Root Component Types of NameSet
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_NameSet: $.ComponentSpec[] = [
    new $.ComponentSpec("nameData", false, $.hasTag(_TagClass.universal, 4)),
    new $.ComponentSpec("characterSet", true, $.hasTag(_TagClass.universal, 2))
];

/**
 * @summary The Trailing Root Component Types of NameSet
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_NameSet: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of NameSet
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_NameSet: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_NameSet: $.ASN1Decoder<NameSet> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) NameSet
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_NameSet (el: _Element): NameSet {
    if (!_cached_decoder_for_NameSet) { _cached_decoder_for_NameSet = function (el: _Element): NameSet {
    let nameData!: NameData;
    let characterSet: OPTIONAL<CharacterSet>;
    const callbacks: $.DecodingMap = {
        "nameData": (_el: _Element): void => { nameData = _decode_NameData(_el); },
        "characterSet": (_el: _Element): void => { characterSet = _decode_CharacterSet(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_NameSet,
        _extension_additions_list_spec_for_NameSet,
        _root_component_type_list_2_spec_for_NameSet,
        undefined,
    );
    return new NameSet(
        nameData,
        characterSet
    );
}; }
    return _cached_decoder_for_NameSet(el);
}

let _cached_encoder_for_NameSet: $.ASN1Encoder<NameSet> | null = null;

/**
 * @summary Encodes a(n) NameSet into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NameSet, encoded as an ASN.1 Element.
 */
export
function _encode_NameSet (value: NameSet, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_NameSet) { _cached_encoder_for_NameSet = function (value: NameSet, _elGetter: $.ASN1Encoder<NameSet>): _Element {
    const _components: _Element[] = [];
    _components.push(/* REQUIRED   */ _encode_NameData(value.nameData, $.BER));
    if (value.characterSet !== undefined) {
        _components.push(/* IF_ABSENT  */ _encode_CharacterSet(value.characterSet, $.BER));
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_NameSet(value, elGetter);
}

/* eslint-enable */
