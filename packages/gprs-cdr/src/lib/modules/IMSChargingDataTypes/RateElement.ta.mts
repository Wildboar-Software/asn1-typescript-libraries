/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    type INTEGER,
    type REAL
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary RateElement
 * @description
 *
 * One element of a tariff mapped from real-time tariff information. TS
 * 32.260 does not define these components; the mapping is in TS 32.280
 * (clause 5.2.2.1.17).
 *
 * 3GPP TS 32.260 V20.1.0 clause 5.1.5.
 *
 * @see https://www.3gpp.org/DynaReport/32260.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RateElement ::= SEQUENCE {
 *    unitType             [0] IMPLICIT INTEGER,
 *    unitValue            [1] IMPLICIT REAL,
 *    unitCost             [2] IMPLICIT REAL,
 *    unitQuotaThreshold   [3] IMPLICIT REAL}
 * ```
 * 
 * @class
 */
export
class RateElement {
    /**
     * @summary `unitType`.
     * @description
     *
     * Unit of a mapped tariff rate. TS 32.260 does not define this component;
     * see TS 32.280 (clause 5.2.2.1.17).
     *
     * @public
     * @readonly
     */
    readonly unitType: INTEGER;
    /**
     * @summary `unitValue`.
     * @description
     *
     * Value of a mapped tariff rate unit. TS 32.260 does not define this
     * component; see TS 32.280 (clause 5.2.2.1.17).
     *
     * @public
     * @readonly
     */
    readonly unitValue: REAL;
    /**
     * @summary `unitCost`.
     * @description
     *
     * Cost of a mapped tariff rate unit. TS 32.260 does not define this
     * component; see TS 32.280 (clause 5.2.2.1.17).
     *
     * @public
     * @readonly
     */
    readonly unitCost: REAL;
    /**
     * @summary `unitQuotaThreshold`.
     * @description
     *
     * Quota threshold of a mapped tariff rate unit. TS 32.260 does not define
     * this component; see TS 32.280 (clause 5.2.2.1.17).
     *
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
     * @summary Restructures an object into a RateElement
     * @description
     * 
     * This takes an `object` and converts it to a `RateElement`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `RateElement`.
     * @returns {RateElement}
     */
    public static _from_object (_o: { [_K in keyof (RateElement)]: (RateElement)[_K] }): RateElement {
        return new RateElement(_o.unitType, _o.unitValue, _o.unitCost, _o.unitQuotaThreshold);
    }


}

/**
 * @summary The Leading Root Component Types of RateElement
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_RateElement: $.ComponentSpec[] = [
    new $.ComponentSpec("unitType", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("unitValue", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("unitCost", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("unitQuotaThreshold", false, $.hasTag(_TagClass.context, 3))
];

/**
 * @summary The Trailing Root Component Types of RateElement
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_RateElement: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of RateElement
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_RateElement: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_RateElement: $.ASN1Decoder<RateElement> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RateElement
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RateElement (el: _Element): RateElement {
    if (!_cached_decoder_for_RateElement) { _cached_decoder_for_RateElement = function (el: _Element): RateElement {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 4) {
        throw new _ConstructionError("RateElement contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "unitType";
    sequence[1].name = "unitValue";
    sequence[2].name = "unitCost";
    sequence[3].name = "unitQuotaThreshold";
    const unitType: INTEGER = $._decode_implicit<INTEGER>(() => $._decodeInteger)(sequence[0]);
    const unitValue: REAL = $._decode_implicit<REAL>(() => $._decodeReal)(sequence[1]);
    const unitCost: REAL = $._decode_implicit<REAL>(() => $._decodeReal)(sequence[2]);
    const unitQuotaThreshold: REAL = $._decode_implicit<REAL>(() => $._decodeReal)(sequence[3]);
    return new RateElement(
        unitType,
        unitValue,
        unitCost,
        unitQuotaThreshold,

    );
}; }
    return _cached_decoder_for_RateElement(el);
}

let _cached_encoder_for_RateElement: $.ASN1Encoder<RateElement> | null = null;

/**
 * @summary Encodes a(n) RateElement into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RateElement, encoded as an ASN.1 Element.
 */
export
function _encode_RateElement (value: RateElement, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RateElement) { _cached_encoder_for_RateElement = function (value: RateElement, _elGetter: $.ASN1Encoder<RateElement>): _Element {
    return $._encodeSequence([
        /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => $._encodeInteger, $.BER)(value.unitType, $.BER),
        /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeReal, $.BER)(value.unitValue, $.BER),
        /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => $._encodeReal, $.BER)(value.unitCost, $.BER),
        /* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => $._encodeReal, $.BER)(value.unitQuotaThreshold, $.BER)
    ], $.BER);
}; }
    return _cached_encoder_for_RateElement(value, elGetter);
}


/* eslint-enable */
