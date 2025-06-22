/* eslint-disable */
import {
    EXTERNAL,
    IA5String,
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
 * @summary GenericMessageId
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * GenericMessageId ::= SEQUENCE {
 *   displayFormat  IA5String,
 *   typedFormat    EXTERNAL
 * }
 * ```
 *
 * @class
 */
export class GenericMessageId {
    constructor(
        /**
         * @summary `displayFormat`.
         * @public
         * @readonly
         */
        readonly displayFormat: IA5String,
        /**
         * @summary `typedFormat`.
         * @public
         * @readonly
         */
        readonly typedFormat: EXTERNAL
    ) {}

    /**
     * @summary Restructures an object into a GenericMessageId
     * @description
     *
     * This takes an `object` and converts it to a `GenericMessageId`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `GenericMessageId`.
     * @returns {GenericMessageId}
     */
    public static _from_object(
        _o: { [_K in keyof GenericMessageId]: GenericMessageId[_K] }
    ): GenericMessageId {
        return new GenericMessageId(_o.displayFormat, _o.typedFormat);
    }
}

/**
 * @summary The Leading Root Component Types of GenericMessageId
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_GenericMessageId: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'displayFormat',
        false,
        $.hasTag(_TagClass.universal, 22)
    ),
    new $.ComponentSpec(
        'typedFormat',
        false,
        $.hasTag(_TagClass.universal, 8)
    ),
];

/**
 * @summary The Trailing Root Component Types of GenericMessageId
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_GenericMessageId: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of GenericMessageId
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_GenericMessageId: $.ComponentSpec[] = [];

let _cached_decoder_for_GenericMessageId: $.ASN1Decoder<GenericMessageId> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) GenericMessageId
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {GenericMessageId} The decoded data structure.
 */
export function _decode_GenericMessageId(el: _Element) {
    if (!_cached_decoder_for_GenericMessageId) {
        _cached_decoder_for_GenericMessageId = function (
            el: _Element
        ): GenericMessageId {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    'GenericMessageId contained only ' +
                        sequence.length.toString() +
                        ' elements.'
                );
            }
            sequence[0].name = 'displayFormat';
            sequence[1].name = 'typedFormat';
            let displayFormat!: IA5String;
            let typedFormat!: EXTERNAL;
            displayFormat = $._decodeIA5String(sequence[0]);
            typedFormat = $._decodeExternal(sequence[1]);
            return new GenericMessageId(displayFormat, typedFormat);
        };
    }
    return _cached_decoder_for_GenericMessageId(el);
}

let _cached_encoder_for_GenericMessageId: $.ASN1Encoder<GenericMessageId> | null = null;

/**
 * @summary Encodes a(n) GenericMessageId into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GenericMessageId, encoded as an ASN.1 Element.
 */
export function _encode_GenericMessageId(
    value: GenericMessageId,
    elGetter: $.ASN1Encoder<GenericMessageId>
) {
    if (!_cached_encoder_for_GenericMessageId) {
        _cached_encoder_for_GenericMessageId = function (
            value: GenericMessageId        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ $._encodeIA5String(
                            value.displayFormat,
                            $.BER
                        ),
                        /* REQUIRED   */ $._encodeExternal(
                            value.typedFormat,
                            $.BER
                        ),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_GenericMessageId(value, elGetter);
}


/* eslint-enable */
