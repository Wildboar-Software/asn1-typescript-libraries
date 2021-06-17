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
    RelativeDistinguishedName,
    _decode_RelativeDistinguishedName,
    _encode_RelativeDistinguishedName,
} from '@wildboar/cmip/src/lib/modules/CMIP-1/RelativeDistinguishedName.ta';
export {
    RelativeDistinguishedName,
    _decode_RelativeDistinguishedName,
    _encode_RelativeDistinguishedName,
} from '@wildboar/cmip/src/lib/modules/CMIP-1/RelativeDistinguishedName.ta';

/* START_OF_SYMBOL_DEFINITION ProtectionEntity */
/**
 * @summary ProtectionEntity
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ProtectionEntity ::= SEQUENCE {
 *   protectedUnits   [0]  SEQUENCE OF RelativeDistinguishedName OPTIONAL,
 *   protectingUnits  [1]  SEQUENCE OF RelativeDistinguishedName OPTIONAL
 * }
 * ```
 *
 * @class
 */
export class ProtectionEntity {
    constructor(
        /**
         * @summary `protectedUnits`.
         * @public
         * @readonly
         */
        readonly protectedUnits: OPTIONAL<RelativeDistinguishedName[]>,
        /**
         * @summary `protectingUnits`.
         * @public
         * @readonly
         */
        readonly protectingUnits: OPTIONAL<RelativeDistinguishedName[]>
    ) {}

    /**
     * @summary Restructures an object into a ProtectionEntity
     * @description
     *
     * This takes an `object` and converts it to a `ProtectionEntity`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ProtectionEntity`.
     * @returns {ProtectionEntity}
     */
    public static _from_object(
        _o: { [_K in keyof ProtectionEntity]: ProtectionEntity[_K] }
    ): ProtectionEntity {
        return new ProtectionEntity(_o.protectedUnits, _o.protectingUnits);
    }
}
/* END_OF_SYMBOL_DEFINITION ProtectionEntity */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_ProtectionEntity */
/**
 * @summary The Leading Root Component Types of ProtectionEntity
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_ProtectionEntity: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'protectedUnits',
        true,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'protectingUnits',
        true,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_ProtectionEntity */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_ProtectionEntity */
/**
 * @summary The Trailing Root Component Types of ProtectionEntity
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_ProtectionEntity: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_ProtectionEntity */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_ProtectionEntity */
/**
 * @summary The Extension Addition Component Types of ProtectionEntity
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_ProtectionEntity: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_ProtectionEntity */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ProtectionEntity */
let _cached_decoder_for_ProtectionEntity: $.ASN1Decoder<ProtectionEntity> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ProtectionEntity */

/* START_OF_SYMBOL_DEFINITION _decode_ProtectionEntity */
/**
 * @summary Decodes an ASN.1 element into a(n) ProtectionEntity
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ProtectionEntity} The decoded data structure.
 */
export function _decode_ProtectionEntity(el: _Element) {
    if (!_cached_decoder_for_ProtectionEntity) {
        _cached_decoder_for_ProtectionEntity = function (
            el: _Element
        ): ProtectionEntity {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let protectedUnits: OPTIONAL<RelativeDistinguishedName[]>;
            let protectingUnits: OPTIONAL<RelativeDistinguishedName[]>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                protectedUnits: (_el: _Element): void => {
                    protectedUnits = $._decode_implicit<
                        RelativeDistinguishedName[]
                    >(() =>
                        $._decodeSequenceOf<RelativeDistinguishedName>(
                            () => _decode_RelativeDistinguishedName
                        )
                    )(_el);
                },
                protectingUnits: (_el: _Element): void => {
                    protectingUnits = $._decode_implicit<
                        RelativeDistinguishedName[]
                    >(() =>
                        $._decodeSequenceOf<RelativeDistinguishedName>(
                            () => _decode_RelativeDistinguishedName
                        )
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_ProtectionEntity,
                _extension_additions_list_spec_for_ProtectionEntity,
                _root_component_type_list_2_spec_for_ProtectionEntity,
                undefined
            );
            return new ProtectionEntity /* SEQUENCE_CONSTRUCTOR_CALL */(
                protectedUnits,
                protectingUnits
            );
        };
    }
    return _cached_decoder_for_ProtectionEntity(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ProtectionEntity */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ProtectionEntity */
let _cached_encoder_for_ProtectionEntity: $.ASN1Encoder<ProtectionEntity> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ProtectionEntity */

/* START_OF_SYMBOL_DEFINITION _encode_ProtectionEntity */
/**
 * @summary Encodes a(n) ProtectionEntity into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ProtectionEntity, encoded as an ASN.1 Element.
 */
export function _encode_ProtectionEntity(
    value: ProtectionEntity,
    elGetter: $.ASN1Encoder<ProtectionEntity>
) {
    if (!_cached_encoder_for_ProtectionEntity) {
        _cached_encoder_for_ProtectionEntity = function (
            value: ProtectionEntity,
            elGetter: $.ASN1Encoder<ProtectionEntity>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* IF_ABSENT  */ value.protectedUnits === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  0,
                                  () =>
                                      $._encodeSequenceOf<RelativeDistinguishedName>(
                                          () =>
                                              _encode_RelativeDistinguishedName,
                                          $.BER
                                      ),
                                  $.BER
                              )(value.protectedUnits, $.BER),
                        /* IF_ABSENT  */ value.protectingUnits === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  1,
                                  () =>
                                      $._encodeSequenceOf<RelativeDistinguishedName>(
                                          () =>
                                              _encode_RelativeDistinguishedName,
                                          $.BER
                                      ),
                                  $.BER
                              )(value.protectingUnits, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_ProtectionEntity(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ProtectionEntity */

/* eslint-enable */
