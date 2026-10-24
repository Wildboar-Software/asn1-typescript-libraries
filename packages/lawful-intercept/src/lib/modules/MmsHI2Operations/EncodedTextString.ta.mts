/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary EncodedTextString
 * @description
 * 
 * A character string together with the character set used to encode it.
 * 
 * 3GPP TS 33.108, annex B.15.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EncodedTextString ::= SEQUENCE
 * {
 *     stringType    [1] OCTET STRING,
 *     -- stringType shall be encoded with MIBEnum values as registered with IANA as defined in [90].
 *     actualString    [2] OCTET STRING,
 *     ...
 * }
 * ```
 * 
 * @class
 */
export
class EncodedTextString {
    /**
     * @summary `stringType`.
     * @description
     * 
     * Character set of the string. Annex B.15 requires the MIBEnum values
     * registered with IANA, as defined in the OMA encapsulation protocol.
     * Clause 15.3 does not list those values.
     * @public
     * @readonly
     */
    readonly stringType: OCTET_STRING;
    /**
     * @summary `actualString`.
     * @description
     * 
     * The characters of the encoded string. Clause 15.3 does not further define
     * the contents.
     * 
     * 3GPP TS 33.108, annex B.15.
     * @public
     * @readonly
     */
    readonly actualString: OCTET_STRING;
    /**
     * @summary Extensions that are not recognized.
     * @description
     * 
     * Extension additions that this version of TS 33.108 does not define.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        stringType: OCTET_STRING,
        actualString: OCTET_STRING,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.stringType = stringType;
        this.actualString = actualString;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a EncodedTextString
     * @description
     * 
     * This takes an `object` and converts it to a `EncodedTextString`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `EncodedTextString`.
     * @returns {EncodedTextString}
     */
    public static _from_object (_o: { [_K in keyof (EncodedTextString)]: (EncodedTextString)[_K] }): EncodedTextString {
        return new EncodedTextString(_o.stringType, _o.actualString, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of EncodedTextString
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_EncodedTextString: $.ComponentSpec[] = [
    new $.ComponentSpec("stringType", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("actualString", false, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of EncodedTextString
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_EncodedTextString: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of EncodedTextString
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_EncodedTextString: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_EncodedTextString: $.ASN1Decoder<EncodedTextString> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EncodedTextString
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EncodedTextString (el: _Element): EncodedTextString {
    if (!_cached_decoder_for_EncodedTextString) { _cached_decoder_for_EncodedTextString = function (el: _Element): EncodedTextString {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("EncodedTextString contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "stringType";
    sequence[1].name = "actualString";
    let stringType!: OCTET_STRING;
    let actualString!: OCTET_STRING;
    stringType = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(sequence[0]);
    actualString = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(sequence[1]);
    return new EncodedTextString(
        stringType,
        actualString,
        sequence.slice(2),
    );
}; }
    return _cached_decoder_for_EncodedTextString(el);
}

let _cached_encoder_for_EncodedTextString: $.ASN1Encoder<EncodedTextString> | null = null;

/**
 * @summary Encodes a(n) EncodedTextString into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EncodedTextString, encoded as an ASN.1 Element.
 */
export
function _encode_EncodedTextString (value: EncodedTextString, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EncodedTextString) { _cached_encoder_for_EncodedTextString = function (value: EncodedTextString, elGetter: $.ASN1Encoder<EncodedTextString>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(2 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeOctetString, $.BER)(value.stringType, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => $._encodeOctetString, $.BER)(value.actualString, $.BER);
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_EncodedTextString(value, elGetter);
}


/* eslint-enable */
