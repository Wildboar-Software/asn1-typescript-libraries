/* eslint-disable */
import {
    OPTIONAL,
    BIT_STRING,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';
import {
    FunctionalUnitPackageId,
    _decode_FunctionalUnitPackageId,
    _encode_FunctionalUnitPackageId,
} from '../SMASE-A-ASSOCIATE-Information/FunctionalUnitPackageId.ta.mjs';
/**
 * @summary FunctionalUnitPackage
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * FunctionalUnitPackage ::= SEQUENCE {
 *   functionalUnitPackageId    FunctionalUnitPackageId,
 *   managerRoleFunctionalUnit  [0] IMPLICIT BIT STRING DEFAULT {},
 *   -- If not present implies role not supported for this functionalUnitPackage.
 *   agentRoleFunctionalUnit    [1] IMPLICIT BIT STRING DEFAULT {}
 *   -- If not present implies role not supported for this functionalUnitPackage.
 * }
 * ```
 *
 */
export class FunctionalUnitPackage {
    constructor(
        /**
         * @summary `functionalUnitPackageId`.
         * @public
         * @readonly
         */
        readonly functionalUnitPackageId: FunctionalUnitPackageId,
        /**
         * @summary `managerRoleFunctionalUnit`.
         * @public
         * @readonly
         */
        readonly managerRoleFunctionalUnit: OPTIONAL<BIT_STRING>,
        /**
         * @summary `agentRoleFunctionalUnit`.
         * @public
         * @readonly
         */
        readonly agentRoleFunctionalUnit: OPTIONAL<BIT_STRING>
    ) {}

    /**
     * @summary Restructures an object into a FunctionalUnitPackage
     * @description
     *
     * This takes an `object` and converts it to a `FunctionalUnitPackage`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `FunctionalUnitPackage`.
     * @returns {FunctionalUnitPackage}
     */
    public static _from_object(
        _o: { [_K in keyof FunctionalUnitPackage]: FunctionalUnitPackage[_K] }
    ): FunctionalUnitPackage {
        return new FunctionalUnitPackage(
            _o.functionalUnitPackageId,
            _o.managerRoleFunctionalUnit,
            _o.agentRoleFunctionalUnit
        );
    }

    /**
     * @summary Getter that returns the default value for `managerRoleFunctionalUnit`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_managerRoleFunctionalUnit(): BIT_STRING {
        return new Uint8ClampedArray([]);
    }
    /**
     * @summary Getter that returns the default value for `agentRoleFunctionalUnit`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_agentRoleFunctionalUnit(): BIT_STRING {
        return new Uint8ClampedArray([]);
    }
}

/**
 * @summary The Leading Root Component Types of FunctionalUnitPackage
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_FunctionalUnitPackage: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'functionalUnitPackageId',
        false,
        $.hasTag(_TagClass.universal, 6)
    ),
    new $.ComponentSpec(
        'managerRoleFunctionalUnit',
        true,
        $.hasTag(_TagClass.context, 0)
    ),
    new $.ComponentSpec(
        'agentRoleFunctionalUnit',
        true,
        $.hasTag(_TagClass.context, 1)
    ),
];

/**
 * @summary The Trailing Root Component Types of FunctionalUnitPackage
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_FunctionalUnitPackage: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of FunctionalUnitPackage
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_FunctionalUnitPackage: $.ComponentSpec[] = [];

let _cached_decoder_for_FunctionalUnitPackage: $.ASN1Decoder<FunctionalUnitPackage> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) FunctionalUnitPackage
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {FunctionalUnitPackage} The decoded data structure.
 */
export function _decode_FunctionalUnitPackage(el: _Element): FunctionalUnitPackage {
    if (!_cached_decoder_for_FunctionalUnitPackage) {
        _cached_decoder_for_FunctionalUnitPackage = function (
            el: _Element
        ): FunctionalUnitPackage {
            let functionalUnitPackageId!: FunctionalUnitPackageId;
            let managerRoleFunctionalUnit: OPTIONAL<BIT_STRING> =
                FunctionalUnitPackage._default_value_for_managerRoleFunctionalUnit;
            let agentRoleFunctionalUnit: OPTIONAL<BIT_STRING> =
                FunctionalUnitPackage._default_value_for_agentRoleFunctionalUnit;
            const callbacks: $.DecodingMap = {
                functionalUnitPackageId: (_el: _Element): void => {
                    functionalUnitPackageId = _decode_FunctionalUnitPackageId(
                        _el
                    );
                },
                managerRoleFunctionalUnit: (_el: _Element): void => {
                    managerRoleFunctionalUnit = $._decode_implicit<BIT_STRING>(
                        () => $._decodeBitString
                    )(_el);
                },
                agentRoleFunctionalUnit: (_el: _Element): void => {
                    agentRoleFunctionalUnit = $._decode_implicit<BIT_STRING>(
                        () => $._decodeBitString
                    )(_el);
                },
            };
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_FunctionalUnitPackage,
                _extension_additions_list_spec_for_FunctionalUnitPackage,
                _root_component_type_list_2_spec_for_FunctionalUnitPackage,
                undefined
            );
            return new FunctionalUnitPackage (
                functionalUnitPackageId,
                managerRoleFunctionalUnit,
                agentRoleFunctionalUnit
            );
        };
    }
    return _cached_decoder_for_FunctionalUnitPackage(el);
}

let _cached_encoder_for_FunctionalUnitPackage: $.ASN1Encoder<FunctionalUnitPackage> | null = null;

/**
 * @summary Encodes a(n) FunctionalUnitPackage into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The FunctionalUnitPackage, encoded as an ASN.1 Element.
 */
export function _encode_FunctionalUnitPackage(
    value: FunctionalUnitPackage,
    elGetter: $.ASN1Encoder<FunctionalUnitPackage>
): _Element {
    if (!_cached_encoder_for_FunctionalUnitPackage) {
        _cached_encoder_for_FunctionalUnitPackage = function (
            value: FunctionalUnitPackage        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_FunctionalUnitPackageId(
                            value.functionalUnitPackageId,
                            $.BER
                        ),
                        /* IF_DEFAULT */ value.managerRoleFunctionalUnit ===
                            undefined ||
                        $.deepEq(
                            value.managerRoleFunctionalUnit,
                            FunctionalUnitPackage._default_value_for_managerRoleFunctionalUnit
                        )
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  0,
                                  () => $._encodeBitString,
                                  $.BER
                              )(value.managerRoleFunctionalUnit, $.BER),
                        /* IF_DEFAULT */ value.agentRoleFunctionalUnit ===
                            undefined ||
                        $.deepEq(
                            value.agentRoleFunctionalUnit,
                            FunctionalUnitPackage._default_value_for_agentRoleFunctionalUnit
                        )
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  1,
                                  () => $._encodeBitString,
                                  $.BER
                              )(value.agentRoleFunctionalUnit, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_FunctionalUnitPackage(value, elGetter);
}


/* eslint-enable */
