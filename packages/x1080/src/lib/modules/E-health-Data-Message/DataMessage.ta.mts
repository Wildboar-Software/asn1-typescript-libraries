/* eslint-disable */
import {
    OPTIONAL,
    OBJECT_IDENTIFIER,
    REAL,
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
    NormalValues,
    _decode_NormalValues,
    _encode_NormalValues,
} from '../E-health-Data-Message/NormalValues.ta.mjs';

/**
 * @summary DataMessage
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DataMessage{QUANTITY:Quantities} ::= SEQUENCE {
 *   quantity      QUANTITY.&id({Quantities}),
 *   unit          UNIT.&id({Quantities.&Units}) OPTIONAL,
 *   symbol        SYMBOLS.&id({Quantities.&Units.&symbols}) OPTIONAL,
 *   method        OBJECT IDENTIFIER,
 *   value         REAL,
 *   normalValues  NormalValues OPTIONAL,
 *   ...
 * }
 * ```
 *
 */
export class DataMessage {
    constructor(
        /**
         * @summary `quantity`.
         * @public
         * @readonly
         */
        readonly quantity: OBJECT_IDENTIFIER,
        /**
         * @summary `unit`.
         * @public
         * @readonly
         */
        readonly unit: OPTIONAL<OBJECT_IDENTIFIER>,
        /**
         * @summary `symbol_`.
         * @public
         * @readonly
         */
        readonly symbol_: OPTIONAL<OBJECT_IDENTIFIER>,
        /**
         * @summary `method`.
         * @public
         * @readonly
         */
        readonly method: OBJECT_IDENTIFIER,
        /**
         * @summary `value`.
         * @public
         * @readonly
         */
        readonly value: REAL,
        /**
         * @summary `normalValues`.
         * @public
         * @readonly
         */
        readonly normalValues: OPTIONAL<NormalValues>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a DataMessage
     * @description
     *
     * This takes an `object` and converts it to a `DataMessage`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `DataMessage`.
     * @returns {DataMessage}
     */
    public static _from_object(
        _o: { [_K in keyof DataMessage]: DataMessage[_K] }
    ): DataMessage {
        return new DataMessage(
            _o.quantity,
            _o.unit,
            _o.symbol_,
            _o.method,
            _o.value,
            _o.normalValues,
            _o._unrecognizedExtensionsList
        );
    }
}


/**
 * @summary The Leading Root Component Types of DataMessage
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_DataMessage: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'quantity',
        false,
        $.hasTag(_TagClass.context, 0)
    ),
    new $.ComponentSpec(
        'unit',
        true,
        $.hasTag(_TagClass.context, 1)
    ),
    new $.ComponentSpec(
        'symbol',
        true,
        $.hasTag(_TagClass.context, 2)
    ),
    new $.ComponentSpec(
        'method',
        false,
        $.hasTag(_TagClass.context, 3)
    ),
    new $.ComponentSpec(
        'value',
        false,
        $.hasTag(_TagClass.context, 4)
    ),
    new $.ComponentSpec(
        'normalValues',
        true,
        $.hasTag(_TagClass.context, 5)
    ),
];


/**
 * @summary The Trailing Root Component Types of DataMessage
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_DataMessage: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of DataMessage
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_DataMessage: $.ComponentSpec[] = [];


let _cached_decoder_for_DataMessage: $.ASN1Decoder<DataMessage> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) DataMessage
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DataMessage} The decoded data structure.
 */
export function _decode_DataMessage(el: _Element): DataMessage {
    if (!_cached_decoder_for_DataMessage) {
        _cached_decoder_for_DataMessage = function (el: _Element): DataMessage {
            let quantity!: OBJECT_IDENTIFIER;
            let unit: OPTIONAL<OBJECT_IDENTIFIER>;
            let symbol_: OPTIONAL<OBJECT_IDENTIFIER>;
            let method!: OBJECT_IDENTIFIER;
            let value!: REAL;
            let normalValues: OPTIONAL<NormalValues>;
            let _unrecognizedExtensionsList: _Element[] = [];
            const callbacks: $.DecodingMap = {
                quantity: (_el: _Element): void => {
                    quantity = $._decodeObjectIdentifier(_el);
                },
                unit: (_el: _Element): void => {
                    unit = $._decodeObjectIdentifier(_el);
                },
                symbol: (_el: _Element): void => {
                    symbol_ = $._decodeObjectIdentifier(_el);
                },
                method: (_el: _Element): void => {
                    method = $._decodeObjectIdentifier(_el);
                },
                value: (_el: _Element): void => {
                    value = $._decodeReal(_el);
                },
                normalValues: (_el: _Element): void => {
                    normalValues = _decode_NormalValues(_el);
                },
            };
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_DataMessage,
                _extension_additions_list_spec_for_DataMessage,
                _root_component_type_list_2_spec_for_DataMessage,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new DataMessage (
                quantity,
                unit,
                symbol_,
                method,
                value,
                normalValues,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_DataMessage(el);
}


let _cached_encoder_for_DataMessage: $.ASN1Encoder<DataMessage> | null = null;


/**
 * @summary Encodes a(n) DataMessage into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DataMessage, encoded as an ASN.1 Element.
 */
export function _encode_DataMessage(
    value: DataMessage,
    elGetter: $.ASN1Encoder<DataMessage>
): _Element {
    if (!_cached_encoder_for_DataMessage) {
        _cached_encoder_for_DataMessage = function (
            value: DataMessage        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ $._encodeObjectIdentifier(
                                value.quantity,
                                $.BER
                            ),
                            /* IF_ABSENT  */ value.unit === undefined
                                ? undefined
                                : $._encodeObjectIdentifier(value.unit, $.BER),
                            /* IF_ABSENT  */ value.symbol_ === undefined
                                ? undefined
                                : $._encodeObjectIdentifier(
                                      value.symbol_,
                                      $.BER
                                  ),
                            /* REQUIRED   */ $._encodeObjectIdentifier(
                                value.method,
                                $.BER
                            ),
                            /* REQUIRED   */ $._encodeReal(value.value, $.BER),
                            /* IF_ABSENT  */ value.normalValues === undefined
                                ? undefined
                                : _encode_NormalValues(
                                      value.normalValues,
                                      $.BER
                                  ),
                        ],
                        value._unrecognizedExtensionsList
                            ? value._unrecognizedExtensionsList
                            : []
                    )
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_DataMessage(value, elGetter);
}


/* eslint-enable */
