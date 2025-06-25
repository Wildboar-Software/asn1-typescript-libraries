/* eslint-disable */
import {
    OPTIONAL,
    GraphicString,
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


/**
 * @summary PortIDType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PortIDType ::= SEQUENCE {
 *   managedElement  [0]  GraphicString,
 *   bay             [1]  GraphicString OPTIONAL,
 *   shelf           [2]  GraphicString OPTIONAL,
 *   drawer          [3]  GraphicString OPTIONAL,
 *   slot            [4]  GraphicString OPTIONAL,
 *   port            [5]  GraphicString
 * }
 * ```
 *
 * @class
 */
export class PortIDType {
    constructor(
        /**
         * @summary `managedElement`.
         * @public
         * @readonly
         */
        readonly managedElement: GraphicString,
        /**
         * @summary `bay`.
         * @public
         * @readonly
         */
        readonly bay: OPTIONAL<GraphicString>,
        /**
         * @summary `shelf`.
         * @public
         * @readonly
         */
        readonly shelf: OPTIONAL<GraphicString>,
        /**
         * @summary `drawer`.
         * @public
         * @readonly
         */
        readonly drawer: OPTIONAL<GraphicString>,
        /**
         * @summary `slot`.
         * @public
         * @readonly
         */
        readonly slot: OPTIONAL<GraphicString>,
        /**
         * @summary `port`.
         * @public
         * @readonly
         */
        readonly port: GraphicString
    ) {}

    /**
     * @summary Restructures an object into a PortIDType
     * @description
     *
     * This takes an `object` and converts it to a `PortIDType`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `PortIDType`.
     * @returns {PortIDType}
     */
    public static _from_object(
        _o: { [_K in keyof PortIDType]: PortIDType[_K] }
    ): PortIDType {
        return new PortIDType(
            _o.managedElement,
            _o.bay,
            _o.shelf,
            _o.drawer,
            _o.slot,
            _o.port
        );
    }
}


/**
 * @summary The Leading Root Component Types of PortIDType
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_PortIDType: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'managedElement',
        false,
        $.hasTag(_TagClass.context, 0)
    ),
    new $.ComponentSpec(
        'bay',
        true,
        $.hasTag(_TagClass.context, 1)
    ),
    new $.ComponentSpec(
        'shelf',
        true,
        $.hasTag(_TagClass.context, 2)
    ),
    new $.ComponentSpec(
        'drawer',
        true,
        $.hasTag(_TagClass.context, 3)
    ),
    new $.ComponentSpec(
        'slot',
        true,
        $.hasTag(_TagClass.context, 4)
    ),
    new $.ComponentSpec(
        'port',
        false,
        $.hasTag(_TagClass.context, 5)
    ),
];


/**
 * @summary The Trailing Root Component Types of PortIDType
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_PortIDType: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of PortIDType
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_PortIDType: $.ComponentSpec[] = [];


let _cached_decoder_for_PortIDType: $.ASN1Decoder<PortIDType> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) PortIDType
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {PortIDType} The decoded data structure.
 */
export function _decode_PortIDType(el: _Element): PortIDType {
    if (!_cached_decoder_for_PortIDType) {
        _cached_decoder_for_PortIDType = function (el: _Element): PortIDType {
            let managedElement!: GraphicString;
            let bay: OPTIONAL<GraphicString>;
            let shelf: OPTIONAL<GraphicString>;
            let drawer: OPTIONAL<GraphicString>;
            let slot: OPTIONAL<GraphicString>;
            let port!: GraphicString;
            const callbacks: $.DecodingMap = {
                managedElement: (_el: _Element): void => {
                    managedElement = $._decode_implicit<GraphicString>(
                        () => $._decodeGraphicString
                    )(_el);
                },
                bay: (_el: _Element): void => {
                    bay = $._decode_implicit<GraphicString>(
                        () => $._decodeGraphicString
                    )(_el);
                },
                shelf: (_el: _Element): void => {
                    shelf = $._decode_implicit<GraphicString>(
                        () => $._decodeGraphicString
                    )(_el);
                },
                drawer: (_el: _Element): void => {
                    drawer = $._decode_implicit<GraphicString>(
                        () => $._decodeGraphicString
                    )(_el);
                },
                slot: (_el: _Element): void => {
                    slot = $._decode_implicit<GraphicString>(
                        () => $._decodeGraphicString
                    )(_el);
                },
                port: (_el: _Element): void => {
                    port = $._decode_implicit<GraphicString>(
                        () => $._decodeGraphicString
                    )(_el);
                },
            };
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_PortIDType,
                _extension_additions_list_spec_for_PortIDType,
                _root_component_type_list_2_spec_for_PortIDType,
                undefined
            );
            return new PortIDType (
                managedElement,
                bay,
                shelf,
                drawer,
                slot,
                port
            );
        };
    }
    return _cached_decoder_for_PortIDType(el);
}


let _cached_encoder_for_PortIDType: $.ASN1Encoder<PortIDType> | null = null;


/**
 * @summary Encodes a(n) PortIDType into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PortIDType, encoded as an ASN.1 Element.
 */
export function _encode_PortIDType(
    value: PortIDType,
    elGetter: $.ASN1Encoder<PortIDType>
): _Element {
    if (!_cached_encoder_for_PortIDType) {
        _cached_encoder_for_PortIDType = function (
            value: PortIDType        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ $._encode_implicit(
                            _TagClass.context,
                            0,
                            () => $._encodeGraphicString,
                            $.BER
                        )(value.managedElement, $.BER),
                        /* IF_ABSENT  */ value.bay === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  1,
                                  () => $._encodeGraphicString,
                                  $.BER
                              )(value.bay, $.BER),
                        /* IF_ABSENT  */ value.shelf === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  2,
                                  () => $._encodeGraphicString,
                                  $.BER
                              )(value.shelf, $.BER),
                        /* IF_ABSENT  */ value.drawer === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  3,
                                  () => $._encodeGraphicString,
                                  $.BER
                              )(value.drawer, $.BER),
                        /* IF_ABSENT  */ value.slot === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  4,
                                  () => $._encodeGraphicString,
                                  $.BER
                              )(value.slot, $.BER),
                        /* REQUIRED   */ $._encode_implicit(
                            _TagClass.context,
                            5,
                            () => $._encodeGraphicString,
                            $.BER
                        )(value.port, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_PortIDType(value, elGetter);
}


/* eslint-enable */
