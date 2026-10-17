/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    VisibleString
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary CallId
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CallId ::= SEQUENCE {
 *     sequencenumber          [0] VisibleString (SIZE(1..25, ...)),
 *     systemidentity          [1] VisibleString (SIZE(1..15, ...)),
 *     ...
 * }
 * ```
 * 
 * @class
 */
export
class CallId {
    /**
     * @summary `sequencenumber`.
     * @public
     * @readonly
     */
    readonly sequencenumber: VisibleString;
    /**
     * @summary `systemidentity`.
     * @public
     * @readonly
     */
    readonly systemidentity: VisibleString;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        sequencenumber: VisibleString,
        systemidentity: VisibleString,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.sequencenumber = sequencenumber;
        this.systemidentity = systemidentity;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a CallId
     * @description
     * 
     * This takes an `object` and converts it to a `CallId`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CallId`.
     * @returns {CallId}
     */
    public static _from_object (_o: { [_K in keyof (CallId)]: (CallId)[_K] }): CallId {
        return new CallId(_o.sequencenumber, _o.systemidentity, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of CallId
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_CallId: $.ComponentSpec[] = [
    new $.ComponentSpec("sequencenumber", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("systemidentity", false, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of CallId
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_CallId: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of CallId
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_CallId: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_CallId: $.ASN1Decoder<CallId> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CallId
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CallId (el: _Element): CallId {
    if (!_cached_decoder_for_CallId) { _cached_decoder_for_CallId = function (el: _Element): CallId {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("CallId contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "sequencenumber";
    sequence[1].name = "systemidentity";
    let sequencenumber!: VisibleString;
    let systemidentity!: VisibleString;
    sequencenumber = $._decode_implicit<VisibleString>(() => $._decodeVisibleString)(sequence[0]);
    systemidentity = $._decode_implicit<VisibleString>(() => $._decodeVisibleString)(sequence[1]);
    return new CallId(
        sequencenumber,
        systemidentity,
        sequence.slice(2),
    );
}; }
    return _cached_decoder_for_CallId(el);
}

let _cached_encoder_for_CallId: $.ASN1Encoder<CallId> | null = null;

/**
 * @summary Encodes a(n) CallId into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CallId, encoded as an ASN.1 Element.
 */
export
function _encode_CallId (value: CallId, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CallId) { _cached_encoder_for_CallId = function (value: CallId, elGetter: $.ASN1Encoder<CallId>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(2 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => $._encodeVisibleString, $.BER)(value.sequencenumber, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeVisibleString, $.BER)(value.systemidentity, $.BER);
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_CallId(value, elGetter);
}


/* eslint-enable */
