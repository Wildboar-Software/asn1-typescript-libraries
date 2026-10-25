/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type SBIReference, _decode_SBIReference, _encode_SBIReference } from "../TS33128Payloads/SBIReference.ta.mjs";
// export { SBIReference, _decode_SBIReference, _encode_SBIReference } from "../TS33128Payloads/SBIReference.ta.mjs";
import { type SBIValue, _decode_SBIValue, _encode_SBIValue } from "../TS33128Payloads/SBIValue.ta.mjs";
// export { SBIValue, _decode_SBIValue, _encode_SBIValue } from "../TS33128Payloads/SBIValue.ta.mjs";


/**
 * @summary SBIType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SBIType ::= SEQUENCE
 * {
 *     sBIReference         [1] SBIReference,
 *     sBIValue             [2] SBIValue
 * }
 * ```
 * 
 * @class
 */
export
class SBIType {
    /**
     * @summary `sBIReference`.
     * @description
     *
     * JSON pointer that indicates the schema definition for the reported
     * SBIValue. Shall be sent in the form of a JSON string value (see RFC 6901
     * [117] clause 5). When using the SBIType as a parameter within a record,
     * the value of the SBI Reference shall be clearly indicated in the
     * associated description field of the table describing the record.
     *
     * @public
     * @readonly
     */
    readonly sBIReference: SBIReference;
    /**
     * @summary `sBIValue`.
     * @description
     *
     * The contents of the SBI message or parameter being reported. Shall be
     * sent as a JSON document that matches the schema indicated by the
     * sBIReference.
     *
     * @public
     * @readonly
     */
    readonly sBIValue: SBIValue;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        sBIReference: SBIReference,
        sBIValue: SBIValue,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.sBIReference = sBIReference;
        this.sBIValue = sBIValue;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a SBIType
     * @description
     * 
     * This takes an `object` and converts it to a `SBIType`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SBIType`.
     * @returns {SBIType}
     */
    public static _from_object (_o: { [_K in keyof (SBIType)]: (SBIType)[_K] }): SBIType {
        return new SBIType(_o.sBIReference, _o.sBIValue, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of SBIType
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_SBIType: $.ComponentSpec[] = [
    new $.ComponentSpec("sBIReference", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("sBIValue", false, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of SBIType
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_SBIType: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of SBIType
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_SBIType: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_SBIType: $.ASN1Decoder<SBIType> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SBIType
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SBIType (el: _Element): SBIType {
    if (!_cached_decoder_for_SBIType) { _cached_decoder_for_SBIType = function (el: _Element): SBIType {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("SBIType contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "sBIReference";
    sequence[1].name = "sBIValue";
    let sBIReference!: SBIReference;
    let sBIValue!: SBIValue;
    sBIReference = $._decode_implicit<SBIReference>(() => _decode_SBIReference)(sequence[0]);
    sBIValue = $._decode_implicit<SBIValue>(() => _decode_SBIValue)(sequence[1]);
    return new SBIType(
        sBIReference,
        sBIValue,
        sequence.slice(2),
    );
}; }
    return _cached_decoder_for_SBIType(el);
}

let _cached_encoder_for_SBIType: $.ASN1Encoder<SBIType> | null = null;

/**
 * @summary Encodes a(n) SBIType into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SBIType, encoded as an ASN.1 Element.
 */
export
function _encode_SBIType (value: SBIType, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SBIType) { _cached_encoder_for_SBIType = function (value: SBIType, elGetter: $.ASN1Encoder<SBIType>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(2 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_SBIReference, $.BER)(value.sBIReference, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_SBIValue, $.BER)(value.sBIValue, $.BER);
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_SBIType(value, elGetter);
}


/* eslint-enable */
