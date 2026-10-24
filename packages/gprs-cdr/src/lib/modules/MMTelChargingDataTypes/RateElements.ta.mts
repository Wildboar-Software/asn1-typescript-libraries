/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    type INTEGER,
    REAL
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary RateElements
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RateElements ::= SEQUENCE {
 *    unitType             [0] IMPLICIT INTEGER,
 *    unitValue            [1] IMPLICIT REAL,
 *    unitCost             [2] IMPLICIT REAL,
 *    unitQuotaThreshold   [3] IMPLICIT REAL}
 * ```
 * 
 * @class
 */
export
class RateElements {
    /**
     * @summary `unitType`.
     * @public
     * @readonly
     */
    readonly unitType: INTEGER;
    /**
     * @summary `unitValue`.
     * @public
     * @readonly
     */
    readonly unitValue: REAL;
    /**
     * @summary `unitCost`.
     * @public
     * @readonly
     */
    readonly unitCost: REAL;
    /**
     * @summary `unitQuotaThreshold`.
     * @public
     * @readonly
     */
    readonly unitQuotaThreshold: REAL;

    constructor (
        unitType: INTEGER,
        unitValue: REAL,
        unitCost: REAL,
        unitQuotaThreshold: REAL
    ) {
        this.unitType = unitType;
        this.unitValue = unitValue;
        this.unitCost = unitCost;
        this.unitQuotaThreshold = unitQuotaThreshold;
    }

    /**
     * @summary Restructures an object into a RateElements
     * @description
     * 
     * This takes an `object` and converts it to a `RateElements`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `RateElements`.
     * @returns {RateElements}
     */
    public static _from_object (_o: { [_K in keyof (RateElements)]: (RateElements)[_K] }): RateElements {
        return new RateElements(_o.unitType, _o.unitValue, _o.unitCost, _o.unitQuotaThreshold);
    }


}

/**
 * @summary The Leading Root Component Types of RateElements
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_RateElements: $.ComponentSpec[] = [
    new $.ComponentSpec("unitType", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("unitValue", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("unitCost", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("unitQuotaThreshold", false, $.hasTag(_TagClass.context, 3))
];

/**
 * @summary The Trailing Root Component Types of RateElements
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_RateElements: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of RateElements
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_RateElements: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_RateElements: $.ASN1Decoder<RateElements> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RateElements
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RateElements (el: _Element): RateElements {
    if (!_cached_decoder_for_RateElements) { _cached_decoder_for_RateElements = function (el: _Element): RateElements {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 4) {
        throw new _ConstructionError("RateElements contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "unitType";
    sequence[1].name = "unitValue";
    sequence[2].name = "unitCost";
    sequence[3].name = "unitQuotaThreshold";
    const unitType: INTEGER = $._decode_implicit<INTEGER>(() => $._decodeInteger)(sequence[0]);
    const unitValue: REAL = $._decode_implicit<REAL>(() => $._decodeReal)(sequence[1]);
    const unitCost: REAL = $._decode_implicit<REAL>(() => $._decodeReal)(sequence[2]);
    const unitQuotaThreshold: REAL = $._decode_implicit<REAL>(() => $._decodeReal)(sequence[3]);
    return new RateElements(
        unitType,
        unitValue,
        unitCost,
        unitQuotaThreshold,

    );
}; }
    return _cached_decoder_for_RateElements(el);
}

let _cached_encoder_for_RateElements: $.ASN1Encoder<RateElements> | null = null;

/**
 * @summary Encodes a(n) RateElements into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RateElements, encoded as an ASN.1 Element.
 */
export
function _encode_RateElements (value: RateElements, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RateElements) { _cached_encoder_for_RateElements = function (value: RateElements, _elGetter: $.ASN1Encoder<RateElements>): _Element {
    return $._encodeSequence([
        /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => $._encodeInteger, $.BER)(value.unitType, $.BER),
        /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeReal, $.BER)(value.unitValue, $.BER),
        /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => $._encodeReal, $.BER)(value.unitCost, $.BER),
        /* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => $._encodeReal, $.BER)(value.unitQuotaThreshold, $.BER)
    ], $.BER);
}; }
    return _cached_encoder_for_RateElements(value, elGetter);
}


/* eslint-enable */
