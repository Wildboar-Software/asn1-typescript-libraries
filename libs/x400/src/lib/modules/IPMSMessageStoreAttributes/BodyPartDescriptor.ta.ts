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
    SequenceNumber,
    _decode_SequenceNumber,
    _encode_SequenceNumber,
} from '../MSAbstractService/SequenceNumber.ta';
export {
    SequenceNumber,
    _decode_SequenceNumber,
    _encode_SequenceNumber,
} from '../MSAbstractService/SequenceNumber.ta';

/* START_OF_SYMBOL_DEFINITION BodyPartDescriptor */
/**
 * @summary BodyPartDescriptor
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * BodyPartDescriptor ::= SEQUENCE {
 *   data              [0]  OBJECT IDENTIFIER,
 *   parameters        [1]  OBJECT IDENTIFIER OPTIONAL,
 *   this-child-entry  [2]  SequenceNumber OPTIONAL,
 *   position          [3]  INTEGER,
 *   size              [4]  INTEGER,
 *   processed         [5]  BOOLEAN DEFAULT FALSE
 * }
 * ```
 *
 * @class
 */
export class BodyPartDescriptor {
    constructor(
        /**
         * @summary `data`.
         * @public
         * @readonly
         */
        readonly data: OBJECT_IDENTIFIER,
        /**
         * @summary `parameters`.
         * @public
         * @readonly
         */
        readonly parameters: OPTIONAL<OBJECT_IDENTIFIER>,
        /**
         * @summary `this_child_entry`.
         * @public
         * @readonly
         */
        readonly this_child_entry: OPTIONAL<SequenceNumber>,
        /**
         * @summary `position`.
         * @public
         * @readonly
         */
        readonly position: INTEGER,
        /**
         * @summary `size`.
         * @public
         * @readonly
         */
        readonly size: INTEGER,
        /**
         * @summary `processed`.
         * @public
         * @readonly
         */
        readonly processed: OPTIONAL<BOOLEAN>
    ) {}

    /**
     * @summary Restructures an object into a BodyPartDescriptor
     * @description
     *
     * This takes an `object` and converts it to a `BodyPartDescriptor`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `BodyPartDescriptor`.
     * @returns {BodyPartDescriptor}
     */
    public static _from_object(
        _o: { [_K in keyof BodyPartDescriptor]: BodyPartDescriptor[_K] }
    ): BodyPartDescriptor {
        return new BodyPartDescriptor(
            _o.data,
            _o.parameters,
            _o.this_child_entry,
            _o.position,
            _o.size,
            _o.processed
        );
    }

    /**
     * @summary Getter that returns the default value for `processed`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_processed() {
        return false;
    }
}
/* END_OF_SYMBOL_DEFINITION BodyPartDescriptor */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_BodyPartDescriptor */
/**
 * @summary The Leading Root Component Types of BodyPartDescriptor
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_BodyPartDescriptor: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'data',
        false,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'parameters',
        true,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'this-child-entry',
        true,
        $.hasTag(_TagClass.context, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'position',
        false,
        $.hasTag(_TagClass.context, 3),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'size',
        false,
        $.hasTag(_TagClass.context, 4),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'processed',
        true,
        $.hasTag(_TagClass.context, 5),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_BodyPartDescriptor */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_BodyPartDescriptor */
/**
 * @summary The Trailing Root Component Types of BodyPartDescriptor
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_BodyPartDescriptor: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_BodyPartDescriptor */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_BodyPartDescriptor */
/**
 * @summary The Extension Addition Component Types of BodyPartDescriptor
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_BodyPartDescriptor: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_BodyPartDescriptor */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_BodyPartDescriptor */
let _cached_decoder_for_BodyPartDescriptor: $.ASN1Decoder<BodyPartDescriptor> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_BodyPartDescriptor */

/* START_OF_SYMBOL_DEFINITION _decode_BodyPartDescriptor */
/**
 * @summary Decodes an ASN.1 element into a(n) BodyPartDescriptor
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {BodyPartDescriptor} The decoded data structure.
 */
export function _decode_BodyPartDescriptor(el: _Element) {
    if (!_cached_decoder_for_BodyPartDescriptor) {
        _cached_decoder_for_BodyPartDescriptor = function (
            el: _Element
        ): BodyPartDescriptor {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let data!: OBJECT_IDENTIFIER;
            let parameters: OPTIONAL<OBJECT_IDENTIFIER>;
            let this_child_entry: OPTIONAL<SequenceNumber>;
            let position!: INTEGER;
            let size!: INTEGER;
            let processed: OPTIONAL<BOOLEAN> =
                BodyPartDescriptor._default_value_for_processed;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                data: (_el: _Element): void => {
                    data = $._decode_implicit<OBJECT_IDENTIFIER>(
                        () => $._decodeObjectIdentifier
                    )(_el);
                },
                parameters: (_el: _Element): void => {
                    parameters = $._decode_implicit<OBJECT_IDENTIFIER>(
                        () => $._decodeObjectIdentifier
                    )(_el);
                },
                'this-child-entry': (_el: _Element): void => {
                    this_child_entry = $._decode_implicit<SequenceNumber>(
                        () => _decode_SequenceNumber
                    )(_el);
                },
                position: (_el: _Element): void => {
                    position = $._decode_implicit<INTEGER>(
                        () => $._decodeInteger
                    )(_el);
                },
                size: (_el: _Element): void => {
                    size = $._decode_implicit<INTEGER>(() => $._decodeInteger)(
                        _el
                    );
                },
                processed: (_el: _Element): void => {
                    processed = $._decode_implicit<BOOLEAN>(
                        () => $._decodeBoolean
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_BodyPartDescriptor,
                _extension_additions_list_spec_for_BodyPartDescriptor,
                _root_component_type_list_2_spec_for_BodyPartDescriptor,
                undefined
            );
            return new BodyPartDescriptor /* SEQUENCE_CONSTRUCTOR_CALL */(
                data,
                parameters,
                this_child_entry,
                position,
                size,
                processed
            );
        };
    }
    return _cached_decoder_for_BodyPartDescriptor(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_BodyPartDescriptor */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_BodyPartDescriptor */
let _cached_encoder_for_BodyPartDescriptor: $.ASN1Encoder<BodyPartDescriptor> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_BodyPartDescriptor */

/* START_OF_SYMBOL_DEFINITION _encode_BodyPartDescriptor */
/**
 * @summary Encodes a(n) BodyPartDescriptor into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BodyPartDescriptor, encoded as an ASN.1 Element.
 */
export function _encode_BodyPartDescriptor(
    value: BodyPartDescriptor,
    elGetter: $.ASN1Encoder<BodyPartDescriptor>
) {
    if (!_cached_encoder_for_BodyPartDescriptor) {
        _cached_encoder_for_BodyPartDescriptor = function (
            value: BodyPartDescriptor,
            elGetter: $.ASN1Encoder<BodyPartDescriptor>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ $._encode_implicit(
                            _TagClass.context,
                            0,
                            () => $._encodeObjectIdentifier,
                            $.BER
                        )(value.data, $.BER),
                        /* IF_ABSENT  */ value.parameters === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  1,
                                  () => $._encodeObjectIdentifier,
                                  $.BER
                              )(value.parameters, $.BER),
                        /* IF_ABSENT  */ value.this_child_entry === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  2,
                                  () => _encode_SequenceNumber,
                                  $.BER
                              )(value.this_child_entry, $.BER),
                        /* REQUIRED   */ $._encode_implicit(
                            _TagClass.context,
                            3,
                            () => $._encodeInteger,
                            $.BER
                        )(value.position, $.BER),
                        /* REQUIRED   */ $._encode_implicit(
                            _TagClass.context,
                            4,
                            () => $._encodeInteger,
                            $.BER
                        )(value.size, $.BER),
                        /* IF_DEFAULT */ value.processed === undefined ||
                        $.deepEq(
                            value.processed,
                            BodyPartDescriptor._default_value_for_processed
                        )
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  5,
                                  () => $._encodeBoolean,
                                  $.BER
                              )(value.processed, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_BodyPartDescriptor(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_BodyPartDescriptor */

/* eslint-enable */
