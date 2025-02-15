/* eslint-disable */
import {
    itu_t,
    itu_r,
    ccitt,
    iso,
    joint_iso_itu_t,
    joint_iso_ccitt,
    OPTIONAL,
    BOOLEAN,
    INTEGER,
    BIT_STRING,
    OCTET_STRING,
    NULL,
    OBJECT_IDENTIFIER,
    ObjectDescriptor,
    EXTERNAL,
    REAL,
    INSTANCE_OF,
    ENUMERATED,
    EMBEDDED_PDV,
    UTF8String,
    RELATIVE_OID,
    SEQUENCE,
    SEQUENCE_OF,
    SET,
    SET_OF,
    GraphicString,
    NumericString,
    VisibleString,
    PrintableString,
    ISO646String,
    TeletexString,
    GeneralString,
    T61String,
    UniversalString,
    VideotexString,
    BMPString,
    IA5String,
    CharacterString,
    UTCTime,
    GeneralizedTime,
    TIME,
    DATE,
    TIME_OF_DAY,
    DATE_TIME,
    DURATION,
    OID_IRI,
    RELATIVE_OID_IRI,
    TRUE,
    FALSE,
    TRUE_BIT,
    FALSE_BIT,
    PLUS_INFINITY,
    MINUS_INFINITY,
    NOT_A_NUMBER,
    TYPE_IDENTIFIER,
    ABSTRACT_SYNTAX,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/node/functional';
import {
    FunctionalUnitPackageId,
    _decode_FunctionalUnitPackageId,
    _encode_FunctionalUnitPackageId,
} from '../SMASE-A-ASSOCIATE-Information/FunctionalUnitPackageId.ta';
export {
    FunctionalUnitPackageId,
    _decode_FunctionalUnitPackageId,
    _encode_FunctionalUnitPackageId,
} from '../SMASE-A-ASSOCIATE-Information/FunctionalUnitPackageId.ta';

/* START_OF_SYMBOL_DEFINITION FunctionalUnitPackage */
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
 * @class
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
    public static get _default_value_for_managerRoleFunctionalUnit() {
        return new Uint8ClampedArray([]);
    }
    /**
     * @summary Getter that returns the default value for `agentRoleFunctionalUnit`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_agentRoleFunctionalUnit() {
        return new Uint8ClampedArray([]);
    }
}
/* END_OF_SYMBOL_DEFINITION FunctionalUnitPackage */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_FunctionalUnitPackage */
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
        $.hasTag(_TagClass.universal, 6),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'managerRoleFunctionalUnit',
        true,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'agentRoleFunctionalUnit',
        true,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_FunctionalUnitPackage */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_FunctionalUnitPackage */
/**
 * @summary The Trailing Root Component Types of FunctionalUnitPackage
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_FunctionalUnitPackage: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_FunctionalUnitPackage */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_FunctionalUnitPackage */
/**
 * @summary The Extension Addition Component Types of FunctionalUnitPackage
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_FunctionalUnitPackage: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_FunctionalUnitPackage */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_FunctionalUnitPackage */
let _cached_decoder_for_FunctionalUnitPackage: $.ASN1Decoder<FunctionalUnitPackage> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_FunctionalUnitPackage */

/* START_OF_SYMBOL_DEFINITION _decode_FunctionalUnitPackage */
/**
 * @summary Decodes an ASN.1 element into a(n) FunctionalUnitPackage
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {FunctionalUnitPackage} The decoded data structure.
 */
export function _decode_FunctionalUnitPackage(el: _Element) {
    if (!_cached_decoder_for_FunctionalUnitPackage) {
        _cached_decoder_for_FunctionalUnitPackage = function (
            el: _Element
        ): FunctionalUnitPackage {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let functionalUnitPackageId!: FunctionalUnitPackageId;
            let managerRoleFunctionalUnit: OPTIONAL<BIT_STRING> =
                FunctionalUnitPackage._default_value_for_managerRoleFunctionalUnit;
            let agentRoleFunctionalUnit: OPTIONAL<BIT_STRING> =
                FunctionalUnitPackage._default_value_for_agentRoleFunctionalUnit;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
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
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_FunctionalUnitPackage,
                _extension_additions_list_spec_for_FunctionalUnitPackage,
                _root_component_type_list_2_spec_for_FunctionalUnitPackage,
                undefined
            );
            return new FunctionalUnitPackage /* SEQUENCE_CONSTRUCTOR_CALL */(
                functionalUnitPackageId,
                managerRoleFunctionalUnit,
                agentRoleFunctionalUnit
            );
        };
    }
    return _cached_decoder_for_FunctionalUnitPackage(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_FunctionalUnitPackage */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_FunctionalUnitPackage */
let _cached_encoder_for_FunctionalUnitPackage: $.ASN1Encoder<FunctionalUnitPackage> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_FunctionalUnitPackage */

/* START_OF_SYMBOL_DEFINITION _encode_FunctionalUnitPackage */
/**
 * @summary Encodes a(n) FunctionalUnitPackage into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The FunctionalUnitPackage, encoded as an ASN.1 Element.
 */
export function _encode_FunctionalUnitPackage(
    value: FunctionalUnitPackage,
    elGetter: $.ASN1Encoder<FunctionalUnitPackage>
) {
    if (!_cached_encoder_for_FunctionalUnitPackage) {
        _cached_encoder_for_FunctionalUnitPackage = function (
            value: FunctionalUnitPackage,
            elGetter: $.ASN1Encoder<FunctionalUnitPackage>
        ): _Element {
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

/* END_OF_SYMBOL_DEFINITION _encode_FunctionalUnitPackage */

/* eslint-enable */
