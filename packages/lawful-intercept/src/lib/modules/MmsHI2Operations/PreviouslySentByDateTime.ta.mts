/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    GeneralizedTime,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary PreviouslySentByDateTime
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PreviouslySentByDateTime ::= SEQUENCE
 * {
 *     forwardedCount        [1] INTEGER,
 *     forwardedDateTime    [2] GeneralizedTime,
 * ...
 * }
 * ```
 * 
 * @class
 */
export
class PreviouslySentByDateTime {
    /**
     * @summary `forwardedCount`.
     * @public
     * @readonly
     */
    readonly forwardedCount: INTEGER;
    /**
     * @summary `forwardedDateTime`.
     * @public
     * @readonly
     */
    readonly forwardedDateTime: GeneralizedTime;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        forwardedCount: INTEGER,
        forwardedDateTime: GeneralizedTime,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.forwardedCount = forwardedCount;
        this.forwardedDateTime = forwardedDateTime;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a PreviouslySentByDateTime
     * @description
     * 
     * This takes an `object` and converts it to a `PreviouslySentByDateTime`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `PreviouslySentByDateTime`.
     * @returns {PreviouslySentByDateTime}
     */
    public static _from_object (_o: { [_K in keyof (PreviouslySentByDateTime)]: (PreviouslySentByDateTime)[_K] }): PreviouslySentByDateTime {
        return new PreviouslySentByDateTime(_o.forwardedCount, _o.forwardedDateTime, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of PreviouslySentByDateTime
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_PreviouslySentByDateTime: $.ComponentSpec[] = [
    new $.ComponentSpec("forwardedCount", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("forwardedDateTime", false, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of PreviouslySentByDateTime
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_PreviouslySentByDateTime: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of PreviouslySentByDateTime
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_PreviouslySentByDateTime: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_PreviouslySentByDateTime: $.ASN1Decoder<PreviouslySentByDateTime> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PreviouslySentByDateTime
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PreviouslySentByDateTime (el: _Element): PreviouslySentByDateTime {
    if (!_cached_decoder_for_PreviouslySentByDateTime) { _cached_decoder_for_PreviouslySentByDateTime = function (el: _Element): PreviouslySentByDateTime {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("PreviouslySentByDateTime contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "forwardedCount";
    sequence[1].name = "forwardedDateTime";
    let forwardedCount!: INTEGER;
    let forwardedDateTime!: GeneralizedTime;
    forwardedCount = $._decode_implicit<INTEGER>(() => $._decodeInteger)(sequence[0]);
    forwardedDateTime = $._decode_implicit<GeneralizedTime>(() => $._decodeGeneralizedTime)(sequence[1]);
    return new PreviouslySentByDateTime(
        forwardedCount,
        forwardedDateTime,
        sequence.slice(2),
    );
}; }
    return _cached_decoder_for_PreviouslySentByDateTime(el);
}

let _cached_encoder_for_PreviouslySentByDateTime: $.ASN1Encoder<PreviouslySentByDateTime> | null = null;

/**
 * @summary Encodes a(n) PreviouslySentByDateTime into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PreviouslySentByDateTime, encoded as an ASN.1 Element.
 */
export
function _encode_PreviouslySentByDateTime (value: PreviouslySentByDateTime, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PreviouslySentByDateTime) { _cached_encoder_for_PreviouslySentByDateTime = function (value: PreviouslySentByDateTime, _elGetter: $.ASN1Encoder<PreviouslySentByDateTime>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(2 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeInteger, $.BER)(value.forwardedCount, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => $._encodeGeneralizedTime, $.BER)(value.forwardedDateTime, $.BER);
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_PreviouslySentByDateTime(value, elGetter);
}


/* eslint-enable */
