/* eslint-disable */
import {
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    type OCTET_STRING,
    type OPTIONAL,
    type UTF8String
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary GcseGroupCharacteristics
 * @description
 * 
 * Characteristics of the group communications, for example voice or video. The
 * encoding name and the value are separate. The value layout is not defined
 * beyond that name. 3GPP TS 33.108, clause 14.2.6, table 14.2, and annex
 * B.14.1.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GcseGroupCharacteristics ::= SEQUENCE
 * {
 *         characteristicsEncoding    [1] UTF8String     type OPTIONAL, -- Specifies the encoding format of
 *             -- the contents included within the parameter characteristics.
 * 
 *         characteristics            [2] OCTET STRING     type OPTIONAL,
 *     ...
 * }
 * ```
 * 
 * @class
 */
export
class GcseGroupCharacteristics {
    /**
     * @summary `characteristicsEncoding`.
     * @description
     * 
     * Name of the encoding used for the characteristics octets. 3GPP TS 33.108,
     * annex B.14.1.
     * 
     * @public
     * @readonly
     */
    readonly characteristicsEncoding: OPTIONAL<UTF8String>;
    /**
     * @summary `characteristics`.
     * @description
     * 
     * Characteristic octets in the named encoding. Clause 14's example is voice
     * or video. No layout is defined. 3GPP TS 33.108, table 14.2 and annex
     * B.14.1.
     * 
     * @public
     * @readonly
     */
    readonly characteristics: OPTIONAL<OCTET_STRING>;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        characteristicsEncoding?: OPTIONAL<UTF8String>,
        characteristics?: OPTIONAL<OCTET_STRING>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.characteristicsEncoding = characteristicsEncoding;
        this.characteristics = characteristics;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a GcseGroupCharacteristics
     * @description
     * 
     * This takes an `object` and converts it to a `GcseGroupCharacteristics`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `GcseGroupCharacteristics`.
     * @returns {GcseGroupCharacteristics}
     */
    public static _from_object (_o: { [_K in keyof (GcseGroupCharacteristics)]: (GcseGroupCharacteristics)[_K] }): GcseGroupCharacteristics {
        return new GcseGroupCharacteristics(_o.characteristicsEncoding, _o.characteristics, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of GcseGroupCharacteristics
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_GcseGroupCharacteristics: $.ComponentSpec[] = [
    new $.ComponentSpec("characteristicsEncoding", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("characteristics", true, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of GcseGroupCharacteristics
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_GcseGroupCharacteristics: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of GcseGroupCharacteristics
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_GcseGroupCharacteristics: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_GcseGroupCharacteristics: $.ASN1Decoder<GcseGroupCharacteristics> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) GcseGroupCharacteristics
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_GcseGroupCharacteristics (el: _Element): GcseGroupCharacteristics {
    if (!_cached_decoder_for_GcseGroupCharacteristics) { _cached_decoder_for_GcseGroupCharacteristics = function (el: _Element): GcseGroupCharacteristics {
    let characteristicsEncoding: OPTIONAL<UTF8String>;
    let characteristics: OPTIONAL<OCTET_STRING>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "characteristicsEncoding": (_el: _Element): void => { characteristicsEncoding = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); },
        "characteristics": (_el: _Element): void => { characteristics = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_GcseGroupCharacteristics,
        _extension_additions_list_spec_for_GcseGroupCharacteristics,
        _root_component_type_list_2_spec_for_GcseGroupCharacteristics,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new GcseGroupCharacteristics(
        characteristicsEncoding,
        characteristics,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_GcseGroupCharacteristics(el);
}

let _cached_encoder_for_GcseGroupCharacteristics: $.ASN1Encoder<GcseGroupCharacteristics> | null = null;

/**
 * @summary Encodes a(n) GcseGroupCharacteristics into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GcseGroupCharacteristics, encoded as an ASN.1 Element.
 */
export
function _encode_GcseGroupCharacteristics (value: GcseGroupCharacteristics, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_GcseGroupCharacteristics) { _cached_encoder_for_GcseGroupCharacteristics = function (value: GcseGroupCharacteristics, elGetter: $.ASN1Encoder<GcseGroupCharacteristics>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(2 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    if (value.characteristicsEncoding !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => $._encodeUTF8String, $.BER)(value.characteristicsEncoding, $.BER);
    }
    if (value.characteristics !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => $._encodeOctetString, $.BER)(value.characteristics, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_GcseGroupCharacteristics(value, elGetter);
}


/* eslint-enable */
