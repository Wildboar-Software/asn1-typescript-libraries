/* eslint-disable */
import {
    BOOLEAN,
    INTEGER,
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { ProximityOperator_relationType, _decode_ProximityOperator_relationType, _encode_ProximityOperator_relationType } from "../Z39-50-APDU-2001/ProximityOperator-relationType.ta.mjs";
import { ProximityOperator_proximityUnitCode, _decode_ProximityOperator_proximityUnitCode, _encode_ProximityOperator_proximityUnitCode } from "../Z39-50-APDU-2001/ProximityOperator-proximityUnitCode.ta.mjs";


/**
 * @summary ProximityOperator
 * @description
 * 
 * Proximity test (ProxTest) applied by the `prox` operator (ANSI/NISO
 * Z39.50-2003 §3.7.2.1). Distance is a non-negative difference between the
 * ordinal positions of the two operands.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ProximityOperator ::= SEQUENCE {
 *     exclusion           [1] IMPLICIT BOOLEAN OPTIONAL,
 *     distance            [2] IMPLICIT INTEGER,
 *     ordered             [3] IMPLICIT BOOLEAN,
 *     relationType        [4] IMPLICIT INTEGER {
 *         lessThan            (1),
 *         lessThanOrEqual     (2),
 *         equal               (3),
 *         greaterThanOrEqual  (4),
 *         greaterThan         (5),
 *         notEqual            (6)
 *     },
 *     proximityUnitCode   [5] CHOICE {
 *         known       [1] IMPLICIT KnownProximityUnit,
 *         private     [2] IMPLICIT INTEGER
 *     }
 * }
 * ```
 * 
 * @class
 */
export
class ProximityOperator {
    /**
     * @summary `exclusion`.
     * @description
     * 
     * When true, the test is negated. The example in §3.7.2.1 is 'cat' within 5
     * words of 'hat' versus 'cat' outside that window. The standard does not
     * state what omission means.
     * 
     * @public
     * @readonly
     */
    readonly exclusion: OPTIONAL<BOOLEAN>;
    /**
     * @summary `distance`.
     * @description
     * 
     * Non-negative difference of ordinals, in the chosen unit. Distance 0 with
     * unit paragraph means the same paragraph (ANSI/NISO Z39.50-2003 §3.7.2.1).
     * 
     * @public
     * @readonly
     */
    readonly distance: INTEGER;
    /**
     * @summary `ordered`.
     * @description
     * 
     * When true, the test is right proximity only: the left ordinal must not
     * exceed the right, and distance is compared with right minus left. When
     * false, either order is accepted, and distance is compared with the
     * absolute difference (ANSI/NISO Z39.50-2003 §3.7.2.1).
     * 
     * @public
     * @readonly
     */
    readonly ordered: BOOLEAN;
    /**
     * @summary `relationType`.
     * @description
     * 
     * How the positional difference is compared with `distance`: less than,
     * less than or equal, equal, greater than or equal, greater than, or not
     * equal (ANSI/NISO Z39.50-2003 §3.7.2.1).
     * 
     * @public
     * @readonly
     */
    readonly relationType: ProximityOperator_relationType;
    /**
     * @summary `proximityUnitCode`.
     * @description
     * 
     * Unit of the ordinals. `known` is a unit from this standard. `private` is
     * a privately defined unit (ANSI/NISO Z39.50-2003 §3.7.2.1).
     * 
     * @public
     * @readonly
     */
    readonly proximityUnitCode: ProximityOperator_proximityUnitCode;

    constructor (
        exclusion: OPTIONAL<BOOLEAN>,
        distance: INTEGER,
        ordered: BOOLEAN,
        relationType: ProximityOperator_relationType,
        proximityUnitCode: ProximityOperator_proximityUnitCode
    ) {
        this.exclusion = exclusion;
        this.distance = distance;
        this.ordered = ordered;
        this.relationType = relationType;
        this.proximityUnitCode = proximityUnitCode;
    }

    /**
     * @summary Restructures an object into a ProximityOperator
     * @description
     * 
     * This takes an `object` and converts it to a `ProximityOperator`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ProximityOperator`.
     * @returns {ProximityOperator}
     */
    public static _from_object (_o: { [_K in keyof (ProximityOperator)]: (ProximityOperator)[_K] }): ProximityOperator {
        return new ProximityOperator(_o.exclusion, _o.distance, _o.ordered, _o.relationType, _o.proximityUnitCode);
    }


}

/**
 * @summary The Leading Root Component Types of ProximityOperator
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ProximityOperator: $.ComponentSpec[] = [
    new $.ComponentSpec("exclusion", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("distance", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("ordered", false, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("relationType", false, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("proximityUnitCode", false, $.hasTag(_TagClass.context, 5))
];

/**
 * @summary The Trailing Root Component Types of ProximityOperator
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ProximityOperator: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ProximityOperator
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ProximityOperator: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ProximityOperator: $.ASN1Decoder<ProximityOperator> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ProximityOperator
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ProximityOperator (el: _Element): ProximityOperator {
    if (!_cached_decoder_for_ProximityOperator) { _cached_decoder_for_ProximityOperator = function (el: _Element): ProximityOperator {
    let exclusion: OPTIONAL<BOOLEAN>;
    let distance!: INTEGER;
    let ordered!: BOOLEAN;
    let relationType!: ProximityOperator_relationType;
    let proximityUnitCode!: ProximityOperator_proximityUnitCode;
    const callbacks: $.DecodingMap = {
        "exclusion": (_el: _Element): void => { exclusion = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "distance": (_el: _Element): void => { distance = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "ordered": (_el: _Element): void => { ordered = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "relationType": (_el: _Element): void => { relationType = $._decode_implicit<ProximityOperator_relationType>(() => _decode_ProximityOperator_relationType)(_el); },
        "proximityUnitCode": (_el: _Element): void => { proximityUnitCode = $._decode_explicit<ProximityOperator_proximityUnitCode>(() => _decode_ProximityOperator_proximityUnitCode)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ProximityOperator,
        _extension_additions_list_spec_for_ProximityOperator,
        _root_component_type_list_2_spec_for_ProximityOperator,
        undefined,
    );
    return new ProximityOperator(
        exclusion,
        distance,
        ordered,
        relationType,
        proximityUnitCode
    );
}; }
    return _cached_decoder_for_ProximityOperator(el);
}

let _cached_encoder_for_ProximityOperator: $.ASN1Encoder<ProximityOperator> | null = null;

/**
 * @summary Encodes a(n) ProximityOperator into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ProximityOperator, encoded as an ASN.1 Element.
 */
export
function _encode_ProximityOperator (value: ProximityOperator, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ProximityOperator) { _cached_encoder_for_ProximityOperator = function (value: ProximityOperator, elGetter: $.ASN1Encoder<ProximityOperator>): _Element {
    const _components: _Element[] = new Array(5);
    let _components_i = 0;
    if (value.exclusion !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => $._encodeBoolean, $.BER)(value.exclusion, $.BER);
    }
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => $._encodeInteger, $.BER)(value.distance, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => $._encodeBoolean, $.BER)(value.ordered, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 4, () => _encode_ProximityOperator_relationType, $.BER)(value.relationType, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_explicit(_TagClass.context, 5, () => _encode_ProximityOperator_proximityUnitCode, $.BER)(value.proximityUnitCode, $.BER);
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_ProximityOperator(value, elGetter);
}


/* eslint-enable */
